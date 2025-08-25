'use client'

import mainImg from "./assets/levelsEn3.webp"
import Link from "next/link"
import mainImgEs from "./assets/levelsEs.webp"
import Image from "next/image"
import decorationBgImg from "./assets/decorationBg.svg"
import { FaArrowRight } from "react-icons/fa"
import './animations.css'
import { useWindowDimensions } from "@/utils/misc/getWindowDimensions";
import { track } from '@vercel/analytics'
import { bgImageStyle } from "@/constants/styles"

function LandingSection({ locale, translations }) {

  
  const { width } = useWindowDimensions()

  const videoWidth = width > 768 ? 1280 : 720

  

  const mainLang = locale.split('-')[0]

  return (
    <>
      <main
        style={bgImageStyle}
        className="flex flex-col overflow-y-hidden relative items-center mb:mt-0 pt-0 mb:-pb-32 mb:pt-0 h-[620px] mb:h-[650px] max-[1450px]:overflow-x-hidden"
      >

        <section className="flex flex-col items-center max-w-[1200px]   relative">
          <div className="fadeIn">
            <Image src={decorationBgImg} priority alt="decoration_bg" className="absolute w-full -top-32 mb:-top-16 left-0 z-0" />
          </div>

          <div className="flex flex-col items-center px-6 mb:px-0 mb:-mt-16 mt-24">
            <Image src={mainLang == 'es' ? mainImgEs : mainImg} width={1600} height={1600} priority alt="main_img" className="hidden mb:block top-0 min-w-[600px] object-contain mb:absolute mt-10 -mr-32 fadeInUp" />
            <Image src={mainLang == 'es' ? mainImgEs : mainImg} width={1600} height={850} priority alt="main_img" className="block absolute mb:hidden min-w-[400px] ml-20  fadeInUp" />

            <div className="flex flex-col h-full items-center mt-[280px] mb:mt-[450px] z-30 ">
              <h1 className="text-4xl mb:text-6xl text-white font-medium titleFirst">Thank You</h1>
              <h1 className="text-2xl mb:text-3xl mt-2 text-white text-center font-light titleFirst">For Joining Levels</h1>
              <Link href="https://levels.toptiertrader.com/login" target="_blank">
                <button onClick={() => {track('Lv - TY Page  - Login Button Clicked')}} className="z-20 flex w-fit flex-row mt-5 items-center text-sm font-medium text-[#0B111D] rounded-lg bg-[#45D1FF] hover:bg-[#30f8ff] hover:scale-105 transition-all py-2.5 px-4 justify-center">
                  Log in
                  <FaArrowRight className="ml-2 w-3 h-3" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        <div className="absolute bottom-0 bg-gradient-to-b from-transparent h-96 to-[#0B111D] -mt-5 mb:-mt-24 w-full">
        </div>
      </main>    </>
  );
}

export default LandingSection;