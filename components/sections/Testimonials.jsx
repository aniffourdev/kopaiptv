import Link from 'next/link';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Anna L.',
      location: 'Stockholm',
      rating: 5,
      comment: 'Fantastisk kvalitet på alla kanaler! Installationen var super enkel och supporten hjälpte mig direkt via WhatsApp. Rekommenderar starkt!',
      image: '/images/testimonials/review1.jpg'
    },
    {
      id: 2,
      name: 'Marcus K.',
      location: 'Göteborg',
      rating: 5,
      comment: 'Bästa IPTV-tjänsten jag använt! 4K-kvalitet och aldrig några problem med buffring. Värt varje krona!',
      image: '/images/testimonials/review2.jpg'
    },
    {
      id: 3,
      name: 'Elena S.',
      location: 'Malmö',
      rating: 5,
      comment: 'Perfekt för oss som bor utomlands men vill ha svenska kanaler. Fungerar felfritt och snabb aktivering!',
      image: '/images/testimonials/review3.jpg'
    },
    {
      id: 4,
      name: 'David H.',
      location: 'Uppsala',
      rating: 5,
      comment: 'Otroligt brett utbud av kanaler och filmer. Mina barn älskar alla barnkanaler och jag får se all sport!',
      image: '/images/testimonials/review4.jpg'
    },
    {
      id: 5,
      name: 'Sofia M.',
      location: 'Västerås',
      rating: 5,
      comment: 'Snabb och professionell service. Aktivering inom 30 minuter precis som lovat. Toppenkvalitet!',
      image: '/images/testimonials/review5.jpg'
    },
    {
      id: 6,
      name: 'Johan P.',
      location: 'Linköping',
      rating: 5,
      comment: 'Använt tjänsten i 2 år nu. Aldrig några problem och ständiga uppdateringar med nya kanaler. Mycket nöjd!',
      image: '/images/testimonials/review6.jpg'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
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

              <div className="flex text-yellow-400 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center space-x-2 text-green-600">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-xs font-medium">Verifierad kund</span>
              </div>
            </div>
          ))}
        </div>

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