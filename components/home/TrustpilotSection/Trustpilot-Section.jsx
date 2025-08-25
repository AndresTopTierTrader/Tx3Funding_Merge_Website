import Image from 'next/image'
import CarouselTestimonialSection from './Carousel-Testimonial-Section'

//Images
import logoImg from './assets/logo.svg'
import starImg from './assets/star.svg'



function TrustpilotSection({ locale, translations, noTitle = false }) {

    const mainLang = locale.split('-')[0]

    return (
        <div className='px-8 mb:px-32 mb:pt-16 pb-16 mb:pb-0 -mt-10 mb:-mt-20 flex flex-col items-center bg-[#0B111D]' >
            <section className="flex flex-col items-center max-w-[1200px]"
            >
                <div className='flex flex-col items-center' >
                    <div className='flex flex-col items-center '>
                        {
                            !noTitle && <h3 className='text-white font-light text-3xl max-w-[350px] mb:max-w-full mb:text-4xl text-center '>{translations.community_title}</h3>
                        }
                    </div>
                    <CarouselTestimonialSection mainLang={mainLang} />
                </div>
            </section>
        </div>
    )
}

export default TrustpilotSection
