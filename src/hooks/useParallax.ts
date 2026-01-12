import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  disabled?: boolean;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up', disabled = false } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = scrolled + rect.top;
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const distance = scrolled - elementTop;
        const multiplier = direction === 'up' ? -1 : 1;
        setOffset(distance * speed * multiplier);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction, disabled]);

  return { ref, offset };
};
