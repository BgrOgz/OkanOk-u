import Navigation from '@/components/Navigation';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hair Extensions (Saç Kaynak) | Okan Okcu Hair Repair Studio',
  description:
    'Master-level hair extensions using ethically sourced premium strands and invisible attachment techniques.',
};

const IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2BbkjiooQs1wNJn-bFn4pONF0NPjocyltJdQbQzL0PIj_V2bXgAsQznqYszJa2JOVALJ2VUVv4p7_c6vFWF-ptLOFISokmfYxAIlCwnNxuWqT_T6m4zIxrMTvlklFygIdXBymOEI8rLEBi3p69ow41Le1NGFTG3k4iJqMXQVdmV78jVwD_Qk1VADTSCiQIYKySVT8-fAZz7twxPBFSWJfLs4sgsF1V3KhDUZ6jVzEPIMROgiQaBkbeGSXH2eOYc1IjJLxBebtAH0',
  technique1:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAgdlYBU_yDuYFoGJiziIm4Km6R2FZT0OR4EWCIL4GW11HR1A8OXU53wXHbquvpjvHadoYktyj2I_u7YxhZd2KYTPUzyHmhYs8Her74HockadfJI6mocXdAxb73mGByll9jqG0GGecvzt9X14RYLmCPvnLp16lA8TCCroDTIfJYOsa6EOL5dcEnGxadkSJnc5u6_qsikjwvgMsR9AzU5_AdlNrmqYwW6NkzSWq0FaTrCm1XfnYDEGKIgNDRqbD_wVf3_WS0h58JhJM',
  technique2:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD0r1g_QAvYyCIPtXzB0dwcD_trflu-Saqfw7QcNeivagnx_UKLGtZMtryN5Ag0T8ymuULDev6_JlnCFKjd7TiJDFbIVe8eEEgNjsmSbj-EtHAE8lsUrubXqb6dchg6iWNtyMmbtdNdHYHDwFUVSmuxilwBXyCFn_E0V7Q4d83peoWtn6PxiN4GjHBRpw2OzMNNInAqHS2wbZiZroNCEDObiH7Kv1P1RK88HOGbEgH-IWPrCChfr8oq1S5vtNPBTNUGkr_wkJ1gTH8',
  gallery1:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuChcmZ3_1DQvDR-wWNmx17sOmc5jPTt_MZyhF5sEV07XRSITfXPJRoi32OvhPTdc21RoEA4eA--BnQ8QwqtEEvvXR5grM21qVCFXB1dMenN_hDGnSlUkUTVlTNB0i3CyshCkiEdlduhkZJ5gaGg_uBzbnP6WJynPKpkC_lcFx455ZhQ1hb0r5fmZtlQvcf8829cJQ3rl8_rLFQalMEcgZIys5mjZ4SHEyPk6jHqcoj5SG4MSVNWdPuysVbApcdztA_9qJeGHNq-KXE',
  gallery2:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCmcmtOk9yaaZo0Hx_7ALm08MUvQxf52IBbUXkSned2XQr_PA8zutCaTgDFlCMKvt_DSUenc1tAKqktdL_k8mOQwSA3McRp54tecNIjaiauliF6IK9KgMXpALJyv98NfAa65GoqKt6CtMiCt1oP3OIgkBkYASsJ6tY1jNR3YyI78kz1LdiVArB77325j-lj1Zgp5UTw2Kp64Jhtq0aoppNfUo-0Ku3BwHEPHD6AzJoyClAZ-lV42Zn6PL3kNxTQxgvey3O8mjzxI00',
  gallery3:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCF2a1Forhp-vTTi-TZ2iT8aAN95Ch59r_Vc9ypm2uLRpvQ0Y2RxnMNLLiTC65SVDXyJ4VQ588bFh4_d8TXI9UJ0bVQN8LKCrIM7-BOeMxvhwVyMhgzW5xwT5s1QBAFjCAw2cDHWbnGdA1s9BYPmJtRPitcvB-GiMr3-oa90mBe6oxS_vXEsE5EPVPfpTI2MTNwJcC2L-U-1gmljIXn1-K0g57sRAQ_8y56Pn6po3SxmeSKsfoTMJq1M17neps4NmYXnuPEnTJbk-o',
  gallery4:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBfPMBh97Ar-6x0y5GOrWIpxNM3QMKVmbeq2FS3FgHjP-N9iU9rljfQHEPTePLkQX-JVcEMcz4G6Vz-1Ws6NWdvky8p7BTWPOdItiHnxrq6jBtKpx7I-tahz-eGQFHCP2aSmcuQvwy9uECtoz5l_PqculCjLqF88bzXbzkYe0aYYx1cPdYE8RgcmJPW4-pgBpHNO4tZcelb8zrIv9Z0SnMPLloeXrWmqe4p8iNDqWzt7Pqhdn6DCb8PpHT1Vt_KToESpc9eLk9U97s',
  gallery5:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDAzwmkJqn6_mlCjBMLKpmuSTj5jUzQFQ6LSlD0ic0t2vVIYMcjbPZIeEs23oOuCU8pEKdgKUdBWzTvbsF6odIZRTBH0m7GClm-vFX68PSclRKT6mC6AIwlVFLEPoXk2w7nUpqRf2Y1iZEMITS-xoLq87I4yfll975Uspjs7DWLoHPdXdoh3ZgZ6Ct4rkjS3uHbah7I6Qt7dP7iaCGYaJ2_f5vMXvEeQi_lbvkVxz7TAoQI1OFkmDes6e5lhvEbYsGIsy-6gA5Rh08',
  cta: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADFuVqD8ilqvEwac8jjf7a5TcgWBy-6CFEP1ZpfAqOA9HvNH84dGSMEGZgepUqY480DPx-h7RdDfG8WGao4QkcKVdtnX4S-NNRk_GLMQVReFmkrYT2vPdNHTEKvbiw6vMUpp8aDZihRMvvbZ0qAiGHXOXW22ieilDtyiCICkHKnCS2-Hhcqtp4ets4FUGraEq-fUEXonxTr4RZbS0fQGBBW6-wc8OS2WlE_4JYraD-HYEDys5qrtXKOKfAzsFAbJUTpO9ymfrriaw',
  logo: 'https://lh3.googleusercontent.com/aida/ADBb0uhDDi9P_yv9mKQeRfL1iI4zxWNFKbBVTq3l7ralVQ-Mj1CEBho-YsPZN3PmaFHurs3qVKY1CyotCXsjUib1rYrZi9JoMnZb8WRchfNb4HeWf2HSbNdIupUF3G5EnO-H3mrwhB3hCXFDZ4ULdoRruM_Ad5CzlthnptCA1hyeHWGZ1ucbaiqRDxpvoNnaR9LZiH39g_3QVAHWe1YnAcpBehl7tof06x_YY16MtJGekgBHoW9UnOdIft6mY3SmRwOHN4tBfaCOm50w0Q',
};

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Mobil sticky Randevu Al — sol alt, kayarak gelir */}
      <div
        className="md:hidden fixed bottom-6 left-5 z-50"
        style={{ animation: 'slideInLeft 0.6s cubic-bezier(0.16,1,0.3,1) 0.8s both' }}
      >
        <button className="flex items-center gap-2 bg-primary-container/90 text-on-primary-container backdrop-blur-md pl-5 pr-4 py-3 rounded-full text-xs font-semibold tracking-[0.15em] uppercase shadow-2xl shadow-black/40 border border-primary-container/20">
          Randevu Al
          <span className="material-symbols-outlined text-base leading-none">arrow_forward</span>
        </button>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <main className="pt-24">
        {/* ═══ Hero Section ═══ */}
        <section className="min-h-screen flex items-center bg-gradient-to-br from-zinc-900 via-stone-900 to-[#1a1208] overflow-hidden">
          <div className="w-full flex flex-col md:flex-row items-center">

            {/* Sol — İçerik */}
            <div className="order-2 md:order-1 flex-1 px-8 md:pl-16 xl:pl-24 py-16 md:py-0">
              <span className="font-accent text-tertiary-container text-2xl md:text-3xl mb-4 block">Uzman Onarım &amp; Uzunluk</span>
              <h1 className="font-serif text-6xl md:text-7xl xl:text-8xl text-white leading-none tracking-tighter mb-6">
                Saç <br />
                <span className="text-primary-container italic">Kaynak</span>
              </h1>
              <p className="text-white/70 text-base md:text-lg max-w-md mb-8 leading-relaxed">
                Etik kaynaklı premium saç telleri ve görünmez bağlantı teknikleri ile usta seviyesinde saç kaynak hizmeti.
              </p>
              <div className="flex gap-3 flex-wrap">
                <button className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full text-sm font-medium tracking-wide hover:scale-105 transition-transform duration-300">
                  Randevu Al
                </button>
                <button className="border border-white/40 text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-white/10 transition-colors">
                  Teknikleri Keşfet
                </button>
              </div>
            </div>

            {/* Sağ — Video kenara kadar uzanır */}
            <div className="order-1 md:order-2 w-full md:w-[45%] lg:w-[42%] self-stretch min-h-[50vh] md:min-h-screen relative overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
              {/* Sol kenardan yumuşak geçiş */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

          </div>
        </section>


        {/* ═══ Techniques Section ═══ */}
        <section className="py-24 max-w-7xl mx-auto px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl text-on-surface mb-4">Uygulama Teknikleri</h2>
            <div className="w-24 h-px bg-primary mx-auto" />
          </div>
          <div className="space-y-32">
            {/* Technique 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-surface-container-low rounded-xl -z-10 transition-transform group-hover:rotate-2" />
                <div className="relative w-full h-[500px]">
                  <Image src={IMAGES.technique1} alt="Micro capsule hair extension application process closeup" fill className="object-cover rounded-lg shadow-xl" />
                </div>
                <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-lg max-w-xs shadow-lg">
                  <p className="font-accent text-primary text-xl">Görünmez Bağlantı</p>
                  <p className="text-sm text-zinc-600 mt-2">Yüksek yoğunluklu hacim isteyen ince saçlar için ideal.</p>
                </div>
              </div>
              <div className="pl-0 md:pl-12">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Mikro-Keratin Kapsül</span>
                <h3 className="font-serif text-4xl my-4 italic">Mikro Kapsül Kaynak</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Saç kaynağın altın standardı. Mikro kapsül tekniğimiz, tıbbi sınıf keratini kullanarak tek tek saç tellerini birleştirir. Bağlantılar bir pirinç tanesinden küçüktür ve en yüksek at kuyruğunda bile tamamen görünmezdir.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> 4-6 ay dayanıklılık
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Sıfır saç derisi tahrişi
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Isıya ve suya dayanıklı
                  </li>
                </ul>
              </div>
            </div>

            {/* Technique 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 pr-0 md:pr-12">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">El Yapımı Atkı</span>
                <h3 className="font-serif text-4xl my-4 italic">Medikal Kaynak</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Hasarlı veya kırılgan saçlar için özel olarak tasarlanmıştır. Medikal kaynak, doğal saç büyümesini teşvik ederken anında maksimum yoğunluk sağlayan gerilimsiz bir uygulama yöntemi kullanır.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Hızlı uygulama
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Yeniden kullanılabilir teller
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Kusursuz geçiş
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative group">
                <div className="absolute -inset-4 bg-tertiary-fixed-dim/20 rounded-xl -z-10 transition-transform group-hover:-rotate-2" />
                <div className="relative w-full h-[500px]">
                  <Image src={IMAGES.technique2} alt="Professional stylist measuring hair for medical extensions" fill className="object-cover rounded-lg shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Product Gallery (Bento Style) ═══ */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-serif text-4xl mb-2 italic">Ürün Seçimi</h2>
                <p className="text-zinc-500">Slav ve Avrupa bölgelerinden temin edilen premium saçlar.</p>
              </div>
              <div className="hidden md:flex gap-2">
                <button className="p-2 rounded-full border border-outline-variant hover:bg-white transition-colors">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button className="p-2 rounded-full border border-outline-variant hover:bg-white transition-colors">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Large featured card */}
              <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/10 group cursor-pointer overflow-hidden relative">
                <Image src={IMAGES.gallery1} alt="Display of diverse hair extension colors and textures" fill className="object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10">
                  <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Premium Seçim</span>
                  <h4 className="font-serif text-3xl mt-6">Bakire Slav Saçı</h4>
                  <p className="text-zinc-600 mt-4 max-w-sm">Doğal olarak yumuşak ve ince dokulu saç, Avrupa saç tipleriyle kusursuz uyum sağlar. Asla kimyasal işlem görmemiştir.</p>
                  <button className="mt-8 text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all underline decoration-2 underline-offset-4 italic">
                    Dokuyu Keşfet <span className="material-symbols-outlined">east</span>
                  </button>
                </div>
              </div>
              {/* Product cards */}
              {[
                { src: IMAGES.gallery2, alt: 'Koyu kumral saç kaynak', name: 'Koyu Kumral Lüks', desc: 'Doğal dalga, 60cm' },
                { src: IMAGES.gallery3, alt: 'Altın sarısı saç kaynak demetleri', name: 'Nordik Altın', desc: 'Düz ipek, 55cm' },
                { src: IMAGES.gallery4, alt: 'Bakır kızıl dalgalı saç kaynak', name: 'Gün Batımı Bakır', desc: 'Gövde dalgası, 50cm' },
                { src: IMAGES.gallery5, alt: 'Platin küllü sarı saç kaynak', name: 'Buzlu Platin', desc: 'Ultra ince, 65cm' },
              ].map((product) => (
                <div key={product.name} className="bg-white p-6 rounded-lg border border-outline-variant/10 hover:shadow-lg transition-shadow">
                  <div className="h-40 bg-surface-container mb-4 rounded overflow-hidden relative">
                    <Image src={product.src} alt={product.alt} fill className="object-cover" />
                  </div>
                  <h5 className="font-bold">{product.name}</h5>
                  <p className="text-sm text-zinc-500">{product.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Pricing & Reviews ═══ */}
        <section className="py-24 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-4xl mb-12">Hizmet Menüsü</h2>
            <div className="space-y-6">
              {[
                { title: 'Tam Hacim Seti (100-120 tel)', subtitle: 'Uzunluk olmadan yoğunluk isteyenler için önerilir', price: '₺4.500+' },
                { title: 'Uzunluk Seti (150-200 tel)', subtitle: 'Uzunluk ve hacim için komple dönüşüm', price: '₺7.200+' },
                { title: 'Medikal Kaynak Bakımı', subtitle: 'Yeniden bantlama ve saç derisi bakımı (her 8 haftada)', price: '₺2.100' },
                { title: 'Hibrit Teknik Özelleştirme', subtitle: 'Benzersiz bir profil için karışık bağlantılar', price: 'Danışma' },
              ].map((service) => (
                <div key={service.title} className="flex justify-between items-end border-b border-outline-variant/20 pb-4">
                  <div>
                    <h4 className="text-xl font-medium">{service.title}</h4>
                    <p className="text-sm text-zinc-500 italic">{service.subtitle}</p>
                  </div>
                  <span className="text-xl font-serif text-primary">{service.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-8">
            <div className="bg-secondary text-white p-8 rounded-lg relative">
              <span className="material-symbols-outlined absolute top-4 right-4 text-primary-container opacity-50 text-4xl">format_quote</span>
              <p className="font-accent text-2xl italic mb-6">&quot;Tam bir sihir. Mikro bağlantılarım spor yaparken bile kesinlikle görünmüyor.&quot;</p>
              <div>
                <p className="font-bold">Ebru S.</p>
                <div className="flex text-primary-container">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-surface-container-high p-8 rounded-lg">
              <p className="text-zinc-600 mb-6 italic leading-relaxed">&quot;İstanbul&apos;da denediğim hiçbir şeye benzemeyen bir saç kalitesi. Aylarca yumuşak kalıyor.&quot;</p>
              <p className="font-bold">Melis K.</p>
            </div>
          </div>
        </section>

        {/* ═══ FAQ Section ═══ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="font-serif text-4xl text-center mb-16 italic">Bakım &amp; Sık Sorulan Sorular</h2>
            <div className="space-y-4">
              {[
                {
                  question: 'Saç kaynak ne kadar süre dayanır?',
                  answer:
                    'Her 3-4 ayda düzenli salon bakımıyla saç kaynağınız bir yıla kadar dayanabilir. Doğal saçınızın sağlıklı olduğundan emin olmak için her 8 haftada bir kontrol öneriyoruz.',
                },
                {
                  question: 'Saç kaynak doğal saçıma zarar verir mi?',
                  answer:
                    'Okan Okçu gibi sertifikalı bir usta tarafından doğru ağırlık-tel oranıyla uygulandığında, kaynak saça zarar vermez. Birçok durumda doğal saçı çevresel stres faktörlerinden korur.',
                },
                {
                  question: 'Kaynak varken saçımı boyatabilir miyim?',
                  answer:
                    'Evet, ancak bağlantıların zarar görmemesi ve renk uyumunun kusursuz kalması için boyama işleminin stüdyomuzda yapılmasını şiddetle tavsiye ediyoruz.',
                },
              ].map((faq, index) => (
                <details key={index} className="group border-b border-outline-variant/20 pb-4" open={index === 0}>
                  <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg">
                    {faq.question}
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="mt-4 text-on-surface-variant leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Final CTA ═══ */}
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto rounded-2xl bg-surface-container-low overflow-hidden flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 h-[400px] relative">
              <Image src={IMAGES.cta} alt="Stylist working on a client hair in a luxury salon environment" fill className="object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-12">
              <h2 className="font-serif text-4xl mb-6">Dönüşümünüze Başlayın</h2>
              <p className="text-zinc-600 mb-8">Her başyapıt bir sohbetle başlar. Ücretsiz yüz yüze veya dijital danışma randevunuzu bugün alın.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">calendar_month</span>
                  <span>Müsait Randevu: Salı, Eki 24</span>
                </div>
                <button className="w-full bg-primary text-on-primary py-4 rounded-md font-bold tracking-widest uppercase hover:bg-on-primary-container transition-colors shadow-lg">
                  Randevu Al
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ Footer ═══ */}
      <footer className="bg-zinc-900 w-full pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <span className="text-xl font-serif text-yellow-500 mb-4 flex items-center">
              <Image src={IMAGES.logo} alt="Okan Okcu Logo Symbol" width={32} height={32} className="h-8 w-auto inline-block mr-3 mb-1 object-contain" />
              Okan Okcu Saç Onarım
            </span>
            <p className="text-zinc-400 text-sm leading-relaxed">Şehrin kalbinde saç onarımı ve premium saç kaynağın zirvesi. Seçici bireyler için usta işçiliği.</p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Stüdyo</h5>
            <ul className="space-y-2">
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Atölye</a></li>
              <li><a className="text-yellow-500 underline text-sm" href="#">Hizmetler</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Önce &amp; Sonra</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Akademi</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Yasal</h5>
            <ul className="space-y-2">
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Gizlilik Politikası</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Kullanım Şartları</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Stüdyo Konumu</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">İletişim</h5>
            <ul className="space-y-2">
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Instagram</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">WhatsApp</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Bize Ulaşın</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
          <p className="text-zinc-400 text-sm tracking-wide">&copy; 2024 Okan Okcu Saç Onarım Stüdyosu. Mükemmellik İçin Tasarlandı.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-white">expand_less</span>
          </div>
        </div>
      </footer>
    </>
  );
}
