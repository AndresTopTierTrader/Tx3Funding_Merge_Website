import Image from "next/image"
import heroImgEN from './assets/heroImgEN.webp'
import heroImgSPA from './assets/heroImgSPA.webp'

export function Hero({translations, locale}) {

    const heroImg = locale === 'es' ? heroImgSPA : heroImgEN

    return (
        <section className="px-7 py-12 md:py-0 pb-12 md:pb-20 md:px-[112px] flex flex-col items-center gap-8">
            <picture className="w-full">
                <Image src={heroImg} alt="devices" className="mx-auto w-full max-w-[1200px] object-cover object-center"/>
            </picture>
            <h1 className="font-bold text-center text-2xl md:text-5xl">{translations.h1_title_1} <br />{translations.h1_title_2}</h1>
        </section>
    )
}