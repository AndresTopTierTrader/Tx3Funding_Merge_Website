"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCountryLocalStorage } from "@/hooks/country/useCountryLocalStorage";

//Banners
import CallUsBanner from "./CallUsBanner";
import PayoutODBanner from "./PayoutODBanner";
import MarketMemo from "./MarketMemo";
import TraderQuizBanner from "./TraderQuizBanner";
import FlashSaleAugust from "./FlashSaleAugust";

//LATAM Banners
import Challenge2K5Latam from "./Challenge2K5Latam";

function MainBanner({ translations, locale }) {
  const { isLatam, hasCache } = useCountryLocalStorage();
  const pathname = usePathname();

  // Check if current page is buy-challenge (any locale)
  const isBuyChallengePage = pathname.includes('/buy-challenge');

  // Get banner schedule based on region
  const getBannerSchedule = () => {
    const globalBanners = [
      {
        id: "flashSaleAugust",
        component: FlashSaleAugust,
        props: { locale },
        start: "2025-08-11",
        end_plus_one: "2025-08-15",
      },
      {
        id: "traderQuiz",
        component: TraderQuizBanner,
        props: { translations: translations.traderQuiz, locale },
        start: "2025-06-01",
        end_plus_one: "2025-12-31",
      },
      {
        id: "payoutODBanner",
        component: PayoutODBanner,
        props: { translations, locale },
        start: "2025-06-01",
        end_plus_one: "2025-07-01",
      },
      {
        id: "callUsBanner",
        component: CallUsBanner,
        props: { translations, locale },
        start: "2025-01-01",
        end_plus_one: "2025-12-31",
      },
      {
        id: "marketmemo",
        component: MarketMemo,
        props: { translations, locale },
        start: "2025-06-01",
        end_plus_one: "2025-12-31",
      },
    ];

    const latamBanners = [
      {
        id: "challenge2K5Latam",
        component: Challenge2K5Latam,
        props: { translations: translations.challenge2K5Latam, locale },
        start: "2025-07-01",
        end_plus_one: "2025-12-31",
      },
    ];

    // Include LATAM banners if user is from LATAM region
    if (isLatam) {
      return [...latamBanners, ...globalBanners];
    }

    return globalBanners;
  };

  // ========================================================================
  // LOGIC AND STATE
  // ========================================================================

  const [activeBanners, setActiveBanners] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get active banners based on current date and region
  const getActiveBanners = () => {
    const today = new Date().toISOString().split("T")[0];
    const bannerSchedule = getBannerSchedule();

    return bannerSchedule.filter(
      (banner) => today >= banner.start && today < banner.end_plus_one
    );
  };

  // Update active banners when region data is available
  useEffect(() => {
    if (!hasCache) return;

    const updateBanners = () => {
      const active = getActiveBanners();

      setActiveBanners(active);
      if (
        active.length > 0 &&
        (!currentBanner || !active.find((b) => b.id === currentBanner.id))
      ) {
        setCurrentBanner(active[0]);
        setCurrentIndex(0);
      }
    };

    updateBanners();

    const interval = setInterval(updateBanners, 3600000);
    return () => clearInterval(interval);
  }, [hasCache, isLatam, currentBanner]);

  // Automatic carousel
  useEffect(() => {
    if (activeBanners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % activeBanners.length;
        setCurrentBanner(activeBanners[newIndex]);
        return newIndex;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [activeBanners]);

  // Don't render if no cache data, no active banners, or on buy-challenge page
  if (!hasCache || activeBanners.length === 0 || !currentBanner || isBuyChallengePage) {
    return null;
  }

  // ========================================================================
  // RENDERING - CLEAN AND DYNAMIC
  // ========================================================================

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const BannerComponent = currentBanner.component;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-50"
      exit="hidden"
      key={currentBanner.id}
      variants={contentVariants}
    >
      <BannerComponent {...currentBanner.props} />
    </motion.div>
  );
}

export default MainBanner;