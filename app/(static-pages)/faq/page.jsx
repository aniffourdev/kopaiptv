// app/faq/page.js - Professional FAQ Page
import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FAQContent from '@/components/pages/FAQContent';

export const metadata = {
  title: 'Vanliga Frågor om IPTV Sverige - Svar på Allt Du Behöver Veta',
  description: 'Få svar på de vanligaste frågorna om IPTV i Sverige. Installation, enheter, priser, support och mer. Expert svar från vårt svenska team.',
  keywords: ['IPTV frågor Sverige', 'IPTV support', 'IPTV installation', 'IPTV enheter', 'IPTV legal Sverige'],
};

function LoadingFAQ() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Laddar vanliga frågor...</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Suspense fallback={<LoadingFAQ />}>
        <FAQContent />
      </Suspense>
      
      <Footer />
    </div>
  );
}