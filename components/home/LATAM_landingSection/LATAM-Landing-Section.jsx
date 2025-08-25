
import Image from "next/image"
import usersImg from "../LandingSection/assets/userImageLATAM.webp"
import bgVectorImg from "../LandingSection/assets/vectorBg.svg"
import '../LandingSection/animations.css'
import CtaButton from "@/components/common/Buttons/CtaButton"
import LATAMHeaderImg from "./LATAMHeaderImg"
import LATAMCarouselPayoutSection from "./LATAM-Carousel-Payout-Section"
import { bgImageStyle } from "@/constants/styles"


function LATAMLandingSection({ locale, translations }) {

  const mainLang = locale.split('-')[0]
  return (
    <main
      style={bgImageStyle}
      className="flex flex-col overflow-y-hidden relative items-center mb:mt-0 pt-36 -mt-12 max-[1450px]:overflow-x-hidden"
    >

      <section className="flex flex-col items-center max-w-[1200px] h-full relative">
        <Image src={bgVectorImg} priority alt="bg_vector" className="hidden mb:block mb:absolute bottom-0 -right-24 w-[450px]" />


        <div className="relative flex flex-row items-center px-6 mt-10 mb:px-0 mb:mt-0">
          <div className="flex flex-col items-center mb:items-start">
            <section className="mb-10 text-white ">

            </section>
            <h1 className="text-5xl font-semibold text-center text-white mb:text-left mb:text-7xl">
              <span className="block font-light text-white bg-gradient-to-r titleFirst">
                Tus Trades
              </span>
              <span className="block titleSecond">
                Grandes Profits
              </span>
            </h1>

            <h2 className="mt-6 max-w-[350px] text-center px-12 mb:px-0 mb:text-left text-bas font-light text-slate-300 fadeInUp">
              Ofrecemos los challenges más accesibles de la industria, sin comprometer la calidad, el soporte ni el gran payout que te mereces.            </h2>

            <div className="flex flex-col-reverse items-center mt-10 mb:flex-row">


              <CtaButton
                utm="https://app.toptiertrader.com/buy-challenge/?el=LandingSectionCTAJuly2025&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                page="Home"
                section="LATAM - Landing Section"
                translation="Comienza tu Challenge Hoy" />

              <div className="flex flex-row items-center ml-0 mb:ml-3 fadeInUp">
                <Image src={usersImg} width={70} height={70} priority alt="users_img" />
                <p className="ml-2 text-sm text-white">{translations.join}</p>
              </div>
            </div>

            {/* <section className="flex flex-row items-center mt-10 mb:mt-4 fadeInUp">
              <div class="trustpilot-widget" data-locale="en-US" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="614a31dc22ac21001db11d2b" data-style-height="120px" data-style-width="200px" data-theme="dark">
                <a href="https://www.trustpilot.com/review/toptiertrader.com" target="_blank" rel="noopener">Trustpilot</a>
              </div>
            </section> */}


          </div>

          <a className="hidden ml-24 -mt-10 mb:flex scaleIn"
            target="_blank"
            href="https://app.toptiertrader.com/buy-challenge/?el=LATAM_PAGE_HomeHeaderOnePhaseImg&hcategory=July2025&htrafficsource=Website&id=7fc1a973-4d65-4c72-8ea5-33424e3b29d2&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss">
            <LATAMHeaderImg mainLang={mainLang} />
          </a>
        </div>
      </section>

      <div className="bg-gradient-to-b from-transparent to-[#0B111D] mt-4 md:mt-10 w-full fadeInUp">
        <LATAMCarouselPayoutSection translations={translations} mainLang={mainLang} />
      </div>
    </main>
  );
}

export default LATAMLandingSection;