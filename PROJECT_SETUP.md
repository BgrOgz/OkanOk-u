# 🚀 Hair Salon Website - Setup Guide

Bu proje **Next.js 14 + React 18 + Tailwind CSS** ile oluşturulmuş bir bayan kuaför tanıtım websitesidir.

## 📋 Proje Yapısı

```
hair-salon-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Global layout
│   │   ├── page.tsx           # Ana sayfa
│   │   ├── globals.css        # Global styles
│   │   └── api/               # API routes
│   │       ├── blog/
│   │       ├── analytics/
│   │       └── contact/
│   │
│   ├── components/            # React components
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── hero/
│   │   │   └── HeroSection.tsx
│   │   ├── gallery/
│   │   │   ├── Slider3D.tsx
│   │   │   └── GalleryGrid.tsx
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogSearch.tsx
│   │   │   └── RelatedPosts.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Form.tsx
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useBlogPosts.ts
│   │   ├── useAnalytics.ts
│   │   ├── use3DSlider.ts
│   │   └── useMediaQuery.ts
│   │
│   ├── utils/                 # Utility functions
│   │   ├── hooks-registry.ts  # Hook'lar (hook.md'den)
│   │   ├── seo-utils.ts
│   │   ├── analytics.ts
│   │   └── validators.ts
│   │
│   ├── types/                 # TypeScript types
│   │   ├── blog.ts
│   │   ├── common.ts
│   │   └── api.ts
│   │
│   └── styles/                # Global styles
│       ├── globals.css
│       ├── animations.css
│       └── 3d-effects.css
│
├── public/                    # Static assets
│   ├── images/
│   ├── blog-images/
│   ├── videos/
│   └── icons/
│
├── docs/                      # Documentation
│   ├── claude.md
│   ├── skill.md
│   ├── hook.md
│   ├── blog.md
│   └── PROJECT_SETUP.md
│
├── .env.local                 # Environment variables (local)
├── .env.production            # Environment variables (production)
├── .eslintrc.json
├── .prettierrc.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── next.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚡ Hızlı Başlangıç

### 1. Kurulum

```bash
# Node.js ve npm yüklü olduğundan emin ol (18.x+)
node --version   # v18.x+
npm --version    # 9.x+

# Proje dizinine gir
cd hair-salon-website

# Dependency'leri yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda açılır: `http://localhost:3000`

### 2. Çevre Değişkenleri

`.env.local` dosyası oluştur:

```env
# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development

# Google Analytics
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXX

# API Endpoints
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
DATABASE_URL=postgresql://user:password@localhost:5432/blog_db

# Blog
NEXT_PUBLIC_BLOG_API=http://localhost:3000/api/blog

# DigitalOcean Spaces
NEXT_PUBLIC_CDN_URL=https://cdn.salonnamehere.com
DO_SPACES_KEY=your-key
DO_SPACES_SECRET=your-secret
```

### 3. Build & Deploy

```bash
# Production build
npm run build

# Production sunucuyu başlat
npm start

# Lint kontrolü
npm run lint

# Format kodu
npm run format

# Type check
npm run type-check
```

---

## 🎨 Stil Sistemi

### Renk Kullanımı

```jsx
// Tailwind color classes
<div className="bg-primary-500 text-secondary-900">
  Altın arka plan, Koyu Mor yazı
</div>

// Renk Paleti (tailwind.config.js)
// primary: Altın (#D4AF37)
// secondary: Koyu Mor (#3D2645)
// accent: Pembe (#E8B4C8)
// neutral: Gri
```

### Font'lar

```jsx
// Display: Playfair Display (başlıklar)
<h1 className="font-display text-4xl">
  Saç Kaynak Hizmetleri
</h1>

// Body: Lato (metin)
<p className="font-body text-base">
  Professional services...
</p>

// Accent: Dancing Script (dekoratif)
<span className="font-accent">Special!</span>
```

### Responsive Tasarım

```jsx
// Mobile-first approach
<div className="w-full md:w-1/2 lg:w-1/3">
  Mobil: tam genişlik
  Tablet: yarı genişlik
  Desktop: 1/3 genişlik
</div>
```

---

## 🪝 Hook'lar (hook.md'den)

### Initialization Hook'ları

```typescript
// src/utils/hooks-registry.ts
import { HookRegistry } from './hooks-registry';

// beforeInit - Uygulama başlamadan önce
HookRegistry.beforeInit.register(() => {
  console.log('Uygulama başlıyor...');
  // Konfigürasyon yükle
});

// afterInit - Uygulama başladıktan sonra
HookRegistry.afterInit.register(() => {
  console.log('Uygulama hazır!');
  // 3D Slider'ı başlat
});
```

### Blog Hook'ları

```typescript
// Blog yazısı yükleniyor
HookRegistry.onBlogPostLoad.register((postData) => {
  loadRelatedPosts(postData.tags);
  updateBlogPostSchema(postData);
  trackBlogPostView(postData.id);
});

// Yazı aranıyor
HookRegistry.onBlogSearch.register((searchQuery) => {
  const results = filterBlogPosts(searchQuery);
  trackBlogSearch(searchQuery);
});
```

---

## 📱 Responsive Breakpoints

```
Mobile:     320px - 640px
Tablet:     641px - 1024px
Desktop:    1025px - 1440px
Large:      1441px+
```

---

## 🔍 SEO Optimizasyon

### Meta Etiketleri

```jsx
// next-seo config
<NextSeo
  title="Saç Kaynak Hizmetleri | Bayan Kuaför"
  description="Kaliteli ve doğal saç kaynak hizmetleri..."
  openGraph={{
    type: 'website',
    url: 'https://salonnamehere.com',
    title: 'Bayan Kuaför',
    description: '...',
    images: [
      {
        url: 'https://...',
        width: 1200,
        height: 630,
      },
    ],
  }}
/>
```

### Schema Markup

```jsx
// Schema otomatik olarak uygulanacak
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schemaData),
  }}
/>
```

---

## 📊 Analytics Entegrasyon

### Google Analytics

```typescript
// utils/analytics.ts
import gtag from './gtag';

export const trackPageView = (page: string) => {
  gtag.pageview({
    page_path: page,
    page_title: document.title,
  });
};

export const trackEvent = (action: string, details: any) => {
  gtag.event(action, details);
};
```

---

## 🐳 Docker Deployment (DigitalOcean)

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

---

## 📚 Referans Dosyalar

- **claude.md**: Proje özeti ve özellikler
- **skill.md**: Teknik spesifikasyon
- **hook.md**: Hook'lar ve event'ler
- **blog.md**: Blog sistemi detayları

---

## 🔗 Faydalı Kaynaklar

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Three.js](https://threejs.org)
- [TypeScript](https://www.typescriptlang.org)

---

**Hazırlama Tarihi:** Mart 20, 2026
**Versiyon:** 1.0.0
**Deployment:** DigitalOcean App Platform
