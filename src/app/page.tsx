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

      <main className="pt-24">
        {/* ═══ Hero Section ═══ */}
        <section className="relative h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image src={IMAGES.hero} alt="Close up of luxurious long flowing blonde hair extensions" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <span className="font-accent text-tertiary-container text-3xl mb-4 block">Artisan Repair &amp; Length</span>
            <h1 className="font-serif text-6xl md:text-8xl text-white leading-none tracking-tighter mb-6 max-w-2xl">
              Saç <br />
              <span className="text-primary-container italic">Kaynak</span>
            </h1>
            <p className="text-surface-container-lowest/90 text-lg max-w-md mb-8 leading-relaxed">
              Master-level hair extensions using ethically sourced premium strands and invisible attachment techniques.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-md font-semibold text-lg hover:scale-105 transition-transform duration-300">
                View Lookbook
              </button>
              <button className="border border-white/30 text-white backdrop-blur-sm px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/10 transition-colors">
                Learn Techniques
              </button>
            </div>
          </div>
        </section>

        {/* Signature Repair Badge */}
        <div className="absolute right-12 top-[768px] z-20">
          <div className="w-32 h-32 rounded-full glass-card border border-outline-variant/20 flex flex-col items-center justify-center text-center p-4">
            <span className="font-accent text-primary text-xl">100%</span>
            <span className="text-[10px] uppercase tracking-widest font-bold">Natural Virgin Hair</span>
          </div>
        </div>

        {/* ═══ Techniques Section ═══ */}
        <section className="py-24 max-w-7xl mx-auto px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl text-on-surface mb-4">Precision Techniques</h2>
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
                  <p className="font-accent text-primary text-xl">Invisible Bond</p>
                  <p className="text-sm text-zinc-600 mt-2">Perfect for fine hair needing high-definition volume.</p>
                </div>
              </div>
              <div className="pl-0 md:pl-12">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Micro-Keratin Capsule</span>
                <h3 className="font-serif text-4xl my-4 italic">Micro Kapsül Kaynak</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  The gold standard of extensions. Our micro-capsule technique uses medical-grade keratin to fuse individual strands. The bonds are smaller than a grain of rice, ensuring complete invisibility even in the highest ponytails.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> 4-6 months durability
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Zero scalp irritation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Heat &amp; water resistant
                  </li>
                </ul>
              </div>
            </div>

            {/* Technique 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 pr-0 md:pr-12">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Hand-Tied Wefts</span>
                <h3 className="font-serif text-4xl my-4 italic">Medikal Kaynak</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  Designed specifically for damaged or fragile hair. Medical extensions utilize a tension-free application method that encourages natural hair growth while providing instant maximum density.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Rapid application
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Reusable strands
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> Seamless blending
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
                <h2 className="font-serif text-4xl mb-2 italic">Product Selection</h2>
                <p className="text-zinc-500">Premium hair sourced from the Slavic and European regions.</p>
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
                  <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Premium Selection</span>
                  <h4 className="font-serif text-3xl mt-6">Virgin Slavic Hair</h4>
                  <p className="text-zinc-600 mt-4 max-w-sm">Naturally soft and thin textured hair, perfect for a seamless match with European hair types. Never chemically treated.</p>
                  <button className="mt-8 text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all underline decoration-2 underline-offset-4 italic">
                    Explore Texture <span className="material-symbols-outlined">east</span>
                  </button>
                </div>
              </div>
              {/* Product cards */}
              {[
                { src: IMAGES.gallery2, alt: 'Dark brunette hair extensions', name: 'Deep Brunette Luxe', desc: 'Natural wave, 60cm' },
                { src: IMAGES.gallery3, alt: 'Golden blonde hair extensions bundles', name: 'Nordic Gold', desc: 'Straight silk, 55cm' },
                { src: IMAGES.gallery4, alt: 'Copper red wavy hair extensions', name: 'Sunset Copper', desc: 'Body wave, 50cm' },
                { src: IMAGES.gallery5, alt: 'Platinum ash blonde hair extensions', name: 'Icy Platinum', desc: 'Ultra-thin, 65cm' },
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
            <h2 className="font-serif text-4xl mb-12">Service Menu</h2>
            <div className="space-y-6">
              {[
                { title: 'Full Volume Set (100-120 strands)', subtitle: 'Recommended for density without length', price: '₺4.500+' },
                { title: 'Artisan Length Set (150-200 strands)', subtitle: 'Complete transformation for length and volume', price: '₺7.200+' },
                { title: 'Medikal Kaynak Maintenance', subtitle: 'Re-taping and scalp care (every 8 weeks)', price: '₺2.100' },
                { title: 'Hybrid Technique Customization', subtitle: 'Mixing bonds for a unique profile', price: 'Consultation' },
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
              <p className="font-accent text-2xl italic mb-6">&quot;Absolute magic. My micro-bonds are literally invisible, even when I workout.&quot;</p>
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
              <p className="text-zinc-600 mb-6 italic leading-relaxed">&quot;The hair quality is unlike anything I&apos;ve tried in Istanbul. It stays soft for months.&quot;</p>
              <p className="font-bold">Melis K.</p>
            </div>
          </div>
        </section>

        {/* ═══ FAQ Section ═══ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="font-serif text-4xl text-center mb-16 italic">Maintenance &amp; Care FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  question: 'How long do extensions typically last?',
                  answer:
                    'With proper salon maintenance every 3-4 months, your extensions can last up to a year. We recommend a check-up every 8 weeks to ensure your natural hair is healthy.',
                },
                {
                  question: 'Will hair extensions damage my natural hair?',
                  answer:
                    'When applied by a certified master like Okan Okcu using the correct weight-to-strand ratio, extensions do not damage hair. In many cases, they protect the natural hair from environmental stressors.',
                },
                {
                  question: 'Can I dye my hair with extensions in?',
                  answer:
                    'Yes, but we strongly recommend having any coloring done at our studio to ensure the bonds are not compromised and the color match remains seamless.',
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
              <h2 className="font-serif text-4xl mb-6">Begin Your Transformation</h2>
              <p className="text-zinc-600 mb-8">Every masterpiece starts with a conversation. Book your complimentary physical or digital consultation today.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">calendar_month</span>
                  <span>Next Available: Tuesday, Oct 24</span>
                </div>
                <button className="w-full bg-primary text-on-primary py-4 rounded-md font-bold tracking-widest uppercase hover:bg-on-primary-container transition-colors shadow-lg">
                  Book Consultation
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
              Okan Okcu Hair Repair
            </span>
            <p className="text-zinc-400 text-sm leading-relaxed">The pinnacle of hair repair and premium extensions in the heart of the city. Artisan craftsmanship for discerning individuals.</p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Studio</h5>
            <ul className="space-y-2">
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Atelier</a></li>
              <li><a className="text-yellow-500 underline text-sm" href="#">Services</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Before &amp; After</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Academy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Privacy Policy</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Terms of Service</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Studio Location</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Connect</h5>
            <ul className="space-y-2">
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Instagram</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">WhatsApp</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-colors text-sm" href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
          <p className="text-zinc-400 text-sm tracking-wide">&copy; 2024 Okan Okcu Hair Repair Studio. Crafted for Excellence.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-white">expand_less</span>
          </div>
        </div>
      </footer>
    </>
  );
}
