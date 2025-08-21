// components/layout/Footer.js - Fixed Footer with Newsletter
'use client';

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [newsletterData, setNewsletterData] = useState({
    name: '',
    email: ''
  });

  const currentYear = new Date().getFullYear();

  const handleNewsletterChange = (e) => {
    const { name, value } = e.target;
    setNewsletterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    
    if (!newsletterData.name || !newsletterData.email) {
      alert('Vänligen fyll i både namn och e-postadress.');
      return;
    }

    const whatsappMessage = `📧 *NYHETSBREV PRENUMERATION* 📧

👤 Namn: ${newsletterData.name}
📧 E-post: ${newsletterData.email}

Jag vill prenumerera på ert nyhetsbrev för att få:
• Exklusiva IPTV-erbjudanden
• Tekniska tips och guider  
• Information om nya kanaler
• Specialpriser och rabatter

Tack! 🙏`;

    const whatsappUrl = `https://wa.me/447999944835?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setNewsletterData({ name: '', email: '' });
  };

  const footerLinks = {
    'Tjänster': [
      { name: 'IPTV Abonnemang', href: '/pricing' },
      { name: 'Gratis Provperiod', href: '/free-trial' },
      { name: 'Premium Kanaler', href: '/channels' },
      { name: 'Sport Streaming', href: '/sports' },
    ],
    'Support': [
      { name: 'Vanliga Frågor', href: '/faq' },
      { name: 'Installationsguide', href: '/setup-guide' },
      { name: 'Kontakta Oss', href: '/contact' },
      { name: 'Live Chat', href: '/support' },
    ],
    'Företag': [
      { name: 'Om Oss', href: '/about' },
      { name: 'Integritetspolicy', href: '/privacy' },
      { name: 'Användarvillkor', href: '/terms' },
      { name: 'Återförsäljare', href: '/reseller' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            📧 Håll dig uppdaterad med IPTV-nyheter
          </h3>
          <p className="text-lg text-black/80 mb-8">
            Få exklusiva erbjudanden, tekniska tips och information om nya kanaler direkt till din inkorg
          </p>
          
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={newsletterData.name}
                  onChange={handleNewsletterChange}
                  placeholder="Ditt namn"
                  className="w-full px-4 py-3 border-2 border-black/20 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all bg-white/90 backdrop-blur-sm font-medium text-gray-900"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={newsletterData.email}
                  onChange={handleNewsletterChange}
                  placeholder="Din e-postadress"
                  className="w-full px-4 py-3 border-2 border-black/20 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all bg-white/90 backdrop-blur-sm font-medium text-gray-900"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                🚀 PRENUMERERA GRATIS
              </button>
            </form>
            
            <p className="text-sm text-black/70 mt-4">
              ✅ Gratis • ✅ Avsluta när som helst • ✅ Ingen spam
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-400 text-black px-3 py-2 rounded-lg font-bold text-xl">
                K
              </div>
              <span className="ml-2 text-xl font-bold">Köpa IPTV</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sveriges ledande IPTV-leverantör med över 50 000 kanaler. 
              Premium streaming i 4K-kvalitet med 24/7 support.
            </p>
            
            {/* Quick Contact */}
            <div className="space-y-3">
              <a 
                href="https://wa.me/447999944835" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.251"/>
                  </svg>
                </div>
                <span className="font-medium">WhatsApp Support</span>
              </a>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.53 3.5-3.5V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                  </svg>
                </div>
                <span className="font-medium">support@kopaiptv.se</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-6 text-yellow-400">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Köpa IPTV Sverige. Alla rättigheter förbehållna.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Integritetspolicy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Användarvillkor
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;