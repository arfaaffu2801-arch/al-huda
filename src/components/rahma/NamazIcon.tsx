import { cn } from '@/lib/utils';
import React from 'react';

export function NamazIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
        <path d="M40,14H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V18C44,15.8,42.2,14,40,14z" fill="#5BE4AE"/>
        <path d="M38,6H10c-2.2,0-4,1.8-4,4v4h36v-4C42,7.8,40.2,6,38,6z" fill="#00A76F"/>
        <path d="M14,4v4" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34,4v4" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24,22c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S28.4,22,24,22z" fill="#FFC107"/>
        <path d="M24,24v6h4" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
