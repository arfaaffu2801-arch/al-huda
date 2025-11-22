
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
        arabic: 'وَإِذْ قَالَ رَبُّكَ لِلْمَلَـٰٓئِكَةِ إِنِّى جَاعِلٌۭ فِى ٱلْأَرْضِ خَلِيفَةًۭ ۖ قَالُوٓا۟ أَتَجْعَلُ فِيهَا مَن يُفْسِدُ فِيهَا وَيَسْفِكُ ٱلدِّמَآءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ ۖ قَالَ إِنِّىٓ أَعْلَمُ مَا لَا تَعْلَمُونَ',
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
        arabic: 'وَٱلَّذِينَ كَفَرُوا۟ وَكَذَّbُوا۟ بِـَٔايَـٰتِنَآ أُو۟لَـٰٓئِكَ أَصْحَـٰbُ ٱlnَّارِ ۖ هُمْ فِيهَا خَـٰلِدُونَ',
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
        arabic: 'وَإِذْ نَجَّيْنَـٰكُم مِّنْ ءَالِ فِرْعَوْنَ يَسُومُونَكُمْ sُوٓءَ ٱلْعَذَابِ يُذَبِّحُونَ أَبْنَآءَكُمْ وَيَسْتَحْيُونَ نِسَآءَكُمْ ۚ وَفِى ذَٰلِكُم bَلَآءٌۭ مِّن rَّbِّكُمْ عَظِيمٌۭ',
        translation: 'And [recall] when We saved your forefathers from the people of Pharaoh, who afflicted you with the worst torment, slaughtering your [newborn] sons and keeping your females alive. And in that was a great trial from your Lord.',
    },
    {
        verse: 50,
        arabic: 'وَإِذْ فَرَقْنَا بِكُمُ ٱلْبَحْرَ فَأَنجَيْنَـٰكُمْ وَأَغْرَقْنَآ ءَالَ فِرْعَوْنَ وَأَنتُمْ تَنظُرُونَ',
        translation: 'And [recall] when We parted the sea for you and saved you and drowned the people of Pharaoh while you were looking on.',
    },
    {
        verse: 51,
        arabic: 'وَإِذْ وَٰعَدْنَا مُوسَىٰٓ أَرْبَعِينَ لَيْلَةًۭ ثُمَّ ٱتَّخَذْتُمُ ٱلْعِجْلَ مِنۢ bَعْدِهِۦ وَأَنتُمْ ظَـٰلِمُونَ',
        translation: 'And [recall] when We made an appointment with Moses for forty nights. Then you took [for worship] the calf after him, while you were wrongdoers.'
    },
    {
        verse: 52,
        arabic: 'ثُمَّ عَفَوْنَا عَنكُم mِّنۢ bَعْدِ ذَٰلِكَ لَعَلَّكُمْ تَشْكُرُونَ',
        translation: 'Then We forgave you after that so perhaps you would be grateful.'
    },
    {
        verse: 53,
        arabic: 'وَإِذْ ءَاتَيْنَا مُوسَى ٱlْكِتَـٰbَ وَٱlْfُرْqَانَ لَعَلَّكُمْ تَهْتَدُونَ',
        translation: 'And [recall] when We gave Moses the Scripture and the criterion that perhaps you would be guided.'
    },
    {
        verse: 54,
        arabic: 'وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦ يَـٰqَوْمِ إِنَّكُمْ ظَلَمْتُمْ أَنfُsَكُمْ بِٱtِّخَاذِكُمُ ٱlْعِجْلَ فَتُوبُوٓا۟ إِلَىٰ bَارِئِكُمْ فَٱqْتُلُوٓا۟ أَنfُsَكُمْ ذَٰلِكُمْ خَيْرٌۭ lَّكُمْ عِndَ bَارِئِكُمْ فَتَابَ عَلَيْكُمْ ۚ إِنَّهُۥ هُوَ ٱltَّwَّābُ ٱlrَّحِيمُ',
        translation: 'And [recall] when Moses said to his people, "O my people, indeed you have wronged yourselves by your taking of the calf [for worship]. So repent to your Creator and kill yourselves. That is best for [all of] you in the sight of your Creator." Then He accepted your repentance; indeed, He is the Accepting of repentance, the Merciful.'
    },
    {
        verse: 55,
        arabic: 'وَإِذْ قُلْتُمْ يَـٰmُوسَىٰ لَن nُّؤْمِنَ لَكَ حَتَّىٰ نَرَى ٱllَّهَ جَهْرَةًۭ فَأَخَذَتْkُمُ ٱlṣṣَـٰcِqَةُ وَأَنتُمْ تَنظُرُونَ',
        translation: 'And [recall] when you said, "O Moses, we will never believe you until we see Allah outright"; so the thunderbolt took you while you were looking on.'
    },
    {
        verse: 56,
        arabic: 'ثُمَّ بَعَثْنَـٰkُم mِّنۢ bَعْدِ مَوْتِكُمْ لَعَلَّكُمْ تَشْkُرُونَ',
        translation: 'Then We revived you after your death that perhaps you would be grateful.'
    },
    {
        verse: 57,
        arabic: 'وَظَلَّlْنَا عَلَيْkُمُ ٱlْغَمَامَ وَأَنzَلْنَا عَلَيْkُمُ ٱlْمَنَّ وَٱlsَّlْwَىٰ ۖ kُلُوا۟ مِن طَيِّbَـٰtِ مَا rَzَqْنَـٰkُمْ ۖ وَمَا ظَلَمُونَا وَلَـٰkِن kَانُوٓا۟ أَنfُsَهُمْ يَظْلِمُونَ',
        translation: 'And We shaded you with clouds and sent down to you manna and quails, [saying], "Eat from the good things with which We have provided you." And they wronged Us not - but they were [only] wronging themselves.'
    },
    {
        verse: 58,
        arabic: 'وَإِذْ قُلْنَا ٱdْkhُلُوا۟ hَـٰذِهِ ٱlْqَرْyَةَ فَkُلُوا۟ مِنْهَا حَيْثُ shِئْتُمْ rَغَدًۭa وَٱdْkhُلُوا۟ ٱlْبَاbَ sُjَّdًۭa وَqُولُوا۟ ḥِṭَّةٌۭ nَّغْfِرْ لَكُمْ khَṭَـٰyَـٰkُمْ ۚ وَsَنَzِيدُ ٱlْمُحْسِنِينَ',
        translation: 'And [recall] when We said, "Enter this city and eat from it wherever you will in [ease and] abundance, and enter the gate bowing humbly and say, \'Relieve us of our burdens.\' We will [then] forgive your sins for you, and We will increase the doers of good [in goodness and reward]."'
    },
    {
        verse: 59,
        arabic: 'فَبَدَّlَ ٱlَّذِينَ ظَلَمُوا۟ qَوْlًا غَيْرَ ٱlَّذِى qِيلَ لَهُمْ فَأَنzَلْنَا عَلَى ٱlَّذِينَ ظَلَمُوا۟ rِjْzًۭa mِّنَ ٱlsَّmَآءِ bِمَا kَانُوا۟ يَfْسُqُونَ',
        translation: 'But those who wronged changed [the words] to a statement other than that which had been said to them, so We sent down upon those who wronged a punishment from the sky because they were defiantly disobeying.'
    },
    {
        verse: 60,
        arabic: 'وَإِذِ ٱsْتَسْqَىٰ مُوسَىٰ لِqَوْمِهِۦ fَقُلْنَا ٱḍrِب bِّعَصَاكَ ٱlْḥəjərə ۖ fَٱnfəjərətْ مِنْهُ ٱthْنَتَا عَshْرَةَ عَيْنًۭa ۖ qَدْ عَلِمَ kُلُّ أُنَاسٍۢ mَّshْرَبَهُمْ ۖ kُلُوا۟ وَٱshْرَبُوا۟ مِن rِّzْqِ ٱllَّهِ وَلَا تَعْthَوْا۟ fِى ٱlْأَرْḍِ مُfْسِدِينَ',
        translation: 'And [recall] when Moses prayed for water for his people, so We said, "Strike with your staff the stone." And there gushed forth from it twelve springs, and every people knew its watering place. "Eat and drink from the provision of Allah, and do not act corruptly on the earth, spreading mischief."'
    },
    {
        verse: 61,
        arabic: 'وَإِذْ قُلْتُمْ يَـٰmُوسَىٰ لَن nَّṣْبِرَ عَلَىٰ طَعَamٍۢ وَٰḥِدٍۢ فَٱdْcُ لَنَا rَبَّكَ يُkhْرِjْ لَنَا mِمَّا تُnۢbِtُ ٱlْأَرْḍُ مِن bَقْلِهَا وَqِthَّآئِهَا وَfُومِهَا وَعَدَسِهَا وَbَصَلِهَا ۖ qَالَ أَتَسْتَبْدِلُونَ ٱlَّذِى هُوَ أَدْنَىٰ بِٱlَّذِى هُوَ khَيْرٌ ۚ ٱhْبِطُوا۟ mِṣْرًۭa فَإِنَّ لَkُم mَّا sَأَلْتُمْ ۗ وَḍُرِبَتْ عَلَيْهِمُ ٱlذِّلَّةُ وَٱlْمَسْkَنَةُ وَbَآءُو بِغَḍَبٍۢ mِّنَ ٱllَّهِ ۗ ذَٰلِكَ بِأَنَّهُمْ kَانُوا۟ يَkْfُرُونَ بِـَٔايَـٰtِ ٱllَّهِ وَيَقْتُلُونَ ٱlْأَنۢbِيَآءَ بِغَيْرِ ٱlْḥَقِّ ۗ ذَٰلِكَ بِمَا عَصَوا۟ wَّkَانُوا۟ يَعْتَدُونَ',
        translation: 'And [recall] when you said, "O Moses, we can never endure one [kind of] food. So call upon your Lord to bring forth for us from the earth its green herbs and its cucumbers and its garlic and its lentils and its onions." [Moses] said, "Would you exchange what is better for what is less? Go into [any] settlement and indeed, you will have what you have asked." And they were covered with humiliation and poverty and returned with anger from Allah [upon them]. That was because they [repeatedly] disbelieved in the signs of Allah and killed the prophets without right. That was because they disobeyed and were [habitually] transgressing.'
    },
    {
        verse: 62,
        arabic: 'إِنَّ ٱlَّذِينَ ءَامَنُوا۟ وَٱlَّذِينَ هَادُوا۟ وَٱlnَّṣَـٰrَىٰ وَٱlṣṣābiـِٔينَ مَنْ ءَامَنَ بِٱllَّهِ وَٱlْyَوْmِ ٱlْـَٔاkhِرِ وَعَمِلَ ṣَـٰlِḥًۭa fَلَهُمْ أَjْرُهُمْ عِndَ rَبِّhِمْ وَلَا khَوْfٌ عَلَيْhِمْ وَلَا هُمْ يَḥzَنُونَ',
        translation: 'Indeed, those who believed and those who were Jews or Christians or Sabeans [before Prophet Muhammad] - those [among them] who believed in Allah and the Last Day and did righteousness - will have their reward with their Lord, and no fear will there be concerning them, nor will they grieve.'
    },
    {
        verse: 63,
        arabic: 'وَإِذْ أَkhَzْنَا mِīthَـٰqَkُمْ وَrَفَعْنَا fَوْqَkُمُ ٱlṭُّورَ khُzُوا۟ مَآ ءَاتَيْنَـٰkُم بِqُوَّةٍۢ وَٱzْkُرُوا۟ مَا fِيهِ لَعَلَّkُمْ تَتَّqُونَ',
        translation: 'And [recall] when We took your covenant, [O Children of Israel, to abide by the Torah] and We raised over you the mount, [saying], "Take what We have given you with determination and remember what is in it that perhaps you may become righteous."'
    },
    {
        verse: 64,
        arabic: 'ثُمَّ تَوَlَّيْتُم mِّنۢ bَعْدِ ذَٰlِكَ ۖ fَلَوْlَا fَḍْلُ ٱllَّهِ عَلَيْkُمْ وَrَحْمَتُهُۥ لَkُntُم mِّنَ ٱlْkhَـٰsِرِينَ',
        translation: 'Then you turned away after that. And if not for the favor of Allah upon you and His mercy, you would have been among the losers.'
    },
    {
        verse: 65,
        arabic: 'وَلَقَدْ عَلِمْتُمُ ٱlَّذِينَ ٱcْتَدَوْا۟ mِnkُمْ fِى ٱlsَّbْتِ fَقُلْنَا لَهُمْ kُونُوا۟ qِرَدَةً khَـٰsِـِٔينَ',
        translation: 'And you had already known about those who transgressed among you concerning the sabbath, and We said to them, "Be apes, despised."'
    },
    {
        verse: 66,
        arabic: 'فَجَعَلْنَـٰhَا nَkَـٰlًۭa lِّمَا bَيْنَ yَدَيْhَا وَmَا khَلْfَهَا وَmَوْcِẓَةًۭ lِّlْمُtَّqِينَ',
        translation: 'And We made it a deterrent punishment for those who were present and those who succeeded [them] and a lesson for those who fear Allah.'
    },
    {
        verse: 67,
        arabic: 'وَإِذْ قَالَ mُوسَىٰ لِqَوْmِهِۦٓ إِنَّ ٱllَّهَ يَأْمُرُkُمْ أَن تَzْbَحُوا۟ bَقَرَةًۭ ۖ qَالُوٓا۟ أَتَتَّkhِzُنَا hُzُوًۭa ۖ qَالَ أَعُوذُ بِٱllَّهِ أَنْ أَkُونَ مِنَ ٱlْjَـٰhِلِينَ',
        translation: 'And [recall] when Moses said to his people, "Indeed, Allah commands you to slaughter a cow." They said, "Do you take us in ridicule?" He said, "I seek refuge in Allah from being among the ignorant."'
    },
    {
        verse: 68,
        arabic: 'قَالُوا۟ ٱdْcُ لَنَا rَبَّكَ يُbَيِّن lَّnَا مَا hِyَ ۚ qَالَ إِنَّهُۥ yَقُولُ إِنَّhَا bَقَرَةٌۭ lَّا fāriḍٌۭ وَlَا بِkْرٌ عَwānٌۢ bَيْنَ zَٰlِكَ ۖ fَٱfْcَلُوا۟ مَا تُؤْمَرُونَ',
        translation: 'They said, "Call upon your Lord to make clear to us what it is." [Moses] said, "[Allah] says, \'It is a cow which is neither old nor virgin, but in between the two.\' So do what you are commanded."'
    },
    {
        verse: 69,
        arabic: 'قَالُوا۟ ٱdْcُ لَنَا rَبَّكَ يُbَيِّن lَّnَا مَا lَوْnُhَا ۚ qَالَ إِنَّهُۥ yَقُولُ إِنَّhَا bَقَرَةٌۭ ṣَفْرَآءُ fāqِcٌۭ lَّوْnُhَا تَsُرُّ ٱlnَّـٰẓِرِينَ',
        translation: 'They said, "Call upon your Lord to show us what is her color." He said, "He says, \'It is a yellow cow, bright in color - pleasing to the beholders.\'"'
    },
    {
        verse: 70,
        arabic: 'قَالُوا۟ ٱdْcُ لَنَا rَبَّكَ يُbَيِّن lَّnَا مَا hِyَ إِنَّ ٱlْبَقَرَ تَshَـٰbَهَ عَلَيْنَا وَإِنَّآ إِن shَآءَ ٱllَّهُ لَمُhْتَدُونَ',
        translation: 'They said, "Call upon your Lord to make clear to us what it is. Indeed, [all] cows look alike to us. And indeed we, if Allah wills, will be guided."'
    },
    {
        verse: 71,
        arabic: 'قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌۭ لَّا ذَلُولٌۭ تُثِيرُ ٱلْأَرْضَ وَلَا تَسْقِى ٱلْحَرْثَ مُسَلَّمَةٌۭ لَّا شِيَةَ فِيهَا ۚ قَالُوا۟ ٱلْـَٰٔnَ جِئْتَ بِٱlْحَقِّ ۚ فَذَبَحُوهَا وَمَا كَادُوا۟ يَفْعَلُونَ',
        translation: 'He said, "He says, \'It is a cow neither trained to plow the earth nor to water the fields, sound, without blemish.\' " They said, "Now you have come with the truth." So they slaughtered her, but they could hardly do it.'
    },
    {
        verse: 72,
        arabic: 'وَإِذْ قَتَلْتُمْ نَفْسًۭا فَٱdَّٰrَٰءْتُمْ فِيهَا ۖ وَٱللَّهُ مُخْرِجٌۭ mَّا كُنتُمْ تَكْتُمُونَ',
        translation: 'And [recall] when you slew a man and disputed over it, but Allah was to bring out that which you were concealing.'
    },
    {
        verse: 73,
        arabic: 'فَقُلْنَا ٱضْرِبُوهُ بِبَعْضِهَا ۚ كَذَٰلِكَ يُحْيِى ٱللَّهُ ٱلْمَوْتَىٰ وَيُرِيكُمْ ءَايَـٰتِهِۦ لَعَلَّكُمْ تَعْقِلُونَ',
        translation: 'So We said, "Strike the slain man with part of it." Thus does Allah bring the dead to life, and He shows you His signs that you might reason.'
    },
    {
        verse: 74,
        arabic: 'ثُمَّ قَسَتْ قُلُوبُكُم mِّنۢ bَعْدِ ذَٰلِكَ فَهِىَ كَٱlْحِجَارَةِ أَوْ أَشَدُّ قَسْوَةًۭ ۚ وَإِنَّ مِنَ ٱlْحِجَارَةِ لَمَا يَتَفَجَّرُ مِنْهُ ٱlْأَنْهَـٰrُ ۚ وَإِنَّ مِنْهَا لَمَا يَشَّqَّqُ فَيَخْرُجُ مِنْهُ ٱlْمَآءُ ۚ وَإِنَّ مِنْهَا لَمَا يَهْبِطُ مِنْ خَشْيَةِ ٱllَّهِ ۗ وَمَا ٱllَّهُ بِغَـٰfِلٍ عَمَّا تَعْمَلُونَ',
        translation: 'Then your hearts became hardened after that, being like stones or even harder. For indeed, there are stones from which rivers gush forth, and there are some of them that split open and water comes out, and there are some of them that fall down for fear of Allah. And Allah is not unaware of what you do.'
    },
    {
        verse: 75,
        arabic: 'أَفَتَطْمَعُونَ أَن يُؤْمِنُوا۟ لَكُمْ وَقَدْ كَانَ فَرِيقٌۭ mِّنْهُمْ يَسْمَعُونَ كَلَـٰmَ ٱللَّهِ ثُمَّ يُحَرِّfُونَهُۥ مِنۢ bَعْدِ مَا عَقَلُوهُ وَهُمْ يَعْلَمُونَ',
        translation: 'Do you covet [the hope, O believers], that they would believe for you while a party of them used to hear the words of Allah and then distort the Torah after they had understood it while they were knowing?'
    },
    {
        verse: 76,
        arabic: 'وَإِذَا لَقُوا۟ ٱلَّذِينَ ءَامَنُوا۟ قَالُوٓا۟ ءَامَنَّا وَإِذَا خَلَا bَعْضُهُمْ إِلَىٰ bَعْضٍۢ qَالُوٓا۟ أَتُحَدِّثُونَهُم bِمَا فَتَحَ ٱللَّهُ عَلَيْكُمْ لِيُحَآجُّوكُم bِهِۦ عِندَ رَبِّكُمْ ۚ أَفَلَا تَعْقِلُونَ',
        translation: 'And when they meet those who believe, they say, "We have believed"; but when they are alone with one another, they say, "Do you talk to them about what Allah has revealed to you so they can argue with you about it before your Lord?" Then will you not reason?'
    },
    {
        verse: 77,
        arabic: 'أَوَلَا يَعْلَمُونَ أَنَّ ٱللَّهَ يَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ',
        translation: 'But do they not know that Allah knows what they conceal and what they declare?'
    },
    {
        verse: 78,
        arabic: 'وَمِنْهُمْ أُمِّيُّونَ لَا يَعْلَمُونَ ٱlْكِتَـٰbَ إِلَّآ أَمَانِىَّ وَإِنْ هُمْ إِلَّا يَظُنُّونَ',
        translation: 'And among them are unlettered ones who do not know the Scripture except in wishful thinking, but they are only assuming.'
    },
    {
        verse: 79,
        arabic: 'فَوَيْلٌۭ lِّلَّذِينَ يَكْتُbُونَ ٱlْكِتَـٰbَ بِأَيْدِيهِمْ ثُمَّ يَقُولُونَ هَـٰذَا مِنْ عِندِ ٱllَّهِ لِيَشْتَرُوا۟ bِهِۦ ثَمَنًۭa قَلِيلًۭa ۖ فَوَيْلٌۭ lَّهُم mِّمَّا كَتَبَتْ أَيْدِيهِمْ وَوَيْلٌۭ lَّهُم mِّمَّا يَكْسِبُونَ',
        translation: 'So woe to those who write the "scripture" with their own hands, then say, "This is from Allah," in order to exchange it for a small price. Woe to them for what their hands have written and woe to them for what they earn.'
    },
    {
        verse: 80,
        arabic: 'وَقَالُوا۟ لَن تَمَسَّnَا ٱlnَّارُ إِلَّآ أَيَّامًۭa mَّcْدُودَةًۭ ۚ قُلْ أَتَّخَذْتُمْ عِندَ ٱllَّهِ عَهْدًۭa fَلَن يُخْلِfَ ٱllَّهُ عَهْدَهُۥٓ ۖ أَمْ تَقُولُونَ عَلَى ٱllَّهِ مَا لَا تَعْلَمُونَ',
        translation: 'And they say, "Never will the Fire touch us, except for a few days." Say, "Have you taken a covenant from Allah? For Allah will never break His covenant. Or do you say about Allah that which you do not know?"'
    },
    {
        verse: 91,
        arabic: 'وَإِذَا قِيلَ لَهُمْ ءَامِنُوا۟ bِمَآ أَنZَلَ ٱللَّهُ قَالُوا۟ نُؤْمِنُ bِمَآ أُNzِلَ عَلَيْنَا وَيَكْfُرُونَ bِمَا وَرَآءَهُۥ وَهُوَ ٱlْḥَقُّ مُṣَدِّqًۭa lِّمَا mَعَهُمْ ۗ qُلْ فَلِمَ تَقْتُلُونَ أَنۢbِيَآءَ ٱللَّهِ مِن qَبْلُ إِن kُntُم mُّؤْمِنِينَ',
        translation: 'And when it is said to them, "Believe in what Allah has revealed," they say, "We believe [only] in what was revealed to us." And they disbelieve in what came after it, while it is the truth confirming that which is with them. Say, "Then why did you kill the prophets of Allah before, if you are [indeed] believers?"'
    },
    {
        verse: 92,
        arabic: 'وَلَقَدْ جَآءَkُم mُّوسَىٰ بِٱlْبَيِّنَـٰtِ ثُمَّ ٱtَّkhَzْتُمُ ٱlْعِجْلَ مِنۢ bَعْدِهِۦ وَأَntُمْ ظَـٰlِمُونَ',
        translation: 'And Moses had certainly come to you with clear proofs. Then you took the calf [for worship] after that, while you were wrongdoers.'
    },
    {
        verse: 93,
        arabic: 'وَإِذْ أَkhَzْنَا mِīthَـٰqَkُمْ وَrَفَعْنَا fَوْqَkُمُ ٱlṭُّورَ khُzُوا۟ مَآ ءَاتَيْنَـٰkُم بِqُوَّةٍۢ وَٱsْمَعُوا۟ ۖ qَالُوا۟ sَمِcْنَا وَعَصَيْنَا وَأُshْرِبُوا۟ fِى qُلُوبِهِمُ ٱlْعِجْلَ بِkُfْرِهِمْ ۚ qُلْ بِئْسَمَا يَأْمُرُkُم بِهِۦٓ إِيمَـٰnُkُمْ إِن kُntُم mُّؤْمِنِينَ',
        translation: 'And [recall] when We took your covenant and raised over you the mount, [saying], "Take what We have given you with determination and listen." They said [instead], "We hear and disobey." And their hearts absorbed [the worship of] the calf because of their disbelief. Say, "How wretched is that which your faith commands you, if you should be believers."'
    },
    {
        verse: 94,
        arabic: 'qُلْ إِن kānatْ لَkُمُ ٱldَّارُ ٱlْـَٔاkhِرَةُ عِndَ ٱllَّهِ khَāliṣَةًۭ mِّن dُونِ ٱlnَّāsِ fَتَمَنَّwُا۟ ٱlْمَوْtَ إِن kُntُمْ ṣَـٰdِqِينَ',
        translation: 'Say, [O Muhammad], "If the home of the Hereafter with Allah is for you alone and not the [other] people, then wish for death, if you should be truthful."'
    },
    {
        verse: 95,
        arabic: 'وَلَن yَتَمَنَّwْhُ أَبَدًۭa بِمَا qَدَّmَتْ أَيْdِīhِمْ ۗ وَٱllَّهُ عَلِيمٌۢ بِٱlẓَّـٰlِمِينَ',
        translation: 'But they will never wish for it, ever, because of what their hands have put forth. And Allah is Knowing of the wrongdoers.'
    },
    {
        verse: 96,
        arabic: 'وَلَتَjِدَنَّhُمْ أَḥrَṣَ ٱlnَّāsِ عَلَىٰ ḥəyَwٰةٍۢ وَmِنَ ٱlَّذِينَ أَshْرَkُوا۟ ۚ yَwَدُّ أَḥədُhُمْ لَوْ يُcَمَّrُ أَلْfَ sَنَةٍۢ وَmَا هُوَ bِمُzَḥzِḥِهِۦ مِنَ ٱlْcَzَā بِ أَن يُcَمَّrَ ۗ وَٱllَّهُ bَṣِīrٌۢ bِمَا yَعْمَلُونَ',
        translation: 'And you will surely find them the most greedy of people for life - [even] more than those who associate others with Allah. One of them wishes that he could be granted life a thousand years, but it would not remove him in the least from the [coming] punishment that he should be granted life. And Allah is Seeing of what they do.'
    },
    {
        verse: 97,
        arabic: 'qُلْ mَن kāna عَدُوًّۭa lِّjِبْرِيلَ fَإِنَّهُۥ nَzَّlَهُۥ عَلَىٰ qَلْبِكَ بِإِzْنِ ٱllَّهِ مُṣَدِّqًۭa lِّمَا bَيْنَ yَدَيْهِ وَhُdًۭى وَbُshْرَىٰ لِلْمُؤْمِنِينَ',
        translation: 'Say, "Whoever is an enemy to Gabriel - it is [none but] he who has brought the Qur\'an down upon your heart, [O Muhammad], by permission of Allah, confirming that which was before it and as guidance and good tidings for the believers."'
    },
    {
        verse: 98,
        arabic: 'mَن kāna عَدُوًّۭa lِّلَّهِ وَmَلَـٰٓئِkَتِهِۦ وَrُsُلِهِۦ وَjِبْرِيلَ وَmِīkَـٰlَ fَإِنَّ ٱllَّهَ عَدُوٌّۭ lِّلْkَـٰfِرِينَ',
        translation: 'Whoever is an enemy to Allah and His angels and His messengers and Gabriel and Michael - then indeed, Allah is an enemy to the disbelievers.'
    },
    {
        verse: 99,
        arabic: 'وَلَقَدْ أَنzَلْنَآ إِلَيْكَ ءَايَـٰtٍۭ bَيِّنَـٰtٍۢ ۖ وَmَا يَkْfُرُ بِهَآ إِلَّا ٱlْfَـٰsِqُونَ',
        translation: 'And We have certainly sent down to you distinct signs, and none disbelieve in them except the defiantly disobedient.'
    },
    {
        verse: 100,
        arabic: 'أَوَkُلَّmَا عَـٰhَدُوا۟ عَهْدًۭa nَّbَzَهُۥ fَرِيقٌۭ mِّنْhُم ۚ bَلْ أَkْthَرُhُمْ لَا يُؤْمِنُونَ',
        translation: 'Is it not [the case] that every time they took a covenant a party of them threw it away? But, [in fact], most of them do not believe.'
    },
    {
        verse: 101,
        arabic: 'وَلَمَّا جَآءَهُمْ rَسُولٌۭ mِّنْ عِndِ ٱllَّهِ مُṣَدِّqٌۭ lِّمَا mَعَهُمْ nَبَzَ fَرِيقٌۭ mِّنَ ٱlَّذِينَ أُوتُوا۟ ٱlْkِtَـٰbَ kِtَـٰbَ ٱllَّهِ وَrَآءَ ẓُhُورِهِمْ kَأَنَّhُمْ لَا yَعْلَمُونَ',
        translation: 'And when a messenger from Allah came to them confirming that which was with them, a party of those who had been given the Scripture threw the Scripture of Allah behind their backs as if they did not know [what it contained].'
    },
    {
        verse: 102,
        arabic: 'وَٱtَّbَعُوا۟ مَا تَتْلُوا۟ ٱlshَّyَـٰṭِينُ عَلَىٰ مُlْkِ sُلَيْمَـٰnَ ۖ وَmَا kَفَرَ sُلَيْمَـٰnُ وَlَـٰkِنَّ ٱlshَّyَـٰṭِينَ kَفَرُوا۟ يُعَلِّمُونَ ٱlnَّāsَ ٱlsِّḥrَ وَmَآ أُnْzِلَ عَلَى ٱlْمَلَkَيْنِ بِbَاbِلَ hَـٰrُوتَ وَmَـٰrُوتَ ۚ وَmَا يُعَلِّمَانِ مِنْ أَḥədٍ حَتَّىٰ yَقُولَآ إِنَّmَا nَحْنُ fِtْنَةٌۭ fَلَا تَkْfُرْ ۖ fَيَتَعَلَّmُونَ مِنْhُمَا مَا يُfَرِّqُونَ بِهِۦ bَيْنَ ٱlْمَرْءِ وَzَوْjِهِۦ ۚ وَmَا hُم بِḍَآrِّينَ بِهِۦ مِنْ أَḥədٍ إِلَّا بِإِzْنِ ٱllَّهِ ۚ وَyَتَعَلَّmُونَ مَا yَḍُرُّhُمْ وَlَا yَنfَعُhُمْ ۚ وَlَقَدْ عَلِمُوا۟ لَمَنِ ٱshْتَرَىٰهُ مَا لَهُۥ fِى ٱlْـَٔاkhِرَةِ مِنْ khَلَـٰqٍۢ ۚ وَlَبِئْسَ مَا shَرَوْا۟ bِهِۦٓ أَنfُsَهُمْ ۚ لَوْ kَانُوا۟ yَعْلَمُونَ',
        translation: 'And they followed [instead] what the devils had recited during the reign of Solomon. It was not Solomon who disbelieved, but the devils disbelieved, teaching people magic and that which was revealed to the two angels at Babylon, Harut and Marut. But the two angels do not teach anyone unless they say, "We are a trial, so do not disbelieve [by practicing magic]." And [yet] they learn from them that by which they cause separation between a man and his wife. But they do not harm anyone through it except by permission of Allah. And they learn what harms them and does not benefit them. But the Children of Israel certainly knew that whoever purchased the magic would not have in the Hereafter any share. And wretched is that for which they sold themselves, if they only knew.'
    },
    {
        verse: 103,
        arabic: 'وَلَوْ أَنَّhُمْ ءَامَنُوا۟ وَٱtَّqَوْا۟ لَمَthُوبَةٌۭ mِّنْ عِndِ ٱllَّهِ khَيْرٌۭ ۖ lَّوْ kَانُوا۟ yَعْلَمُونَ',
        translation: 'And if they had believed and feared Allah, then the reward from Allah would have been [far] better, if they only knew.'
    },
    {
        verse: 104,
        arabic: 'يَـٰٓأَيُّهَا ٱlَّذِينَ ءَامَنُوا۟ لَا تَقُولُوا۟ rَٰcِنَا وَqُولُوا۟ ٱnẓُرْنَا وَٱsْمَعُوا۟ ۗ وَlِلْkَـٰfِرِينَ عَzَابٌ أَلِيمٌۭ',
        translation: 'O you who have believed, say not [to the Prophet], "Ra\'ina," but say, "Unthurna," and listen. And for the disbelievers is a painful punishment.'
    },
    {
        verse: 105,
        arabic: 'mَّا yَwَدُّ ٱlَّذِينَ kَفَرُوا۟ مِنْ أَهْلِ ٱlْkِtَـٰbِ وَlَا ٱlْمُshْرِkِينَ أَن يُnَzَّlَ عَلَيْkُم mِّنْ khَيْرٍۢ mِّن rَّbِّkُمْ ۗ وَٱllَّهُ yَkhْتَصُّ بِrَحْمَتِهِۦ mَن yَshَآءُ ۚ وَٱllَّهُ zُو ٱlْfَḍْلِ ٱlْعَẓِيمِ',
        translation: 'Neither those who disbelieve from the People of the Scripture nor the polytheists wish that any good should be sent down to you from your Lord. But Allah selects for His mercy whom He wills, and Allah is the possessor of great bounty.'
    },
    {
        verse: 106,
        arabic: '۞ مَا nَnsَkhْ مِنْ ءَايَةٍ أَوْ nُnsِهَا نَأْتِ بِkhَيْرٍۢ mِّنْhَآ أَوْ mِthْلِهَآ ۗ أَلَمْ تَعْلَمْ أَنَّ ٱllَّهَ عَلَىٰ kُلِّ shَىْءٍۢ qَدِيرٌ',
        translation: 'We do not abrogate a verse or cause it to be forgotten except that We bring forth [one] better than it or similar to it. Do you not know that Allah is over all things competent?'
    },
    {
        verse: 107,
        arabic: 'أَلَمْ تَعْلَمْ أَنَّ ٱllَّهَ لَهُۥ مُlْkُ ٱlsَّmَـٰwَٰtِ وَٱlْأَرْḍِ ۗ وَmَا لَkُم mِّن dُونِ ٱllَّهِ مِن wَلِىٍّۢ وَlَا nَصِيرٍ',
        translation: 'Do you not know that to Allah belongs the dominion of the heavens and the earth and that besides Allah you have no protector or helper?'
    },
    {
        verse: 108,
        arabic: 'أَمْ تُرِيدُونَ أَن تَsْـَٔلُوا۟ rَسُولَkُمْ kَمَا sُئِلَ مُوسَىٰ مِن qَبْلُ ۗ وَmَن yَتَبَدَّlِ ٱlْkُfْرَ بِٱlْإِيمَـٰnِ fَقَدْ ḍَلَّ sَwَآءَ ٱlsَّbِīlِ',
        translation: 'Or do you intend to ask your Messenger as Moses was asked before? And whoever exchanges faith for disbelief has certainly strayed from the soundness of the way.'
    },
    {
        verse: 109,
        arabic: 'وَدَّ kَthīrٌۭ mِّنْ أَهْلِ ٱlْkِtَـٰbِ لَوْ yَرُdُّونَkُم mِّنۢ bَعْدِ إِيمَـٰnِkُمْ kُfَّārًا ḥəsədًۭa mِّنْ عِndِ أَنfُsِهِم mِّنۢ bَعْدِ مَا تَبَيَّnَ لَهُمُ ٱlْḥَقُّ ۖ fَٱcْfُوا۟ وَٱṣْfَحُوا۟ ḥَتَّىٰ yَأْتِىَ ٱllَّهُ بِأَمْرِهِۦٓ ۗ إِنَّ ٱllَّهَ عَلَىٰ kُلِّ shَىْءٍۢ qَدِيرٌۭ',
        translation: 'Many of the People of the Scripture wish they could turn you back to disbelief after you have believed, out of envy from themselves [even] after the truth has become clear to them. So pardon and overlook until Allah delivers His command. Indeed, Allah is over all things competent.'
    },
    {
        verse: 110,
        arabic: 'وَأَقِيمُوا۟ ٱlṣَّlَwٰةَ وَءَاتُوا۟ ٱlzَّkَwٰةَ ۚ وَmَا تُqَدِّمُوا۟ لِأَنfُsِkُم mِّنْ khَيْرٍۢ تَjِدُوهُ عِndَ ٱllَّهِ ۗ إِنَّ ٱllَّهَ بِمَا تَعْمَلُونَ bَṣِīrٌۭ',
        translation: 'And establish prayer and give zakah, and whatever good you put forward for yourselves - you will find it with Allah. Indeed, Allah of what you do, is Seeing.'
    },
    {
        verse: 111,
        arabic: 'وَqālُوا۟ لَن yَدْkhُلَ ٱlْjَنَّةَ إِلَّا mَن kāna hُودًا أَوْ nَṣَـٰrَىٰ ۗ تِلْكَ أَمَانِيُّhُمْ ۗ qُلْ hَاتُوا۟ بُrْhَـٰnَkُمْ إِن kُntُمْ ṣَـٰdِqِينَ',
        translation: 'And they say, "None will enter Paradise except one who is a Jew or a Christian." That is [merely] their wishful thinking. Say, "Produce your proof, if you should be truthful."'
    },
    {
        verse: 112,
        arabic: 'bَلَىٰ مَنْ أَsْلَمَ وَjْhَهُۥ لِلَّهِ وَhُوَ مُḥsِنٌۭ fَلَهُۥٓ أَjْرُهُۥ عِndَ rَبِّهِۦ وَlَا khَوْfٌ عَلَيْhِمْ وَlَا hُمْ yَḥzَنُونَ',
        translation: 'Yes [on the contrary], whoever submits his face in Islam to Allah while being a doer of good will have his reward with his Lord. And no fear will there be concerning them, nor will they grieve.'
    },
    {
        verse: 113,
        arabic: 'وَqālati ٱlْyَهُودُ lَيْsَati ٱlnَّṣَـٰrَىٰ عَلَىٰ shَىْءٍۢ وَqālati ٱlnَّṣَـٰrَىٰ lَيْsَati ٱlْyَهُودُ عَلَىٰ shَىْءٍۢ وَhُمْ yَتْلُونَ ٱlْkِtَـٰbَ ۗ kَzَٰlِكَ قَالَ ٱlَّذِينَ لَا yَعْلَمُونَ mِthْلَ qَوْlِهِمْ ۚ fَٱllَّهُ yَḥkُمُ bَيْنَهُمْ yَوْmَ ٱlْqِيَـٰmَةِ fِيمَا kānuā fīhِ yəkhْtَلِfُونَ',
        translation: 'The Jews say "The Christians have nothing [true] to stand on," and the Christians say, "The Jews have nothing to stand on," although they [both] recite the Scripture. Thus the polytheists speak the same as their words. But Allah will judge between them on the Day of Resurrection concerning that over which they used to differ.'
    },
    {
        verse: 114,
        arabic: 'وَمَنْ أَẓْلَمُ mِmَّn mَّnَعَ mَسَـٰjِدَ ٱllَّهِ أَن yُzْkَرَ fīhā ٱsْمُهُۥ وَsَعَىٰ fِى kharābِhāٓ ۚ أُو۟lَـٰٓئِكَ مَا kāna لَهُمْ أَن yَدْkhُلُوهَآ إِلَّا khāٓئِfِينَ ۚ لَهُمْ fِى ٱldُّnْyَا khِzْyٌۭ وَlَهُمْ fِى ٱlْـٔākhِرَةِ عَzābٌ عَẓِيمٌۭ',
        translation: 'And who are more unjust than those who prevent the name of Allah from being mentioned in His mosques and strive toward their ruin? It is not for them to enter them except in fear. For them in this world is disgrace, and they will have in the Hereafter a great punishment.'
    },
    {
        verse: 115,
        arabic: 'وَلِلَّهِ ٱlْمَshْرِqُ وَٱlْمَغْرِبُ ۚ فَأَيْنَمَا تُwَلُّوا۟ فَthَمَّ وَjْهُ ٱllَّهِ ۚ إِنَّ ٱllَّهَ وَٰsِcٌ عَلِيمٌ',
        translation: 'And to Allah belongs the east and the west. So wherever you [might] turn, there is the Face of Allah. Indeed, Allah is all-Encompassing and Knowing.'
    },
    {
        verse: 116,
        arabic: 'وَqālُوا۟ ٱtَّkhَzَ ٱllَّهُ وَlَدًۭa ۗ sُbْḥَـٰnَهُۥ ۖ bَل lَّهُۥ مَا fِى ٱlsَّmَـٰwَٰtِ وَٱlْأَرْḍِ ۖ kُلٌّۭ lَّهُۥ qَـٰnِtُونَ',
        translation: 'They say, "Allah has taken a son." Exalted is He! Rather, to Him belongs whatever is in the heavens and the earth. All are devoutly obedient to Him,'
    },
    {
        verse: 117,
        arabic: 'بَدِيعُ ٱlsَّmَـٰwَٰtِ وَٱlْأَرْḍِ ۖ وَإِzَا qَḍَىٰٓ أَمْرًۭa فَإِنَّmَا yَقُولُ لَهُۥ kُn fَيَkُونُ',
        translation: 'Originator of the heavens and the earth. When He decrees a matter, He only says to it, "Be," and it is.'
    },
    {
        verse: 118,
        arabic: 'وَqَالَ ٱlَّذِينَ لَا yَعْلَمُونَ lَوْlَا يُkَلِّمُنَا ٱllَّهُ أَوْ تَأْتِينَآ ءَايَةٌۭ ۗ kَzَٰlِكَ قَالَ ٱlَّذِينَ مِن qَبْلِهِم mِّthْلَ qَوْlِهِمْ ۗ تَshَـٰbَhَتْ qُلُوبُhُمْ ۗ qَدْ bَيَّnَّā ٱlْـٔāyَـٰtِ لِqَوْmٍۢ يُoqِنُونَ',
        translation: 'Those who do not know say, "Why does Allah not speak to us or there come to us a sign?" Thus spoke those before them like their words. Their hearts resemble each other. We have shown clearly the signs to a people who are certain [in faith].'
    },
    {
        verse: 119,
        arabic: 'إِنَّآ أَرْsَلْنَـٰكَ بِٱlْḥَقِّ bَshīrًۭa وَnَzِīrًۭa ۖ وَlَا تُsْـَٔلُ عَنْ أَṣْḥَـٰbِ ٱlْjَḥِيمِ',
        translation: 'Indeed, We have sent you, [O Muhammad], with the truth as a bringer of good tidings and a warner, and you will not be asked about the companions of Hellfire.'
    },
    {
        verse: 120,
        arabic: 'وَلَن تَرْḍَىٰ عَنكَ ٱlْyَهُودُ وَlَا ٱlnَّṣَـٰrَىٰ ḥَتَّىٰ تَتَّbِcَ mِlَّtَهُمْ ۗ qُلْ إِنَّ هُdَى ٱllَّهِ هُوَ ٱlْhُdَىٰ ۗ وَlَئِنِ ٱtَّbَعْتَ أَهْwَآءَهُم bَعْدَ ٱlَّzِى jāٓءَكَ مِنَ ٱlْعِلْمِ ۙ مَا لَكَ مِنَ ٱllَّهِ مِن wَلِىٍّۢ وَlَا nَصِيرٍ',
        translation: 'And never will the Jews or the Christians approve of you until you follow their religion. Say, "Indeed, the guidance of Allah is the [only] guidance." If you were to follow their desires after what has come to you of knowledge, you would have against Allah no protector or helper.'
    },
    {
        verse: 121,
        arabic: 'ٱlَّذِينَ ءَاتَيْنَـٰhُمُ ٱlْkِtَـٰbَ yَتْلُونَهُۥ ḥَقَّ تِلَawَتِهِۦٓ أُو۟lَـٰٓئِكَ يُؤْمِنُونَ بِهِۦ ۗ وَmَن yَkْfُرْ بِهِۦ fَأُو۟lَـٰٓئِكَ hُمُ ٱlْkhَـٰsِرُونَ',
        translation: 'Those to whom We have given the Book recite it with its true recital. They [are the ones who] believe in it. And whoever disbelieves in it - it is they who are the losers.'
    },
    {
        verse: 122,
        arabic: 'يَـٰbَنِىٓ إِسْرَٰٓءِيلَ ٱzْkُرُوا۟ nِcْمَتِىَ ٱlَّtِىٓ أَنْcَمْتُ عَلَيْkُمْ وَأَنِّى fَḍَّlْتُkُمْ عَلَى ٱlْعَـٰlَمِينَ',
        translation: 'O Children of Israel, remember My favor which I have bestowed upon you and that I preferred you over the worlds.'
    },
    {
        verse: 123,
        arabic: 'وَٱtَّqُوا۟ yَوْmًۭa lَّا تَjْzِى nَفْسٌ عَن nَّfْسٍۢ shَيْـًۭٔa وَlَا يُqْبَلُ مِنْhَا عَدْلٌۭ وَlَا تَنfَعُhَا shَفَـٰcَةٌۭ وَlَا hُمْ يُnṣَرُونَ',
        translation: 'And fear a Day when no soul will suffice for another soul at all, and no compensation will be accepted from it, nor will any intercession benefit it, nor will they be aided.'
    },
    {
        verse: 124,
        arabic: 'وَإِzِ ٱbْتَلَىٰٓ إِبْرَٰhِيmَ rَبُّhُۥ بِkَلِمَـٰtٍۢ فَأَتَمَّhُنَّ ۖ qَالَ إِنِّى jācِلُكَ لِلnَّāsِ إِمَامًۭa ۖ qَالَ وَmِن zُرِّيَّtِى ۖ qَالَ لَا yَنَالُ عَهْدِى ٱlẓَّـٰlِمِينَ',
        translation: 'And [mention, O Muhammad], when Abraham was tried by his Lord with commands and he fulfilled them. [Allah] said, "Indeed, I will make you a leader for the people." [Abraham] said, "And of my descendants?" [Allah] said, "My covenant does not include the wrongdoers."'
    },
    {
        verse: 125,
        arabic: 'وَإِzْ jَعَلْنَا ٱlْبَيْتَ mَthābَةًۭ lِّلnَّāsِ وَأَمْنًۭa وَٱtَّkhِzُوا۟ مِن mَّqāmi إِبْرَٰhīmə مُṣَلًّۭى ۖ وَcəhِdْنَآ إِلَىٰٓ إِبْرَٰhīmə وَإِسْمَـٰcīlə أَن ṭahِّrā bَيْتِىَ لِلṭَّāٓئِfِينَ وَٱlْcَـٰkِfِينَ وَٱlrُّkَّcِ ٱlsُّjُودِ',
        translation: 'And [mention] when We made the House a place of return for the people and [a place of] security. And take, [O believers], from the standing place of Abraham a place of prayer. And We charged Abraham and Ishmael, [saying], "Purify My House for those who perform Tawaf and those who are staying [there] for worship and those who bow and prostrate [in prayer]."'
    },
    {
        verse: 126,
        arabic: 'وَإِzْ قَالَ إِبْرَٰhīmu rَبِّ ٱjْcəlْ hَـٰzā bَلَدًا ءَاmِنًۭa وَٱrْzُqْ أَهْلَهُۥ مِنَ ٱlthَّmərَٰtِ mَنْ ءَاmَنَ مِنْhُم بِٱllَّهِ وَٱlْyَوْmِ ٱlْـٔākhِرِ ۖ qَالَ وَmَن kَفَرَ فَأُمَتِّcُهُۥ qَلِīlًۭa thُمَّ أَḍْṭَرُّهُۥٓ إِلَىٰ عَzābi ٱlnَّāri ۖ وَbِئْسَ ٱlْمَصِيرُ',
        translation: 'And [mention] when Abraham said, "My Lord, make this a secure city and provide its people with fruits - whoever of them believes in Allah and the Last Day." [Allah] said, "And whoever disbelieves - I will grant him enjoyment for a little; then I will force him to the punishment of the Fire, and wretched is the destination."'
    },
    {
        verse: 127,
        arabic: 'وَإِzْ yَرْfَعُ إِبْرَٰhīmu ٱlْqَwācِدَ مِنَ ٱlْبَيْتِ وَإِسْمَـٰcīlu rَبَّnā تَqَبَّlْ mِnَّāٓ ۖ إِنَّكَ أَntə ٱlsَّmīcُ ٱlْعَلِيمُ',
        translation: 'And [mention] when Abraham was raising the foundations of the House and [with him] Ishmael, [saying], "Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing.'
    },
    {
        verse: 128,
        arabic: 'rَبَّnā وَٱjْcəlnā mُsْلِمَيْنِ لَكَ وَmِن zُرِّيَّtِنَآ أُمَّةًۭ mُّsْلِمَةًۭ lَّكَ وَأَرِنَا mَنāsِkənā وَtُbْ عَلَيْنَآ ۖ إِنَّكَ أَntə ٱltَّwَّābُ ٱlrَّḥīmu',
        translation: 'Our Lord, and make us Muslims [in submission] to You and from our descendants a Muslim nation [in submission] to You. And show us our rites and accept our repentance. Indeed, You are the Accepting of repentance, the Merciful.'
    },
    {
        verse: 129,
        arabic: 'rَبَّnā وَٱbْcəthْ fīhِمْ rَسُولًۭa mِّنْhُمْ yَتْلُوا۟ عَلَيْhِمْ ءَayَـٰtِكَ وَyُcَلِّمُhُمُ ٱlْkِtَـٰbَ وَٱlْḥِkْمَةَ وَyُzَkِّīhِمْ ۚ إِنَّكَ أَntə ٱlْعَzizu ٱlْḥَkīmu',
        translation: 'Our Lord, and send among them a messenger from themselves who will recite to them Your verses and teach them the Book and wisdom and purify them. Indeed, You are the Exalted in Might, the Wise.'
    },
    {
        verse: 130,
        arabic: 'وَمَن yَرْغَبُ عَن mِّلَّةِ إِبْرَٰhīmə إِلَّا mَن sَفِهَ nَفْسَهُۥ ۚ وَlَقَدِ ٱṣْṭَفَيْنَـٰhu fِى ٱldُّnْyā ۖ وَإِنَّهُۥ fِى ٱlْـٔākhِرَةِ لَمِنَ ٱlṣَّـٰlِḥīna',
        translation: 'And who would be averse to the religion of Abraham except one who makes a fool of himself? And We had chosen him in this world, and indeed he, in the Hereafter, will be among the righteous.'
    },
    {
        verse: 131,
        arabic: 'إِذْ قَالَ لَهُۥ رَبُّهُۥٓ أَسْلِمْ ۖ قَالَ أَسْلَمْتُ لِرَبِّ ٱلْعَـٰلَمِينَ',
        translation: 'When his Lord said to him, "Submit", he said "I have submitted [in Islam] to the Lord of the worlds."'
    },
    {
        verse: 132,
        arabic: 'وَوَصَّىٰ بِهَآ إِبْرَٰهِـۧمُ بَنِيهِ وَيَعْقُوبُ يَـٰبَنِىَّ إِنَّ ٱللَّهَ ٱصْطَفَىٰ لَكُمُ ٱلدِّينَ فَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ',
        translation: 'And Abraham instructed his sons [to do the same] and [so did] Jacob, saying, "O my sons, indeed Allah has chosen for you this religion, so do not die except while you are Muslims."'
    },
    {
        verse: 133,
        arabic: 'أَمْ كُنتُمْ شُهَدَآءَ إِذْ حَضَرَ يَعْقُوبَ ٱلْمَوْتُ إِذْ قَالَ لِبَنِيهِ مَا تَعْبُدُونَ مِنۢ بَعْدِى قَالُوا۟ نَعْبُدُ إِلَـٰهَكَ وَإِلَـٰهَ ءَابَآئِكَ إِبْرَٰهِـۧمَ وَإِسْمَـٰعِيلَ وَإِسْحَـٰقَ إِلَـٰهًۭا وَٰحِدًۭا وَنَحْنُ لَهُۥ مُسْلِمُونَ',
        translation: 'Or were you witnesses when death approached Jacob, when he said to his sons, "What will you worship after me?" They said, "We will worship your God and the God of your fathers, Abraham and Ishmael and Isaac - one God. And we are Muslims [in submission] to Him."'
    },
body = error ? String(error?.message ?? "") : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
'
    },
    {
        verse: 134,
        arabic: 'تِلْكَ أُمَّةٌۭ قَدْ خَلَتْ ۖ لَهَا مَا كَسَبَتْ وَلَكُم مَّا كَسَبْتُمْ ۖ وَلَا تُsْـَٔلُونَ عَمَّا كَانُوا۟ يَعْمَلُونَ',
        translation: 'That was a nation which has passed on. It will have [the consequence of] what it earned, and you will have what you have earned. And you will not be asked about what they used to do.'
    },
    {
        verse: 135,
        arabic: 'وَقَالُوا۟ كُونُوا۟ هُودًا أَوْ نَصَـٰرَىٰ تَهْتَدُوا۟ ۗ قُلْ بَلْ مِلَّةَ إِبْرَٰهِـۧمَ حَنِيفًۭا ۖ وَمَا كَانَ مِنَ ٱلْمُشْرِكِينَ',
        translation: 'They say, "Be Jews or Christians [so] you will be guided." Say, "Rather, [we follow] the religion of Abraham, inclining toward truth, and he was not of the polytheists."'
    },
    {
        verse: 136,
        arabic: 'قُولُوٓا۟ ءَامَنَّا بِٱللَّهِ وَمَآ أُنزِلَ إِلَيْنَا وَمَآ أُنزِلَ إِلَىٰٓ إِبْرَٰهِـۧمَ وَإِسْمَـٰعِيلَ وَإِسْحَـٰقَ وَيَعْقُوبَ وَٱلْأَسْبَاطِ وَمَآ أُوتِىَ مُوسَىٰ وَعِيسَىٰ وَمَآ أُوتِىَ ٱلنَّبِيُّونَ مِن رَّبِّهِمْ لَا نُفَرِّقُ بَيْنَ أَحَدٍۢ مِّنْهُمْ وَنَحْنُ لَهُۥ مُسْلِمُونَ',
        translation: 'Say, [O believers], "We have believed in Allah and what has been revealed to us and what has been revealed to Abraham and Ishmael and Isaac and Jacob and the Descendants and what was given to Moses and Jesus and what was given to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [in submission] to Him."'
    },
    {
        verse: 137,
        arabic: 'فَإِنْ ءَامَنُوا۟ بِمِثْلِ مَآ ءَامَنتُم بِهِۦ فَقَدِ ٱهْتَدَوا۟ ۖ وَّإِن تَوَلَّوْا۟ فَإِنَّمَا هُمْ فِى شِقَاقٍۢ ۖ فَسَيَكْفِيكَهُمُ ٱللَّهُ ۚ وَهُوَ ٱلسَّمِيعُ ٱلْعَلِيمُ',
        translation: 'So if they believe in the same as you believe in, then they have been [rightly] guided; but if they turn away, they are only in dissension, and Allah will be sufficient for you against them. And He is the Hearing, the Knowing.'
    },
    {
        verse: 138,
        arabic: 'صِبْغَةَ ٱللَّهِ ۖ وَمَنْ أَحْسَنُ مِنَ ٱللَّهِ صِبْغَةًۭ ۖ وَنَحْنُ لَهُۥ عَـٰبِدُونَ',
        translation: '[And say, "Ours is] the religion of Allah. And who is better than Allah in [ordaining] religion? And we are worshippers of Him."'
    },
    {
        verse: 139,
        arabic: 'قُلْ أَتُحَآجُّونَنَا فِى ٱللَّهِ وَهُوَ رَبُّنَا وَرَبُّكُمْ وَلَنَآ أَعْمَـٰلُنَا وَلَكُمْ أَعْمَـٰلُكُمْ وَنَحْنُ لَهُۥ مُخْلِصُونَ',
        translation: 'Say, "Do you argue with us about Allah while He is our Lord and your Lord? For us are our deeds, and for you are your deeds. And we are sincere [in deed and intention] to Him."'
    },
    {
        verse: 140,
        arabic: 'أَمْ تَقُولُونَ إِنَّ إِبْرَٰهِـۧمَ وَإِسْمَـٰعِيلَ وَإِسْحَـٰقَ وَيَعْقُوبَ وَٱلْأَسْبَاطَ كَانُوا۟ هُودًا أَوْ نَصَـٰرَىٰ ۗ قُلْ ءَأَنتُمْ أَعْلَمُ أَمِ ٱللَّهُ ۗ وَمَنْ أَظْلَمُ مِمَّن كَتَمَ شَهَـٰدَةً عِندَهُۥ مِنَ ٱللَّهِ ۗ وَمَا ٱللَّهُ بِغَـٰفِلٍ عَمَّا تَعْمَلُونَ',
        translation: 'Or do you say that Abraham and Ishmael and Isaac and Jacob and the Descendants were Jews or Christians? Say, "Are you more knowing or is Allah?" And who is more unjust than one who conceals a testimony he has from Allah? And Allah is not unaware of what you do.'
    },
    {
        verse: 141,
        arabic: 'تِلْكَ أُمَّةٌۭ قَدْ خَلَتْ ۖ لَهَا مَا كَسَبَتْ وَلَكُم مَّا كَسَبْتُمْ ۖ وَلَا تُsْـَٔلُونَ عَمَّا كَانُوا۟ يَعْمَلُونَ',
        translation: 'That was a nation which has passed on. It will have [the consequence of] what it earned, and you will have what you have earned. And you will not be asked about what they used to do.'
    },
    {
        verse: 142,
        arabic: 'سَيَقُولُ ٱلسُّفَهَآءُ مِنَ ٱلنَّاسِ مَا وَلَّىٰهُمْ عَن قِبْلَتِهِمُ ٱلَّتِى كَانُوا۟ عَلَيْهَا ۚ قُل لِّلَّهِ ٱلْمَشْرِقُ وَٱلْمَغْرِبُ ۚ يَهْدِى مَن يَشَآءُ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ',
        translation: 'The foolish among the people will say, "What has turned them away from their qiblah, which they used to face?" Say, "To Allah belongs the east and the west. He guides whom He wills to a straight path."'
    },
    {
        verse: 143,
        arabic: 'وَكَذَٰلِكَ جَعَلْنَـٰكُمْ أُمَّةًۭ وَسَطًۭا لِّتَكُونُوا۟ شُهَدَآءَ عَلَى ٱلنَّاسِ وَيَكُونَ ٱلرَّسُولُ عَلَيْكُمْ شَهِيدًۭا ۗ وَمَا جَعَلْنَا ٱلْقِبْلَةَ ٱلَّتِى كُنتَ عَلَيْهَآ إِلَّا لِنَعْلَمَ مَن يَتَّبِعُ ٱلرَّسُولَ مِمَّن يَنقَلِبُ عَلَىٰ عَقِبَيْهِ ۚ وَإِن كَانَتْ لَكَبِيرَةً إِلَّا عَلَى ٱلَّذِينَ هَدَى ٱللَّهُ ۗ وَمَا كَانَ ٱللَّهُ لِيُضِيعَ إِيمَـٰنَكُمْ ۚ إِنَّ ٱللَّهَ بِٱلنَّاسِ لَرَءُوفٌۭ رَّحِيمٌۭ',
        translation: 'And thus we have made you a just community that you will be witnesses over the people and the Messenger will be a witness over you. And We did not make the qiblah which you used to face except that We might make evident who follows the Messenger from who turns back on his heels. And indeed, it is difficult except for those whom Allah has guided. And never would Allah have caused you to lose your faith. Indeed Allah is, to the people, Kind and Merciful.'
    },
    {
        verse: 144,
        arabic: 'قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِى ٱلسَّمَآءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةًۭ تَرْضَىٰهَا ۚ فَوَلِّ وَجْهَكَ شَطْرَ ٱلْمَسْجِدِ ٱلْحَرَامِ ۚ وَحَيْثُ مَا كُنتُمْ فَوَلُّوا۟ وُجُوهَكُمْ شَطْرَهُۥ ۗ وَإِنَّ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَـٰبَ لَيَعْلَمُونَ أَنَّهُ ٱلْحَقُّ مِن رَّبِّهِمْ ۗ وَمَا ٱللَّهُ بِغَـٰفِلٍ عَمَّا يَعْمَلُونَ',
        translation: 'We have certainly seen the turning of your face, [O Muhammad], toward the heaven, and We will surely turn you to a qiblah with which you will be pleased. So turn your face toward al-Masjid al-Haram. And wherever you [believers] are, turn your faces toward it [in prayer]. Indeed, those who have been given the Scripture well know that it is the truth from their Lord. And Allah is not unaware of what they do.'
    },
    {
        verse: 145,
        arabic: 'وَلَئِنْ أَتَيْتَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَـٰبَ بِكُلِّ ءَايَةٍۢ مَّا تَبِعُوا۟ قِبْلَتَكَ ۚ وَمَآ أَنتَ بِتَابِعٍۢ قِبْلَتَهُمْ ۚ وَمَا بَعْضُهُم بِتَابِعٍۢ قِبْلَةَ بَعْضٍۢ ۚ وَلَئِنِ ٱتَّبَعْتَ أَهْوَآءَهُم مِّنۢ بَعْدِ مَا جَآءَكَ مِنَ ٱلْعِلْمِ ۙ إِنَّكَ إِذًۭا لَّمِنَ ٱلظَّـٰلِمِينَ',
        translation: 'And even if you were to bring to those who were given the Scripture every sign, they would not follow your qiblah. Nor will you be a follower of their qiblah. Nor are some of them followers of the qiblah of others. So if you were to follow their desires after what has come to you of knowledge, indeed, you would then be among the wrongdoers.'
    },
    {
        verse: 146,
        arabic: 'ٱلَّذِينَ ءَاتَيْنَـٰهُمُ ٱlْkِtَـٰbَ yَعْرِfُونَهُۥ kَمَا yَعْرِfُونَ أَبْنَāءَهُمْ ۖ وَإِنَّ fَرِيقًۭa mِّنْhُمْ لَيَkْتُمُونَ ٱlْḥَقَّ وَhُمْ yَعْلَمُونَ',
        translation: 'Those to whom We gave the Scripture know him as they know their own sons. But indeed, a party of them conceal the truth while they know [it].'
    },
    {
        verse: 147,
        arabic: 'ٱلْحَقُّ مِن رَّبِّكَ ۖ فَلَا تَكُونَنَّ مِنَ ٱلْمُمْتَرِينَ',
        translation: 'The truth is from your Lord, so never be among the doubters.'
    },
    {
        verse: 148,
        arabic: 'وَلِكُلٍّۢ وِجْهَةٌ هُوَ مُوَلِّيهَا ۖ فَٱsْتَبِqُوا۟ ٱlْkhَيْرَٰtِ ۚ أَيْنَ مَا تَkُونُوا۟ يَأْتِ بِkُمُ ٱllَّهُ جَمِيعًا ۚ إِنَّ ٱllَّهَ عَلَىٰ kُلِّ shَىْءٍۢ qَدِيرٌۭ',
        translation: 'For each [religious following] is a direction toward which it faces. So race to [all that is] good. Wherever you may be, Allah will bring you forth [for judgement] all together. Indeed, Allah is over all things competent.'
    },
    {
        verse: 149,
        arabic: 'وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ ٱلْمَسْجِدِ ٱلْحَرَامِ ۖ وَإِنَّهُۥ لَلْحَقُّ مِن رَّبِّكَ ۗ وَمَا ٱللَّهُ بِغَـٰفِلٍ عَمَّا تَعْمَلُونَ',
        translation: 'So from wherever you go out [for prayer, O Muhammad] turn your face toward al- Masjid al-Haram. And indeed, it is the truth from your Lord. And Allah is not unaware of what you do.'
    },
    {
        verse: 150,
        arabic: 'وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ ٱلْمَسْجِدِ ٱلْحَرَامِ ۚ وَحَيْثُ مَا كُنتُمْ فَوَلُّوا۟ وُجُوهَكُمْ شَطْرَهُۥ لِئَلَّا يَكُونَ لِلنَّاسِ عَلَيْكُمْ حُجَّةٌ إِلَّا ٱلَّذِينَ ظَلَمُوا۟ مِنْهُمْ فَلَا تَخْشَوْهُمْ وَٱخْشَوْنِى وَلِأُتِمَّ نِعْمَتِى عَلَيْكُمْ وَلَعَلَّكُمْ تَهْتَدُونَ',
        translation: 'And from wherever you go out [for prayer], turn your face toward al-Masjid al-Haram. And wherever you [believers] may be, turn your faces toward it in order that the people will not have any argument against you, except for those of them who commit wrong; so fear them not but fear Me. And [it is] so I may complete My favor upon you and that you may be guided.'
    },
    {
        verse: 151,
        arabic: 'كَمَآ أَرْسَلْنَا فِيكُمْ رَسُولًۭا مِّنكُمْ يَتْلُوا۟ عَلَيْكُمْ ءَايَـٰتِنَا وَيُزَكِّيكُمْ وَيُعَلِّمُكُمُ ٱلْكِتَـٰبَ وَٱلْحِكْمَةَ وَيُعَلِّمُكُم مَّا لَمْ تَكُونُوا۟ تَعْلَمُونَ',
        translation: 'Just as We have sent among you a messenger from yourselves reciting to you Our verses and purifying you and teaching you the Book and wisdom and teaching you that which you did not know.'
    },
    {
        verse: 152,
        arabic: 'فَٱذْكُرُونِىٓ أَذْكُرْكُمْ وَٱشْكُرُوا۟ لِى وَلَا تَكْفُرُونِ',
        translation: 'So remember Me; I will remember you. And be grateful to Me and do not deny Me.'
    },
    {
        verse: 153,
        arabic: 'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَعِينُوا۟ بِٱلصَّبْرِ وَٱلصَّلَوٰةِ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ',
        translation: 'O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.'
    },
    {
        verse: 154,
        arabic: 'وَلَا تَقُولُوا۟ لِمَن يُقْتَلُ فِى سَبِيلِ ٱللَّهِ أَمْوَٰتٌۢ ۚ بَلْ أَحْيَآءٌۭ وَلَـٰكِن لَّا تَشْعُرُونَ',
        translation: 'And do not say about those who are killed in the way of Allah, "They are dead." Rather, they are alive, but you perceive [it] not.'
    },
    {
        verse: 155,
        arabic: 'وَلَنَبْلُوَنَّكُم بِشَىْءٍۢ مِّنَ ٱلْخَوْفِ وَٱلْجُوعِ وَنَقْصٍۢ مِّنَ ٱلْأَمْوَٰلِ وَٱلْأَنفُسِ وَٱلثَّمَرَٰتِ ۗ وَبَشِّرِ ٱلصَّـٰبِرِينَ',
        translation: 'And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient,'
    },
    {
        verse: 156,
        arabic: 'ٱلَّذِينَ إِذَآ أَصَـٰبَتْهُم مُّصِيبَةٌۭ قَالُوٓا۟ إِنَّا لِلَّهِ وَإِنَّآ إِلَيْهِ rَٰjِcُونَ',
        translation: 'Who, when disaster strikes them, say, "Indeed we belong to Allah, and indeed to Him we will return."'
    },
    {
        verse: 157,
        arabic: 'أُو۟lَـٰٓئِكَ عَلَيْهِمْ صَلَوَٰtٌۭ mِّن rَّbِّhِمْ وَrَحْمَةٌۭ ۖ وَأُو۟lَـٰٓئِكَ hُمُ ٱlْمُhْتَدُونَ',
        translation: 'Those are the ones upon whom are blessings from their Lord and mercy. And it is those who are the [rightly] guided.'
    },
    {
        verse: 158,
        arabic: 'إِنَّ ٱlṣَّfَا وَٱlْمَرْwَةَ مِن شَعَآئِرِ ٱllَّهِ ۖ fَمَنْ ḥَjَّ ٱlْبَيْتَ أَوِ ٱcْتَمَرَ fَلَا jُنَاḥَ عَلَيْهِ أَن yَṭَّwَّfَ بِhِمَا ۚ وَmَن تَṭَwَّcَ khَيْرًۭa fَإِنَّ ٱllَّهَ shākirٌ عَلِيمٌ',
        translation: 'Indeed, as-Safa and al-Marwah are among the symbols of Allah. So whoever makes Hajj to the House or performs \'umrah - there is no blame upon him for walking between them. And whoever volunteers good - then indeed, Allah is appreciative and Knowing.'
    },
    {
        verse: 159,
        arabic: 'إِنَّ ٱlَّذِينَ yَkْتُمُونَ مَآ أَنzَلْنَا مِنَ ٱlْبَيِّنَـٰtِ وَٱlْhُdَىٰ مِنۢ bَعْدِ مَا bَيَّnَّـٰhُ لِلnَّāsِ fِى ٱlْkِtَـٰbِ ۙ أُو۟lَـٰٓئِكَ yَلْعَنُhُمُ ٱllَّهُ وَyَلْعَنُhُمُ ٱllَّـٰcِنُونَ',
        translation: 'Indeed, those who conceal what We sent down of clear proofs and guidance after We made it clear for the people in the Scripture - those are cursed by Allah and cursed by those who curse,'
    },
    {
        verse: 160,
        arabic: 'إِلَّا ٱlَّذِينَ tābُوا۟ وَأَصْلَحُوا۟ وَbَيَّnُوا۟ fَأُو۟lَـٰٓئِكَ أَتُوبُ عَلَيْhِمْ ۚ وَأَنَا ٱltَّwَّābُ ٱlrَّḥīmu',
        translation: 'Except for those who repent and correct themselves and make clear [what they concealed]. Those - I will accept their repentance, and I am the Accepting of repentance, the Merciful.'
    },
    {
        verse: 161,
        arabic: 'إِنَّ ٱlَّذِينَ kَفَرُوا۟ وَmَاتُوا۟ وَhُمْ kُfَّārٌ أُو۟lَـٰٓئِكَ عَلَيْhِمْ lَعْنَةُ ٱllَّهِ وَٱlْمَلَـٰٓئِkَةِ وَٱlnَّāsِ أَjْمَعِينَ',
        translation: 'Indeed, those who disbelieve and die while they are disbelievers - upon them will be the curse of Allah and of the angels and the people, all together,'
    },
    {
        verse: 162,
        arabic: 'khَـٰlِدِينَ fīhā ۖ lā يُkhَفَّfُ عَنْhُمُ ٱlْعَzābُ وَlā hُمْ يُnẓَرُونَ',
        translation: 'Abiding eternally therein. The punishment will not be lightened for them, nor will they be reprieved.'
    },
    {
        verse: 163,
        arabic: 'وَإِلَـٰhُkُمْ إِلَـٰhٌۭ wَٰḥidٌۭ ۖ lَّāٓ إِلَـٰhَ إِلَّا hُوَ ٱlrَّḥmَـٰnُ ٱlrَّḥīmu',
        translation: 'And your god is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful.'
    },
    {
        verse: 164,
        arabic: 'إِنَّ fِى khَلْqِ ٱlsَّmَـٰwَٰtِ وَٱlْأَرْḍِ وَٱkhْتِلَـٰfِ ٱlَّyْلِ وَٱlnَّhārِ وَٱlْfُلْkِ ٱlَّtī تَjْرِى fِى ٱlْbَḥrِ bِمَا yَnfَعُ ٱlnَّāsَ وَmāٓ أَنzَلَ ٱllَّهُ مِنَ ٱlsَّmāٓءِ مِن mَّāٓءٍۢ fَأَḥyā بِهِ ٱlْأَرْḍَ bَعْدَ mَوْtihā وَbَthَّ fīhā مِن kُلِّ dāٓbَّةٍۢ وَtəṣْرِīfِ ٱlrِّyāḥِ وَٱlsَّḥābِ ٱlْمُsَkhَّrِ bَيْنَ ٱlsَّmāٓءِ وَٱlْأَرْḍِ lَـَٔāyَـٰtٍۢ lِّqَوْmٍۢ yَعْqِلُونَ',
        translation: 'Indeed, in the creation of the heavens and earth, and the alternation of the night and the day, and the [great] ships which sail through the sea with that which benefits people, and what Allah has sent down from the heavens of rain, giving life thereby to the earth after its lifelessness and dispersing therein every [kind of] moving creature, and [His] directing of the winds and the clouds controlled between the heaven and the earth are signs for a people who use reason.'
    },
    {
        verse: 165,
        arabic: 'وَمِنَ ٱlnَّāsِ mَن yَتَّkhِzُ مِن dُونِ ٱllَّهِ أَنdādًۭa يُḥibُّونَhُمْ kəḥubِّ ٱllَّهِ ۖ وَٱlَّذِينَ ءāmanُوٓا۟ أَshَدُّ ḥubًّۭa lِّلَّهِ ۗ وَlَوْ yَرَى ٱlَّذِينَ ẓَلَمُوٓا۟ إِzْ yَرَوْnَ ٱlْعَzābَ أَنَّ ٱlْqُوَّةَ لِلَّهِ jَمِيعًۭa وَأَنَّ ٱllَّهَ shədīdu ٱlْعَzābِ',
        translation: 'And [yet], among the people are those who take other than Allah as equals [to Him]. They love them as they [should] love Allah. But those who believe are stronger in love for Allah. And if only they who have wronged would consider [that] when they see the punishment, [they will be certain] that all power belongs to Allah and that Allah is severe in punishment.'
    },
    {
        verse: 166,
        arabic: 'إِzْ تَبَرَّأَ ٱlَّذِينَ ٱtُّbِcُوا۟ مِنَ ٱlَّذِينَ ٱtَّbَعُوا۟ وَrَأَwُا۟ ٱlْعَzābَ وَtəqַṭَّcَتْ بِhِمُ ٱlْأَسْبَابُ',
        translation: '[And] when those who were followed disown those who followed [them], and they [all] see the punishment, and cut off from them are the ties [of relationship],'
    },
    {
        verse: 167,
        arabic: 'وَqَالَ ٱlَّذِينَ ٱtَّbَعُوا۟ lَوْ أَنَّ لَنَا kَرَّةًۭ fَنَتَبَرَّأَ مِنْhُمْ kَمَا تَبَرَّءُوا۟ مِنَّا ۗ kəzَٰlِكَ يُrīhِمُ ٱllَّهُ أَعْمَـٰlَهُمْ ḥəsərَٰtٍ عَلَيْhِمْ ۖ وَmَا hُم بِkhَـٰrِjِينَ مِنَ ٱlnَّārِ',
        translation: 'Those who followed will say, "If only we had another chance [at life], we would disown them as they have disowned us." Thus will Allah show them their deeds as regrets upon them. And they are never to emerge from the Fire.'
    },
    {
        verse: 168,
        arabic: 'يَـٰٓأَيُّhā ٱlnَّāsُ kُلُوا۟ mِmَّا fِى ٱlْأَرْḍِ ḥəlَـٰlًۭaṭṭayyibًۭa وَlā tattabicū khṭwāṭi ٱlshayṭāni ۚ ʾinnahu lakum ʿaduwwun mubīn',
        translation: 'O mankind, eat from whatever is on earth [that is] lawful and good and do not follow the footsteps of Satan. Indeed, he is to you a clear enemy.'
    },
    {
        verse: 169,
        arabic: 'إِنَّmَا yَأْمُرُkُم بِٱlsُّūٓءِ وَٱlْfَḥshāٓءِ وَأَن تَqُولُوا۟ عَلَى ٱllَّهِ mā lā taʿlamūn',
        translation: 'He only orders you to evil and immorality and to say about Allah what you do not know.'
    },
    {
        verse: 170,
        arabic: 'وَإِzā qīla lahumu-ttabicū mā anzal-allāhu qālū bal nattabiʿu mā alfaynā ʿalayhi ābāʾanā ۗ awalaw kāna ābāʾuhum lā yaʿqilūna shayʾan walā yahtadūn',
        translation: 'And when it is said to them, "Follow what Allah has revealed," they say, "Rather, we will follow that upon which we found our fathers." Even if their fathers understood nothing, nor were they guided?'
    },
    {
        verse: 171,
        arabic: 'وَmَthَلُ ٱlَّdhīna kafarū kamathali-lladhī yanʿiqu bimā lā yasmaʿu illā duʿāʾan wanidāʾan ۚ ṣummun bukmun ʿumyun fahum lā yaʿqilūn',
        translation: 'The example of those who disbelieve is like that of one who shouts at what hears nothing but calls and cries cattle or sheep - deaf, dumb and blind, so they do not understand.'
    },
    {
        verse: 172,
        arabic: 'yā-ayyuhā-lladhīna āmanū kulū min ṭayyibāti mā razaqnākum washkurū lillāhi in kuntum iyyāhu taʿbudūn',
        translation: 'O you who have believed, eat from the good things which We have provided for you and be grateful to Allah if it is [indeed] Him that you worship.'
    },
    {
        verse: 173,
        arabic: 'innamā ḥarama ʿalaykumu-lmaytata waddama walaḥma-lkhinzīri wamā uhilla bihī lighayri-llāhi ۖ famani-ḍṭurra ghayra bāghin walā ʿādin falā ithma ʿalayhi ۚ inna-llāha ghafūrun raḥīm',
        translation: 'He has only forbidden to you dead animals, blood, the flesh of swine, and that which has been dedicated to other than Allah. But whoever is forced [by necessity], neither desiring [it] nor transgressing [its limit], there is no sin upon him. Indeed, Allah is Forgiving and Merciful.'
    },
    {
        verse: 174,
        arabic: 'inna-lladhīna yaktumūna mā anzala-llāhu mina-lkitābi wayashtarūna bihī thamanan qalīlan ۙ ulāʾika mā yaʾkulūna fī buṭūnihim illa-nnāra walā yukallimuhumu-llāhu yawma-lqiyāmati walā yuzakkīhim walahum ʿadhābun alīm',
        translation: 'Indeed, they who conceal what Allah has sent down of the Book and exchange it for a small price - those consume not into their bellies except the Fire. And Allah will not speak to them on the Day of Resurrection, nor will He purify them. And they will have a painful punishment.'
    },
    {
        verse: 175,
        arabic: 'ulāʾika-lladhīna-shtarawu-ḍḍalālata bil-hudā wal-ʿadhāba bil-maghfirati ۚ famā aṣbarahum ʿalā-nnār',
        translation: 'Those are the ones who have exchanged guidance for error and forgiveness for punishment. How patient they are in pursuit of the Fire!'
    },
    {
        verse: 176,
        arabic: 'dhālika bi-anna-llāha nazzala-lkitāba bil-ḥaqqi ۗ wa-inna-lladhīna-khtalafū fi-lkitābi lafī shiqāqin baʿīd',
        translation: 'That is [deserved by them] because Allah has sent down the Book in truth. And indeed, those who differ over the Book are in extreme dissension.'
    },
    {
        verse: 177,
        arabic: 'laysa-lbirra an tuwallū wujūhakum qibala-lmashriqi wal-maghribi walākinna-lbirra man āmana billāhi wal-yawmi-l-ākhiri wal-malāʾikati wal-kitābi wan-nabiyyīna wa-āta-lmāla ʿalā ḥubbihī dhawi-lqurbā wal-yatāmā wal-masākīna wabna-ssabīli was-sāʾilīna wafī-rriqābi wa-aqāma-ṣṣalāta wa-āta-zzakāta wal-mūfūna biʿahdihim idhā ʿāhadū ۖ waṣ-ṣābirīna fi-lbaʾsāʾi waḍ-ḍarrāʾi waḥīna-lbaʾsi ۗ ulāʾika-lladhīna ṣadaqū ۖ wa-ulāʾika humu-lmuttaqūn',
        translation: 'Righteousness is not in turning your faces towards the east or the west. Rather, the righteous are those who believe in Allah, the Last Day, the angels, the Books, and the prophets; who give charity out of their cherished wealth to relatives, orphans, the poor, ˹needy˺ travellers, beggars, and for freeing captives; who establish prayer, pay alms-tax, and keep the pledges they make; and who are patient in times of suffering, adversity, and in ˹the heat of˺ battle. It is they who are true ˹in faith˺, and it is they who are mindful ˹of Allah˺.'
    },
    {
        verse: 178,
        arabic: 'yā-ayyuhā-lladhīna āmanū kutiba ʿalaykumu-lqiṣāṣu fi-lqatlā ۖ al-ḥurru bil-ḥurri wal-ʿabdu bil-ʿabdi wal-unthā bil-unthā ۚ faman ʿufiya lahū min akhīhi shayʾun fattibāʿun bil-maʿrūfi wa-adāʾun ilayhi bi-iḥsānin ۗ dhālika takhfīfun min rabbikum waraḥmatun ۗ famani-ʿtadā baʿda dhālika falahū ʿadhābun alīm',
        translation: 'O believers! The law of retaliation is prescribed for you in cases of murder: the free for the free, the slave for the slave, and the female for the female. But if the offender is pardoned by the victim’s guardian, then restitution should be made with fairness and payment made in a good way. This is a concession and a mercy from your Lord. But whoever transgresses after that will have a painful punishment.'
    },
    {
        verse: 179,
        arabic: 'walakum fi-lqiṣāṣi ḥayātun yā-uli-l-albābi laʿallakum tattaqūn',
        translation: 'There is ˹security of˺ life for you in ˹the law of˺ retaliation, O people of reason, so that you may become mindful ˹of Allah˺.'
    },
    {
        verse: 180,
        arabic: 'kutiba ʿalaykum idhā ḥaḍara aḥadakumu-lmawtu in taraka khayran al-waṣiyyatu lil-wālidayni wal-aqrabīna bil-maʿrūfi ۖ ḥaqqan ʿalā-lmuttaqīn',
        translation: 'It is prescribed for you that when death approaches any of you, if he leaves wealth, he should make a bequest for his parents and near relatives with justice—a duty upon the righteous.'
    },
    {
        verse: 181,
        arabic: 'faman baddalahū baʿdamā samiʿahū fa-innamā ithmuhū ʿalā-lladhīna yubaddilūnahū ۚ inna-llāha samīʿun ʿalīm',
        translation: 'Then whoever alters it after having heard it, the sin is only upon those who alter it. Indeed, Allah is Hearing and Knowing.'
    },
    {
        verse: 182,
        arabic: 'faman khāfa min mūṣin janafan aw ithman fa-aṣlaḥa baynahum falā ithma ʿalayhi ۚ inna-llāha ghafūrun raḥīm',
        translation: 'But if anyone fears from a testator some error or sin and corrects that which is between them, there is no sin upon him. Indeed, Allah is Forgiving and Merciful.'
    },
    {
        verse: 183,
        arabic: 'yā-ayyuhā-lladhīna āmanū kutiba ʿalaykumu-ṣṣiyāmu kamā kutiba ʿalā-lladhīna min qablikum laʿallakum tattaqūn',
        translation: 'O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous -'
    },
    {
        verse: 184,
        arabic: 'ayyāman maʿdūdātin ۚ faman kāna minkum marīḍan aw ʿalā safarin faʿiddatun min ayyāmin ukhara ۚ waʿalā-lladhīna yuṭīqūnahū fidyatun ṭaʿāmu miskīnin ۖ faman taṭawwaʿa khayran fahuwa khayrun lahū ۚ wa-an taṣūmū khayrun lakum ۖ in kuntum taʿlamūn',
        translation: '[Fasting for] a limited number of days. So whoever among you is ill or on a journey [during them] - then an equal number of days [are to be made up]. And upon those who are able [to fast, but with great difficulty] - a ransom [as a substitute] of feeding a poor person [each day]. And whoever volunteers excess - it is better for him. But to fast is best for you, if you only knew.'
    },
    {
        verse: 185,
        arabic: 'shahru ramaḍāna-lladhī unzila fīhi-lqurʾānu hudan linnāsi wabayyinātin mina-lhudā wal-furqāni ۚ faman shahida minkumu-shshahra falyaṣumhu ۖ waman kāna marīḍan aw ʿalā safarin faʿiddatun min ayyāmin ukhara ۗ yurīdu-llāhu bikumu-lyusra walā yurīdu bikumu-lʿusra walitukmilu-lʿiddata walitukabbiru-llāha ʿalā mā hadākum walaʿallakum tashkurūn',
        translation: 'The month of Ramadhan [is that] in which was revealed the Qur\'an, a guidance for the people and clear proofs of guidance and criterion. So whoever sights [the new moon of] the month, let him fast it; and whoever is ill or on a journey - then an equal number of other days. Allah intends for you ease and does not intend for you hardship and [wants] for you to complete the period and to glorify Allah for that [to] which He has guided you; and perhaps you will be grateful.'
    },
    {
        verse: 186,
        arabic: 'wa-idhā saʾalaka ʿibādī ʿannī fa-innī qarībun ۖ ujību daʿwata-ddāʿi idhā daʿāni ۖ falyastajībū lī walyuʾminū bī laʿallahum yarshudūn',
        translation: 'And when My servants ask you, [O Muhammad], concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me. So let them respond to Me [by obedience] and believe in Me that they may be [rightly] guided.'
    },
    {
        verse: 187,
        arabic: 'uḥilla lakum laylata-ṣṣiyāmi-rrafathu ilā nisāʾikum ۚ hunna libāsun lakum wa-antum libāsun lahunna ۗ ʿalima-llāhu annakum kuntum takhtānūna anfusakum fatāba ʿalaykum waʿafā ʿankum ۖ fal-āna bāshirūhunna wabtaghū mā kataba-llāhu lakum ۚ wakulū washrabū ḥattā yatabayyana lakumu-lkhayṭu-l-abyaḍu mina-lkhayṭi-l-aswadi mina-lfajri ۖ thumma atimmu-ṣṣiyāma ilā-llayli ۚ walā tubāshirūhunna wa-antum ʿākifūna fi-lmasājidi ۗ tilka ḥudūdu-llāhi falā taqrabūhā ۗ kadhālika yubayyinu-llāhu āyātihī linnāsi laʿallahum yattaqūn',
        translation: 'It has been made permissible for you the night preceding fasting to go to your wives [for sexual relations]. They are clothing for you and you are clothing for them. Allah knows that you used to deceive yourselves, so He accepted your repentance and forgave you. So now, have relations with them and seek that which Allah has decreed for you. And eat and drink until the white thread of dawn becomes distinct to you from the black thread [of night]. Then complete the fast until the sunset. And do not have relations with them as long as you are in seclusion for worship in the mosques. These are the limits [set by] Allah, so do not approach them. Thus does Allah make clear His verses to the people that they may become righteous.'
    },
    {
        verse: 188,
        arabic: 'walā taʾkulū amwālakum baynakum bil-bāṭili watudlū bihā ilā-lḥukkāmi litaʾkulū farīqan min amwāli-nnāsi bil-ithmi wa-antum taʿlamūn',
        translation: 'And do not consume one another\'s wealth unjustly or send it [in bribery] to the rulers in order that [they might aid] you [to] consume a portion of the wealth of the people in sin, while you know [it is unlawful].'
    },
    {
        verse: 189,
        arabic: 'yasʾalūnaka ʿani-l-ahillati ۖ qul hiya mawāqītu linnāsi wal-ḥajji ۗ walaysa-lbirru bi-an taʾtu-lbuyūta min ẓuhūrihā walākinna-lbirra mani-ttaqā ۗ waʾtu-lbuyūta min abwābihā ۚ wattaqu-llāha laʿallakum tufliḥūn',
        translation: 'They ask you, [O Muhammad], about the new moons. Say, "They are measurements of time for the people and for Hajj." And it is not righteousness to enter houses from the back, but righteousness is [in] one who fears Allah. And enter houses from their doors. And fear Allah that you may succeed.'
    },
    {
        verse: 190,
        arabic: 'waqātilū fī sabīli-llāhi-lladhīna yuqātilūnakum walā taʿtadū ۚ inna-llāha lā yuḥibbu-lmuʿtadīn',
        translation: 'Fight in the way of Allah those who fight you but do not transgress. Indeed. Allah does not like transgressors.'
    },
    {
        verse: 191,
        arabic: 'waqtulūhum ḥaythu thaqiftumūhum wa-akhrijūhum min ḥaythu akhrajūkum ۚ wal-fitnatu ashaddu mina-lqatli ۚ walā tuqātilūhum ʿinda-lmasjidi-lḥarāmi ḥattā yuqātilūkum fīhi ۖ fa-in qātalūkum faqtulūhum ۗ kadhālika jazāʾu-lkāfirīn',
        translation: 'And kill them wherever you overtake them and expel them from wherever they have expelled you, and fitnah is worse than killing. And do not fight them at al-Masjid al- Haram until they fight you there. But if they do fight you, then kill them. Such is the recompense of the disbelievers.'
    },
    {
        verse: 192,
        arabic: 'fa-ini-ntahaw fa-inna-llāha ghafūrun raḥīm',
        translation: 'And if they cease, then indeed, Allah is Forgiving and Merciful.'
    },
    {
        verse: 193,
        arabic: 'waqātilūhum ḥattā lā takūna fitnatun wayakūna-ddīnu lillāhi ۖ fa-ini-ntahaw falā ʿudwāna illā ʿalā-ẓẓālimīn',
        translation: 'Fight them until there is no [more] fitnah and [until] worship is [acknowledged to be] for Allah. But if they cease, then there is to be no aggression except against the oppressors.'
    },
    {
        verse: 194,
        arabic: 'ash-shahru-lḥarāmu bish-shahri-lḥarāmi wal-ḥurumātu qiṣāṣun ۚ famani-ʿtadā ʿalaykum faʿtadū ʿalayhi bimithli mā-ʿtadā ʿalaykum ۚ wattaqu-llāha waʿlamū anna-llāha maʿa-lmuttaqīn',
        translation: 'The sacred month is for the sacred month, and for [all] violations is legal retribution. So whoever has assaulted you, then assault him in the same way that he has assaulted you. And fear Allah and know that Allah is with those who fear Him.'
    },
    {
        verse: 195,
        arabic: 'wa-anfiqū fī sabīli-llāhi walā tulqū bi-aydīkum ilā-ttahlukati ۛ wa-aḥsinū ۛ inna-llāha yuḥibbu-lmuḥsinīn',
        translation: 'And spend in the way of Allah and do not throw [yourselves] with your [own] hands into destruction [by refraining]. And do good; indeed, Allah loves the doers of good.'
    },
    {
        verse: 196,
        arabic: 'wa-atimmu-lḥajja wal-ʿumrata lillāhi ۚ fa-in uḥṣirtum famā-staysara mina-lhadyi ۖ walā taḥliqū ruʾūsakum ḥattā yablugha-lhadyu maḥillahū ۚ faman kāna minkum marīḍan aw bihī adhan min raʾsihī fafidyatun min ṣiyāmin aw ṣadaqatin aw nusukin ۚ fa-idhā amintum faman tamattaʿa bil-ʿumrati ilā-lḥajji famā-staysara mina-lhadyi ۚ faman lam yajid faṣiyāmu thalāthati ayyāmin fi-lḥajji wasabʿatin idhā rajaʿtum ۗ tilka ʿasharatun kāmilatun ۗ dhālika liman lam yakun ahluhū ḥāḍiri-lmasjidi-lḥarāmi ۚ wattaqu-llāha waʿlamū anna-llāha shadīdu-lʿiqāb',
        translation: 'And complete the Hajj and \'umrah for Allah. But if you are prevented, then [offer] what can be obtained with ease of sacrificial animals. And do not shave your heads until the sacrificial animal has reached its place of slaughter. And whoever among you is ill or has an ailment of the head [making shaving necessary must offer] a ransom of fasting [three days] or charity or sacrifice. And when you are secure, then whoever performs \'umrah [during the Hajj months] followed by Hajj [offers] what can be obtained with ease of sacrificial animals. And whoever cannot find [or afford such an animal] - then a fast of three days during Hajj and of seven when you have returned [home]. Those are ten complete [days]. This is for those whose family is not in the area of al-Masjid al-Haram. And fear Allah and know that Allah is severe in penalty.'
    },
    {
        verse: 197,
        arabic: 'al-ḥajju ashhurun maʿlūmātun ۚ faman faraḍa fīhinna-lḥajja falā rafatha walā fusūqa walā jidāla fi-lḥajji ۗ wamā tafʿalū min khayrin yaʿlamhu-llāhu ۗ watazawwadū fa-inna khayra-zzādi-ttaqwā ۚ wattaqūni yā-uli-l-albāb',
        translation: 'Hajj is [during] well-known months, so whoever has made Hajj obligatory upon himself therein [by entering the state of ihram], there is [to be for him] no sexual relations and no disobedience and no disputing during Hajj. And whatever good you do - Allah knows it. And take provisions, but indeed, the best provision is fear of Allah. And fear Me, O you of understanding.'
    },
    {
        verse: 198,
        arabic: 'laysa ʿalaykum junāḥun an tabtaghū faḍlan min rabbikum ۚ fa-idhā afaḍtum min ʿarafātin fadhkuru-llāha ʿinda-lmashʿari-lḥarāmi ۖ wadhkurūhu kamā hadākum wa-in kuntum min qablihī lamina-ḍḍāllīn',
        translation: 'There is no blame upon you for seeking bounty from your Lord [during Hajj]. But when you depart from \'Arafat, remember Allah at al- Mash\'ar al-Haram. And remember Him, as He has guided you, for indeed, you were before that among those astray.'
    },
    {
        verse: 199,
        arabic: 'thumma afīḍū min ḥaythu afāḍa-nnāsu wastaghfiru-llāha ۚinna-llāha ghafūrun raḥīm',
        translation: 'Then depart from the place from where [all] the people depart and ask forgiveness of Allah. Indeed, Allah is Forgiving and Merciful.'
    },
    {
        verse: 200,
        arabic: 'fa-idhā qaḍaytum manāsikakum fadhkuru-llāha kadhikrikum ābāʾakum aw ashadda dhikran ۗ famina-nnāsi man yaqūlu rabbanā ātinā fi-ddunyā wamā lahū fi-l-ākhirati min khalāq',
        translation: 'And when you have completed your rites, remember Allah like your [previous] remembrance of your fathers or with [much] greater remembrance. And among the people is he who says, "Our Lord, give us in this world," and he will have in the Hereafter no share.'
    },
    {
        verse: 201,
        arabic: 'وَمِنْهُم مَّن يَقُولُ رَبَّنَآ ءَاتِنَا فِى ٱldُّnْyَا حَسَنَةًۭ وَفِى ٱlْـَٔاخِرَةِ حَسَنَةًۭ وَقِنَا عَذَابَ ٱlnَّارِ',
        translation: 'But among them is he who says, "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire."'
    },
    {
        verse: 202,
        arabic: 'أُو۟لَـٰٓئِكَ لَهُمْ نَصِيبٌۭ mِّمَّا كَسَبُوا۟ ۚ وَٱllَّهُ sَرِيعُ ٱlْحِسَاbِ',
        translation: 'Those will have a share of what they have earned, and Allah is swift in account.'
    },
    {
        verse: 203,
        arabic: 'وَٱذْكُرُوا۟ ٱللَّهَ فِىٓ أَيَّامٍۢ مَّعْدُودَٰتٍۢ ۚ فَمَن تَعَجَّلَ فِى يَوْمَيْنِ فَلَآ إِثْمَ عَلَيْهِ وَمَن تَأَخَّرَ فَلَآ إِثْمَ عَلَيْهِ ۚ لِمَنِ ٱtَّqَىٰ ۗ وَٱtَّqُوا۟ ٱllَّهَ وَٱcْلَمُوٓا۟ أَنَّكُمْ إِلَيْهِ تُحْشَرُونَ',
        translation: 'And remember Allah during [specific] numbered days. Then whoever hastens [his departure] in two days - there is no sin upon him; and whoever delays [until the third] - there is no sin upon him - for him who fears Allah. And fear Allah and know that unto Him you will be gathered.'
    },
    {
        verse: 204,
        arabic: 'وَمِنَ ٱلنَّاسِ مَن يُعْجِبُكَ قَوْلُهُۥ فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا وَيُشْهِدُ ٱللَّهَ عَلَىٰ مَا فِى قَلْبِهِۦ وَهُوَ أَلَدُّ ٱلْخِصَامِ',
        translation: 'And of the people is one whose speech impresses you in worldly life, and he calls Allah to witness as to what is in his heart, yet he is the fiercest of opponents.'
    },
    {
        verse: 205,
        arabic: 'وَإِذَا تَوَلَّىٰ سَعَىٰ فِى ٱلْأَرْضِ لِيُفْسِدَ فِيهَا وَيُهْلِكَ ٱلْحَرْثَ وَٱلنَّسْلَ ۗ وَٱللَّهُ لَا يُحِبُّ ٱلْفَسَادَ',
        translation: 'And when he goes away, he strives throughout the land to cause corruption therein and destroy crops and livestock. And Allah does not like corruption.'
    },
    {
        verse: 206,
        arabic: 'وَإِذَا قِيلَ لَهُ ٱتَّقِ ٱللَّهَ أَخَذَتْهُ ٱلْعِزَّةُ بِٱلْإِثْمِ ۚ فَحَسْبُهُۥ جَهَنَّمُ ۚ وَلَبِئْسَ ٱلْمِهَادُ',
        translation: 'And when it is said to him, "Fear Allah," pride in the sin takes hold of him. Sufficient for him is Hell, and wretched is the resting place.'
    },
    {
        verse: 207,
        arabic: 'وَمِنَ ٱلنَّاسِ مَن يَشْرِى نَفْسَهُ ٱبْتِغَآءَ مَرْضَاتِ ٱللَّهِ ۗ وَٱللَّهُ رَءُوفٌۢ بِٱلْعِبَادِ',
        translation: 'And of the people is he who sells himself, seeking means to the approval of Allah. And Allah is kind to [His] servants.'
    },
    {
        verse: 208,
        arabic: 'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱدْخُلُوا۟ فِى ٱلسِّلْمِ كَآفَّةًۭ وَلَا تَتَّبِعُوا۟ خُطُوَٰتِ ٱلشَّيْطَـٰنِ ۚ إِنَّهُۥ لَكُمْ عَدُوٌّۭ مُّبِينٌۭ',
        translation: 'O you who have believed, enter into Islam completely [and perfectly] and do not follow the footsteps of Satan. Indeed, he is to you a clear enemy.'
    },
    {
        verse: 209,
        arabic: 'فَإِن زَلَلْتُم مِّنۢ بَعْدِ مَا جَآءَتْكُمُ ٱلْبَيِّنَـٰتُ فَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌ',
        translation: 'But if you slip [into error] after the clear proofs have come to you, then know that Allah is Exalted in Might and Wise.'
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
