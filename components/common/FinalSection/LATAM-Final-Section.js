'use client'
import LATAMForm from "./LATAMForm"
import LATAMWiseCard from "./LATAMWiseCard"
import LATAMCarouselTextSection from "./LATAM-Carousel-Text-Section"


function LATAMFinalSection({ translations, locale, isCarousel }) {

    const formTranslations = translations.form
    const wiseTranslations = translations.wise

    return (
        <div className="flex flex-col -mt-1 mb:mt-0 pt-10 mb:pt-0  items-center w-full bg-[#0B111D] ">
            <div className="max-w-[1100px] mb:w-full flex flex-col items-center">
                <div className="w-full px-8 mb-8 mb:px-0">
                    <div className="flex flex-col-reverse justify-between py-5 mb:flex-row mb:items-center mb:py-10">
                        <LATAMForm locale={locale} formTranslations={formTranslations} />
                        <LATAMWiseCard wiseTranslations={wiseTranslations} />
                    </div>
                </div>
            </div>
            {isCarousel && <LATAMCarouselTextSection mainLang={locale} /> } 
        </div>
    )
}

export default LATAMFinalSection