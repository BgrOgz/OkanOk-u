# 🪝 Hook.md - Saç Kaynak Salon Websitesi

## Lifecycle Hooks ve Event Listeners

Bu dosya, websitesinin hayat döngüsü boyunca tetiklenen tüm hook'ları ve özel olayları tanımlar.

---

## 🔄 Initialization Hooks

### `beforeInit`
Uygulama başlamadan önce çalışan hook.

```javascript
// config.js'te çalışır
Hook.beforeInit.register(() => {
  console.log('Uygulama başlıyor...');
  // Konfigürasyon dosyalarını yükle
  // Ortam değişkenlerini kontrol et
  // Gerekli bağımlılıkları hazırla
});
```

**Kullanım Alanları:**
- Ortam değişkenlerini yükle
- API endpoints'i konfigüre et
- LocalStorage'dan verileri al
- Analytics başlat

---

### `afterInit`
Uygulama tamamen başladıktan sonra.

```javascript
// app.js'te çalışır
Hook.afterInit.register(() => {
  console.log('Uygulama hazır!');
  // DOM manipülasyonları başla
  // Event listeners ekle
  // Animasyonları başlat
  initializeSlider3D();
  setupEventListeners();
});
```

**Kullanım Alanları:**
- 3D Slider'ı initialize et
- Event listeners ekle
- Interaktif öğeleri hazırla
- Analytics takip kodunu yükle

---

## 📄 Page Lifecycle Hooks

### `beforePageLoad`
Sayfa yüklemeden önce.

```javascript
// navigation.js
Hook.beforePageLoad.register((pageName) => {
  console.log(`${pageName} yükleniyor...`);

  // SEO meta etiketlerini hazırla
  updateMetaTags(pageName);

  // Loading spinner göster
  showLoadingSpinner();
});
```

---

### `afterPageLoad`
Sayfa tamamen yüklendikten sonra.

```javascript
// navigation.js
Hook.afterPageLoad.register((pageName) => {
  console.log(`${pageName} yüklendi`);

  // Sayfa-spesifik kodları çalıştır
  if (pageName === 'gallery') {
    initializeGallery3D();
  }

  // Smooth scroll'u aktif et
  setupSmoothScroll();

  // Loading spinner'ı kapat
  hideLoadingSpinner();
});
```

---

### `beforePageUnload`
Sayfa değiştirilmeden önce.

```javascript
// navigation.js
Hook.beforePageUnload.register((fromPage, toPage) => {
  console.log(`${fromPage} → ${toPage} geçiş başlıyor`);

  // Animasyonları temizle
  cleanupAnimations();

  // Event listeners'ları kaldır
  removeEventListeners();

  // Geçiş animasyonu başlat
  startTransitionAnimation();
});
```

---

## 🎬 Animation Hooks

### `beforeAnimationStart`
Animasyon başlamadan önce.

```javascript
// 3d-effects.js
Hook.beforeAnimationStart.register((animationType) => {
  console.log(`${animationType} animasyonu başlıyor`);

  // GPU acceleration etkinleştir
  enableGPUAcceleration();

  // Performance optimizasyonları uygula
  optimizePerformance();
});
```

---

### `afterAnimationEnd`
Animasyon bittikten sonra.

```javascript
// 3d-effects.js
Hook.afterAnimationEnd.register((animationType) => {
  console.log(`${animationType} animasyonu tamamlandı`);

  // Temizlik işlemleri
  cleanupAnimationResources();

  // Callback fonksiyonlarını çalıştır
  triggerNextEvent();
});
```

---

## 🎨 Slider Hooks

### `onSliderInit`
3D Slider başlayınca.

```javascript
// slider-3d.js
Hook.onSliderInit.register(() => {
  console.log('3D Slider başlatıldı');

  // Görselleri yükle
  loadImages();

  // Touch events ekle
  setupTouchEvents();

  // Mouse wheel listener'ı ekle
  setupMouseWheelListener();
});
```

---

### `onSliderChange`
Slider öğesi değişince.

```javascript
// slider-3d.js
Hook.onSliderChange.register((fromIndex, toIndex) => {
  console.log(`Slider: ${fromIndex} → ${toIndex}`);

  // SEO açısından görüntülenen ürünü güncelle
  updateProductInfo(toIndex);

  // Analytics etkinliği gönder
  trackSliderEvent(toIndex);

  // Alt metni güncelle
  updateImageAlt(toIndex);

  // Lazy load sonraki görüntüleri
  preloadNextImages(toIndex);
});
```

---

### `onSliderNext` / `onSliderPrev`
Slider ileri/geri hareket ettiğinde.

```javascript
// slider-3d.js
Hook.onSliderNext.register((currentIndex) => {
  console.log(`İleri: ${currentIndex}`);
  // Custom işlemler
});

Hook.onSliderPrev.register((currentIndex) => {
  console.log(`Geri: ${currentIndex}`);
  // Custom işlemler
});
```

---

## 📝 Form Hooks

### `beforeFormSubmit`
Form gönderilmeden önce.

```javascript
// form-handler.js
Hook.beforeFormSubmit.register((formData) => {
  console.log('Form doğrulanıyor...', formData);

  // Giriş doğrulaması
  if (!validateFormData(formData)) {
    return false; // Gönderimi iptal et
  }

  // SPAM kontrolü
  if (isSpam(formData)) {
    return false;
  }

  return true; // Devam et
});
```

---

### `afterFormSubmit`
Form gönderildikten sonra.

```javascript
// form-handler.js
Hook.afterFormSubmit.register((response, formData) => {
  console.log('Form başarıyla gönderildi', response);

  // Başarı mesajını göster
  showSuccessMessage('Mesajınız alındı. Kısa sürede yanıt vereceğiz.');

  // Analytics etkinliği
  trackFormSubmission(formData);

  // Formu sıfırla
  resetForm();

  // E-posta bildirimi gönder (isteğe bağlı)
  sendConfirmationEmail(formData);

  // Yönlendirme (isteğe bağlı)
  setTimeout(() => {
    redirectToThankYou();
  }, 2000);
});
```

---

### `onFormError`
Form gönderirken hata oluşursa.

```javascript
// form-handler.js
Hook.onFormError.register((error, formData) => {
  console.error('Form hatası:', error);

  // Hata mesajını göster
  showErrorMessage('Bir hata oluştu. Lütfen tekrar deneyin.');

  // Hata logu gönder
  logErrorToServer(error);

  // Retry düğmesini göster
  showRetryButton();
});
```

---

## 🔍 SEO Hooks

### `beforeSeoUpdate`
SEO verileri güncellenmeden önce.

```javascript
// meta-manager.js
Hook.beforeSeoUpdate.register((pageConfig) => {
  console.log('SEO güncellemesi başlıyor:', pageConfig);

  // Geçerli meta etiketleri temizle
  clearMetaTags();

  // Canonical URL ayarla
  setCanonicalUrl(pageConfig.url);
});
```

---

### `afterSeoUpdate`
SEO verileri güncellendikten sonra.

```javascript
// meta-manager.js
Hook.afterSeoUpdate.register((pageConfig) => {
  console.log('SEO güncellemesi tamamlandı');

  // Schema markup'ı güncelle
  updateSchemaMarkup(pageConfig);

  // Open Graph meta'larını güncelle
  updateOpenGraphTags(pageConfig);

  // Twitter Card'ı güncelle
  updateTwitterCard(pageConfig);
});
```

---

## 📝 Blog Hooks ⭐ YENİ

### `onBlogPostLoad`
Blog yazısı yüklendiğinde.

```javascript
// blog-manager.js
Hook.onBlogPostLoad.register((postData) => {
  console.log(`Blog yazısı yüklendi: ${postData.title}`);

  // İlişkili yazıları yükle
  loadRelatedPosts(postData.tags);

  // İlişkili yazı sistemini başlat
  initializeRelatedPostsCarousel();

  // Sosyal paylaşım düğmelerini ayarla
  setupSocialShareButtons(postData);

  // Schema Markup'ı güncelle
  updateBlogPostSchema(postData);

  // Analytics etkinliği gönder
  trackBlogPostView(postData.id, postData.category);
});
```

---

### `onBlogSearch`
Blog yazı araması yapıldığında.

```javascript
// blog-search.js
Hook.onBlogSearch.register((searchQuery) => {
  console.log(`Blog araması: "${searchQuery}"`);

  // Yazıları filtrele
  const results = filterBlogPosts(searchQuery);

  // Sonuçları göster
  displaySearchResults(results);

  // Analytics etkinliği
  trackBlogSearch(searchQuery, results.length);
});
```

---

### `onBlogFilter`
Blog kategorisi/etiketi filtre edildiğinde.

```javascript
// blog-manager.js
Hook.onBlogFilter.register((filterType, filterValue) => {
  console.log(`Blog filtresi: ${filterType} = ${filterValue}`);

  // Yazıları filtrele
  const filtered = filterPostsByCategory(filterType, filterValue);

  // Sayfayı smooth scroll yap
  smoothScrollToResults();

  // Analytics
  trackBlogFilter(filterType, filterValue);
});
```

---

### `onBlogSocialShare`
Yazı sosyal ağlarda paylaşıldığında.

```javascript
// blog-manager.js
Hook.onBlogSocialShare.register((platform, postId) => {
  console.log(`${platform}'da paylaşıldı: ${postId}`);

  // Paylaşım sayısını artır
  incrementShareCount(postId, platform);

  // Analytics etkinliği
  trackSocialShare(platform, postId);

  // Veritabanında kayıt
  logSocialAction(postId, platform);
});
```

---

### `beforeBlogPostRender`
Blog yazısı render edilmeden önce.

```javascript
// blog-manager.js
Hook.beforeBlogPostRender.register((postData) => {
  // Meta etiketlerini hazırla
  updatePageMeta(postData);

  // Görüntüleme sayısını artır
  incrementViewCount(postData.id);

  // Okuma süresi tahmin et
  postData.estimatedReadTime = calculateReadTime(postData.content);
});
```

---

### `afterBlogPostRender`
Blog yazısı render edildikten sonra.

```javascript
// blog-manager.js
Hook.afterBlogPostRender.register((postData, htmlElement) => {
  // Kod blokları vurgula
  highlightCodeBlocks(htmlElement);

  // Başlıklar için permalink ekle
  addHeadingPermalinks(htmlElement);

  // Tablo içeriklerini responsive yap
  makeTablesResponsive(htmlElement);

  // Yazının görselleri lazy load yap
  setupLazyLoadingForImages(htmlElement);
});
```

---

## 📊 Analytics Hooks

### `onPageView`
Sayfa görüntülendiğinde.

```javascript
// analytics.js
Hook.onPageView.register((pageInfo) => {
  // Google Analytics'e gönder
  gtag('event', 'page_view', {
    page_title: pageInfo.title,
    page_path: pageInfo.path,
    page_location: pageInfo.url
  });
});
```

---

### `onUserAction`
Kullanıcı etkileşimi gerçekleştiğinde.

```javascript
// analytics.js
Hook.onUserAction.register((action, details) => {
  // Google Analytics'e gönder
  gtag('event', action, {
    event_category: details.category,
    event_label: details.label,
    value: details.value
  });

  // Özel veritabanına kaydet (isteğe bağlı)
  saveUserAction(action, details);
});
```

**Action Türleri:**
- `click_cta` - CTA butonuna tıkla
- `view_gallery` - Galeriye bak
- `open_whatsapp` - WhatsApp açılır
- `call_phone` - Telefon çağrısı
- `scroll_depth` - Sayfa kaydırması
- `time_on_page` - Zaman geçirme

---

### `onConversion`
Dönüşüm gerçekleştiğinde.

```javascript
// analytics.js
Hook.onConversion.register((conversionType, value) => {
  console.log(`Dönüşüm: ${conversionType} = ${value}`);

  // Google Analytics goal
  gtag('event', 'conversion', {
    conversion_type: conversionType,
    conversion_value: value
  });

  // Facebook Pixel
  fbq('track', 'Lead', {
    value: value,
    currency: 'TRY'
  });
});
```

**Dönüşüm Türleri:**
- `form_submit` - Form gönderimi
- `phone_call` - Telefon çağrısı
- `whatsapp_click` - WhatsApp mesajı
- `randevu_olustur` - Randevu oluşturma

---

## 🖼️ Image Optimization Hooks

### `beforeImageLoad`
Görüntü yüklenmeden önce.

```javascript
// lazy-loading.js
Hook.beforeImageLoad.register((imageUrl) => {
  // Placeholder göster
  showPlaceholder(imageUrl);

  // Görüntü türünü kontrol et
  const optimizedUrl = optimizeImageUrl(imageUrl);

  return optimizedUrl;
});
```

---

### `afterImageLoad`
Görüntü yüklendikten sonra.

```javascript
// lazy-loading.js
Hook.afterImageLoad.register((imageUrl, element) => {
  // Fade-in animasyonu
  fadeInImage(element);

  // Alt metni ayarla
  element.alt = getImageAlt(imageUrl);

  // Loading durumunu güncelleştir
  updateLoadingProgress();
});
```

---

## 🔐 Security Hooks

### `beforeDataSend`
Veri sunucuya gönderilmeden önce.

```javascript
// security.js
Hook.beforeDataSend.register((data) => {
  // CSRF token ekle
  data.csrf_token = getCsrfToken();

  // Veriyi şifrele (isteğe bağlı)
  data = encryptSensitiveData(data);

  return data;
});
```

---

### `beforeDataReceive`
Veri sunucudan alındıktan sonra.

```javascript
// security.js
Hook.beforeDataReceive.register((data) => {
  // Veriyi doğrula
  if (!validateData(data)) {
    throw new Error('Geçersiz veri');
  }

  // Veriyi temizle (XSS koruması)
  data = sanitizeData(data);

  return data;
});
```

---

## 🌐 Network Hooks

### `onOnline`
İnternet bağlantısı geldiğinde.

```javascript
// network.js
Hook.onOnline.register(() => {
  console.log('İnternet bağlantısı geldi');

  // Offline form verilerini gönder
  syncOfflineData();

  // Sayfayı yenile (isteğe bağlı)
  // location.reload();
});
```

---

### `onOffline`
İnternet bağlantısı gidince.

```javascript
// network.js
Hook.onOffline.register(() => {
  console.log('İnternet bağlantısı gitti');

  // Bildirim göster
  showNotification('İnternet bağlantısı kayboldu. Veriler kaydedildi.');

  // Form verilerini LocalStorage'da sakla
  cacheFormData();

  // Bazı özellikleri devre dışı bırak
  disableNetworkDependentFeatures();
});
```

---

## 📱 Device Hooks

### `onOrientationChange`
Cihaz yönü değişince.

```javascript
// responsive.js
Hook.onOrientationChange.register((orientation) => {
  console.log(`Yönelim: ${orientation}`);

  // Layout'u yeniden hesapla
  recalculateLayout();

  // Slider'ı yeniden boyutlandır
  resizeSlider();

  // Animasyonları ayarla
  adjustAnimationsForOrientation(orientation);
});
```

---

## 🎯 Complete Hook Registry Example

```javascript
// hooks-registry.js - Tüm hook'ları bir yerde tanımlayın

const HookRegistry = {
  // Initialization
  beforeInit: new Hook(),
  afterInit: new Hook(),

  // Page Lifecycle
  beforePageLoad: new Hook(),
  afterPageLoad: new Hook(),
  beforePageUnload: new Hook(),

  // Animation
  beforeAnimationStart: new Hook(),
  afterAnimationEnd: new Hook(),

  // Slider
  onSliderInit: new Hook(),
  onSliderChange: new Hook(),
  onSliderNext: new Hook(),
  onSliderPrev: new Hook(),

  // Form
  beforeFormSubmit: new Hook(),
  afterFormSubmit: new Hook(),
  onFormError: new Hook(),

  // SEO
  beforeSeoUpdate: new Hook(),
  afterSeoUpdate: new Hook(),

  // Analytics
  onPageView: new Hook(),
  onUserAction: new Hook(),
  onConversion: new Hook(),

  // Images
  beforeImageLoad: new Hook(),
  afterImageLoad: new Hook(),

  // Security
  beforeDataSend: new Hook(),
  beforeDataReceive: new Hook(),

  // Network
  onOnline: new Hook(),
  onOffline: new Hook(),

  // Device
  onOrientationChange: new Hook()
};

export default HookRegistry;
```

---

## 🚀 Hook Kullanım En İyi Uygulamaları

✅ **YAP:**
- Hook'ları düşük seviyede tutun (tek sorumluluk)
- Hata yönetimini implement et
- Hook'ları async olabilir yap
- Hook'ları kayıt sırasında doğrula

❌ **YAPMA:**
- Hook'larda ağır işlemler yapma
- Sonsuz döngü oluşturma
- Hatayı sustur - logla
- Çok sayıda bağımlılık ekle

---

## 📝 Hook Debugging

```javascript
// debug-mode'u etkinleştir
const DEBUG = true;

if (DEBUG) {
  Hook.beforeInit.register(() => {
    console.log('🪝 [HOOK] beforeInit tetiklendi');
  });

  // Tüm hook'ları loglayabilirsin
}
```

---

## ☁️ Deployment Hooks (DigitalOcean) ⭐ YENİ

### `beforeBuild`
Build başlamadan önce.

```javascript
// build-config.js
Hook.beforeBuild.register(() => {
  console.log('Build başlıyor...');

  // Environment doğrulaması
  validateEnvironmentVariables();

  // Dependency kontrolü
  checkDependencies();

  // Cache temizleme
  clearBuildCache();
});
```

---

### `afterBuild`
Build tamamlandıktan sonra.

```javascript
// build-config.js
Hook.afterBuild.register((buildOutput) => {
  console.log('Build tamamlandı');

  // Versiyon günlüğü
  logBuildVersion(buildOutput.version);

  // DigitalOcean CDN'e yükle
  uploadToCDN(buildOutput.dist);

  // Build artifacts arşivle
  archiveBuildArtifacts();
});
```

---

### `beforeDeploy`
Deployment'a gitmeden önce.

```javascript
// deploy-config.js
Hook.beforeDeploy.register(() => {
  console.log('Deployment hazırlanıyor...');

  // Health check
  runHealthChecks();

  // Veritabanı backupı
  createDatabaseBackup();

  // SSL sertifikası doğrula
  validateSSLCertificate();
});
```

---

### `afterDeploy`
Deployment tamamlandıktan sonra.

```javascript
// deploy-config.js
Hook.afterDeploy.register((deploymentInfo) => {
  console.log('Deployment tamamlandı', deploymentInfo);

  // Smoke test çalıştır
  runSmokeTests();

  // Performance metriklerini kontrol et
  checkPerformanceMetrics();

  // Slack'a bildirim gönder
  notifyDeployment(deploymentInfo);

  // Sentry'ye version tag'ı gönder
  tagSentryRelease(deploymentInfo.version);
});
```

---

### `onDeploymentError`
Deployment hatası oluşursa.

```javascript
// deploy-config.js
Hook.onDeploymentError.register((error) => {
  console.error('Deployment hatası:', error);

  // Error logu
  logDeploymentError(error);

  // Önceki versiyona geri dön
  rollbackToPreviousVersion();

  // Ekibi bilgilendir
  notifyTeamOfError(error);

  // Incident oluştur
  createIncidentTicket(error);
});
```

---

### `onCDNInvalidation`
CDN cache geçersiz kılındığında.

```javascript
// cdn-config.js
Hook.onCDNInvalidation.register((paths) => {
  console.log('CDN cache geçersiz kılındı:', paths);

  // Invalidation logu
  logCDNInvalidation(paths);

  // Performance izleme
  monitorCDNPerformance();

  // Purge kontrolü
  verifyCDNPurge(paths);
});
```

---

## 📊 Hook Registry (Tam Liste)

```javascript
// hooks-registry-complete.js

const HookRegistry = {
  // Initialization
  beforeInit: new Hook(),
  afterInit: new Hook(),

  // Page Lifecycle
  beforePageLoad: new Hook(),
  afterPageLoad: new Hook(),
  beforePageUnload: new Hook(),

  // Animation
  beforeAnimationStart: new Hook(),
  afterAnimationEnd: new Hook(),

  // Slider
  onSliderInit: new Hook(),
  onSliderChange: new Hook(),
  onSliderNext: new Hook(),
  onSliderPrev: new Hook(),

  // Blog ⭐
  onBlogPostLoad: new Hook(),
  onBlogSearch: new Hook(),
  onBlogFilter: new Hook(),
  onBlogSocialShare: new Hook(),
  beforeBlogPostRender: new Hook(),
  afterBlogPostRender: new Hook(),

  // Form
  beforeFormSubmit: new Hook(),
  afterFormSubmit: new Hook(),
  onFormError: new Hook(),

  // SEO
  beforeSeoUpdate: new Hook(),
  afterSeoUpdate: new Hook(),

  // Analytics
  onPageView: new Hook(),
  onUserAction: new Hook(),
  onConversion: new Hook(),

  // Images
  beforeImageLoad: new Hook(),
  afterImageLoad: new Hook(),

  // Security
  beforeDataSend: new Hook(),
  beforeDataReceive: new Hook(),

  // Network
  onOnline: new Hook(),
  onOffline: new Hook(),

  // Device
  onOrientationChange: new Hook(),

  // Deployment ⭐
  beforeBuild: new Hook(),
  afterBuild: new Hook(),
  beforeDeploy: new Hook(),
  afterDeploy: new Hook(),
  onDeploymentError: new Hook(),
  onCDNInvalidation: new Hook()
};

export default HookRegistry;
```

---

**Yazarı:** Claude AI
**Son Güncelleme:** Mart 20, 2026
**Deployment Platform:** DigitalOcean
**Versiyon:** 1.1.0
