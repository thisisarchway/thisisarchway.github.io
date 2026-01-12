import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface StaggeredTextProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggeredText = ({
  children,
  className = '',
  staggerDelay = 50
}: StaggeredTextProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const text = String(children);
  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block mr-2 md:mr-3 lg:mr-4 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: `${index * staggerDelay}ms`
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
};
