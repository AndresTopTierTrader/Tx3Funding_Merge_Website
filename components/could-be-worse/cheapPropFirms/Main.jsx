import CtaButton from "@/components/common/Buttons/CtaButton"

const XIcon = () => (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 19.25C15.3125 19.25 19.25 15.3125 19.25 10.5C19.25 5.6875 15.3125 1.75 10.5 1.75C5.6875 1.75 1.75 5.6875 1.75 10.5C1.75 15.3125 5.6875 19.25 10.5 19.25Z" stroke="#FF532D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.02344 12.9763L12.9759 8.0238" stroke="#FF532D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.9759 12.9763L8.02344 8.0238" stroke="#FF532D" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export function CheapPropFirms({ translations }) {
    return (
        <section className="bg-[#0B111D]">
            <div className="mx-auto max-w-[1440px] px-7 py-12 md:py-20 md:px-[112px] text-white">

                <article className="flex flex-col gap-8 md:flex-row justify-between">
                    <div className="flex flex-col gap-4 max-w-xl">
                        <h2 className="text-white text-3xl md:text-4xl font-light">{translations.t1}</h2>
                        <p className="text-[#717892]">{translations.p1}</p>
                    </div>

                    <ul className="flex flex-col gap-8 max-w-sm">
                        <li className="flex gap-4 items-start">
                            <span className="w-[21px] h-[21px] flex-shrink-0">
                                <XIcon />
                            </span>
                            {translations.p2}
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="w-[21px] h-[21px] flex-shrink-0">
                                <XIcon />
                            </span>
                            {translations.p3}
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="w-[21px] h-[21px] flex-shrink-0">
                                <XIcon />
                            </span>
                            {translations.p4}
                        </li>
                    </ul>
                </article>

                <div className="mt-16 md:mt-28 text-center text-[#717892] flex flex-col items-center gap-6">
                    <h2 className="text-white text-3xl md:text-4xl font-light text-center max-w-2xl mx-auto">{translations.t2}</h2>
                    <p className="text-nowrap">{translations.p5}</p>
                    <span className="mt-6">
                        <CtaButton
                            utm="https://app.toptiertrader.com/buy-challenge/?el=Could_Be_Worse_CTA&hcategory=Feb2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                            page="Could Be Worse"
                            section="The Truth About Cheap Prop Firms"
                            translation={translations.CTA}
                        />
                    </span>
                </div>
            </div>
        </section>
    )
}