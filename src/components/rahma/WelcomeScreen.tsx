
'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

export function WelcomeScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-background">
      <Card className="max-w-2xl p-8 shadow-2xl animate-fade-in-up">
        <CardContent className="flex flex-col items-center gap-6">
            <Image 
                src="/al-huda.jpeg"
                alt="Al-Huda Logo"
                width={100}
                height={100}
                className="rounded-full border-4 border-primary"
            />
          <h1 className="text-2xl font-bold font-headline text-primary">
            ಡಿಜಿಟಲ್ ಕುರ್‌ಆನ್‌ಗೆ ಸುಸ್ವಾಗತ
          </h1>
          <p className="text-lg leading-relaxed text-foreground">
            ಈ AI ಅಪ್ಲಿಕೇಶನ್ ಅಭಿವೃದ್ಧಿಯ ಉದ್ದೇಶವು ಡಿಜಿಟಲ್ ಕುರ್‌ಆನ್ ಅನ್ನು ಎಲ್ಲರಿಗೂ ಲಭ್ಯವಾಗುವಂತೆ ಮಾಡುವುದಾಗಿದೆ. ಇದನ್ನು ಸಾಧ್ಯವಾಗಿಸಲು ನಿಮ್ಮ ಸಹಾಯ ಮತ್ತು ಸಹಕಾರವೇ ನಮ್ಮ ಶಕ್ತಿ.
          </p>
          <p className="text-base font-semibold text-muted-foreground">
            ಈ ಮಹತ್ ಕಾರ್ಯಕ್ಕಾಗಿ ಸಹಾಯ ಮಾಡಲು ಇಚ್ಛಿಸಿದರೆ, ಸಂಪರ್ಕಿಸಿ:
            <br />
            <span className="font-bold text-primary">SPR AI ಎಜುಟೆಕ್, ಕರ್ನಾಟಕ ಬ್ಯಾಂಕ್ ಹಿಂದೆ, ಹೊಸದುರ್ಗ</span>
          </p>
           <Button onClick={onEnter} className="mt-4">ಪ್ರವೇಶಿಸಿ</Button>
        </CardContent>
      </Card>
    </div>
  );
}
