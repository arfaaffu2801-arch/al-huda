'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TrackerIcon } from './TrackerIcon';
import { useLanguage } from '@/context/LanguageContext';

export function Tracker() {
  const { language } = useLanguage();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <TrackerIcon className="h-6 w-6 text-primary" />
          {language === 'kn' ? 'ನಮಾಝ್ ಟ್ರ್ಯಾಕರ್' : 'Prayer Tracker'}
        </CardTitle>
        <CardDescription>
          {language === 'kn'
            ? 'ನಿಮ್ಮ ದೈನಂದಿನ ನಮಾಝ್‌ಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ಸ್ಥಿರವಾಗಿರಿ.'
            : 'Track your daily prayers and stay consistent.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-[400px] items-center justify-center rounded-lg border-2 border-dashed bg-secondary/30">
          <p className="text-muted-foreground">
            {language === 'kn' ? 'ನಮಾಝ್ ಟ್ರ್ಯಾಕರ್ ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ...' : 'Prayer Tracker Coming Soon...'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
