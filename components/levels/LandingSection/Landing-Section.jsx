'use client'

import mainImg from "./assets/levelsEn3.webp"
import Link from "next/link"
import mainImgEs from "./assets/levelsEs.webp"
import Image from "next/image"
import decorationBgImg from "./assets/decorationBg.svg"
import { FaArrowRight } from "react-icons/fa"
import './animations.css'
import { useState } from "react"
import { useWindowDimensions } from "@/utils/misc/getWindowDimensions";
import { track } from '@vercel/analytics'

function LandingSection({ locale, translations }) {


  const { width } = useWindowDimensions()

  const videoWidth = width > 768 ? 1280 : 720

  const bgImageStyle = {
    backgroundColor: 'hsla(219,45%,7%,1)',
    backgroundImage: `
      radial-gradient(at 63% 43%, hsla(217,43%,7%,1) 0px, transparent 50%),
      radial-gradient(at 63% 59%, hsla(197,100%,32%,0.2) 0px, transparent 50%),
      radial-gradient(at 80% 94%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 40%, hsla(218,44%,7%,0.2) 0px, transparent 50%),
      radial-gradient(at 39% 76%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 99% 46%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 51% 0%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 0% 47%, hsla(212,100%,15%,1) 0px, transparent 50%),
      radial-gradient(at 0% 61%, hsla(197,100%,32%,0.6) 0px, transparent 50%)
    `
  }

  const mainLang = locale.split('-')[0]

  return (
    <>
      <main
        style={bgImageStyle}
        className="flex flex-col overflow-y-hidden relative items-center mb:mt-0 pt-0 mb:-pb-32 mb:pt-0 h-[620px] mb:h-[720px] max-[1450px]:overflow-x-hidden"
      >

        <section className="flex flex-col items-center max-w-[1200px]   relative">
          <div className="fadeIn">
            <Image src={decorationBgImg} priority alt="decoration_bg" className="absolute w-full -top-32 mb:-top-16 left-0 z-0" />
          </div>

          <div className="flex flex-col items-center px-6 mb:px-0 mb:mt-16 mt-24">
            <Image src={mainLang == 'es' ? mainImgEs : mainImg} width={1200} height={1200} priority alt="main_img" className="hidden mb:block w-[1000px] object-contain mb:absolute -mt-6 -mr-32 fadeInUp" />
            <Image src={mainLang == 'es' ? mainImgEs : mainImg} width={width} height={850} priority alt="main_img" className="absolute mb:hidden -mr-20 fadeInUp" />

            <div className="flex flex-col h-full mt-[230px] mb:mt-[360px] items-center z-30 ">
              <h1 className="text-4xl mb:text-6xl text-white font-medium titleFirst">{translations.titleOne}</h1>
              <h1 className="text-2xl mb:text-3xl mt-2 text-white text-center font-light titleFirst">{translations.titleTwo}</h1>
              <h2 className="text-slate-300 text-center text-sm mt-4 titleSecond">{translations.subtitleOne}  </h2>
              <Link href="https://app.toptierlevels.com/checkout/payment" target="_blank">
                <button onClick={() => { track('Lv - Landing Section CTA - Clicked') }} className="z-20 flex w-fit flex-row mt-5 items-center text-sm font-medium text-[#0B111D] rounded-lg bg-[#45D1FF] hover:bg-[#30f8ff] hover:scale-105 transition-all py-2.5 px-4 justify-center">
                  {translations.cta}
                  <FaArrowRight className="ml-2 w-3 h-3" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        <div className="absolute bottom-0 bg-gradient-to-b from-transparent h-96 to-[#0B111D] -mt-5 mb:-mt-24 w-full">
        </div>
      </main>
    </>
  );
}

export default LandingSection;