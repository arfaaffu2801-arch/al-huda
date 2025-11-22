
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

const alFatihahVerses = [
  {
    verse: 1,
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
  },
  {
    verse: 2,
    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    translation: '[All] praise is [due] to Allah, Lord of the worlds -',
  },
  {
    verse: 3,
    arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
    translation: 'The Entirely Merciful, the Especially Merciful,',
  },
  {
    verse: 4,
    arabic: 'مَالِكِ يَوْمِ الدِّينِ',
    translation: 'Sovereign of the Day of Recompense.',
  },
  {
    verse: 5,
    arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
    translation: 'It is You we worship and You we ask for help.',
  },
  {
    verse: 6,
    arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
    translation: 'Guide us to the straight path -',
  },
  {
    verse: 7,
    arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
  },
];

const alBaqarahVerses = [
    {
        verse: 1,
        arabic: 'الۤمۤ',
        translation: 'Alif-Lãm-Mĩm.'
    },
    {
        verse: 2,
        arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ',
        translation: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah -'
    },
    {
        verse: 3,
        arabic: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ',
        translation: 'Who believe in the unseen, establish prayer, and spend out of what We have provided for them,'
    },
    {
        verse: 4,
        arabic: 'وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ',
        translation: 'And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith].'
    },
    {
        verse: 5,
        arabic: 'أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ',
        translation: 'Those are upon [right] guidance from their Lord, and it is those who are the successful.'
    },
    {
        verse: 6,
        arabic: 'إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ',
        translation: 'Indeed, those who disbelieve - it is all the same for them whether you warn them or do not warn them - they will not believe.'
    },
    {
        verse: 7,
        arabic: 'خَتَمَ اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ sَمْعِهِمْ ۖ وَعَلَىٰ أَبْصَارِهِمْ غِشَاوَةٌ وَلَهُمْ عَذَابٌ عَظِيمٌ',
        translation: 'Allah has set a seal upon their hearts and upon their hearing, and over their vision is a veil. And for them is a great punishment.'
    },
    {
        verse: 8,
        arabic: 'وَمِنَ النَّاسِ مَن يَقُولُ ءَامَنَّا بِاللَّهِ وَبِالْيَوْمِ الْآخِرِ وَمَا هُم بِمُؤْمِنِينَ',
        translation: 'And of the people are some who say, "We believe in Allah and the Last Day," but they are not believers.'
    },
    {
        verse: 9,
        arabic: 'يُخَادِعُونَ اللَّهَ وَالَّذِينَ ءَامَنُوا وَمَا يَخْدَعُونَ إِلَّا أَنفُسَهُمْ وَمَا يَشْعُرُونَ',
        translation: 'They think to deceive Allah and those who believe, but they deceive not except themselves and perceive [it] not.'
    },
    {
        verse: 10,
        arabic: 'فِي قُلُوبِهِم mَّرَضٌ فَزَادَهُمُ اللَّهُ مَرَضًا وَلَهُمْ عَذَابٌ أَلِيمٌ بِمَا كَانُوا يَكْذِبُونَ',
        translation: 'In their hearts is a disease, so Allah has increased their disease; and for them is a painful punishment because they [habitually] used to lie.'
    },
    {
        verse: 11,
        arabic: 'وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ',
        translation: 'And when it is said to them, "Do not cause corruption on the earth," they say, "We are but reformers."'
    },
    {
        verse: 12,
        arabic: 'أَلَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ وَلَكِن لَّا يَشْعُرُونَ',
        translation: 'Unquestionably, it is they who are the corrupters, but they perceive [it] not.'
    },
    {
        verse: 13,
        arabic: 'وَإِذَا قِيلَ لَهُمْ ءَامِنُوا كَمَا ءَامَنَ النَّاسُ قَالُوا أَنُؤْمِنُ كَمَا ءَامَنَ السُّفَهَاءُ أَلَا إِنَّهُمْ هُمُ السُّفَهَاءُ وَلَكِن لَّا يَعْلَمُونَ',
        translation: 'And when it is said to them, "Believe as the people have believed," they say, "Should we believe as the foolish have believed?" Unquestionably, it is they who are the foolish, but they know not.'
    },
    {
        verse: 14,
        arabic: 'وَإِذَا لَقُوا الَّذِينَ ءَامَنُوا قَالُوا ءَامَنَّا وَإِذَا خَلَوْا إِلَىٰ شَيَاطِينِهِمْ قَالُوا إِنَّا مَعَكُمْ إِنَّمَا nَحْنُ مُسْتَهْزِئُونَ',
        translation: 'And when they meet those who believe, they say, "We believe"; but when they are alone with their evil ones, they say, "Indeed, we are with you; we were only mockers."'
    },
    {
        verse: 15,
        arabic: 'اللَّهُ يَسْتَهْزِئُ بِهِمْ وَيَمُdُّهُمْ فِي طُغْيَانِهِمْ يَعْمَهُونَ',
        translation: 'Allah mocks them and prolongs them in their transgression [while] they wander blindly.'
    },
    {
        verse: 16,
        arabic: 'أُولَٰئِكَ الَّذِينَ اشْتَرَوُا الضَّلَالَةَ بِالْهُدَىٰ فَمَا رَبِحَت تِّجَارَتُهُمْ وَمَا كَانُوا مُهْتَدِينَ',
        translation: 'Those are the ones who have purchased error [in exchange] for guidance, so their transaction has brought no profit, nor were they guided.'
    },
    {
        verse: 17,
        arabic: 'مَثَلُهُمْ كَمَثَلِ الَّذِي اسْتَوْقَدَ نَارًا فَلَمَّا أَضَاءَتْ مَا حَوْلَهُ ذَهَبَ اللَّهُ بِنُورِهِمْ وَتَرَكَهُمْ فِي ظُلُمَاتٍ لَّا يُبْصِرُونَ',
        translation: 'Their example is that of one who kindled a fire, but when it illuminated what was around him, Allah took away their light and left them in darkness [so] they could not see.'
    },
    {
        verse: 18,
        arabic: 'صُمٌّ بُكْمٌ عُمْيٌ فَهُمْ لَا يَرْجِعُونَ',
        translation: 'Deaf, dumb and blind - so they will not return [to the right path].'
    },
    {
        verse: 19,
        arabic: 'أَوْ كَصَيِّبٍ مِّنَ السَّمَاءِ فِيهِ ظُلُمَاتٌ وَرَعْدٌ وَبَرْقٌ يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِم مِّنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِ وَاللَّهُ مُحِيطٌ بِالْكَافِرِينَ',
        translation: 'Or [it is] like a rainstorm from the sky within which is darkness, thunder and lightning. They put their fingers in their ears against the thunderclaps in dread of death. But Allah is encompassing of the disbelievers.'
    },
    {
        verse: 20,
        arabic: 'يَكَادُ الْبَرْقُ يَخْطَفُ أَبْصَارَهُمْ كُلَّمَا أَضَاءَ لَهُم mَّشَوْا فِيهِ وَإِذَا أَظْلَمَ عَلَيْهِمْ قَامُوا وَلَوْ شَاءَ اللَّهُ لَذَهَبَ بِسَمْعِهِمْ وَأَبْصَارِهِمْ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
        translation: 'The lightning almost snatches away their sight. Every time it lights [the way] for them, they walk therein; but when darkness comes over them, they stand [still]. And if Allah had willed, He could have taken away their hearing and their sight. Indeed, Allah is over all things competent.'
    },
    {
        verse: 21,
        arabic: 'يَـٰٓأَيُّهَا ٱلنَّاسُ ٱعْبُdُوا۟ رَبَّكُمُ ٱلَّذِى خَلَقَكُمْ وَٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',
        translation: 'O mankind, worship your Lord, who created you and those before you, that you may become righteous -'
    },
    {
        verse: 22,
        arabic: 'ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ فِرَٰشًۭا وَٱلسَّمَآءَ bِنَآءًۭ وَأَنزَلَ مِنَ ٱلسَّمَآءِ مَآءًۭ فَأَخْرَجَ بِهِۦ مِنَ ٱلثَّمَرَٰتِ رِزْقًۭا لَّكُمْ ۖ fَلَا تَجْعَلُوا۟ لِلَّهِ أَندَادًۭا وَأَنتُمْ تَعْلَمُونَ',
        translation: '[He] who made for you the earth a bed [spread out] and the sky a ceiling and sent down from the sky, rain and brought forth thereby fruits as provision for you. So do not attribute to Allah equals while you know [that there is nothing similar to Him].'
    },
    {
        verse: 23,
        arabic: 'وَإِن كُنتُمْ فِى رَيْبٍۢ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا۟ بِسُورَةٍۢ مِّن mِّثْلِهِۦ وَٱدْعُوا۟ شُهَدَآءَكُم mِّن دُونِ ٱللَّهِ إِن كُنتُمْ صَـٰدِقِينَ',
        translation: 'And if you are in doubt about what We have sent down upon Our Servant [Muhammad], then produce a surah the like of it and call upon your witnesses other than Allah, if you should be truthful.'
    },
    {
        verse: 24,
        arabic: 'فَإِن لَّمْ تَفْعَلُوا۟ وَلَن تَفْعَلُوا۟ فَٱتَّقُوا۟ ٱلنَّارَ ٱلَّتِى وَقُودُهَا ٱلنَّاسُ وَٱلْحِجَارَةُ ۖ أُعِدَّتْ لِلْكَـٰفِرِينَ',
        translation: 'But if you do not - and you will never be able to - then fear the Fire, whose fuel is people and stones, prepared for the disbelievers.'
    },
    {
        verse: 25,
        arabic: 'وَبَشِّرِ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ أَنَّ لَهُمْ جَنَّـٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ ۖ كُلَّمَا رُزِقُوا۟ مِنْهَا مِن ثَمَرَةٍۢ رِّزْقًۭا ۙ قَالُوا۟ هَـٰذَا ٱلَّذِى رُزِقْنَا مِن قَبْلُ ۖ وَأُوتُوا۟ بِهِۦ مُتَشَـٰbِهًۭا ۖ وَلَهُمْ فِيهَآ أَزْوَٰجٌۭ مُّطَهَّرَةٌۭ ۖ وَهُمْ فِيهَا خَـٰلِدُونَ',
        translation: "And give good tidings to those who believe and do righteous deeds that they will have gardens [in Paradise] beneath which rivers flow. Whenever they are provided with a provision of fruit therefrom, they will say, 'This is what we were provided with before.' And it is given to them in likeness. And they will have therein purified spouses, and they will abide therein eternally."
    },
    {
      verse: 26,
      arabic: '۞ إِنَّ ٱللَّهَ لَا يَسْتَحْىِۦٓ أَن يَضْرِبَ مَثَلًۭا مَّا بَعُوضَةًۭ فَمَا فَوْقَهَا ۚ فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ فَيَعْلَمُونَ أَنَّهُ ٱلْحَقُّ مِن رَّبِّهِمْ ۖ وَأَمَّا ٱلَّذِينَ كَفَرُوا۟ فَيَقُولُونَ مَاذَآ أَرَادَ ٱللَّهُ بِهَـٰذَا مَثَلًۭا ۘ يُضِلُّ بِهِۦ كَثِيرًۭا وَيَهْدِى بِهِۦ كَثِيرًۭا ۚ وَمَا يُضِلُّ بِهِۦٓ إِلَّا ٱلْفَـٰسِقِينَ',
      translation: "Indeed, Allah is not timid to present an example - that of a mosquito or what is smaller than it. And those who have believed know that it is the truth from their Lord. But as for those who disbelieve, they say, 'What did Allah intend by this as an example?' He misleads many thereby and guides many thereby. And He misleads not thereby except the defiantly disobedient."
    },
    {
        verse: 27,
        arabic: 'ٱلَّذِينَ يَنقُضُونَ عَهْدَ ٱللَّهِ مِنۢ بَعْدِ مِيثَـٰقِهِۦ وَيَقْطَعُونَ مَآ أَمَرَ ٱللَّهُ بِهِۦٓ أَن يُوصَلَ وَيُفْسِدُونَ فِى ٱلْأَرْضِ ۚ أُو۟لَـٰٓئِكَ هُمُ ٱلْخَـٰسِرُونَ',
        translation: "Who break the covenant of Allah after its confirmation and cut off what Allah has ordered to be joined and cause corruption on earth. It is those who are the losers."
    },
    {
        verse: 28,
        arabic: 'كَيْفَ تَكْفُرُونَ بِٱللَّهِ وَكُنتُمْ أَمْوَٰتًۭا فَأَحْيَـٰكُمْ ۖ ثُمَّ يُمِيتُكُمْ ثُمَّ يُحْيِيكُمْ ثُمَّ إِلَيْهِ تُرْجَعُونَ',
        translation: "How can you disbelieve in Allah when you were lifeless and He brought you to life; then He will cause you to die, then He will bring you [back] to life, and then to Him you will be returned."
    },
    {
        verse: 29,
        arabic: 'هُوَ ٱلَّذِى خَلَقَ لَكُم مَّا فِى ٱلْأَرْضِ جَمِيعًۭا ثُمَّ ٱسْتَوَىٰٓ إِلَى ٱلسَّمَآءِ فَسَوَّىٰهُنَّ سَبْعَ سَمَـٰوَٰتٍۢ ۚ وَهُوَ بِكُلِّ شَىْءٍ عَلِيمٌۭ',
        translation: 'It is He who created for you all of that which is on the earth. Then He directed Himself to the heaven, [His being above all creation], and made them seven heavens, and He is Knowing of all things.'
    },
    {
        verse: 30,
        arabic: 'وَإِذْ قَالَ رَبُّكَ لِلْمَلَـٰٓئِكَةِ إِنِّى جَاعِلٌۭ فِى ٱلْأَرْضِ خَلِيفَةًۭ ۖ قَالُوٓا۟ أَتَجْعَلُ فِيهَا مَن يُفْسِدُ فِيهَا وَيَسْفِكُ ٱلدِّمَآءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ ۖ قَالَ إِنِّىٓ أَعْلَمُ مَا لَا تَعْلَمُونَ',
        translation: 'And [mention, O Muhammad], when your Lord said to the angels, "Indeed, I will make upon the earth a successive authority." They said, "Will You place upon it one who causes corruption therein and sheds blood, while we declare Your praise and sanctify You?" Allah said, "Indeed, I know that which you do not know."'
    }
];

const surahContent: { [key: number]: any[] } = {
  1: alFatihahVerses,
  2: alBaqarahVerses,
};


export function SurahDetail({ surahNumber }: { surahNumber: number }) {
  const surah = surahData.find((s) => s.number === surahNumber);

  if (!surah) {
    return (
      <div className="flex h-48 items-center justify-center text-muted-foreground">
        <p>Surah not found.</p>
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
              Back to list
            </Button>
          </Link>
        </div>
        <CardDescription>
          {surah.translation} - {surah.verses} verses
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
                    &ldquo;{verse.translation}&rdquo;
                  </p>
                </div>
              ))
            ) : (
              <div className="flex h-[600px] items-center justify-center rounded-lg border-2 border-dashed bg-secondary/30">
                <p className="text-center text-muted-foreground">
                  The content for Surah {surah.transliteration} is not yet available.
                  <br />
                  We are working on adding all Surahs soon.
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
