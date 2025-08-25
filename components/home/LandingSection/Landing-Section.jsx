
import Link from "next/link"
import Image from "next/image"
import CarouselPayoutSection from "./Carousel-Payout-Section"
import usersImg from "./assets/usersImg.png"
import bgVectorImg from "./assets/vectorBg.svg"
import './animations.css'
import CtaButton from "@/components/common/Buttons/CtaButton"
import HeaderImg from "./HeaderImg"
import { bgImageStyle } from "@/constants/styles"

function LandingSection({ locale, translations }) {
  const mainLang = locale.split('-')[0]
  return (
    <main
      style={bgImageStyle}
      className="flex flex-col overflow-y-hidden relative items-center mb:mt-0 pt-36 mb:pt-16 -mt-24 max-[1450px]:overflow-x-hidden"
    >

      <section className="flex flex-col items-center max-w-[1200px] h-full relative">
        <Image src={bgVectorImg} priority alt="bg_vector" className="hidden mb:block mb:absolute bottom-0 -right-24 w-[450px]" />


        <div className="flex flex-row relative items-center px-6 mb:px-0 mb:mt-0 mt-10">
          <div className="flex flex-col items-center mb:items-start">
            <section className="text-white mb-10 ">

            </section>
            <h1 className="text-center text-5xl mb:text-left mb:text-7xl font-semibold text-white">
              <span className="bg-gradient-to-r font-light text-white block titleFirst">
                {translations.titleOne}
              </span>
              <span className="block titleSecond">
                {translations.titleTwo}
              </span>
            </h1>

            <h2 className="mt-6 max-w-[350px] text-center px-12 mb:px-0 mb:text-left text-bas font-light text-slate-300 fadeInUp">
              {translations.description}
            </h2>

            <div className="flex flex-col-reverse items-center mb:flex-row mt-10">


              <CtaButton
                utm="https://app.toptiertrader.com/buy-challenge/?el=LandingSectionCTAJuly2025&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                page="Home"
                section="Landing Section"
                translation={translations.cta} />

              <div className="ml-0 mb:ml-3 flex flex-row items-center fadeInUp">
                <Image src={usersImg} width={70} height={70} priority alt="users_img" />
                <p className="text-white ml-2 text-sm">{translations.join}</p>
              </div>
            </div>

            {/* <section className="flex flex-row items-center mt-10 mb:mt-4 fadeInUp">
              <div class="trustpilot-widget" data-locale="en-US" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="614a31dc22ac21001db11d2b" data-style-height="120px" data-style-width="200px" data-theme="dark">
                <a href="https://www.trustpilot.com/review/toptiertrader.com" target="_blank" rel="noopener">Trustpilot</a>
              </div>
            </section> */}


          </div>

          <a className="-mt-10 ml-24 hidden mb:flex scaleIn"
            target="_blank"
            href="https://app.toptiertrader.com/buy-challenge/?el=HomeHeaderOnePhaseImg&hcategory=July2025&htrafficsource=Website&id=7fc1a973-4d65-4c72-8ea5-33424e3b29d2&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss">
            <HeaderImg mainLang={mainLang} />
          </a>
        </div>
      </section>

      <div className="bg-gradient-to-b from-transparent to-[#0B111D] mt-4 md:mt-10 w-full fadeInUp">
        <CarouselPayoutSection translations={translations} mainLang={mainLang} />
      </div>
    </main>
  );
}

export default LandingSection;