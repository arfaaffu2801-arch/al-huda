'use client';

import { cn } from '@/lib/utils';
import React from 'react';

export function JummahIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M39 14H9C7.34315 14 6 15.3431 6 17V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V17C42 15.3431 40.6569 14 39 14Z"
        fill="#5BE4AE"
      ></path>
      <path
        d="M36 8H12C10.3431 8 9 9.34315 9 11V14H39V11C39 9.34315 37.6569 8 36 8Z"
        fill="#00A76F"
      ></path>
      <path
        d="M16 6V10"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M32 6V10"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M24 22L24 34"
        stroke="#FFC107"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M18 28L30 28"
        stroke="#FFC107"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}
