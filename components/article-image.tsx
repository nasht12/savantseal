import React from 'react';

interface ArticleImageProps {
  imageId: string;
}

const ArticleImage: React.FC<ArticleImageProps> = ({ imageId }) => {
  // Construct the image path using the imageId. Adjust as needed.
  const imagePath = `/images/${imageId}.jpg`;

  return (
    <img src={imagePath} alt="Article Related" className="w-80 h-48" />
  );
}

export default ArticleImage;
