'use client'

// Functions & Hooks
import Image from 'next/image';
import { motion } from 'framer-motion';
import {track} from '@vercel/analytics'
// Images & Icons
import bgImage from "./assets/academyPlusCTAbg.jpg"
import academyBigLogo from "./assets/academyBigLogo.svg"
import { FaArrowRight } from 'react-icons/fa';



const bgImageStyle = {
    backgroundColor: 'hsla(219,45%,7%,1)',
    backgroundImage: `
      radial-gradient(at 63% 43%, hsla(217,43%,7%,1) 0px, transparent 50%),
      radial-gradient(at 63% 59%, hsla(197,100%,32%,0.2) 0px, transparent 50%),
      radial-gradient(at 80% 94%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 40%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 76%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 99% 46%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 51% 0%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 0% 47%, hsla(212,100%,15%,1) 0px, transparent 50%),
      radial-gradient(at 0% 61%, hsla(197,100%,32%,0.6) 0px, transparent 50%)
    `,
    height: "auto", // Adjust height as needed
    backgroundSize: "cover",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

function Main({ translations, setPopUpOpen }) {
    return (
        <main style={bgImageStyle} className="flex flex-col-reverse mb:flex-row  mb:pb-10 pb-14 pt-36 mb:pt-24 px-8 mb:px-0">
            <motion.div
                className='flex flex-col items-center pt-10 mb:pt-10 pb-10 mb:pb-10'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className='flex flex-col -mt-10 mb:mt-0 items-center mb:items-start'>
                    <motion.h1 className='text-white text-center mb:text-start font-lig text-4xl mb:text-6xl mb:max-w-[550px] ' variants={itemVariants}>
                        {translations.main.title}
                    </motion.h1>
                    <motion.p className='text-slate-200 text-center mb:text-start mt-4 font-medium text-lg mb:text-2xl ' variants={itemVariants}>
                        {translations.main.learn} 
                    </motion.p>

                    <motion.button
                        className='flex flex-row items-center bg-gradient-to-b from-[#0052B4] to-[#167ACC] text-center  text-white py-2 mt-8 px-6 rounded-xl font-medium transition-all hover:scale-110 hover:bg-cyan-500'
                        onClick={() => {
                            track('Academy - CTA Clicked')
                            setPopUpOpen(true)}}

                    >
                        {translations.main.cta}
                        <FaArrowRight className="ml-2 w-3 h-3" />
                    </motion.button>
                </div>


            </motion.div>
            <Image src={academyBigLogo} alt='academy-logo' priority className='w-[500px] -mt-20 mb:mt-0 object-contain mb:ml-2' />
        </main>
    )
}

export default Main
