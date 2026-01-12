import { ReactNode } from 'react';
import { useMagneticHover } from '../hooks/useMagneticHover';

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticCard = ({ children, className = '', strength = 0.15 }: MagneticCardProps) => {
  const { ref, position } = useMagneticHover({ strength });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      {children}
    </div>
  );
};
