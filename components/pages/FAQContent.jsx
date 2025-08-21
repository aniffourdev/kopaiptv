// components/faq/FAQContent.js - Premium FAQ Content
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  TvIcon,
  GlobeAltIcon,
  CogIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function FAQContent() {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default

  const faqCategories = [
    {
      icon: <QuestionMarkCircleIcon className="h-6 w-6" />,
      title: 'Allmänt om IPTV',
      color: 'bg-blue-500'
    },
    {
      icon: <TvIcon className="h-6 w-6" />,
      title: 'Enheter & Installation',
      color: 'bg-green-500'
    },
    {
      icon: <CurrencyDollarIcon className="h-6 w-6" />,
      title: 'Priser & Betalning',
      color: 'bg-yellow-500'
    },
    {
      icon: <CogIcon className="h-6 w-6" />,
      title: 'Teknisk Support',
      color: 'bg-purple-500'
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: 'Säkerhet & Legalitet',
      color: 'bg-red-500'
    }
  ];

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
    },
    {
      question: 'Är IPTV lagligt i Sverige?',
      answer: 'Ja, att använda IPTV-tjänster är fullt lagligt i Sverige. Vi följer alla svenska lagar och föreskrifter för digital TV-distribution och innehållsleverans.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <QuestionMarkCircleIcon className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold text-sm">VANLIGA FRÅGOR</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Frequently Asked
            <br />
            <span className="text-yellow-400">Questions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            Få svar på de vanligaste frågorna om IPTV Sverige. 
            <strong className="text-yellow-400"> Expert svar från vårt svenska supportteam.</strong>
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-gray-300 text-sm">Svensk Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">10K+</div>
              <div className="text-gray-300 text-sm">Nöjda Kunder</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">30min</div>
              <div className="text-gray-300 text-sm">Aktivering</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  FREQUENTLY ASKED QUESTIONS ABOUT IPTV
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  De mest populära frågorna från våra kunder
                </p>

                {/* Contact Support */}
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="text-center">
                    <ChatBubbleLeftRightIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-800 mb-2">
                      Behöver du hjälp?
                    </h4>
                    <p className="text-sm text-green-700 mb-4">
                      Vår svenska support finns tillgänglig 24/7
                    </p>
                    <a
                      href="https://wa.me/447999944835?text=Hej! Jag har en fråga om IPTV-tjänsterna som inte finns i FAQ."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors inline-block"
                    >
                      💬 Chatta med Support
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
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
                          {/* Question Number Badge */}
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
                    
                    {/* Animated Answer Section */}
                    <div className={`transition-all duration-500 ease-in-out ${
                      openFAQ === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      <div className="px-8 pb-8">
                        {/* Separator Line */}
                        <div className="w-full h-px bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent mb-6"></div>
                        
                        {/* Answer Content */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-yellow-400">
                          <div className="flex items-start space-x-4">
                            {/* Answer Icon */}
                            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                              </svg>
                            </div>
                            
                            {/* Answer Text */}
                            <div className="flex-1">
                              <p className="text-gray-700 leading-relaxed text-base font-medium">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Help Section */}
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
                            href="https://wa.me/447999944835?text=Hej! Jag har en följdfråga om: {faq.question}"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-2"
                          >
                            <ChatBubbleLeftRightIcon className="h-4 w-4" />
                            <span>Följdfrågor?</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-4xl mb-4">👑</div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Redo att Prova Premium IPTV?
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Starta din 24-timmars gratis provperiod idag och upptäck varför vi är Sveriges mest populära IPTV-tjänst
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/free-trial"
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                🎁 Starta Gratis Test
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-black hover:text-white transition-all duration-300"
              >
                Se Alla Priser
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}