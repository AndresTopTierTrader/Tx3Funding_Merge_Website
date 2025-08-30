// At the top of your file, import motion and AnimatePresence from framer-motion
import { motion, AnimatePresence } from 'framer-motion';
import React, {useState, useEffect} from 'react';
import downArrow from "./assets/downArrow.svg";
import upArrow from "./assets/upArrow.svg";
import Image from 'next/image';

function Dropdown({ data }) { 

    const {title, content, color} = data;

    const [isOpen, setIsOpen] = useState(false);

    // Animation variants for the dropdown content
    const dropdownVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: 'auto' } // Adjust height as needed
    };

    return (
        <div onClick={() => setIsOpen(!isOpen)} className='mb:max-w-[400px] bg-gradient-to-br my-4 border rounded-xl min-w-full mb:min-w-[400px] border-[#717892] from-white/5 to-[#0B111D] p-4'>
            <div className="flex flex-row justify-between">
                <p className='text-textPrimary text-sm mr-4 font-light'>{title}</p>
                <Image src={!isOpen ? downArrow : upArrow} className='hover:cursor-pointer' width={25} height={25} alt="arrow" />
            </div>

            {/* AnimatePresence allows components to animate out when they're removed from the React tree */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        transition={{ duration: 0.3 }} // Adjust timing as needed
                        className='text-secondary mt-3 text-sm font-light'
                    >
                      {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Dropdown;
