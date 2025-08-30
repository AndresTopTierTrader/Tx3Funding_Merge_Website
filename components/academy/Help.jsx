import React from 'react'
import Image from 'next/image'
import iconFour from './assets/iconFour.svg'
import { ENVIRONMENT_URL } from '@/constants/global'


function Help({ translations, locale }) {
    return (
        <div className='flex flex-col items-center  bg-[#101933] mb:mb-0 mb:-mt-2 px-8 mb:px-0 '>
            <div className='flex flex-col items-center max-w-[1200px] mb:-pt-10  py-24'>
                <div className='flex flex-col w-full items-center'>
                    <div className='flex mb:flex-row flex-col-reverse mb:items-start items-center text-center mb:text-start justify-between w-full'>
                        <div className='flex flex-col mb:items-start items-center'>
                            <p className='text-3xl text-textPrimary font-light mt-4'> {translations.help.title} </p>
                            <p className='mb:max-w-[400px] text-center mb:text-left text-slate-300 mt-2'> {translations.help.p} </p>
                            <a href={`${ENVIRONMENT_URL}/${locale}/contact`} target='_blank'>
                                <button className='bg-transparent border-2 border-slate-300 text-textPrimary py-2 mt-8 w-fit px-6 rounded-xl font-medium transition-all hover:scale-110 hover:bg-ttblue hover:text-textPrimary'>  {translations.help.cta}</button>
                            </a>
                        </div>
                        <Image src={iconFour} alt='icon-four' className='w-52 mb:ml-44 ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help
