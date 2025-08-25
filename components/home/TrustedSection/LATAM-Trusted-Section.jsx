import Image from 'next/image'

//Desktop Images
import colombia1ImgEs from './assets/LTcolombia1ES.webp'
import colombia2ImgEs from './assets/LTcolombia2ES.webp'
import brasilES from './assets/LTbrasilES.webp'
import argentinaES from './assets/LTargentinaES.webp'
import mexicoES from './assets/LTmexicoES.webp'

import CtaButton from '@/components/common/Buttons/CtaButton'
import LATAMCarouselTestimonialSection from './LATAMCarousel-Testimonial-Section'



const bgImageStyle = {
    backgroundColor: '#0B111D',
    backgroundImage: `
    radial-gradient(at 42% 0%, hsla(218,44%,7%,1) 0px, transparent 50%),
    radial-gradient(at 60% 0%, hsla(218,44%,7%,1) 0px, transparent 50%),
    radial-gradient(at 50% 33%, hsla(225,44%,19%,0.2) 0px, transparent 50%),
    radial-gradient(at 50% 47%, hsla(208,83%,41%,0.29) 0px, transparent 50%)
    `
}

function LATAMTrustedSection({ locale, translations }) {

    const mainLang = locale.split('-')[0]

    return (
        <div className='flex flex-col items-center px-8 pb-16 -mt-1 mb:px-32 mb:pt-16 mb:pb-36 mb:mt-0' style={bgImageStyle} >
            <section className="flex flex-col items-center max-w-[1200px]"
            >
                {/* Desktop Section */}
                <div className='flex-col items-center hidden mb:flex'>
                    {/* upper section */}
                    <div>
                        <Image src={mainLang == 'es' ? mexicoES : mexicoES} loading='lazy' alt='colombia' placeholder='blur' width={320} height={60} className='object-contain' />
                    </div>

                    {/* middle section */}
                    <section className='flex flex-row items-center mt-10'>
                        <Image src={mainLang == 'es' ? colombia2ImgEs : colombia2ImgEs} alt='marroco' placeholder='blur' width={170} height={60} className='object-contain' />
                        <div className='flex flex-col items-center mx-10'>
                            <h3 className='text-white font-light text-4xl text-center max-w-[400px] '> Traders de Todo el Mundo Confían en Nosotros</h3>
                            <p
                                className="pt-5 text-sm text-center font-light mb:font-normal mb:text-base w-full text-[#717892] max-w-[350px] mb:max-w-[400px]"
                            >
                                Descubre por qué tantos traders alrededor del mundo eligen TopTier como su Prop Firm preferida.
                            </p>
                            <div className='mt-5'>
                                <CtaButton
                                    utm="https://app.toptiertrader.com/buy-challenge/?el=TrustedByTradersAroundTheWorldCTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                                    page="Home"
                                    section="Trusted by Traders Section"
                                    translation="Comienza tu Challenge Ya" />
                            </div>

                        </div>
                        <Image src={mainLang == 'es' ? argentinaES : argentinaES} placeholder='blur' alt='swiss' width={170} height={60} className='object-contain' />
                    </section>

                    {/* lower section */}
                    <div className='flex flex-row items-start mt-10'>
                        <Image src={mainLang == 'es' ? brasilES : brasilES} placeholder='blur' alt='usa' width={170} height={60} className='object-contain' />
                        <Image src={mainLang == 'es' ? colombia1ImgEs : colombia1ImgEs} placeholder='blur' loading='lazy' alt='colombia' width={300} height={60} className='object-contain ml-8' />
                    </div>
                </div>

                {/* Mobile Section */}
                <div className='flex flex-col items-center mb:hidden' >
                    <div className='flex flex-col items-center max-w-[350px]'>
                        <h3 className='text-3xl font-light text-center text-white mb:text-4xl '>Traders de Todo el Mundo Confían en Nosotros</h3>
                        <p className="pt-5 text-sm text-center font-light mb:font-normal mb:text-base w-full text-[#717892]"
                        >
                            Descubre por qué tantos traders alrededor del mundo eligen TopTier como su Prop Firm preferida.
                        </p>

                        <CtaButton
                            utm="https://app.toptiertrader.com/buy-challenge/?el=TrustedByTradersAroundTheWorldCTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                            page="Home"
                            section="Trusted by Traders Section"
                            translation="Comienza tu Challenge Ya" />
                    </div>
                    <LATAMCarouselTestimonialSection mainLang={mainLang} />
                </div>
            </section>
        </div>
    )
}

export default LATAMTrustedSection
