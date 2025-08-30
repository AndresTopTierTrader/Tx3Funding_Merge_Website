'use client'

import Image from 'next/image'

//Images
import Carousel from './Carousel/Carousel';
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import arrowImg from './assets/arroowImg.svg'
//Icons
import coinImg from './assets/coin.svg'
import { useWindowDimensions } from "@/utils/misc/getWindowDimensions";
import { useEffect , useState} from 'react';
import { track } from '@vercel/analytics'


function StepsSection({ translations, locale }) {

    const mainLang = locale.split('-')[0]

    const { width } = useWindowDimensions()
    const [videoWidth, setVideoWidth] = useState(360)

    useEffect(() => {
        setVideoWidth(width - 50)
    }, [width])

    return (
        <section className="bg-[#0B111D] py-16 -mt-20 mb:-mt-10 pt-0  mb:mb-0  mb:pb-32 flex flex-col items-center">
            <Carousel locale={locale}  ></Carousel>
            <div className="flex flex-col items-center mb:max-w-[1200px] w-full">

                {/* Mobile */}
                <section className='mb:hidden flex flex-col w-full mt-16 px-6'>

                    <div className='flex flex-col items-center'>
                        <p className='text-textPrimary font-light text-3xl mb:text-4xl text-center mb:text-left max-w-[400px]'> {translations.whatsLevels}</p>
                        <iframe width={videoWidth} height="210" className='rounded-lg mt-5' src={mainLang == 'es' ? 'https://www.youtube.com/embed/T5C2v4ODuX8?si=UPMxb60WCCAXxvU1': "https://www.youtube.com/embed/biBvAwZ5tNQ?si=GPhhft8SizFyZRA_"}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    {/* Box Two */}
                    <div className='relative bg-gradient-to-br border mt-10  z-20 p-6 rounded-lg border-[#717892] from-white/5 to-[#0B111D]' >
                        <p className='text-5xl font-medium bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'>1</p>
                        <div className='flex flex-row items-center mt-3 w-full justify-between'>
                            <p className="text-xl font-normal text-textPrimary max-w-[160px] "> {translations.titleTarget}</p>
                            <Image src={arrowImg} className='rotate-90' width={30} height={30} alt='coint-vector' />
                        </div>

                        <p className="mt-5 max-w-full text-[#717892] " >{translations.subtitleTarget} </p>
                    </div>

                    {/* Box Three */}
                    <div className='bg-gradient-to-br border mt-5 z-20 p-6 rounded-lg border-[#717892] from-white/5 to-[#0B111D]' >
                        <p className='text-5xl font-medium bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'>2</p>
                        <div className='flex flex-row items-center mt-3 w-full justify-between'>
                            <p className="text-xl font-normal text-textPrimary max-w-[200px] "> {translations.titleRules}</p>
                            <Image src={arrowImg} className='rotate-90' width={30} height={30} alt='coint-vector' />
                        </div>

                        <p className="mt-5 max-w-full text-[#717892] " >{translations.subtitleRules} </p>
                    </div>

                    {/* Box Four */}
                    <div className='bg-[#08162B] border mt-5 z-20 p-6 rounded-lg border-[#717892]' >
                        <Image src={coinImg} width={40} height={40} alt='coint-vector' />
                        <p className="text-2xl font-medium bg-gradient-to-r mt-3 from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text"> {translations.titlePayouts}</p>
                        <p className="text-[#C6CEEC] mt-8" >{translations.subtitlePayouts}</p>
                    </div>

                    <a href='https://app.toptiertrader.com/buy-challenge/?el=LandingSectionCTA&hcategory=Dec2024&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss' className="mt-5 titleSecond">
                        <button onClick={() => {track('Lv -Whats Levels CTA - Clicked')}} className="z-20 flex flex-row w-full mb:mt-0 items-center text-sm font-medium text-[#0B111D] rounded-lg bg-[#45D1FF] hover:bg-[#30f8ff] hover:scale-105 transition-all py-2.5 px-4 justify-center">
                            {translations.cta}
                            <FaArrowRight className="ml-2 w-3 h-3" />
                        </button>
                    </a>
                </section>

                {/* Main Box - Desktop */}
                <div className='flex flex-col items-center mt-10'>
                    <div className='hidden mb:flex flex-col items-center'>
                        <h3 className='text-textPrimary font-light text-3xl mb:text-4xl text-center mb:text-left max-w-[400px]'>
                            {translations.whatsLevels}
                        </h3>
                        <iframe width="1000" height="600" className='rounded-xl mt-10' src={mainLang == 'es' ? 'https://www.youtube.com/embed/T5C2v4ODuX8?si=UPMxb60WCCAXxvU1': "https://www.youtube.com/embed/biBvAwZ5tNQ?si=GPhhft8SizFyZRA_"}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    {/* Vento */}
                    <section id='how-to-get-a-payout' className="hidden mt-10 mb:flex relative bg-gradient-to-br border rounded-xl border-[#3c4150] from-white/10 to-black/70 flex-row items-center w-[1000px]" >
                        {/* Box */}
                        <section className="flex flex-row h-[350px] ">
                            {/* Step One */}
                            <div className="flex flex-col relative items-start w-[330px] px-5 pt-6">
                                <p className='text-5xl font-medium bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'>1</p>
                                <div className='flex flex-row items-center mt-3'>
                                    <p className="text-2xl font-normal text-textPrimary max-w-[200px] "> {translations.titleTarget}</p>
                                    <Image src={arrowImg} className='ml-8' width={30} height={30} alt='coint-vector' />
                                </div>

                                <p className="absolute bottom-11 max-w-[300px] text-[#717892] " >{translations.subtitleTarget} </p>
                            </div>

                            {/* Line */}
                            <div className="bg-[#3c4150] w-[1px] h-full" />
                            {/* Step Two */}
                            <div className={`flex flex-col items-start w-[330px] ${mainLang == 'es' ? 'px-4' : 'px-6'}  pt-6`}>
                                <p className='text-5xl font-medium bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'>2</p>
                                <div className='flex flex-row items-center mt-3'>
                                    <p className="text-2xl font-normal text-textPrimary max-w-[200px] "> {translations.titleRules}</p>
                                    <Image src={arrowImg} className='ml-8' width={30} height={30} alt='coint-vector' />
                                </div>

                                <p className="absolute bottom-12 max-w-[300px] text-[#717892] mt-20" >{translations.subtitleRules} </p>
                            </div>

                            {/* Line */}
                            <div className="bg-[#3c4150] w-[1px] h-full" />
                            {/* Step Three */}
                            <div className={`flex relative flex-col bg-[#08162B] items-start w-[336px] rounded-r-xl ${mainLang == 'es' ? 'px-4' : 'px-6'} pt-6`}>
                                <Image src={coinImg} width={50} height={50} alt='coint-vector' />
                                <p className="text-2xl font-medium mt-3 text-textPrimary"> {translations.titlePayouts}</p>
                                <p className="absolute bottom-6 max-w-[290px] text-[#C6CEEC] " >{translations.subtitlePayouts}</p>
                            </div>
                        </section>
                    </section>
                </div>

            </div>
        </section>
    )
}

export default StepsSection