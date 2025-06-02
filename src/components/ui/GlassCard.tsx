import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '',
  hoverable = false,
}) => {
  return (
    <div 
      className={`
        glass rounded-2xl shadow-glass p-6
        ${hoverable ? 'hover:shadow-glass-hover transform transition-all duration-300 hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;