export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface DayProgress {
  day: number;
  title: string;
  completed: boolean;
  progress: number;
}

export interface CourseData {
  days: DayProgress[];
  sections: Section[];
}

export const QUESTION_BANK: Question[] = [
  // Day 1 - Basics
  {
    id: "d1-q1",
    text: "Apa kata untuk 'Hello' dalam Bahasa Jerman?",
    options: ["Hallo", "Tschüss", "Auf Wiedersehen", "Guten Morgen"],
    correctAnswer: 0,
    explanation: "Hallo adalah penggunaan umum untuk menyapa dalam bahasa Jerman."
  },
  {
    id: "d1-q2",
    text: "Bagaimana Anda mengatakan 'Thank you'?",
    options: ["Bitte", "Danke", "Entschuldigung", "Ja"],
    correctAnswer: 1,
    explanation: "Danke berarti 'thank you' dalam bahasa Jerman."
  },
  {
    id: "d1-q3",
    text: "Apa kata untuk 'Goodbye'?",
    options: ["Hallo", "Tschüss", "Hallo zusammen", "Ja"],
    correctAnswer: 1,
    explanation: "Tschüss adalah penggunaan umum untuk goodbye."
  },

  // Day 2 - Numbers
  {
    id: "d2-q1",
    text: "Bagaimana Anda mengatakan '1' dalam bahasa Jerman?",
    options: ["Zwei", "Drei", "Eins", "Vier"],
    correctAnswer: 2,
    explanation: "Eins berarti angka satu."
  },
  {
    id: "d2-q2",
    text: "Apa angka '5' dalam bahasa Jerman?",
    options: ["Sechs", "Sieben", "Fünf", "Acht"],
    correctAnswer: 2,
    explanation: "Fünf berarti lima."
  },

  // Day 3 - Colors
  {
    id: "d3-q1",
    text: "Apa warna 'Merah' dalam bahasa Jerman?",
    options: ["Gelb", "Blau", "Rot", "Grün"],
    correctAnswer: 2,
    explanation: "Rot adalah bahasa Jerman untuk merah."
  },
  {
    id: "d3-q2",
    text: "Bagaimana Anda mengatakan 'Biru'?",
    options: ["Gelb", "Blau", "Weiß", "Schwarz"],
    correctAnswer: 1,
    explanation: "Blau berarti biru."
  },

  // Day 4 - Family
  {
    id: "d4-q1",
    text: "Apa kata untuk 'Ayah' dalam bahasa Jerman?",
    options: ["Mutter", "Vater", "Bruder", "Schwester"],
    correctAnswer: 1,
    explanation: "Vater berarti ayah."
  },
  {
    id: "d4-q2",
    text: "Bagaimana Anda mengatakan 'Ibu'?",
    options: ["Vater", "Tochter", "Mutter", "Sohn"],
    correctAnswer: 2,
    explanation: "Mutter berarti ibu."
  },

  // Day 5 - Food & Drinks
  {
    id: "d5-q1",
    text: "Apa kata untuk 'Air' dalam bahasa Jerman?",
    options: ["Brot", "Wasser", "Milch", "Kaffee"],
    correctAnswer: 1,
    explanation: "Wasser adalah air."
  },
  {
    id: "d5-q2",
    text: "Bagaimana Anda mengatakan 'Bread'?",
    options: ["Wasser", "Brot", "Apfel", "Schokolade"],
    correctAnswer: 1,
    explanation: "Brot berarti roti."
  },

  // Day 6 - Directions
  {
    id: "d6-q1",
    text: "Bagaimana Anda mengatakan 'Kiri'?",
    options: ["Rechts", "Links", "Vorne", "Hinten"],
    correctAnswer: 1,
    explanation: "Links berarti kiri."
  },
  {
    id: "d6-q2",
    text: "Apa kata untuk 'Kanan'?",
    options: ["Links", "Mitte", "Rechts", "Dort"],
    correctAnswer: 2,
    explanation: "Rechts berarti kanan."
  },

  // Day 7 - Time
  {
    id: "d7-q1",
    text: "Bagaimana Anda mengatakan '1:00 PM' (Dreizehn Uhr)?",
    options: ["Eins Uhr", "Zwölf Uhr", "Dreizehn Uhr", "Vier Uhr"],
    correctAnswer: 2,
    explanation: "Dreizehn Uhr berarti 1:00 PM."
  },
  {
    id: "d7-q2",
    text: "Apa waktu 6:00 PM dalam bahasa Jerman?",
    options: ["Sechs Uhr", "Sieben Uhr", "Neun Uhr", "Zehn Uhr"],
    correctAnswer: 0,
    explanation: "Sechs Uhr adalah 6:00."
  },

  // Day 8 - Weather
  {
    id: "d8-q1",
    text: "Apa kata untuk 'Sunny' dalam bahasa Jerman?",
    options: ["Regen", "Sonne", "Schnee", "Wind"],
    correctAnswer: 1,
    explanation: "Sonne berarti matahari."
  },
  {
    id: "d8-q2",
    text: "Bagaimana Anda mengatakan 'Rainy'?",
    options: ["Wolken", "Regen", "Schnee", "Kalt"],
    correctAnswer: 1,
    explanation: "Regen berarti hujan."
  },

  // Day 9 - Transport
  {
    id: "d9-q1",
    text: "Apa kata untuk 'Bus' dalam bahasa Jerman?",
    options: ["U-Bahn", "S-Bahn", "Bus", "Zug"],
    correctAnswer: 2,
    explanation: "Bus berarti bus."
  },
  {
    id: "d9-q2",
    text: "Bagaimana Anda mengatakan 'Train'?",
    options: ["Auto", "Bike", "Zug", "Flugzeug"],
    correctAnswer: 2,
    explanation: "Zug adalah kereta."
  },

  // Day 10 - Daily Routine
  {
    id: "d10-q1",
    text: "Apa kata untuk 'Wake up'?",
    options: ["Schlafen", "Aufstehen", "Essen", "Trinken"],
    correctAnswer: 1,
    explanation: "Aufstehen berarti bangun."
  },
  {
    id: "d10-q2",
    text: "Bagaimana Anda mengatakan 'Eat'?",
    options: ["Schlafen", "Aufstehen", "Essen", "Trinken"],
    correctAnswer: 2,
    explanation: "Essen berarti makan."
  },

  // Day 11 - Hobbies
  {
    id: "d11-q1",
    text: "Apa kata untuk 'Reading' dalam bahasa Jerman?",
    options: ["Schreiben", "Lesen", "Tanzen", "Singen"],
    correctAnswer: 1,
    explanation: "Lesen berarti membaca."
  },
  {
    id: "d11-q2",
    text: "Bagaimana Anda mengatakan 'Swimming'?",
    options: ["Schwimmen", "Laufen", "Tanzen", "Singen"],
    correctAnswer: 0,
    explanation: "Schwimmen berolahraga berenang."
  },

  // Day 12 - Work & School
  {
    id: "d12-q1",
    text: "Apa kata untuk 'Work' dalam bahasa Jerman?",
    options: ["Schule", "Uni", "Arbeit", "Haus"],
    correctAnswer: 2,
    explanation: "Arbeit berarti kerja."
  },
  {
    id: "d12-q2",
    text: "Bagaimana Anda mengatakan 'School'?",
    options: ["Kino", "Arbeit", "Schule", "Büro"],
    correctAnswer: 2,
    explanation: "Schule berarti sekolah."
  },

  // Day 13 - Shopping
  {
    id: "d13-q1",
    text: "Apa kata untuk 'Price' dalam bahasa Jerman?",
    options: ["Geld", "Preis", "Menge", "Farbe"],
    correctAnswer: 1,
    explanation: "Preis berarti harga."
  },
  {
    id: "d13-q2",
    text: "Bagaimana Anda mengatakan 'Cheap'?",
    options: ["Teuer", "Billig", "Gut", "Schlecht"],
    correctAnswer: 1,
    explanation: "Billig berarti murah."
  },

  // Day 14 - Review & Practice
  {
    id: "d14-q1",
    text: "Apa kata untuk 'Family' dalam bahasa Jerman?",
    options: ["Freunde", "Kinder", "Familie", "Nachbarn"],
    correctAnswer: 2,
    explanation: "Familie berarti keluarga."
  },
  {
    id: "d14-q2",
    text: "Bagaimana Anda mengatakan 'Friend'?",
    options: ["Feind", "Partner", "Freund", "Mutter"],
    correctAnswer: 2,
    explanation: "Freund berarti teman."
  },
];

export const SECTIONS: Section[] = [
  {
    id: "section-1",
    title: "Basics & Greetings",
    description: "Pengenalan kata dasar dan salam",
    questions: QUESTION_BANK.slice(0, 6),
  },
  {
    id: "section-2",
    title: "Numbers & Counting",
    description: "Angka dasar dalam bahasa Jerman",
    questions: QUESTION_BANK.slice(6, 9),
  },
  {
    id: "section-3",
    title: "Colors & Family",
    description: "Warna dan kata-kata keluarga",
    questions: QUESTION_BANK.slice(9, 14),
  },
  {
    id: "section-4",
    title: "Daily Life & Review",
    description: "Makanan, waktu, dan review keseluruhan",
    questions: QUESTION_BANK.slice(14, 24),
  },
];
