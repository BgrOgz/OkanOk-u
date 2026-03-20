'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2BbkjiooQs1wNJn-bFn4pONF0NPjocyltJdQbQzL0PIj_V2bXgAsQznqYszJa2JOVALJ2VUVv4p7_c6vFWF-ptLOFISokmfYxAIlCwnNxuWqT_T6m4zIxrMTvlklFygIdXBymOEI8rLEBi3p69ow41Le1NGFTG3k4iJqMXQVdmV78jVwD_Qk1VADTSCiQIYKySVT8-fAZz7twxPBFSWJfLs4sgsF1V3KhDUZ6jVzEPIMROgiQaBkbeGSXH2eOYc1IjJLxBebtAH0"
            alt="Luxurious long flowing blonde hair extensions"
            fill
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <span className="font-accent text-accent text-3xl mb-4 block">
            Profesyonel Hizmet & Kalite
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-white leading-none tracking-tighter mb-6 max-w-2xl">
            Saç <br />
            <span className="text-primary-100 italic">Kaynak</span>
          </h1>
          <p className="text-white/90 text-lg max-w-md mb-8 leading-relaxed">
            Etik olarak kaynak alınan premium saçlar ve görünmez uygulama tekniklerini kullanarak master
            seviyesinde saç kaynak hizmetleri sunuyoruz.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary-100 text-primary-900 px-8 py-4 rounded-md font-semibold text-lg hover:scale-105 transition-transform duration-300">
              Galeriye Bak
            </button>
            <button className="border border-white/30 text-white backdrop-blur-sm px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/10 transition-colors">
              Teknikler Hakkında
            </button>
          </div>
        </div>
      </section>

      {/* Signature Badge */}
      <div className="absolute right-12 top-[768px] z-20">
        <div className="w-32 h-32 rounded-full glass-card border border-neutral-300/20 flex flex-col items-center justify-center text-center p-4">
          <span className="font-accent text-primary text-xl">100%</span>
          <span className="text-[10px] uppercase tracking-widest font-bold">Doğal Saç</span>
        </div>
      </div>
    </>
  );
}
