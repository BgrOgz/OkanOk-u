# 📝 Blog Sistemi - Saç Kaynak Salon Websitesi

## ☁️ DigitalOcean Hosting
Bu blog sistemi **DigitalOcean** üzerinde barındırılan statik ve dinamik içeriği yönetecektir.

**Blog Veri Saklama:**
- JSON dosyaları: DigitalOcean Spaces (CDN)
- Dinamik yazılar: Managed Database (PostgreSQL)
- Görseller: DigitalOcean CDN (Spaces)
- Cache: Redis (opsiyonel)

---

## 🎯 Blog Stratejisi

Blog, websitesinin SEO başarısının ve müşteri engajmanının merkeziydir. Saç kaynak anahtar kelimelerine hedef alan kaliteli içerik oluşturacağız.

---

## 📊 Blog Yapısı

### Blog Ana Sayfa (`blog.html`)
```
Blog Hub
├── En Yeni Yazılar (6 yazı)
├── Trend Yazılar (4 yazı)
├── Yazı Arama Barı
├── Kategori Filtreleri
├── Sosyal Takip Çağrısı
└── Newsletter Signup
```

### Blog Yazı Sayfası (`blog-post.html`)
```
Yazı İçeriği
├── Başlık + Meta (Tarih, Yazar, Okuma Süresi)
├── Yazı Konusu (H2 başlıklar)
├── İlişkili Yazılar (3-4 yazı)
├── CTA: Randevu / WhatsApp
├── Yorum Sistemi
└── Sosyal Paylaşım Butonları
```

---

## 🏷️ Blog Kategorileri

### 1. **Saç Kaynak Rehberleri** (SEO Ağırlıklı)
Ana anahtar kelimeleri hedefleyen uzun form yazılar.

**Yazı Örnekleri:**
- "Saç Kaynak Nedir? Türleri, Fiyatları ve Faydaları"
- "Saç Kaynak Nasıl Yapılır? Adım Adım Rehber"
- "Saç Kaynak Bakımı: 5 Temel İpucu"
- "Doğal Saç Kaynak vs Sentetik Saç: Farklar"
- "Saç Kaynak Fiyatları 2026: Bütçe Rehberi"

**Anahtar Kelimeler:**
- Saç Kaynak
- Kaynak Saç
- Hair Extension
- Saç Uzatma
- Hızlı Saç Uzatma

---

### 2. **Saç Bakımı ve Styling** (Müşteri Eğitimi)
Müşterilerin saç kaynağını uzun ömürlü tutmasına yardımcı içerik.

**Yazı Örnekleri:**
- "Saç Kaynağı 3 Ay Boyunca Güzel Tutun"
- "Saç Kaynağı Yıkama Rehberi: Yanlış Yapılan Hatalar"
- "Saç Kaynağı İçin En İyi Şampuan ve Kremi"
- "Sıcak Şekillendirme Aletleri vs Saç Kaynak"
- "Saç Kaynağı Dökülüyor: Neden ve Çözümler"

**Anahtar Kelimeler:**
- Saç Kaynak Bakımı
- Saç Kaynak Yıkama
- Saç Kaynak Kırılması
- Saç Kaynak Onarım

---

### 3. **Trendler ve İlham** (Engagement)
Popüler stiller ve renklerle ilgili yazılar.

**Yazı Örnekleri:**
- "2026 Saç Trendleri: En Popüler Stiller"
- "Ombre Saç Kaynak: Modern Güzellik"
- "Uzun Saçlar Geri Dönüyor: Stil Rehberi"
- "Saç Rengi Trendleri: 2026 En Popüler Renkler"
- "Kısa Saç Şekillendirme: Şık Görünün"

**Anahtar Kelimeler:**
- Saç Stilleri
- Saç Trendleri
- Popüler Saç Renkleri
- Saç Şekillendirme

---

### 4. **Hizmet ve Ürün Tanıtımı** (Dönüşüm Odaklı)
Salon hizmetlerini ve ürünlerini tanıtma.

**Yazı Örnekleri:**
- "Premium Saç Kaynak ile Kendinize Yatırım Yapın"
- "Salon Ortamımızda Neler Yaşayacaksınız?"
- "Kurucusu Bayan: Saç Kaynak Yolculuğum"
- "Neden Bize Gelmeli? 5 Nedeni"
- "Özel Fırsat: Saç Kaynağında %20 İndirim"

---

## 📝 İçerik Takvimi (Aylık)

```
MART 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Haftası  │ Yazı Konusu          │ Kategori         │ SEO Fokus
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hafta 1  │ Saç Kaynak Nedir     │ Rehber           │ Primer KW
Hafta 2  │ Bakım İpuçları       │ Eğitim           │ Long Tail
Hafta 3  │ 2026 Trendleri       │ Trend            │ Engagement
Hafta 4  │ Ürün Tanıtımı        │ Promosyon        │ Dönüşüm
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🔍 SEO Optimizasyon

### Meta Şablonu (Blog Yazısı)
```html
<title>[Ana KW] - [Uzun Tail KW] | [Salon Adı] Blog</title>
<meta name="description"
      content="[Açıklama - 155 karakter]. Profesyonel tavsiyeler ve rehberler. [CTA]">
<meta name="keywords"
      content="[Ana KW], [Uzun Tail KW], [İlgili Terimler]">
```

**Örnek:**
```html
<title>Saç Kaynak Nasıl Yapılır - Adım Adım Rehber | Bayan Kuaför Blog</title>
<meta name="description"
      content="Saç kaynağının nasıl yapıldığını öğrenin. Adım adım rehber, profesyonel ipuçları ve bakım tavsiyeleri. Bayan Kuaför Blog - Saç Kaynak Uzmanı">
<meta name="keywords"
      content="Saç Kaynak, Kaynak Saç, Hair Extension, Saç Uzatma Nasıl Yapılır">
```

### H1-H3 Yapısı

```markdown
H1: "Saç Kaynak Nasıl Yapılır: Profesyonel Adım Adım Rehber"

H2: "1. Saç Kaynağı Nedir?"
    H3: "Saç Kaynağının Faydaları"
    H3: "Saç Kaynak Türleri"

H2: "2. Saç Kaynak İşlemi"
    H3: "Ön Hazırlık"
    H3: "Uygulama Adımları"
    H3: "Sonrası Bakım"

H2: "3. Saç Kaynak Bakımı"
    H3: "Günlük Bakım"
    H3: "Haftalık Bakım"
    H3: "Yaygın Hatalar"

H2: "SSS: Sıkça Sorulan Sorular"
```

### Internal Linking Strateji
```
"Saç Kaynak Nasıl Yapılır"
    ↓
    ├─→ "Saç Kaynak Bakımı" (ilişkili)
    ├─→ "Saç Kaynak Türleri" (ilişkili)
    ├─→ "Saç Kaynak Fiyatları" (ilişkili)
    └─→ Services: Saç Kaynak Hizmetleri (CTA)

```

---

## 📐 Blog Yazı Şablonu

### Yazı Başı (Meta)
```yaml
---
title: "Saç Kaynak Nasıl Yapılır: Profesyonel Rehber"
description: "Saç kaynağının nasıl yapıldığını öğrenin. Adım adım rehber ve uzman tavsiyeler."
date: 2026-03-20
author: "Bayan Kuaför Ekibi"
category: "Rehber"
tags: ["Saç Kaynak", "Nasıl Yapılır", "Bakım"]
image: "/assets/images/blog/hair-extension-guide.jpg"
alt_text: "Profesyonel saç kaynak uygulama adımları"
read_time: "8 dakika"
seo_keywords: ["Saç Kaynak", "Kaynak Saç", "Hair Extension"]
---
```

### Yazı Yapısı
```markdown
## Giriş (100-150 kelime)
- Konunun önemi
- Okuyucunun kazanacağı değer
- CTA: Devam et

## Bölüm 1: Temel Bilgiler (200-300 kelime)
- H2 başlığı
- Kapsamlı açıklama
- Resimler/diyagramlar

## Bölüm 2: Detaylı Rehber (300-500 kelime)
- Adım adım talimatlar
- İpuçları ve hileleri
- Yaygın hatalar

## Bölüm 3: Bakım & Sonuç (200-300 kelime)
- Uzun süreli bakım
- Özet

## FAQ (150-200 kelime)
3-5 soru-cevap

## CTA: Randevu veya İletişim
Yazının sonunda eylem çağrısı
```

### Yazı Uzunluğu Rehberi
```
Kategori           │ Min Kelime │ Hedef Kelime │ Okuma Süresi
───────────────────┼────────────┼──────────────┼─────────────
SEO Rehberi        │ 1500       │ 2500+        │ 10-15 dk
Eğitim Makale      │ 800        │ 1200-1500    │ 6-8 dk
Trend/İlham        │ 600        │ 800-1000     │ 4-5 dk
Hızlı İpuçları     │ 400        │ 500-700      │ 3 dk
```

---

## 🎨 Yazı İçindeki Öğeler

### Görseller
- **Yazı başında:** Hero görüntü (1200x600px)
- **Bölümler arası:** İlgili görseller (800x600px)
- **Before-After:** 3D slider görselleri
- **Infografik:** İstatistikler ve rehberler

### Video Embedding
```html
<!-- YouTube embed -->
<iframe width="100%" height="400"
        src="https://www.youtube.com/embed/[ID]"
        title="Saç Kaynak Nasıl Yapılır">
</iframe>
```

### Call-to-Action (CTA)
```html
<!-- Randevu CTA -->
<div class="blog-cta">
  <h3>Profesyonel Saç Kaynak Hizmetini Almak İster misiniz?</h3>
  <p>Uzman ekibimizle size uygun en iyi çözümü bulalım.</p>
  <button class="btn-primary">Randevu Al →</button>
</div>
```

---

## 🔗 İlişkili Yazılar Sistemi

### Otomatik Bağlantı (Tag-based)
```javascript
// Aynı tag'lara sahip yazıları göster
const relatedPosts = allPosts.filter(post =>
  post.tags.some(tag => currentPost.tags.includes(tag))
);
```

### Sonuç Bölümü
```html
<section class="related-posts">
  <h3>İlişkili Yazıları Oku</h3>

  <article class="post-card">
    <img src="image.jpg" alt="Saç Kaynak Bakımı">
    <h4>Saç Kaynak Bakımı: 5 Temel İpucu</h4>
    <p>Saç kaynağını uzun süre güzel tutmak için...</p>
    <a href="/blog/hair-extension-care">Devamını Oku →</a>
  </article>

  <!-- 3-4 yazı -->
</section>
```

---

## 📱 Sosyal Paylaşım

### Paylaşım Butonları Yerleşimi
```
1. Yazı başında (Sticky)
2. Yazı sonunda (Prominent)
3. Her bölümden sonra (Subtle)
```

### Sosyal Meta Etiketleri (Open Graph)
```html
<meta property="og:title" content="Yazının Başlığı">
<meta property="og:description" content="Yazının Açıklaması">
<meta property="og:image" content="/assets/images/blog/post-image.jpg">
<meta property="og:url" content="https://salonnamehere.com/blog/post-slug">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Yazının Başlığı">
<meta name="twitter:description" content="Açıklama">
<meta name="twitter:image" content="görsel-url">
```

### Sosyal Paylaşım İstatistikleri
```javascript
// Yazı başına paylaşım sayısı takip
trackSocialShare('facebook', postId);
trackSocialShare('instagram', postId);
trackSocialShare('whatsapp', postId);
```

---

## 🔍 Blog Arama Sistemi

### Arama Barı HTML
```html
<form class="blog-search" id="blog-search-form">
  <input type="text"
         id="search-input"
         placeholder="Yazı ara... (örn: Saç Kaynak, Bakım)"
         aria-label="Blog yazı arama">
  <button type="submit" aria-label="Arama yap">
    <i class="icon-search"></i>
  </button>
</form>

<div id="search-results"></div>
```

### Arama Filtreleri
```javascript
// Anahtar kelimeye göre ara
const searchPosts = (query) => {
  return posts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.description.toLowerCase().includes(query) ||
    post.content.toLowerCase().includes(query) ||
    post.tags.some(tag => tag.toLowerCase().includes(query))
  );
};
```

---

## 📊 Blog Analitiği

### Takip Edilen Metrikler

| Metrik | Hedef | Araç |
|--------|-------|------|
| Yazı Sayısı | 1+ yazı/hafta | Content Calendar |
| Ortalama Okuma Süresi | > 2 dakika | Google Analytics |
| Bounce Rate | < 50% | GA |
| Pages/Session | > 2 | GA |
| Sosyal Paylaşımlar | > 10/yazı | Social Counter |
| Backlinks | +2/ay | Ahrefs |
| Organic Traffic | +20%/ay | GSC |
| Keyword Rankings | Top 10 | Semrush |

### Google Analytics Events
```javascript
// Yazı görüntülenme
gtag('event', 'view_item', {
  items: [{
    item_id: postId,
    item_name: postTitle,
    item_category: 'blog_post',
    item_variant: category
  }]
});

// Sosyal paylaşım
gtag('event', 'share', {
  method: 'facebook',
  content_type: 'blog_post',
  item_id: postId
});

// Okuma tamamlama
gtag('event', 'post_completed', {
  post_id: postId,
  time_spent: readTime
});
```

---

## 📅 Blog İçerik Örnekleri

### Örnek 1: SEO-Ağırlıklı Yazı

**Başlık:** "Saç Kaynak Nedir? Türleri, Fiyatları ve Faydaları"
**URL Slug:** `sac-kaynak-nedir-turleri-fiyatlari`
**Ana Anahtar Kelime:** "Saç Kaynak"
**Uzun Tail KW:** "Saç Kaynak Türleri", "Saç Kaynak Fiyatları"
**Hedef Kelime Sayısı:** 2500+
**Okuma Süresi:** 12 dakika

---

### Örnek 2: Eğitim Yazısı

**Başlık:** "Saç Kaynağı 3 Ay Boyunca Güzel Tutun: Uzman Rehberi"
**URL Slug:** `sac-kaynagi-bakimi-3-ay`
**Ana Anahtar Kelime:** "Saç Kaynak Bakımı"
**Hedef Kelime Sayısı:** 1200-1500
**Okuma Süresi:** 7 dakika

---

### Örnek 3: Trend Yazısı

**Başlık:** "2026 Saç Trendleri: En Popüler Stiller ve Renkler"
**URL Slug:** `2026-sac-trendleri`
**Ana Anahtar Kelime:** "Saç Trendleri"
**Hedef Kelime Sayısı:** 1000
**Okuma Süresi:** 5 dakika

---

## 🛠️ Blog Teknik Yapısı

### Blog Sayfası HTML Yapısı
```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <!-- SEO Meta Etiketleri -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog | Bayan Kuaför Salonu</title>
  <meta name="description" content="...">

  <!-- Schema Markup -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Bayan Kuaför Salonu Blog",
    "description": "...",
    "url": "https://salonnamehere.com/blog"
  }
  </script>
</head>
<body>
  <!-- Navigation -->
  <header class="blog-header">...</header>

  <!-- Blog Hub -->
  <main class="blog-container">
    <!-- Arama ve Filtreleme -->
    <aside class="blog-sidebar">
      <div class="search-box">...</div>
      <nav class="categories">...</nav>
    </aside>

    <!-- Yazılar -->
    <section class="blog-posts">
      <article class="post-card">...</article>
    </section>

    <!-- Sayfalama -->
    <nav class="pagination">...</nav>
  </main>

  <!-- Footer -->
  <footer>...</footer>
</body>
</html>
```

### Blog Yazı Sayfası HTML
```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <!-- SEO Meta Etiketleri -->
  <title>Saç Kaynak Nedir | Bayan Kuaför Blog</title>
  <meta name="description" content="...">

  <!-- Article Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Yazı Başlığı",
    "datePublished": "2026-03-20",
    "dateModified": "2026-03-21",
    "author": {
      "@type": "Person",
      "name": "Yazar Adı"
    },
    "image": "görselbaglantiası",
    "articleBody": "İçerik..."
  }
  </script>
</head>
<body>
  <!-- Yazı İçeriği -->
  <article class="blog-post">
    <header class="post-header">
      <h1>Saç Kaynak Nedir...</h1>
      <div class="post-meta">
        <span class="date">20 Mart 2026</span>
        <span class="author">Bayan Kuaför Ekibi</span>
        <span class="read-time">12 dakika</span>
      </div>
      <img src="hero-image.jpg" alt="..." class="post-hero">
    </header>

    <div class="post-content">
      <!-- İçerik -->
    </div>

    <!-- CTA -->
    <div class="blog-cta">...</div>

    <!-- İlişkili Yazılar -->
    <section class="related-posts">...</section>

    <!-- Yorum Sistemi -->
    <section class="comments">...</section>

    <!-- Sosyal Paylaşım -->
    <div class="social-share">...</div>
  </article>
</body>
</html>
```

---

## 📋 Blog Yayın Kontrol Listesi

Yazı yayınlanmadan önce:

- [ ] H1 başlığı var ve anahtar kelime içeriyor
- [ ] Meta description 155 karakter içinde
- [ ] Minimum 1500+ kelime (SEO yazıları)
- [ ] Hero görseli optimize edilmiş (WebP)
- [ ] İç bağlantılar (minimum 3)
- [ ] Kategori ve etiketler eklendi
- [ ] Sosyal meta etiketleri (OG tags)
- [ ] Schema Markup doğrulandı
- [ ] Yazım hatası kontrol edildi
- [ ] Mobilde test edildi
- [ ] CTA eklendi
- [ ] İlişkili yazılar seçildi
- [ ] Google Search Console'a gönderilecek

---

## 🎯 Blog Başarı Metrikleri (3 Ay)

| Hedef | Başlangıç | 3. Ay | KPI |
|-------|-----------|-------|-----|
| Toplam Yazı | 0 | 12+ | 1 yazı/hafta |
| Aylık Görüntüleme | 0 | 5000+ | - |
| Ortalama Okuma Süresi | 0 | 3+ min | > 2 dakika |
| Sosyal Paylaşımlar | 0 | 500+ | > 40/yazı |
| Organic Traffic | 0 | 30% | Blog'dan gelişme |
| Keyword Rankings | 0 | 50+ | Top 10'da |
| Bounce Rate | - | < 50% | - |

---

---

## ☁️ DigitalOcean Deployment Stratejisi

### Blog Verisi Mimarisi
```
DigitalOcean App Platform
├── Frontend (Static)
│   └── blog.html, blog-post.html
├── Assets (CDN via Spaces)
│   ├── blog-images/
│   ├── videos/
│   └── thumbnails/
└── API (Backend)
    ├── /api/blog/posts
    ├── /api/blog/search
    └── /api/blog/analytics

Managed Database (PostgreSQL)
└── Tables:
    ├── blog_posts
    ├── blog_categories
    ├── blog_comments
    ├── blog_views
    └── blog_shares
```

### Veritabanı Şeması
```sql
-- Blog Yazıları
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  content TEXT,
  excerpt TEXT,
  category_id INT,
  author VARCHAR(100),
  featured_image_url VARCHAR(500),
  views INT DEFAULT 0,
  shares INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  published BOOLEAN DEFAULT FALSE
);

-- Blog Kategorileri
CREATE TABLE blog_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  slug VARCHAR(100) UNIQUE
);

-- İlişkiler
ALTER TABLE blog_posts
ADD FOREIGN KEY (category_id)
REFERENCES blog_categories(id);
```

### API Endpoints
```bash
# Yazıları getir
GET /api/blog/posts
GET /api/blog/posts?category=rehber&limit=10

# Yazı detayı
GET /api/blog/posts/:id

# Arama
GET /api/blog/search?q=sac-kaynak

# İlişkili yazılar
GET /api/blog/posts/:id/related

# Analitik
POST /api/blog/analytics
{
  "post_id": 1,
  "event_type": "view|share",
  "platform": "facebook|instagram|whatsapp"
}
```

### DigitalOcean Spaces Konfigürasyonu
```yaml
# spaces-config.yaml
spaces:
  name: salon-content
  region: fra  # Frankfurt

cdn:
  enabled: true
  ttl: 3600

folders:
  - blog-images/
  - product-images/
  - videos/
  - thumbnails/

cors:
  allowed_origins:
    - https://salonnamehere.com
    - https://www.salonnamehere.com
```

### Deployment İş Akışı
```
GitHub Push
    ↓
GitHub Actions (CI)
    ├─ Build
    ├─ Test
    └─ Lint
    ↓
DigitalOcean App Platform
    ├─ Build Container
    ├─ Run Tests
    └─ Deploy
    ↓
CDN Invalidation
    ├─ Clear Images
    ├─ Clear Styles
    └─ Clear Scripts
    ↓
Health Checks
    ├─ SSL Check
    ├─ Database Check
    └─ API Check
    ↓
Notification (Slack)
```

### Blog Canlı Olma Kontrol Listesi
- [ ] Veritabanı migration'larını çalıştır
- [ ] Blog yazılarını veritabanına import et
- [ ] SEO meta etiketlerini doğrula
- [ ] Google Search Console'a blog URL'lerini gönder
- [ ] Bing Webmaster'a blog sitemap'i gönder
- [ ] Social meta tags'ları test et
- [ ] Mobile responsive'ı kontrol et
- [ ] Page speed'i ölçü (Lighthouse 90+)
- [ ] SSL sertifikasını doğrula
- [ ] Backlink'leri kontrol et
- [ ] Analytics trackingini test et
- [ ] Newsletter signup'ı test et

---

**Blog Yöneticisi:** Bayan Kuaför Ekibi
**Hosting Platform:** DigitalOcean
**Son Güncelleme:** Mart 20, 2026
**Versiyon:** 1.1.0
