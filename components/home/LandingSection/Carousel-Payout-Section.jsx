import Carousel from "./Carousel/Carousel"

function CarouselPayoutSection({translations, locale}) {
  return (
    <div className='flex bg-transparent overflow-x-hidden flex-col items-center w-full'>
        <div className='flex flex-col items-center' >
            <h3 className='text-white text-center text-2xl mb:text-3xl font-normal'> {translations.mission} <br className="block mb:hidden" /> <span className="bg-gradient-to-r font-semibold from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text" > {translations.million}  </span></h3>
            <div className="mt-8 mb-12 mb:mb-12">
              <Carousel locale={locale} />
            </div>
        </div>
    </div>
  )
}

export default CarouselPayoutSection
