// app/free-trial/page.js - Premium Free Trial Page
import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FreeTrialForm from '@/components/pages/FreeTrialForm';

export const metadata = {
  title: 'Gratis IPTV Provperiod 24 Timmar - Testa Premium Streaming | Köpa IPTV Sverige',
  description: 'Testa vår premium IPTV-tjänst gratis i 24 timmar. Över 50 000 kanaler, 4K kvalitet, alla enheter. Ingen bindningstid, aktivering inom 30 min.',
  keywords: ['gratis IPTV test', 'IPTV provperiod Sverige', 'gratis streaming test', 'IPTV gratis 24 timmar'],
};

function LoadingTrial() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Laddar gratis test...</p>
      </div>
    </div>
  );
}

export default function FreeTrialPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Suspense fallback={<LoadingTrial />}>
        <FreeTrialForm />
      </Suspense>
      
      <Footer />
    </div>
  );
}