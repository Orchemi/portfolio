interface PanmnesiaMetaDataProps {
  title: string;
  description: string;
  url: string;
}

export const generatePanmnesiaMetadata = ({ title, description, url }: PanmnesiaMetaDataProps) => {
  return {
    title,
    description,

    openGraph: {
      locale: 'en',
      title,
      description,
      url,
      siteName: 'Panmnesia',
      images: [
        {
          url: 'https://panmnesia.com/logo.png',
          width: 800,
          height: 600,
          alt: 'Panmnesia',
        },
      ],
    },
    twitter: {
      title: 'Main',
      card: 'summary_large_image',
      images: [
        {
          url: 'https://panmnesia.com/logo.png',
          width: 800,
          height: 600,
          alt: 'Panmnesia',
        },
      ],
    },
  };
};
