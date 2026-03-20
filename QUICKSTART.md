# 🚀 Quick Start Guide

## ✅ Gereksinimler

- **Node.js:** v18+ ([İndir](https://nodejs.org/))
- **npm:** v9+ (Node.js ile birlikte gelir)
- **Git** (opsiyonel)

## 📦 Adım 1: Kurulum

```bash
# Proje klasörüne gir
cd hair-salon-website

# Dependencies'leri yükle
npm install
```

## 🎯 Adım 2: Development Server'ı Başlat

```bash
# Development modunda sunucuyu başlat
npm run dev
```

Çıktı:
```
▲ Next.js 14.0.0
- Local:        http://localhost:3000
```

**Tarayıcında aç:** http://localhost:3000

---

## 🛠️ Geliştirme Komutları

```bash
# Development modunda (hot reload)
npm run dev

# Production build oluştur
npm run build

# Production modunda çalıştır
npm start

# Kod kalitesi kontrol et
npm run lint

# Kod formatla
npm run format

# Type kontrol et
npm run type-check
```

---

## 📁 Dosya Yapısı

```
src/
├── app/
│   ├── layout.tsx          # Ana layout
│   ├── page.tsx            # Ana sayfa
│   ├── globals.css         # Global stiller
│   └── api/                # API routes (opsiyonel)
│
├── components/
│   ├── Navigation.tsx      # Menü
│   ├── HeroSection.tsx     # Hero bölümü
│   └── TechniquesSection.tsx # Teknikler
│
├── hooks/                  # Custom React hooks
├── utils/                  # Yardımcı fonksiyonlar
└── types/                  # TypeScript türleri

public/
├── images/                 # Statik görseller
├── blog-images/           # Blog görselleri
└── favicon.ico            # Site simgesi
```

---

## 🎨 Stil Sistemi

### Renk Kullanımı (Tailwind)

```jsx
// Renk sınıfları
<div className="bg-primary text-white">
  Altın arka plan, beyaz yazı
</div>

<div className="bg-secondary text-white">
  Koyu mor arka plan
</div>

<div className="bg-accent">
  Pembe vurgu
</div>
```

### Font'lar

```jsx
// Serif başlıklar (Playfair Display)
<h1 className="font-serif text-4xl">
  Başlık
</h1>

// Sans-serif metin (Lato)
<p className="font-body">
  Metin içeriği...
</p>

// Dekoratif yazı (Dancing Script)
<span className="font-accent">
  Özel!
</span>
```

---

## 📱 Responsive Tasarım

```jsx
// Mobile-first approach
<div className="w-full md:w-1/2 lg:w-1/3">
  {/*
    Mobil: tam genişlik
    Tablet (768px+): yarı genişlik
    Desktop (1024px+): 1/3 genişlik
  */}
</div>
```

---

## 🔍 SEO Özellikleri

### Meta Etiketleri

```jsx
import { NextSeo } from 'next-seo';

<NextSeo
  title="Saç Kaynak | Bayan Kuaför"
  description="..."
  canonical="https://salonnamehere.com"
/>
```

### Resimler

```jsx
import Image from 'next/image';

<Image
  src="/images/salon.jpg"
  alt="Salon fotoğrafı"
  width={800}
  height={600}
  priority // LCP optimizasyonu
/>
```

---

## 🐳 Docker ile Çalıştırma

### Yöntem 1: Docker Compose (Tavsiye Edilir)

```bash
# Development modunda başlat (hot reload ile)
docker-compose up

# Background'da çalıştır
docker-compose up -d

# Durdur
docker-compose down
```

**Erişim:** http://localhost:3000

### Yöntem 2: Manuel Docker

```bash
# Image oluştur
docker build -t salon-website:latest .

# Container çalıştır
docker run -p 3000:3000 salon-website:latest

# Development modunda (volume mount ile)
docker run -p 3000:3000 -v $(pwd):/app salon-website:latest npm run dev
```

---

## 📝 Ortam Değişkenleri

`.env.local` dosyası oluştur:

```bash
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Analytics
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXX

# Database (Blog için)
DATABASE_URL=postgresql://user:password@localhost:5432/blog_db

# DigitalOcean
NEXT_PUBLIC_CDN_URL=https://cdn.salonnamehere.com
DO_SPACES_KEY=xxx
DO_SPACES_SECRET=xxx
```

---

## 🔗 Bağlantılar

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com
- **TypeScript:** https://www.typescriptlang.org
- **React:** https://react.dev

---

## 🆘 Sorun Giderme

### "npm install" başarısız oluyor

```bash
# Cache temizle
npm cache clean --force

# Tekrar dene
npm install
```

### Port 3000 zaten kullanılıyor

```bash
# Farklı port kullan
npm run dev -- -p 3001
```

### Stil'ler uygulanmıyor

```bash
# Next.js cache temizle
rm -rf .next

# Tekrar build et
npm run dev
```

### "Cannot find module" hatası

```bash
# node_modules sil ve yeniden kur
rm -rf node_modules package-lock.json
npm install
```

---

## 📊 Performance

```bash
# Lighthouse score kontrol et
npm run build

# Sayfa boyutunu kontrol et
du -sh .next
```

---

## 🚀 Production Deployment

```bash
# DigitalOcean App Platform'e deploy
doctl apps create --spec app.yaml

# Güncellemeler deploy et
doctl apps update APP_ID --spec app.yaml
```

---

**Son Güncelleme:** Mart 20, 2026
**Versiyon:** 1.0.0
**Destek:** oguzgoktug23@gmail.com
