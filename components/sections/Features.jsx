// components/sections/FeaturesSection.js
export default function FeaturesSection() {
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