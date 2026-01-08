'use client';

import { cn } from '@/lib/utils';
import React from 'react';

export function HadisIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M8 6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6Z"
        fill="#5BE4AE"
      />
      <path
        d="M14 14H34"
        stroke="#00A76F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 22H34"
        stroke="#00A76F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 30H24"
        stroke="#00A76F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 38H30"
        stroke="#FFF"
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
