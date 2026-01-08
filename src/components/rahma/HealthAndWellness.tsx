
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { HealthIcon } from './HealthIcon';
import { ScrollArea } from '../ui/scroll-area';
import { HealthChatbot } from './HealthChatbot';
import { Separator } from '../ui/separator';
import { useLanguage } from '@/context/LanguageContext';

const healthSuggestions = [
  {
    category: 'Physical Health',
    kannada_category: 'शारीरिक आरोग्य',
    points: [
      {
        title: 'Eat in Moderation',
        kannada_title: 'ಮಿತವಾಗಿ ತಿನ್ನಿರಿ',
        arabic: 'وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ',
        transliteration: 'Wa kuloo washraboo wa laa tusrifoo; innahoo laa yuhibbul musrifeen',
        translation: 'And eat and drink, but be not excessive. Indeed, He likes not those who commit excess.',
        kannada_translation: 'ಮತ್ತು ತಿನ್ನಿರಿ ಮತ್ತು ಕುಡಿಯಿರಿ, ಆದರೆ ಮಿತಿಮೀರಬೇಡಿ. ನಿಶ್ಚಯವಾಗಿಯೂ, ಅವನು ಮಿತಿಮೀರುವವರನ್ನು ಇಷ್ಟಪಡುವುದಿಲ್ಲ.',
        reference: 'Quran 7:31',
      },
      {
        title: 'Hygiene and Cleanliness',
        kannada_title: 'ನೈರ್ಮಲ್ಯ ಮತ್ತು ಸ್ವಚ್ಛತೆ',
        arabic: 'إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ',
        transliteration: 'Inna Allaha yuhibbut-tawwabeena wa yuhibbul-mutatahhireen',
        translation: 'Indeed, Allah loves those who are constantly repentant and loves those who purify themselves.',
        kannada_translation: 'ನಿಶ್ಚಯವಾಗಿಯೂ, ಅಲ್ಲಾಹನು ನಿರಂತರವಾಗಿ ಪಶ್ಚಾತ್ತಾಪಪಡುವವರನ್ನು ಪ್ರೀತಿಸುತ್ತಾನೆ ಮತ್ತು ತಮ್ಮನ್ನು ಶುದ್ಧೀಕರಿಸುವವರನ್ನು ಪ್ರೀತಿಸುತ್ತಾನೆ.',
        reference: 'Quran 2:222',
      },
      {
        title: 'The Prophetic Diet',
        kannada_title: 'ಪ್ರವಾದಿಯ ಆಹಾರ',
        arabic: 'The Prophet (ﷺ) used to like honey and dates.',
        transliteration: 'The Prophet (peace be upon him) encouraged eating foods like dates, honey, olives, and barley for their health benefits.',
        translation: 'Embracing the diet of the Prophet Muhammad (ﷺ) can lead to better health. He consumed simple, natural foods and practiced portion control.',
        kannada_translation: 'ಪ್ರವಾದಿ ಮುಹಮ್ಮದ್ (ﷺ) ಅವರ ಆಹಾರವನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳುವುದು ಉತ್ತಮ ಆರೋಗ್ಯಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು. ಅವರು ಸರಳ, ನೈಸರ್ಗಿಕ ಆಹಾರಗಳನ್ನು ಸೇವಿಸಿದರು ಮತ್ತು ಭಾಗ ನಿಯಂತ್ರಣವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿದರು.',
        reference: 'Sahih al-Bukhari',
      },
    ],
  },
  {
    category: 'Spiritual & Mental Health',
    kannada_category: 'आध्यात्मिक અને માનસિક આરોગ્ય',
    points: [
      {
        title: 'Remembrance of Allah (Dhikr)',
        kannada_title: 'ಅಲ್ಲಾಹನ ಸ್ಮರಣೆ (ಧಿಕ್ರ್)',
        arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
        transliteration: 'Ala bi-dhikri Allahi tatma-innul-quloob',
        translation: 'Unquestionably, by the remembrance of Allah hearts are assured.',
        kannada_translation: 'ನಿಸ್ಸಂದೇಹವಾಗಿ, ಅಲ್ಲಾಹನ ಸ್ಮರಣೆಯಿಂದ ಹೃದಯಗಳು ಭರವಸೆಗೊಳ್ಳುತ್ತವೆ.',
        reference: 'Quran 13:28',
      },
      {
        title: 'Trust in Allah (Tawakkul)',
        kannada_title: 'ಅಲ್ಲಾಹನಲ್ಲಿ ನಂಬಿಕೆ (ತವಕ್ಕುಲ್)',
        arabic: 'وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
        transliteration: 'Wa man yatawakkal `ala Allahi fahuwa hasbuh',
        translation: 'And whoever relies upon Allah - then He is sufficient for him.',
        kannada_translation: 'ಮತ್ತು ಯಾರು ಅಲ್ಲಾಹನ ಮೇಲೆ ಭರವಸೆ ಇಡುತ್ತಾರೋ - ಅವರಿಗೆ ಅವನೇ ಸಾಕು.',
        reference: 'Quran 65:3',
      },
      {
        title: 'Patience and Gratitude',
        kannada_title: 'ಸಹನೆ ಮತ್ತು ಕೃತಜ್ಞತೆ',
        arabic: 'وَبَشِّرِ الصَّابِرِينَ',
        transliteration: 'Wa bashshiris-sabireen',
        translation: 'And give good tidings to the patient.',
        kannada_translation: 'ಮತ್ತು ತಾಳ್ಮೆಯುಳ್ಳವರಿಗೆ ಶುಭವಾರ್ತೆ ನೀಡಿ.',
        reference: 'Quran 2:155',
      },
    ],
  },
];

export function HealthAndWellness() {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <HealthChatbot />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-headline">
            <HealthIcon className="h-6 w-6 text-primary" />
            {language === 'kn' ? 'ಇಸ್ಲಾಂನಲ್ಲಿ ಆರೋಗ್ಯ ಮತ್ತು ಸ್ವಾಸ್ಥ್ಯ' : 'Health & Wellness in Islam'}
          </CardTitle>
          <CardDescription>
            {language === 'kn' ? 'ಆರೋಗ್ಯಕರ ಮತ್ತು ಸಮತೋಲಿತ ಜೀವನಕ್ಕಾಗಿ ಕುರಾನ್ ಆಧಾರಿತ ಸಲಹೆಗಳು.' : 'Quran-based suggestions for a healthy and balanced life.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full">
            <div className="space-y-6 p-1">
              {healthSuggestions.map((category) => (
                <div key={category.category}>
                  <h3 className="mb-4 text-lg font-semibold text-primary">{language === 'kn' ? category.kannada_category : category.category}</h3>
                  <div className="space-y-4">
                    {category.points.map((point, index) => (
                      <div
                        key={index}
                        className="rounded-lg border bg-secondary/30 p-4"
                      >
                        <h4 className="font-bold text-foreground mb-2">{language === 'kn' ? point.kannada_title : point.title}</h4>
                        <p className="mb-2 text-lg text-primary" dir="rtl">
                          {point.arabic}
                        </p>
                        <p className="mb-2 text-sm text-muted-foreground">
                          {point.transliteration}
                        </p>
                        <p className="italic text-foreground">
                          &ldquo;{language === 'kn' ? point.kannada_translation : point.translation}&rdquo;
                        </p>
                        {point.reference && (
                          <p className="mt-2 text-right text-xs text-muted-foreground">
                            - {point.reference}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
