// components/layout/Header.js - Final Fixed Version with Maximum Visibility
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = ({ menuItems = [], forceVisible = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      {/* EXPLICIT CSS RESET FOR HEADER */}
      <style jsx global>{`
        .header-navigation * {
          visibility: visible !important;
          opacity: 1 !important;
          display: block !important;
        }
        
        .header-navigation a {
          color: white !important;
          text-decoration: none !important;
          font-weight: 600 !important;
        }
        
        .header-navigation a:hover {
          color: #fbbf24 !important;
        }
        
        .header-scrolled .menulinks {
          color: #374151 !important;
        }
        
        .header-scrolled a:hover {
          color: #2563eb !important;
        }
        
        .header-active {
          color: #fbbf24 !important;
          border-bottom: 2px solid #fbbf24 !important;
          font-weight: 700 !important;
        }
        
        .header-scrolled .header-active {
          color: #2563eb !important;
          border-bottom-color: #2563eb !important;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          shouldShowSolidBackground
            ? 'bg-white/95 backdrop-blur-md shadow-lg header-scrolled'
            : 'bg-transparent'
        }`}
        style={{
          zIndex: 99999,
          visibility: 'visible',
          opacity: 1
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0" style={{ zIndex: 100000, visibility: 'visible', opacity: 1 }}>
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
            <div 
              className="hidden lg:flex items-baseline space-x-8 header-navigation"
              style={{ 
                zIndex: 100000, 
                visibility: 'visible !important', 
                opacity: '1 !important',
                display: 'flex !important'
              }}
            >
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className={`menulinks px-3 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105 ${
                    pathname === item.url ? 'header-active' : ''
                  }`}
                  style={{
                    zIndex: 100001,
                    visibility: 'visible !important',
                    opacity: '1 !important',
                    display: 'block !important',
                    color: !shouldShowSolidBackground 
                      ? (pathname === item.url ? '#fbbf24' : '#ffffff')
                      : (pathname === item.url ? '#2563eb' : '#374151'),
                    fontWeight: pathname === item.url ? '700' : '600',
                    borderBottom: pathname === item.url 
                      ? `2px solid ${!shouldShowSolidBackground ? '#fbbf24' : '#2563eb'}`
                      : 'none',
                    textShadow: !shouldShowSolidBackground ? '0 1px 3px rgba(0,0,0,0.5)' : 'none'
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div 
              className="hidden lg:block"
              style={{ 
                zIndex: 100000, 
                visibility: 'visible !important', 
                opacity: '1 !important' 
              }}
            >
              <Link
                href="/pricing"
                className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  zIndex: 100001,
                  visibility: 'visible !important',
                  opacity: '1 !important',
                  display: 'inline-block !important',
                  backgroundColor: shouldShowSolidBackground ? '#2563eb' : '#fbbf24',
                  color: shouldShowSolidBackground ? '#FFFFFF' : '#000000'
                }}
              >
                KOM IGÅNG
              </Link>
            </div>

            {/* Mobile menu button */}
            <div 
              className="lg:hidden"
              style={{ 
                zIndex: 100000, 
                visibility: 'visible !important', 
                opacity: '1 !important' 
              }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md transition-colors"
                style={{
                  zIndex: 100001,
                  visibility: 'visible !important',
                  opacity: '1 !important',
                  color: shouldShowSolidBackground ? '#374151' : '#ffffff'
                }}
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
            <div 
              className="lg:hidden"
              style={{ 
                zIndex: 100000, 
                visibility: 'visible !important', 
                opacity: '1 !important' 
              }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      pathname === item.url
                        ? 'text-blue-600 bg-blue-50 font-bold'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      zIndex: 100001,
                      visibility: 'visible !important',
                      opacity: '1 !important'
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link
                    href="/pricing"
                    className="block w-full text-center px-6 py-2 bg-blue-600 !text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      zIndex: 100001,
                      visibility: 'visible !important',
                      opacity: '1 !important'
                    }}
                  >
                    KOM IGÅNG
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;