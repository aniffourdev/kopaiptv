// lib/wordpress.js - Updated for Next.js 15 App Router
const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

if (!WORDPRESS_API_URL) {
  throw new Error('NEXT_PUBLIC_WORDPRESS_API_URL environment variable is not defined');
}

/**
 * Generic API fetcher with error handling and caching
 */
export async function fetchAPI(endpoint, options = {}) {
  const url = `${WORDPRESS_API_URL}/wp-json/wp/v2/${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      // App Router caching - cache for 1 hour, revalidate every 30 minutes
      next: {
        revalidate: 1800, // 30 minutes
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Fetch navigation menu items
 */
export async function getMenuItems(menuLocation = 'primary') {
  try {
    // Try WP REST API Menus plugin first
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp-api-menus/v2/menus/${menuLocation}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );
    
    if (response.ok) {
      const menu = await response.json();
      return {
        items: menu.items || [],
        name: menu.name,
      };
    }

    // Fallback: fetch pages and create basic menu
    console.warn('Menu plugin not found, using pages as fallback');
    const pages = await getPages();
    const menuItems = pages
      .filter(page => page.status === 'publish')
      .slice(0, 6) // Limit to 6 items
      .map(page => ({
        ID: page.id,
        title: page.title.rendered,
        url: `/${page.slug}`,
        slug: page.slug,
      }));

    return { items: menuItems };
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return { items: [] };
  }
}

/**
 * Fetch all posts with caching
 */
export async function getPosts(params = '') {
  const defaultParams = 'per_page=10&_embed&status=publish';
  const queryParams = params || defaultParams;
  
  try {
    return await fetchAPI(`posts?${queryParams}`);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

/**
 * Fetch posts by category
 */
export async function getPostsByCategory(categorySlug, params = '') {
  try {
    const categories = await fetchAPI(`categories?slug=${categorySlug}`);
    
    if (categories.length === 0) {
      return [];
    }
    
    const categoryId = categories[0].id;
    return await fetchAPI(`posts?categories=${categoryId}&${params}&_embed`);
  } catch (error) {
    console.error(`Error fetching posts for category ${categorySlug}:`, error);
    return [];
  }
}

/**
 * Fetch single post by slug
 */
export async function getPostBySlug(slug) {
  try {
    const posts = await fetchAPI(`posts?slug=${slug}&_embed`);
    return posts[0] || null;
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch all pages
 */
export async function getPages(params = '') {
  const defaultParams = 'per_page=100&status=publish';
  const queryParams = params || defaultParams;
  
  try {
    return await fetchAPI(`pages?${queryParams}`);
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

/**
 * Fetch single page by slug
 */
export async function getPageBySlug(slug) {
  try {
    const pages = await fetchAPI(`pages?slug=${slug}`);
    return pages[0] || null;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch categories
 */
export async function getCategories() {
  try {
    return await fetchAPI('categories?per_page=100');
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

/**
 * Search content across posts and pages
 */
export async function searchContent(query, params = '') {
  if (!query) return [];
  
  try {
    const [posts, pages] = await Promise.all([
      fetchAPI(`posts?search=${encodeURIComponent(query)}&${params}`),
      fetchAPI(`pages?search=${encodeURIComponent(query)}&${params}`)
    ]);
    
    return [...posts, ...pages];
  } catch (error) {
    console.error('Error searching content:', error);
    return [];
  }
}

/**
 * Helper function to extract featured image URL
 */
export function getFeaturedImageUrl(post, size = 'medium_large') {
  if (!post._embedded?.['wp:featuredmedia']?.[0]) {
    return null;
  }
  
  const media = post._embedded['wp:featuredmedia'][0];
  return media.media_details?.sizes?.[size]?.source_url || media.source_url;
}

/**
 * Helper function to get clean excerpt
 */
export function getCleanExcerpt(post, maxLength = 150) {
  const excerpt = post.excerpt?.rendered || '';
  const cleanText = excerpt.replace(/<[^>]*>/g, '').trim();
  
  if (cleanText.length <= maxLength) {
    return cleanText;
  }
  
  return cleanText.substring(0, maxLength).trim() + '...';
}

/**
 * Helper function to format WordPress date for Swedish locale
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}