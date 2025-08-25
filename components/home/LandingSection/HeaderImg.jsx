'use client'

import { track } from '@vercel/analytics/react'
import Image from 'next/image'

//Image
import mainImg from "./assets/main2.png"
import mainImgEs from "./assets/main2Es.png"

function HeaderImg({mainLang}) {
    return (
        <Image 
        onClick={ () => {track('Home - Header Image One Phase - Clicked')} }
        src={mainLang == 'es' ? mainImgEs : mainImg} width={500} height={500} priority alt="main_img" />
    )
}

export default HeaderImg