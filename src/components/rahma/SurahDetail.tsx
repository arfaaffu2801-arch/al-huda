
'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { surahData } from '@/lib/surahs';
import { BookMarked } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { useLanguage } from '@/context/LanguageContext';

const alFatihahVerses = [
  {
    verse: 1,
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
    kannada_translation: 'ಅಲ್ಲಾಹನ ಹೆಸರಿನಿಂದ, ಅವನು ಅಪಾರ ಕರುಣಾಮಯಿ, ಕರುಣಾನಿಧಿ.',
  },
  {
    verse: 2,
    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    translation: '[All] praise is [due] to Allah, Lord of the worlds -',
    kannada_translation: 'ಎಲ್ಲಾ ಹೊಗಳಿಕೆಗಳು ವಿಶ್ವಗಳ ಒಡೆಯನಾದ ಅಲ್ಲಾಹನಿಗೆ ಮೀಸಲು -',
  },
  {
    verse: 3,
    arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
    translation: 'The Entirely Merciful, the Especially Merciful,',
    kannada_translation: 'ಅಪಾರ ಕರುಣಾಮಯಿ, ಕರುಣಾನಿಧಿ,',
  },
  {
    verse: 4,
    arabic: 'مَالِكِ يَوْمِ الدِّينِ',
    translation: 'Sovereign of the Day of Recompense.',
    kannada_translation: 'ಪ್ರತೀಕಾರದ ದಿನದ ಒಡೆಯ.',
  },
  {
    verse: 5,
    arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
    translation: 'It is You we worship and You we ask for help.',
    kannada_translation: 'ನಾವು ನಿನ್ನನ್ನೇ ಆರಾಧಿಸುತ್ತೇವೆ ಮತ್ತು ನಿನ್ನಿಂದಲೇ ಸಹಾಯ ಬೇಡುತ್ತೇವೆ.',
  },
  {
    verse: 6,
    arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
    translation: 'Guide us to the straight path -',
    kannada_translation: 'ನಮಗೆ ನೇರ ಮಾರ್ಗವನ್ನು ತೋರಿಸು -',
  },
  {
    verse: 7,
    arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
    kannada_translation: 'ನೀನು ಅನುಗ್ರಹಿಸಿದವರ ಮಾರ್ಗ, ನಿನ್ನ ಕೋಪಕ್ಕೆ ಗುರಿಯಾದವರ ಅಥವಾ ದಾರಿ ತಪ್ಪಿದವರ ಮಾರ್ಗವಲ್ಲ.',
  },
];

const alBaqarahVerses = [
    {
        verse: 1,
        arabic: 'الۤمۤ',
        translation: 'Alif-Lãm-Mĩm.',
        kannada_translation: 'ಅಲಿಫ್-ಲಾಮ್-ಮೀಮ್.',
    },
    {
        verse: 2,
        arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ',
        translation: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah -',
        kannada_translation: 'ಇದು ಆ ಗ್ರಂಥ, ಇದರಲ್ಲಿ ಯಾವುದೇ ಸಂದೇಹವಿಲ್ಲ, ಇದು ದೇವಭಯವುಳ್ಳವರಿಗೆ ಮಾರ್ಗದರ್ಶಿಯಾಗಿದೆ -',
    },
    {
        verse: 3,
        arabic: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ',
        translation: 'Who believe in the unseen, establish prayer, and spend out of what We have provided for them,',
        kannada_translation: 'ಅವರು ಅದೃಶ್ಯವನ್ನು ನಂಬುತ್ತಾರೆ, ನಮಾಝನ್ನು ಸ್ಥಾಪಿಸುತ್ತಾರೆ ಮತ್ತು ನಾವು ಅವರಿಗೆ ನೀಡಿದ್ದರಿಂದ ಖರ್ಚು ಮಾಡುತ್ತಾರೆ,',
    },
    {
        verse: 4,
        arabic: 'وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ',
        translation: 'And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith].',
        kannada_translation: 'ಮತ್ತು ಅವರು ನಿನಗೆ (ಓ ಮುಹಮ್ಮದ್) ಅವತೀರ್ಣವಾದುದನ್ನು ಮತ್ತು ನಿನಗೆ ಮೊದಲು ಅವತೀರ್ಣವಾದುದನ್ನು ನಂಬುತ್ತಾರೆ, ಮತ್ತು ಪರಲೋಕದ ಬಗ್ಗೆ ಅವರು ಖಚಿತರಾಗಿದ್ದಾರೆ [ನಂಬಿಕೆಯಲ್ಲಿ].',
    },
    {
        verse: 5,
        arabic: 'أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ',
        translation: 'Those are upon [right] guidance from their Lord, and it is those who are the successful.',
        kannada_translation: 'ಅವರೇ ತಮ್ಮ ಒಡೆಯನಿಂದ [ಸರಿಯಾದ] ಮಾರ್ಗದರ್ಶನದಲ್ಲಿದ್ದಾರೆ ಮತ್ತು ಅವರೇ ಯಶಸ್ವಿಯಾದವರು.',
    }
];

const surahContent: { [key: number]: any[] } = {
  1: alFatihahVerses,
  2: alBaqarahVerses,
};


export function SurahDetail({ surahNumber }: { surahNumber: number }) {
  const surah = surahData.find((s) => s.number === surahNumber);
  const { language } = useLanguage();

  if (!surah) {
    return (
      <div className="flex h-48 items-center justify-center text-muted-foreground">
        <p>{language === 'kn' ? 'ಸೂರಾ ಕಂಡುಬಂದಿಲ್ಲ.' : 'Surah not found.'}</p>
      </div>
    );
  }

  const verses = surahContent[surah.number];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl font-headline">
            <BookMarked className="h-6 w-6 text-primary" />
            {surah.name} ({surah.transliteration})
          </CardTitle>
          <Link href="/surah">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {language === 'kn' ? 'ಪಟ್ಟಿಗೆ ಹಿಂತಿರುಗಿ' : 'Back to list'}
            </Button>
          </Link>
        </div>
        <CardDescription>
          {language === 'kn' ? (surah as any).kannada_translation || surah.translation : surah.translation} - {language === 'kn' ? `${surah.verses} ವಚನಗಳು` : `${surah.verses} verses`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full">
          <div className="space-y-6 p-1">
            {verses ? (
              verses.map((verse) => (
                <div key={verse.verse} className="rounded-lg border bg-secondary/30 p-4">
                  <p className="mb-4 text-right font-headline text-3xl leading-relaxed text-primary" dir="rtl">
                    {verse.arabic}
                    <span className="ml-2 text-sm font-sans text-muted-foreground">({verse.verse})</span>
                  </p>
                  <p className="italic text-foreground">
                    &ldquo;{language === 'kn' ? verse.kannada_translation || verse.translation : verse.translation}&rdquo;
                  </p>
                </div>
              ))
            ) : (
              <div className="flex h-[600px] items-center justify-center rounded-lg border-2 border-dashed bg-secondary/30">
                <p className="text-center text-muted-foreground">
                  {language === 'kn' ? `ಸೂರಾ ${surah.transliteration} ವಿಷಯ ಇನ್ನೂ ಲಭ್ಯವಿಲ್ಲ.` : `The content for Surah ${surah.transliteration} is not yet available.`}
                  <br />
                  {language === 'kn' ? 'ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಎಲ್ಲಾ ಸೂರಾಗಳನ್ನು ಸೇರಿಸಲು ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದೇವೆ.' : 'We are working on adding all Surahs soon.'}
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
