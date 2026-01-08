'use client';

import { cn } from '@/lib/utils';
import React from 'react';

export function QiblaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
        fill="#5BE4AE"
      ></path>
      <path
        d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"
        fill="#E4F6F0"
      ></path>
      <path
        d="M32.0011 31.9996L24.0001 11.9996L16.0011 31.9996L24.0001 25.9996L32.0011 31.9996Z"
        fill="#FFC107"
      ></path>
      <path
        d="M24 12L19 30L24 26L29 30L24 12Z"
        fill="#FFAB00"
      ></path>
      <path
        d="M27 24C27 25.6569 25.6569 27 24 27C22.3431 27 21 25.6569 21 24C21 22.3431 22.3431 21 24 21C25.6569 21 27 22.3431 27 24Z"
        fill="#00A76F"
      ></path>
    </svg>
  );
}
