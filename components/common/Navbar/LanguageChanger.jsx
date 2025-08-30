'use client'

import { useRouter, usePathname} from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiWorld } from "react-icons/bi";

const selectedStyles = {
  selected: "font-bold",
  unselected: "font-semibold   transition-all",
};

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState(selectedStyles.unselected);
  const dropdownRef = useRef(null);

  const handleFullName = e => {
    if (e === "en") {
      return "EN";
    }
    if (e === "es") {
      return "ES";
    }

    if (e === "es-pr") {
      return "ES"
    }

    if (e === "es-mx") {
      return "ES"
    }

    if (e === "es-ar") {
      return "ES"
    }

    if (e === "es-co") {
      return "ES"
    }

    if (e === "fr") {
     return "FR"
    }
  };
 
  // Handles the language change
  const handleChange = e => {
    const newLocale = e;
    setIsOpen(false);
    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    // window.location.reload();
  };

  // Check the state of the selector
  useEffect(() => {
    if (isOpen) {
      setSelectedState(selectedStyles.selected);
    } else {
      setSelectedState(selectedStyles.unselected);
    }
  }, [isOpen]);


  // Close the dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <AnimatePresence className='z-50' >
      <div className={`flex flex-col items-center`} ref={dropdownRef}>
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className={`flex flex-row items-center transition-all text-textPrimary/90 rounded-xl mb:px-4 px-2 py-[4px] mb:py-2`}
        >
          <BiWorld className='mr-2 w-5 h-5 ' />
          <p className={selectedState}>
            {handleFullName(currentLocale)}
          </p>
          {!isOpen ? (
            <MdKeyboardArrowDown className="h-6 w-6 object-contain " />
          ) : (
            <MdKeyboardArrowUp className="h-6 w-6 object-contain " />
          )}
        </button>

        {isOpen && (
          <motion.div animate={{ y: 10 }} className="flex flex-col mb:absolute mb:mt-7 mb:pt-5 mb:py-3 bg-transparent mb:bg-[#0B111D] items-center rounded-lg md:rounded-b-lg">
            <div onClick={() => {
              handleChange("en")
            }} className="transition-all hover:rounded-b-lg cursor-pointer">
              <h3 className="text-slate-200 hover:text-textPrimary py-4 mb:py-2 px-6">EN</h3>
            
            </div>
            <div onClick={() => {
              handleChange("es")
            }} className="transition-all hover:rounded-b-lg cursor-pointer">
              <h3 className="text-slate-200 hover:text-textPrimary py-4 mb:py-2 px-6 ">ES</h3>
            
            </div>
            <div onClick={() => {
              handleChange("fr")
            }} className="transition-all hover:rounded-b-lg cursor-pointer">
              <h3 className="text-slate-200 hover:text-textPrimary py-4 mb:py-2 px-6 ">FR</h3>            
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
