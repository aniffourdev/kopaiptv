// app/error.js - Error Boundary
'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Något gick fel
        </h2>
        <p className="text-gray-600 mb-6">
          Vi ber om ursäkt för besväret. Försök igen eller kontakta vår support.
        </p>
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Försök igen
        </button>
      </div>
    </div>
  );
}