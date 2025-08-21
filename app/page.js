// app/page.js - Complete Homepage with Reviews and FAQs
'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/Heros/HeroSection';
import BrandsCarousel from '@/components/BrandsCarousel';
import Footer from '@/components/layout/Footer';

// Mock data for development
const mockPosts = [
  {
    id: 1,
    title: 'Så Installerar Du IPTV på Din Smart TV',
    excerpt: 'Steg-för-steg guide för att komma igång med IPTV på alla populära Smart TV-märken...',
    slug: 'installera-iptv-smart-tv',
    date: '2024-01-15',
    image: '/images/blog/smart-tv-guide.jpg'
  },
  {
    id: 2,
    title: 'De Bästa IPTV-apparna för Android och iOS',
    excerpt: 'Upptäck vilka appar som ger dig den bästa IPTV-upplevelsen på din mobil...',
    slug: 'basta-iptv-appar-mobil',
    date: '2024-01-10',
    image: '/images/blog/mobile-apps.jpg'
  },
  {
    id: 3,
    title: 'IPTV vs Traditionell TV: Vad är Skillnaden?',
    excerpt: 'Förstå fördelarna med IPTV jämfört med traditionell kabel-TV och satellit...',
    slug: 'iptv-vs-traditionell-tv',
    date: '2024-01-05',
    image: '/images/blog/iptv-comparison.jpg'
  }
];

const mockMenuItems = [
  { label: 'Hem', url: '/' },
  { label: 'Priser', url: '/pricing' },
  { label: 'FAQ', url: '/faq' },
  { label: 'Kontakt', url: '/contact' }
];

// Pricing Preview Section with Tabs
function PricingPreviewSection() {
  const [activeTab, setActiveTab] = useState('1-device');

  // 1 ENHET pricing plans
  const singleDevicePlans = [
    {
      id: 'month-1',
      name: '1 Månad',
      price: '155',
      originalPrice: null,
      savings: null,
      features: [
        '+ 50 000 TV-kanaler',
        '+ 66 000 Filmer & Serier',
        '4K / Ultra HD-bildkvalitet',
        'GRATIS uppdateringar av kanaler & VOD',
        '99,9 % serverdrifttid',
        'Stöd för alla enheter',
        'Teknisk support dygnet runt'
      ],
      popular: false
    },
    {
      id: 'month-3',
      name: '3 Månader',
      price: '260',
      originalPrice: '465',
      savings: '205',
      features: [
        '+ 50 000 TV-kanaler',
        '+ 66 000 Filmer & Serier',
        '4K / Ultra HD-bildkvalitet',
        'GRATIS uppdateringar av kanaler & VOD',
        '99,9 % serverdrifttid',
        'Stöd för alla enheter',
        'Teknisk support dygnet runt'
      ],
      popular: true
    },
    {
      id: 'month-6',
      name: '6 Månader',
      price: '365',
      originalPrice: '930',
      savings: '565',
      features: [
        '+ 50 000 TV-kanaler',
        '+ 66 000 Filmer & Serier',
        '4K / Ultra HD-bildkvalitet',
        'GRATIS uppdateringar av kanaler & VOD',
        '99,9 % serverdrifttid',
        'Stöd för alla enheter',
        'Teknisk support dygnet runt'
      ],
      popular: false
    },
    {
      id: 'month-12',
      name: '12 Månader',
      price: '625',
      originalPrice: '1860',
      savings: '1235',
      features: [
        '+ 50 000 TV-kanaler',
        '+ 66 000 Filmer & Serier',
        '4K / Ultra HD-bildkvalitet',
        'GRATIS uppdateringar av kanaler & VOD',
        '99,9 % serverdrifttid',
        'Stöd för alla enheter',
        'Teknisk support dygnet runt'
      ],
      popular: false
    },
    {
      id: 'month-24',
      name: '24 Månader',
      price: '1195',
      originalPrice: '3720',
      savings: '2525',
      features: [
        '+ 50 000 TV-kanaler',
        '+ 66 000 Filmer & Serier',
        '4K / Ultra HD-bildkvalitet',
        'GRATIS uppdateringar av kanaler & VOD',
        '99,9 % serverdrifttid',
        'Stöd för alla enheter',
        'Teknisk support dygnet runt'
      ],
      popular: false,
      bestValue: true
    }
  ];

  // 2 ENHETER pricing plans
  const doubleDevicePlans = [
    {
      id: 'dual-month-1',
      name: '1 Månad',
      price: '315',
      originalPrice: null,
      savings: null,
      features: [
        '+ 50 000 TV-kanaler',
        '+ 66 000 Filmer & Serier',
        '4K / Ultra HD-bildkvalitet',
        'GRATIS uppdateringar av kanaler & VOD',
        '99,9 % serverdrifttid',
        'Stöd för alla enheter',
        'Teknisk support dygnet runt',
        '2 samtidiga enheter'
      ],
      popular: false
    },
    {
      id: 'dual-month-3',
      name: '3 Månader',
      price: '470',
      originalPrice: '945',
      savings: '475',
      features: [
        '+ 50 000 TV-kanaler',
        '+ 66 000 Filmer & Serier',
        '4K / Ultra HD-bildkvalitet',
        'GRATIS uppdateringar av kanaler & VOD',
        '99,9 % serverdrifttid',
        'Stöd för alla enheter',
        'Teknisk support dygnet runt',
        '2 samtidiga enheter'
      ],
      popular: true
    },
    {
      id: 'dual-month-6',
      name: '6 Månader',
      price: '675',
      originalPrice: '1890',
      savings: '1215',
      features: [
        '+ 50 000 TV-kanaler',
        '+ 66 000 Filmer & Serier',
        '4K / Ultra HD-bildkvalitet',
        'GRATIS uppdateringar av kanaler & VOD',
        '99,9 % serverdrifttid',
        'Stöd för alla enheter',
        'Teknisk support dygnet runt',
        '2 samtidiga enheter'
      ],
      popular: false
    },
    {
      id: 'dual-month-12',
      name: '12 Månader',
      price: '1145',
      originalPrice: '3780',
      savings: '2635',
      features: [
        '+ 50 000 TV-kanaler',
        '+ 66 000 Filmer & Serier',
        '4K / Ultra HD-bildkvalitet',
        'GRATIS uppdateringar av kanaler & VOD',
        '99,9 % serverdrifttid',
        'Stöd för alla enheter',
        'Teknisk support dygnet runt',
        '2 samtidiga enheter'
      ],
      popular: false
    },
    {
      id: 'dual-month-24',
      name: '24 Månader',
      price: '2340',
      originalPrice: '7560',
      savings: '5220',
      features: [
        '+ 50 000 TV-kanaler',
        '+ 66 000 Filmer & Serier',
        '4K / Ultra HD-bildkvalitet',
        'GRATIS uppdateringar av kanaler & VOD',
        '99,9 % serverdrifttid',
        'Stöd för alla enheter',
        'Teknisk support dygnet runt',
        '2 samtidiga enheter'
      ],
      popular: false,
      bestValue: true
    }
  ];

  const plans = activeTab === '1-device' ? singleDevicePlans : doubleDevicePlans;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Välj Ditt IPTV Abonnemang
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alla abonnemang inkluderar samma premiumfunktioner - välj bara hur länge du vill ha tjänsten
          </p>
        </div>

        {/* Navigation Tabs - EXACT like your image */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-lg border border-gray-200">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('1-device')}
                className={`px-8 py-3 rounded-md font-bold text-sm transition-all duration-300 ${
                  activeTab === '1-device'
                    ? 'bg-yellow-400 text-black shadow-md'
                    : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                1 ENHET
              </button>
              <button
                onClick={() => setActiveTab('2-device')}
                className={`px-8 py-3 rounded-md font-bold text-sm transition-all duration-300 ${
                  activeTab === '2-device'
                    ? 'bg-yellow-400 text-black shadow-md'
                    : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                2 ENHETER
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl border-2 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular 
                  ? 'border-yellow-400 shadow-lg ring-2 ring-yellow-400 ring-opacity-20' 
                  : plan.bestValue 
                  ? 'border-green-400 shadow-lg ring-2 ring-green-400 ring-opacity-20'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Mest Populär
                  </span>
                </div>
              )}

              {/* Best Value Badge */}
              {plan.bestValue && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Bäst Värde
                  </span>
                </div>
              )}

              {/* Subscription Type */}
              <div className="text-center mb-4">
                <div className="text-yellow-500 text-xs font-semibold uppercase tracking-wider mb-2">
                  Engångsbetalning
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-normal text-gray-500">kr</span>
                  <span className="text-4xl font-bold text-yellow-500 mx-1">
                    {plan.price}
                  </span>
                </div>
                
                {/* Savings */}
                {plan.originalPrice && (
                  <div className="mt-2">
                    <div className="text-sm text-gray-500 line-through">
                      Ordinarie: kr {plan.originalPrice}
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Du sparar: kr {plan.savings}
                    </div>
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <svg className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={`/checkout?plan=${plan.id}&duration=${encodeURIComponent(plan.name)}&price=${plan.price}&devices=${activeTab === '2-device' ? '2' : '1'}`}
                className="inline-block w-full bg-yellow-400 text-black text-center py-3 px-6 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
              >
                KÖP NU
              </Link>
            </div>
          ))}
        </div>

        {/* Link to Full Pricing Page */}
        <div className="text-center mt-12">
          <Link 
            href="/pricing" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Se alla priser och funktioner →
          </Link>
        </div>
      </div>
    </section>
  );
}

// Features Section Component
function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Våra fördelar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi erbjuder Sveriges mest kompletta IPTV-lösning med premium kvalitet och support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">📺</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">50 000+ Livekanaler och VOD</h3>
            <p className="text-gray-600">
              Enormt bibliotek med de senaste filmerna, klassiska favoriter och populära TV-serier från hela världen.
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🔄</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">99.9% Streaming utan buffring</h3>
            <p className="text-gray-600">
              Pålitlig tjänst med minimal driftstopp och kristallklar bild i HD och 4K-kvalitet.
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">💬</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Kompatibel med Smart TV, Android, IOS, PC</h3>
            <p className="text-gray-600">
              Stöder alla populära enheter och plattformar för maximal flexibilitet.
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Svensk kundsupport</h3>
            <p className="text-gray-600">
              Vårt svenska supportteam finns alltid tillgängligt via WhatsApp för snabb hjälp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials/Reviews Section Component
function TestimonialsSection() {
  // Mock testimonials - you'll replace with your actual WhatsApp screenshots
  const testimonials = [
    {
      id: 1,
      name: 'Anna L.',
      location: 'Stockholm',
      rating: 5,
      comment: 'Fantastisk kvalitet på alla kanaler! Installationen var super enkel och supporten hjälpte mig direkt via WhatsApp. Rekommenderar starkt!',
      image: '/images/testimonials/review1.jpg' // Your WhatsApp screenshot
    },
    {
      id: 2,
      name: 'Marcus K.',
      location: 'Göteborg',
      rating: 5,
      comment: 'Bästa IPTV-tjänsten jag använt! 4K-kvalitet och aldrig några problem med buffring. Värt varje krona!',
      image: '/images/testimonials/review2.jpg' // Your WhatsApp screenshot
    },
    {
      id: 3,
      name: 'Elena S.',
      location: 'Malmö',
      rating: 5,
      comment: 'Perfekt för oss som bor utomlands men vill ha svenska kanaler. Fungerar felfritt och snabb aktivering!',
      image: '/images/testimonials/review3.jpg' // Your WhatsApp screenshot
    },
    {
      id: 4,
      name: 'David H.',
      location: 'Uppsala',
      rating: 5,
      comment: 'Otroligt brett utbud av kanaler och filmer. Mina barn älskar alla barnkanaler och jag får se all sport!',
      image: '/images/testimonials/review4.jpg' // Your WhatsApp screenshot
    },
    {
      id: 5,
      name: 'Sofia M.',
      location: 'Västerås',
      rating: 5,
      comment: 'Snabb och professionell service. Aktivering inom 30 minuter precis som lovat. Toppenkvalitet!',
      image: '/images/testimonials/review5.jpg' // Your WhatsApp screenshot
    },
    {
      id: 6,
      name: 'Johan P.',
      location: 'Linköping',
      rating: 5,
      comment: 'Använt tjänsten i 2 år nu. Aldrig några problem och ständiga uppdateringar med nya kanaler. Mycket nöjd!',
      image: '/images/testimonials/review6.jpg' // Your WhatsApp screenshot
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 rounded-full px-6 py-2 mb-6">
            <span className="text-yellow-600 font-semibold text-sm">VAD VÅRA KUNDER SÄGER</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Över 10,000+ Nöjda Kunder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Se vad våra kunder säger om IPTV Sverige och varför de väljer oss för sin streaming
          </p>
          
          {/* Rating Overview */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">5.0 av 5</span>
            <span className="text-gray-500">(baserat på 10,000+ recensioner)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* WhatsApp Style Header */}
              <div className="flex items-center space-x-3 mb-4 p-3 bg-green-50 rounded-xl border border-green-200">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-xs text-green-600 font-medium">WhatsApp</span>
                </div>
              </div>

              {/* Stars Rating */}
              <div className="flex text-yellow-400 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.comment}"
              </p>

              {/* Verified Badge */}
              <div className="flex items-center space-x-2 text-green-600">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-xs font-medium">Verifierad kund</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bli Nästa Nöjda Kund!
            </h3>
            <p className="text-gray-600 mb-6">
              Gå med i tusentals nöjda kunder som streamar med IPTV Sverige
            </p>
            <Link
              href="/pricing"
              className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 inline-block"
            >
              Starta Din Streaming Idag
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section Component (using your FAQ styles)
function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: 'Vad är IPTV?',
      answer: 'Internet Protocol Television (IPTV) gör det möjligt att streama TV-kanaler via internet utan behov av kabel eller satellit. Du får tillgång till tusentals kanaler i HD och 4K-kvalitet direkt via din internetanslutning.'
    },
    {
      question: 'Vilka enheter kan jag använda?',
      answer: 'Vår IPTV-tjänst fungerar på Smart TV (Samsung, LG, Sony), Android TV Box, MAG Box, iOS/Android enheter, Windows/Mac datorer och alla enheter som stöder IPTV-appar.'
    },
    {
      question: 'Hur snabbt aktiveras mitt abonnemang?',
      answer: 'Ditt IPTV-abonnemang aktiveras inom 30 minuter efter bekräftad betalning. Du får dina inloggningsuppgifter via WhatsApp och kan börja titta omedelbart.'
    },
    {
      question: 'Fungerar IPTV utomlands?',
      answer: 'Ja, vår IPTV-tjänst fungerar globalt där du har stabil internetanslutning. Perfekt för resor eller om du bor utomlands men vill ha svenska kanaler.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            mest populära frågorna
          </h2>
          <p className="text-xl text-gray-600">
            Få svar på de vanligaste frågorna om IPTV Sverige
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden ${
              openFAQ === index 
                ? 'border-yellow-400 shadow-xl transform scale-[1.02]' 
                : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
            }`}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left transition-all duration-300 focus:outline-none group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      openFAQ === index 
                        ? 'bg-yellow-400 text-black' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }`}>
                      {index + 1}
                    </div>
                    
                    <h3 className={`text-lg font-bold transition-all duration-300 ${
                      openFAQ === index 
                        ? 'text-gray-900' 
                        : 'text-gray-800 group-hover:text-blue-600'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFAQ === index 
                      ? 'bg-yellow-100 text-yellow-600' 
                      : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                  }`}>
                    <ChevronDownIcon 
                      className={`h-5 w-5 transition-transform duration-300 ${
                        openFAQ === index ? 'transform rotate-180' : ''
                      }`} 
                    />
                  </div>
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${
                openFAQ === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-8 pb-8">
                  <div className="w-full h-px bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent mb-6"></div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-yellow-400">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-base font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 text-green-500">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">Var detta hjälpsamt?</span>
                    </div>
                    
                    <a
                      href="https://wa.me/447999944835?text=Hej! Jag har en följdfråga om IPTV-tjänsterna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-2"
                    >
                      <ChatBubbleLeftRightIcon className="h-4 w-4" />
                      <span>Ställ Fråga</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All FAQs Link */}
        <div className="text-center mt-12">
          <Link 
            href="/faq" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg"
          >
            Se alla vanliga frågor →
          </Link>
        </div>
      </div>
    </section>
  );
}

// Blog Section Component
function BlogSection({ posts }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Senaste Nyheterna & Guider
          </h2>
          <p className="text-xl text-gray-600">
            Håll dig uppdaterad med de senaste IPTV-nyheterna och användbara guider
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-4xl">📺</span>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Läs mer →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact CTA Section
function ContactCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Redo att Börja Streama?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Få omedelbar tillgång till 50 000+ kanaler och 66 000+ filmer & serier. 
          Beställ nu och börja streama inom 30 minuter!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pricing"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
          >
            🛒 Beställ Nu
          </Link>
          <a
            href="https://wa.me/447999944835?text=Hej!%20Jag%20är%20intresserad%20av%20IPTV%20Sverige"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 hover:scale-105"
          >
            💬 WhatsApp Support
          </a>
        </div>
      </div>
    </section>
  );
}

// Main Homepage Component
export default function HomePage() {
  const posts = mockPosts;
  const menuItems = mockMenuItems;

  return (
    <div className="min-h-screen">
      <Header menuItems={menuItems} />
      
      <main>
        <HeroSection />
        <BrandsCarousel />
        <FeaturesSection />
        
        <Suspense fallback={
          <div className="py-20 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto"></div>
          </div>
        }>
          <PricingPreviewSection />
        </Suspense>
        
        <TestimonialsSection />
        <FAQSection />
        <BlogSection posts={posts} />
        <ContactCTASection />
      </main>
      
      <Footer />
    </div>
  );
}