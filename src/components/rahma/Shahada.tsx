
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
  hindi_translation:
    'अल्लाह के सिवा कोई माबूद नहीं, और मुहम्मद अल्लाह के रसूल हैं।',
  marathi_translation:
    'अल्लाहशिवाय कोणीही पूज्य नाही आणि मुहम्मद अल्लाहचे पैगंबर आहेत।',
  reference: 'The Testimony of Faith',
  kannada_reference: 'ನಂಬಿಕೆಯ ಸಾಕ್ಷ್ಯ',
  hindi_reference: 'आस्था का प्रमाण',
  marathi_reference: 'विश्वासाचा पुरावा',
};

export function Shahada() {
  const { language } = useLanguage();

  const getTranslation = () => {
    switch (language) {
      case 'kn':
        return shahada.kannada_translation;
      case 'hi':
        return shahada.hindi_translation;
      case 'mr':
        return shahada.marathi_translation;
      default:
        return shahada.translation;
    }
  };
  
  const getReference = () => {
    switch (language) {
        case 'kn':
            return shahada.kannada_reference;
        case 'hi':
            return shahada.hindi_reference;
        case 'mr':
            return shahada.marathi_reference;
        default:
            return shahada.reference;
    }
  }
  
  const getTitle = () => {
      switch (language) {
          case 'kn':
              return 'ಶಹಾದ';
          case 'hi':
              return 'शहादा';
          case 'mr':
              return 'शहादा';
          default:
              return 'The Shahada';
      }
  }


  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Heart className="h-6 w-6 text-primary" />
          {getTitle()}
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
          &ldquo;{getTranslation()}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
}
