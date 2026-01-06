
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

const healthSuggestions = [
  {
    category: 'Physical Health',
    points: [
      {
        title: 'Eat in Moderation',
        arabic: 'وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ',
        transliteration: 'Wa kuloo washraboo wa laa tusrifoo; innahoo laa yuhibbul musrifeen',
        translation: 'And eat and drink, but be not excessive. Indeed, He likes not those who commit excess.',
        reference: 'Quran 7:31',
      },
      {
        title: 'Hygiene and Cleanliness',
        arabic: 'إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ',
        transliteration: 'Inna Allaha yuhibbut-tawwabeena wa yuhibbul-mutatahhireen',
        translation: 'Indeed, Allah loves those who are constantly repentant and loves those who purify themselves.',
        reference: 'Quran 2:222',
      },
      {
        title: 'The Prophetic Diet',
        arabic: 'The Prophet (ﷺ) used to like honey and dates.',
        transliteration: 'The Prophet (peace be upon him) encouraged eating foods like dates, honey, olives, and barley for their health benefits.',
        translation: 'Embracing the diet of the Prophet Muhammad (ﷺ) can lead to better health. He consumed simple, natural foods and practiced portion control.',
        reference: 'Sahih al-Bukhari',
      },
    ],
  },
  {
    category: 'Spiritual & Mental Health',
    points: [
      {
        title: 'Remembrance of Allah (Dhikr)',
        arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
        transliteration: 'Ala bi-dhikri Allahi tatma-innul-quloob',
        translation: 'Unquestionably, by the remembrance of Allah hearts are assured.',
        reference: 'Quran 13:28',
      },
      {
        title: 'Trust in Allah (Tawakkul)',
        arabic: 'وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
        transliteration: 'Wa man yatawakkal `ala Allahi fahuwa hasbuh',
        translation: 'And whoever relies upon Allah - then He is sufficient for him.',
        reference: 'Quran 65:3',
      },
      {
        title: 'Patience and Gratitude',
        arabic: 'وَبَشِّرِ الصَّابِرِينَ',
        transliteration: 'Wa bashshiris-sabireen',
        translation: 'And give good tidings to the patient.',
        reference: 'Quran 2:155',
      },
    ],
  },
];

export function HealthAndWellness() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <HealthChatbot />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl font-headline">
            <HealthIcon className="h-6 w-6 text-primary" />
            Health & Wellness in Islam
          </CardTitle>
          <CardDescription>
            Quran-based suggestions for a healthy and balanced life.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full">
            <div className="space-y-6 p-1">
              {healthSuggestions.map((category) => (
                <div key={category.category}>
                  <h3 className="mb-4 text-lg font-semibold text-primary">{category.category}</h3>
                  <div className="space-y-4">
                    {category.points.map((point, index) => (
                      <div
                        key={index}
                        className="rounded-lg border bg-secondary/30 p-4"
                      >
                        <h4 className="font-bold text-foreground mb-2">{point.title}</h4>
                        <p className="mb-2 text-lg text-primary" dir="rtl">
                          {point.arabic}
                        </p>
                        <p className="mb-2 text-sm text-muted-foreground">
                          {point.transliteration}
                        </p>
                        <p className="italic text-foreground">
                          &ldquo;{point.translation}&rdquo;
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
