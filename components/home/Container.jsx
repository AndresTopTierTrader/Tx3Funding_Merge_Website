'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for constants and styles
import { bgImageStyle } from "@/constants/styles";
import { useCountryDetection } from "@/hooks/country/useCountryDetection";

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

// -------------- Regular Components -----------------
const LandingSection = dynamic(() => import("./LandingSection/Landing-Section"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const TableSection = dynamic(() => import("@/components/common/TableSection/Main"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const Bento = dynamic(() => import("@/components/common/Bento/Bento"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const CompetitiveEdgeSection = dynamic(() => import("./CompetitiveEdgeSection/Competitive-Edge-Section"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const TrustedSection = dynamic(() => import("./TrustedSection/Trusted-Section"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

const TrustpilotSection = dynamic(() => import("./TrustpilotSection/Trustpilot-Section"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

const PayoutSection = dynamic(() => import("./PayoutSection/Payout-Section"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

const FinalSection = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

const ComparationSection = dynamic(() => import("./ComparationSection/Comparation-Section"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const SocialMediaSection = dynamic(() => import("@/components/common/SocialMediaSection/SocialMedia-Section"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

// ------------------- LATAM Components --------------------
const LATAMLandingSection = dynamic(() => import("./LATAM_landingSection/LATAM-Landing-Section"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const LATAMCommunity = dynamic(() => import("./LATAM_community/LATAMCommunity").then(mod => mod.LATAMCommunity), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const LATAMFinalSection = dynamic(() => import("../common/FinalSection/LATAM-Final-Section"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

const LATAMComparationSection = dynamic(() => import("./ComparationSection/LATAM-Comparation-Section"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const LATAMSocialMediaSection = dynamic(() => import("../common/SocialMediaSection/LATAM-SocialMedia-Section"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

const LATAMTrustedSection = dynamic(() => import("./TrustedSection/LATAM-Trusted-Section"), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const LATAMPayoutSection = dynamic(() => import("./LATAMPayoutSection/LATAM-Payout-Section"), {
  loading: () => <MinimalLoader />,
  ssr: true
});

// Dynamic imports with named exports
const LATAMFlexChallenge = dynamic(() => import("./LATAM_flexChallenge/LATAMFlexChallenge").then(mod => mod.LATAMFlexChallenge), {
  loading: () => <MinimalLoader />,
  ssr: false
});

const LATAMHowMuchCanYouMake = dynamic(() => import("./LATAM_howMuchCanYouMake/LATAMHowMuchCanYouMake").then(mod => mod.LATAMHowMuchCanYouMake), {
  loading: () => <MinimalLoader />,
  ssr: false
});

export default function Container({ locale, translations, mainLang }) {
  const { isLatam, currency, loading } = useCountryDetection(mainLang);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    if (!loading) {
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
    }
  }, [loading]);

  // Render content based on region
  const renderContent = () => {
    if (isLatam) {
      return (
        <>
          <LATAMLandingSection locale={locale} translations={translations.homeTranslations} />
          <LATAMPayoutSection translations={translations.payoutTranslations} />
          <LATAMFlexChallenge locale={mainLang} />
          <TableSection locale={locale} translations={translations.tableTranslations} />
          <LATAMHowMuchCanYouMake currency={currency} />
          <LATAMTrustedSection locale={locale} translations={translations.trustedTranslations} />
          <LATAMCommunity />
          <TrustpilotSection noTitle locale={locale} translations={translations.communityTranslations} />
          <div className="mb:-mt-10">
            <LATAMFinalSection translations={translations.finalSectionTranslations} locale={locale} isCarousel={true} />
          </div>
          <LATAMComparationSection locale={locale} translations={translations.comparationTranslations} />
          <LATAMSocialMediaSection locale={locale} translations={translations.socialmediaTranslations} />
        </>
      );
    }

    return (
      <>
        <LandingSection locale={locale} translations={translations.homeTranslations} />
        <PayoutSection translations={translations.payoutTranslations} />
        <TableSection locale={locale} translations={translations.tableTranslations} />
        <Bento translations={translations.bentoTranslations} />
        <CompetitiveEdgeSection locale={locale} translations={translations.competitiveEdgeSection} />
        <TrustedSection locale={locale} translations={translations.trustedTranslations} />
        <TrustpilotSection locale={locale} translations={translations.communityTranslations} />
        <div className="mb:-mt-10">
          <FinalSection translations={translations.finalSectionTranslations} locale={locale} isCarousel={true} />
        </div>
        <ComparationSection locale={locale} translations={translations.comparationTranslations} />
        <SocialMediaSection locale={locale} translations={translations.socialmediaTranslations} />
      </>
    );
  };

  return (
    <>
      <LoadingScreen isVisible={showLoadingScreen} />
      {contentReady && (
        <div
          className={`transition-opacity duration-[1500ms] ease-out ${showLoadingScreen ? 'opacity-0' : 'opacity-100'
            }`}
        >
          {renderContent()}
        </div>
      )}
    </>
  );
}