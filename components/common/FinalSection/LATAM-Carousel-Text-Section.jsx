import Carousel from "./Carousel/Carousel"

function LATAMCarouselTextSection({ mainLang}) {
  return (
    <div className='flex flex-col items-center w-full overflow-x-hidden bg-transparent'>
        <div className='flex flex-col items-center' >
            <div className="mt-8 mb-12 mb:mb-12">
              <Carousel mainLang={'es'} />
            </div>
        </div>
    </div>
  )
}

export default LATAMCarouselTextSection
