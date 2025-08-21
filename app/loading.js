// app/loading.js - Logo Loading Screen (Server Component Compatible)
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative text-center">
        {/* Logo Container with Pulse Animation */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-4 border-yellow-400/30 animate-ping"></div>
          
          {/* Middle Ring */}
          <div className="absolute inset-2 w-28 h-28 mx-auto rounded-full border-2 border-blue-400/40 animate-pulse"></div>
          
          {/* Logo Container */}
          <div className="relative w-32 h-32 mx-auto bg-white/10 backdrop-blur-sm rounded-full p-6 shadow-2xl animate-bounce">
            <Image
              src="/images/loading/loading.png"
              alt="IPTV Sverige Loading"
              width={80}
              height={80}
              className="w-full h-full object-contain animate-pulse"
              priority
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white animate-pulse">
            IPTV Sverige
          </h2>
          
          <p className="text-lg text-gray-300 animate-pulse">
            Laddar din streaming-upplevelse...
          </p>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>

          {/* Loading Bar */}
          <div className="w-64 h-1 bg-white/20 rounded-full mx-auto mt-6 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}