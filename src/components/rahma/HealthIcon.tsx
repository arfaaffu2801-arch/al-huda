
import { cn } from '@/lib/utils';
import React from 'react';

export function HealthIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M39.16,15.54,24,4,8.84,15.54,4,24l20,20,20-20Z"
        fill="#5BE4AE"
      />
      <path
        d="M24,4,4,24l20,20,20-20Z"
        fill="#00A76F"
      />
      <path
        d="M24,29a8,8,0,0,1-8-8c0-4.42,8-12,8-12s8,7.58,8,12A8,8,0,0,1,24,29Z"
        fill="#FFFFFF"
      />
      <path
        d="M28 20h-3v-3a1 1 0 0 0-2 0v3h-3a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z"
        fill="#FFC107"
      />
    </svg>
  );
}
