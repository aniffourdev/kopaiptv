// app/blog/[slug]/page.js - Single Blog Post
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getPostBySlug, getMenuItems, formatDate } from '@/lib/wordpress';

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Artikel inte hittad',
    };
  }

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
    },
  };
}

export default async function BlogPost({ params }) {
  const [post, { menuItems }] = await Promise.all([
    getPostBySlug(params.slug),
    getMenuItems('primary')
  ]);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header menuItems={menuItems} />
      
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-8">
            <div className="text-sm text-blue-600 mb-4 font-medium">
              {formatDate(post.date)}
            </div>
            <h1 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            {post.excerpt.rendered && (
              <div 
                className="text-xl text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            )}
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-blue prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-800"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Publicerad: {formatDate(post.date)}
                </p>
                {post.modified !== post.date && (
                  <p className="text-sm text-gray-500">
                    Uppdaterad: {formatDate(post.modified)}
                  </p>
                )}
              </div>
              <a
                href="/blog"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Tillbaka till blog
              </a>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  );
}