'use client';

import useOCR from '@/hooks/useOCR';
import { Nullable } from '@/types/common';
import { useState } from 'react';

export default function MidasMenuImageUploader() {
  const [imageUrl, setImageUrl] = useState<Nullable<string>>(null);
  const { recognizedText: _text } = useOCR({ imageUrl: imageUrl ?? '' });

  const handleUploadImage = (e: any) => {
    const imageFile = e.target.files[0];
    const newImageUrl = URL.createObjectURL(imageFile);
    setImageUrl(newImageUrl);
  };

  return (
    <div>
      <input type={'file'} accept={'image/*'} onChange={handleUploadImage} />
      {imageUrl && (
        <>
          <div>{_text}</div>
          <img src={imageUrl} alt={'image'} />
        </>
      )}
    </div>
  );
}
