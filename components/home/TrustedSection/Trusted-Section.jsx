import Image from 'next/image'
import CarouselTestimonialSection from './Carousel-Testimonial-Section'

//Desktop Images
import colombiaImg from './assets/colombia.png'
import colombiaImgEs from './assets/colombiaEs.png'
import usaImg from './assets/usa.png'
import usaImgEs from './assets/usaEs.png'
import marrocoImg from './assets/marroco.png'
import marrocoImgEs from './assets/marrocoEs.png'
import swissImg from './assets/swiss.png'
import swissImgEs from './assets/swissEs.png'
import indiaImg from './assets/india.png'
import indiaImgEs from './assets/indiaEs.png'

import CtaButton from '@/components/common/Buttons/CtaButton'



const bgImageStyle = {
    backgroundColor: '#0B111D',
    backgroundImage: `
    radial-gradient(at 42% 0%, hsla(218,44%,7%,1) 0px, transparent 50%),
    radial-gradient(at 60% 0%, hsla(218,44%,7%,1) 0px, transparent 50%),
    radial-gradient(at 50% 33%, hsla(225,44%,19%,0.2) 0px, transparent 50%),
    radial-gradient(at 50% 47%, hsla(208,83%,41%,0.29) 0px, transparent 50%)
    `
}

function TrustedSection({ locale, translations }) {

    const mainLang = locale.split('-')[0]

    return (
        <div className='px-8 mb:px-32 mb:pt-16 pb-16 mb:pb-36 -mt-1 mb:mt-0 flex flex-col items-center' style={bgImageStyle} >
            <section className="flex flex-col items-center max-w-[1200px]"
            >
                {/* Desktop Section */}
                <div className='hidden mb:flex flex-col items-center'>
                    {/* upper section */}
                    <div>
                        <Image src={mainLang == 'es' ? indiaImgEs : indiaImg} loading='lazy' alt='colombia' placeholder='blur' width={320} height={60} className='object-contain' />
                    </div>

                    {/* middle section */}
                    <section className='flex flex-row items-center mt-10'>
                        <Image src={mainLang == 'es' ? marrocoImgEs : marrocoImg} alt='marroco' placeholder='blur' width={170} height={60} className='object-contain' />
                        <div className='flex flex-col items-center mx-10'>
                            <h3 className='text-white font-light text-4xl text-center max-w-[400px] '> {translations.trusted_title}</h3>
                            <p
                                className="pt-5 text-sm text-center font-light mb:font-normal mb:text-base w-full text-[#717892] max-w-[350px] mb:max-w-[400px]"
                            >
                                {translations.trusted_desc}
                            </p>
                            <div className='mt-5'>
                                <CtaButton
                                    utm="https://app.toptiertrader.com/buy-challenge/?el=TrustedByTradersAroundTheWorldCTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                                    page="Home"
                                    section="Trusted by Traders Section"
                                    translation={translations.cta} />
                            </div>

                        </div>
                        <Image src={mainLang == 'es' ? swissImgEs : swissImg} placeholder='blur' alt='swiss' width={170} height={60} className='object-contain' />
                    </section>

                    {/* lower section */}
                    <div className='flex flex-row items-start mt-10'>
                        <Image src={mainLang == 'es' ? usaImgEs : usaImg} placeholder='blur' alt='usa' width={170} height={60} className='object-contain' />
                        <Image src={mainLang == 'es' ? colombiaImgEs : colombiaImg} placeholder='blur' loading='lazy' alt='colombia' width={300} height={60} className='ml-8 object-contain' />
                    </div>
                </div>

                {/* Mobile Section */}
                <div className='flex mb:hidden flex-col items-center' >
                    <div className='flex flex-col items-center max-w-[350px]'>
                        <h3 className='text-white font-light text-3xl mb:text-4xl text-center '> {translations.trusted_title}</h3>
                        <p className="pt-5 text-sm text-center font-light mb:font-normal mb:text-base w-full text-[#717892]"
                        >
                            {translations.trusted_desc}
                        </p>

                        <CtaButton
                            utm="https://app.toptiertrader.com/buy-challenge/?el=TrustedByTradersAroundTheWorldCTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                            page="Home"
                            section="Trusted by Traders Section"
                            translation={translations.cta} />
                    </div>
                    <CarouselTestimonialSection mainLang={mainLang} />
                </div>
            </section>
        </div>
    )
}

export default TrustedSection
