
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
import Image from 'next/image';

const tasbihOptions = [
  { text: 'Astaghfirullah', arabic: 'أَسْتَغْفِرُ اللّٰهَ', target: 100 },
  { text: 'SubhanAllah', arabic: 'سُبْحَانَ اللّٰهِ', target: 33 },
  { text: 'Alhamdulillah', arabic: 'الْحَمْدُ لِلّٰهِ', target: 33 },
  { text: 'Allahu Akbar', arabic: 'اللّٰهُ أَكْبَرُ', target: 33 },
  { text: 'La ilaha illallah', arabic: 'لَا إِلَٰهَ إِلَّا اللّٰهُ', target: 100 },
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

  const selectTasbih = (index: number) => {
    setCurrentTasbihIndex(index);
    setCount(0);
    setCycle(0);
  }

  return (
    <Card className="relative overflow-hidden">
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
      <CardContent className="flex flex-col items-center justify-center gap-6 p-8">
        <Image
          src="https://picsum.photos/seed/prayer-beads/600/400"
          alt="Tasbih background"
          fill
          className="absolute inset-0 z-0 object-cover opacity-10"
          data-ai-hint="prayer beads"
        />
        <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:items-center">
            <div className="flex flex-col items-center gap-4">
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
                <Button
                onClick={increment}
                className="h-24 w-24 rounded-full bg-primary/20 text-primary shadow-lg hover:bg-primary/30"
                >
                <span className="sr-only">Increment</span>
                </Button>
            </div>

            <div className="relative z-10 text-center md:text-left">
                <p className="font-headline text-5xl text-primary" dir="rtl">
                    {currentTasbih.arabic}
                </p>
                <p className="mt-2 text-3xl font-semibold text-foreground">
                    {currentTasbih.text}
                </p>
                {cycle > 0 && (
                    <p className="mt-4 text-sm text-muted-foreground">Cycle: {cycle}</p>
                )}
            </div>
        </div>
        <div className="relative z-10 mt-8 w-full max-w-md">
            <h3 className="mb-4 text-center text-lg font-semibold text-foreground">
                Available Tasbih
            </h3>
            <div className="space-y-2">
                {tasbihOptions.map((tasbih, index) => (
                    <button
                        key={index}
                        onClick={() => selectTasbih(index)}
                        className={`w-full rounded-lg border p-3 text-left transition-colors ${
                            index === currentTasbihIndex
                            ? 'border-primary bg-primary/10'
                            : 'bg-secondary/30 hover:bg-secondary/50'
                        }`}
                    >
                        <p className="font-semibold">{tasbih.text} ({tasbih.target})</p>
                        <p className="text-sm text-muted-foreground" dir="rtl">{tasbih.arabic}</p>
                    </button>
                ))}
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
