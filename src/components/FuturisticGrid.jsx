import React from 'react';

export const FuturisticGrid = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 1px, hsl(var(--primary) / 0.05) 1px, hsl(var(--primary) / 0.05) 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, hsl(var(--primary) / 0.05) 1px, hsl(var(--primary) / 0.05) 2px)',
        backgroundSize: '40px 40px',
      }}
    />
  );
};
