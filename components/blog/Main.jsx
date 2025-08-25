"use client"

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrendingUp, FiGrid, FiList } from 'react-icons/fi';
import BlogGrid from './utils/BlogGrid.jsx';
import BlogFilter from './utils/BlogFilter.jsx';
import { fetchBlogData, fetchAuthors, fetchCategories, fetchTags } from './utils/data.js';
import { FaSortAmountDown } from "react-icons/fa";

const Main = () => {
  const [filters, setFilters] = useState({
    search: '',
    datePeriod: '',
    tags: [],
    author: '',
    category: ''
  });
  
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState('grid');
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [availableAuthors, setAvailableAuthors] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);

  // Fetch blogs from Strapi API
  useEffect(() => {
    const loadBlogs = async () => {
      console.log('🚀 Main component: Starting to load blogs...');
      setIsLoading(true);
      
      try {
        const [blogData, authors, categories, tags] = await Promise.all([
          fetchBlogData(),
          fetchAuthors(),
          fetchCategories(),
          fetchTags()
        ]);
        
        console.log('✅ Main component: Blogs loaded successfully:', blogData);
        console.log('✅ Main component: Authors loaded:', authors);
        console.log('✅ Main component: Categories loaded:', categories);
        console.log('✅ Main component: Tags loaded:', tags);
        
        setBlogs(blogData);
        setAvailableAuthors(authors);
        setAvailableCategories(categories);
        setAvailableTags(tags);
      } catch (error) {
        console.error('❌ Main component: Error loading data:', error);
        setBlogs([]);
        setAvailableAuthors([]);
        setAvailableCategories([]);
        setAvailableTags([]);
      } finally {
        setIsLoading(false);
        console.log('🏁 Main component: Loading finished');
      }
    };
    
    loadBlogs();
  }, []);

  // Filter and sort blogs
  const filteredAndSortedBlogs = useMemo(() => {
    console.log('🔄 Filtering blogs. Current blogs:', blogs);
    let filtered = blogs;

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.description.toLowerCase().includes(searchTerm) ||
        blog.author.toLowerCase().includes(searchTerm) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
      console.log(`🔍 Search filter applied for "${filters.search}":`, filtered.length, 'results');
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(blog => blog.category === filters.category);
      console.log(`📂 Category filter applied for "${filters.category}":`, filtered.length, 'results');
    }

    // Apply author filter
    if (filters.author) {
      filtered = filtered.filter(blog => blog.author === filters.author);
      console.log(`👤 Author filter applied for "${filters.author}":`, filtered.length, 'results');
    }

    // Apply tags filter
    if (filters.tags.length > 0) {
      filtered = filtered.filter(blog =>
        filters.tags.some(tag => blog.tags.includes(tag))
      );
      console.log(`🏷️ Tags filter applied for`, filters.tags, ':', filtered.length, 'results');
    }

    // Apply date filter
    if (filters.datePeriod) {
      const now = new Date();
      let cutoffDate = new Date();
      
      switch (filters.datePeriod) {
        case 'Last 7 days':
          cutoffDate.setDate(now.getDate() - 7);
          break;
        case 'Last 30 days':
          cutoffDate.setDate(now.getDate() - 30);
          break;
        case 'Last 3 months':
          cutoffDate.setMonth(now.getMonth() - 3);
          break;
        case 'Last year':
          cutoffDate.setFullYear(now.getFullYear() - 1);
          break;
        default:
          cutoffDate = new Date(0);
      }
      
      filtered = filtered.filter(blog => new Date(blog.date) >= cutoffDate);
      console.log(`📅 Date filter applied for "${filters.datePeriod}":`, filtered.length, 'results');
    }

    // Sort blogs
    switch (sortBy) {
      case 'date':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'author':
        filtered.sort((a, b) => a.author.localeCompare(b.author));
        break;
      case 'readTime':
        filtered.sort((a, b) => {
          const aTime = parseInt(a.readTime.split(' ')[0]);
          const bTime = parseInt(b.readTime.split(' ')[0]);
          return aTime - bTime;
        });
        break;
      default:
        break;
    }

    console.log('📊 Final filtered and sorted blogs:', filtered);
    return filtered;
  }, [filters, sortBy, blogs]);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  const controlsVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0B111D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-light text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Blog
          </motion.h1>
          <motion.p 
            className="text-xl text-[#717892] max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover insights, case studies, and growth strategies from the world of creator partnerships and influencer marketing.
          </motion.p>

          {/* Blog Stats */}
          <motion.div 
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-8 mt-8"
          >
            <div className="flex items-center gap-2 text-[#717892]">
              <FiTrendingUp className="text-[#45D1FF]" />
              <span className="text-sm font-light">
                <span className="font-semibold bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text">{blogs.length}</span> Articles
              </span>
            </div>
            <div className="h-4 w-px bg-[#717892]"></div>
            <div className="flex items-center gap-2 text-[#717892]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-gradient-to-r from-[#45D1FF] to-[#167BCC] rounded-full"
              ></motion.div>
              <span className="text-sm font-light">Updated Weekly</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Filter Component */}
        <div className="mb-8">
          <BlogFilter 
            onFilterChange={setFilters} 
            filters={filters}
            availableAuthors={availableAuthors}
            availableCategories={availableCategories}
            availableTags={availableTags}
          />
        </div>

        {/* Controls Bar */}
        <motion.div
          variants={controlsVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between mb-8 bg-gradient-to-br from-white/5 to-[#0B111D] border border-[#717892] rounded-lg p-4"
        >
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#717892] font-light">
              <span className="font-semibold text-white">{filteredAndSortedBlogs.length}</span> 
              {filteredAndSortedBlogs.length === 1 ? ' article' : ' articles'} found
            </span>
            
            {/* Results indicator */}
            <AnimatePresence>
              {filteredAndSortedBlogs.length !== blogs.length && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-xs px-3 py-1 bg-gradient-to-r from-[#45D1FF] to-[#167BCC] text-[#0B111D] rounded-full font-medium"
                >
                  Filtered
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <FaSortAmountDown className="text-[#717892]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm bg-[#0A1930] border border-[#717892] text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#45D1FF] focus:border-[#45D1FF] transition-all"
              >
                <option value="date">Latest</option>
                <option value="title">Title A-Z</option>
                <option value="author">Author</option>
                <option value="readTime">Read Time</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-[#0A1930] border border-[#717892] rounded-lg p-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-[#45D1FF] to-[#167BCC] text-[#0B111D] shadow-sm' 
                    : 'text-[#717892] hover:text-white'
                }`}
              >
                <FiGrid className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'list' 
                    ? 'bg-gradient-to-r from-[#45D1FF] to-[#167BCC] text-[#0B111D] shadow-sm' 
                    : 'text-[#717892] hover:text-white'
                }`}
              >
                <FiList className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center gap-2 text-[#717892]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-[#45D1FF] border-t-transparent rounded-full"
              ></motion.div>
              <span className="font-light">Loading blogs from Strapi...</span>
            </div>
          </motion.div>
        )}

        {/* No Blogs State */}
        {!isLoading && blogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 bg-gradient-to-br from-white/5 to-[#0B111D] border border-[#717892] rounded-lg"
          >
            <div className="text-[#717892]">
              <p className="text-lg mb-2 text-white font-light">No blogs found</p>
              <p className="text-sm font-light">Check your Strapi API connection or add some blog posts.</p>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        {!isLoading && blogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <BlogGrid blogs={filteredAndSortedBlogs} isLoading={isLoading} />
          </motion.div>
        )}

        {/* Load More Button */}
        <AnimatePresence>
          {!isLoading && filteredAndSortedBlogs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(69, 209, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-br from-white/5 to-[#0B111D] border border-[#717892] text-white rounded-lg hover:border-[#45D1FF] hover:shadow-md transition-all duration-200 font-light relative overflow-hidden group"
              >
                <span className="relative z-10">Load More Articles</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#45D1FF]/10 to-[#167BCC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Main;