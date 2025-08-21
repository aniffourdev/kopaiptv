'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function FAQSection() {
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