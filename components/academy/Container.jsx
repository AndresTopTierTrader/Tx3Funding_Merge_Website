'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const MainSectionLazyLoading = dynamic(() => import("@/components/academy/Main"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10"></p>
})

import PopUp from './PopUp'

//Lazy loading for Learn Section
const LearnSectionLazyLoading = dynamic(() => import("@/components/academy/Learn"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10"></p>
})

//Lazy loading for Classes Section
const ClassesSectionLazyLoading = dynamic(() => import("@/components/academy/Classes"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10"></p>
})



const HelpSectionLazyLoading = dynamic(() => import("@/components/academy/Help"), {
  ssr: true,
  loading: () => <p className="w-full bg-white py-10"></p>
})

const CarouselLazyLoading = dynamic(() => import("@/components/academy/Carousel"), {
  ssr: false,
  loading: () => <p className="w-full bg-white py-10"></p>
})


function Container({ translations, locale }) {

  const [popUpOpen, setPopUpOpen] = useState(false)
  return (
    <div className=''>
      <PopUp translations={translations} popUpOpen={popUpOpen}></PopUp>
      <MainSectionLazyLoading translations={translations} setPopUpOpen={setPopUpOpen} />
      <CarouselLazyLoading />
      <LearnSectionLazyLoading translations={translations} />
      <ClassesSectionLazyLoading translations={translations} setPopUpOpen={setPopUpOpen} />


      <div className='-mt-24'>
        <HelpSectionLazyLoading translations={translations} locale={locale} />
      </div>
    </div>
  )
}

export default Container
