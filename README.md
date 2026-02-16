# de-learn-de 🇩🇪

Dashboard pembelajaran bahasa Jerman A1 untuk Ine Maria. Kursus 14 hari yang interaktif, mobile-first, dan bergamifikasi.

## 🎯 Apa itu de-learn-de?

- **de** = sapaan akrab (dek/dik)
- **learn** = belajar
- **de** = Deutschland (Jerman)

> "De-learn-de" = Belajar Jerman dengan yang kita sayangi

---

## ✨ Fitur

- **14 Hari Kurikulum A1** - Harian ada 4 sesi: Hören (Listening), Lesen (Reading), Schreiben (Writing), Sprechen (Speaking)
- **Progress Locked** - Harus selesai semua 4 sesi hari ini baru bisa lanjut hari besok
- **Streak Counter** - Menghitung hari beruntun belajar
- **80 Soal A1** - Bank soal diacak setiap sesi
- **Mobile-First Design** - Optimal untuk smartphone Ine
- **Progress Saved** - Tersimpan di browser (tidak hilang saat refresh)

---

## 🚀 Deploy ke Vercel

### Cara 1: Via Dashboard (Sederhana)

1. Buka [vercel.com](https://vercel.com) dan login
2. Klik **"Add New..."** → **"Project"**
3. Pilih repository `de-learn-de` dari GitHub
4. Klik **"Deploy"**

Vercel akan otomatis:
- Build project Next.js
- Deploy ke production
- Berikan link (misal: `https://de-learn-de.vercel.app`)

### Cara 2: Via CLI

```bash
npm i -g vercel
vercel
```

---

## 📱 Kurikulum 14 Hari

### Fase 1: Dasar (Hari 1-5)
- Hari 1: Alphabet, Begrüßung
- Hari 2: Numbers 1-20
- Hari 3: Personal Pronouns, Present Tense
- Hari 4: Colors & Family
- Hari 5: Modal Verbs

### Fase 2: Kehidupan Sehari-hari (Hari 6-10)
- Hari 6: Food & Drinks
- Hari 7: Time & Daily Schedule
- Hari 8: Shopping & Money
- Hari 9: Directions & Places
- Hari 10: Weather & Seasons

### Fase 3: Pemantapan (Hari 11-14)
- Hari 11: Past Tense Basics
- Hari 12-14: Mock Tests

---

## 🎯 Cara Menggunakan

1. **Buka link** - Ine buka web dari HP-nya
2. **Pilih Hari Pertama** - Klik "Hari Ke-1" (selalu unlocked)
3. **Selesaikan 4 Sesi** - Hören, Lesen, Schreiben, Sprechen
4. **Progress Otomatis** - Setelah semua hijau, hari besok otomatis terbuka
5. **Lanjut Sekarang** - Tidak perlu refresh atau kirim pesan

---

## 🛠 Tech Stack

- **Next.js 16.1.6** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Local Storage** - Progress persistence
- **Playwright** - Testing & screenshots

---

## 📊 Progress System

Progress tersimpan di browser dengan key `german-progress`:

```json
{
  "days": {
    "1": { "unlocked": true, "completed": false, "sessions": { ... } },
    "2": { "unlocked": false, "completed": false, "sessions": { ... } }
  },
  "streak": 5,
  "lastCompletedDate": "2026-02-16"
}
```

---

## 📝 Customization

### Edit Warna Theme

Buka `src/app/globals.css`:

```css
@theme {
  --color-de-black: #2a2a2a;
  --color-de-red: #d94e4e;
  --color-de-gold: #f2c94c;
}
```

### Edit Soal

Buka `data/questions.json` - tambah/mengurangi soal di sana.

---

## 🧪 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📱 Mobile Features

- Bottom navigation bar
- Touch-friendly buttons (lebih besar dari 44x44px)
- Single column layout
- Optimized untuk 375px width (iPhone 12 mini)

---

## 📦 Struktur Project

```
de-learn-de/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Dashboard utama
│   │   ├── context/
│   │   │   └── ProgressContext.tsx  # Progress logic
│   │   ├── day/
│   │   │   └── [id]/page.tsx       # Materi harian
│   │   ├── components/
│   │   │   └── BottomNav.tsx       # Navigasi bawah
│   │   └── globals.css        # Theme colors
│   └── data/
│       └── questions.json     # Bank soal 80 pertanyaan
├── Dockerfile                # Container config
├── package.json
└── README.md
```

---

## 🐳 Docker

```bash
docker build -t de-learn-de .
docker run -p 3000:3000 de-learn-de
```

---

## 📄 License

MIT License - Gratis untuk digunakan

---

**Made with 💕 untuk Ine Maria**

Kurikulum Jerman A1 14 hari yang easy dan fun! 🇩🇪
