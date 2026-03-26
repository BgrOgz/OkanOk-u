import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Okan Okcu Hair Repair Studio',
  description:
    'Saç restorasyonu, lüks kaynak teknolojileri ve modern stil trendlerine dair derinlemesine içerikler.',
};

// --- Types ---
interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  highlights: string[];
  ctaText: string;
  ctaLink: string;
  badge?: string;
}

// --- Mock Data ---
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Saç Kaynak Bakımı:',
    subtitle: 'Sırlar ve Gerçekler',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1200',
    badge: 'UZMAN REHBERİ',
    highlights: [
      'Yıkama esnasında kullanılan pH dengeli özel şampuanların önemi ve uygulama teknikleri.',
      'Gece bakımı rutinleri: İpek yastık kılıfı ve koruyucu örgü yöntemlerinin saç ömrüne etkisi.',
      'Isıl işlem sınırlamaları ve keratin bağlarını koruyan profesyonel fırça seçimleri.',
    ],
    ctaText: 'Devamını Oku',
    ctaLink: '/blog/sac-kaynak-bakimi',
  },
  {
    id: '2',
    title: 'Trend Renkler 2026:',
    subtitle: 'Aurelian Işıltısı',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Bakır ve altın yansımaların hakim olduğu "Sunkissed Atelier" paleti ile doğal derinlik.',
      'Cilt alt tonuna göre kişiselleştirilmiş "Bespoke Gloss" uygulamaları ve parlaklık sırları.',
      'Saç sağlığını bozmayan, bitkisel içerikli yüksek teknoloji boyama sistemleri.',
    ],
    ctaText: 'Koleksiyonu İncele',
    ctaLink: '/koleksiyon/aurelian-isiltisi',
  },
  {
    id: '3',
    title: 'Doğal İpek Kirpik:',
    subtitle: 'Bakışların Gücü',
    image: 'https://images.unsplash.com/photo-1583006290544-825f8bb46510?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Göz yapısına uygun "Custom Fit" tasarım teknikleri ve hacim seçenekleri.',
      'Medikal kalite yapıştırıcılar ve hipoalerjenik ipek materyallerin konforu.',
      'Günlük kullanımda pratiklik: Maskara ihtiyacını ortadan kaldıran kusursuz görünüm.',
    ],
    ctaText: 'Randevu Al',
    ctaLink: '/randevu',
  },
];

// --- Components ---
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const isEven = index % 2 === 1;

  return (
    <section className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center mb-32`}>
      <div className="w-full md:w-1/2 relative group">
        <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {post.badge && (
            <span className="absolute top-6 left-6 bg-yellow-600/90 text-white text-[10px] tracking-widest px-3 py-1 font-bold uppercase backdrop-blur-sm">
              {post.badge}
            </span>
          )}
        </div>
        <div
          className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} w-48 h-24 bg-rose-100/50 -z-10 backdrop-blur-sm p-4 flex items-center justify-center italic text-yellow-800/60 text-xs text-center border border-white/40`}
        >
          &quot;Renk, ruhun yansımasıdır.&quot;
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
          {post.title} <br />
          <span className="text-yellow-600 italic font-normal">{post.subtitle}</span>
        </h2>

        <div className="bg-slate-50/80 p-8 border-l-4 border-yellow-600 space-y-4">
          <h4 className="text-xs tracking-[0.2em] font-bold text-slate-400 uppercase flex items-center gap-2">
            <span className="w-4 h-px bg-yellow-600"></span> Öne Çıkanlar
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {post.highlights.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-yellow-600 font-serif font-bold text-lg">0{idx + 1}.</span>
                <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <Link
          href={post.ctaLink}
          className="inline-flex items-center gap-3 text-slate-900 font-bold text-sm tracking-widest uppercase group transition-all"
        >
          {post.ctaText}
          <span className="w-8 h-px bg-slate-400 group-hover:w-12 group-hover:bg-yellow-600 transition-all"></span>
          <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

// --- Page Component ---
export default function BlogPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-yellow-100 selection:text-yellow-900">
        <main className="pt-32 pb-20">
          {/* Header Section */}
          <header className="max-w-4xl mx-auto text-center px-8 mb-24 space-y-6">
            <p className="italic font-serif text-yellow-600 tracking-wide text-lg">
              Güzelliğin Sanatla Buluştuğu Nokta
            </p>
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-slate-900 uppercase">
              Atelier Blog
            </h1>
            <div className="w-24 h-px bg-yellow-600/30 mx-auto"></div>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
              Saç restorasyonu, lüks kaynak teknolojileri ve modern stil trendlerine dair derinlemesine bir yolculuk.
              Okan Okcu uzmanlığıyla hazırlanan içeriklerimizi keşfedin.
            </p>
          </header>

          {/* Blog Posts Feed */}
          <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Newsletter Section */}
          <section className="max-w-screen-2xl mx-auto px-8 my-32">
            <div className="bg-yellow-600 p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group rounded-sm">
              <div className="relative z-10 space-y-4">
                <h3 className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight">
                  Atelier bültenine katılın.
                </h3>
                <p className="text-white/80 font-serif italic text-lg">
                  Özel kampanyalardan ve yeni blog yazılarımızdan ilk siz haberdar olun.
                </p>
              </div>

              <form className="relative z-10 flex w-full md:w-auto gap-4">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 md:w-80 bg-white/10 border border-white/20 px-6 py-4 text-white placeholder:text-white/50 focus:bg-white/20 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="bg-white text-yellow-700 font-bold px-10 py-4 uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-lg"
                >
                  Kayıt Ol
                </button>
              </form>

              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-zinc-900 w-full pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <span className="text-xl font-serif text-yellow-500 mb-4 block">Okan Okcu Saç Onarım</span>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Şehrin kalbinde saç onarımı ve premium saç kaynağın zirvesi. Seçici bireyler için usta işçiliği.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Stüdyo</h5>
              <ul className="space-y-2">
                <li>
                  <Link className="text-zinc-500 hover:text-white transition-colors text-sm" href="/">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">
                    Hizmetler
                  </Link>
                </li>
                <li>
                  <Link className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">
                    Önce &amp; Sonra
                  </Link>
                </li>
                <li>
                  <Link className="text-yellow-500 underline text-sm" href="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Yasal</h5>
              <ul className="space-y-2">
                <li>
                  <a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">
                    Gizlilik Politikası
                  </a>
                </li>
                <li>
                  <a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">
                    Kullanım Şartları
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">İletişim</h5>
              <ul className="space-y-2">
                <li>
                  <a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
            <p className="text-zinc-400 text-sm tracking-wide">
              &copy; 2024 Okan Okcu Saç Onarım Stüdyosu. Mükemmellik İçin Tasarlandı.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
