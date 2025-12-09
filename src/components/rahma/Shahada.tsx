import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';

const shahada = {
  arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
  transliteration: 'lā ʾilāha ʾillā-llāh, muḥammadun rasūlu-llāh',
  translation:
    'There is no deity but Allah, and Muhammad is the messenger of Allah.',
  reference: 'The Testimony of Faith',
};

export function Shahada() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Heart className="h-6 w-6 text-primary" />
          The Shahada
        </CardTitle>
        <CardDescription>{shahada.reference}</CardDescription>
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
          &ldquo;{shahada.translation}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
}
