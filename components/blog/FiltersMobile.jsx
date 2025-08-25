'use client'

import levelsLogoImg from "./assets/levelsLogo.svg"
import React, { useState } from 'react';
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

function FiltersMobile({categories, setSelectedCategory, selectedCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelectCategory(_category) {
    setIsOpen(!isOpen);
    setSelectedCategory(_category);
  }

  const styles = {
    notSelected: 'cursor-pointer text-slate-400 text-center text-base py-3',
    selected: 'cursor-pointer text-white bg-white/20 text-center text-base py-2 rounded-lg'
  };

  // Define animation variants for the menu
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  // Define animation variants for menu items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`mb:hidden flex flex-col w-full px-6 rounded-lg border border-slate-300 bg-transparent`}>
      {/* Category chosen */}
      <div onClick={() => { setIsOpen(!isOpen) }} className="flex flex-row w-full pt-2 pb-2 justify-between items-center">


        {selectedCategory === 'Levels' ?
          <div className={`w-full ${selectedCategory === 'Levels' ? 'my-2' : 'mt-4'} flex flex-col items-center justify-center`}>
            <Image src={levelsLogoImg} alt="Levels" width={80} height={80} />
          </div>
          :
          <p className='text-center font-light text-white text-lg'>{selectedCategory}</p>}


        {isOpen ? <BiCaretUp className='text-white' /> : <BiCaretDown className='text-white' />}
      </div>

      {/* Open Menu of Categories with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className='py-3 overflow-hidden'
          >
            {categories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div onClick={() => { handleSelectCategory(category) }} className={selectedCategory === category ? styles.selected : styles.notSelected}>
                  {category === 'Levels' ?
                    <div className={`w-full ${category === 'Levels' ? 'my-2' : 'mt-4'} flex flex-col items-center justify-center`}>
                      <Image src={levelsLogoImg} alt="Levels" width={80} height={80} />
                    </div>
                    :
                    <p>{category} </p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FiltersMobile;
