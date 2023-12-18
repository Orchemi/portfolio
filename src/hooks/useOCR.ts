import { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

interface IProps {
  imageUrl: string;
}

export default function useOCR({ imageUrl }: IProps) {
  const [recognizedText, setRecognizedText] = useState<string>('');

  useEffect(() => {
    const recognizeText = async () => {
      if (!imageUrl) return;
      const result = await Tesseract.recognize(imageUrl);
      setRecognizedText(result.data.text);
    };
    recognizeText();
  }, [imageUrl]);

  return { recognizedText };
}
