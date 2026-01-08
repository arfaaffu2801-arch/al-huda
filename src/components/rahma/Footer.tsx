'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="w-full bg-card p-4 text-center border-t">
      <p className="text-sm text-muted-foreground">
        {language === 'kn'
          ? 'ಅರ್ಫಾ, SPR AI ಎಜುಟೆಕ್, ಹೊಸದುರ್ಗದಿಂದ ರಚಿಸಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ'
          : 'Created and designed by Arfa, SPR AI Edutech, Hosadurga'}
      </p>
    </footer>
  );
}
