'use client'
import { FaArrowRight } from 'react-icons/fa';
import Dropdown from './dropdown';
import CtaButton from '@/components/common/Buttons/CtaButton';


function Faq({ translations, locale }) {


    return (
        <div className='px-8 mb:px-10 pb-28 mb:-mt-24 mb:pt-24 mb:pb-32 -mt-12 flex flex-col bg-[#0B111D] items-center'>
            <div className="mb:max-w-[1200px]">
                {/* Tile*/}
                <div className='flex flex-col mb:w-full justify-between mb:flex-row py-10 mb:pt-16'>
                    <div>
                        <h3 className="text-white text-3xl mb:text-4xl py-4 font-light"> {translations.titleOne} <br />  {translations.titleTwo} </h3>
                        <p className="text-secondary mb:w-3/4 text-base">
                            {translations.content}
                        </p>
                        <div className='flex flex-col mb:flex-row mt-2 mb:mt-6'>
                            <CtaButton
                                utm="https://app.toptiertrader.com/buy-challenge/?el=FaqSectionProductsCTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                                page="Challenges Page"
                                section="Faq Section Section"
                                translation={translations.ctaButton} />
                          
                            <a href='https://help.toptiertrader.com'>
                                <button className="flex flex-row mt-4 mb:mt-0 mb:ml-4  items-center text-sm text-white rounded-lg bg-transparent border border-white hover:bg-orange-700 transition-all py-2 px-4 scaleIn">
                                    {translations.buttonFaqs}
                                </button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className='mt-10 mb:mt-0'>
                            <div className="">
                                <Dropdown key="narrow" data={{ title: translations.faqOneTitle, color: "blue", content: translations.faqOneContent }}></Dropdown>
                                <Dropdown key="orange" data={{ title: translations.faqTwoTitle, color: "orange", content: translations.faqTwoContent }}></Dropdown>
                                <Dropdown key="color" data={{ title: translations.faqThreeTitle, color: "blue", content: translations.faqThreeContent }}></Dropdown>
                                <Dropdown key="other" data={{ title: translations.faqFourTitle, color: "orange", content: translations.faqFourContent }}></Dropdown>
                                <Dropdown key="own" data={{ title: translations.faqFiveTitle, color: "blue", content: translations.faqFiveContent }}></Dropdown>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
