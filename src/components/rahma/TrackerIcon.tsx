'use client';

import { cn } from '@/lib/utils';
import React from 'react';

export function TrackerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M10 14H38V40C38 41.1046 37.1046 42 36 42H12C10.8954 42 10 41.1046 10 40V14Z"
        fill="#5BE4AE"
      ></path>
      <path
        d="M38 14H10V20H38V14Z"
        fill="#00A76F"
      ></path>
      <path
        d="M14 10V16"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M34 10V16"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M8 10H40C41.1046 10 42 10.8954 42 12V18H6V12C6 10.8954 6.89543 10 8 10Z"
        fill="#5BE4AE"
      ></path>
      <path
        d="M27.5 25C27.5 24.1716 26.8284 23.5 26 23.5C25.1716 23.5 24.5 24.1716 24.5 25V28H23.5V25C23.5 24.1716 22.8284 23.5 22 23.5C21.1716 23.5 20.5 24.1716 20.5 25V33C20.5 33.8284 21.1716 34.5 22 34.5C22.8284 34.5 23.5 33.8284 23.5 33V30H24.5V33C24.5 33.8284 25.1716 34.5 26 34.5C26.8284 34.5 27.5 33.8284 27.5 33V25Z"
        fill="#FFC107"
      ></path>
      <path
        d="M24 38C25.3807 38 26.5 36.8807 26.5 35.5C26.5 34.1193 25.3807 33 24 33C22.6193 33 21.5 34.1193 21.5 35.5C21.5 36.8807 22.6193 38 24 38Z"
        fill="#FFC107"
      ></path>
    </svg>
  );
}
