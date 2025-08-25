'use client'

import { track } from '@vercel/analytics/react'
import Image from 'next/image'

//Image
import mainImg from "../LandingSection/assets/LATAMmainES.webp"
import mainImgEs from "../LandingSection/assets/LATAMmainES.webp"

function LATAMHeaderImg({mainLang}) {
    return (
        <Image 
        onClick={ () => {track('Home - Header Image One Phase - Clicked')} }
        src={mainLang == 'es' ? mainImgEs : mainImg} width={500} height={500} priority alt="main_img" />
    )
}

export default LATAMHeaderImg