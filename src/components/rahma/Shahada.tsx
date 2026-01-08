'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';

const shahada = {
  arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
  transliteration: 'lā ʾilāha ʾillā-llāh, muḥammadun rasūlu-llāh',
  translation:
    'There is no deity but Allah, and Muhammad is the messenger of Allah.',
  kannada_translation:
    'ಅಲ್ಲಾಹನಲ್ಲದೆ ಬೇರೆ ದೇವರಿಲ್ಲ ಮತ್ತು ಮುಹಮ್ಮದ್ ಅಲ್ಲಾಹನ ಸಂದೇಶವಾಹಕರು.',
  reference: 'The Testimony of Faith',
  kannada_reference: 'ನಂಬಿಕೆಯ ಸಾಕ್ಷ್ಯ',
};

export function Shahada() {
  const { language } = useLanguage();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Heart className="h-6 w-6 text-primary" />
          {language === 'kn' ? 'ಶಹಾದ' : 'The Shahada'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <p
          className="font-headline text-3xl leading-relaxed text-primary"
          dir="rtl"
        >
          {shahada.arabic}
        </p>
        <p className="text-muted-foreground">{shahada.transliteration}</p>
        <Separator />
        <p className="text-lg italic text-foreground">
          &ldquo;{language === 'kn' ? shahada.kannada_translation : shahada.translation}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
}
