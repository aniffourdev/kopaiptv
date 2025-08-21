import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/Heros/HeroSection';
import BrandsCarousel from '@/components/BrandsCarousel';
import Footer from '@/components/layout/Footer';
import { getPosts, getMenuItems } from '@/lib/wordpress';

// Import all the new components
import PricingPreviewSection from '@/components/sections/PricingPreviewSection';
import FeaturesSection from '@/components/sections/Features';
import TestimonialsSection from '../components/sections/Testimonials';
import FAQSection from '@/components/sections/FAQSection';
import BlogSection from '@/components/sections/Blog';
import ContactCTASection from '@/components/sections/Contact';

// Server Component for fetching WordPress data
async function getWordPressData() {
  try {
    const [posts, menuData] = await Promise.all([
      getPosts('per_page=6&_embed'),
      getMenuItems('primary')
    ]);

    // Transform WordPress menu items to match Header expectations
    const transformedMenuItems = menuData.items?.map(item => ({
      title: item.title || item.post_title, // WordPress menu API variations
      url: item.url || `/${item.slug}`, // Handle both formats
      slug: item.slug || item.object_slug
    })) || [
      // Fallback menu items matching your WordPress menu
      { title: 'Startsida', url: '/' },
      { title: 'Abonnemang', url: '/pricing' },
      { title: 'Testa Gratis', url: '/free-trial' },
      { title: 'Vanliga Frågor', url: '/faq' },
      { title: 'Om oss', url: '/about' },
      { title: 'Kontakt', url: '/contact' }
    ];

    return {
      posts: posts || [],
      menuItems: transformedMenuItems
    };
  } catch (error) {
    console.error('Error fetching WordPress data:', error);
    // Return fallback data matching your menu structure
    return {
      posts: [],
      menuItems: [
        { title: 'Startsida', url: '/' },
        { title: 'Abonnemang', url: '/pricing' },
        { title: 'Testa Gratis', url: '/free-trial' },
        { title: 'Vanliga Frågor', url: '/faq' },
        { title: 'Om oss', url: '/about' },
        { title: 'Kontakt', url: '/contact' }
      ]
    };
  }
}

// Loading component
function LoadingFallback() {
  return (
    <div className="py-20 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto"></div>
    </div>
  );
}

// Main Homepage Component (Server Component)
export default async function HomePage() {
  // Fetch data on the server
  const { posts, menuItems } = await getWordPressData();

  return (
    <div className="min-h-screen">
      {/* Header now gets properly formatted menuItems */}
      <Header menuItems={menuItems} />
      
      <main>
        <HeroSection />
        <BrandsCarousel />
        <FeaturesSection />
        
        <Suspense fallback={<LoadingFallback />}>
          <PricingPreviewSection />
        </Suspense>
        
        <TestimonialsSection />
        <FAQSection />
        
        <Suspense fallback={<LoadingFallback />}>
          <BlogSection posts={posts} />
        </Suspense>
        
        <ContactCTASection />
      </main>
      
      <Footer />
    </div>
  );
}

// Generate metadata
export async function generateMetadata() {
  return {
    title: 'Köp IPTV Sverige - Premium Streaming med 50 000+ Kanaler',
    description: 'Upptäck den ultimata IPTV-upplevelsen i Sverige med över 50 000 kanaler, inklusive sport, filmer och serier i 4K-kvalitet. Testa gratis i 24 timmar!',
    openGraph: {
      title: 'Köp IPTV Sverige - Premium Streaming med 50 000+ Kanaler',
      description: 'Upptäck den ultimata IPTV-upplevelsen i Sverige. Över 50 000 kanaler i 4K-kvalitet. Testa gratis!',
      images: ['/og-image.jpg'],
    },
  };
}