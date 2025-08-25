import React from 'react';

// No URL state component
function NoUrlCard() {
  return (
    <div className="bg-gradient-to-br border rounded-xl border-yellow-500/30 from-yellow-500/5 to-[#0B111D] p-8 w-full md:max-w-[1000px] mx-auto">
      <div className="flex items-center mb-4">
        <div className="text-yellow-400">
          <svg className="w-6 h-6 mr-3 inline" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-2xl font-light text-yellow-400">No URL to Process</span>
        </div>
      </div>
      <p className="text-slate-400 text-lg font-light">
        Please provide a valid URL parameter to process the product information.
      </p>
    </div>
  );
}

export default NoUrlCard;