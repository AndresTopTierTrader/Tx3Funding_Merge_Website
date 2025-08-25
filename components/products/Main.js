//Functions & Hooks
import decorationBgImg from "./assets/decorationBg.svg"
import Image from 'next/image'
import CtaButton from '@/components/common/Buttons/CtaButton';

const bgImageStyle = {
    backgroundColor: '#0B111D',
    backgroundImage: `
      radial-gradient(at 63% 43%, hsla(217,43%,7%,1) 0px, transparent 50%),
      radial-gradient(at 63% 59%, hsla(197,100%,32%,0.2) 0px, transparent 50%),
      radial-gradient(at 80% 94%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 40%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 39% 76%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 99% 46%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 51% 0%, hsla(212,100%,20%,1) 0px, transparent 50%),
      radial-gradient(at 0% 47%, hsla(212,100%,15%,1) 0px, transparent 50%),
      radial-gradient(at 0% 61%, hsla(197,100%,32%,0.6) 0px, transparent 50%)
    `
}

function Main({ translations }) {
    return (
        <main style={bgImageStyle} className="flex flex-col items-center mb:mt-0 mb:pb-0 mb:pt-40 pt-32">
           {/* Decoration Background Image */}
            <div className="flex flex-col items-center">
                <Image src={decorationBgImg} priority alt="decoration_bg" className="absolute w-[1000px] -top-32 mb:-top-40 z-0" />
            </div>

            <div className="flex relative flex-col items-center  ">
                <div className="flex flex-col items-center px-6 mb:px-0 justify-evenly w-full">
                    <h1 className="text-center text-4xl mb:text-6xl font-light text-white">
                        {translations.titleOne} <br />
                        {translations.titleTwo} <br />
                        {translations.titleThree} <br />
                    </h1>
                    <h2 className="mt-8 text-center text-base px-12 mb:px-0 mb:text-lg text-secondary">{translations.contentOne} {translations.contentTwo} {translations.contentThree} {translations.contentFour}</h2>

                    <div className='flex flex-col mt-0 mb:mt-10 z-20'>
                        <CtaButton
                            utm="https://app.toptiertrader.com/buy-challenge/?el=ProductsPageCTAJuly2025&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                            page="Products Page"
                            section="Landing Section"
                            translation=   {translations.ctaButton} />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-transparent to-[#0B111D] -mt-20 mb:-mt-20 z-0  h-32 w-full fadeInUp">
            </div>
        </main>
    )
}

export default Main
