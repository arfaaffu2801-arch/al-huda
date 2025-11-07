import { cn } from '@/lib/utils';
import React from 'react';

export function AzkarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M39,34.002C39,34.002,39,38,35,38C31,38,31,34,31,34"
        stroke="#FFC107"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M17,34.002C17,34.002,17,38,13,38C9,38,9,34,9,34"
        stroke="#FFC107"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M42,17.4721V38.5C42,39.8807,40.8807,41,39.5,41H8.5C7.11929,41,6,39.8807,6,38.5V17.4721C6,16.5963,6.4859,15.7963,7.24587,15.3524L22.2459,7.35243C23.361,6.71457,24.639,6.71457,25.7541,7.35243L40.7541,15.3524C41.5141,15.7963,42,16.5963,42,17.4721Z"
        fill="#5BE4AE"
      ></path>
      <path
        d="M24 16L40 25V39H8V25L24 16Z"
        fill="#00A76F"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinejoin="round"
      ></path>
      <path
        d="M33 16C33 18.2536 33.053 20.3542 32.7495 22.2038C32.6517 22.8465 32.062 23.3284 31.4087 23.3284H16.5913C15.938 23.3284 15.3483 22.8465 15.2505 22.2038C14.947 20.3542 15 18.2536 15 16"
        stroke="#FFC107"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}
