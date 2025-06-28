import React from 'react';

export const Vignette = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        boxShadow: 'inset 0 0 150px hsl(var(--background) / 0.9)',
      }}
    />
  );
};
