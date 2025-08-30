import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Decoration

import decorationLeftImg from "./assets/decoration_left.svg"
import decorationRightImg from "./assets/decoration_right.svg"

const ForexTableSection = dynamic(() => import("@/components/common/ForexTableSection/Main"), {
  ssr: false
});

const FuturesTableSection = dynamic(() => import("@/components/common/FuturesTableSection/Main"), {
  ssr: false
});

// Skeleton Component
const TableSkeleton = () => {
  return (
    <div className="w-full py-16 max-w-[800px] mx-auto">

      {/* Amount Selection Skeleton */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-3 mb-8">
        {Array.from({ length: 7 }, (_, i) => (
          <motion.div
            key={i}
            className={`h-10 md:h-12 rounded-lg ${i === 4 ? 'bg-blue-600/20' : 'bg-[#1A2332]'}`}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: i * 0.1 
            }}
          />
        ))}
      </div>

      {/* Main Info Cards Skeleton */}
      <div className="bg-[#1A2332] rounded-xl p-6 border border-[#2A3441]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Desktop Layout - 2x2 Grid */}
          <div className="hidden md:grid md:grid-cols-2 md:col-span-2 gap-4">
            {Array.from({ length: 4 }, (_, i) => (
              <motion.div
                key={i}
                className="bg-[#0F1419] p-4 rounded-lg border border-[#2A3441]"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: i * 0.15 
                }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 bg-blue-500/30 rounded mr-2" />
                  <div className="h-4 w-32 bg-gray-600/30 rounded" />
                </div>
                <div className="h-8 w-full bg-gray-500/20 rounded mb-2" />
                <div className="h-4 w-16 bg-gray-600/20 rounded" />
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="md:hidden space-y-4">
            {Array.from({ length: 4 }, (_, i) => (
              <motion.div
                key={i}
                className="bg-[#0F1419] p-4 rounded-lg border border-[#2A3441]"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: i * 0.15 
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500/30 rounded mr-2" />
                    <div className="h-4 w-32 bg-gray-600/30 rounded" />
                  </div>
                  {i === 1 && <div className="w-4 h-4 bg-orange-500/30 rounded" />}
                </div>
                <div className="h-8 w-full bg-gray-500/20 rounded" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Show More Button Skeleton */}
        <div className="flex justify-center">
          <motion.div 
            className="h-10 w-32 bg-[#2A3441] rounded-lg"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
      </div>

      {/* Summary Section Skeleton */}
      <div className="mt-6 bg-[#1A2332] rounded-xl p-4 border border-[#2A3441]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500/30 rounded mr-2" />
            <motion.div 
              className="h-4 w-48 bg-gray-600/30 rounded"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
          </div>
          <motion.div 
            className="h-4 w-16 bg-gray-500/30 rounded"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-4 w-12 bg-gray-600/20 rounded" />
          <motion.div 
            className="h-8 w-24 bg-green-500/20 rounded"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
        </div>
      </div>

      {/* CTA Button Skeleton */}
      <div className="flex justify-center mt-6">
        <motion.div 
          className="h-12 w-56 bg-green-600/20 rounded-lg"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        />
      </div>
    </div>
  );
};

export default function TableContainers({locale, translations}) {
  const [activeTab, setActiveTab] = useState('forex');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (newTab) => {
    if (newTab !== activeTab) {
      setIsTransitioning(true);
      setActiveTab(newTab);
      // Simulate loading time
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }
  };

  const tabVariants = {
    inactive: { 
      color: '#9CA3AF',
      borderBottomColor: 'transparent'
    },
    active: { 
      color: activeTab === 'forex' ? '#018AF3' : '#00D084',
      borderBottomColor: activeTab === 'forex' ? '#018AF3' : '#00D084'
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeInOut",
        delay: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="bg-[#0B111D] relative flex flex-col items-center w-full">

        {/* Decorations */}
            <Image src={decorationLeftImg} width="auto" height="auto" alt="decoration_left" className="absolute w-36 md:w-56 object-contain left-0 md:left-96 md:ml-32 top-14 md:top-24 opacity-30 md:opacity-100" />
            <Image src={decorationRightImg} width="auto" height="auto" alt="decoration_right" className="absolute w-4/5 md:w-72 object-contain right-0 md:right-96 md:mr-32 top-20 md:top-96 opacity-30 md:opacity-100" />

      <div className="flex flex-col w-full items-center max-w-[1200px] tracking-tight px-4">
        
        {/* Tab Navigation */}
        <div className="flex flex-row items-center mb-8">
          <motion.button
            onClick={() => handleTabChange('forex')}
            className="relative px-6 py-3 text-xl md:text-4xl font-light tracking-wide transition-colors duration-300 border-b-2"
            variants={tabVariants}
            animate={activeTab === 'forex' ? 'active' : 'inactive'}
            whileHover={{ 
              color: activeTab === 'forex' ? '#0052B4' : '#0052B4'
            }}
            whileTap={{ scale: 0.98 }}
            disabled={isTransitioning}
          >
            Forex
          </motion.button>

          <motion.button
            onClick={() => handleTabChange('futures')}
            className="relative px-6 py-3 text-xl md:text-4xl font-light tracking-wide transition-colors duration-300 border-b-2"
            variants={tabVariants}
            animate={activeTab === 'futures' ? 'active' : 'inactive'}
            whileHover={{ 
              color: activeTab === 'futures' ? '#65FD51' : '#65FD51'
            }}
            whileTap={{ scale: 0.98 }}
            disabled={isTransitioning}
          >
            Futures
          </motion.button>
        </div>

        {/* Animated Content with Skeleton */}
        <div className="w-full relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {isTransitioning ? (
              <motion.div
                key="skeleton"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full"
              >
                <TableSkeleton />
              </motion.div>
            ) : (
              <>
                {activeTab === 'forex' && (
                  <motion.div
                    key="forex"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full"
                  >
                    <ForexTableSection 
                      locale={locale} 
                      translations={translations.tableTranslations} 
                    />
                  </motion.div>
                )}

                {activeTab === 'futures' && (
                  <motion.div
                    key="futures"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full"
                  >
                    <FuturesTableSection 
                      locale={locale} 
                      translations={translations.tableTranslations} 
                    />
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Optional: Active Tab Indicator */}
        <motion.div 
          className="mt-4 h-1 rounded-full"
          initial={false}
          animate={{
            width: activeTab === 'forex' ? '80px' : '100px',
            backgroundColor: activeTab === 'forex' ? '#018AF3' : '#00D084'
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  )
}