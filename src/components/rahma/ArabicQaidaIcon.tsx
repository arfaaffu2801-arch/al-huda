import { cn } from '@/lib/utils';
import React from 'react';

export function ArabicQaidaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
        <path d="M10 42C10 38.6863 12.6863 36 16 36H42V8C42 7.44772 41.5523 7 41 7H13C9.13401 7 6 10.134 6 14V42H10Z" fill="#5BE4AE"></path>
        <path d="M38 42C38 38.6863 35.3137 36 32 36H6V8C6 7.44772 6.44772 7 7 7H35C38.866 7 42 10.134 42 14V42H38Z" fill="#00A76F"></path>
        <text x="14" y="32" fontFamily="Arial, sans-serif" fontSize="24" fill="#FFFFFF">ا</text>
        <text x="26" y="32" fontFamily="Arial, sans-serif" fontSize="24" fill="#FFFFFF">ب</text>
    </svg>
  );
}
