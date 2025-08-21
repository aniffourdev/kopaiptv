// components/free-trial/FreeTrialForm.js - Premium Free Trial Form
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  PlayIcon,
  CheckCircleIcon,
  ClockIcon,
  TvIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  StarIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function FreeTrialForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    deviceType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    return formData.name.trim() !== '' && 
           formData.email.trim() !== '' && 
           formData.email.includes('@');
  };

  const generateWhatsAppMessage = () => {
    const message = `🎯 *GRATIS IPTV PROVPERIOD - 24 TIMMAR* 🎯

👤 *KUNDUPPGIFTER:*
📝 Namn: ${formData.name}
📧 E-post: ${formData.email}
📱 Enhetstyp: ${formData.deviceType || 'Ej specificerad'}

💬 *MEDDELANDE:*
${formData.message || 'Ingen specifik förfrågan'}

---
🎁 *GRATIS TEST INKLUDERAR:*
• 50 000+ TV-kanaler i HD/4K
• 66 000+ Filmer & Serier
• 24 timmars full åtkomst
• Alla premium funktioner
• Support på svenska

⏰ *AKTIVERING:*
Jag vill starta min 24-timmars gratis provperiod omedelbart!

Tack för denna fantastiska möjlighet! 🙏`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Vänligen fyll i namn och giltig e-postadress.');
      return;
    }

    const whatsappMessage = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/447999944835?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const benefits = [
    {
      icon: <TvIcon className="h-8 w-8" />,
      title: '50 000+ Kanaler',
      description: 'Fullständig tillgång till alla våra premium kanaler i HD och 4K kvalitet'
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: '66 000+ VOD',
      description: 'Obegränsat bibliotek med filmer, serier och dokumentärer från hela världen'
    },
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: '24 Timmars Test',
      description: 'Full access i 24 timmar utan begränsningar eller dolda avgifter'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: 'Ingen Bindning',
      description: 'Testa helt gratis - ingen kreditkort eller förskottsbetalning krävs'
    }
  ];

  const deviceTypes = [
    'Smart TV (Samsung, LG, Sony)',
    'Android TV Box',
    'iOS/iPhone/iPad',
    'Android mobil/tablet',
    'Windows/Mac dator',
    'Amazon Fire TV',
    'MAG Box',
    'Annat/vet inte'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center mt-16 bg-yellow-400/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <PlayIcon className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold text-sm">GRATIS PROVPERIOD</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Testa IPTV Sverige
            <br />
            <span className="text-yellow-400">Gratis i 24 Timmar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Upptäck varför tusentals svenskar väljer vår IPTV-tjänst. 
            <strong className="text-yellow-400"> Fullständig tillgång till alla 50 000+ kanaler</strong> utan kostnad eller förpliktelser.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-yellow-400">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-1">{benefit.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Gratis 24-timmars IPTV provperiod
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Prova vår premium IPTV-tjänst utan risk i 24 hela timmar. 
                  Fyll i formuläret så aktiverar vi din testperiod omedelbart via WhatsApp.
                </p>
              </div>

              {/* What You Get */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <StarIcon className="h-6 w-6 text-yellow-500 mr-2" />
                  Vad du får under provperioden:
                </h3>
                <div className="space-y-3">
                  {[
                    'Fullständig tillgång till 50 000+ TV-kanaler',
                    '66 000+ filmer och serier i VOD-biblioteket',
                    '4K Ultra HD och HD streaming-kvalitet',
                    'Alla svenska kanaler + internationella',
                    'Sport, nyheter, barn, underhållning',
                    'Fungerar på alla enheter (TV, mobil, dator)',
                    'Ingen kreditkort eller förskottsbetalning',
                    '24/7 teknisk support på svenska'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🚀 Så här fungerar det:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span className="text-gray-700">Fyll i formuläret med dina uppgifter</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span className="text-gray-700">Klicka för att kontakta oss via WhatsApp</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span className="text-gray-700">Få dina inloggningsuppgifter inom 30 minuter</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                    <span className="text-gray-700">Börja streama omedelbart!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <PlayIcon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Starta Din Gratis Test
                </h3>
                <p className="text-gray-600">
                  Fyll i formuläret nedan för omedelbar aktivering
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Namn *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                    placeholder="Ange ditt fullständiga namn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-postadress *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                    placeholder="din@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Enhetstyp
                  </label>
                  <select
                    name="deviceType"
                    value={formData.deviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                  >
                    <option value="">Välj din huvudenhet</option>
                    {deviceTypes.map((device, index) => (
                      <option key={index} value={device}>
                        {device}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Meddelande (valfritt)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Har du några specifika frågor eller önskemål för din provperiod?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!validateForm()}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                    validateForm()
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ChatBubbleLeftRightIcon className="h-6 w-6 inline-block mr-2" />
                  STARTA GRATIS TEST
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Aktivering via WhatsApp • Ingen kreditkort krävs
                  </p>
                </div>
              </form>

              {/* Security Badge */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center justify-center space-x-2">
                  <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-800">
                    100% säker och gratis - ingen risk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vad Säger Våra Kunder?
            </h2>
            <p className="text-lg text-gray-600">
              Över 10 000+ nöjda kunder i Sverige
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Erik Andersson',
                location: 'Stockholm',
                rating: 5,
                comment: 'Fantastisk bildkvalitet och alla svenska kanaler fungerar perfekt. Bästa IPTV-tjänsten jag har testat!'
              },
              {
                name: 'Maria Larsson',
                location: 'Göteborg',
                rating: 5,
                comment: 'Superenkelt att komma igång och supporten är otroligt hjälpsam. Rekommenderar verkligen!'
              },
              {
                name: 'Johan Nilsson',
                location: 'Malmö',
                rating: 5,
                comment: 'Gratis testet övertygade mig direkt. Så många kanaler och filmer, helt otroligt utbud!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Redo att Börja Din Gratis Provperiod?
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Gå med i tusentals nöjda svenska IPTV-användare idag
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#form"
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Starta Gratis Test Nu
            </a>
            <Link
              href="/pricing"
              className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-black hover:text-white transition-all duration-300"
            >
              Se Alla Priser
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}