import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Sidan kunde inte hittas
        </h2>
        <p className="text-gray-600 mb-6">
          Sidan du letar efter existerar inte eller har flyttats.
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
        >
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
}