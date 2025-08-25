//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import { bgImageStyleBlog } from "@/constants/styles"
import Content from "../../../../../components/blog/Content";
import HyperLink from "@/utils/blog/HyperLink";
import BoldBeforeComa from "@/utils/blog/boldBeforeComa";

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

const i18nNameSpaces = ["common", "blog_landing", "article_ICT_in_trading"];

//Params to bring the info from the db
const blogParam = "ict-in-trading"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "What is ICT in Trading? Learn Concepts, Strategies, and Methods",
    description: "Discover the key concepts, strategies, and methods of ICT trading. Learn how institutional traders navigate market manipulation and align with smart money for optimal trade execution in Forex markets.",
    keywords: "ICT trading, inner circle trading, institutional trading, smart money concepts, Forex strategies, market structure shifts, liquidity zones, trading methods",
    language: "en",
    subject: "Mastering ICT Trading: Key Concepts and Strategies",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "What is ICT in Trading? Learn Concepts, Strategies, and Methods",
        description: "Explore ICT trading concepts, strategies, and methods. Understand how institutional traders optimize trade execution and manage market manipulation.",
        image: "path/to/ict-trading-graphic.jpg",
        site_name: "TopTier Trader",
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
    title: "¿Qué es ICT en el Trading? Aprende Conceptos, Estrategias y Métodos",
    description: "Descubre los conceptos, estrategias y métodos clave del trading ICT. Aprende cómo los traders institucionales manejan la manipulación del mercado y se alinean con el smart money para una ejecución óptima de operaciones en Forex.",
    keywords: "trading ICT, inner circle trading, trading institucional, smart money, estrategias Forex, cambios de estructura del mercado, zonas de liquidez, métodos de trading",
    language: "es",
    subject: "Dominando el Trading ICT: Conceptos y Estrategias Clave",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "¿Qué es ICT en el Trading? Aprende Conceptos, Estrategias y Métodos",
        description: "Explora los conceptos, estrategias y métodos del trading ICT. Entiende cómo los traders institucionales optimizan operaciones y manejan la manipulación del mercado.",
        image: "path/to/ict-trading-graphic.jpg",
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/es/blog/articles/${blogParam}`
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
    title: "Qu'est-ce que l'ICT dans le trading ? Découvrez les concepts, stratégies et méthodes",
    description: "Découvrez les concepts, stratégies et méthodes clés du trading ICT. Apprenez comment les traders institutionnels naviguent dans la manipulation du marché et s'alignent avec le smart money pour une exécution optimale des opérations sur le marché des changes.",
    keywords: "trading ICT, inner circle trading, trading institutionnel, smart money, stratégies Forex, changements de structure du marché, zones de liquidité, méthodes de trading",
    language: "fr",
    subject: "Maîtriser le Trading ICT : Concepts et Stratégies Clés",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Qu'est-ce que l'ICT dans le trading ? Découvrez les concepts, stratégies et méthodes",
        description: "Explorez les concepts, stratégies et méthodes du trading ICT. Comprenez comment les traders institutionnels optimisent les opérations et gèrent la manipulation du marché.",
        image: "path/to/ict-trading-graphic.jpg",
        site_name: "TopTier Trader",
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
        h1_title: t('article_ICT_in_trading:h1_title'),
        CTA: t('article_ICT_in_trading:CTA'),
        hyperLink: t('article_ICT_in_trading:hyperLink'),
        t1: t('article_ICT_in_trading:t1'),
        t2: t('article_ICT_in_trading:t2'),
        t3: t('article_ICT_in_trading:t3'),
        t4: t('article_ICT_in_trading:t4'),
        t5: t('article_ICT_in_trading:t5'),
        t6: t('article_ICT_in_trading:t6'),
        t7: t('article_ICT_in_trading:t7'),
        t8: t('article_ICT_in_trading:t8'),
        t9: t('article_ICT_in_trading:t9'),
        p1: t('article_ICT_in_trading:p1'),
        p2: t('article_ICT_in_trading:p2'),
        p3_1: t('article_ICT_in_trading:p3_1'),
        p3_2: t('article_ICT_in_trading:p3_2'),
        p3_3: t('article_ICT_in_trading:p3_3'),
        p4_1: t('article_ICT_in_trading:p4_1'),
        p4_2: t('article_ICT_in_trading:p4_2'),
        p4_3: t('article_ICT_in_trading:p4_3'),
        p5_1: t('article_ICT_in_trading:p5_1'),
        p5_2: t('article_ICT_in_trading:p5_2'),
        p5_3: t('article_ICT_in_trading:p5_3'),
        p6_1: t('article_ICT_in_trading:p6_1'),
        p6_2: t('article_ICT_in_trading:p6_2'),
        p6_3: t('article_ICT_in_trading:p6_3'),
        p7_1: t('article_ICT_in_trading:p7_1'),
        p7_2: t('article_ICT_in_trading:p7_2'),
        p8_1: t('article_ICT_in_trading:p8_1'),
        p8_2: t('article_ICT_in_trading:p8_2'),
        p9_1: t('article_ICT_in_trading:p9_1'),
        p9_2: t('article_ICT_in_trading:p9_2'),
        p9_3: t('article_ICT_in_trading:p9_3'),
        p9_4: t('article_ICT_in_trading:p9_4'),
        p9_5: t('article_ICT_in_trading:p9_5'),
        p9_6: t('article_ICT_in_trading:p9_6'),
        p10_1: t('article_ICT_in_trading:p10_1'),
        p10_2: t('article_ICT_in_trading:p10_2'),
        p10_3: t('article_ICT_in_trading:p10_3'),
        p10_4: t('article_ICT_in_trading:p10_4'),
        p10_5: t('article_ICT_in_trading:p10_5'),
        p11_1: t('article_ICT_in_trading:p11_1'),
        p11_2: t('article_ICT_in_trading:p11_2'),
        p11_3: t('article_ICT_in_trading:p11_3'),
        p11_4: t('article_ICT_in_trading:p11_4'),
        p12_1: t('article_ICT_in_trading:p12_1'),
        p12_2: t('article_ICT_in_trading:p12_2'),
        p12_3: t('article_ICT_in_trading:p12_3'),
        p12_4: t('article_ICT_in_trading:p12_4'),
        p13_1: t('article_ICT_in_trading:p13_1'),
        p13_2: t('article_ICT_in_trading:p13_2'),
        p13_3: t('article_ICT_in_trading:p13_3'),
        p13_4: t('article_ICT_in_trading:p13_4'),
        p13_5: t('article_ICT_in_trading:p13_5'),
        p14_1: t('article_ICT_in_trading:p14_1'),
        p14_2: t('article_ICT_in_trading:p14_2'),
        p14_3: t('article_ICT_in_trading:p14_3'),
        p14_4: t('article_ICT_in_trading:p14_4'),
        p14_5: t('article_ICT_in_trading:p14_5'),
        p15_1: t('article_ICT_in_trading:p15_1'),
        p15_2: t('article_ICT_in_trading:p15_2'),
        p15_3: t('article_ICT_in_trading:p15_3'),
        p15_4: t('article_ICT_in_trading:p15_4'),
        p15_5: t('article_ICT_in_trading:p15_5'),
        p16_1: t('article_ICT_in_trading:p16_1'),
        p16_2: t('article_ICT_in_trading:p16_2'),
        p16_3: t('article_ICT_in_trading:p16_3'),
        p16_4: t('article_ICT_in_trading:p16_4'),
        p16_5: t('article_ICT_in_trading:p16_5'),
        p17_1: t('article_ICT_in_trading:p17_1'),
        p17_2: t('article_ICT_in_trading:p17_2'),
        p18: t('article_ICT_in_trading:p18'),
    }

    const hyperLink = [
        { phrase: blogTranslations.hyperLink, link: `${ENVIRONMENT_URL}/${locale}` }
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

                    {blogTranslations.p2} <br /> <br />

                    <strong className="text-white">{blogTranslations.p3_1}</strong> <br /> <br />
                    {blogTranslations.p3_2} <br /> <br />
                    {blogTranslations.p3_3} <br /> <br />

                    <strong className="text-white">{blogTranslations.p4_1}</strong> <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />
                    {blogTranslations.p4_3} <br /> <br />

                    <strong className="text-white">{blogTranslations.p5_1}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_3} />
                        </li>
                    </ul> <br />

                    <strong className="text-white">{blogTranslations.p6_1}</strong> <br /> <br />
                    {blogTranslations.p6_2} <br /> <br />
                    {blogTranslations.p6_3} <br /> <br />

                    <strong className="text-white">{blogTranslations.p7_1}</strong> <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />

                    <strong className="text-white">{blogTranslations.p8_1}</strong> <br /> <br />
                    {blogTranslations.p8_2} <br /> <br />

                    <strong className="text-white">{blogTranslations.p9_1}</strong> <br /> <br />
                    {blogTranslations.p9_2} <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-6">
                        <li>
                            <strong>{blogTranslations.p9_3}</strong>
                        </li>
                        <li>
                            <strong>{blogTranslations.p9_4}</strong>
                        </li>
                        <li>
                            <strong>{blogTranslations.p9_5}</strong>
                        </li>
                    </ul> <br />
                    {blogTranslations.p9_6} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    {blogTranslations.p10_1} <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p10_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p10_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p10_4} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p10_5} />
                        </li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    <strong className="text-white">{blogTranslations.p11_1}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p11_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p11_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p11_4} />
                        </li>
                    </ul> <br />

                    <strong className="text-white">{blogTranslations.p12_1}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p12_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p12_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p12_4} />
                        </li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    {blogTranslations.p13_1} <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p13_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p13_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p13_4} />
                        </li>
                    </ul> <br />
                    {blogTranslations.p13_5} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    <strong className="text-white">{blogTranslations.p14_1}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p14_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p14_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p14_4} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p14_5} />
                        </li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    {blogTranslations.p15_1} <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p15_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p15_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p15_4} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p15_5} />
                        </li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    {blogTranslations.p16_1} <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p16_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p16_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p16_4} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p16_5} />
                        </li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />
                    {blogTranslations.p17_1} <br /> <br />
                    {blogTranslations.p17_2} <br /> <br />

                    <strong className="text-white">{blogTranslations.t9}</strong> <br /> <br />
                    <HyperLink text={blogTranslations.p18} links={hyperLink} /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=ICT_In_Trading_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="ICT in Trading"
                        translation={blogTranslations.CTA} />
                    <br />


                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}