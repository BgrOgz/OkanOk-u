'use client';

import Image from 'next/image';

interface Technique {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  image: string;
  badge: string;
  badgeDescription: string;
  reverse?: boolean;
}

const techniques: Technique[] = [
  {
    id: 1,
    title: 'Mikro Kapsül Kaynak',
    subtitle: 'Micro-Keratin Capsule',
    description:
      'Saç kaynağının altın standardı. Mikro-kapsül tekniğimiz tıbbi sınıf keratini kullanarak tek tek saçları birleştirir. Bağlar pirinç tanesi kadar küçüktür ve en yüksek kuyruklarda bile tamamen görünmez.',
    benefits: ['4-6 ay dayanıklılık', 'Zero scalp irritation', 'Isı ve su direnci'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgdlYBU_yDuYFoGJiziIm4Km6R2FZT0OR4EWCIL4GW11HR1A8OXU53wXHbquvpjvHadoYktyj2I_u7YxhZd2KYTPUzyHmhYs8Her74HockadfJI6mocXdAxb73mGByll9jqG0GGecvzt9X14RYLmCPvnLp16lA8TCCroDTIfJYOsa6EOL5dcEnGxadkSJnc5u6_qsikjwvgMsR9AzU5_AdlNrmqYwW6NkzSWq0FaTrCm1XfnYDEGKIgNDRqbD_wVf3_WS0h58JhJM',
    badge: 'Görünmez Bağ',
    badgeDescription: 'İnce saçlar için mükemmel yüksek tanım hacim.',
  },
  {
    id: 2,
    title: 'Medikal Kaynak',
    subtitle: 'Hand-Tied Wefts',
    description:
      'Hasarlı veya kırılgan saçlar için özel olarak tasarlanmıştır. Tıbbi uzantıları gerilim içermeyen bir uygulama yöntemi kullanır ve doğal saç büyümesini teşvik ederken anında maksimum yoğunluk sağlar.',
    benefits: ['Hızlı uygulama', 'Yeniden kullanılabilir saçlar', 'Kusursuz karışım'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0r1g_QAvYyCIPtXzB0dwcD_trflu-Saqfw7QcNeivagnx_UKLGtZMtryN5Ag0T8ymuULDev6_JlnCFKjd7TiJDFbIVe8eEEgNjsmSbj-EtHAE8lsUrubXqb6dchg6iWNtyMmbtdNdHYHDwFUVSmuxilwBXyCFn_E0V7Q4d83peoWtn6PxiN4GjHBRpw2OzMNNInAqHS2wbZiZroNCEDObiH7Kv1P1RK88HOGbEgH-IWPrCChfr8oq1S5vtNPBTNUGkr_wkJ1gTH8',
    badge: 'Hızlı İşlem',
    badgeDescription: 'Hasar görmüş saçlar için ideal çözüm.',
    reverse: true,
  },
];

export default function TechniquesSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2 className="font-serif text-4xl text-neutral-900 mb-4">Hassas Teknikler</h2>
        <div className="w-24 h-px bg-primary mx-auto"></div>
      </div>

      {/* Techniques Grid */}
      <div className="space-y-32">
        {techniques.map((technique) => (
          <div
            key={technique.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
              technique.reverse ? 'md:[direction:rtl]' : ''
            }`}
          >
            {/* Image */}
            <div
              className={`relative group ${technique.reverse ? 'md:[direction:ltr] order-2 md:order-1' : 'order-1'}`}
            >
              <div className="absolute -inset-4 bg-neutral-50 rounded-xl -z-10 transition-transform group-hover:rotate-2"></div>
              <div className="relative w-full h-[500px]">
                <Image
                  src={technique.image}
                  alt={technique.title}
                  fill
                  className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-lg max-w-xs shadow-lg">
                <p className="font-accent text-primary text-xl">{technique.badge}</p>
                <p className="text-sm text-zinc-600 mt-2">{technique.badgeDescription}</p>
              </div>
            </div>

            {/* Content */}
            <div
              className={`${
                technique.reverse ? 'md:[direction:ltr] order-1 md:order-2 md:pr-12' : 'md:pl-12'
              }`}
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm">{technique.subtitle}</span>
              <h3 className="font-serif text-4xl my-4 italic">{technique.title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">{technique.description}</p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {technique.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
