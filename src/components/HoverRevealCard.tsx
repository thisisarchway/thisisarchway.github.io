import React, { ReactNode, useState } from 'react';

interface HoverRevealCardProps {
  title: string;
  backgroundImage: string;
  children: ReactNode;
  titleSize?: 'large' | 'small';
  minHeight?: string;
}

const HoverRevealCard: React.FC<HoverRevealCardProps> = ({
  title,
  backgroundImage,
  children,
  titleSize = 'large',
  minHeight = '200px'
}) => {
  const [isActive, setIsActive] = useState(false);

  const titleClasses = titleSize === 'large'
    ? 'text-4xl md:text-6xl font-light'
    : 'text-3xl md:text-4xl font-light';

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:bg-gray-800/60 hover:border-white transition-all duration-300 cursor-pointer group relative overflow-hidden flex items-center justify-center ${
        isActive ? 'bg-gray-800/60 border-white' : ''
      }`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className={`absolute inset-0 bg-black/70 group-hover:bg-black/85 transition-colors duration-300 ${
        isActive ? 'bg-black/85' : ''
      }`} />

      <h3 className={`${titleClasses} text-white text-center group-hover:scale-95 group-hover:translate-y-2 group-hover:opacity-0 transition-all duration-300 absolute inset-0 flex items-center justify-center tracking-wide px-4 leading-tight z-10 ${
        isActive ? 'scale-95 translate-y-2 opacity-0' : ''
      }`}>
        {title}
      </h3>

      <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full relative z-10 ${
        isActive ? 'opacity-100' : ''
      }`}>
        {children}
      </div>
    </div>
  );
};

export default HoverRevealCard;
