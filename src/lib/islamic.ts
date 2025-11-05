export const verseOfTheDay = {
  arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  transliteration: 'Bismillāhi r-raḥmāni r-raḥīm',
  translation:
    'In the name of of Allah, the Most Gracious, the Most Merciful.',
  reference: 'Al-Fatihah, 1:1',
};

export const prayerTimesData = {
  Fajr: '04:30',
  Sunrise: '06:00',
  Zohar: '12:30',
  Asr: '16:00',
  Maghrib: '18:45',
  Isha: '20:15',
};

export const islamicEvents = [
  { name: 'Ramadan Starts', date: '2025-02-28' },
  { name: 'Eid al-Fitr', date: '2025-03-30' },
  { name: 'Day of Arafah', date: '2025-06-05' },
  { name: 'Eid al-Adha', date: '2025-06-06' },
  { name: 'Islamic New Year (1447 AH)', date: '2025-06-26' },
  { name: 'Ashura', date: '2025-07-05' },
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
