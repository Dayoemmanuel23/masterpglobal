import React from 'react';

export const MPLogo = ({ className = "h-12 w-auto" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="
      M 16 12 
      L 34 12 
      L 34 32
      L 48 48
      L 62 32
      L 62 12
      L 76 12
      C 94 12, 94 44, 76 44
      L 62 44
      L 62 70
      L 48 86
      L 16 52
      Z
      
      M 62 24
      L 72 24
      C 80 24, 80 34, 72 34
      L 62 34
      Z
    " />
  </svg>
);
