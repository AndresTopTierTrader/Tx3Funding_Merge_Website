import CtaButton from "@/components/common/Buttons/CtaButton"

const Icon = () => (
    <svg width="122" height="123" viewBox="0 0 122 123" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42.6812 76.1521C42.6812 80.5101 46.0508 84.0144 50.1841 84.0144H58.6304C62.2246 84.0144 65.1449 80.9594 65.1449 77.1405C65.1449 73.0521 63.3479 71.5695 60.6971 70.6261L47.1739 65.9086C44.5232 64.9652 42.7261 63.5275 42.7261 59.3942C42.7261 55.6203 45.6463 52.5203 49.2405 52.5203H57.6869C61.8203 52.5203 65.1899 56.0246 65.1899 60.3826" stroke="url(#paint0_linear_16215_779)" strokeWidth="5.3913" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M53.9131 48.0723V88.5071" stroke="url(#paint1_linear_16215_779)" strokeWidth="5.3913" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M98.8404 68.2898C98.8404 93.0898 78.7129 113.217 53.9129 113.217C29.1129 113.217 8.98535 93.0898 8.98535 68.2898C8.98535 43.4898 29.1129 23.3623 53.9129 23.3623" stroke="url(#paint2_linear_16215_779)" strokeWidth="5.3913" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M90.0978 5.32752C90.6539 5.07626 91.2774 5.04036 91.8527 5.21984L92.1359 5.32752L114.723 15.5334C115.632 15.9439 116.208 16.8552 116.214 17.8479L116.199 18.1477L114.762 31.296C114.028 38.0168 110.421 44.0531 104.926 47.8144L104.284 48.2382L92.447 55.7618C91.7236 56.2216 90.8273 56.2727 90.0655 55.9151L89.7867 55.7618L77.9495 48.2382C72.3108 44.6543 68.5227 38.7341 67.569 32.0684L67.4715 31.296L66.035 18.1477C65.9252 17.143 66.4084 16.1776 67.248 15.6712L67.5103 15.5334L90.0978 5.32752ZM91.1181 10.4526L71.2277 19.4398L72.4615 30.7322C73.0288 35.9244 75.8002 40.5915 80.0259 43.5208L80.6111 43.9094L91.1181 50.5876L101.625 43.9094C105.981 41.1405 108.918 36.5789 109.684 31.4368L109.775 30.7322L111.008 19.4398L91.1181 10.4526ZM96.6719 21.3934C97.5283 20.285 99.106 20.0925 100.196 20.9633C101.202 21.7672 101.441 23.1962 100.798 24.283L100.619 24.547L90.58 37.3082C89.7168 38.4254 88.1423 38.5972 87.0699 37.7498L86.8319 37.5361L81.8125 32.4316C80.8324 31.4349 80.8324 29.8189 81.8125 28.8222C82.7172 27.9022 84.1408 27.8314 85.1254 28.6099L85.3618 28.8222L88.3809 31.8924L96.6719 21.3934Z" fill="#FF532D" />
        <defs>
            <linearGradient id="paint0_linear_16215_779" x1="53.9355" y1="52.5203" x2="53.9355" y2="84.0144" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint1_linear_16215_779" x1="54.4131" y1="48.0723" x2="54.4131" y2="88.507" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
            <linearGradient id="paint2_linear_16215_779" x1="53.9129" y1="23.3623" x2="53.9129" y2="113.217" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0052B4" />
                <stop offset="1" stop-color="#45D1FF" />
            </linearGradient>
        </defs>
    </svg>
)

export function TheOnlyPropFirm({ translations }) {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1440px] px-7 py-12 md:py-20 md:px-[112px] flex flex-col items-center gap-6 md:gap-8">
                <span>
                    <Icon/>
                </span>
                
                <h2 className="mx-auto max-w-2xl text-3xl md:text-5xl font-semibold text-center">{translations.t4_1} <span className="bg-gradient-to-r font-semibold from-[#49b9de] to-[#167BCC] inline-block text-transparent bg-clip-text">{translations.t4_2}</span> {translations.t4_3}</h2>

                <p className="text-md md:text-lg mx-auto max-w-3xl text-center">{translations.p6}</p>

                <span className="mt-6">
                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Could_Be_Worse_CTA&hcategory=Feb2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Could Be Worse"
                        section="The ONLY Prop Firm with a Payout Fairness Promise"
                        translation={translations.CTA}
                    />
                </span>
            </div>
        </section>
    )
}