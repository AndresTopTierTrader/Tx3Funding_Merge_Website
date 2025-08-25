import React from 'react'

import benzignaLogo from "./assets/benzigna.svg"
import bloombergLogo from "./assets/bloomberg.svg"
import digitalLogo from "./assets/digital.svg"
import fxproLogo from "./assets/fxpro.svg"
import yahooLogo from "./assets/yahoo.svg"
import Image from 'next/image'
import  CarouselMb from './carousel/carouselMb'

function Carousel() {

    
  const hyperLinksStyle = "hover:scale-110 transition-all mx-11 cursor-pointer"

    return (
        <div className='bg-[#1D2332] h-32 mb:h-24 '>
            {/* Desktop Carousel*/}
            <div className="mb:flex flex-col mb:flex-row justify-around items-center hidden">
                <Image src={benzignaLogo} width={160} height={94} alt={benzignaLogo.toString()} className={hyperLinksStyle}  />
                <Image src={fxproLogo} width={160} height={94} alt={fxproLogo.toString()} className={hyperLinksStyle}  />
                <Image src={bloombergLogo} width={160} height={94} alt={bloombergLogo.toString()} className={hyperLinksStyle}  />
                <Image src={yahooLogo} width={130} height={94} alt={yahooLogo.toString()} className={hyperLinksStyle}  />
                <Image src={digitalLogo} width={130} height={94} alt={digitalLogo.toString()} className={hyperLinksStyle}  />
            </div>

            <div className="mb:hidden flex -pt-10">
                <CarouselMb></CarouselMb>
            </div>
        </div>
    )
}

export default Carousel
