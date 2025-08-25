import Image from 'next/image'
import CarouselTestimonialSection from './Carousel-Testimonial-Section'

//Images
import logoImg from './assets/logo.svg'
import starImg from './assets/star.svg'



function TrustpilotSection({ locale, translations }) {

    const mainLang = locale.split('-')[0]

    return (
        <div className='px-8 mb:px-32 mb:pt-16 pb-16 mb:pb-0 -mt-10 mb:-mt-20 flex flex-col items-center bg-[#0B111D]' >
            <section className="flex flex-col items-center max-w-[1200px]"
            >
                <div className='flex flex-col items-center' >
                    <div className='flex flex-col items-center '>
                        <h3 className='text-white font-light text-3xl max-w-[350px] mb:max-w-full mb:text-4xl text-center '>{translations.community_title }</h3>
 
                        {/* Trustpilot*/}
                        {/* <section className='flex flex-row mt-10'>
                            <Image src={logoImg} alt='logo' loading='lazy' width={60} height={60} />
                            <div className='flex flex-col ml-3'>
                                <div className='flex flex-row'>
                                    <Image src={starImg} alt='star' loading='lazy' width={15} height={15} />
                                    <p className='text-white ml-1' >Trustpilot</p>
                                </div>
                                <div className='flex flex-col bg-white/10 px-2 mt-2 rounded-md py-1'>
                                <p className="text-white text-sm">4.2/5 <span className="text-gray-500 ml-1">4,062 {translations.community_review}</span></p>
                                </div>
                            </div>
                        </section> */}
                    </div>
                    <CarouselTestimonialSection mainLang={mainLang} />
                </div>
            </section>
        </div>
    )
}

export default TrustpilotSection
