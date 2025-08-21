// app/checkout/page.js - Clean Server Component
import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CheckoutForm from '@/components/checkout/CheckoutForm';

export const metadata = {
  title: 'Slutför din IPTV beställning - Säker checkout',
  description: 'Slutför din IPTV Sverige beställning snabbt och säkert via WhatsApp. Omedelbar aktivering och svensk support.',
};

function LoadingCheckout() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Laddar checkout...</p>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Suspense fallback={<LoadingCheckout />}>
        <CheckoutForm />
      </Suspense>
      
      <Footer />
    </div>
  );
}