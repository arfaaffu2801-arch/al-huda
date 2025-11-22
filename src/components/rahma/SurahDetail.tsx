
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
        arabic: 'فَإِن لَّمْ تَفْعَلُوا۟ وَلَن تَفْعَلُوا۟ فَٱتَّقُوا۟ ٱlnَّارَ ٱلَّتِى وَقُودُهَا ٱlnَّاسُ وَٱلْحِجَارَةُ ۖ أُعِدَّتْ لِلْكَـٰفِرِينَ',
        translation: 'But if you do not - and you will never be able to - then fear the Fire, whose fuel is people and stones, prepared for the disbelievers.'
    },
    {
        verse: 25,
        arabic: 'وَبَشِّرِ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ أَنَّ لَهُمْ جَنَّـٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَـٰرُ ۖ كُلَّمَا رُزِقُوا۟ مِنْهَا مِن ثَمَرَةٍۢ رِّزْقًۭا ۙ قَالُوا۟ هَـٰذَا ٱلَّذِى رُزِقْنَا مِن قَبْلُ ۖ وَأُوتُوا۟ بِهِۦ مُتَشَـٰbِهًۭا ۖ وَلَهُمْ فِيهَآ أَزْوَٰجٌۭ مُّطَهَّرَةٌۭ ۖ وَهُمْ فِيهَا خَـٰلِدُونَ',
        translation: "And give good tidings to those who believe and do righteous deeds that they will have gardens [in Paradise] beneath which rivers flow. Whenever they are provided with a provision of fruit therefrom, they will say, 'This is what we were provided with before.' And it is given to them in likeness. And they will have therein purified spouses, and they will abide therein eternally."
    },
    {
      verse: 26,
      arabic: '۞ إِنَّ ٱللَّهَ لَا يَسْتَحْىِۦٓ أَن يَضْرِبَ مَثَلًۭا mَّا bَعُوضَةًۭ فَمَا فَوْقَهَا ۚ فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ فَيَعْلَمُونَ أَنَّهُ ٱلْحَقُّ مِن رَّبِّهِمْ ۖ وَأَمَّا ٱلَّذِينَ كَفَرُوا۟ فَيَقُولُونَ مَاذَآ أَرَادَ ٱللَّهُ بِهَـٰذَا مَثَلًۭا ۘ يُضِلُّ بِهِۦ كَثِيرًۭا وَيَهْدِى بِهِۦ كَثِيرًۭا ۚ وَمَا يُضِلُّ بِهِۦٓ إِلَّا ٱلْفَـٰسِقِينَ',
      translation: "Indeed, Allah is not timid to present an example - that of a mosquito or what is smaller than it. And those who have believed know that it is the truth from their Lord. But as for those who disbelieve, they say, 'What did Allah intend by this as an example?' He misleads many thereby and guides many thereby. And He misleads not thereby except the defiantly disobedient."
    },
    {
        verse: 27,
        arabic: 'ٱلَّذِينَ يَنقُضُونَ عَهْدَ ٱللَّهِ مِنۢ bَعْدِ مِيثَـٰقِهِۦ وَيَقْطَعُونَ مَآ أَمَرَ ٱللَّهُ بِهِۦٓ أَن يُوصَلَ وَيُفْسِدُونَ فِى ٱلْأَرْضِ ۚ أُو۟لَـٰٓئِكَ هُمُ ٱلْخَـٰسِرُونَ',
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
    },
    {
        verse: 31,
        arabic: 'وَعَلَّمَ ءَادَمَ ٱلْأَسْمَآءَ كُلَّهَا ثُمَّ عَرَضَهُمْ عَلَى ٱلْمَلَـٰٓئِكَةِ فَقَالَ أَنۢبِـُٔونِى بِأَسْمَآءِ هَـٰٓؤُلَآءِ إِن كُنتُمْ صَـٰدِقِينَ',
        translation: 'And He taught Adam the names - all of them. Then He showed them to the angels and said, "Inform Me of the names of these, if you are truthful."'
    },
    {
        verse: 32,
        arabic: 'قَالُوا۟ سُبْحَـٰنَكَ لَا عِلْمَ لَنَآ إِلَّا مَا عَلَّمْتَنَآ ۖ إِنَّكَ أَنتَ ٱلْعَلِيمُ ٱلْحَكِيمُ',
        translation: 'They said, "Exalted are You; we have no knowledge except what You have taught us. Indeed, it is You who is the Knowing, the Wise."'
    },
    {
        verse: 33,
        arabic: 'قَالَ يَـٰٓـَٔادَمُ أَنۢبِئْهُم بِأَسْمَآئِهِمْ ۖ فَلَمَّآ أَنۢبَأَهُم بِأَسْمَآئِهِمْ قَالَ أَلَمْ أَقُل لَّكُمْ إِنِّىٓ أَعْلَمُ غَيْبَ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَأَعْلَمُ مَا تُبْدُونَ وَمَا كُنتُمْ تَكْتُمُونَ',
        translation: 'He said, "O Adam, inform them of their names." And when he had informed them of their names, He said, "Did I not tell you that I know the unseen [aspects] of the heavens and the earth? And I know what you reveal and what you have concealed."'
    },
    {
        verse: 34,
        arabic: 'وَإِذْ قُلْنَا لِلْمَلَـٰٓئِكَةِ ٱسْجُدُوا۟ لِءَادَمَ فَسَجَدُوٓا۟ إِلَّآ إِبْلِيسَ أَبَىٰ وَٱسْتَكْبَرَ وَكَانَ مِنَ ٱلْكَـٰفِرِينَ',
        translation: 'And [mention] when We said to the angels, "Prostrate before Adam"; so they prostrated, except for Iblees. He refused and was arrogant and became of the disbelievers.'
    },
    {
        verse: 35,
        arabic: 'وَقُلْنَا يَـٰٓـَٔادَمُ ٱسْكُنْ أَنتَ وَزَوْجُكَ ٱلْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَا وَلَا تَقْرَبَا هَـٰذِهِ ٱلشَّجَرَةَ فَتَكُونَا مِنَ ٱلظَّـٰلِمِينَ',
        translation: 'And We said, "O Adam, dwell, you and your wife, in Paradise and eat therefrom in [ease and] abundance from wherever you will. But do not approach this tree, lest you be of the wrongdoers."'
    },
    {
        verse: 36,
        arabic: 'فَأَزَلَّهُمَا ٱلشَّيْطَـٰنُ عَنْهَا فَأَخْرَجَهُمَا مِمَّا كَانَا فِيهِ ۖ وَقُلْنَا ٱهْبِطُوا۟ bَعْضُكُمْ لِبَعْضٍ عَدُوٌّۭ ۖ وَلَكُمْ فِى ٱلْأَرْضِ مُسْتَقَرٌّۭ وَمَتَـٰعٌ إِلَىٰ حِينٍۢ',
        translation: 'But Satan caused them to slip out of it and removed them from that [condition] in which they had been. And We said, "Go down, [all of you], as enemies to one another, and you will have upon the earth a place of settlement and provision for a time."'
    },
    {
        verse: 37,
        arabic: 'فَتَلَقَّىٰٓ ءَادَمُ مِن رَّبِّهِۦ كَلِمَـٰتٍۢ فَتَابَ عَلَيْهِ ۚ إِنَّهُۥ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ',
        translation: 'Then Adam received from his Lord [some] words, and He accepted his repentance. Indeed, it is He who is the Accepting of repentance, the Merciful.'
    },
    {
        verse: 38,
        arabic: 'قُلْنَا ٱهْبِطُوا۟ مِنْهَا جَمِيعًۭا ۖ فَإِمَّا يَأْتِيَنَّكُم مِّنِّى هُدًۭى فَمَن تَبِعَ هُdَاىَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ',
        translation: "We said, 'Go down from it, all of you. And when guidance comes to you from Me, whoever follows My guidance - there will be no fear concerning them, nor will they grieve.'"
    },
    {
        verse: 39,
        arabic: 'وَٱلَّذِينَ كَفَرُوا۟ وَكَذَّبُوا۟ بِـَٔايَـٰتِنَآ أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱlnَّارِ ۖ هُمْ فِيهَا خَـٰلِدُونَ',
        translation: "But those who disbelieve and deny Our signs - those are the companions of the Fire; they will abide therein eternally."
    },
    {
        verse: 40,
        arabic: 'يَـٰbَنِىٓ إِسْرَٰٓءِيلَ ٱذْكُرُوا۟ نِعْمَتِىَ ٱلَّتِىٓ أَنْعَمْتُ عَلَيْكُمْ وَأَوْفُوا۟ بِعَهْدِىٓ أُوفِ بِعَهْدِكُمْ وَإِيَّـٰىَ فَٱرْهَبُونِ',
        translation: 'O Children of Israel, remember My favor which I have bestowed upon you and fulfill My covenant [upon you] that I will fulfill your covenant [from Me], and be afraid of [only] Me.'
    },
    {
        verse: 41,
        arabic: 'وَءَامِنُوا۟ bِمَآ أَنزَلْتُ مُصَدِّقًۭا لِّمَا mَعَكُمْ وَلَا تَكُونُوٓا۟ أَوَّلَ كَافِرٍۭ بِهِۦ ۖ وَلَا تَشْتَرُوا۟ بِـَٔايَـٰتِى ثَمَنًۭا قَلِيلًۭا وَإِيَّـٰىَ فَٱتَّقُونِ',
        translation: 'And believe in what I have sent down confirming that which is [already] with you, and be not the first to disbelieve in it. And do not exchange My signs for a small price, and fear [only] Me.'
    },
    {
        verse: 42,
        arabic: 'وَلَا تَلْبِسُوا۟ ٱلْحَقَّ بِٱلْبَـٰطِلِ وَتَكْتُمُوا۟ ٱلْحَقَّ وَأَنتُمْ تَعْلَمُونَ',
        translation: 'And do not mix the truth with falsehood or conceal the truth while you know [it].'
    },
    {
        verse: 43,
        arabic: 'وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ وَٱرْكَعُوا۟ مَعَ ٱلرَّٰكِعِينَ',
        translation: 'And establish prayer and give zakah and bow with those who bow [in worship and obedience].'
    },
    {
        verse: 44,
        arabic: 'أَتَأْمُرُونَ ٱلنَّاسَ بِٱلْبِرِّ وَتَنسَوْنَ أَنفُسَكُمْ وَأَنتُمْ تَتْلُونَ ٱلْكِتَـٰbَ ۚ أَفَلَا تَعْقِلُونَ',
        translation: 'Do you order righteousness of the people and forget yourselves while you recite the Scripture? Then will you not reason?',
    },
    {
        verse: 45,
        arabic: 'وَٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلْخَـٰشِعِينَ',
        translation: 'And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah]',
    },
    {
        verse: 46,
        arabic: 'ٱلَّذِينَ يَظُنُّونَ أَنَّهُم مُّلَـٰقُوا۟ رَبِّهِمْ وَأَنَّهُمْ إِلَيْهِ رَٰجِعُونَ',
        translation: 'Who are certain that they will meet their Lord and that they will return to Him.',
    },
    {
        verse: 47,
        arabic: 'يَـٰbَنِىٓ إِسْرَٰٓءِيلَ ٱذْكُرُوا۟ نِعْمَتِىَ ٱلَّتِىٓ أَنْعَمْتُ عَلَيْكُمْ وَأَنِّى فَضَّلْتُكُمْ عَلَى ٱلْعَـٰلَمِينَ',
        translation: 'O Children of Israel, remember My favor that I have bestowed upon you and that I preferred you over the worlds.',
    },
    {
        verse: 48,
        arabic: 'وَٱتَّقُوا۟ يَوْمًۭا لَّا تَجْزِى نَفْسٌ عَن نَّفْسٍۢ شَيْـًۭٔا وَلَا يُقْبَلُ مِنْهَا شَفَـٰعَةٌۭ وَلَا يُؤْخَذُ مِنْهَا عَدْلٌۭ وَلَا هُمْ يُنصَرُونَ',
        translation: 'And fear a Day when no soul will suffice for another soul at all, nor will intercession be accepted from it, nor will compensation be taken from it, nor will they be aided.',
    },
    {
        verse: 49,
        arabic: 'وَإِذْ نَجَّيْنَـٰكُم مِّنْ ءَالِ فِرْعَوْنَ يَسُومُونَكُمْ سُوٓءَ ٱلْعَذَابِ يُذَبِّحُونَ أَبْنَآءَكُمْ وَيَسْتَحْيُونَ نِسَآءَكُمْ ۚ وَفِى ذَٰلِكُم bَلَآءٌۭ مِّن رَّبِّكُمْ عَظِيمٌۭ',
        translation: 'And [recall] when We saved your forefathers from the people of Pharaoh, who afflicted you with the worst torment, slaughtering your [newborn] sons and keeping your females alive. And in that was a great trial from your Lord.',
    },
    {
        verse: 50,
        arabic: 'وَإِذْ فَرَقْنَا بِكُمُ ٱلْبَحْرَ فَأَنجَيْنَـٰكُمْ وَأَغْرَقْنَآ ءَالَ فِرْعَوْنَ وَأَنتُمْ تَنظُرُونَ',
        translation: 'And [recall] when We parted the sea for you and saved you and drowned the people of Pharaoh while you were looking on.',
    },
    {
        verse: 51,
        arabic: 'وَإِذْ وَٰعَدْنَا مُوسَىٰٓ أَرْبَعِينَ لَيْلَةًۭ ثُمَّ ٱتَّخَذْتُمُ ٱلْعِجْلَ مِنۢ بَعْدِهِۦ وَأَنتُمْ ظَـٰلِمُونَ',
        translation: 'And [recall] when We made an appointment with Moses for forty nights. Then you took [for worship] the calf after him, while you were wrongdoers.'
    },
    {
        verse: 52,
        arabic: 'ثُمَّ عَفَوْنَا عَنكُم مِّنۢ بَعْدِ ذَٰلِكَ لَعَلَّكُمْ تَشْكُرُونَ',
        translation: 'Then We forgave you after that so perhaps you would be grateful.'
    },
    {
        verse: 53,
        arabic: 'وَإِذْ ءَاتَيْنَا مُوسَى ٱلْكِتَـٰبَ وَٱلْفُرْقَانَ لَعَلَّكُمْ تَهْتَدُونَ',
        translation: 'And [recall] when We gave Moses the Scripture and the criterion that perhaps you would be guided.'
    },
    {
        verse: 54,
        arabic: 'وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦ يَـٰقَوْمِ إِنَّكُمْ ظَلَمْتُمْ أَنفُسَكُم بِٱتِّخَاذِكُمُ ٱلْعِجْلَ فَتُوبُوٓا۟ إِلَىٰ بَارِئِكُمْ فَٱقْتُلُوٓا۟ أَنفُسَكُمْ ذَٰلِكُمْ خَيْرٌۭ لَّكُمْ عِندَ بَارِئِكُمْ فَتَابَ عَلَيْكُمْ ۚ إِنَّهُۥ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ',
        translation: 'And [recall] when Moses said to his people, "O my people, indeed you have wronged yourselves by your taking of the calf [for worship]. So repent to your Creator and kill yourselves. That is best for [all of] you in the sight of your Creator." Then He accepted your repentance; indeed, He is the Accepting of repentance, the Merciful.'
    },
    {
        verse: 55,
        arabic: 'وَإِذْ قُلْتُمْ يَـٰمُوسَىٰ لَن نُّؤْمِنَ لَكَ حَتَّىٰ نَرَى ٱللَّهَ جَهْرَةًۭ فَأَخَذَتْكُمُ ٱلصَّـٰعِقَةُ وَأَنتُمْ تَنظُرُونَ',
        translation: 'And [recall] when you said, "O Moses, we will never believe you until we see Allah outright"; so the thunderbolt took you while you were looking on.'
    },
    {
        verse: 56,
        arabic: 'ثُمَّ بَعَثْنَـٰكُم مِّنۢ بَعْدِ مَوْتِكُمْ لَعَلَّكُمْ تَشْكُرُونَ',
        translation: 'Then We revived you after your death that perhaps you would be grateful.'
    },
    {
        verse: 57,
        arabic: 'وَظَلَّلْنَا عَلَيْكُمُ ٱلْغَمَامَ وَأَنزَلْنَا عَلَيْكُمُ ٱلْمَنَّ وَٱلسَّلْوَىٰ ۖ كُلُوا۟ مِن طَيِّبَـٰتِ مَا رَزَقْنَـٰكُمْ ۖ وَمَا ظَلَمُونَا وَلَـٰكِن كَانُوٓا۟ أَنفُسَهُمْ يَظْلِمُونَ',
        translation: 'And We shaded you with clouds and sent down to you manna and quails, [saying], "Eat from the good things with which We have provided you." And they wronged Us not - but they were [only] wronging themselves.'
    },
    {
        verse: 58,
        arabic: 'وَإِذْ قُلْنَا ٱدْخُلُوا۟ هَـٰذِهِ ٱلْقَرْيَةَ فَكُلُوا۟ مِنْهَا حَيْثُ شِئْتُمْ رَغَدًۭا وَٱدْخُلُوا۟ ٱلْبَابَ سُجَّدًۭا وَقُولُوا۟ حِطَّةٌۭ نَّغْفِرْ لَكُمْ خَطَـٰيَـٰكُمْ ۚ وَسَنَزِيدُ ٱلْمُحْسِنِينَ',
        translation: 'And [recall] when We said, "Enter this city and eat from it wherever you will in [ease and] abundance, and enter the gate bowing humbly and say, \'Relieve us of our burdens.\' We will [then] forgive your sins for you, and We will increase the doers of good [in goodness and reward]."'
    },
    {
        verse: 59,
        arabic: 'فَبَدَّلَ ٱلَّذِينَ ظَلَمُوا۟ قَوْلًا غَيْرَ ٱلَّذِى قِيلَ لَهُمْ فَأَنزَلْنَا عَلَى ٱلَّذِينَ ظَلَمُوا۟ رِجْزًۭا مِّنَ ٱلسَّمَآءِ bِمَا كَانُوا۟ يَفْسُقُونَ',
        translation: 'But those who wronged changed [the words] to a statement other than that which had been said to them, so We sent down upon those who wronged a punishment from the sky because they were defiantly disobeying.'
    },
    {
        verse: 60,
        arabic: 'وَإِذِ ٱسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِۦ فَقُلْنَا ٱضْرِب بِّعَصَاكَ ٱلْحَجَرَ ۖ فَٱنفَjَرَتْ مِنْهُ ٱثْنَتَا عَشْرَةَ عَيْنًۭا ۖ قَدْ عَلِمَ كُلُّ أُنَاسٍۢ مَّشْرَبَهُمْ ۖ كُلُوا۟ وَٱشْرَبُوا۟ مِن رِّزْقِ ٱللَّهِ وَلَا تَعْثَوْا۟ فِى ٱلْأَرْضِ مُفْسِدِينَ',
        translation: 'And [recall] when Moses prayed for water for his people, so We said, "Strike with your staff the stone." And there gushed forth from it twelve springs, and every people knew its watering place. "Eat and drink from the provision of Allah, and do not act corruptly on the earth, spreading mischief."'
    },
    {
        verse: 61,
        arabic: 'وَإِذْ قُلْتُمْ يَـٰمُوسَىٰ لَن nَّصْبِرَ عَلَىٰ طَعَamٍۢ وَٰحِدٍۢ فَٱدْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنۢbِتُ ٱلْأَرْضُ مِن بَقْلِهَا وَقِثَّآئِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا ۖ قَالَ أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ أَدْنَىٰ بِٱلَّذِى هُوَ خَيْرٌ ۚ ٱهْبِطُوا۟ مِصْرًۭا فَإِنَّ لَكُم مَّا سَأَلْتُمْ ۗ وَضُرِبَتْ عَلَيْهِمُ ٱلذِّلَّةُ وَٱلْمَسْكَنَةُ وَbَآءُو بِغَضَبٍۢ مِّنَ ٱللَّهِ ۗ ذَٰلِكَ بِأَنَّهُمْ كَانُوا۟ يَكْفُرُونَ بِـَٔايَـٰتِ ٱللَّهِ وَيَقْتُلُونَ ٱلْأَنۢbِيَآءَ بِغَيْرِ ٱلْحَقِّ ۗ ذَٰلِكَ بِمَا عَصَوا۟ وَّكَانُوا۟ يَعْتَدُونَ',
        translation: 'And [recall] when you said, "O Moses, we can never endure one [kind of] food. So call upon your Lord to bring forth for us from the earth its green herbs and its cucumbers and its garlic and its lentils and its onions." [Moses] said, "Would you exchange what is better for what is less? Go into [any] settlement and indeed, you will have what you have asked." And they were covered with humiliation and poverty and returned with anger from Allah [upon them]. That was because they [repeatedly] disbelieved in the signs of Allah and killed the prophets without right. That was because they disobeyed and were [habitually] transgressing.'
    },
    {
        verse: 62,
        arabic: 'إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَٱلَّذِينَ هَادُوا۟ وَٱلنَّصَـٰرَىٰ وَٱلصَّـٰbِـِٔينَ مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْـَٔاخِرِ وَعَمِلَ صَـٰلِحًۭا فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ',
        translation: 'Indeed, those who believed and those who were Jews or Christians or Sabeans [before Prophet Muhammad] - those [among them] who believed in Allah and the Last Day and did righteousness - will have their reward with their Lord, and no fear will there be concerning them, nor will they grieve.'
    },
    {
        verse: 63,
        arabic: 'وَإِذْ أَخَذْنَا مِيثَـٰقَكُمْ وَرَفَعْنَا فَوْقَكُمُ ٱلطُّورَ خُذُوا۟ مَآ ءَاتَيْنَـٰكُم بِقُوَّةٍۢ وَٱذْكُرُوا۟ مَا فِيهِ لَعَلَّكُمْ تَتَّقُونَ',
        translation: 'And [recall] when We took your covenant, [O Children of Israel, to abide by the Torah] and We raised over you the mount, [saying], "Take what We have given you with determination and remember what is in it that perhaps you may become righteous."'
    },
    {
        verse: 64,
        arabic: 'ثُمَّ تَوَلَّيْتُم مِّنۢ bَعْدِ ذَٰلِكَ ۖ فَلَوْلَا فَضْلُ ٱللَّهِ عَلَيْكُمْ وَرَحْمَتُهُۥ لَكُنتُم مِّنَ ٱلْخَـٰسِرِينَ',
        translation: 'Then you turned away after that. And if not for the favor of Allah upon you and His mercy, you would have been among the losers.'
    },
    {
        verse: 65,
        arabic: 'وَلَقَدْ عَلِمْتُمُ ٱلَّذِينَ ٱعْتَدَوْا۟ مِنكُمْ فِى ٱلسَّbْتِ فَقُلْنَا لَهُمْ كُونُوا۟ قِرَدَةً خَـٰسِـِٔينَ',
        translation: 'And you had already known about those who transgressed among you concerning the sabbath, and We said to them, "Be apes, despised."'
    },
    {
        verse: 66,
        arabic: 'فَجَعَلْنَـٰهَا نَكَـٰلًۭا لِّمَا bَيْنَ يَدَيْهَا وَمَا خَلْفَهَا وَمَوْعِظَةًۭ لِّلْمُتَّقِينَ',
        translation: 'And We made it a deterrent punishment for those who were present and those who succeeded [them] and a lesson for those who fear Allah.'
    },
    {
        verse: 67,
        arabic: 'وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦٓ إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تَذْbَحُوا۟ بَقَرَةًۭ ۖ قَالُوٓا۟ أَتَتَّخِذُنَا هُزُوًۭا ۖ قَالَ أَعُوذُ بِٱللَّهِ أَنْ أَكُونَ مِنَ ٱلْجَـٰهِلِينَ',
        translation: 'And [recall] when Moses said to his people, "Indeed, Allah commands you to slaughter a cow." They said, "Do you take us in ridicule?" He said, "I seek refuge in Allah from being among the ignorant."'
    },
    {
        verse: 68,
        arabic: 'قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُbَيِّن لَّنَا مَا هِىَ ۚ قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌۭ لَّا فَارِضٌۭ وَلَا بِكْرٌ عَوَانٌۢ بَيْنَ ذَٰلِكَ ۖ فَٱفْعَلُوا۟ مَا تُؤْمَرُونَ',
        translation: 'They said, "Call upon your Lord to make clear to us what it is." [Moses] said, "[Allah] says, \'It is a cow which is neither old nor virgin, but in between the two.\' So do what you are commanded."'
    },
    {
        verse: 69,
        arabic: 'قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُbَيِّن لَّنَا مَا لَوْنُهَا ۚ قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌۭ صَفْرَآءُ فَاقِعٌۭ لَّوْنُهَا تَسُرُّ ٱلنَّـٰظِرِينَ',
        translation: 'They said, "Call upon your Lord to show us what is her color." He said, "He says, \'It is a yellow cow, bright in color - pleasing to the beholders.\'"'
    },
    {
        verse: 70,
        arabic: 'قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُbَيِّن لَّنَا مَا هِىَ إِنَّ ٱلْبَقَرَ تَشَـٰbَهَ عَلَيْنَا وَإِنَّآ إِن شَآءَ ٱللَّهُ لَمُهْتَدُونَ',
        translation: 'They said, "Call upon your Lord to make clear to us what it is. Indeed, [all] cows look alike to us. And indeed we, if Allah wills, will be guided."'
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
