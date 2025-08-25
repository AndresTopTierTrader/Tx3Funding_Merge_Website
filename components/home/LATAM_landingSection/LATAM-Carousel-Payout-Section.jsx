import Carousel from "../LandingSection/Carousel/Carousel"


function LATAMCarouselPayoutSection({translations, locale}) {
  return (
    <div className='flex flex-col items-center w-full overflow-x-hidden bg-transparent'>
        <div className='flex flex-col items-center' >
            <h3 className='text-2xl font-normal text-center text-white mb:text-3xl'> Nuestra misión es Fondear <br className="block mb:hidden" /> <span className="bg-gradient-to-r font-semibold from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text" > 1 millón de Traders  </span></h3>
            <div className="mt-8 mb-12 mb:mb-12">
              <Carousel locale={'es'} />
            </div>
        </div>
    </div>
  )
}

export default LATAMCarouselPayoutSection
