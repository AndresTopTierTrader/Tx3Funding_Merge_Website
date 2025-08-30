"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiClock, FiUser, FiTag } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

export default function BlogDetailClient({ blog: initialBlog }) {
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Set the blog data when the component mounts
  useEffect(() => {
    if (initialBlog) {
      setBlog(initialBlog);
      setIsLoading(false);
      console.log('✅ Client: Blog data received and set');
    }
  }, [initialBlog]);

  // Loading state - show while waiting for data from server
  if (isLoading || !blog) {
    return (
      <div className="min-h-screen bg-[#0B111D] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-[#45D1FF] border-t-transparent rounded-full mx-auto mb-4"
          ></motion.div>
          <p className="text-[#717892] font-light">Loading blog post...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B111D]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-white/5 to-[#0B111D] border-b border-[#717892] sticky top-0 z-10 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-[#717892] hover:text-[#45D1FF] transition-colors font-light"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
      </motion.header>

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          {/* Hero Image */}
          {blog.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-[#717892]/30"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full object-contain"
              />
            </motion.div>
          )}

          {/* Blog Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#45D1FF]/20 to-[#167BCC]/20 text-[#45D1FF] rounded-full text-sm font-light border border-[#45D1FF]/30"
                  >
                    <FiTag className="w-3 h-3" />
                    {tag}
                  </motion.span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-textPrimary leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-[#717892] text-sm font-light">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4 text-textPrimary" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4 text-textPrimary" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4 text-textPrimary" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </motion.header>

          {/* Divider */}
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="border-[#717892] mb-8"
          />

          {/* Blog Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg max-w-none
              prose-headings:font-light prose-headings:text-textPrimary
              prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-[#9AA2BF] prose-p:leading-relaxed prose-p:font-light
              prose-a:text-[#45D1FF] prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[#167BCC]
              prose-strong:text-[#B4BCDA] prose-strong:font-medium
              prose-code:bg-[#0A1930] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-[#45D1FF]
              prose-pre:bg-[#0A1930] prose-pre:text-[#717892] prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:border prose-pre:border-[#717892]/30
              prose-blockquote:border-l-4 prose-blockquote:border-[#45D1FF] prose-blockquote:bg-gradient-to-r prose-blockquote:from-[#45D1FF]/10 prose-blockquote:to-transparent prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded-r
              prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6
              prose-li:text-[#9AA2BF] prose-li:mb-1 prose-li:font-light
              prose-table:border-collapse prose-th:border prose-th:border-[#717892] prose-th:bg-[#0A1930] prose-th:px-4 prose-th:py-2 prose-th:text-textPrimary
              prose-td:border prose-td:border-[#717892] prose-td:px-4 prose-td:py-2 prose-td:text-[#9AA2BF]
              prose-img:rounded-lg prose-img:shadow-md prose-img:border prose-img:border-[#717892]/30"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                // Custom components for better styling
                h1: ({ children }) => (
                  <h1 className="text-3xl font-light text-textPrimary mt-8 mb-4 first:mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-light text-textPrimary mt-8 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-light text-textPrimary mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-[#9AA2BF] leading-relaxed mb-4 font-light">
                    {children}
                  </p>
                ),
                a: ({ href, children }) => (
                  <a 
                    href={href}
                    className="text-[#45D1FF] hover:text-[#167BCC] hover:underline transition-colors duration-200 font-light"
                    target={href?.startsWith('http') ? '_blank' : '_self'}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="text-[#B4BCDA] font-medium">
                    {children}
                  </strong>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-[#45D1FF] bg-gradient-to-r from-[#45D1FF]/10 to-transparent px-4 py-2 rounded-r my-6">
                    {children}
                  </blockquote>
                ),
                code: ({ inline, children }) => {
                  if (inline) {
                    return (
                      <code className="bg-[#0A1930] px-2 py-1 rounded text-sm font-mono text-[#45D1FF] border border-[#717892]/30">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className="block bg-[#0A1930] text-[#717892] p-4 rounded-lg overflow-x-auto border border-[#717892]/30">
                      {children}
                    </code>
                  );
                },
                table: ({ children }) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-[#717892] rounded-lg overflow-hidden">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="border border-[#717892] bg-[#0A1930] px-4 py-2 text-textPrimary font-light text-left">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-[#717892] px-4 py-2 text-[#9AA2BF] font-light">
                    {children}
                  </td>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-1 my-4 ml-6 list-disc">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="space-y-1 my-4 ml-6 list-decimal">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-[#9AA2BF] font-light">
                    {children}
                  </li>
                )
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </motion.div>
        </article>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-[#717892]"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm text-[#717892] font-light">
              Published on {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-white/5 to-[#0B111D] border border-[#717892] text-textPrimary rounded-lg hover:border-[#45D1FF] hover:shadow-lg hover:shadow-[#45D1FF]/25 transition-all font-light relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FiArrowLeft className="w-4 h-4" />
                Back to Blog
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#45D1FF]/10 to-[#167BCC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </button>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}