// components/layout/Header.js - Next.js 15 App Router Compatible
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // ✅ Correct for Next.js 15
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = ({ menuItems = [], forceVisible = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ App Router hook

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use forceVisible for pages like checkout where we want solid background
  const shouldShowSolidBackground = isScrolled || forceVisible;

  const defaultMenuItems = [
    { title: 'Startsida', url: '/' },
    { title: 'Abonnemang', url: '/pricing' },
    { title: 'Testa Gratis', url: '/free-trial' },
    { title: 'Vanliga Frågor', url: '/faq' },
    { title: 'Om oss', url: '/about' },
    { title: 'Kontakt', url: '/contact' },
  ];

  const navigation = menuItems.length > 0 ? menuItems : defaultMenuItems;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowSolidBackground
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-auto transition-all duration-300">
                <Image
                  src={shouldShowSolidBackground ? "/images/black-logo.png" : "/images/white-logo.png"}
                  alt="Köpa IPTV Logo"
                  width={150}
                  height={88}
                  className="object-contain h-full w-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    pathname === item.url
                      ? shouldShowSolidBackground
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-yellow-400 border-b-2 border-yellow-400'
                      : shouldShowSolidBackground
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/pricing"
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 ${
                shouldShowSolidBackground
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-yellow-400 text-black hover:bg-yellow-500'
              }`}
            >
              KOM IGÅNG
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                shouldShowSolidBackground ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    pathname === item.url
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/pricing"
                  className="block w-full text-center px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  KOM IGÅNG
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;