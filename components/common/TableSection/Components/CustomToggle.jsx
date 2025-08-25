import React from "react";

export default function CustomToggle({ isEnabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="relative inline-flex items-center w-16 h-7 min-w-16 flex-shrink-0 rounded-md border border-[#4D516A] overflow-hidden bg-transparent shadow-inner"
    >
      {/* Sliding square */}
      <div
        className={`absolute h-7 w-8 transition-transform duration-300 rounded-sm ${
          isEnabled 
            ? "bg-[#F36235] translate-x-8" 
            : "bg-[#5B6C8D] translate-x-0"   
        }`}
      />

      {/* Text container */}
      <div className="relative flex w-full z-10">
        <span
          className={`flex-1 text-center text-xs font-medium transition-colors duration-300 ${
            isEnabled ? "text-[#F36235]" : "text-transparent" 
          }`}
        >
          ON
        </span>
        <span
          className={`flex-1 text-center text-xs font-medium transition-colors duration-300 ${
            isEnabled ? "text-transparent" : "text-white"
          }`}
        >
          OFF
        </span>
      </div>
    </button>
  );
}