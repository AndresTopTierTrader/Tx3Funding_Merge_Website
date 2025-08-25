//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import image1 from './assets/Top 5 Best Indicators for Futures Trading Success - 2.jpg'
import image2 from './assets/Top 5 Best Indicators for Futures Trading Success - 3.jpg'
import image3 from './assets/Top 5 Best Indicators for Futures Trading Success - 4.jpg'
import image4 from './assets/Top 5 Best Indicators for Futures Trading Success - 5.jpg'
import image5 from './assets/Top 5 Best Indicators for Futures Trading Success - 6.jpg'
import { bgImageStyleBlog } from "@/constants/styles"
import Content from "../../../../../components/blog/Content";

const FinalSectionLazyLoading = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
    ssr: true,
    loading: () => <div className="flex flex-col items-center justify-center w-full py-10 mb:flex-row rounded-xl">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <p className="mt-5 ml-3 text-xl text-white mb:ml-5 mb:mt-0">Loading Latest Resources...</p>
    </div>
})

const i18nNameSpaces = ["common", "blog_landing", "article_top_5_best_indicators_for_futures"];

//Params to bring the info from the db
const blogParam = "top-5-best-indicators-for-futures"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "Top 5 Best Indicators for Futures Trading Success",
    description: "Discover the best indicators for futures trading including RSI, VWAP, MACD, and more. Boost your strategy with these expert-recommended tools.",
    keywords: "best indicators for futures trading, RSI futures, MACD futures, VWAP strategy, futures trading tools, technical indicators futures, trading success",
    language: "en",
    subject: "Futures Trading Indicators",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "Top 5 Best Indicators for Futures Trading Success",
        description: "Master the futures market with these top 5 indicators—learn how to apply RSI, MACD, VWAP, and more to your trading strategy.",
        image: "", // Add a relevant blog cover image URL here
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
    title: "Los 5 Mejores Indicadores para el Éxito en el Trading de Futuros",
    description: "Aprende a dominar el trading de futuros con estos 5 indicadores clave: RSI, VWAP, MACD y más. Mejora tu estrategia con herramientas comprobadas.",
    keywords: "mejores indicadores para trading de futuros, RSI futuros, estrategia VWAP, MACD trading, herramientas de análisis técnico, indicadores de trading",
    language: "es",
    subject: "Indicadores para Trading de Futuros",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "Los 5 Mejores Indicadores para el Éxito en el Trading de Futuros",
        description: "Domina el mercado de futuros con estos 5 indicadores esenciales. Mejora tus decisiones con RSI, VWAP, MACD y más.",
        image: "", // Add a relevant blog cover image URL here
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
    title: "Top 5 Meilleurs Indicateurs pour le Succès du Trading de Contrats à Terme",
    description: "Découvrez les meilleurs indicateurs pour le trading de contrats à terme incluant RSI, VWAP, MACD, et plus. Boostez votre stratégie avec ces outils recommandés par les experts.",
    keywords: "meilleurs indicateurs trading contrats à terme, RSI futures, MACD futures, stratégie VWAP, outils trading futures, indicateurs techniques futures, succès trading",
    language: "fr",
    subject: "Indicateurs de Trading de Contrats à Terme",
    coverage: "Mondial",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "Top 5 Meilleurs Indicateurs pour le Succès du Trading de Contrats à Terme",
        description: "Maîtrisez le marché des contrats à terme avec ces 5 meilleurs indicateurs—apprenez comment appliquer RSI, MACD, VWAP, et plus à votre stratégie de trading.",
        image: "", // Ajoutez ici l'URL d'une image de couverture de blog pertinente
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
        h1_title: t('article_top_5_best_indicators_for_futures:h1_title'),
        CTA: t('article_top_5_best_indicators_for_futures:CTA'),
        t1: t('article_top_5_best_indicators_for_futures:t1'),
        t2: t('article_top_5_best_indicators_for_futures:t2'),
        t3: t('article_top_5_best_indicators_for_futures:t3'),
        t4: t('article_top_5_best_indicators_for_futures:t4'),
        t5: t('article_top_5_best_indicators_for_futures:t5'),
        t6: t('article_top_5_best_indicators_for_futures:t6'),
        t7: t('article_top_5_best_indicators_for_futures:t7'),
        t8: t('article_top_5_best_indicators_for_futures:t8'),
        t9: t('article_top_5_best_indicators_for_futures:t9'),
        t10: t('article_top_5_best_indicators_for_futures:t10'),
        p1: t('article_top_5_best_indicators_for_futures:p1'),
        p2_1: t('article_top_5_best_indicators_for_futures:p2_1'),
        p2_2: t('article_top_5_best_indicators_for_futures:p2_2'),
        p2_3: t('article_top_5_best_indicators_for_futures:p2_3'),
        p3_1: t('article_top_5_best_indicators_for_futures:p3_1'),
        p3_2: t('article_top_5_best_indicators_for_futures:p3_2'),
        p3_3: t('article_top_5_best_indicators_for_futures:p3_3'),
        p4_1: t('article_top_5_best_indicators_for_futures:p4_1'),
        p4_2: t('article_top_5_best_indicators_for_futures:p4_2'),
        p4_3: t('article_top_5_best_indicators_for_futures:p4_3'),
        p4_4: t('article_top_5_best_indicators_for_futures:p4_4'),
        p5_1: t('article_top_5_best_indicators_for_futures:p5_1'),
        p5_2: t('article_top_5_best_indicators_for_futures:p5_2'),
        p5_3: t('article_top_5_best_indicators_for_futures:p5_3'),
        p6_1: t('article_top_5_best_indicators_for_futures:p6_1'),
        p6_2: t('article_top_5_best_indicators_for_futures:p6_2'),
        p6_3: t('article_top_5_best_indicators_for_futures:p6_3'),
        p7_1: t('article_top_5_best_indicators_for_futures:p7_1'),
        p7_2: t('article_top_5_best_indicators_for_futures:p7_2'),
        p7_3: t('article_top_5_best_indicators_for_futures:p7_3'),
        p8_1: t('article_top_5_best_indicators_for_futures:p8_1'),
        p8_2: t('article_top_5_best_indicators_for_futures:p8_2'),
        p8_3: t('article_top_5_best_indicators_for_futures:p8_3'),
        p8_4: t('article_top_5_best_indicators_for_futures:p8_4'),
        p8_5: t('article_top_5_best_indicators_for_futures:p8_5'),
        p9_1: t('article_top_5_best_indicators_for_futures:p9_1'),
        p9_2: t('article_top_5_best_indicators_for_futures:p9_2'),
        p9_3: t('article_top_5_best_indicators_for_futures:p9_3'),
        p10_1: t('article_top_5_best_indicators_for_futures:p10_1'),
        p10_2: t('article_top_5_best_indicators_for_futures:p10_2'),
        p11_1: t('article_top_5_best_indicators_for_futures:p11_1'),
        p11_2: t('article_top_5_best_indicators_for_futures:p11_2'),
        p11_3: t('article_top_5_best_indicators_for_futures:p11_3'),
        p11_4: t('article_top_5_best_indicators_for_futures:p11_4'),
        p11_5: t('article_top_5_best_indicators_for_futures:p11_5'),
        p11_6: t('article_top_5_best_indicators_for_futures:p11_6'),
        p12_1: t('article_top_5_best_indicators_for_futures:p12_1'),
        p12_2: t('article_top_5_best_indicators_for_futures:p12_2'),
        p12_3: t('article_top_5_best_indicators_for_futures:p12_3'),
        p13_1: t('article_top_5_best_indicators_for_futures:p13_1'),
        p13_2: t('article_top_5_best_indicators_for_futures:p13_2'),
        p14_1: t('article_top_5_best_indicators_for_futures:p14_1'),
        p14_2: t('article_top_5_best_indicators_for_futures:p14_2'),
        p14_3: t('article_top_5_best_indicators_for_futures:p14_3'),
        p14_4: t('article_top_5_best_indicators_for_futures:p14_4'),
        p14_5: t('article_top_5_best_indicators_for_futures:p14_5'),
        p14_6: t('article_top_5_best_indicators_for_futures:p14_6'),
        p15_1: t('article_top_5_best_indicators_for_futures:p15_1'),
        p15_2: t('article_top_5_best_indicators_for_futures:p15_2'),
        p16_1: t('article_top_5_best_indicators_for_futures:p16_1'),
        p16_2: t('article_top_5_best_indicators_for_futures:p16_2'),
        p16_3: t('article_top_5_best_indicators_for_futures:p16_3'),
        p16_4: t('article_top_5_best_indicators_for_futures:p16_4'),
        p16_5: t('article_top_5_best_indicators_for_futures:p16_5'),
        p16_6: t('article_top_5_best_indicators_for_futures:p16_6'),
        p16_7: t('article_top_5_best_indicators_for_futures:p16_7'),
        p16_8: t('article_top_5_best_indicators_for_futures:p16_8'),
        p16_9: t('article_top_5_best_indicators_for_futures:p16_9'),
        p16_10: t('article_top_5_best_indicators_for_futures:p16_10'),
    }

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

                    {blogTranslations.p1} <br /> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t1}</h3><br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p2_1}</li>
                        <li>{blogTranslations.p2_2}</li>
                        <li>{blogTranslations.p2_3}</li>
                    </ul> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t2}</h3><br />
                    <Image alt="moving averages" className="w-full" src={image1} /> <br />
                    {blogTranslations.p3_1} <br /> <br />
                    {blogTranslations.p3_2} <br /> <br />
                    {blogTranslations.p3_3} <br /> <br />

                    <strong className="text-white">{blogTranslations.p4_1}</strong> <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />
                    {blogTranslations.p4_3} <br /> <br />
                    {blogTranslations.p4_4} <br /> <br />

                    <strong className="text-white">{blogTranslations.p5_1}</strong> <br /> <br />
                    {blogTranslations.p5_2} <br /> <br />
                    {blogTranslations.p5_3} <br /> <br />
                    {blogTranslations.p5_4}

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t3}</h3><br />
                    <Image alt="moving averages" className="w-full" src={image2} /> <br />
                    {blogTranslations.p6_1} <br /> <br />
                    {blogTranslations.p6_2} <br /> <br />
                    {blogTranslations.p6_3} <br /> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t4}</h3><br />
                    <Image alt="moving averages" className="w-full" src={image3} /> <br />
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />
                    {blogTranslations.p7_3} <br /> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t5}</h3><br />
                    <Image alt="moving averages" className="w-full" src={image4} /> <br />
                    {blogTranslations.p8_1} <br /> <br />
                    {blogTranslations.p8_2} <br /> <br />
                    <strong className="text-white">{blogTranslations.p8_3}</strong> <br /> <br />
                    {blogTranslations.p8_4} <br /> <br />
                    {blogTranslations.p8_5} <br /> <br />

                    <strong className="text-white">{blogTranslations.p9_1}</strong> <br /> <br />
                    {blogTranslations.p9_2} <br /> <br />
                    {blogTranslations.p9_3} <br /> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t6}</h3><br />
                    <Image alt="moving averages" className="w-full" src={image5} /> <br />
                    {blogTranslations.p10_1} <br /> <br />
                    {blogTranslations.p10_2} <br /> <br />

                    <strong className="text-white">{blogTranslations.p11_1}</strong> <br /> <br />
                    {blogTranslations.p11_2} <br /> <br />
                    {blogTranslations.p11_3} <br /> <br />
                    <strong className="text-white">{blogTranslations.p11_4}</strong> <br /> <br />
                    {blogTranslations.p11_5} <br /> <br />
                    {blogTranslations.p11_6} <br /> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t7}</h3><br />
                    {blogTranslations.p12_1} <br /> <br />
                    {blogTranslations.p12_2} <br /> <br />
                    {blogTranslations.p12_3} <br /> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t8}</h3><br />
                    {blogTranslations.p13_1} <br /> <br />
                    {blogTranslations.p13_2} <br /> <br />

                    <strong className="text-white">{blogTranslations.p14_1}</strong> <br /> <br />
                    {blogTranslations.p14_2} <br /> <br />
                    {blogTranslations.p14_3} <br /> <br />
                    <strong className="text-white">{blogTranslations.p14_4}</strong> <br /> <br />
                    {blogTranslations.p14_5} <br /> <br />
                    {blogTranslations.p14_6} <br /> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t9}</h3><br />
                    {blogTranslations.p15_1} <br /> <br />
                    {blogTranslations.p15_2} <br /> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t10}</h3><br />

                    <strong className="text-white">{blogTranslations.p16_1}</strong> <br /> <br />
                    {blogTranslations.p16_2} <br /> <br />
                    <strong className="text-white">{blogTranslations.p16_3}</strong> <br /> <br />
                    {blogTranslations.p16_4} <br /> <br />
                    <strong className="text-white">{blogTranslations.p16_5}</strong> <br /> <br />
                    {blogTranslations.p16_6} <br /> <br />
                    <strong className="text-white">{blogTranslations.p16_7}</strong> <br /> <br />
                    {blogTranslations.p16_8} <br /> <br />
                    <strong className="text-white">{blogTranslations.p16_9}</strong> <br /> <br />
                    {blogTranslations.p16_10} <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Top_5_Best_Indicators_For_Futures_blog_CTA&hcategory=Mar2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="Top 5 Best Indicators for Futures Trading Success"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}