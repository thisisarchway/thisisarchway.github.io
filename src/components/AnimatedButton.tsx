import React from 'react';
import { Link } from 'react-router-dom';

interface AnimatedButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  gifUrl?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  to,
  href,
  children,
  onClick,
  className = '',
  type = 'button',
  gifUrl = 'https://i.imgur.com/bLzVZKt.gif'
}) => {
  const baseClassName = `inline-block bg-white text-black px-10 py-4 font-light text-base tracking-wider hover:bg-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-500 rounded-lg relative overflow-hidden group [&:hover_.hover-text-target]:text-white ${className}`;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundImage = `url('${gifUrl}')`;
    e.currentTarget.style.backgroundSize = 'cover';
    e.currentTarget.style.backgroundPosition = 'center';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundImage = 'none';
  };

  const content = (
    <span className="relative z-10 text-black hover-text-target transition-colors duration-500">
      {children}
    </span>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={baseClassName}
        style={{ backgroundImage: 'none' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClassName}
        style={{ backgroundImage: 'none' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClassName}
      style={{ backgroundImage: 'none' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
};

export default AnimatedButton;
