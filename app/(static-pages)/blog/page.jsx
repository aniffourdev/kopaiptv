// app/blog/page.js - Blog Listing Page
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getPosts, getMenuItems, getCategories } from '@/lib/wordpress';
import { formatDate, getFeaturedImageUrl, getCleanExcerpt } from '@/lib/wordpress';

export const metadata = {
  title: 'IPTV Blog Sverige - Guider, Tips och Nyheter',
  description: 'Läs våra expertguider om IPTV, streaming-tips och de senaste nyheterna inom TV och underhållning i Sverige.',
};

async function BlogContent() {
  const [{ menuItems }, posts, categories] = await Promise.all([
    getMenuItems('primary'),
    getPosts('per_page=12&_embed'),
    getCategories()
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header menuItems={menuItems} />
      
      {/* Blog Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IPTV Blog Sverige
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Expertguider, tips och de senaste nyheterna inom IPTV och streaming för svenska användare.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {/* Featured Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                    {getFeaturedImageUrl(post) && (
                      <img
                        src={getFeaturedImageUrl(post)}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-blue-600 mb-2 font-medium">
                      {formatDate(post.date)}
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                      <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {getCleanExcerpt(post, 120)}
                    </p>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      Läs mer →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Inga artiklar hittades.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogContent;