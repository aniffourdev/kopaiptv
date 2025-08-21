// app/pricing/page.js - Complete Pricing Page
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PricingSection from '@/components/pricing/PricingSection';

export const metadata = {
  title: 'IPTV Priser Sverige - Välj Ditt Perfekta Abonnemang | Från 155kr',
  description: 'Jämför våra IPTV-abonnemang för Sverige. Från 155 kr för 1 månad med 50 000+ kanaler. Engångsbetalning, ingen bindningstid, svensk support.',
  keywords: ['IPTV priser Sverige', 'IPTV abonnemang', 'köp IPTV', 'IPTV Sverige billigt'],
};

// Trust indicators component
function TrustIndicators() {
  const indicators = [
    {
      icon: '🔒',
      title: 'Säker Betalning',
      description: 'All kommunikation sker via krypterad WhatsApp'
    },
    {
      icon: '⚡',
      title: 'Omedelbar Aktivering',
      description: 'Din tjänst aktiveras inom 30 minuter'
    },
    {
      icon: '💬',
      title: 'Svensk Support',
      description: '24/7 support på svenska via WhatsApp'
    },
    {
      icon: '📱',
      title: 'Alla Enheter',
      description: 'Fungerar på Smart TV, mobil, tablet, dator'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Varför Välja Oss?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vi erbjuder den mest kompletta IPTV-lösningen i Sverige med fokus på kvalitet och kundservice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <span className="text-2xl">{indicator.icon}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{indicator.title}</h3>
              <p className="text-sm text-gray-600">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: 'Hur fungerar beställningsprocessen?',
      answer: 'Du väljer ditt abonnemang, fyller i dina uppgifter och blir omdirigerad till WhatsApp där vi slutför beställningen säkert och snabbt.'
    },
    {
      question: 'Hur snabbt aktiveras min tjänst?',
      answer: 'Din IPTV-tjänst aktiveras inom 30 minuter efter bekräftad betalning. Du får alla inloggningsuppgifter via WhatsApp.'
    },
    {
      question: 'Vilka betalningsmetoder accepterar ni?',
      answer: 'Vi accepterar Swish, banköverföring och andra säkra betalningsmetoder. All kommunikation sker via WhatsApp för din säkerhet.'
    },
    {
      question: 'Kan jag använda tjänsten på flera enheter?',
      answer: 'Ja, alla våra abonnemang stöder flera samtidiga anslutningar så du kan titta på olika enheter i hemmet.'
    },
    {
      question: 'Vad händer om jag har tekniska problem?',
      answer: 'Vi erbjuder 24/7 teknisk support på svenska via WhatsApp. Vårt supportteam hjälper dig snabbt med alla frågor.'
    },
    {
      question: 'Finns det någon bindningstid?',
      answer: 'Nej, det finns ingen bindningstid. Du betalar för den period du väljer och kan avsluta när som helst.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vanliga Frågor
          </h2>
          <p className="text-lg text-gray-600">
            Svar på de mest ställda frågorna om våra IPTV-tjänster
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Har du fler frågor?
            </h3>
            <p className="text-blue-700 mb-4">
              Kontakta vår svenska support direkt via WhatsApp
            </p>
            <a
              href="https://wa.me/447999944835?text=Hej! Jag har en fråga om IPTV-tjänsterna."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              💬 Chatta med support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Channel preview section
function ChannelPreviewSection() {
  const channelCategories = [
    {
      category: 'Svenska Kanaler',
      count: '200+',
      examples: ['SVT1', 'SVT2', 'TV3', 'TV4', 'Kanal 5', 'SVT Play', 'C More'],
      color: 'bg-blue-500'
    },
    {
      category: 'Sport',
      count: '500+',
      examples: ['Viasat Sport', 'Eurosport', 'Discovery Sport', 'C More Sport', 'Premier League', 'NHL'],
      color: 'bg-green-500'
    },
    {
      category: 'Filmer & Serier',
      count: '66 000+',
      examples: ['Netflix innehåll', 'HBO', 'Disney+', 'Amazon Prime', 'Senaste Filmer', 'Klassiker'],
      color: 'bg-purple-500'
    },
    {
      category: 'Internationella',
      count: '49 000+',
      examples: ['CNN', 'BBC', 'Sky', 'RTL', 'Fox', 'Discovery', 'National Geographic'],
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            50 000+ Premium Kanaler
          </h2>
          <p className="text-lg text-gray-600">
            Upptäck vårt omfattande utbud av kanaler från hela världen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channelCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <span className="text-white font-bold text-lg">{category.count.charAt(0)}</span>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2">{category.category}</h3>
              <div className="text-2xl font-bold text-gray-900 mb-3">{category.count}</div>
              
              <div className="space-y-1">
                {category.examples.map((example, i) => (
                  <div key={i} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-16 mb-6">
            IPTV Priser Sverige
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Välj det abonnemang som passar dig bäst. Engångsbetalning utan bindningstid. 
            Omedelbar aktivering via WhatsApp.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Ingen bindningstid
            </div>
            <div className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Aktivering inom 30 min
            </div>
            <div className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              24/7 Svensk support
            </div>
            <div className="flex items-center text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Säker WhatsApp beställning
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Channel Preview */}
      <ChannelPreviewSection />

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </div>
  );
}