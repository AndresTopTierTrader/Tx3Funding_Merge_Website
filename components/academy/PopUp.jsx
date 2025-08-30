'use client'

import React, { useState, useEffect } from 'react'
import { BiWorld } from "react-icons/bi";
import { ENVIRONMENT_URL } from '@/constants/global';

function PopUp({ translations, popUpOpen }) {

    const [selectedLanguage, setSelectedLanguage] = useState('null')

    const buttonStyles = {
        selected: 'flex flex-row items-center bg-ttblue text-textPrimary py-2 mb:mr-5 px-8 rounded-2xl font-bold mr-3 transition-all hover:scale-110 hover:bg-ttblue',
        notSelected: 'bg-white text-ttblue border-2 border-ttblue py-2 mb:mr-5 mr-3 px-8 rounded-2xl font-bold transition-all hover:scale-110 hover:bg-ttblue hover:text-textPrimary'
    }

    const ctaStyles = {
        active: 'bg-ttorange text-textPrimary py-3 mt-8 w-fit px-6 rounded-2xl font-bold transition-all hover:scale-110 hover:bg-ttorange',
        inactive: 'bg-orange-300 text-textPrimary py-3 mt-8 w-fit px-6 rounded-2xl font-bold transition-all cursor-not-allowed '
    }

    const [currentLink, setCurrentLink] = useState('')

    useEffect(() => {
        if (selectedLanguage == 'es') {
            setCurrentLink('https://es-academy.toptiertrader.com/registro')
        } else {
            setCurrentLink('https://academy.toptiertrader.com/register')
        }
    }, [selectedLanguage])

    return (
        <div>
            {popUpOpen &&
                <div className='bg-black fixed h-screen w-screen bg-opacity-40 -mt-20 mb:-mt-0 flex flex-col items-center justify-center z-50'>
                    <div className='bg-white flex flex-col items-center text-center w-fit p-10 rounded-2xl mb:-mt-36'>
                        <p className='font-semibold mb-5 text-xl max-w-[300px] '> {translations.lang.select}</p>
                        <div className='flex flex-row justify-center mt-5 mb:ml-5'>
                            <button className={selectedLanguage === 'en' ? buttonStyles.selected : buttonStyles.notSelected} onClick={() => { setSelectedLanguage('en') }}>
                                {selectedLanguage === 'en' && <BiWorld className='pr-2 w-6 h-6' />}
                                <p>English</p>
                            </button>
                            <button className={selectedLanguage === 'es' ? buttonStyles.selected : buttonStyles.notSelected} onClick={() => { setSelectedLanguage('es') }}>
                                {selectedLanguage === 'es' && <BiWorld className='pr-2 w-6 h-6' />}
                                <p>Español</p>
                            </button>
                        </div>
                        <a href={currentLink != '' ? currentLink : `${ENVIRONMENT_URL}/en/academy`}>
                            <button className={selectedLanguage != 'null' ? ctaStyles.active : ctaStyles.inactive} > {translations.main.cta}</button>
                        </a>

                    </div>
                </div>}
        </div>

    )
}

export default PopUp
