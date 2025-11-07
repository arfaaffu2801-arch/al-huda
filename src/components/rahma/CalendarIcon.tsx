import { cn } from '@/lib/utils';
import React from 'react';

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M40 12H8C6.89543 12 6 12.8954 6 14V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V14C42 12.8954 41.1046 12 40 12Z"
        fill="#5BE4AE"
      ></path>
      <path
        d="M40 12H8V20H40V12Z"
        fill="#00A76F"
      ></path>
      <path
        d="M14 8V14"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M34 8V14"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M8 8H40C41.1046 8 42 8.89543 42 10V14H6V10C6 8.89543 6.89543 8 8 8Z"
        fill="#5BE4AE"
      ></path>
      <path
        d="M26.5 26C24.0147 26 22 28.2386 22 31C22 33.7614 24.0147 36 26.5 36C27.546 36 28.4633 35.6448 29.1383 35.0315C28.8167 35.1592 28.4599 35.25 28.0842 35.25C26.7544 35.25 25.6996 34.1952 25.6996 32.8654C25.6996 32.4897 25.7701 32.133 25.8978 31.8115C25.124 31.5251 24.5265 30.8311 24.3393 29.9871L24.3165 29.875H29.3165C29.3165 28.9085 28.5256 28.125 27.5591 28.125H26.5C26.5 27.4204 25.9404 26.8608 25.2426 26.8608C25.2835 26.5448 25.3552 26.25 25.5 26C25.8333 26 26.1552 26 26.5 26Z"
        fill="#FFC107"
      ></path>
      <path
        d="M31.5 30.5L30.75 29.75L30 30.5L30.75 31.25L31.5 30.5Z"
        fill="#FFC107"
      ></path>
    </svg>
  );
}
