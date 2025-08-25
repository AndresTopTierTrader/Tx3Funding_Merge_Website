import Carousel from "./Carousel/Carousel"

function CarouselTestimonialSection({ mainLang}) {
  return (
    <div className='flex bg-transparent overflow-x-hidden flex-col items-center w-full'>
        <div className='flex flex-col items-center' >
            <div className="mt-8 mb-12 mb:mb-12">
              <Carousel mainLang={mainLang} />
            </div>
        </div>
    </div>
  )
}

export default CarouselTestimonialSection
