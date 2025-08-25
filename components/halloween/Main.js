'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import bgImage from "./assets/bgImage.svg"

//Images
import graveImage from "./assets/grave.png";
import fenceImage from "./assets/fence.svg";

const bgImageStyle = {
  background: "rgb(59,83,167)",
  backgroundImage: `url(${bgImage.src})`,
  backgroundSize: "COVER",
  backgroundPosition: "center",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

function Main({ translations }) {
  return (
    <motion.div
      style={bgImageStyle}
      className="flex flex-col items-center mb:mt-0 mb:pb-20 pb-6 -mt-[100px] h-[850px] mb:h-auto pt-24 mb:py-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb:max-w-[2000px] w-full">
        {/* Title, Description & button*/}
        <div>
          <motion.div
            className="mx-10 flex flex-col items-center"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.p
              className="text-white max-w-[400px] text-center text-lg mb:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              This Halloween we treated our Traders!
            </motion.p>
            <motion.h1
              className="text-center text-4xl mb:text-center mb:text-6xl font-black text-ttorange max-w-[500px] mb:mt-5"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              3 Fully Funded Accounts
            </motion.h1>

            {/* Grave Image */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Image src={graveImage} alt="grave" width={700} height={200} />
            </motion.div>

            <div className="flex flex-col items-center">
              <motion.p
                className="text-white text-3xl z-10 font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                TOTALING $175,000!
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <Image src={fenceImage} alt="fence" className="-mt-12 mb:-mt-14" width={400} height={200} />
              </motion.div>
              <p className="text-white mt-5 underline text-xl">This contest is not longer avalible. Ended the 31st of October.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Main