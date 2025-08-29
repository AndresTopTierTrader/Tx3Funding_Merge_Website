'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
// Dynamic imports for constants and styles
import { bgImageStyle } from "@/constants/styles";

// Loading Component with fade-out transition
const LoadingScreen = ({ isVisible = true }) => {

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center fixed inset-0 z-50 transition-all duration-[1200ms] ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      style={bgImageStyle}
    >
      <div className={`text-center animate-fade-in transition-all duration-[800ms] ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto rounded-full border-4 border-[#45D1FF] border-t-transparent animate-spin"></div>
        </div>
        <p className="text-xl font-light text-white opacity-80 animate-pulse">Loading a Top Tier Experience...</p>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

// Minimal loading for dynamic imports
const MinimalLoader = () => <div className="min-h-screen bg-[#0B111D]" />;

// Dynamic component imports
const LandingSection = dynamic(() => import("./LandingSection/LandingSection"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const WhatTradersWantSection = dynamic(() => import("./WhatTradersWant/WhatTradersWant"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const TraderTestimonialsSection = dynamic(() => import("./TraderTestimonials/TraderTestimonials"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const ProductsSection = dynamic(() => import("./ProductsSection/ProductsSection"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const ForexTableSection = dynamic(() => import("@/components/common/ForexTableSection/Main"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const PayoutSection = dynamic(() => import("./PayoutSection/PayoutSection"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

const SocialMediaSection = dynamic(() => import("@/components/common/SocialMediaSection/SocialMedia-Section"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

export default function Container({ locale, translations, mainLang }) {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setContentReady(true);
    }, 50);

    const fadeTimer = setTimeout(() => {
      setShowLoadingScreen(false);
    }, 800);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <>
      <LoadingScreen isVisible={showLoadingScreen} />
      {contentReady && (
        <div
          className={`transition-opacity duration-[1500ms] ease-out ${showLoadingScreen ? 'opacity-0' : 'opacity-100'
            }`}
        >
          <LandingSection locale={locale} translations={translations.homeTranslations} />
          <WhatTradersWantSection locale={locale} translations={translations.whatTradersWantTranslations} mainLang={mainLang} />
          <TraderTestimonialsSection locale={locale} translations={translations.traderTestimonialsTranslations} />
          <ProductsSection />
          <PayoutSection translations={translations.payoutTranslations} />
          <ForexTableSection locale={locale} translations={translations.tableTranslations} />
          <SocialMediaSection locale={locale} translations={translations.socialmediaTranslations} />
        </div>
      )}
    </>
  );
}