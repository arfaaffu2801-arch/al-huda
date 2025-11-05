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

export const islamicEvents = [
  { name: 'Ramadan Starts', date: '2025-02-28' },
  { name: 'Eid al-Fitr', date: '2025-03-30' },
  { name: 'Day of Arafah', date: '2025-06-05' },
  { name: 'Eid al-Adha', date: '2025-06-06' },
  { name: 'Islamic New Year (1447 AH)', date: '2025-06-26' },
  { name: 'Ashura', date: '2025-07-05' },
];

export const juzData = [
    { juzNumber: 1, name: "Alif Lam Meem" },
    { juzNumber: 2, name: "Sayaqool" },
    { juzNumber: 3, name: "Tilkal Rusul" },
    { juzNumber: 4, name: "Lan Tana Loo" },
    { juzNumber: 5, name: "Wal Mohsanat" },
    { juzNumber: 6, name: "La Yuhibbullah" },
    { juzNumber: 7, name: "Wa Iza Samiu" },
    { juzNumber: 8, name: "Wa Lau Annana" },
    { juzNumber: 9, name: "Qalal Malao" },
    { juzNumber: 10, name: "Wa A'lamu" },
    { juzNumber: 11, name: "Yatazeroon" },
    { juzNumber: 12, name: "Wa Mamin Da'abat" },
    { juzNumber: 13, name: "Wa Ma Ubrioo" },
    { juzNumber: 14, name: "Rubama" },
    { juzNumber: 15, name: "Subhanal lazi" },
    { juzNumber: 16, name: "Qala Alam" },
    { juzNumber: 17, name: "Iqtaraba lil'n-nasi" },
    { juzNumber: 18, name: "Qadd Aflaha" },
    { juzNumber: 19, name: "Wa Qala lladhina" },
    { juzNumber: 20, name: "A'man Khalaqa" },
    { juzNumber: 21, name: "Utlu Ma Oohiya" },
    { juzNumber: 22, name: "Wa-Man yaqnut" },
    { juzNumber: 23, name: "Wa Mali" },
    { juzNumber: 24, name: "Fa-man Azlamu" },
    { juzNumber: 25, name: "Ilayhi Yuruddu" },
    { juzNumber: 26, name: "Ha Meem" },
    { juzNumber: 27, name: "Qala Fama Khatbukum" },
    { juzNumber: 28, name: "Qadd Sami Allah" },
    { juzNumber: 29, name: "Tabaraka lladhi" },
    { juzNumber: 30, name: "Amma" }
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
