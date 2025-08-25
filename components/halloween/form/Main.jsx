'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import graveImg from "../assets/grave.png";
import bgImage from "../assets/bgImage.svg";
import { ENVIRONMENT_URL } from "@/constants/global";

const bgImageStyle = {
  background: "rgb(59,83,167)",
  backgroundImage: `url(${bgImage.src})`,
  backgroundSize: "COVER",
  backgroundPosition: "center",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

function Main({ translations, locale }) {
  return (
    <motion.div
      style={bgImageStyle}
      className="flex flex-col items-center mb:mt-0 mb:pb-20 pb-6 -mt-[100px] h-[850px] mb:h-auto pt-40 mb:py-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb:max-w-[2000px] w-full flex flex-col items-center">
        <motion.div 
          className="bg-black bg-opacity-70 flex flex-col items-center w-fit p-10 rounded-lg mt-6 mb:mt-0"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image 
            src={graveImg} 
            alt="grave-img" 
            className="mb-6 mb:mb-8 mb:w-96" 
          />
          <h2 className="text-2xl mb:text-4xl text-white font-bold mb-4 text-center">
            {translations?.contestClosedTitle || "Contest Entry Period Has Ended"}
          </h2>
          <p className="text-white text-base mb:text-xl text-center max-w-md">
            {translations?.contestClosedMessage || 
              "Thank you for your interest in our Halloween Raffle. The entry period for this contest has concluded. Stay tuned to our social media channels for future promotions and opportunities!"}
          </p>
          <div className="mt-8 text-center">
            <a 
              href={`${ENVIRONMENT_URL}`}
              className="bg-ttorange text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 transition-colors  text-sm mb:text-base"
            >
              {translations?.returnHome || "Return to Homepage"}
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Main;