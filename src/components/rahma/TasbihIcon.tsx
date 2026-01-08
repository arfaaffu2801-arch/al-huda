'use client';

import { cn } from '@/lib/utils';
import React from 'react';

export function TasbihIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M36.62 25.54C36.62 25.54 34.4 22.82 31.52 22.82C28.64 22.82 26.42 25.54 26.42 25.54"
        stroke="#FFC107"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M26.42 16.54C26.42 16.54 28.64 19.26 31.52 19.26C34.4 19.26 36.62 16.54 36.62 16.54"
        stroke="#FFC107"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.54 13.52C14.76 13.52 12.5 15.78 12.5 18.56C12.5 21.34 14.76 23.6 17.54 23.6C18.96 23.6 20.24 22.98 21.14 22V24.64C21.14 26.3 22.48 27.64 24.14 27.64H31.52C34.4 27.64 36.62 29.86 36.62 32.74V36.62H12.5V32.74C12.5 28.9 15.58 25.82 19.34 25.82H21.14V22C20.24 21.02 18.96 20.4 17.54 20.4C16.12 20.4 14.84 21.02 13.94 22V15.74C13.94 14.52 14.92 13.52 16.14 13.52H17.54Z"
        fill="#5BE4AE"
      ></path>
      <path
        d="M19.34 25.82H21.14V22C20.24 21.02 18.96 20.4 17.54 20.4C16.12 20.4 14.84 21.02 13.94 22V15.74C13.94 14.52 14.92 13.52 16.14 13.52H17.54C20.32 13.52 22.58 15.78 22.58 18.56C22.58 20.22 21.86 21.72 20.74 22.74"
        stroke="#00A76F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M21.14 24.64V22"
        stroke="#00A76F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M28.7 36.62V38.5C28.7 40.16 27.36 41.5 25.7 41.5C24.04 41.5 22.7 40.16 22.7 38.5V36.62"
        stroke="#FFC107"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M25.7 41.5V43"
        stroke="#FFC107"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M22.7 43H28.7"
        stroke="#FFC107"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}
