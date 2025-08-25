'use client'

//Functions & Hooks
import VideoUploadForm from "./utils/UploadVideo";
import { app } from "@/firebase/toptier-paid-for-it/creds";
import { motion } from "framer-motion";

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
  `
}

function Main({ translations, locale }) {
  return (
    <main style={bgImageStyle} className="flex flex-col mb:mt-0 mb:pb-20 mb:pt-40 -mt-20 pb-14 pt-44 text-slate-300">
      <div className="flex flex-row items-center justify-evenly w-full">
        {/* Title Section */}
        <header className="flex flex-col items-center px-8 mb:px-0">
          <motion.h1
            className="text-2xl mb:text-3xl text-center font-light text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {translations.form.form_upload} {""}
            <motion.span
              className="bg-gradient-to-r from-[#45D1FF] to-[#167BCC] font-medium inline-block text-transparent bg-clip-text"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {translations.testimonial}
            </motion.span> {""}
            {translations.form.form_here}
          </motion.h1>
          <motion.h3
            className=" text-base text-slate-300 mb:text-lg text-center mt-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            {translations.form.form_get} {""}
            <motion.span
              className="font-bold"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              50% OFF
            </motion.span>{" "}
            {translations.form.form_next}
          </motion.h3>
        </header>
      </div>
      <VideoUploadForm app={app} translations={translations} locale={locale} />
    </main>
  )
}

export default Main
