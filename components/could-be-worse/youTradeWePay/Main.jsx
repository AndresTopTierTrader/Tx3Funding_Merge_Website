import CtaButton from "@/components/common/Buttons/CtaButton"
import image1 from './assets/image1.webp'
import image2 from './assets/image2.webp'
import image3 from './assets/image3.webp'
import { ENVIRONMENT_URL } from "@/constants/global"

export function YouTradeWePay({ translations }) {

    const ctas = [
        {
            bgImage: image1,
            cta: translations.button1,
            href: 'https://app.toptiertrader.com/buy-challenge/?el=CouldBeWorseJuly2025&hcategory=July2025&htrafficsource=Website&id=7fc1a973-4d65-4c72-8ea5-33424e3b29d2&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss'
        },
        {
            bgImage: image2,
            cta: translations.button2,
            href: 'https://app.toptiertrader.com/buy-challenge/?el=CouldBeWorseJuly2025&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss'
        },
        {
            bgImage: image3,
            cta: translations.button3,
            href: `${ENVIRONMENT_URL}/levels`
        }
    ]

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1440px] px-7 py-12 md:py-20 md:px-[112px] flex flex-col items-center gap-6 md:gap-8">
                <span className="text-center mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold">{translations.t6}</h2>
                    <p className="mt-4 text-[#717892]">{translations.p8}</p>
                </span>

                <ul className="grid md:grid-cols-3 gap-8 w-full mt-8 md:mt-16">
                    {
                        ctas.map(({ bgImage, cta, href }, index) => (
                            <li key={cta} style={{ backgroundImage: `url(${bgImage.src})` }} className="rounded-xl bg-ttblue grid place-items-center w-full min-h-[212px] bg-cover bg-center">
                                <span>
                                    <CtaButton
                                        utm={href}
                                        page="Could Be Worse"
                                        section={`You Trade. We Pay. Simple. Button ${index + 1}`}
                                        color={cta === translations.button3 ? 'blue' : 'orange'}
                                        translation={cta}
                                    />
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}