'use client'

import Form from "./Form"
import WiseCard from "./WiseCard"
import CarouselTextSection from "./Carousel-Text-Section"


function FinalSection({ translations, locale, isCarousel }) {

    const formTranslations = translations.form
    const wiseTranslations = translations.wise

    return (
        <div className="flex flex-col -mt-1 md:mt-0 pt-10 md:pt-0  items-center w-full bg-[#0B111D] ">
            <div className="max-w-[1100px] md:w-full flex flex-col items-center">
                <div className="px-8 md-8 md:px-0 w-full">
                    <div className="flex flex-col-reverse md:flex-row md:items-center justify-between py-5 mb:py-10">
                        <Form locale={locale} formTranslations={formTranslations} />
                        <WiseCard wiseTranslations={wiseTranslations} />
                    </div>
                </div>
            </div>
            {isCarousel && <CarouselTextSection mainLang={locale} /> } 
        </div>
    )
}

export default FinalSection