//Functions & Hooks
import Image from 'next/image';
import { ENVIRONMENT_URL } from "@/constants/global";

//Images & Icons
import { BiRightArrowAlt } from "react-icons/bi";

//Components
import traderQuizImg from "./assets/traderQuiz.png"
import academyImg from "./assets/academy.png"
import challengesImg from "./assets/challenges.png"
import { bgImageStyle } from "@/constants/styles";

function Main({ translations, locale }) {
    const mainLang = locale.split('-')[0]
    return (
        <main style={bgImageStyle} className="flex flex-col mb:mt-0 mb:pb-40 mb:pt-40 -mt-24 pb-14 pt-32">
            <div className="mx-10 mt-16 mb:mt-0 flex flex-col items-center">
                <h1 className="text-center text-4xl mb:text-center mb:text-6xl font-semibold text-white">
                    {translations.titleOne}<br />
                    <span className="bg-gradient-to-r from-ttblue py-0 mb:py-1 to-ttelectricBlue inline-block text-transparent bg-clip-text">     {translations.titleTwo}</span> <br />
                </h1>
                <h2 className="mt-8 text-center text-lg md:text-xl lg:text-2xl text-[#717892] px-4 md:px-8 lg:px-12">
                    {translations.pOne}
                    <span className="font-bold block mt-0 mb:mt-2">
                    {translations.pTwo}
                    </span>
                </h2>
            </div>


            <div className='flex flex-col items-center mb:items-start  mb:flex-row mt-10 mb:mt-20 mb:w-full justify-around mb:max-w-[1600px]'>
                <div className='flex flex-col items-center max-w-[300px] '>
                    <Image alt='trader quiz image' src={traderQuizImg} className='w-80 rounded-xl' />
                    <p className='font-bold text-3xl text-white mt-5'>  {translations.quizTitle}</p>
                    <p className='text-center text-[#717892] mt-3'>{translations.quizDesc}</p>
                    <a href={`${ENVIRONMENT_URL}/en/trader-quiz`} className=''>
                        <button className='bg-transparent border border-white text-white rounded-lg mt-5 py-2.5 px-8 flex flex-row'>
                            <p>{translations.quizCta}</p>
                            <BiRightArrowAlt className='h-6 w-6 text-white ml-1' />
                        </button>
                    </a>
                </div>
                <div className='flex flex-col mt-20 mb:mt-0 items-center max-w-[300px] '>
                    <Image alt='challenges image' src={challengesImg} className='w-80 rounded-xl' />
                    <p className='font-bold text-3xl text-white mt-5'>{translations.challengeTitle}</p>
                    <p className='text-center text-[#717892] mt-3'> {translations.challengeDesc}</p>
                    <a href="https://app.toptiertrader.com/buy-challenge" className=''>
                        <button className='bg-ttorange text-white rounded-lg mt-5 py-2.5 px-8 flex flex-row'>
                            <p>{translations.challengeCta}</p>
                            <BiRightArrowAlt className='h-6 w-6 text-white ml-1' />
                        </button>
                    </a>
                </div>
                <div className='flex flex-col my-20 mb:mt-0 items-center max-w-[300px] '>
                    <Image alt='academy image' src={academyImg} className='w-80 rounded-xl' />
                    <p className='font-bold text-3xl text-white mt-5'> {translations.academyTitle}</p>
                    <p className='text-center text-[#717892] mt-3'> {translations.academyDesc}</p>
                    <a href={mainLang == 'es'? "https://es-academy.toptiertrader.com" : "https://academy.toptiertrader.com"} className=''>
                        <button className='bg-transparent border border-white text-white rounded-lg mt-5 py-2.5 px-8 flex flex-row'>
                            <p>{translations.academyCta}</p>
                            <BiRightArrowAlt className='h-6 w-6 text-white ml-1' />
                        </button>
                    </a>
                </div>
            </div>

        </main>
    )
}

export default Main
