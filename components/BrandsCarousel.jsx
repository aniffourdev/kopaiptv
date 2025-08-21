// components/brands/BrandsCarousel.js - EXACT copy of uploaded design
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const BrandsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Your actual brand images from the brands directory
  const brandImages = [
    '4.png',
    '6.png',
    '512x512bb.jpg',
    'all.png',
    'appletv.png',
    'discoverplus.png',
    'disney.png',
    'ff.png',
    'hbo.png',
    'hbomax.png',
    'more.png',
    'netflix.png',
    'one.png',
    'plutc.png',
    'prime.png',
    'sky.png',
    'sport.png',
    'svtbarn.png',
    'trex.png',
    'unnamed (2).png',
    'ur.png'
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brandImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [brandImages.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title - EXACT same as your image */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Direktsänd TV & On Demand
          </h2>
        </div>

        {/* Icons Row - EXACT same layout as your image */}
        <div className="flex justify-center items-center space-x-4 overflow-hidden">
          <div 
            className="flex space-x-4 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 112}px)`,
              width: `${brandImages.length * 112}px`
            }}
          >
            {/* Duplicate for infinite scroll */}
            {[...brandImages, ...brandImages].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-24 flex items-center justify-center"
              >
                <Image
                  src={`/images/brands/${brand}`}
                  alt={`${brand.replace('.png', '').replace('-', ' ')}`}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;