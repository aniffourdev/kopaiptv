// components/pricing/PricingSection.js - With Navigation Tabs
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('1-device');

  // 1 ENHET pricing plans (your current ones)
  const singleDevicePlans = [
    {
      id: 'month-1',
      duration: '1 Månad',
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
      duration: '3 Månader',
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
      duration: '6 Månader',
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
      duration: '12 Månader',
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
      duration: '24 Månader',
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

  // 2 ENHETER pricing plans (from your image)
  const doubleDevicePlans = [
    {
      id: 'dual-month-1',
      duration: '1 Månad',
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
      duration: '3 Månader',
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
      duration: '6 Månader',
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
      duration: '12 Månader',
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
      duration: '24 Månader',
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

  const currentPlans = activeTab === '1-device' ? singleDevicePlans : doubleDevicePlans;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Välj Ditt IPTV Abonnemang
          </h2>
          <p className="text-xl text-gray-600">
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {currentPlans.map((plan) => (
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
                  {plan.duration}
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
                    <CheckIcon className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href={`/checkout?plan=${plan.id}&duration=${encodeURIComponent(plan.duration)}&price=${plan.price}&devices=${activeTab === '2-device' ? '2' : '1'}`}
                className={`block w-full text-center py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 ${
                  plan.popular || plan.bestValue
                    ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                    : 'bg-yellow-400 text-black hover:bg-yellow-500'
                }`}
              >
                KÖP NU
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Vad Ingår i Alla Abonnemang?
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📺</span>
                </div>
                <div className="font-semibold text-gray-900">50 000+ Kanaler</div>
                <div className="text-sm text-gray-600">HD & 4K kvalitet</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎬</span>
                </div>
                <div className="font-semibold text-gray-900">66 000+ VOD</div>
                <div className="text-sm text-gray-600">Filmer & Serier</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💬</span>
                </div>
                <div className="font-semibold text-gray-900">24/7 Support</div>
                <div className="text-sm text-gray-600">Svensk support</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="font-semibold text-gray-900">
                  {activeTab === '2-device' ? '2 Enheter' : 'Alla Enheter'}
                </div>
                <div className="text-sm text-gray-600">iOS, Android, Smart TV</div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <p className="text-sm text-gray-700 text-center">
                <strong className="text-yellow-700">📞 Beställning via WhatsApp:</strong> Efter du har fyllt i dina uppgifter kommer du att omdirigeras till WhatsApp för säker och snabb beställning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;