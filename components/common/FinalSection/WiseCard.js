
//Icons logo
import wiseLogo from "./assets/wise.svg"
import payoutsImg from "./assets/payouts.svg"


//Functions
import Image from "next/image"

function WiseCard({ wiseTranslations }) {

  return (
    <div className='bg-gradient-to-b from-[#0459B8] to-[#2596DC] w-86 md:w-96 rounded-3xl flex-col px-5 pt-3 pb-5 -mt-16 mb:mt-0 mb-8 mb:mb-0' >
      <div className="flex flex-row items-center justify-between ">
        <p className='text-white text-xl' > {wiseTranslations.wiseTitle1} <br />  {wiseTranslations.wiseTitle2}</p>
        <Image loading="lazy" src={wiseLogo} alt="wise-logo" className="h-24 w-24 object-contain -ml-10 -mt-2"></Image>
      </div>
      <p className='text-white text-sm font-light'> {wiseTranslations.wiseContent}</p>
      <Image loading="lazy" src={ payoutsImg} alt="payout-img" className="h-10 w-60 mt-5 -ml-2 object-contain"></Image>
    </div>
  )
}

export default WiseCard