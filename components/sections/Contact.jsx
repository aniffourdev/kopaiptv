import Link from 'next/link';

export default function ContactCTASection() {
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
