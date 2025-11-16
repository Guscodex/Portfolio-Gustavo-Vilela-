import React, { useState, useRef } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';

interface ImageEditorProps {
  t: {
    title: string;
    subtitle: string;
    uploadLabel: string;
    uploadSublabel: string;
    promptPlaceholder: string;
    generateButton: string;
    generatingText: string;
    downloadButton: string;
    errorText: string;
    changeImageButton: string;
  };
}

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const ImageEditor: React.FC<ImageEditorProps> = ({ t }) => {
  const [originalImage, setOriginalImage] = useState<{ file: File; dataUrl: string } | null>(null);
  const [prompt, setPrompt] = useState('');
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit
          setError("Image size should be less than 4MB.");
          return;
      }
      const dataUrl = await fileToBase64(file);
      setOriginalImage({ file, dataUrl });
      setEditedImage(null);
      setError(null);
    }
  };

  const handleGenerate = async () => {
    if (!originalImage || !prompt) {
      setError("Please upload an image and provide a prompt.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setEditedImage(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = originalImage.dataUrl.split(',')[1];

      const imagePart = {
        inlineData: {
          data: base64Data,
          mimeType: originalImage.file.type,
        },
      };

      const textPart = { text: prompt };

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [imagePart, textPart] },
        config: {
          responseModalities: [Modality.IMAGE],
        },
      });

      let foundImage = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64ImageBytes: string = part.inlineData.data;
          const imageUrl = `data:image/png;base64,${base64ImageBytes}`;
          setEditedImage(imageUrl);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) {
          throw new Error("No image data returned from the API.");
      }

    } catch (err) {
      console.error(err);
      setError(t.errorText);
    } finally {
      setIsLoading(false);
    }
  };
  
  const reset = () => {
    setOriginalImage(null);
    setEditedImage(null);
    setPrompt('');
    setError(null);
    if(fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  return (
    <section id="image-editor" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-dark dark:text-neutral-light">{t.title}</h2>
          <p className="text-lg text-neutral-medium dark:text-gray-400 mt-2">{t.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto bg-neutral-light dark:bg-neutral-dark p-8 rounded-lg shadow-xl">
          {!originalImage ? (
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:hover:border-gray-500 dark:hover:bg-gray-600 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{t.uploadLabel}</span> {t.uploadSublabel}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, WEBP (MAX. 4MB)</p>
                    </div>
                    <input id="dropzone-file" ref={fileInputRef} type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={handleFileChange} />
                </label>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Controls and Original Image */}
              <div className="space-y-4">
                 <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative">
                    <img src={originalImage.dataUrl} alt="Original" className="w-full h-full object-contain" />
                 </div>
                 <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={t.promptPlaceholder}
                  className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue dark:text-white transition-colors"
                  rows={3}
                  disabled={isLoading}
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleGenerate}
                    disabled={isLoading || !prompt}
                    className="w-full flex-1 bg-brand-blue text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isLoading ? t.generatingText : t.generateButton}
                  </button>
                   <button
                    onClick={reset}
                    disabled={isLoading}
                    className="w-full sm:w-auto bg-neutral-dark text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 dark:bg-neutral-light dark:text-neutral-dark dark:hover:bg-gray-200 transition-all duration-300"
                  >
                    {t.changeImageButton}
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              </div>

              {/* Edited Image */}
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center relative">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 z-10">
                    <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="text-white mt-2">{t.generatingText}</p>
                  </div>
                )}
                {editedImage ? (
                    <>
                      <img src={editedImage} alt="Edited" className="w-full h-full object-contain" />
                      <a
                        href={editedImage}
                        download="edited-image.png"
                        className="absolute bottom-4 right-4 bg-brand-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 z-20"
                      >
                       {t.downloadButton}
                      </a>
                    </>
                ) : (
                    !isLoading && <p className="text-gray-500 dark:text-gray-400">Sua imagem editada aparecerá aqui</p>
                )}
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageEditor;