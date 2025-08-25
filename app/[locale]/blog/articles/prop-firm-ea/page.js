//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import { bgImageStyleBlog } from "@/constants/styles"
import HyperLink from "@/utils/blog/HyperLink";

const FinalSectionLazyLoading = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
    ssr: true,
    loading: () => <div className="w-full py-10 flex mb:flex-row flex-col justify-center items-center rounded-xl">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <p className="text-white ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Latest Resources...</p>
    </div>
})

const i18nNameSpaces = ["common", "blog_landing", "article_prop_firm_ea"];

//Params to bring the info from the db
const blogParam = "prop-firm-ea"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "Prop Firm EA: Best Companies That Allow Automated Trading",
    description: "Discover top prop firms that support Expert Advisors (EAs) for automated trading. Boost profits with EA-compatible platforms and high payout splits.",
    keywords: "prop firm EA, best prop firms for EA, automated trading, EA trading prop firms, Expert Advisor prop firms",
    language: "en",
    subject: "Prop Trading and Expert Advisors",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "Prop Firm EA: Best Companies That Allow Automated Trading",
        description: "Explore the best prop firms that support automated trading with EAs. Learn how to choose the right one and maximize your returns.",
        image: "",
        site_name: "Toptier Trader",
        url: `${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`
    },
    alternates: {
        languages: {
            'en': '/en',
            'es': '/es',
            'es-co': '/es-co',
            'es-ar': '/es-ar',
            'es-mx': '/es-mx',
            'es-pr': '/es-pr',
            'fr': '/fr'
        }
    }
};

const metadata_es = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "Prop Firm EA: Mejores Compañías Que Permiten Trading Automatizado",
    description: "Descubre las mejores prop firms que permiten Expert Advisors (EA's) para trading automatizado. Aumenta tus ganancias con plataformas compatibles y altos payouts.",
    keywords: "prop firm EA, mejores prop firms para EA, trading automatizado, trading con EA, compañías de trading con EA",
    language: "es",
    subject: "Trading Automatizado y Prop Firms",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "Prop Firm EA: Mejores Compañías Que Permiten Trading Automatizado",
        description: "Conoce las mejores prop firms que permiten el uso de EA's. Optimiza tu trading automatizado y maximiza tus beneficios.",
        image: "",
        site_name: "Toptier Trader",
        url: `${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`
    },
    alternates: {
        languages: {
            'en': '/en',
            'es': '/es',
            'es-co': '/es-co',
            'es-ar': '/es-ar',
            'es-mx': '/es-mx',
            'es-pr': '/es-pr',
            'fr': '/fr'
        }
    }
};

const metadata_fr = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "EA pour sociétés de trading propriétaire : Les meilleures entreprises qui permettent le trading automatisé",
    description: "Découvrez les meilleures sociétés de trading propriétaire qui supportent les Expert Advisors (EA) pour le trading automatisé. Augmentez vos profits avec des plateformes compatibles EA et des répartitions de gains élevées.",
    keywords: "EA pour prop firm, meilleures sociétés propriétaires pour EA, trading automatisé, sociétés de trading pour EA, sociétés propriétaires pour Expert Advisor",
    language: "fr",
    subject: "Trading Propriétaire et Expert Advisors",
    coverage: "Mondial",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "EA pour sociétés de trading propriétaire : Les meilleures entreprises qui permettent le trading automatisé",
        description: "Explorez les meilleures sociétés de trading propriétaire qui supportent le trading automatisé avec des EA. Apprenez à choisir la bonne et à maximiser vos rendements.",
        image: "",
        site_name: "Toptier Trader",
        url: `${ENVIRONMENT_URL}/fr/blog/articles/${blogParam}`
    },
    alternates: {
        languages: {
            'en': '/en',
            'es': '/es',
            'es-co': '/es-co',
            'es-ar': '/es-ar',
            'es-mx': '/es-mx',
            'es-pr': '/es-pr',
            'fr': '/fr'
        }
    }
};

//Exports the metadata depending on the language
export async function generateMetadata({ params: { locale } }) {

    let returnedMetadata = ''
    const mainLang = locale.split('-')[0]

    if (mainLang === "en") {
        returnedMetadata = metadata_en
    }
    if (mainLang === "es") {
        returnedMetadata = metadata_es
    }
    if (mainLang === "fr") {
        returnedMetadata = metadata_fr
    }
    return returnedMetadata
}

export default async function Page({ params: { locale } }) {
    const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);
    const mainLang = locale.split('-')[0]

    const headContentTranslations = {
        home: t('blog_landing:breadcrumbs_home'),
        blog: t('blog_landing:breadcrumbs_blog'),
    }

    const finalSectionTranslations = {
        form: {
            formTitle1: t('common:form_title_1'),
            formTitle2: t('common:form_title_2'),
            formLoop: t('common:form_loop'),
            formContent1: t('common:form_content_1'),
            formContent2: t('common:form_content_2'),
            formSubmit: t('common:form_submit'),
            emailHere: t('common:email_here')
        },
        wise: {
            wiseTitle1: t('common:wise_title_1'),
            wiseTitle2: t('common:wise_title_2'),
            wiseContent: t('common:wise_content')
        },
        resources: {
            resourcesTradingTitle: t('common:resources_trading_title'),
            resourcesResourcesTitle: t('common:resources_resources_title')
        }
    }

    const blogTranslations = {
        h1_title: t('article_prop_firm_ea:h1_title'),
        CTA: t('article_prop_firm_ea:CTA'),
        hyperLink: t('article_prop_firm_ea:hyperLink'),
        t1: t('article_prop_firm_ea:t1'),
        t2: t('article_prop_firm_ea:t2'),
        t3: t('article_prop_firm_ea:t3'),
        t4: t('article_prop_firm_ea:t4'),
        t5: t('article_prop_firm_ea:t5'),
        t6: t('article_prop_firm_ea:t6'),
        t7: t('article_prop_firm_ea:t7'),
        p1: t('article_prop_firm_ea:p1'),
        p2_1: t('article_prop_firm_ea:p2_1'),
        p2_2: t('article_prop_firm_ea:p2_2'),
        p2_3: t('article_prop_firm_ea:p2_3'),
        p2_4: t('article_prop_firm_ea:p2_4'),
        p3_1: t('article_prop_firm_ea:p3_1'),
        p3_2: t('article_prop_firm_ea:p3_2'),
        p3_3: t('article_prop_firm_ea:p3_3'),
        p3_4: t('article_prop_firm_ea:p3_4'),
        p3_5: t('article_prop_firm_ea:p3_5'),
        p3_6: t('article_prop_firm_ea:p3_6'),
        p4_1: t('article_prop_firm_ea:p4_1'),
        p4_2: t('article_prop_firm_ea:p4_2'),
        p4_3: t('article_prop_firm_ea:p4_3'),
        p4_4: t('article_prop_firm_ea:p4_4'),
        p4_5: t('article_prop_firm_ea:p4_5'),
        p4_6: t('article_prop_firm_ea:p4_6'),
        p4_7: t('article_prop_firm_ea:p4_7'),
        p4_8: t('article_prop_firm_ea:p4_8'),
        p5_1: t('article_prop_firm_ea:p5_1'),
        p5_2: t('article_prop_firm_ea:p5_2'),
        p5_3: t('article_prop_firm_ea:p5_3'),
        p5_4: t('article_prop_firm_ea:p5_4'),
        p5_5: t('article_prop_firm_ea:p5_5'),
        p5_6: t('article_prop_firm_ea:p5_6'),
        p5_7: t('article_prop_firm_ea:p5_7'),
        p5_8: t('article_prop_firm_ea:p5_8'),
        p5_9: t('article_prop_firm_ea:p5_9'),
        p5_10: t('article_prop_firm_ea:p5_10'),
        p5_11: t('article_prop_firm_ea:p5_11'),
        p6_1: t('article_prop_firm_ea:p6_1'),
        p6_2: t('article_prop_firm_ea:p6_2'),
        p6_3: t('article_prop_firm_ea:p6_3'),
        p6_4: t('article_prop_firm_ea:p6_4'),
        p6_5: t('article_prop_firm_ea:p6_5'),
        p6_6: t('article_prop_firm_ea:p6_6'),
        p6_7: t('article_prop_firm_ea:p6_7'),
        p6_8: t('article_prop_firm_ea:p6_8'),
        p6_9: t('article_prop_firm_ea:p6_9'),
        p6_10: t('article_prop_firm_ea:p6_10'),
        p6_11: t('article_prop_firm_ea:p6_11'),
        p7_1: t('article_prop_firm_ea:p7_1'),
        p7_2: t('article_prop_firm_ea:p7_2'),
        p8_1: t('article_prop_firm_ea:p8_1'),
        p8_2: t('article_prop_firm_ea:p8_2'),
        p8_3: t('article_prop_firm_ea:p8_3'),
        p8_4: t('article_prop_firm_ea:p8_4'),
        p8_5: t('article_prop_firm_ea:p8_5'),
        p8_6: t('article_prop_firm_ea:p8_6'),
        p8_7: t('article_prop_firm_ea:p8_7'),
        p8_8: t('article_prop_firm_ea:p8_8'),
        p8_9: t('article_prop_firm_ea:p8_9'),
        p9: t('article_prop_firm_ea:p9'),
    }

    const hyperLink = [
        {
            phrase: blogTranslations.hyperLink,
            link: `${ENVIRONMENT_URL}/${locale}/products/challenges`
        }
    ]

    return (
        <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={i18nNameSpaces}
        >

            <Content currentLanguage={i18n.language} params={blogParam} translations={headContentTranslations} locale={locale} />


            {/* Article Content */}
            <div style={bgImageStyleBlog} className="flex flex-col items-start pb-20 mb:pt-5">

                <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5 ">{blogTranslations.h1_title}</h1>

                <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

                    {/* User */}
                    {/* <User name={'Mike WIlliams'} role={'Trading Journalist'} date={'Nov 27 2024'} userImg={userImg} /> */}

                    {blogTranslations.p1} <br /> <br />
                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />
                    {blogTranslations.p2_1} <br /> <br />
                    {blogTranslations.p2_2} <br /> <br />
                    {blogTranslations.p2_3} <br /> <br />
                    {blogTranslations.p2_4} <br /> <br />

                    {/* desktop table */}
                    <div class="container mx-auto hidden mb:block">
                        <table class="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th class="border border-white p-2 font-bold text-left">Prop Firm</th>
                                    <th class="border border-white p-2 font-bold text-left">EA allowed?</th>
                                    <th class="border border-white p-2 font-bold text-left">Payout split</th>
                                    <th class="border border-white p-2 font-bold text-left">Max Drawdown</th>
                                    <th class="border border-white p-2 font-bold text-left">Platform</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-white p-2">Toptier Trader</td>
                                    <td class="border border-white p-2">Yes</td>
                                    <td class="border border-white p-2">Up to 90%</td>
                                    <td class="border border-white p-2">10%</td>
                                    <td class="border border-white p-2">Tradelocker</td>
                                </tr>
                                <tr>
                                    <td class="border border-white p-2">The Funded Trader</td>
                                    <td class="border border-white p-2 text-red-500">No</td>
                                    <td class="border border-white p-2">Up to 90%</td>
                                    <td class="border border-white p-2">10%</td>
                                    <td class="border border-white p-2">Dxtrade, Ctrader</td>
                                </tr>
                                <tr>
                                    <td class="border border-white p-2">Funding Traders</td>
                                    <td class="border border-white p-2">Yes (with restrictions)</td>
                                    <td class="border border-white p-2">80%</td>
                                    <td class="border border-white p-2">10%</td>
                                    <td class="border border-white p-2">Ctrader</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> <br /> <br />

                    {/* mobile table */}
                    <div class="container mx-auto mb:hidden">
                        {/* <!-- Toptier Trader --> */}
                        <div class="mb-6">
                            <div class="border border-white p-2 font-bold bg-gray-800">Toptier Trader</div>
                            <div class="grid grid-cols-2 border-l border-r border-white">
                                <div class="border-b border-white p-2 font-semibold">EA allowed?</div>
                                <div class="border-b border-white p-2">Yes</div>
                            </div>
                            <div class="grid grid-cols-2 border-l border-r border-white">
                                <div class="border-b border-white p-2 font-semibold">Payout split</div>
                                <div class="border-b border-white p-2">Up to 90%</div>
                            </div>
                            <div class="grid grid-cols-2 border-l border-r border-white">
                                <div class="border-b border-white p-2 font-semibold">Max Drawdown</div>
                                <div class="border-b border-white p-2">10%</div>
                            </div>
                            <div class="grid grid-cols-2 border-l border-r border-b border-white">
                                <div class="p-2 font-semibold">Platform</div>
                                <div class="p-2">Tradelocker</div>
                            </div>
                        </div>

                        {/* <!-- The Funded Trader --> */}
                        <div class="mb-6">
                            <div class="border border-white p-2 font-bold bg-gray-800">The Funded Trader</div>
                            <div class="grid grid-cols-2 border-l border-r border-white">
                                <div class="border-b border-white p-2 font-semibold">EA allowed?</div>
                                <div class="border-b border-white p-2 text-red-500">No</div>
                            </div>
                            <div class="grid grid-cols-2 border-l border-r border-white">
                                <div class="border-b border-white p-2 font-semibold">Payout split</div>
                                <div class="border-b border-white p-2">Up to 90%</div>
                            </div>
                            <div class="grid grid-cols-2 border-l border-r border-white">
                                <div class="border-b border-white p-2 font-semibold">Max Drawdown</div>
                                <div class="border-b border-white p-2">10%</div>
                            </div>
                            <div class="grid grid-cols-2 border-l border-r border-b border-white">
                                <div class="p-2 font-semibold">Platform</div>
                                <div class="p-2">Dxtrade, Ctrader</div>
                            </div>
                        </div>

                        {/* <!-- Funding Traders --> */}
                        <div class="mb-6">
                            <div class="border border-white p-2 font-bold bg-gray-800">Funding Traders</div>
                            <div class="grid grid-cols-2 border-l border-r border-white">
                                <div class="border-b border-white p-2 font-semibold">EA allowed?</div>
                                <div class="border-b border-white p-2">Yes (with restrictions)</div>
                            </div>
                            <div class="grid grid-cols-2 border-l border-r border-white">
                                <div class="border-b border-white p-2 font-semibold">Payout split</div>
                                <div class="border-b border-white p-2">80%</div>
                            </div>
                            <div class="grid grid-cols-2 border-l border-r border-white">
                                <div class="border-b border-white p-2 font-semibold">Max Drawdown</div>
                                <div class="border-b border-white p-2">10%</div>
                            </div>
                            <div class="grid grid-cols-2 border-l border-r border-b border-white">
                                <div class="p-2 font-semibold">Platform</div>
                                <div class="p-2">Ctrader</div>
                            </div>
                        </div>
                    </div> <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    {blogTranslations.p3_1} <br /> <br />
                    {blogTranslations.p3_2} <br /> <br />
                    {blogTranslations.p3_3} <br /> <br />
                    {blogTranslations.p3_4} <br /> <br />
                    {blogTranslations.p3_5} <br /> <br />
                    <p className="text-yellow-200">{blogTranslations.p3_6}</p> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    <Image src={image1} alt="man sitted on desk" className="w-full" /> <br />
                    {blogTranslations.p4_1} <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />
                    <strong className="text-white">{blogTranslations.p4_3}</strong> <br /> <br />
                    {blogTranslations.p4_4} <br /> <br />
                    <strong className="text-white">{blogTranslations.p4_5}</strong> <br /> <br />
                    {blogTranslations.p4_6} <br /> <br />
                    <strong className="text-white">{blogTranslations.p4_7}</strong> <br /> <br />
                    {blogTranslations.p4_8} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    <Image src={image2} alt="trade graphics on tablet" className="w-full" /> <br />
                    {blogTranslations.p5_1} <br /> <br />
                    {blogTranslations.p5_2} <br /> <br />
                    <strong className="text-white">{blogTranslations.p5_3}</strong> <br /> <br />
                    {blogTranslations.p5_4} <br /> <br />
                    {blogTranslations.p5_5} <br /> <br />
                    <strong className="text-white">{blogTranslations.p5_6}</strong> <br /> <br />
                    {blogTranslations.p5_7} <br /> <br />
                    {blogTranslations.p5_8} <br /> <br />
                    <strong className="text-white">{blogTranslations.p5_9}</strong> <br /> <br />
                    {blogTranslations.p5_10} <br /> <br />
                    {blogTranslations.p5_11} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    <Image src={image3} alt="desk with tech devices" className="w-full" /> <br />
                    {blogTranslations.p6_1} <br /> <br />
                    {blogTranslations.p6_2} <br /> <br />
                    <strong className="text-white">{blogTranslations.p6_3}</strong> <br /> <br />
                    {blogTranslations.p6_4} <br /> <br />
                    {blogTranslations.p6_5} <br /> <br />
                    <strong className="text-white">{blogTranslations.p6_6}</strong> <br /> <br />
                    {blogTranslations.p6_7} <br /> <br />
                    {blogTranslations.p6_8} <br /> <br />
                    <strong className="text-white">{blogTranslations.p6_9}</strong> <br /> <br />
                    {blogTranslations.p6_10} <br /> <br />
                    {blogTranslations.p6_11} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />

                    <strong className="text-white">{blogTranslations.p8_1}</strong> <br /> <br />
                    {blogTranslations.p8_2} <br /> <br />
                    {blogTranslations.p8_3} <br /> <br />
                    {blogTranslations.p8_4} <br /> <br />
                    <strong className="text-white">{blogTranslations.p8_5}</strong> <br /> <br />
                    {blogTranslations.p8_6} <br /> <br />
                    {blogTranslations.p8_7} <br /> <br />
                    <strong className="text-white">{blogTranslations.p8_8}</strong> <br /> <br />
                    {blogTranslations.p8_9} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    <HyperLink text={blogTranslations.p9} links={hyperLink} /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Prop_Firm_EA_Blog_CTA&hcategory=Apr2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="Prop Firm EA: Best Companies That Allow Automated Trading"
                        translation={blogTranslations.CTA} />
                    <br />

                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}