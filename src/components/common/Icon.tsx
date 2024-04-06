import React from 'react';

interface IconProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ src, alt, onClick }) => {
  return (
    <div className="icon" onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Icon;
