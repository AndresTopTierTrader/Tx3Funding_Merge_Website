import React from 'react';

// Loading state component with skeleton animation
function LoadingCard() {
  return (
    <div className="bg-gradient-to-br border rounded-xl border-[#717892] from-white/5 to-[#0B111D] p-8 w-full md:max-w-[1000px] mx-auto">
      {/* Header Section Skeleton */}
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="h-8 bg-slate-700 rounded-lg w-48 animate-pulse"></div>
        <div className="h-9 bg-slate-700 rounded-lg w-16 animate-pulse"></div>
      </div>
      
      {/* Product Information Grid Skeleton */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        {/* Challenge Type */}
        <div className="flex flex-col space-y-2">
          <div className="h-4 bg-slate-600 rounded w-20 animate-pulse"></div>
          <div className="h-6 bg-slate-700 rounded w-32 animate-pulse"></div>
        </div>

        {/* Challenge Amount */}
        <div className="flex flex-col space-y-2">
          <div className="h-4 bg-slate-600 rounded w-32 animate-pulse"></div>
          <div className="flex flex-row items-center">
            <div className="w-7 h-7 bg-slate-700 rounded-full animate-pulse mr-1"></div>
            <div className="h-6 bg-slate-700 rounded w-16 animate-pulse"></div>
          </div>
        </div>

        {/* Broker */}
        <div className="flex flex-col space-y-2">
          <div className="h-4 bg-slate-600 rounded w-16 animate-pulse"></div>
          <div className="flex flex-row items-center">
            <div className="w-7 h-7 bg-slate-700 rounded-full animate-pulse mr-1"></div>
            <div className="h-6 bg-slate-700 rounded w-20 animate-pulse"></div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="flex flex-col space-y-2">
          <div className="h-4 bg-slate-600 rounded w-16 animate-pulse"></div>
          <div className="flex flex-row items-center">
            <div className="w-7 h-6 bg-slate-700 rounded animate-pulse mr-2"></div>
            <div className="h-6 bg-slate-700 rounded w-40 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Coupon Section Skeleton */}
      <div className="mt-8 border-t border-[#717892]/30 pt-6">
        <div className="flex flex-col space-y-4">
          <div className="h-4 bg-slate-600 rounded w-24 animate-pulse"></div>
          
          {/* Coupon Input Skeleton */}
          <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-3">
            <div className="w-full md:min-w-[400px] md:max-w-[600px]">
              <div className="h-12 bg-slate-700 rounded-lg animate-pulse"></div>
            </div>
            <div className="h-12 bg-slate-700 rounded-lg w-full md:w-20 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Price Section Skeleton */}
      <div className="flex flex-col justify-end md:w-full mt-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <div className="h-4 bg-slate-600 rounded w-12 animate-pulse mb-2"></div>
            <div className="h-12 bg-slate-700 rounded w-32 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="flex items-center justify-center mt-6">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#45D1FF] mr-3"></div>
        <span className="text-lg font-light text-slate-400">Loading your challenge details...</span>
      </div>
    </div>
  );
}

export default LoadingCard;
