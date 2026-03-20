---
name: "Saç Kaynak Salon Websitesi Oluşturucu"
description: "3D interaktif ve SEO-optimized bayan kuaför/salon tanıtım websitesi oluşturmak için kapsamlı skill paketi. Saç kaynak hizmetlerini öne çıkaran modern tasarım ve teknik SEO özellikleri içerir."
version: "1.0.0"
tags:
  - websitesi
  - 3d-slider
  - seo-optimization
  - kuafor-salon
  - sac-kaynak
  - hair-extension
  - responsive-design
  - e-commerce
author: "Claude AI"
license: "MIT"
---

# 🎨 Saç Kaynak Salon Websitesi - Skill Paketi

## 📌 Genel Bilgi

Bu skill, **bayan kuaför ve salon işletmeleri** için profesyonel, modern ve SEO dostu bir tanıtım websitesi oluşturmayı sağlar. Özellikle **saç kaynak (hair extension)** hizmetlerini pazarlamaya yönelik olarak tasarlanmıştır.

---

## 🎯 Temel Özellikler

### ✨ Teknik Özellikler
1. **3D Slider Galerisi**
   - Three.js ile 3D dönen görseller
   - Touch/Mouse desteği
   - Auto-play animasyonları
   - Before-After karşılaştırma

2. **SEO Optimizasyon**
   - Strukturlı veri (Schema.org)
   - Meta tag yönetimi
   - Sitemap ve robots.txt
   - Mobil-first indexing
   - Hızlı sayfa yükleme (Lazy loading)

3. **Responsive Tasarım**
   - Mobile: 320px+
   - Tablet: 768px+
   - Desktop: 1024px+
   - Flexible images

4. **Performans**
   - Lighthouse: 90+ hedef
   - PageSpeed: 80+
   - Minimal JavaScript
   - CDN desteği

---

## 📂 Bileşenler

### Sayfalar
```
├── index.html         → Ana Sayfa (Markalama + CTA)
├── services.html      → Saç Kaynak Hizmetleri Detayı
├── products.html      → Ürün Kataloğu
├── gallery.html       → 3D Before-After Galerisi
├── blog.html          → Blog Hub (Yazılar + Arama)
├── blog-post.html     → Blog Yazı Şablonu
├── testimonials.html  → Müşteri Yorumları
├── faq.html          → Sıkça Sorulan Sorular
└── contact.html       → İletişim Formu
```

### CSS Modülleri
```
├── base/
│   ├── reset.css
│   ├── typography.css
│   └── variables.css
├── components/
│   ├── navbar.css
│   ├── buttons.css
│   ├── cards.css
│   └── forms.css
├── layout/
│   ├── grid.css
│   ├── flexbox.css
│   └── spacing.css
├── utilities/
│   ├── animations.css
│   ├── 3d-effects.css
│   └── responsive.css
└── pages/
    ├── home.css
    ├── services.css
    └── gallery.css
```

### JavaScript Modülleri
```
├── core/
│   ├── app.js              → Ana uygulama
│   └── config.js           → Konfigürasyon
├── features/
│   ├── slider-3d.js        → 3D Slider mantığı
│   ├── navigation.js       → Menü yönetimi
│   ├── lazy-loading.js     → Görsel yükleme
│   ├── blog-search.js      → Blog arama ve filtreleme
│   └── form-handler.js     → Form gönderimi
├── blog/
│   ├── blog-manager.js     → Blog yazı yönetimi
│   ├── related-posts.js    → İlişkili yazılar
│   └── blog-analytics.js   → Blog takibi
├── seo/
│   ├── schema-markup.js    → Yapılandırılmış veri
│   ├── meta-manager.js     → Meta etiketleri
│   └── analytics.js        → Takip kodu
└── utils/
    ├── helpers.js
    ├── validators.js
    └── dom-utils.js
```

---

## 🔍 SEO Yapılandırması

### Anahtar Kelime Stratejisi
```json
{
  "primary_keywords": [
    "Saç Kaynak",
    "Kaynak Saç",
    "Hair Extension"
  ],
  "long_tail_keywords": [
    "Kaliteli Saç Kaynak Satışı",
    "Doğal Saç Kaynak Fiyatları",
    "Saç Kaynak Nasıl Yapılır",
    "Saç Kaynak Bakımı"
  ],
  "local_keywords": [
    "{city} Saç Kaynak",
    "{city} Kuaför Salonu",
    "En İyi Saç Kaynak {city}"
  ]
}
```

### Meta Şablonları
```html
<!-- Ana Sayfa -->
<title>Premium Saç Kaynak ve Kuaför Hizmetleri | [Salon Adı]</title>
<meta name="description" content="Doğal ve kaliteli saç kaynak hizmetleri. Profesyonel kuaför kadromuzla en iyi sonuçlar. Randevu için bize ulaşın.">

<!-- Saç Kaynak Sayfası -->
<title>Saç Kaynak Hizmetleri - Before & After Galerisi | [Salon Adı]</title>
<meta name="description" content="Saç kaynağınız için en uygun türü seçin. Kaliteli materyaller, uzun süreli dayanıklılık, doğal görünüm.">
```

### Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Salon Adı]",
  "image": "url-to-image",
  "description": "Profesyonel saç kaynak ve kuaför hizmetleri",
  "telephone": "+90-...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "...",
    "postalCode": "...",
    "addressCountry": "TR"
  },
  "url": "https://...",
  "priceRange": "$$$",
  "ratingValue": "4.8",
  "reviewCount": "120"
}
```

---

## 🎨 Tasarım Sistemi

### Renk Paleti
```css
:root {
  --color-primary: #D4AF37;      /* Altın - Lüks */
  --color-secondary: #3D2645;    /* Koyu Mor - Sofistikasyon */
  --color-accent: #E8B4C8;       /* Pembe - Kadın Yönelimli */
  --color-text: #2C2C2C;         /* Koyu Gri */
  --color-light: #F5F1E8;        /* Krem */
  --color-white: #FFFFFF;
  --color-error: #E74C3C;
  --color-success: #27AE60;
}
```

### Tipografi
```css
/* Display/Headings */
font-family: 'Playfair Display', serif;
font-weight: 700;

/* Body/Paragraphs */
font-family: 'Lato', sans-serif;
font-weight: 400;

/* Accents */
font-family: 'Dancing Script', cursive;
font-weight: 400;
```

### Spacing System
```
Base Unit: 8px
Scales: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
```

---

## 📱 Responsive Davranış

### Breakpoints
```css
$mobile: 320px;
$tablet: 768px;
$desktop: 1024px;
$large: 1440px;
```

### Mobile-First Strateji
- Önce mobil tasarım
- Kademeli iyileştirme
- Touch-friendly arayüz
- Minimal data kullanımı

---

## 🚀 Performance Checklist

- [ ] Görselleri optimize et (WebP formatı)
- [ ] CSS/JS minify et ve bundle'la
- [ ] Gzip sıkıştırması aktif et
- [ ] Browser caching konfigürasyonu
- [ ] CDN kullan
- [ ] Lazy load görselleri
- [ ] Code splitting uygula
- [ ] Lighthouse 90+ hedefle

---

## 🔗 Entegrasyonlar

### Harici Hizmetler
```
✓ Google Analytics 4 (Takip)
✓ Google Search Console (SEO Monitoring)
✓ Google My Business (Yerel Listeleme)
✓ Facebook Pixel (Remarketing)
✓ WhatsApp Business API
✓ Calendly (Randevu Sistemi)
```

### Formlar ve Gönderim
```
✓ İletişim Formu → Email
✓ Randevu Formu → Calendar + Email
✓ Haber Bülteni → Email Service
✓ Feedback Formu → Database
```

---

## 📊 KPI'lar

| Metrik | Hedef | Ölçüm |
|--------|-------|-------|
| Page Load Time | < 2s | Google PageSpeed |
| Bounce Rate | < 40% | Google Analytics |
| Conversion Rate | > 3% | GA Events |
| Mobile Score | > 85 | Lighthouse |
| Organic Traffic | +50% 3 ay | GSC |
| Keyword Rankings | Top 10 | Semrush |

---

## 🛠️ Teknoloji Stack

### Frontend
- HTML5
- CSS3 + SASS/SCSS
- Vanilla JavaScript (ES6+)
- Three.js (3D)
- GSAP (Animasyonlar)

### Backend (İsteğe Bağlı)
- Node.js / Express
- Python / Django
- Veya Static Site (GitHub Pages)

### Araçlar
- Git (Versiyon Kontrolü)
- Webpack (Bundler)
- Prettier (Kod Formatlama)
- ESLint (Lint)

### Deployment
- Netlify / Vercel
- GitHub Pages
- Traditional Hosting

---

## 📝 Kullanım Talimatları

### 1. Projeyi Başlat
```bash
git clone <repository-url>
cd hair-salon-website
npm install
```

### 2. Geliştirme Sunucusunu Çalıştır
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

### 4. Deploy Et
```bash
npm run deploy
```

---

## 🔐 Güvenlik

- [ ] HTTPS zorunlu
- [ ] CSRF protection
- [ ] XSS prevention
- [ ] SQL injection prevention
- [ ] Rate limiting
- [ ] Input validation
- [ ] GDPR compliance

---

## ☁️ DigitalOcean Deployment Konfigürasyonu

### App Platform Kurulumu
```yaml
# app.yaml - DigitalOcean konfigürasyonu
name: hair-salon-website
services:
- name: web
  github:
    repo: your-username/hair-salon-website
    branch: main
  build_command: npm run build
  source_dir: dist
  envs:
  - key: NODE_ENV
    value: production
  - key: DATABASE_URL
    scope: RUN_AND_BUILD_TIME
    value: ${db.connection_string}
  http_port: 8080

databases:
- name: salon-db
  engine: PG
  version: "13"

---

### Environment Variables
```
ANALYTICS_ID=G-xxxxxx
DOMAIN=salonnamehere.com
API_KEY=xxxxx
BLOG_API_ENDPOINT=https://api.salonnamehere.com
CDN_URL=https://cdn.salonnamehere.com
```

### Deployment Commands
```bash
# Push to DigitalOcean
doctl apps create --spec app.yaml

# Update app
doctl apps update APP_ID --spec app.yaml

# View logs
doctl apps logs APP_ID --follow
```

---

## 📚 Kaynaklar

- [Three.js Docs](https://threejs.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs)
- [Web.dev Performance](https://web.dev/performance/)
- [Schema.org](https://schema.org/)
- [DigitalOcean Docs](https://docs.digitalocean.com/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/)

---

## 📞 Destek

Herhangi bir soru veya sorun için:
- 📧 Email: support@salonnamehere.com
- 💬 WhatsApp: +90-XXX-XXX-XXXX
- 🌐 Website: https://salonnamehere.com

---

**Son Güncelleme:** Mart 20, 2026
**Versiyon:** 1.0.0
**Durum:** ✅ Aktif
