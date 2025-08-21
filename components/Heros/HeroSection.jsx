// // components/hero/HeroSection.js - Simplified version without Framer Motion
// 'use client';

// import Link from 'next/link';
// import { CheckIcon } from '@heroicons/react/24/outline';

// const HeroSection = () => {
//   const features = [
//     'Över 50 000+ kanaler',
//     'Sport, filmer och serier i 4K',
//     'Snabb leverans och setup',
//     'Stabila servrar 99.9% uptime',
//     'Support dygnet runt',
//     'Testa gratis i 24 timmar'
//   ];

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 z-0">
//         <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 pb-7">
//           {/* Animated Background Elements */}
//           <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
//           <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-36">
//         <div className="max-w-4xl mx-auto">
//           {/* Main Heading - SEO Optimized for Sweden */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
//             Köp IPTV Sverige – Premium{' '}
//             <span className="text-yellow-400 relative">
//               Streaming
//               <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 animate-pulse"></div>
//             </span>{' '}
//             med{' '}
//             <span className="text-yellow-400">50 000+</span> Kanaler
//           </h1>

//           {/* Description */}
//           <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Upptäck den ultimata IPTV-upplevelsen i Sverige med över 50 000 kanaler, 
//             inklusive sport, filmer och serier i 4K-kvalitet. Snabb leverans, stabila 
//             servrar och support dygnet runt. <strong className="text-yellow-400">Testa gratis i 24 timmar!</strong>
//           </p>

//           {/* Features Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <CheckIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
//                 <span className="text-white text-sm md:text-base font-medium">
//                   {feature}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
//             <Link
//               href="/pricing"
//               className="group relative overflow-hidden bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px] hover:bg-yellow-500"
//             >
//               <span className="relative z-10">GÅ TILL PRISER</span>
//             </Link>

//             <Link
//               href="/free-trial"
//               className="group flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-white hover:text-black min-w-[200px]"
//             >
//               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//               </svg>
//               <span>TESTA GRATIS</span>
//             </Link>
//           </div>

//           {/* Trust Indicators */}
//           <div className="flex items-center justify-center space-x-8 text-gray-300 flex-wrap gap-4 mb-11">
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="text-sm">99.9% Uptime</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="text-sm">24/7 Support</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="text-sm">Instant Setup</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="text-sm">Svensk Support</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// components/hero/HeroSection.js - Simplified version without Framer Motion
'use client';

import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  const features = [
    'Över 50 000+ kanaler',
    'Sport, filmer och serier i 4K',
    'Snabb leverans och setup',
    'Stabila servrar 99.9% uptime',
    'Support dygnet runt',
    'Testa gratis i 24 timmar'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-bg.webp')`,
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-blue-800/90"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-36">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading - SEO Optimized for Sweden */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Köp IPTV Sverige – Premium{' '}
            <span className="text-yellow-400 relative">
              Streaming
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 animate-pulse"></div>
            </span>{' '}
            med{' '}
            <span className="text-yellow-400">50 000+</span> Kanaler
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Upptäck den ultimata IPTV-upplevelsen i Sverige med över 50 000 kanaler, 
            inklusive sport, filmer och serier i 4K-kvalitet. Snabb leverans, stabila 
            servrar och support dygnet runt. <strong className="text-yellow-400">Testa gratis i 24 timmar!</strong>
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-white text-sm md:text-base font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link
              href="/pricing"
              className="group relative overflow-hidden bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px] hover:bg-yellow-500"
            >
              <span className="relative z-10">GÅ TILL PRISER</span>
            </Link>

            <Link
              href="/free-trial"
              className="group flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-white hover:text-black min-w-[200px]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>TESTA GRATIS</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 text-gray-300 flex-wrap gap-4 mb-11">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Instant Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Svensk Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;