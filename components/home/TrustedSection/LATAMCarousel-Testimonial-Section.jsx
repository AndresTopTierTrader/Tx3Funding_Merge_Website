import CarouselLATAM from "./Carousel/CarouselLATAM"

function LATAMCarouselTestimonialSection({ mainLang}) {
  return (
    <div className='flex flex-col items-center w-full overflow-x-hidden bg-transparent'>
        <div className='flex flex-col items-center' >
            <div className="mt-8 mb-12 mb:mb-12">
              <CarouselLATAM mainLang={mainLang} />
            </div>
        </div>
    </div>
  )
}

export default LATAMCarouselTestimonialSection
