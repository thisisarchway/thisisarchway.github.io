import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale' | 'zoom' | 'blur' | 'rotate' | 'flip-up' | 'slide-up-fade';
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = ''
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
    'slide-left': 'opacity-0 -translate-x-8',
    'slide-right': 'opacity-0 translate-x-8',
    'scale': 'opacity-0 scale-95',
    'zoom': 'opacity-0 scale-150',
    'blur': 'opacity-0 blur-sm',
    'rotate': 'opacity-0 rotate-6',
    'flip-up': 'opacity-0 -rotate-x-90',
    'slide-up-fade': 'opacity-0 translate-y-12',
  };

  const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100 blur-0 rotate-0';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClasses : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
