import Link from 'next/link';
import { formatDate } from '@/lib/wordpress';

export default function BlogSection({ posts }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Senaste Nyheterna & Guider
          </h2>
          <p className="text-xl text-gray-600">
            Håll dig uppdaterad med de senaste IPTV-nyheterna och användbara guider
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-4xl">📺</span>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {formatDate(post.date)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </h3>
                <div 
                  className="text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Läs mer →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
