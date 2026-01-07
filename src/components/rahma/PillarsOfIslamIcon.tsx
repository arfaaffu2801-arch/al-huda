import { cn } from '@/lib/utils';
import React from 'react';

export function PillarsOfIslamIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M8 44V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V44H8Z"
        fill="#5BE4AE"
      />
      <path
        d="M19 44V12C19 10.8954 19.8954 10 21 10H25C26.1046 10 27 10.8954 27 12V44H19Z"
        fill="#00A76F"
      />
      <path
        d="M30 44V18C30 16.8954 30.8954 16 32 16H36C37.1046 16 38 16.8954 38 18V44H30Z"
        fill="#FFC107"
      />
      <path
        d="M4 44H44"
        stroke="#212121"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
