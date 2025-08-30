// [slug]/page.jsx - Server Component
import { notFound } from 'next/navigation';
import { getBlogBySlug } from "@/components/blog/utils/data";
import BlogDetailClient from '@/components/blog/utils/BlogDetailClient';

// Environment variable - adjust according to your setup
const ENVIRONMENT_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
const ENVIRONMENT = process.env.NODE_ENV || 'production';

// Generate metadata for the blog post
export async function generateMetadata({ params }) {
  try {
    const { slug } = params;
    const blog = await getBlogBySlug(slug);
    
    if (!blog) {
      return {
        title: 'Blog Not Found',
        description: 'The requested blog post could not be found.'
      };
    }

    return {
      metadataBase: new URL(ENVIRONMENT_URL),
      title: `${blog.title} - Tx3 Funding`,
      description: blog.description || blog.content?.substring(0, 160) || "Join Tx3 Funding, the leading proprietary trading firm offering fast funding for Forex and Futures traders. We're looking for skilled traders to fund. Start your trading journey and unlock new opportunities today!",
      keywords: "proprietary trading, get funded, forex funding, futures funding, trading evaluation, experienced traders, trading journey, financial markets, trading opportunities, prop firm, cryptocurrency trading, crypto funding",
      language: "en",
      subject: "Proprietary Trading Firm Services",
      coverage: "Global",
      robots: "index, follow",
      author: blog.author || "Tx3 Funding",
      publisher: "Tx3 Funding LLC",
      openGraph: {
        type: "article",
        title: `${blog.title} - Tx3 Funding`,
        description: blog.description || blog.content?.substring(0, 160) || "Seeking skilled traders for fast funding at Tx3 Funding. Trade Forex or Futures with our capital and explore unlimited financial markets opportunities.",
        site_name: "Tx3 Funding",
        url: `${ENVIRONMENT_URL}/blog/${slug}`,
        images: blog.image ? [
          {
            url: blog.image,
            width: 1200,
            height: 630,
            alt: blog.title,
          }
        ] : undefined,
        publishedTime: blog.date,
        authors: [blog.author || "Tx3 Funding"],
        tags: blog.tags || [],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${blog.title} - Tx3 Funding`,
        description: blog.description || blog.content?.substring(0, 160),
        images: blog.image ? [blog.image] : undefined,
      },
      alternates: {
        canonical: `${ENVIRONMENT_URL}/blog/${slug}`,
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post - Tx3 Funding',
      description: 'Read our latest insights on proprietary trading, forex, and futures markets.'
    };
  }
}

// Server Component - handles data fetching and SSR
export default async function BlogDetailPage({ params }) {
  try {
    const { slug } = params;
    
    if (!slug) {
      notFound();
    }

    console.log('🚀 Server: Loading blog with slug:', slug);
    
    // Fetch blog data on the server
    const blog = await getBlogBySlug(slug);
    
    if (!blog) {
      console.log('❌ Server: Blog not found for slug:', slug);
      notFound();
    }

    console.log('✅ Server: Blog loaded successfully:', blog.title);

    // Pass the blog data to the client component
    return <BlogDetailClient blog={blog} />;
    
  } catch (error) {
    console.error('❌ Server: Error loading blog:', error);
    
    // Show error details only in development
    const showErrorDetails = ENVIRONMENT === 'development';
    
    return (
      <div className="min-h-screen bg-[#0B111D] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-light text-textPrimary mb-4">
              Something went wrong
            </h1>
            <p className="text-[#717892] mb-6">
              We encountered an error while loading the blog post. Please try again later.
            </p>
            {showErrorDetails && (
              <div className="bg-[#0A1930] border border-red-500/30 rounded-lg p-4 mb-6 text-left">
                <p className="text-red-400 text-sm font-mono break-all">
                  {error.message}
                </p>
                {error.stack && (
                  <pre className="text-red-300 text-xs mt-2 overflow-x-auto">
                    {error.stack}
                  </pre>
                )}
              </div>
            )}
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#45D1FF] to-[#167BCC] text-[#0B111D] rounded-lg hover:shadow-lg hover:shadow-[#45D1FF]/25 transition-all font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </a>
          </div>
        </div>
      </div>
    );
  }
}