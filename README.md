# German A1 Course Dashboard

Dashboard pembelajaran bahasa Jerman level A1 dengan 14 hari sesi.

## ✨ Fitur

- 📱 **Mobile-first** design - tampilan optimal di smartphone
- 📊 **Progress tracking** - hari yang belum selesai tidak bisa lanjut
- 🎲 **Random question generation** - soal diacak setiap sesi
- 💾 **Local storage** - progress tersimpan otomatis
- 🎯 **4 Sections** - mirip dengan test A1 asli:
  1. Basics & Greetings
  2. Numbers & Counting
  3. Colors & Family
  4. Daily Life & Review
- 📝 **20 Questions** - bank soal lengkap dengan penjelasan

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy from GitHub:**
   - Push project ke GitHub repository
   - Buka [Vercel](https://vercel.com)
   - Import repository
   - Vercel akan otomatis mendeteksi Next.js

2. **Deploy from CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

### Manual Vercel

1. Push code ke GitHub
2. Buat Vercel project di dashboard.vercel.com
3. Import repository
4. Vercel akan auto-build & deploy

## 📦 Tech Stack

- **Next.js 16.1.6** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Local Storage** - Progress persistence

## 📁 Struktur Project

```
german-course-dashboard/
├── src/
│   ├── app/
│   │   ├── page.tsx      # Main dashboard
│   │   ├── layout.tsx    # Layout utama
│   │   └── globals.css   # Global styles
│   ├── data/
│   │   └── course-data.ts # Bank soal & data course
│   └── types/            # TypeScript types
├── public/               # Static assets
├── package.json
└── README.md
```

## 🎯 Cara Menggunakan

1. **Mulai course:** Pilih hari pertama dari progress bar
2. **Jawab soal:** Klik opsi jawaban
3. **Lihat feedback:** Setiap soal punya penjelasan
4. **Lanjut:** Klik "Lanjut" atau "Next"
5. **Progress otomatis:** Tersimpan di browser

## 📱 Fitur Mobile

- Touch-friendly buttons (lebih besar)
- Single column layout
- Sticky progress bar
- Optimized for 320px+ width

## 🔧 Development

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

## 📊 Progress Tracking

Progress tersimpan otomatis di:
- ✅ Completed days (disimpan)
- 📍 Current day
- 📍 Current section

Data disimpan di `localStorage` browser.

## 🎨 Customization

Edit `src/data/course-data.ts` untuk:
- Menambah/mengurangi soal
- Mengubah judul section
- Mengedit penjelasan jawaban

Edit `src/app/page.tsx` untuk:
- Mengubah warna theme
- Menyesuaikan layout
- Menambah fitur lain

---

© 2026 German A1 Course
