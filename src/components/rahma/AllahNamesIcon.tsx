import { cn } from '@/lib/utils';
import React from 'react';

export function AllahNamesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z"
        fill="#5BE4AE"
      />
      <path
        d="M24.5 13H22L21.5 35H25L24.5 13Z"
        fill="#00A76F"
      />
      <path
        d="M28 17H25.5L25 35H28.5L28 17Z"
        fill="#00A76F"
      />
      <path
        d="M32 21H29.5L29 35H32.5L32 21Z"
        fill="#00A76F"
      />
      <path
        d="M17.5 13L16 15L20 19L18.5 21L14 16.5L13 17.5L18 22.5L19.5 21L15.5 17L17 15.5L21 19.5L22.5 18L17.5 13Z"
        fill="#FFF"
        fillOpacity="0.8"
      />
      <path
        d="M31.5 13C30.6716 13 30 13.6716 30 14.5C30 15.3284 30.6716 16 31.5 16C32.3284 16 33 15.3284 33 14.5C33 13.6716 32.3284 13 31.5 13Z"
        fill="#FFC107"
      />
    </svg>
  );
}
