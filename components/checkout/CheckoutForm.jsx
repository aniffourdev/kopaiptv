// components/checkout/CheckoutForm.js - Fixed Client Component
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  ShieldCheckIcon, 
  ChatBubbleLeftRightIcon,
  ArrowLeftIcon 
} from '@heroicons/react/24/outline';

export default function CheckoutForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    lineType: 'new',
    appName: '',
    orderNote: ''
  });

  const [selectedPlan, setSelectedPlan] = useState({
    id: '',
    duration: '',
    price: ''
  });

  useEffect(() => {
    setSelectedPlan({
      id: searchParams.get('plan') || '',
      duration: searchParams.get('duration') || '',
      price: searchParams.get('price') || ''
    });
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
    return requiredFields.every(field => formData[field].trim() !== '');
  };

  const generateWhatsAppMessage = () => {
    const message = `🔥 *IPTV SVERIGE - NY BESTÄLLNING* 🔥

📋 *KUNDUPPGIFTER:*
👤 Namn: ${formData.firstName} ${formData.lastName}
📧 E-post: ${formData.email}
📱 Telefon: ${formData.phone}

📦 *BESTÄLLNINGSUPPGIFTER:*
⏰ Abonnemang: ${selectedPlan.duration}
💰 Pris: ${selectedPlan.price} kr
🔄 Typ av linje: ${formData.lineType === 'new' ? 'Ny linje' : 'Förnya min linje'}
📱 IPTV App: ${formData.appName || 'Ej specificerad'}

📝 *ANTECKNING:*
${formData.orderNote || 'Ingen anteckning'}

---
✅ *VAD INGÅR:*
• 50 000+ TV-kanaler i HD/4K
• 66 000+ Filmer & Serier  
• 99,9% serverdrifttid
• 24/7 Svensk support
• Alla enheter stöds

💳 *BETALNING:*
Jag vill slutföra denna beställning och få betalningsinstruktioner.

Tack för din snabba service! 🙏`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Vänligen fyll i alla obligatoriska fält.');
      return;
    }

    const whatsappMessage = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/447999944835?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const planDetails = {
    'month-1': { duration: '1 Månad', price: '155', savings: null },
    'month-3': { duration: '3 Månader', price: '260', savings: '205' },
    'month-6': { duration: '6 Månader', price: '365', savings: '565' },
    'month-12': { duration: '12 Månader', price: '625', savings: '1235' },
    'month-24': { duration: '24 Månader', price: '1195', savings: '2525' }
  };

  const currentPlan = planDetails[selectedPlan.id] || selectedPlan;

  return (
    <div>
      {/* Hero Section with Gradient Background */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link 
              href="/pricing" 
              className="inline-flex items-center text-white hover:text-yellow-400 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Tillbaka till priser
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-16">
              Slutför Din Beställning
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Fyll i dina uppgifter nedan så skickar vi dig direkt till WhatsApp för säker 
              och snabb beställning. Aktivering sker inom 30 minuter.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Säker beställning via WhatsApp
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Aktivering inom 30 min
              </div>
              <div className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                24/7 Svensk support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Beställningsuppgifter
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Personuppgifter
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Förnamn *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Ange ditt förnamn"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Efternamn *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Ange ditt efternamn"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-postadress *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="din@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+46 70 123 45 67"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Ytterligare Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Typ av linje
                        </label>
                        <select
                          name="lineType"
                          value={formData.lineType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                          <option value="new">Ny linje</option>
                          <option value="renew">Förnya min linje</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          IPTV App namn (valfritt)
                        </label>
                        <input
                          type="text"
                          name="appName"
                          value={formData.appName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="t.ex. Smart IPTV, TiviMate, IPTV Smarters"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Anteckning till beställning (valfritt)
                        </label>
                        <textarea
                          name="orderNote"
                          value={formData.orderNote}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                          placeholder="Speciella önskemål eller frågor..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={!validateForm()}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                        validateForm()
                          ? 'bg-green-600 text-white hover:bg-green-700 hover:scale-105'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ChatBubbleLeftRightIcon className="h-6 w-6 inline-block mr-2" />
                      Slutför beställning via WhatsApp
                    </button>
                    
                    <p className="text-sm text-gray-600 text-center mt-3">
                      Du kommer att omdirigeras till WhatsApp för säker beställning
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Beställningssammanfattning
                </h3>

                {/* Selected Plan */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">
                      {currentPlan.duration || selectedPlan.duration || 'Ej vald'}
                    </span>
                    <span className="text-2xl font-bold text-yellow-600">
                      {currentPlan.price || selectedPlan.price || '0'} kr
                    </span>
                  </div>
                  
                  {currentPlan.savings && (
                    <div className="text-sm text-green-600 font-medium">
                      Du sparar: {currentPlan.savings} kr
                    </div>
                  )}
                </div>

                {/* What's Included */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">Vad som ingår:</h4>
                  <div className="space-y-2">
                    {[
                      '50 000+ TV-kanaler i HD/4K',
                      '66 000+ Filmer & Serier',
                      '99,9% serverdrifttid',
                      'Stöd för alla enheter',
                      '24/7 teknisk support på svenska',
                      'GRATIS uppdateringar'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security & Support */}
                <div className="border-t border-gray-200 pt-4 space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <ShieldCheckIcon className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-gray-600">Säker beställning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">24/7 Svensk support</span>
                  </div>
                </div>

                {/* WhatsApp Info */}
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl mb-2">💬</div>
                    <div className="text-sm font-medium text-green-800 mb-1">
                      Beställning via WhatsApp
                    </div>
                    <div className="text-xs text-green-600">
                      Snabb och säker service med omedelbar bekräftelse
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}