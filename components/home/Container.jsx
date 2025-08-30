'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Styles
import { bgImageStyle } from "@/constants/styles";

// Images
import logo from '@/public/img/logo.svg'

// Loading Component with fade-out transition
const LoadingScreen = ({ isVisible = true }) => {

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center fixed inset-0 z-50 transition-all duration-[1200ms] ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      style={bgImageStyle}
    >
      <div className={`text-center transition-all duration-[800ms] ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
        <div className="relative animate-fade-in">
          <div className="skeleton-pulse">
            <Image
              src={logo}
              alt="Tx3Funding Logo"
              width={200}
              height={80}
              className="mx-auto"
            />
          </div>
          {/* Small spinner below the logo */}
          <div className="mt-6 flex justify-center">
            <div className="w-6 h-6 border-2 border-textSecondary border-t-transparent rounded-full animate-spin opacity-80"></div>
          </div>
        </div>
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
        
        @keyframes skeleton-pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .skeleton-pulse {
          animation: skeleton-pulse 1.2s ease-in-out infinite;
          animation-delay: 0.3s;
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
  ssr: true
});

const WhatTradersWantSection = dynamic(() => import("./WhatTradersWant/WhatTradersWant"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

const TraderTestimonialsSection = dynamic(() => import("./TraderTestimonials/TraderTestimonials"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

const ProductsSection = dynamic(() => import("./ProductsSection/ProductsSection"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

const TableContainersSection = dynamic(() => import("@/components/common/TableContainersSection/TableContainersSection"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const WhyTx3Section = dynamic(() => import("./WhyTx3Section/WhyTx3Section"), {
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
          <TableContainersSection locale={locale} translations={translations} />
          <WhyTx3Section />
          <PayoutSection translations={translations.payoutTranslations} />
          <SocialMediaSection locale={locale} translations={translations.socialmediaTranslations} />
        </div>
      )}
    </>
  );
}