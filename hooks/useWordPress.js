// hooks/useWordPress.js - Updated for Next.js 15 App Router
'use client';

import { useState, useEffect } from 'react';
import useSWR from 'swr';

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// Generic fetcher for SWR
const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

/**
 * Hook for menu items (Client-side)
 */
export const useMenuItems = (menuLocation = 'primary') => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try WP REST API Menus plugin first
        const response = await fetch(`${WORDPRESS_API_URL}/wp-json/wp-api-menus/v2/menus/${menuLocation}`);
        
        if (response.ok) {
          const menu = await response.json();
          setMenuItems(menu.items || []);
        } else {
          // Fallback to default menu
          const defaultMenu = [
            { title: 'Startsida', url: '/' },
            { title: 'Abonnemang', url: '/pricing' },
            { title: 'Testa Gratis', url: '/free-trial' },
            { title: 'Vanliga Frågor', url: '/faq' },
            { title: 'Om oss', url: '/about' },
            { title: 'Kontakt', url: '/contact' },
          ];
          setMenuItems(defaultMenu);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching menu items:', err);
        
        // Set default menu on error
        const defaultMenu = [
          { title: 'Startsida', url: '/' },
          { title: 'Abonnemang', url: '/pricing' },
          { title: 'Kontakt', url: '/contact' },
        ];
        setMenuItems(defaultMenu);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [menuLocation]);

  return { menuItems, loading, error };
};

/**
 * Hook for posts with SWR (Client-side)
 */
export const usePosts = (params = '') => {
  const { data, error, mutate, isLoading } = useSWR(
    `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?${params}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 300000, // 5 minutes
    }
  );

  return {
    posts: data || [],
    loading: isLoading,
    error,
    mutate,
  };
};

/**
 * Hook for single post (Client-side)
 */
export const usePost = (slug) => {
  const { data, error, isLoading } = useSWR(
    slug ? `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed` : null,
    fetcher
  );

  return {
    post: data?.[0] || null,
    loading: isLoading,
    error,
  };
};

/**
 * Hook for pages (Client-side)
 */
export const usePages = () => {
  const { data, error, isLoading } = useSWR(
    `${WORDPRESS_API_URL}/wp-json/wp/v2/pages?per_page=100`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    pages: data || [],
    loading: isLoading,
    error,
  };
};

/**
 * Hook for search (Client-side)
 */
export const useSearch = (query) => {
  const { data, error, isLoading } = useSWR(
    query ? `${WORDPRESS_API_URL}/wp-json/wp/v2/search?search=${encodeURIComponent(query)}&per_page=20` : null,
    fetcher
  );

  return {
    results: data || [],
    loading: isLoading,
    error,
  };
};

/**
 * Hook for categories (Client-side)
 */
export const useCategories = () => {
  const { data, error, isLoading } = useSWR(
    `${WORDPRESS_API_URL}/wp-json/wp/v2/categories?per_page=100`,
    fetcher
  );

  return {
    categories: data || [],
    loading: isLoading,
    error,
  };
};

/**
 * Hook for WordPress site info
 */
export const useSiteInfo = () => {
  const { data, error, isLoading } = useSWR(
    `${WORDPRESS_API_URL}/wp-json`,
    fetcher,
    {
      revalidateOnFocus: false,
      refreshInterval: 3600000, // 1 hour
    }
  );

  return {
    siteInfo: data || {},
    loading: isLoading,
    error,
  };
};