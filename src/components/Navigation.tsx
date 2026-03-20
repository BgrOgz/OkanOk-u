'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida/ADBb0uhDDi9P_yv9mKQeRfL1iI4zxWNFKbBVTq3l7ralVQ-Mj1CEBho-YsPZN3PmaFHurs3qVKY1CyotCXsjUib1rYrZi9JoMnZb8WRchfNb4HeWf2HSbNdIupUF3G5EnO-H3mrwhB3hCXFDZ4ULdoRruM_Ad5CzlthnptCA1hyeHWGZ1ucbaiqRDxpvoNnaR9LZiH39g_3QVAHWe1YnAcpBehl7tof06x_YY16MtJGekgBHoW9UnOdIft6mY3SmRwOHN4tBfaCOm50w0Q';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/atelier', label: 'Atelier' },
    { href: '/services', label: 'Services' },
    { href: '/hair-extensions', label: 'Hair Extensions' },
    { href: '/gallery', label: 'Before & After' },
    { href: '/contact', label: 'Book Now' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100/20 shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif uppercase tracking-widest text-amber-700">
          <div className="flex items-center gap-3">
            <Image
              src={LOGO_URL}
              alt="Okan Okcu Logo Symbol"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span>Okan Okcu</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif tracking-tight text-lg transition-colors ${
                  isActive
                    ? 'text-amber-700 font-semibold border-b-2 border-amber-600'
                    : 'text-zinc-600 hover:text-amber-600'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-md font-medium hover:bg-primary-container hover:text-on-primary-container transition-all duration-300">
          Consultation
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-b border-zinc-100/20">
          <div className="px-8 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-zinc-600 hover:text-amber-600 transition-colors font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full bg-primary text-on-primary py-2 rounded-md font-medium">
              Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
