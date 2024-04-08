import React from 'react';
import BoldLabel from './BoldLabel';
import "../../styles/Icon.scss";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
  value?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ src, alt, className, value, onClick }) => {
  return (
    <div className={className ? className : "icon"} onClick={onClick}>
      <img src={src} alt={alt} />
      {value ? <BoldLabel value={value}/> : <></>}
    </div>
  );
};

export default Icon;
