# 🎨 Bayan Kuaför Salon - Saç Kaynak Websitesi

**Versiyon:** 1.0.0
**Başlangıç Tarihi:** Mart 2026
**Son Güncelleme:** Mart 20, 2026
**Platform:** Next.js 14 + React 18 + Vercel + DigitalOcean
**Status:** ✅ Aktif Geliştirme

---

## 📋 Proje Özeti

Bu proje, **bayan kuaför/salon** işletmeleri için **3D interaktif**, **SEO-optimized** ve **modern tasarımlı** profesyonel bir tanıtım websitesidir. Özellikle **saç kaynak (hair extension)** hizmetlerini tanıtmaya odaklanmıştır.

**Teknoloji Stack:**
- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei
- **Animasyonlar:** GSAP (3.12.0+)
- **SEO:** next-seo, Schema markup
- **Forms:** react-hook-form
- **State:** React Hooks
- **Deployment:** Vercel (Preview + Production) + DigitalOcean (Backend)

---

## 🎯 Ana Özellikler

### 1. **3D Slider Galerisi** 🎬
- Three.js ile 3D dönen görseller
- Before-After karşılaştırması
- Mouse/Touch desteği
- Auto-play animasyonları
- Responsive tasarım

### 2. **SEO Optimizasyon** 📊
- **Ana Anahtar Kelimeler:** Saç Kaynak, Kaynak Saç, Hair Extension
- Meta etiketleri (Title, Description)
- Yapılandırılmış veri (LocalBusiness Schema)
- Mobil-first indexing
- Lazy loading resimler
- Internal linking stratejisi
- Sitemap ve robots.txt

### 3. **Modern Responsive Tasarım** 📱
- Mobile-first approach (320px+)
- Tablet optimized (768px+)
- Desktop (1024px+)
- Touch-friendly UI
- Accessible (a11y)

### 4. **Blog Sistemi** ✍️
- 4 ana kategori:
  - Saç Kaynak Rehberleri (SEO ağırlıklı)
  - Saç Bakımı ve Styling (Eğitim)
  - Trendler ve İlham (Engagement)
  - Hizmet ve Ürün Tanıtımı (Conversion)
- Anahtar kelime hedeflemesi
- İlişkili yazılar (tag-based)
- Blog yazı arama ve filtreleme
- Sosyal paylaşım entegrasyonu
- Analytics ve conversion tracking

### 5. **Kullanıcı Deneyimi** 💬
- WhatsApp/Telefon entegrasyonu
- Randevu sistemi (Calendly)
- Müşteri yorumları ve testimonials
- İletişim formu
- FAQ bölümü
- Hızlı navigasyon

---

## 📁 Dosya Yapısı

```
hair-salon-website/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Global layout + fonts
│   │   ├── page.tsx                  # Ana sayfa
│   │   ├── globals.css               # Global stiller
│   │   └── api/                      # API routes
│   │       ├── blog/                 # Blog API
│   │       ├── analytics/            # Analytics
│   │       └── contact/              # İletişim formu
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx            # Başlık/Navbar
│   │   │   ├── Footer.tsx            # Footer
│   │   │   └── Navigation.tsx        # Menü
│   │   ├── hero/
│   │   │   └── HeroSection.tsx       # Hero bölümü
│   │   ├── gallery/
│   │   │   ├── Slider3D.tsx          # 3D Slider
│   │   │   └── GalleryGrid.tsx       # Galeri grid
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx          # Yazı kartı
│   │   │   ├── BlogSearch.tsx        # Arama barı
│   │   │   └── RelatedPosts.tsx      # İlişkili yazılar
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Form.tsx
│   │
│   ├── hooks/
│   │   ├── useBlogPosts.ts           # Blog yazıları hook
│   │   ├── useAnalytics.ts           # Analytics hook
│   │   ├── use3DSlider.ts            # 3D Slider hook
│   │   └── useMediaQuery.ts          # Media query hook
│   │
│   ├── utils/
│   │   ├── hooks-registry.ts         # Hook sistemi
│   │   ├── seo-utils.ts              # SEO yardımcıları
│   │   ├── analytics.ts              # Analytics fonksiyonları
│   │   └── validators.ts             # Form validation
│   │
│   ├── types/
│   │   ├── blog.ts                   # Blog TypeScript types
│   │   ├── common.ts                 # Ortak types
│   │   └── api.ts                    # API types
│   │
│   └── styles/
│       ├── globals.css
│       ├── animations.css
│       └── 3d-effects.css
│
├── public/
│   ├── images/                       # Statik görseller
│   ├── blog-images/                  # Blog görselleri
│   ├── videos/                       # Video dosyaları
│   └── icons/                        # SVG ikonlar
│
├── docs/
│   ├── claude.md                     # Bu dosya
│   ├── QUICKSTART.md                 # Hızlı başlangıç
│   ├── PROJECT_SETUP.md              # Kurulum detayları
│   ├── skill.md                      # Teknik spesifikasyon
│   ├── hook.md                       # Hook sistemi
│   └── blog.md                       # Blog dokümantasyonu
│
├── .env.example                      # Çevre değişkenleri şablonu
├── .env.local                        # Lokal çevre değişkenleri (gitignore)
├── .eslintrc.json                    # ESLint konfigürasyonu
├── .prettierrc.json                  # Prettier konfigürasyonu
├── tailwind.config.js                # Tailwind CSS config
├── postcss.config.js                 # PostCSS config
├── tsconfig.json                     # TypeScript config
├── next.config.js                    # Next.js config
├── package.json                      # Proje bağımlılıkları
└── package-lock.json                 # Dependency lock file
```

---

## 🚀 Hızlı Başlangıç

### ✅ Gereksinimler
- **Node.js:** v18+
- **npm:** v9+
- **Vercel CLI:** `npm i -g vercel@latest`

### 📦 Kurulum & Çalıştırma

```bash
# Proje dizinine gir
cd /Users/bugraoguz/Desktop/WebSitesi

# npm install (✅ Tamamlandı - 467 paket)
npm install

# Vercel linkage (✅ Tamamlandı - bgrogzs-projects/hair-salon)
vercel link

# Lokal çevre değişkenlerini indir
vercel env pull .env.local

# Development sunucusunu başlat (✅ Ready in 3.2s)
npm run dev
```

**Tarayıcıda aç:** http://localhost:3000

### 🛠️ Geliştirme Komutları

```bash
npm run dev          # Development (hot reload)
npm run build        # Production build
npm start            # Production server
npm run lint         # Kod kalitesi kontrol
npm run lint:fix     # Lint hatalarını otomatik düzelt
npm run format       # Prettier ile kod formatla
npm run type-check   # TypeScript kontrolü
```

---

## 🎨 Tasarım Sistemi

### Renk Paleti (Tailwind)
```css
--color-primary: #D4AF37;      /* Altın - Lüks */
--color-secondary: #3D2645;    /* Koyu Mor - Sofistikasyon */
--color-accent: #E8B4C8;       /* Pembe - Kadın yönelimli */
--color-text: #2C2C2C;         /* Koyu Gri */
--color-light: #F5F1E8;        /* Krem */
```

### Tipografi
| Font | Kullanım | Weights |
|------|----------|---------|
| **Playfair Display** | Başlıklar | 400, 700 |
| **Lato** | Metin | 300, 400, 700 |
| **Dancing Script** | Dekoratif | 400, 700 |
| **Plus Jakarta Sans** | UI Elements | 300, 400, 500, 600 |

### Responsive Breakpoints
```
Mobil:    320px - 640px
Tablet:   641px - 1024px
Desktop:  1025px - 1440px
Large:    1441px+
```

---

## 🔍 SEO Stratejisi

### Anahtar Kelime Hedefleri
| Tür | Kelimeler |
|-----|-----------|
| **Ana** | Saç Kaynak, Kaynak Saç, Hair Extension |
| **Uzun Tail** | Kaliteli Saç Kaynak, Saç Kaynak Fiyatları, Saç Kaynak Bakımı |
| **Yerel** | [Şehir] Saç Kaynak, [Şehir] Kuaför Salonu |

### On-Page SEO Checklist
- ✅ H1 başlıkları anahtar kelime içeriyor
- ✅ Meta descriptions (155 karakter)
- ✅ Alt text tüm görsellerde
- ✅ Schema markup (LocalBusiness, BlogPosting)
- ✅ Internal linking stratejisi
- ✅ Sitemap ve robots.txt

### Technical SEO
- ✅ Sayfa hızı: <2 saniye hedef
- ✅ SSL sertifikası (Vercel otomatik)
- ✅ Mobile-first indexing
- ✅ Lazy loading resimler
- ✅ Gzip sıkıştırması

---

## 📊 Blog Sistemi

### 4 Ana Kategori

#### 1. 📚 Saç Kaynak Rehberleri (SEO Ağırlıklı)
- **Hedef:** 2500+ kelime, 10-15 dakika okuma
- **Örnekler:**
  - "Saç Kaynak Nedir? Türleri, Fiyatları ve Faydaları"
  - "Saç Kaynak Nasıl Yapılır? Adım Adım Rehber"
  - "Saç Kaynak Bakımı: 5 Temel İpucu"

#### 2. 🎓 Saç Bakımı & Styling (Eğitim)
- **Hedef:** 1200-1500 kelime, 6-8 dakika okuma
- **Örnekler:**
  - "Saç Kaynağını 3 Ay Boyunca Güzel Tutun"
  - "Saç Kaynak Yıkama Rehberi: Yanlış Yapılan Hatalar"

#### 3. 🌟 Trendler & İlham (Engagement)
- **Hedef:** 800-1000 kelime, 4-5 dakika okuma
- **Örnekler:**
  - "2026 Saç Trendleri: En Popüler Stiller"
  - "Ombre Saç Kaynak: Modern Güzellik"

#### 4. 🎁 Hizmet & Ürün Tanıtımı (Conversion)
- **Hedef:** 800-1200 kelime, 4-6 dakika okuma
- **Örnekler:**
  - "Premium Saç Kaynak ile Kendinize Yatırım Yapın"
  - "Neden Bize Gelmeli? 5 Nedeni"

### Blog İçerik Hedefleri
- **Yazı Sıklığı:** 1 yazı/hafta
- **Veritabanı:** PostgreSQL (DigitalOcean)
- **CDN:** DigitalOcean Spaces (Görseller)
- **Analytics:** Google Analytics 4

---

## ⚙️ Hook Sistemi

```typescript
// src/utils/hooks-registry.ts

// Initialization Hooks
HookRegistry.beforeInit.register(() => {
  loadConfiguration();
  initializeServices();
});

HookRegistry.afterInit.register(() => {
  initialize3DSlider();
  trackPageView();
});

// Blog Hooks
HookRegistry.onBlogPostLoad.register((postData) => {
  loadRelatedPosts(postData.tags);
  updateBlogPostSchema(postData);
  trackBlogPostView(postData.id);
});

HookRegistry.onBlogSearch.register((searchQuery) => {
  const results = filterBlogPosts(searchQuery);
  trackBlogSearch(searchQuery);
});
```

---

## 🌐 Çevre Değişkenleri (.env.local)

```bash
# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development

# Vercel (otomatik)
VERCEL_OIDC_TOKEN=xxxxx

# Google Analytics
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXX

# API & Database
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
DATABASE_URL=postgresql://user:password@localhost:5432/blog_db
NEXT_PUBLIC_BLOG_API=http://localhost:3000/api/blog

# DigitalOcean Spaces (CDN)
NEXT_PUBLIC_CDN_URL=https://cdn.salonnamehere.com
DO_SPACES_KEY=xxxxx
DO_SPACES_SECRET=xxxxx
```

---

## 🚀 Deployment & Hosting

### Vercel (Frontend - Production)
```bash
# Preview deploy
vercel

# Production deploy
vercel --prod

# View logs
vercel logs
```

### DigitalOcean (Backend - Blog API)
```bash
# app.yaml konfigürasyonu
name: hair-salon-website
services:
  - name: blog-api
    github:
      repo: username/hair-salon-website
      branch: main
    build_command: npm run build
    source_dir: dist

databases:
  - name: blog-db
    engine: PG
    version: "13"
```

### Estimated Monthly Costs
| Hizmet | Maliyet |
|--------|---------|
| Vercel App Platform | ~$20/ay |
| DigitalOcean App Platform | ~$12/ay |
| Managed PostgreSQL | ~$15/ay |
| Spaces (CDN) | ~$5/ay |
| **Toplam** | **~$52/ay** |

---

## 📱 Responsive Tasarım Örnekleri

```jsx
// Mobile-first approach
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Mobil: tam genişlik, Tablet: yarı, Desktop: 1/3 */}
</div>

// Renk kullanımı
<div className="bg-primary text-white">
  Altın arka plan
</div>

// Font kullanımı
<h1 className="font-display text-4xl">
  Başlık (Playfair Display)
</h1>
<p className="font-body text-base">
  Metin (Lato)
</p>
```

---

## 🔐 Güvenlik Kontrol Listesi

- [x] HTTPS (Vercel otomatik)
- [x] CSRF protection (Next.js built-in)
- [ ] XSS prevention
- [ ] SQL injection prevention
- [ ] Rate limiting (API endpoints)
- [ ] Input validation (react-hook-form)
- [ ] GDPR compliance
- [ ] Environment variables güvenli

---

## 📝 Geliştirme Kuralları

### ⚠️ ZORUNLU: Her Değişiklikten Sonra Test Et
**Her kod değişikliğinden sonra mutlaka aşağıdaki testi çalıştır:**
```bash
# Dev server'ı yeniden başlat ve HTTP 200 kontrolü yap
pkill -f "next dev" 2>/dev/null; sleep 2
rm -rf .next
npm run dev &
sleep 8
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
# 200 dönmeli. 500 dönüyorsa hatayı düzelt ve tekrar test et.
```
- Değişiklik deploy edilmeden önce localhost'ta çalıştığını doğrula
- Tailwind class'ları tailwind.config.js'te tanımlı olmalı
- Material Design 3 sınıfları KULLANMA (bg-surface-container, text-on-primary vb.) — yerine Tailwind renk ölçeği kullan (bg-neutral-50, text-white vb.)
- `next-seo` App Router'da Server Component'te KULLANMA — yerine `export const metadata: Metadata` kullan
- Remote görseller next.config.js `images.remotePatterns`'a eklenmiş olmalı

### Code Style
- **Formatter:** Prettier
- **Linter:** ESLint + Next.js config
- **TypeScript:** Strict mode

### Component Structure
- Server Components varsayılan
- `'use client'` sadece gerekli yerlerde
- `'use server'` data mutations için

### File Naming
- Components: PascalCase (Header.tsx)
- Utilities: camelCase (seoUtils.ts)
- Types: PascalCase (BlogPost.ts)
- Hooks: camelCase (useBlogPosts.ts)

---

## 📊 Performans Hedefleri

| Metrik | Hedef |
|--------|-------|
| Lighthouse Score | 90+ |
| Mobile PageSpeed | 80+ |
| Page Load Time | <2s |
| Bounce Rate | <40% |
| Core Web Vitals | Green |

---

## ✅ Kontrol Listesi

### Development ✅
- [x] npm install (467 paket + @tailwindcss/forms + @tailwindcss/typography)
- [x] Vercel link (bgrogzs-projects/hair-salon)
- [x] vercel env pull (.env.local)
- [x] npm run dev (Ready in 1.1s)
- [x] Font weight hatası düzeltildi (Lato weight 500 kaldırıldı)
- [x] Tailwind DEFAULT renk değerleri eklendi
- [x] Material Design 3 sınıfları Tailwind'e dönüştürüldü
- [x] NextSeo -> metadata export dönüşümü (App Router uyumu)
- [x] Remote image domain (lh3.googleusercontent.com) eklendi
- [x] layout.tsx NextSeo import kaldırıldı
- [x] HTTP 200 testi geçti (45KB sayfa)
- [x] CLAUDE.md güncellendi + test kuralları eklendi
- [ ] 3D slider bileşeni test et
- [ ] Blog sistemi entegre et

### Production
- [ ] Production build test et
- [ ] Tüm sayfaları SEO optimize et
- [ ] Google Search Console doğrulaması
- [ ] Google Analytics kurulumu
- [ ] DNS yapılandırması
- [ ] CDN konfigürasyonu

### Blog Yayını
- [ ] 12+ yazı hazırlama
- [ ] Blog kategorileri kurma
- [ ] Veritabanı migration'ları
- [ ] İlişkili yazılar sistemi
- [ ] Sosyal paylaşım entegrasyonu

---

## 🔗 Faydalı Kaynaklar

| Konu | Link |
|------|------|
| Next.js Docs | https://nextjs.org/docs |
| React Docs | https://react.dev |
| Tailwind CSS | https://tailwindcss.com |
| Three.js | https://threejs.org |
| TypeScript | https://www.typescriptlang.org |
| Vercel Docs | https://vercel.com/docs |
| DigitalOcean | https://docs.digitalocean.com |

---

## 📞 İletişim & Destek

- **Email:** support@salonnamehere.com
- **WhatsApp:** +90-XXX-XXX-XXXX
- **Website:** https://salonnamehere.com

---

## 📝 Versiyon Geçmişi

- **v1.0.0** (Mart 20, 2026)
  - ✅ Next.js 14 + React 18 setup
  - ✅ Vercel deployment konfigürasyonu
  - ✅ npm install ve dev server çalışıyor
  - ✅ Font weight hatası düzeltildi
  - ✅ CLAUDE.md, QUICKSTART.md, PROJECT_SETUP.md, blog.md, skill.md merge edildi
