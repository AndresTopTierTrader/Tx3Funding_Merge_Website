"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiFilter, 
  FiX, 
  FiCalendar,
  FiUser,
  FiTag,
  FiFolder
} from 'react-icons/fi';

const BlogFilter = ({ 
  onFilterChange, 
  filters, 
  availableAuthors = [], 
  availableCategories = [], 
  availableTags = [] 
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchChange = (e) => {
    onFilterChange({
      ...filters,
      search: e.target.value
    });
  };

  const handleDatePeriodChange = (period) => {
    onFilterChange({
      ...filters,
      datePeriod: period
    });
  };

  const handleAuthorChange = (author) => {
    onFilterChange({
      ...filters,
      author: author
    });
  };

  const handleCategoryChange = (category) => {
    onFilterChange({
      ...filters,
      category: category
    });
  };

  const handleTagToggle = (tag) => {
    const currentTags = filters.tags || [];
    const updatedTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    
    onFilterChange({
      ...filters,
      tags: updatedTags
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      search: '',
      datePeriod: '',
      tags: [],
      author: '',
      category: ''
    });
  };

  const hasActiveFilters = filters.search || 
                          filters.datePeriod || 
                          filters.author || 
                          filters.category || 
                          (filters.tags && filters.tags.length > 0);

  const datePeriods = ['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last year'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-8"
    >
      {/* Search Bar */}
      <div className="relative mb-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#717892] w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles..."
            value={filters.search}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 bg-gray-300 border border-[#717892] rounded-lg focus:ring-2 focus:ring-[#45D1FF] focus:border-[#45D1FF] transition-all duration-200 text-white placeholder-[#717892] font-light"
          />
        </div>
      </div>

      {/* Filter Toggle Button */}
      <div className="flex items-center justify-between mb-4">
        <motion.button
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 15px rgba(69, 209, 255, 0.2)"
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 font-light ${
            isFilterOpen 
              ? 'bg-gradient-to-r from-[#45D1FF]/20 to-[#167BCC]/20 border-[#45D1FF] text-[#45D1FF]'
              : 'bg-gradient-to-br from-white/5 to-[#0B111D] border-[#717892] text-white hover:border-[#45D1FF]'
          }`}
        >
          <FiFilter className="w-4 h-4" />
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="inline-flex items-center justify-center w-5 h-5 bg-gradient-to-r from-[#45D1FF] to-[#167BCC] text-[#0B111D] text-xs rounded-full font-medium">
              {(filters.tags?.length || 0) + 
               (filters.author ? 1 : 0) + 
               (filters.category ? 1 : 0) + 
               (filters.datePeriod ? 1 : 0)}
            </span>
          )}
        </motion.button>

        {hasActiveFilters && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={clearAllFilters}
            className="inline-flex items-center gap-1 text-sm text-[#717892] hover:text-[#45D1FF] transition-colors font-light"
          >
            <FiX className="w-4 h-4" />
            Clear all
          </motion.button>
        )}
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white/5 to-[#0B111D] border border-[#717892] rounded-lg p-6 overflow-hidden backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Date Period Filter */}
              <div>
                <label className="flex items-center gap-2 text-sm font-light text-white mb-3">
                  <FiCalendar className="w-4 h-4 text-[#45D1FF]" />
                  Date Period
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => handleDatePeriodChange('')}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 font-light ${
                      !filters.datePeriod 
                        ? 'bg-gradient-to-r from-[#45D1FF]/20 to-[#167BCC]/20 text-[#45D1FF] border border-[#45D1FF]/50'
                        : 'text-[#717892] hover:text-white hover:bg-[#0A1930] border border-transparent'
                    }`}
                  >
                    All time
                  </button>
                  {datePeriods.map((period) => (
                    <button
                      key={period}
                      onClick={() => handleDatePeriodChange(period)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 font-light ${
                        filters.datePeriod === period 
                          ? 'bg-gradient-to-r from-[#45D1FF]/20 to-[#167BCC]/20 text-[#45D1FF] border border-[#45D1FF]/50'
                          : 'text-[#717892] hover:text-white hover:bg-[#0A1930] border border-transparent'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* Author Filter */}
              <div>
                <label className="flex items-center gap-2 text-sm font-light text-white mb-3">
                  <FiUser className="w-4 h-4 text-[#45D1FF]" />
                  Author
                </label>
                <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                  <button
                    onClick={() => handleAuthorChange('')}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 font-light ${
                      !filters.author 
                        ? 'bg-gradient-to-r from-[#45D1FF]/20 to-[#167BCC]/20 text-[#45D1FF] border border-[#45D1FF]/50'
                        : 'text-[#717892] hover:text-white hover:bg-[#0A1930] border border-transparent'
                    }`}
                  >
                    All authors
                  </button>
                  {availableAuthors.map((author) => (
                    <button
                      key={author}
                      onClick={() => handleAuthorChange(author)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 font-light ${
                        filters.author === author 
                          ? 'bg-gradient-to-r from-[#45D1FF]/20 to-[#167BCC]/20 text-[#45D1FF] border border-[#45D1FF]/50'
                          : 'text-[#717892] hover:text-white hover:bg-[#0A1930] border border-transparent'
                      }`}
                    >
                      {author}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="flex items-center gap-2 text-sm font-light text-white mb-3">
                  <FiFolder className="w-4 h-4 text-[#45D1FF]" />
                  Category
                </label>
                <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                  <button
                    onClick={() => handleCategoryChange('')}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 font-light ${
                      !filters.category 
                        ? 'bg-gradient-to-r from-[#45D1FF]/20 to-[#167BCC]/20 text-[#45D1FF] border border-[#45D1FF]/50'
                        : 'text-[#717892] hover:text-white hover:bg-[#0A1930] border border-transparent'
                    }`}
                  >
                    All categories
                  </button>
                  {availableCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 font-light ${
                        filters.category === category 
                          ? 'bg-gradient-to-r from-[#45D1FF]/20 to-[#167BCC]/20 text-[#45D1FF] border border-[#45D1FF]/50'
                          : 'text-[#717892] hover:text-white hover:bg-[#0A1930] border border-transparent'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div>
                <label className="flex items-center gap-2 text-sm font-light text-white mb-3">
                  <FiTag className="w-4 h-4 text-[#45D1FF]" />
                  Tags
                </label>
                <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                  {availableTags.map((tag) => (
                    <motion.button
                      key={tag}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleTagToggle(tag)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 font-light ${
                        filters.tags?.includes(tag)
                          ? 'bg-gradient-to-r from-[#45D1FF]/20 to-[#167BCC]/20 text-[#45D1FF] border border-[#45D1FF]/50'
                          : 'text-[#717892] hover:text-white hover:bg-[#0A1930] border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{tag}</span>
                        {filters.tags?.includes(tag) && (
                          <FiX className="w-3 h-3 text-[#45D1FF]" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Filters Summary */}
            {hasActiveFilters && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 pt-6 border-t border-[#717892]"
              >
                <h4 className="text-sm font-light text-white mb-3">Active Filters:</h4>
                <div className="flex flex-wrap gap-2">
                  {filters.datePeriod && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-[#45D1FF]/20 to-[#167BCC]/20 text-[#45D1FF] text-xs rounded-full border border-[#45D1FF]/30 font-light">
                      {filters.datePeriod}
                      <button onClick={() => handleDatePeriodChange('')} className="hover:scale-110 transition-transform">
                        <FiX className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.author && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 text-emerald-400 text-xs rounded-full border border-emerald-400/30 font-light">
                      {filters.author}
                      <button onClick={() => handleAuthorChange('')} className="hover:scale-110 transition-transform">
                        <FiX className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.category && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-purple-400/20 to-purple-600/20 text-purple-400 text-xs rounded-full border border-purple-400/30 font-light">
                      {filters.category}
                      <button onClick={() => handleCategoryChange('')} className="hover:scale-110 transition-transform">
                        <FiX className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {filters.tags?.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-orange-400/20 to-orange-600/20 text-orange-400 text-xs rounded-full border border-orange-400/30 font-light">
                      {tag}
                      <button onClick={() => handleTagToggle(tag)} className="hover:scale-110 transition-transform">
                        <FiX className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(113, 120, 146, 0.2);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #45D1FF, #167BCC);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #167BCC, #45D1FF);
        }
      `}</style>
    </motion.div>
  );
};

export default BlogFilter;