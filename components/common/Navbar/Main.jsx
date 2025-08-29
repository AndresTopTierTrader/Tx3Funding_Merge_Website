'use client'

//Functions
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { track } from '@vercel/analytics'
import { useWindowDimensions } from "@/utils/misc/getWindowDimensions";
import { usePathname } from "next/navigation";

//Components
import Dropdown from "./Dropdown";
import LanguageChanger from "./LanguageChanger.jsx";

//Constants
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import logo from "@/public/img/logo.svg";
import levelsLogo from "./assets/levelsLogo.svg";

//Icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { MdInsertChartOutlined } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar({ locale }) {

  const { t } = useTranslation();
  const [isTop, setIsTop] = useState(true);
  const [isNavbarShort, setIsNavbarShort] = useState('');

  /**
   * Handles scroll events to determine if navbar should show background blur effect
   * Sets isTop state based on scroll position threshold (50px)
   */

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 50;
      setIsTop(scrollTop <= scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { width } = useWindowDimensions()

  /**
   * Monitors window width to determine if navbar should use compact layout
   * Sets navbar to short mode for specific width ranges (1183px - 1515px)
   */
  useEffect(() => {
    if (width < 1515 && width > 1183) {
      setIsNavbarShort(true)
    } else[
      setIsNavbarShort(false)
    ]

  }, [
    width
  ])

  const [currentNavState, setCurrentNavState] = useState("");
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  //levels checker
  const [isLevels, setIsLevels] = useState(currentNavState == 'levels' ? true : false);
  const pathname = usePathname();

  /**
   * Detects if current route is the 'levels' page and updates navigation state accordingly
   * Parses URL segments to determine active section
   */
  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments[1] === 'levels') {
      setCurrentNavState('levels');
    }
  }, []);


  /**
   * Updates isLevels state based on current navigation state
   * Controls theme and styling variations for the levels section
   */
  useEffect(() => {
    if (currentNavState === 'levels') {
      setIsLevels(true)
    } else {
      setIsLevels(false)
    }
  }, [currentNavState]);

  /**
   * Toggles the mobile menu open/closed state
   * Used by hamburger menu button on mobile devices
   */
  const handleMenuToggle = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  /**
   * Closes the mobile menu by setting state to false
   * Used when user clicks on menu items or outside menu area
   */
  const handleCloseMenu = () => {
    setMobileMenuIsOpen(false);
  };

  const linksStyle = {
    desktop: `text-white/90 hover:text-white cursor-pointer font-light px-3 transition-all`,
    mobile: "text-white/90 cursor-pointer font-light px-2 py-2 text-center text-lg hover:text-ttorange transition-all",
    selected: "text-ttorange cursor-pointer font-semibold px-3 transition-all"
  };

  const marketsDropdown = {
    title: "Markets",
    sub: {
      forex: { name: "Forex", href: `${ENVIRONMENT_URL}/${locale}/forex-challenge` },
      futures: { name: "Futures", href: `${ENVIRONMENT_URL}/${locale}/futures-challenge` },
    }
  }

  const productsDropdown = {
    title: t("navbar:products").toString(),
    sub: {
      onePhase: { name: "One Phase Challenge", href: `${ENVIRONMENT_URL}/${locale}/one-phase-challenge` },
      twoPhase: { name: "Flex and Pro Challenge", href: `${ENVIRONMENT_URL}/${locale}/two-phase-challenge` },
      levels: { name: "Levels", href: `${ENVIRONMENT_URL}/${locale}/levels` },
      quiz: { name: "Trader Quiz", href: `${ENVIRONMENT_URL}/${locale}/trader-quiz` }
    }
  };

  const communityDropdown = {
    title: t("navbar:community").toString(),
    sub: {
      discord: { name: "Discord", href: "https://discord.com/invite/WrC2xdZZng" },
      affiliates: { name: t("navbar:affiliates").toString(), href: `${ENVIRONMENT_URL}/${locale}/affiliates-program` },
      academy: { name: t("navbar:academy").toString(), href: `${ENVIRONMENT_URL}/${locale}/academy` },
      competitions: { name: t("navbar:competitions").toString(), href: "https://app.toptiertrader.com/competitions-overview" },
      leaderboards: { name: t("navbar:leaderboards").toString(), href: "https://app.toptiertrader.com/leaderboard" },
    }
  };

  const aboutDropdown = {
    title: t("navbar:about").toString(),
    sub: {
      about: { name: t("navbar:about").toString(), href: `${ENVIRONMENT_URL}/${locale}/about` },
      blog: { name: t("navbar:blog").toString(), href: `${ENVIRONMENT_URL}/${locale}/blog` },
    }
  }

  const helpDropdown = {
    title: "Help Center",
    sub: {
      about: { name: "Forex Help Center", href: `https://help.toptiertrader.com/en` },
      blog: { name: "Futures Help Center", href: `https://help.tx3funding.com/en/` },
    }
  }


  return (
    <AnimatePresence>
      <nav
        className={`${isTop ? 'bg-transparent' : 'bg-black/40 backdrop-blur-sm mb:bg-black/70'} mb:fixed transition-all duration-500 ease-in rounded-b-lg py-4 px-5 mb:pt-4 mb:pb-4 md:px-24 max-w-[1200px]:w-[900px] fixed flex justify-between items-center top-0 w-full z-50`}
      >
        {/* Logo */}
        <div className="flex mb:flex-row items-center ">
          <Link href={`${ENVIRONMENT_URL}/${locale}`} onClick={() => { currentNavState('') }} alt="Home">
            <Image
              src={isLevels ? levelsLogo : logo}
              priority={true}
              alt="toptier_logo"
              className="object-contain w-28 mb:w-36 mr-5"
            />
          </Link>

        </div>

        {/* Nav */}
        <div className={`max-custom:hidden flex mb:flex-row mb:justify-around  items-center mt-2 mb:flex-wrap mb:mx-5 max-[1547px]:flex-col`}
        >

          <Dropdown
            list={marketsDropdown}
            currentNavState={currentNavState}
            setCurrentNavState={setCurrentNavState}
            handleCloseMenu={handleCloseMenu}
          />

          <Dropdown
            list={productsDropdown}
            currentNavState={currentNavState}
            setCurrentNavState={setCurrentNavState}
            handleCloseMenu={handleCloseMenu}
          />

          <Dropdown
            list={communityDropdown}
            currentNavState={currentNavState}
            setCurrentNavState={setCurrentNavState}
            handleCloseMenu={handleCloseMenu}
          />

          <Dropdown
            list={aboutDropdown}
            currentNavState={currentNavState}
            setCurrentNavState={setCurrentNavState}
            handleCloseMenu={handleCloseMenu}
          />

          <Dropdown
            list={helpDropdown}
            currentNavState={currentNavState}
            setCurrentNavState={setCurrentNavState}
            handleCloseMenu={handleCloseMenu}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-row items-center">
          <div className=" hidden mb:block">
            <LanguageChanger isTop={isTop} />
          </div>

          <a>
            <button className="bg-forexBlue px-4 py-2 rounded-lg" >
              <p className="tracking-tight font-medium text-sm md:text-base text-white">Forex</p>
            </button>
          </a>

          <a>
            <button className="bg-futuresGreen px-4 ml-2 py-2 rounded-lg" >
              <p className="tracking-tight text-sm md:text-base font-medium text-bgDark">Futures</p>
            </button>
          </a>

       

          {/* Short Navbar Menu - Icons */}
          <motion.div
            key={"motion_menu"}
            onClick={handleMenuToggle}
            whileTap={{ rotate: 45 }}
          >
            {
              mobileMenuIsOpen ? <IoClose className="w-8 h-8 text-slate-300 ml-2" />
                : <IoMdMenu className={`block ${isNavbarShort ? 'mb:block mb:ml-4' : 'mb:hidden'} w-10 h-10 text-slate-300 border-slate-400 ml-2`} />
            }
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuIsOpen && (
        <motion.menu
          key="mobile-menu"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`flex fixed flex-col w-full overflow-auto top-[70px] mb:top-[70px] overflow-x-hidden h-auto pb-5 bg-[#0B111D]/40 backdrop-blur-2xl text-white rounded-b-xl z-50`}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="flex-col items-start w-full"
          >

            {/* LanguageChanger */}
            <div className="bg-[#0B111D] py-5 block mb:hidden -mr-1 mb:mr-0">
              <LanguageChanger isTop={isTop} />
            </div>

            {/* DropDown */}
            <motion.div className={`${isNavbarShort ? 'mt-3  mb:mt-2' : 'mt-3'}  ml-4`} variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              <Dropdown
                list={productsDropdown}
                currentNavState={currentNavState}
                setCurrentNavState={setCurrentNavState}
                setmobileMenuIsOpen={setMobileMenuIsOpen}
                handleCloseMenu={handleCloseMenu}
                isNavbarShort={isNavbarShort}
              />
            </motion.div>

            <motion.div className={`${isNavbarShort ? 'mt-3  mb:-mt-4' : 'mt-3'} mb-1  ml-4`} variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              <Dropdown
                list={communityDropdown}
                currentNavState={currentNavState}
                setCurrentNavState={setCurrentNavState}
                setmobileMenuIsOpen={setMobileMenuIsOpen}
                handleCloseMenu={handleCloseMenu}
                isNavbarShort={isNavbarShort}
              />
            </motion.div>

            <motion.div className={`${isNavbarShort ? 'mt-3  mb:-mt-4' : 'mt-3'} mb-1  ml-4`} variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              <Dropdown
                list={aboutDropdown}
                currentNavState={currentNavState}
                setCurrentNavState={setCurrentNavState}
                setmobileMenuIsOpen={setMobileMenuIsOpen}
                handleCloseMenu={handleCloseMenu}
                isNavbarShort={isNavbarShort}
              />
            </motion.div>

            {/* Links */}

            {/* Contact Us */}
            <motion.div className={`${isNavbarShort ? 'mt-3  mb:-mt-5' : 'mt-0'}`} variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              {/* Text */}
              <Link
                className="flex flex-row items-center w-full justify-between px-8 py-2"
                href={`${ENVIRONMENT_URL}/${locale}/contact`}
                onClick={handleCloseMenu}
              >
                <p className={linksStyle.mobile} > {t("navbar:contact")} </p>
                {/* Icon */}
                <MdKeyboardArrowRight className="w-8 h-8" />
              </Link>
            </motion.div>

            {/* FAQs */}
            <motion.div variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              {/* Text */}
              <Link
                className="flex flex-row items-center w-full justify-between px-8 py-2"
                href="https://help.toptiertrader.com"
                onClick={handleCloseMenu}

                target="_blank"
              >
                <p className={linksStyle.mobile} > {t("navbar:help_center")} </p>
                {/* Icon */}
                <MdKeyboardArrowRight className="w-8 h-8" />
              </Link>
            </motion.div>

            {/* Login */}
            <motion.div variants={{ hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              {/* Text */}
              <Link
                className="flex flex-row items-center w-full justify-between px-9 py-2"
                href={isLevels ? 'https://levels.toptiertrader.com/login' : 'https://app.toptiertrader.com/login'}
                onClick={handleCloseMenu}

                target="_blank"
              >
                <p className={`${linksStyle.mobile} -ml-1`}  > Log in </p>
                {/* Icon */}
                <FaRegUserCircle className="w-5  h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.menu>
      )
      }
    </AnimatePresence >
  );
}

export default Navbar;