import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, Dancing_Script, Noto_Serif } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-accent',
  weight: ['400', '700'],
  display: 'swap',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-headline',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hair Extensions (Saç Kaynak) | Okan Okcu Hair Repair Studio',
  description: 'Kaliteli ve doğal saç kaynak hizmetleri. 3D interaktif galerisi ve premium hizmetler.',
  keywords: ['Saç Kaynak', 'Kaynak Saç', 'Hair Extension', 'Okan Okçu', 'Saç Tamiri'],
  openGraph: {
    title: 'Hair Extensions (Saç Kaynak) | Okan Okcu Hair Repair Studio',
    description: 'Master-level hair extensions using ethically sourced premium strands.',
    type: 'website',
    url: 'https://okanokcu.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`light ${playfairDisplay.variable} ${plusJakartaSans.variable} ${dancingScript.variable} ${notoSerif.variable}`}
    >
      <head>
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
