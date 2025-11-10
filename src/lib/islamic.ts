
export const verseOfTheDay = {
  arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  transliteration: 'Bismillāhi r-raḥmāni r-raḥīm',
  translation:
    'In the name of of Allah, the Most Gracious, the Most Merciful.',
  reference: 'Al-Fatihah, 1:1',
};

export const prayerTimesData = {
  Fajr: '05:00',
  Zohar: '01:00',
  Asr: '05:10',
  Maghrib: '06:00',
  Isha: '08:00',
};

export const juzData = [
    { juzNumber: 1, name: "Alif Lam Meem", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-1.pdf" },
    { juzNumber: 2, name: "Sayaqool", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-2.pdf" },
    { juzNumber: 3, name: "Tilkal Rusul", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-3.pdf" },
    { juzNumber: 4, name: "Lan Tana Loo", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-4.pdf" },
    { juzNumber: 5, name: "Wal Mohsanat", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-5.pdf" },
    { juzNumber: 6, name: "La Yuhibbullah", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-6.pdf" },
    { juzNumber: 7, name: "Wa Iza Samiu", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-7.pdf" },
    { juzNumber: 8, name: "Wa Lau Annana", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-8.pdf" },
    { juzNumber: 9, name: "Qalal Malao", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-9.pdf" },
    { juzNumber: 10, name: "Wa A'lamu", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-10.pdf" },
    { juzNumber: 11, name: "Yatazeroon", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-11.pdf" },
    { juzNumber: 12, name: "Wa Mamin Da'abat", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-12.pdf" },
    { juzNumber: 13, name: "Wa Ma Ubrioo", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-13.pdf" },
    { juzNumber: 14, name: "Rubama", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-14.pdf" },
    { juzNumber: 15, name: "Subhanal lazi", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-15.pdf" },
    { juzNumber: 16, name: "Qala Alam", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-16.pdf" },
    { juzNumber: 17, name: "Iqtaraba lil'n-nasi", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-17.pdf" },
    { juzNumber: 18, name: "Qadd Aflaha", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-18.pdf" },
    { juzNumber: 19, name: "Wa Qala lladhina", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-19.pdf" },
    { juzNumber: 20, name: "A'man Khalaqa", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-20.pdf" },
    { juzNumber: 21, name: "Utlu Ma Oohiya", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-21.pdf" },
    { juzNumber: 22, name: "Wa-Man yaqnut", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-22.pdf" },
    { juzNumber: 23, name: "Wa Mali", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-23.pdf" },
    { juzNumber: 24, name: "Fa-man Azlamu", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-24.pdf" },
    { juzNumber: 25, name: "Ilayhi Yuruddu", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-25.pdf" },
    { juzNumber: 26, name: "Ha Meem", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-26.pdf" },
    { juzNumber: 27, name: "Qala Fama Khatbukum", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-27.pdf" },
    { juzNumber: 28, name: "Qadd Sami Allah", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-28.pdf" },
    { juzNumber: 29, name: "Tabaraka lladhi", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-29.pdf" },
    { juzNumber: 30, name: "Amma", url: "https://onlinemadrasa.org/wp-content/uploads/2024/01/Holy-Quran-Para-30.pdf" }
];

export const KAABA_COORDS = {
  lat: 21.4225,
  lng: 39.8262,
};

// Helper function to convert degrees to radians
function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

// Helper function to convert radians to degrees
function toDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}

export function getQiblaDirection(userCoords: { lat: number; lng: number }) {
  const userLatRad = toRadians(userCoords.lat);
  const userLngRad = toRadians(userCoords.lng);
  const kaabaLatRad = toRadians(KAABA_COORDS.lat);
  const kaabaLngRad = toRadians(KAABA_COORDS.lng);

  const deltaLng = kaabaLngRad - userLngRad;

  const y = Math.sin(deltaLng) * Math.cos(kaabaLatRad);
  const x =
    Math.cos(userLatRad) * Math.sin(kaabaLatRad) -
    Math.sin(userLatRad) * Math.cos(kaabaLatRad) * Math.cos(deltaLng);

  let bearing = toDegrees(Math.atan2(y, x));
  bearing = (bearing + 360) % 360;

  return bearing;
}

export const islamicFestivals2025 = [
  { name: 'Ramadan Starts', date: new Date('2025-02-28') },
  { name: 'Eid al-Fitr', date: new Date('2025-03-30') },
  { name: 'Day of Arafah', date: new Date('2025-06-05') },
  { name: 'Eid al-Adha', date: new Date('2025-06-06') },
  { name: 'Islamic New Year (1447 AH)', date: new Date('2025-06-26') },
  { name: 'Ashura', date: new Date('2025-07-05') },
];

export const morningAzkar = [
  {
    arabic:
      'سُورَةُ الإِخْلَاصِ بِسْمِ ٱللهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ قُلْ هُوَ ٱللهُ أَحَدٌ ۝ ٱللهُ ٱلصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ',
    transliteration:
      'bismillaahir-raḥmaanir-raḥeem qul huwa-llaahu aḥad * allaahuṣ-ṣamad * lam yalid wa lam yoolad * wa lam yakul-lahuۥ kufuwan aḥad',
    translation:
      'Surah Al-Ikhlas: In the name of Allah, the Beneficent, the Merciful Say (O Muhammad (SAW)): "He is Allâh, (the) One.* Allâh the Self-Sufficient Master, Whom all creatures need, (He neither eats nor drinks). * He begets not, nor was He begotten. * And there is none co-equal or comparable unto Him."',
  },
  {
    arabic:
      'سُورَةُ الْفَلَقِ بِسْمِ ٱللهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِqٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
    transliteration:
      'bismillaahir-raḥmaanir-raḥeem qul a‛oodhu birabbil-falaq * min sharri maa khalaq * wa min sharri ghaasiqin idhaa waqab * wa min sharrin-naffaathaati fil-‛uqad * wa min sharri ḥaasidin idhaa ḥasad',
    translation:
      'Surah Al-Falaq: In the name of Allah, a Beneficent, the Merciful Say: "I seek refuge with (Allâh) the Lord of the daybreak, * From the evil of what He has created; * And from the evil of the darkening (night) as it comes with its darkness; (or the moon as it sets or goes away) * And from the evil of those who practice witchcrafts when they blow in the knots, * And from the evil of the envier when he envies."',
  },
  {
    arabic: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
    transliteration: "Astaghfirullaaha wa 'atoobu 'ilayhi",
    translation: 'I seek Allaah’s forgiveness and I turn to Him in repentance.',
  },
  {
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً',
    transliteration: 'Allahumma innee as-aluka AAilman nafiAAan, warizqan tayyiban, waAAamalan mutaqabbalan.',
    translation: 'O Allah, I ask You for knowledge which is beneficial and sustenance which is good, and deeds which are acceptable.',
  },
  {
    arabic: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّماوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
    transliteration: 'Allahumma AAalimal-ghaybi washshahadah, fatiras-samawati wal-ard, rabba kulli shayin wamaleekah, ashhadu an la ilaha illa ant, aAAoothu bika min sharri nafsee wamin sharrish-shaytani washirkih, waan aqtarifa AAala nafsee soo-an aw ajurrahu ila muslim.',
    translation: 'O Allah, Knower of the unseen and the seen, Creator of the heavens and the Earth, Lord and Sovereign of all things, I bear witness that none has the right to be worshipped except You. I take refuge in You from the evil of my soul and from the evil and shirk of the devil, and from committing wrong against my soul or bringing such upon another Muslim.',
  },
  {
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الَْأرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
    transliteration: 'Bismil-lahil-lathee la yadurru maAAas-mihi shay-on fil-ardi wala fis-sama-i wahuwas-sameeAAul-AAaleem.',
    translation: 'In the name of Allah with whose name nothing is harmed on earth nor in the heavens and He is The All-Seeing, The All-Knowing.',
  },
  {
    arabic: 'رَضِيتُ باللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِيناً، وَبِمُحَمَّدٍ صَلَى اللَّهُ عَلِيهِ وَسَلَّمَ نَبِيَّاً.',
    transliteration: 'Radiytu billahi rabbān wa bil-islāmi dīnān wa bi-Muḥammadin ṣallallāhu ʿalayhi wa sallam nabīyā.',
    translation: 'I am pleased with Allah as a Lord, and Islam as a religion and Muhammad peace be upon to him as a Prophet',
  },
  {
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ .',
    transliteration: 'Subhanal-lahi wabihamdih, AAadada khalqihi warida nafsih, wazinata AAarshih, wamidada kalimatih.',
    translation: 'How perfect Allah is and I praise Him by the number of His creation and His pleasure, and by the weight of His throne, and the ink of His words.',
  },
  {
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ .',
    transliteration: 'Subhanal-lahi wabihamdih.',
    translation: 'How perfect Allah is and I praise Him',
  },
  {
    arabic: 'يَاحَيُّ، يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
    transliteration: 'Ya hayyu ya qayyoom, birahmatika astagheeth, aslih lee sha/nee kullah, wala takilnee ila nafsee tarfata AAayn.',
    translation: 'O Ever Living, O Self-Subsisting and Supporter of all, by Your mercy I seek assistance, rectify for me all of my affairs and do not leave me to myself, even for the blink of an eye.',
  },
  {
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي، وَدُنْيَايَ، وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيَ.',
    transliteration: 'Allahumma innee as-alukal-AAafwa walAAafiyah, fid-dunya wal-akhirah, allahumma innee as-alukal-AAafwa walAAafiyah fee deenee, wadunyaya wa-ahlee, wamalee, allahummas-tur AAawratee, wa-amin rawAAatee, allahummah-fathnee min bayni yaday, wamin khalfee, waAAan yameenee, waAAan shimalee, wamin fawqee, wa-aAAoothu biAAathamatika an oghtala min tahtee.',
    translation: 'O Allah, I ask You for pardon and well-being in this life and the next. O Allah, I ask You for pardon and well-being in my religious and worldly affairs, and my family and my wealth. O Allah, veil my weaknesses and set at ease my dismay. O Allah, preserve me from the front and from behind and on my right and on my left and from above, and I take refuge with You lest I be swallowed up by the earth.',
  },
  {
    arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِيْ النَّارِ وَعَذَابٍ فِيْ الْقَبْرِ.',
    transliteration: 'Asbahna wa-asbahal-mulku lillah walhamdu lillah la ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shayin qadeer, rabbi as-aluka khayra ma fee hatha-alyawmi, wakhayra ma baAAdaho, wa-aAAoothu bika min sharri hatha-alyawmi, washarri ma baAAdaho, rabbi aAAoothu bika minal-kasal, wasoo-il kibar, rabbi aAAoothu bika min AAathabin fin-nar, waAAathabin fil-qabr.',
    translation: 'We have reached the morning and at this very time unto Allah belongs all sovereignty, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent. My Lord, I ask You for the good of this day and the good of what follows it and I take refuge in You from the evil of this day and the evil of what follows it. My Lord, I take refuge in You from laziness and senility. My Lord, I take refuge in You from torment in the Fire and punishment in the grave.',
  },
  {
    arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.',
    transliteration: 'Allahumma bika asbahna wabika amsayna, wabika nahya ,wabika namootu wa-ilaykan-nushoor.',
    translation: 'O Allah, by your leave we have reached the morning and by Your leave we have reached the evening, by Your leave we live and die and unto You is our resurrection.',
  },
  {
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَّا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِر لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
    transliteration:
      'Allahumma anta rabbee la ilaha illa ant, khalaqtanee wa-ana AAabduk, wa-ana AAala AAahdika wawaAAdika mas-tataAAt, aAAoothu bika min sharri ma sanaAAt, aboo-o laka biniAAmatika AAalay, wa-aboo-o bithanbee, faghfir lee fa-innahu la yaghfiruth-thunooba illa ant.',
    translation:
      'O Allah, You are my Lord, none has the right to be worshipped except You, You created me and I am Your servant and I abide to Your covenant and promise as best I can, I take refuge in You from the evil of which I have committed. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for verily none can forgive sin except You.',
  },
  {
    arabic: 'اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.',
    transliteration: 'Allahumma innee asbahtu oshhiduk, wa-oshhidu hamalata AAarshik, wamala-ikatak, wajameeAAa khalqik, annaka antal-lahu la ilaha illa ant, wahdaka la shareeka lak, wa-anna Muhammadan AAabduka warasooluk.',
    translation: 'O Allah, verily I have reached the morning and call on You, the bearers of Your throne, Your angels, and all of Your creation to witness that You are Allah, none has the right to be worshipped except You, alone, without partner and that Muhammad is Your Servant and Messenger.'
  },
  {
    arabic: 'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
    transliteration: 'Allahumma ma asbaha bee min niAAmatin, aw bi-ahadin min khalqik, faminka wahdaka la shareeka lak, falakal-hamdu walakash-shukr.',
    translation: 'O Allah, what blessing I or any of Your creation have risen upon, is from You alone, without partner, so for You is all praise and unto You all thanks.'
  },
  {
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ .',
    transliteration: 'La ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shay-in qadeer.',
    translation: 'None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise, and He is over all things omnipotent.'
  },
  {
    arabic: 'اللَّهُمَّ عَافِـني فِي بَدَنِي، اللَّهُمَّ عَافِـنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُبِكَ مِنَ الْكُفْر، وَالفَقْرِ، وَأَعُوذُبِكَ مِنْ عَذَابِ الْقَبْرِ ، لَا إلَهَ إلاَّ أَنْتَ.',
    transliteration: 'Allahumma AAafinee fee badanee, allahumma AAafinee fee samAAee, allahumma AAafinee fee basaree, la ilaha illa ant. Allahumma innee aAAoothu bika minal-kufr, walfaqr, wa-aAAoothu bika min AAathabil-qabr, la ilaha illa ant.',
    translation: 'O Allah, grant my body health, O Allah, grant my hearing health, O Allah, grant my sight health. None has the right to be worshipped except You. O Allah, I take refuge with You from disbelief and poverty, and I take refuge with You from the punishment of the grave. None has the right to be worshipped except You.',
  }
];

export const eveningAzkar = [
  {
    arabic: 'أَمْسَيْنَا وَأَمْسَى المُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ لا إلَهَ إلَّا اللَّهُ، وَحْدَهُ لا شَرِيكَ له، له المُلْكُ وَلَهُ الحَمْدُ وَهو علَى كُلِّ شيءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ ما في هذِه اللَّيْلَةِ وَخَيْرَ ما بَعْدَهَا، وَأَعُوذُ بكَ مِن شَرِّ ما في هذِه اللَّيْلَةِ وَشَرِّ ما بَعْدَهَا، رَبِّ أَعُوذُ بكَ مِنَ الكَسَلِ وَسُوءِ الكِبَرِ، رَبِّ أَعُوذُ بكَ مِن عَذَابٍ في النَّارِ وَعَذَابٍ في القَبْر.',
    transliteration: 'Amsayna wa-amsal-mulku lillah walhamdu lillah la ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shayin qadeer, rabbi as-aluka khayra ma fee hathihil-laylah, wakhayra ma baAAdaha, wa-aAAoothu bika min sharri hathihil-laylah, washarri ma baAAdaha, rabbi aAAoothu bika minal-kasal, wasoo-il kibar, rabbi aAAoothu bika min AAathabin fin-nar, waAAathabin fil-qabr.',
    translation: 'We have reached the evening and at this very time unto Allah belongs all sovereignty, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent. My Lord, I ask You for the good of this night and the good of what follows it and I take refuge in You from the evil of this night and the evil of what follows it. My Lord, I take refuge in You from laziness and senility. My Lord, I take refuge in You from torment in the Fire and punishment in the grave.',
  },
  {
    arabic: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةَ فَتْحَهَا وَنَصْرَهَا وَنُورَهَا وَبَرَكَتَهَا وَهُدَاهَا وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.',
    transliteration: 'Amsayna wa-amsal-mulku lillahi rabbil-AAalameen, allahumma innee as-aluka khayra hathal-yawm, fat-hahu, wanasrahu, wanoorahu, wabarakatahu, wahudahu, wa-aAAoothu bika min sharri ma feehi, washarri ma baAAdah.',
    translation: 'We have reached the evening and at this very time all sovereignty belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of this day, its triumphs and its victories, its light and its blessings and its guidance, and I take refuge in You from the evil of this day and the evil that follows it.',
  },
  {
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ .',
    transliteration: 'La ilaha illal-lah, wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shay-in qadeer.',
    translation: 'None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise, and He is over all things omnipotent.'
  },
  {
    arabic: 'يَاحَيُّ، يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
    transliteration: 'Ya hayyu ya qayyoom, birahmatika astagheeth, aslih lee sha/nee kullah, wala takilnee ila nafsee tarfata AAayn.',
    translation: 'O Ever Living, O Self-Subsisting and Supporter of all, by Your mercy I seek assistance, rectify for me all of my affairs and do not leave me to myself, even for the blink of an eye.',
  },
  {
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ .',
    transliteration: 'Subhanal-lahi wabihamdih.',
    translation: 'How perfect Allah is and I praise Him.',
  },
  {
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ .',
    transliteration: 'Subhanal-lahi wabihamdih, AAadada khalqihi warida nafsih, wazinata AAarshih, wamidada kalimatih.',
    translation: 'How perfect Allah is and I praise Him by the number of His creation and His pleasure, and by the weight of His throne, and the ink of His words.',
  },
  {
    arabic: 'رَضِيتُ باللَّهِ رَبًّا، وَبِالْإِسْلَامِ dِيناً، وَبِمُحَمَّدٍ صَلَى اللَّهُ عَلِيهِ وَسَلَّمَ نَبِيَّاً.',
    transliteration: 'Radiytu billahi rabbān wa bil-islāmi dīnān wa bi-Muḥammadin ṣallallāhu ʿalayhi wa sallam nabīyā.',
    translation: 'I am pleased with Allah as a Lord, and Islam as a religion and Muhammad peace be upon to him as a Prophet.',
  },
  {
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الَْأرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
    transliteration: 'Bismil-lahil-lathee la yadurru maAAas-mihi shay-on fil-ardi wala fis-sama-i wahuwas-sameeAAul-AAaleem.',
    translation: 'In the name of Allah with whose name nothing is harmed on earth nor in the heavens and He is The All-Seeing, The All-Knowing.',
  },
  {
    arabic: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّماوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَليكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
    transliteration: 'Allahumma AAalimal-ghaybi washshahadah, fatiras-samawati wal-ard, rabba kulli shayin wamaleekah, ashhadu an la ilaha illa ant, aAAoothu bika min sharri nafsee wamin sharrish-shaytani washirkih, waan aqtarifa AAala nafsee soo-an aw ajurrahu ila muslim.',
    translation: 'O Allah, Knower of the unseen and the seen, Creator of the heavens and the Earth, Lord and Sovereign of all things, I bear witness that none has the right to be worshipped except You. I take refuge in You from the evil of my soul and from the evil and shirk of the devil, and from committing wrong against my soul or bringing such upon another Muslim.',
  },
  {
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.',
    transliteration: 'aAAoothu bikalimatil-lahit-tammati min sharri ma khalaq.',
    translation: 'I take refuge in Allah’s perfect words from the evil He has created.',
  },
  {
    arabic: 'حَسْبِيَ اللَّهُ لَآ إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
    transliteration: 'Hasbiyal-lahu la ilaha illa huwa, AAalayhi tawakkalt, wahuwa rabbul-AAarshil-AAatheem',
    translation: 'Allah is Sufficient for me, none has the right to be worshipped except Him, upon Him I rely and He is Lord of the exalted throne.'
  },
  {
    arabic: 'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَـيْكَ المَصِيْر.',
    transliteration: 'Allahumma bika amsayna, wabika asbahna, wabika nahya wabika namootu wa-ilaykal-maseer.',
    translation: 'O Allah, by Your leave we have reached the evening and by Your leave we have reached the morning, by Your leave we live and die and unto You is our return.',
  },
  {
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي، وَدُنْيَايَ، وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيَ.',
    transliteration: 'Allahumma innee as-alukal-AAafwa walAAafiyah, fid-dunya wal-akhirah, allahumma innee as-alukal-AAafwa walAAafiyah fee deenee, wadunyaya wa-ahlee, wamalee, allahummas-tur AAawratee, wa-amin rawAAatee, allahummah-fathnee min bayni yaday, wamin khalfee, waAAan yameenee, waAAan shimalee, wamin fawqee, wa-aAAoothu biAAathamatika an oghtala min tahtee.',
    translation: 'O Allah, I ask You for pardon and well-being in this life and the next. O Allah, I ask You for pardon and well-being in my religious and worldly affairs, and my family and my wealth. O Allah, veil my weaknesses and set at ease my dismay. O Allah, preserve me from the front and from behind and on my right and on my left and from above, and I take refuge with You lest I be swallowed up by the earth.',
  },
  {
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَّا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِر لِي فَإِنَّهُ لَا يَغْfِرُ الذُّنُوبَ إِلَّا أَنْتَ.',
    transliteration: 'Allahumma anta rabbee la ilaha illa ant, khalaqtanee wa-ana AAabduk, wa-ana AAala AAahdika wawaAAdika mas-tataAAt, aAAoothu bika min sharri ma sanaAAt, aboo-o laka biniAAmatika AAalay, wa-aboo-o bithanbee, faghfir lee fa-innahu la yaghfiruth-thunooba illa ant.',
    translation: 'O Allah, You are my Lord, none has the right to be worshipped except You, You created me and I am Your servant and I abide to Your covenant and promise as best I can, I take refuge in You from the evil of which I have committed. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for verily none can forgive sin except You.',
  },
  {
    arabic: 'اللَّهُمَّ أَمْسَيْنَا نُشْهِدُكَ وَنُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلاَئِكَتَكَ وَجَمِيعَ خَلْقِكَ بِأَنَّكَ الله لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ.',
    transliteration: 'Allahumma amsaina nush-hiduka wa nush-hidu ḥamalata arshika wa mala’ikataka wa jami`a khalqika bi-annaka Allah, la ilaha illa anta, waḥdaka la sharika laka, wa anna Muḥammadan abduka wa rasuluk',
    translation: 'O, Allah, we have reached the evening, calling You to witness, and calling the carriers of Your Throne to witness, and Your angels, and all of Your creation, that You are Allah, none has the right to be worshipped but You, Alone, without a partner, and that Muhammad (S.A.W.) is Your slave and Your Messenger.'
  },
  {
    arabic: 'اللَّهُمَّ مَا أََمْسَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
    transliteration: 'Allahumma ma amsa bee min niAAmatin, aw bi-ahadin min khalqik, faminka wahdaka la shareeka lak, falakal-hamdu walakash-shukr.',
    translation: 'O Allah, what blessing I or any of Your creation have risen upon, is from You alone, without partner, so for You is all praise and unto You all thanks.'
  },
  {
    arabic: 'اللَّهُمَّ عَافِـني فِي بَدَنِي، اللَّهُمَّ عَافِـنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُبِكَ مِنَ الْكُفْر، وَالفَقْرِ، وَأَعُوذُبِكَ مِنْ عَذَابِ الْقَبْرِ ، لَا إلَهَ إلاَّ أَنْتَ.',
    transliteration: 'Allahumma AAafinee fee badanee, allahumma AAafinee fee samAAee, allahumma AAafinee fee basaree, la ilaha illa ant. Allahumma innee aAAoothu bika minal-kufr, walfaqr, wa-aAAoothu bika min AAathabil-qabr, la ilaha illa ant.',
    translation: 'O Allah, grant my body health, O Allah, grant my hearing health, O Allah, grant my sight health. None has the right to be worshipped except You. O Allah, I take refuge with You from disbelief and poverty, and I take refuge with You from the punishment of the grave. None has the right to be worshipped except You.',
  },
  {
    arabic: 'اللهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    transliteration: "Allaahu laa 'ilaaha 'illaa Huwal-Hayyul-Qayyoom, laa ta'khuthuhu sinatun wa laa nawm, lahu maa fis-samaawaati wa maafil-'ardh, man thal-lathee yashfa'u 'indahu 'illaa bi'ithnih, ya'lamu maa bayna 'aydeehim wa maa khalfahum, wa laa yuheetoona bishay'im-min 'ilmihi 'illaa bimaa shaa'a, wasi'a kursiyyuhus-samaawaati wal'ardh, wa laa ya'ooduhu hifdhuhumaa, wa Huwal-'Aliyyul-'Adheem",
    translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
  },
  {
    arabic: 'سُورَةُ الإِخْلَاصِ بِسْمِ ٱللهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ قُلْ هُوَ ٱللهُ أَحَدٌ ۝ ٱللهُ ٱلصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ',
    transliteration: 'bismillaahir-raḥmaanir-raḥeem qul huwa-llaahu aḥad ۝ allaahuṣ-ṣamad ۝ lam yalid wa lam yoolad ۝ wa lam yakul-lahuۥ kufuwan aḥad',
    translation: 'Surah Al-Ikhlas: In the name of Allah, the Beneficent, the Merciful Say (O Muhammad (SAW)): "He is Allâh, (the) One.۝ Allâh the Self-Sufficient Master, Whom all creatures need, (He neither eats nor drinks). ۝ He begets not, nor was He begotten. ۝ And there is none co-equal or comparable unto Him."',
  },
  {
    arabic: 'سُورَةُ الْفَلَقِ بِسْمِ ٱللهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
    transliteration: 'bismillaahir-raḥmaanir-raḥeem qul a‛oodhu birabbil-falaq ۝ min sharri maa khalaq ۝ wa min sharri ghaasiqin idhaa waqab ۝ wa min sharrin-naffaathaati fil-‛uqad ۝ wa min sharri ḥaasidin idhaa ḥasad',
    translation: 'Surah Al-Falaq: In the name of Allah, the Beneficent, the Merciful Say: "I seek refuge with (Allâh) the Lord of the daybreak, ۝ From the evil of what He has created; ۝ And from the evil of the darkening (night) as it comes with its darkness; (or the moon as it sets or goes away) ۝ And from the evil of those who practice witchcrafts when they blow in the knots, ۝ And from the evil of the envier when he envies."',
  },
  {
    arabic: 'سُورَةُ النَّاسِ بِسْمِ ٱللهِ ٱلرَّحْمَـٰnِ ٱلرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ ۝ مَلِكِ ٱلنَّاسِ ۝ إِلَـٰهِ ٱلنَّاسِ ۝ مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ ۝ ٱلَّذِى يُوَسْوِسُ فِى صُdُورِ ٱلنَّاسِ ۝ مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ',
    transliteration: 'bismillaahir-raḥmaanir-raḥeem qul a‛oodh-u birabbin-naas ۝ malikin-naas ۝ ilaahin-naas ۝ min sharril-waswaasil-khannaas ۝ alladhee yuwaswisu fee ṣudoorin-naas ۝ minal-jinnati wan-naas',
    translation: 'Surah An-Nas: In the name of Allah, the Beneficent, the Merciful. Say: "I seek refuge with (Allâh) the Lord of mankind, ۝ The King of mankind ۝ The Ilâh (God) of mankind, ۝ From the evil of the whisperer (devil who whispers evil in the hearts of men) who withdraws (from his whispering in one\'s heart after one remembers Allâh), ۝ Who whispers in the breasts of mankind, ۝ Of jinn and men."',
  }
];

export const sleepingAzkar = [
  {
    arabic:
      'سُورَةُ الإِخْلَاصِ بِسْمِ ٱللهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ قُلْ هُوَ ٱللهُ أَحَدٌ ۝ ٱللهُ ٱلصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ',
    transliteration:
      'bismillaahir-raḥmaanir-raḥeem qul huwa-llaahu aḥad * allaahuṣ-ṣamad * lam yalid wa lam yoolad * wa lam yakul-lahuۥ kufuwan aḥad',
    translation:
      'Surah Al-Ikhlas: In the name of Allah, the Beneficent, the Merciful. Say (O Muhammad (SAW)): "He is Allâh, (the) One. Allâh the Self-Sufficient Master, Whom all creatures need, (He neither eats nor drinks). He begets not, nor was He begotten. And there is none co-equal or comparable unto Him."',
    reference: 'Al-Ikhlas',
  },
  {
    arabic:
      'سُورَةُ الْفَلَقِ بِسْمِ ٱللهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
    transliteration:
      'bismillaahir-raḥmaanir-raḥeem qul a‛oodhu birabbil-falaq * min sharri maa khalaq * wa min sharri ghaasiqin idhaa waqab * wa min sharrin-naffaathaati fil-‛uqad * wa min sharri ḥaasidin idhaa ḥasad',
    translation:
      'Surah Al-Falaq: In the name of Allah, the Beneficent, the Merciful. Say: "I seek refuge with (Allâh) the Lord of the daybreak, From the evil of what He has created; And from the evil of the darkening (night) as it comes with its darkness; (or the moon as it sets or goes away) And from the evil of those who practice witchcrafts when they blow in the knots, And from the evil of the envier when he envies."',
    reference: 'Al-Falaq',
  },
  {
    arabic:
      'سُورَةُ النَّاسِ بِسْمِ ٱللهِ ٱلرَّحْمَـٰnِ ٱلرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ ۝ مَلِكِ ٱلنَّاسِ ۝ إِلَـٰهِ ٱلنَّاسِ ۝ مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ ۝ ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ ۝ مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ',
    transliteration:
      'bismillaahir-raḥmaanir-raḥeem qul a‛oodh-u birabbin-naas * malikin-naas * ilaahin-naas * min sharril-waswaasil-khannaas * alladhee yuwaswisu fee ṣudoorin-naas * minal-jinnati wan-naas',
    translation:
      'Surah An-Nas: In the name of Allah, the Beneficent, the Merciful. Say: "I seek refuge with (Allâh) the Lord of mankind, The King of mankind, The Ilâh (Allah) of mankind, From the evil of the whisperer (devil who whispers evil in the hearts of men) who withdraws (from his whispering in one\'s heart after one remembers Allâh), Who whispers in the breasts of mankind, Of jinn and men."',
    reference: 'An-Nas',
  },
  {
    arabic:
      'اللهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.',
    transliteration:
      "Allaahu laa 'ilaaha 'illaa Huwal-Hayyul-Qayyoom, laa ta'khuthuhu sinatun wa laa nawm, lahu maa fis-samaawaati wa maafil-'ardh, man thal-lathee yashfa'u 'indahu 'illaa bi'ithnih, ya'lamu maa bayna 'aydeehim wa maa khalfahum, wa laa yuheetoona bishay'im-min 'ilmihi 'illaa bimaa shaa'a, wasi'a kursiyyuhus-samaawaati wal'ardh, wa laa ya'ooduhu hifdhuhumaa, wa Huwal-'Aliyyul- 'Adheem.",
    translation:
      "Allah! There is none worthy of worship but He, the Ever Living, the One Who sustains and protects all that exists. Neither slumber nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who is he that can intercede with Him except with His Permission? He knows what happens to them in this world, and what will happen to them in the Hereafter. And they will never compass anything of His Knowledge except that which He wills. His Throne extends over the heavens and the earth, and He feels no fatigue in guarding and preserving them. And He is the Most High, the Most Great.",
    reference: 'Quran 2:255',
  },
  {
    arabic:
      'ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَـٰٓئِكَـتِهِۦ وَكُـتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِۦ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّـنَا وَإِلَيْكَ ٱلْمَصِيرُ* لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْـتَسَبَتْ رَبَّـنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّـنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا كَمَا حَمَلْتَهُ عَلَى ٱلَّذِينَ مِن قَبْلِنَا رَبَّـنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ أَنْتَ مَوْلَـٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ *',
    transliteration:
      'aamanar-rasoolu bimaa unzila ilayhi min rabbihi wal-mu’minoon, kullun aamana billaahi wa malaaٓ’ikatihi wa kutubihi wa rusulih, laa nufarriqu bayna aḥadin min rusulih, wa qaaloo sami‛naa wa aṭa‛naa ghufraanaka rabbanaa wa ilaykal-maṣeer * laa yukallif-ullaahu nafsan illaa wus‛ahaa, lahaa maa kasabat wa ‛alayhaa mak-tasabat, rabbanaa laa tu’aakhidhnaa in naseenaa aw akhṭa’naa rabbanaa wa laa taḥmil ‛alaynaa iṣran kamaa ḥamaltahu ‛alal-ladheena min qablinaa, rabbanaa wa laa tuḥammilnaa maa laa ṭaaqata lanaa bih, wa‛fu ‛annaa waghfir lanaa warḥamnaa, anta mawlaanaa fanṣurnaa ‛alal-qawmil-kaafireen',
    translation:
      'The Messenger (Muhammad SAW) believes in what has been sent down to him from his Lord, and (so do) the believers. Each one believes in Allâh, His Angels, His Books, and His Messengers. (They say), "We make no distinction between one another of His Messengers" and they say, "We hear, and we obey. (We seek) Your Forgiveness, our Lord, and to You is the return (of all)." * Allâh burdens not a person beyond his scope. He gets reward for that (good) which he has earned, and he is punished for that (evil) which he has earned. "Our Lord! Punish us not if we forget or fall into error, our Lord! Lay not on us a burden like that which You did lay on those before us (Jews and Christians); our Lord! Put not on us a burden greater than we have strength to bear. Pardon us and grant us Forgiveness. Have mercy on us. You are our Maulâ (Patron, Supporter and Protector, etc.) and give us victory over the disbelieving people."',
    reference: 'Quran 2:285-286',
  },
  {
    arabic:
      'بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا، بِمَا تَحْfَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.',
    transliteration:
      'Bismika rabbee wadaAAtu janbee wabika arfaAAuh, fa-in amsakta nafsee farhamha, wa-in arsaltaha fahfathha bima tahfathu bihi AAibadakas-saliheen.',
    translation:
      'In Your name my Lord, I lie down and in Your name I rise, so if You should take my soul then have mercy upon it, and if You should return my soul then protect it in the manner You do so with Your righteous servants.',
    reference: 'Bukhari/Muslim',
  },
  {
    arabic:
      'اللَّهمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا. اللَّهمَّ إِنِّي أَسْأَلُكَ العَافِيَةَ.',
    transliteration:
      'Allahumma innaka khalaqta nafsee wa-anta tawaffaha, laka mamatuha wamahyaha in ahyaytaha fahfathha, wa-in amattaha faghfir laha. Allahumma innee as-alukal-AAafiyah.',
    translation:
      'O Allah, verily You have created my soul and You shall take its life, to You belongs its life and death. If You should keep my soul alive then protect it, and if You should take its life then forgive it. O Allah, I ask You to grant me good health.',
    reference: 'Muslim',
  },
  {
    arabic: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.',
    transliteration: 'Allahumma qinee AAathabaka yawma tabAAathu AAibadak.',
    translation:
      'O Allah, protect me from Your punishment on the day Your servants are resurrected.',
  },
  {
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.',
    transliteration: 'bismika-l-laahumma amoo-tu wa aḥyaa.',
    translation: 'In Your name O Allah, I live and die.',
    reference: 'Bukhari',
  },
  {
    arabic: 'سُبْحَانَ اللهِ (33) الْحَمْدُ لِلهِ (33) اللهُ أَكْبَرُ (34)',
    transliteration: 'subḥaan-allaah (33) al-ḥamdu lillaah (33) allaahu akbar (34)',
    translation: 'How far from imperfections Allah is. (33) All praise is for Allah. (33) Allah is the greatest. (34)',
    reference: 'Bukhari',
  },
  {
    arabic:
      'اللَّهمَّ عَالِمَ الغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ رَبَّ كُلِّ شَيء ٍ وَمَلِيْكَهُ، أَشْهَدُ أَنْ لا إِلَهََ إِلاَّ أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوْءاً أَوْ أَجُرَّهُ~ُ إِلَى مُسْلِم.',
    transliteration:
      'Allahumma AAalimal-ghaybi washshahadah, fatiras-samawati wal-ard, rabba kulli shayin wamaleekah, ashhadu an la ilaha illa ant, aAAoothu bika min sharri nafsee wamin sharrish-shaytani washirkih, wa-an aqtarifa AAala nafsee soo-an aw ajurrahu ila muslim.',
    translation:
      'O Allah, Knower of the seen and the unseen, Creator of the heavens and the earth, Lord and Sovereign of all things I bear witness that none has the right to be worshipped except You. I take refuge in You from the evil of my soul and from the evil and shirk of the devil, and from committing wrong against my soul or bringing such upon another Muslim.',
  },
  {
    arabic: 'اَلْحَمْدُ للهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَكَفَانَا، وَآوَانَا، فَكَمْ مِمَّنْ لا كَافِيَ لَه ُُ وَلا مُؤْوِي.',
    transliteration: 'Alhamdu lillahil-lathee atAAamana wasaqana, wakafana, wa-awana, fakam mimman la kafiya lahu wala mu/wee.',
    translation: 'All praise is for Allah, Who fed us and gave us drink, and Who is sufficient for us and has sheltered us, for how many have none to suffice them or shelter them.',
  },
  {
    arabic: 'اللَّهُمَّ أَسْلَمْتُ نفِسي إِلَيكَ، وَفَوَّضتُ أَمري إِلَيْكَ، وَأَلَجَأْتُ ظَهرِي إِلَيْكَ، رغبةً ورهْبَةً إِلَيْكَ، لامَلجأَ ولا mَنجى مِنْكَ إِلاَّ إِليكَ، آمنتُ بِكِتَابِكَ الذِي أَنزَلْت، وَبِنَبِيِّكَ الذِي أَرسَلتَ.',
    transliteration: 'Allahumma aslamtu nafsee ilayk, wafawwadtu amree ilayk, wawajjahtu wajhee ilayk, wa-alja/tu thahree ilayk, raghbatan warahbatan ilayk, la maljaa wala manja minka illa ilayk, amantu bikitabikal wabinabiyyikal-lathee arsalt.',
    translation: 'O Allah, I submit my soul unto You, and I entrust my affair unto You, and I turn my face towards You, and I totally rely on You, in hope and fear of You. Verily there is no refuge nor safe haven from You except with You. I believe in Your Book which You have revealed and in Your Prophet whom You have sent.',
  },
  {
    arabic: 'اللَّهُمَّ رَبَّ السَّمَاوَاتِ وَرَبَّ الْأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ، اللهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ، اقْضِ عَنَّا الدَّيْنَ، وَأَغْنِنَا مِنَ الْفَقْرِ.',
    transliteration: 'allaahumma rabbas-samaawaati, wa rabb-al-‛arshil-‛aẓeemi, rabbanaa wa rabba kulli shay’in, faaliq-al-ḥabbi wan-nawaa, wa munazzilat-tawraati wal-injeeli wal-furqaani, a‛oodhu bika min sharri kulli shay’in anta aakhidhun bi naaṣiyatih\nallaahumma antal-awwalu fa laysa qablaka shay’un, wa antal-aakhiru fa laysa ba‛daka shay’un, wa antaẓ-ẓaahiru fa laysa fawqaka shay’un, wa antal-baaṭinu fa laysa doonaka shay’un, iqḍi ‛annid-dayna wa aghni mi-nal-faqr.',
    translation: 'O Allah, Lord of the heavens, lord of the earth and lord of the exalted throne, our Lord and the Lord of all things, Splitter of the seed and the date stone, Revealer of the Torah, the Injeel and the Furqan, I seek refuge with You from the evil of all things You seize by the forelock (i.e. You have total mastery over). \nO Allah, You are The First so there is nothing before You and You are The Last so there is nothing after You. You are Aẓ-ẓaahir so there is nothing above You and You are Al-baaṭin so there is nothing closer than You, settle my debt for me and spare me from poverty.',
  }
];


export const wakingUpAzkar = [
  {
    arabic: 'اَلْحَمْدُ لِلَّهِ الَّذي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.',
    transliteration: "Alḥamdu lillāhil-ladhī 'aḥyānā ba`da mā 'amātanā wa 'ilayhin-nushūr.",
    translation: 'All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.',
    reference: 'Bukhari',
  },
  {
    arabic: 'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. سُبْحَانَ اللهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللهُ، وَاللهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ. رَبِّ اغْفِرْ لِي.',
    transliteration: "La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shay-in qadeer. Subhanal-lah, walhamdu lillah, wala ilaha illal-lah, wallahu akbar, wala hawla wala quwwata illa billahil-AAaliyyil AAatheem. Rabbigh-fir lee.",
    translation: "None has the right to be worshipped except Allah, alone without associate, to Him belongs sovereignty and praise and He is over all things wholly capable. How perfect Allah is, and all praise is for Allah, and none has the right to be worshipped except Allah, Allah is the greatest and there is no power nor might except with Allah, The Most High, The Supreme. O my Lord forgive me.",
    reference: 'Bukhari',
  },
  {
    arabic: 'اَلْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ.',
    transliteration: 'Alhamdu lillahil-lathee AAafanee fee jasadee waradda AAalayya roohee wa-athina lee bithikrih.',
    translation: 'All praise is for Allah who restored to me my health and returned my soul and has allowed me to remember Him.',
    reference: 'Tirmidhi',
  },
  {
    arabic: 'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ * الَّذِينَ يَذْكُرُونَ اللهَ قِيَامًا وَقُعُودًا وَعَلَى جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ رَبَّنَا مَا خَلَقْتَ هَذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ * رَبَّنَا إِنَّكَ مَنْ تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ وَمَا لِلظَّالِمِينَ مِنْ أَنْصَارٍ * رَبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلْإِيمَانِ أَنْ آمِنُوا بِرَبِّكُمْ فَآمَنَّا رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ * رَبَّنَا وَآتِنَا مَا وَعَدْتَنَا عَلَى رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ * فَاسْتَجَابَ لَهُمْ رَبُّهُمْ أَنِّي لَا أُضِيعُ عَمَلَ عَامِلٍ مِنْكُمْ مِنْ ذَكَرٍ أَوْ أُنْثَى بَعْضُكُمْ مِنْ بَعْضٍ فَالَّذِينَ هَاجَرُوا وَأُخْرِجُوا مِنْ دِيَارِهِمْ وَأُوذُوا فِي سَبِيلِي وَقَاتَلُوا وَقُتِلُوا لَأُكَفِّرَنَّ عَنْهُمْ سَيِّئَاتِهِمْ وَلَأُدْخِلَنَّهُمْ جَنَّاتٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ ثَوَابًا مِنْ عِنْدِ اللهِ وَاللهُ عِنْدَهُ حُسْنُ الثَّوَابِ * لَا يَغُرَّنَّكَ تَقَلُّبُ الَّذِينَ كَفَرُوا فِي الْبِلَادِ * مَتَاعٌ قَلِيلٌ ثُمَّ مَأْوَاهُمْ جَهَنَّمُ وَبِئْسَ الْمِهَادُ * لَكِنِ الَّذِينَ اتَّقَوْا رَبَّهُمْ لَهُمْ جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا نُزُلًا مِنْ عِنْدِ اللهِ وَمَا عِنْدَ اللهِ خَيْرٌ لِلْأَبْرَارِ * وَإِنَّ مِنْ أَهْلِ الْكِتَابِ لَمَنْ يُؤْمِنُ بِاللهِ وَمَا أُنْزِلَ إِلَيْكُمْ وَمَا أُنْزِلَ إِلَيْهِمْ خَاشِعِينَ للهِ لَا يَشْتَرُونَ بِآيَاتِ اللهِ ثَمَنًا قَلِيلًا أُولَئِكَ لَهُمْ أَجْرُهُمْ عِنْدَ رَبِّهِمْ إِنَّ اللهَ سَرِيعُ الْحِسَابِ * يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللهَ لَعَلَّكُمْ تُفْلِحُونَ.',
    transliteration: 'inna fee khalqis-samaawaati wal-arḍi wakhtilaaaf-il-llayli wan-nahaari la-aayaat-in li oolil-albaab * alladheena yadhkuroon-allaaha qiyaaman wa qu‛oodan wa ‛alaa junoobihim wa yatafakkaroona fee khalqis-samaawaati wal-arḍi rabbanaa maa khalaqta haadhaa baaṭilan subḥaanaka fa qinaa ‛adhaab-an-naar * rabbanaaa innaka man tudkhilin-naara faqad akhzaytahu wa maa liẓ-ẓaalimeena min anṣaar * rabanaaa innanaa sami‛naa munaadee-an yunaadee lil-eemaani an aaminoo birabbikum fa-aamannaa rabbanaaa faghfir lanaa dhunoobanaa wa kaffir ‛annaa sayyi’aatinaa watawaffanaa ma‛al-abraar * rabbanaa wa aatinaa maa wa‛adttanaa ‛alaaٰ rusulika wa laa tukhzinaa yawm-al-qiyaamati innaka laa tukhliful-mee‛aad * faastajaaba lahum rabbuhum annee laa uḍee‛u ‛amala ‛aamilin minkum min dhakarin aw unthaaaٰ ba‛ḍukum minۢ ba‛ḍin fal-ladheena haajaroo wa ukhrijoo min diyaarihim wa oodhoo fee sabeelee wa qaataloo wa qutiloo la ukaffiranna ‛anhum sayyi’aatihim wa la udkhilannahum jannaatin tajree min taḥtihal-anhaaru thawaaban min ‛indillaah wallaahu ‛indahu ḥusnuth-thawaab * laa yaghurrannaka taqallubul-ladheena kafaroo fil-bilaad * mataa‛un qaleelun thumma ma’waahum jahannamu wabi’sal-mihaad * laakinil-ladheenat-taqaw rabbahum lahum jannaatun tajree min taḥtihal-anhaaru khaalideena feehaa nuzulan min ‛indillaahi wa maa ‛indallaahi khayrun lil-abraar * wa inna min ahlil-kitaabi laman yu’minu billaahi wa maa unzila ilaykum wa maaa unzila ilayhim khaashi‛eena lillaahi laa yashtaroona bi-aayaatillaahi thamanan qaleelan oo۟laaۤ’ika lahum ajruhum ‛inda rabbihim innallaaha saree‛-ul-ḥisaab * yaaۤ ayyuhal-ladheena aamanuṣ-biroo wa ṣaabiroo wa raabiṭooa wat-taqullaaha la‛allakum tufliḥoon',
    translation: 'Verily! In the creation of the heavens and the earth, and in the alternation of night and day, there are indeed Signs for men of understanding. Those who remember Allah standing, sitting and lying down on their sides, and think deeply about the creation of the heavens and the earth, (saying:) "Our LordA You. have not created this without purpose, glory is to You! Give us salvation from the torment of the Fire. Our Lord! Verily, whom You admit to the Fire, indeed, You have disgraced him, and never will the oppressors find any helpers. Our Lord! Verily, we have heard the call of one calling to Faith (saying:) \'Believe in your Lord,\' and we have believed. Our Lord! Forgive us our sins and expiate from us our evil deeds, and make us die in the state of righteousness together with the pious and righteous slaves. Our Lord! Grant us what You promised us through Your Messengers, and disgrace us not on the Day of Resurrection, for You never break (Your) promise." So, their Lord answered them (saying): "Never will I allow to be lost the work of any of you, be he male or female. You issue forth one from another, so those who emigrated and were driven out from their homes, and suffered harm in My Cause and who fought, and were killed in My Cause, verily, I will expiate from them their evil deeds and admit them into Gardens under which rivers flow ; a reward from Allah , and with Allah is the best of rewards ." Let not the free disposal of the disbelievers through out the land deceive you . A brief enjoyment ; then , their ultimate abode is Hell ; and worst indeed is that place for rest . But , for those who fear their Lord, are Gardens under which rivers flow ; therein are they to dwell forever , and entertainment from Allah ; and that which is with Allah is the best for the pious and righteous slaves . And there are , certainly , among the people of the Scripture , those who believe in Allah and in that which has been revealed to you , and in that which has been revealed to them , hum bling themselves before Allah . They do not sell the Verses of Allah for a little price, for them is a reward with their Lord . Surely , Allah is Swift in account . O you who believe! Have patience and contend in patience, be vigilant and informed, and fear Allah , so that you may be successful.',
    reference: 'Quran 3:190-200',
  }
];

export const afterPrayerAzkar = [
  {
    arabic: 'أَسْتَغْفِرُ اللَّهَ . (ثَلاثاً) اللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالإِكْرَامِ .',
    transliteration: 'Astaghfirul-lah (three times) Allahumma antas-salam waminkas-salam, tabarakta ya thal-jalali wal-ikram.',
    translation: 'I ask Allah for forgiveness.(three times) O Allah, You are As-Salam and from You is all peace, blessed are You, O Possessor of majesty and honour.’ AS-Salam: The One Who is free from all defects and deficiencies.',
  },
  {
    arabic: 'لَا إلَهَ إِلاَّ اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ.',
    transliteration: 'La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shayin qadeer, allahumma la maniAAa lima aAAtayt, wala muAAtiya lima manaAAt, wala yanfaAAu thal-jaddi minkal-jad.',
    translation: 'None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent.O Allah, none can prevent what You have willed to bestow and none can bestow what You have willed to prevent, and no wealth or majesty can benefit anyone, as from You is all wealth and majesty.',
  },
  {
    arabic: 'سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ. (ثلاثاً وثلاثين) لَا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ .',
    transliteration: 'Subhanal-lah walhamdu lillah, wallahu akbar (thirty-three times). La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shayin qadeer.',
    translation: 'How perfect Allah is, all praise is for Allah, and Allah is the greatest.’ (thirty-three times) None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent.'
  },
  {
    arabic: 'سُورَةُ الإِخْلَاصِ بِسْمِ ٱللهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ قُلْ هُوَ ٱللهُ أَحَدٌ ۝ ٱللهُ ٱلصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ',
    transliteration: 'bismillaahir-raḥmaanir-raḥeem qul huwa-llaahu aḥad ۝ allaahuṣ-ṣamad ۝ lam yalid wa lam yoolad ۝ wa lam yakul-lahuۥ kufuwan aḥad',
    translation: 'Surah Al-Ikhlas: In the name of Allah, the Beneficent, the Merciful Say (O Muhammad (SAW)): "He is Allâh, (the) One.* Allâh the Self-Sufficient Master, Whom all creatures need, (He neither eats nor drinks). * He begets not, nor was He begotten. * And there is none co-equal or comparable unto Him."',
    reference: 'Al-Ikhlas',
  },
  {
    arabic: 'سُورَةُ الْفَلَقِ بِسْمِ ٱللهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
    transliteration: 'bismillaahir-raḥmaanir-raḥeem qul a‛oodhu birabbil-falaq ۝ min sharri maa khalaq ۝ wa min sharri ghaasiqin idhaa waqab ۝ wa min sharrin-naffaathaati fil-‛uqad ۝ wa min sharri ḥaasidin idhaa ḥasad',
    translation: 'Surah Al-Falaq: In the name of Allah, the Beneficent, the Merciful Say: "I seek refuge with (Allâh) the Lord of the daybreak, * From the evil of what He has created; * And from the evil of the darkening (night) as it comes with its darkness; (or the moon as it sets or goes away) * And from the evil of those who practice witchcrafts when they blow in the knots, * And from the evil of the envier when he envies."',
    reference: 'Al-Falaq',
  },
  {
    arabic: 'سُورَةُ النَّاسِ بِسْمِ ٱللهِ ٱلرَّحْمَـٰnِ ٱلرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ ۝ مَلِكِ ٱلنَّاسِ ۝ إِلَـٰهِ ٱلنَّاسِ ۝ مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ ۝ ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ ۝ مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ',
    transliteration: 'bismillaahir-raḥmaanir-raḥeem qul a‛oodh-u birabbin-naas ۝ malikin-naas ۝ ilaahin-naas ۝ min sharril-waswaasil-khannaas ۝ alladhee yuwaswisu fee ṣudoorin-naas ۝ minal-jinnati wan-naas',
    translation: 'Surah An-Nas: In the name of Allah, the Beneficent, the Merciful. Say: "I seek refuge with (Allâh) the Lord of mankind, * The King of mankind * The Ilâh (Allah) of mankind, * From the evil of the whisperer (devil who whispers evil in the hearts of men) who withdraws (from his whispering in one\'s heart after one remembers Allâh), * Who whispers in the breasts of mankind, * Of jinn and men."',
    reference: 'An-Nas',
  },
  {
    arabic: 'اللهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.',
    transliteration: "Allaahu laa 'ilaaha 'illaa Huwal-Hayyul-Qayyoom, laa ta'khuthuhu sinatun wa laa nawm, lahu maa fis-samaawaati wa maafil-'ardh, man thal-lathee yashfa'u 'indahu 'illaa bi'ithnih, ya'lamu maa bayna 'aydeehim wa maa khalfahum, wa laa yuheetoona bishay'im-min 'ilmihi 'illaa bimaa shaa'a, wasi'a kursiyyuhus-samaawaati wal'ardh, wa laa ya'ooduhu hifdhuhumaa, wa Huwal-'Aliyyul- 'Adheem.",
    translation: "Allah! There is none worthy of worship but He, the Ever Living, the One Who sustains and protects all that exists. Neither slumber nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who is he that can intercede with Him except with His Permission? He knows what happens to them in this world, and what will happen to them in the Hereafter. And they will never compass anything of His Knowledge except that which He wills. His Throne extends over the heavens and the earth, and He feels no fatigue in guarding and preserving them. And He is the Most High, the Most Great.",
    reference: 'Quran 2:255',
  },
  {
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحَدْهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
    transliteration: 'La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, yuhyee wayumeet, wahuwa AAala kulli shayin qadeer.',
    translation: 'None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise, He gives life and causes death and He is over all things omnipotent.',
  },
  {
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً .',
    transliteration: 'Allahumma innee as-aluka AAilman nafiAAan, warizqan tayyiban, waAAamalan mutaqabbalan.',
    translation: 'O Allah, I ask You for knowledge which is beneficial and sustenance which is good, and deeds which are acceptable.',
  },
  {
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً .',
    transliteration: 'Allahumma innee as-aluka AAilman nafiAAan, warizqan tayyiban, waAAamalan mutaqabbalan.',
    translation: 'O Allah, I ask You for knowledge which is beneficial and sustenance which is good, and deeds which are acceptable.',
  },
];


export const jummahDuas = [
  {
    arabic: 'اللَّهُمَّ اغْفِرْ لَنَا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ، الْأَحْيَاءِ مِنْهُمْ وَالْأَمْوَاتِ',
    transliteration: 'Allahumma-ghfir lana wa lil-mu’minina wal-mu’minat, al-ahya’i minhum wal-amwat',
    translation: 'O Allah, forgive us and the believing men and women, the living among them and the dead.',
    reference: 'Hadith',
  },
];
export const mercyDuas = [
  {
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    transliteration: 'Rabbana atina fi dunya hasanatan wa fil akhirati hasanatan waqina adhaban-nar',
    translation: 'Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.',
    reference: 'Quran 2:201',
  },
];
export const forgivenessDuas = [
  {
    arabic: 'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
    transliteration: 'Rabbana zalamna anfusana wa il lam taghfir lana wa tarhamna lanakunanna minal-khasirin',
    translation: 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.',
    reference: 'Quran 7:23',
  },
];
export const happinessDuas = [
  {
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ نَفْسًا بِكَ مُطْمَئِنَّةً، تُؤْمِنُ بِلِقَائِكَ، وَتَرْضَى بِقَضَائِكَ، وَتَقْنَعُ بِعَطَائِكَ',
    transliteration: 'Allahumma inni as’aluka nafsan bika mutma’innah, tu’minu biliqa’ika, wa tarda biqada’ika, wa taqna‘u bi‘ata’ika',
    translation: 'O Allah, I ask You for a soul that is tranquil and pleased with You, that believes in meeting You, that is content with Your decree, and that is satisfied with Your giving.',
    reference: 'Hadith',
  },
];
export const rizqDuas = [
  {
    arabic: 'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
    transliteration: 'Allahummak-finee bihalalika ‘an haramik, wa aghninee bifadhlika ‘amman siwak',
    translation: 'O Allah, suffice me with what You have permitted so that I have no need of that which You have forbidden, and make me independent of all others besides You.',
    reference: 'Hadith',
  },
];
export const repentanceDuas = [
  {
    arabic: 'أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ',
    transliteration: 'Astaghfirullahal-ladhi la ilaha illa Huwal-Hayyul-Qayyum wa atubu ilaih',
    translation: 'I seek the forgiveness of Allah, whom there is none worthy of worship except Him, The Ever-Living, The Self-Subsisting, and I turn to Him in repentance.',
    reference: 'Hadith',
  },
];
export const rectificationDuas = [
  {
    arabic: 'اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي',
    transliteration: 'Allahumma aslih li deeni allathee huwa ‘ismatu amri, wa aslih li dunyaya allati feeha ma’ashi, wa aslih li akhirati allati feeha ma’adi',
    translation: 'O Allah, rectify for me my religion which is the protection of my affairs, and rectify for me my worldly life in which is my livelihood, and rectify for me my hereafter in which is my return.',
    reference: 'Hadith',
  },
];
export const goodnessDuas = [
  {
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ فِعْلَ الْخَيْرَاتِ، وَتَرْكَ الْمُنْكَرَاتِ، وَحُبَّ الْمَسَاكِينِ',
    transliteration: 'Allahumma inni as’aluka fi’lal-khayrat, wa tarkal-munkarat, wa hubbal-masakeen',
    translation: 'O Allah, I ask You for the ability to do good deeds, to avoid evil deeds, and to love the poor.',
    reference: 'Hadith',
  },
];
export const patienceDuas = [
  {
    arabic: 'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
    transliteration: 'Rabbana afrigh ‘alayna sabran wa thabbit aqdamana wansurna ‘alal-qawmil-kafirin',
    translation: 'Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.',
    reference: 'Quran 2:250',
  },
];
export const justiceDuas = [
  {
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ دَعْوَةِ الْمَظْلُومِ',
    transliteration: 'Allahumma inni a’udhu bika min da’watil-mazloom',
    translation: 'O Allah, I seek refuge in You from the supplication of the oppressed.',
    reference: 'Hadith',
  },
];
export const rabbanaDuas = [
  {
    arabic: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ',
    transliteration: 'Rabbana taqabbal minna innaka Antas-Sami’ul-‘Alim',
    translation: 'Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing.',
    reference: 'Quran 2:127',
  },
];
export const ruqyahDuas = [
  {
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    transliteration: 'A’udhu bikalimatil-lahit-tammati min sharri ma khalaq',
    translation: 'I seek refuge in the perfect words of Allah from the evil of that which He has created.',
    reference: 'Hadith',
  },
];
export const protectionDuas = [
  {
    arabic: 'اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي',
    transliteration: 'Allahummah-fazni min bayni yadayya wa min khalfi wa ‘an yameeni wa ‘an shimali wa min fawqi wa a’udhu bi’azamatika an ughtala min tahti',
    translation: 'O Allah, protect me from before me and from behind me, on my right and on my left, and from above me, and I seek refuge in Your greatness from being unexpectedly destroyed from beneath me.',
    reference: 'Hadith',
  },
];
export const reverenceDuas = [
  {
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَشْيَتَكَ فِي الْغَيْبِ وَالشَّهَادَةِ',
    transliteration: 'Allahumma inni as’aluka khashyataka fil-ghaybi wash-shahadah',
    translation: 'O Allah, I ask You for Your fear in the unseen and the seen.',
    reference: 'Hadith',
  },
];
export const ramadanDuas = [
  {
    arabic: 'اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ',
    transliteration: 'Allahumma ahillahu ‘alayna bil-yumni wal-iman was-salamati wal-islam',
    translation: 'O Allah, bring this moon over us with blessings and faith, and with safety and Islam.',
    reference: 'Hadith',
  },
];

export const openingTakbeerDuas = [
  {
    arabic: 'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ ، اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الأَ بْيَضُ مِنَ الدَّنَسِ ، اللّهُمَّ اغْسِلْنِي مِنْ خَطَايَايَ بِالثَّلْجِ وَالْمَاءِ وَالْبَرْدِ.',
    transliteration: 'allaahumma baa‛id baynee wa bayna khaṭaayaa-ya kamaa baa‛adta baynal-mashriqi wal-maghrib, allaahumma naqqinee min khaṭaayaa-ya kamaa yunaqqath-thawbul-abyaḍu minad-danas, allaahummagh-silnee min khaṭaayaa-ya bith-thalji wal-maa’i wal-barad.',
    translation: 'O Allah, distance me from my sins just as You have distanced The East from The West, O Allah, purify me of my sins as a white robe is purified of filth, O Allah, cleanse me of my sins with snow, water, and ice.'
  },
  {
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ.',
    transliteration: 'subḥaanak-allaahumma wa biḥamdika, wa tabaarakas-muka wa ta‛aalaa jadduka wa laa ilaaha ghayruk.',
    translation: 'How far from imperfections You are O Allah, and I praise You. Blessed be Your name, and lofty is Your position and none has the right to be worshipped except You.'
  },
  {
    arabic: 'وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفَاً وَمَا أَنَا مِنَ الْمُشْرِكِينَ، إِنَّ صَلاَتِي، وَنُسُكِي، وَمَحْيَايَ، وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ، لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ. اللَّهُمَّ أَنْتَ المَلِكُ لاَ إِلَهَ إِلاَّ أَنْتَ، أَنْتَ رَبِّي وَأَنَا عَبْدُكَ، ظَلَمْتُ نَفْسِي وَاعْتَرَفْتُ بِذَنْبِي فَاغْفِرْ لِي ذُنُوبي جَمِيعَاً إِنَّهُ لاَ يَغْفِرُ الذُّنوبَ إِلاَّ أَنْتَ. وَاهْدِنِي لِأَحْسَنِ الأَخْلاقِ لاَ يَهْدِي لِأَحْسَنِها إِلاَّ أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لاَ يَصْرِفُ عَنِّي سَيِّئَهَا إِلاَّ أَنْتَ، لَبَّيْكَ وَسَعْدَيْكَ، وَالخَيْرُ كُلُّهُ بِيَـــــــدَيْكَ، وَالشَّـــــرُّ لَيْسَ إِلَيْــــــكَ، أَنَا بِكَ وَإِلَيْكَ، تَبارَكْتَ وَتَعَالَيْتَ، أَسْتَغْفِرُكَ وَأَتوبُ إِلَيْكَ.',
    transliteration: 'wajjahtu wajhiya lil-ladhee faṭarad-samaawaati wal-arḍa ḥaneefan, wa maa ana minal-mushrikeen, inna ṣalaatee wa nusukee wa maḥyaa-ya wa mamaatee lillaahi rabbil-‛aalameena, laa shareeka lahu wa bidhaalika umirtu wa ana minal-muslimeen, allaahumma antal-maliku laa ilaaha illaa ant, anta rabbee wa ana ‛abduk, ẓalamtu nafsee wa‛taraftu bidhambee faghfir lee dhunoobee jamee‛an innahu laa yaghfir-udh-dhunooba illaa ant, wahdinee li aḥsanil-akhlaaqi laa yahdee li aḥsanihaa illaa ant, waṣrif ‛annee sayyi’ahaa laa yaṣrifu ‛annee sayyi’ahaa illaa ant, labbayka wa sa‛dayka, wal-khayru kulluhu bi yadayka wash-sharru laysa ilayka, ana bika wa ilayka, tabaarakta wa ta‛aalayta, astaghfiruka wa atoobu ilayk.',
    translation: 'I have turned my face sincerely towards He who has brought forth the heavens and the Earth and I am not of those who associate (others with Allah). Indeed my prayer, my sacrifice, my life and my death are for Allah, Lord of the worlds, no partner has He, with this I am commanded and I am of the Muslims. O Allah, You are the Sovereign, none has the right to be worshipped except You. You are my Lord and I am Your servant, I have wronged my own soul and have acknowledged my sin, so forgive me all my sins for no one forgives sins except You. Guide me to the best of characters for none can guide to it other than You, and deliver me from the worst of characters for none can deliver me from it other than You. Here I am, in answer to Your call, happy to serve you. All good is within Your hands and evil does not stem from You. I exist by your will and will return to you. Blessed and High are You, I seek Your forgiveness and repent unto You.',
  },
];
    




    
