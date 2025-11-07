'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, Repeat } from 'lucide-react';
import { useState } from 'react';
import { TasbihIcon } from './TasbihIcon';

const tasbihOptions = [
  { text: 'SubhanAllah', target: 33 },
  { text: 'Alhamdulillah', target: 33 },
  { text: 'Allahu Akbar', target: 33 },
  { text: 'La ilaha illallah', target: 100 },
  { text: 'Astaghfirullah', target: 100 },
];

export function TasbihCounter() {
  const [count, setCount] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [currentTasbihIndex, setCurrentTasbihIndex] = useState(0);
  const currentTasbih = tasbihOptions[currentTasbihIndex];

  const increment = () => {
    if (count + 1 >= currentTasbih.target) {
      if (currentTasbihIndex === tasbihOptions.length - 1) {
        setCycle(cycle + 1);
      }
      setCurrentTasbihIndex((currentTasbihIndex + 1) % tasbihOptions.length);
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const reset = () => {
    setCount(0);
    setCurrentTasbihIndex(0);
    setCycle(0);
  };

  const nextTasbih = () => {
    setCurrentTasbihIndex((prevIndex) => (prevIndex + 1) % tasbihOptions.length);
    setCount(0);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-headline">
            <TasbihIcon className="h-6 w-6 text-primary" />
            Tasbih Counter
          </div>
          <Button variant="ghost" size="icon" onClick={reset}>
            <RotateCcw className="h-4 w-4" />
          </Button>
        </CardTitle>
        <CardDescription>
          Click the circle to count your dhikr. It will automatically cycle
          through common tasbih.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-6">
        <div className="relative flex h-48 w-48 items-center justify-center">
          <svg className="absolute h-full w-full" viewBox="0 0 100 100">
            <circle
              className="text-secondary"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
            />
            <circle
              className="text-primary transition-all duration-300"
              strokeWidth="10"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
              strokeDasharray={2 * Math.PI * 45}
              strokeDashoffset={
                2 * Math.PI * 45 * (1 - count / currentTasbih.target)
              }
            />
          </svg>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{count}</span>
            <span className="text-muted-foreground">
              / {currentTasbih.target}
            </span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold font-headline">
            {currentTasbih.text}
          </p>
          {cycle > 0 && (
            <p className="text-sm text-muted-foreground">Cycle: {cycle}</p>
          )}
        </div>
        <Button
          onClick={increment}
          className="h-24 w-24 rounded-full bg-primary/20 text-primary shadow-lg hover:bg-primary/30"
        >
          <span className="sr-only">Increment</span>
        </Button>
      </CardContent>
    </Card>
  );
}
