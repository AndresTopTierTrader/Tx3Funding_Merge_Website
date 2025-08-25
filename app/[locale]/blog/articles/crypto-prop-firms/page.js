//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import { bgImageStyleBlog } from "@/constants/styles"

import Content from "../../../../../components/blog/Content";
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

const i18nNameSpaces = ["common", "blog_landing", "article_crypto_prop_firms"];

//Params to bring the info from the db
const blogParam = "crypto-prop-firms"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "Crypto Prop Firms: How to Get Funded and Start Trading Crypto in 2025",
    description: "Explore the best crypto prop firms in 2025 and learn how to become a funded crypto trader. Discover profit splits, trading challenges, and top firm comparisons.",
    keywords: "crypto prop firms, best crypto prop firms, funded crypto trading, become a crypto trader, crypto trading challenge, TopTier Trader, crypto prop firm reviews",
    language: "en",
    subject: "Crypto Trading and Proprietary Trading Firms",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Crypto Prop Firms: How to Get Funded and Start Trading Crypto in 2025",
        description: "Learn how crypto prop firms work, pass trading challenges, and build a profitable trading career without risking your own capital. Get started with TopTier Trader and more.",
        image: "",
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
    title: "Crypto Prop Firms: Comienza tu Carrera como Trader de Criptomonedas en 2025",
    description: "Descubre las mejores crypto prop firms de 2025 y aprende cómo convertirte en un trader financiado. Analiza desafíos de trading, ganancias, y condiciones clave.",
    keywords: "crypto prop firms, trading de criptomonedas financiado, empresas de trading propietario cripto, mejores crypto prop firms 2025, TopTier Trader cripto",
    language: "es",
    subject: "Trading de Criptomonedas y Trading Propietario",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Crypto Prop Firms: Comienza tu Carrera como Trader de Criptomonedas en 2025",
        description: "Aprende cómo funcionan las crypto prop firms, completa los desafíos de evaluación y gana dinero real sin arriesgar tu capital. Empieza con TopTier Trader y más.",
        image: "",
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
    title: "Sociétés de Trading Crypto : Comment Obtenir un Financement et Commencer à Trader les Cryptos en 2025",
    description: "Explorez les meilleures sociétés de trading crypto en 2025 et apprenez comment devenir un trader crypto financé. Découvrez les partages de profits, les défis de trading et les comparaisons des meilleures sociétés.",
    keywords: "sociétés de trading crypto, meilleures sociétés de trading crypto, trading crypto financé, devenir trader crypto, défi de trading crypto, TopTier Trader, avis sociétés de trading crypto",
    language: "fr",
    subject: "Trading de Cryptomonnaies et Sociétés de Trading Propriétaire",
    coverage: "Mondial",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Sociétés de Trading Crypto : Comment Obtenir un Financement et Commencer à Trader les Cryptos en 2025",
        description: "Apprenez comment fonctionnent les sociétés de trading crypto, réussissez les défis de trading et construisez une carrière de trading rentable sans risquer votre propre capital. Commencez avec TopTier Trader et plus encore.",
        image: "",
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
        h1_title: t('article_crypto_prop_firms:h1_title'),
        CTA: t('article_crypto_prop_firms:CTA'),
        t1: t('article_crypto_prop_firms:t1'),
        t2: t('article_crypto_prop_firms:t2'),
        t3: t('article_crypto_prop_firms:t3'),
        t4: t('article_crypto_prop_firms:t4'),
        t5: t('article_crypto_prop_firms:t5'),
        t6: t('article_crypto_prop_firms:t6'),
        t7: t('article_crypto_prop_firms:t7'),
        t8: t('article_crypto_prop_firms:t8'),
        t9: t('article_crypto_prop_firms:t9'),
        t10: t('article_crypto_prop_firms:t10'),
        t11: t('article_crypto_prop_firms:t11'),
        t12: t('article_crypto_prop_firms:t12'),
        t13: t('article_crypto_prop_firms:t13'),
        p1_1: t('article_crypto_prop_firms:p1_1'),
        p1_2: t('article_crypto_prop_firms:p1_2'),
        p1_3: t('article_crypto_prop_firms:p1_3'),
        p2_1: t('article_crypto_prop_firms:p2_1'),
        p2_2: t('article_crypto_prop_firms:p2_2'),
        p3_1: t('article_crypto_prop_firms:p3_1'),
        p3_2: t('article_crypto_prop_firms:p3_2'),
        p4_1: t('article_crypto_prop_firms:p4_1'),
        p4_2: t('article_crypto_prop_firms:p4_2'),
        p4_3: t('article_crypto_prop_firms:p4_3'),
        p5_1: t('article_crypto_prop_firms:p5_1'),
        p5_2: t('article_crypto_prop_firms:p5_2'),
        p5_3: t('article_crypto_prop_firms:p5_3'),
        p6_1: t('article_crypto_prop_firms:p6_1'),
        p6_2: t('article_crypto_prop_firms:p6_2'),
        p6_3: t('article_crypto_prop_firms:p6_3'),
        p6_4: t('article_crypto_prop_firms:p6_4'),
        p6_5: t('article_crypto_prop_firms:p6_5'),
        p6_6: t('article_crypto_prop_firms:p6_6'),
        p7_1: t('article_crypto_prop_firms:p7_1'),
        p7_2: t('article_crypto_prop_firms:p7_2'),
        p7_3: t('article_crypto_prop_firms:p7_3'),
        p7_4: t('article_crypto_prop_firms:p7_4'),
        p7_5: t('article_crypto_prop_firms:p7_5'),
        p7_6: t('article_crypto_prop_firms:p7_6'),
        p7_7: t('article_crypto_prop_firms:p7_7'),
        p8_1: t('article_crypto_prop_firms:p8_1'),
        p8_2: t('article_crypto_prop_firms:p8_2'),
        p8_3: t('article_crypto_prop_firms:p8_3'),
        p8_4: t('article_crypto_prop_firms:p8_4'),
        p8_5: t('article_crypto_prop_firms:p8_5'),
        p9_1: t('article_crypto_prop_firms:p9_1'),
        p9_2: t('article_crypto_prop_firms:p9_2'),
        p9_3: t('article_crypto_prop_firms:p9_3'),
        p9_4: t('article_crypto_prop_firms:p9_4'),
        p9_5: t('article_crypto_prop_firms:p9_5'),
        p9_6: t('article_crypto_prop_firms:p9_6'),
        p9_7: t('article_crypto_prop_firms:p9_7'),
        p10_1: t('article_crypto_prop_firms:p10_1'),
        p10_2: t('article_crypto_prop_firms:p10_2'),
        p10_3: t('article_crypto_prop_firms:p10_3'),
        p10_4: t('article_crypto_prop_firms:p10_4'),
        p10_5: t('article_crypto_prop_firms:p10_5'),
        p10_6: t('article_crypto_prop_firms:p10_6'),
        p10_7: t('article_crypto_prop_firms:p10_7'),
        p11_1: t('article_crypto_prop_firms:p11_1'),
        p11_2: t('article_crypto_prop_firms:p11_2'),
        p11_3: t('article_crypto_prop_firms:p11_3'),
        p11_4: t('article_crypto_prop_firms:p11_4'),
        p11_5: t('article_crypto_prop_firms:p11_5'),
        p12_1: t('article_crypto_prop_firms:p12_1'),
        p12_2: t('article_crypto_prop_firms:p12_2'),
        p12_3: t('article_crypto_prop_firms:p12_3'),
        p12_4: t('article_crypto_prop_firms:p12_4'),
        p12_5: t('article_crypto_prop_firms:p12_5'),
        p12_6: t('article_crypto_prop_firms:p12_6'),
        p12_7: t('article_crypto_prop_firms:p12_7'),
        p12_8: t('article_crypto_prop_firms:p12_8'),
        p12_9: t('article_crypto_prop_firms:p12_9'),
        p12_10: t('article_crypto_prop_firms:p12_10'),
        p12_11: t('article_crypto_prop_firms:p12_11'),
        p12_12: t('article_crypto_prop_firms:p12_12'),
        p12_13: t('article_crypto_prop_firms:p12_13'),
        p13_1: t('article_crypto_prop_firms:p13_1'),
        p13_2: t('article_crypto_prop_firms:p13_2'),
        p13_3: t('article_crypto_prop_firms:p13_3'),
        p13_4: t('article_crypto_prop_firms:p13_4'),
        p13_5: t('article_crypto_prop_firms:p13_5'),
        p13_6: t('article_crypto_prop_firms:p13_6'),
        p14_1: t('article_crypto_prop_firms:p14_1'),
        p14_2: t('article_crypto_prop_firms:p14_2'),
        p14_3: t('article_crypto_prop_firms:p14_3'),
        p14_4: t('article_crypto_prop_firms:p14_4'),
        p14_5: t('article_crypto_prop_firms:p14_5'),
        p14_6: t('article_crypto_prop_firms:p14_6'),
        p14_7: t('article_crypto_prop_firms:p14_7'),
        p14_8: t('article_crypto_prop_firms:p14_8'),
        p14_9: t('article_crypto_prop_firms:p14_9'),
        p15_1: t('article_crypto_prop_firms:p15_1'),
        p15_2: t('article_crypto_prop_firms:p15_2'),
        p15_3: t('article_crypto_prop_firms:p15_3'),
        p16_1: t('article_crypto_prop_firms:p16_1'),
        p16_2: t('article_crypto_prop_firms:p16_2'),
        p16_3: t('article_crypto_prop_firms:p16_3'),
        p16_4: t('article_crypto_prop_firms:p16_4'),
        p16_5: t('article_crypto_prop_firms:p16_5'),
        p16_6: t('article_crypto_prop_firms:p16_6'),
        p16_7: t('article_crypto_prop_firms:p16_7'),
        p16_8: t('article_crypto_prop_firms:p16_8'),
        p17_1: t('article_crypto_prop_firms:p17_1'),
        p17_2: t('article_crypto_prop_firms:p17_2'),
        p17_3: t('article_crypto_prop_firms:p17_3'),
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

                    {blogTranslations.p1_1} <br /> <br />
                    {blogTranslations.p1_2} <br /> <br />
                    {blogTranslations.p1_3} <br /> <br />
                    {blogTranslations.p2_1} <br /> <br />
                    {blogTranslations.p2_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />
                    {blogTranslations.p3_1} <br /> <br />
                    {blogTranslations.p3_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    {blogTranslations.p4_1} <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />
                    {blogTranslations.p4_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    {blogTranslations.p5_1} <br /> <br />
                    {blogTranslations.p5_2} <br /> <br />
                    {blogTranslations.p5_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p6_1} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p6_2} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p6_3} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p6_4} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p6_5} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p6_6} /></li>
                    </ul><br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />

                    <strong className="text-white">{blogTranslations.p7_1}</strong> <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p7_3} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p7_4} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p7_5} /></li>
                    </ul><br />
                    {blogTranslations.p7_6} <br /> <br />
                    {blogTranslations.p7_7} <br /> <br />

                    <strong className="text-white">{blogTranslations.p8_1}</strong> <br /> <br />
                    {blogTranslations.p8_2} <br /> <br />
                    {blogTranslations.p8_3} <br /> <br />
                    <strong className="text-white">{blogTranslations.p8_4}</strong> <br /> <br />
                    {blogTranslations.p8_5} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p9_1} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p9_2} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p9_3} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p9_4} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p9_5} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p9_6} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p9_7} /></li>
                    </ul><br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    {blogTranslations.p10_1} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p10_2} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p10_3} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p10_4} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p10_5} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p10_6} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p10_7} /></li>
                    </ul><br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />
                    {blogTranslations.p11_1} <br /> <br />
                    <strong className="text-white">{blogTranslations.p11_2}</strong> <br /> <br />
                    {blogTranslations.p11_3} <br /> <br />
                    {blogTranslations.p11_4} <br /> <br />
                    {blogTranslations.p11_5} <br /> <br />

                    <strong className="text-white">{blogTranslations.p12_1}</strong> <br /> <br />
                    {blogTranslations.p12_2} <br /> <br />
                    {blogTranslations.p12_3} <br /> <br />
                    <strong className="text-white">{blogTranslations.p12_4}</strong> <br /> <br />
                    {blogTranslations.p12_5} <br /> <br />
                    <strong className="text-white">{blogTranslations.p12_6}</strong> <br /> <br />
                    {blogTranslations.p12_7} <br /> <br />
                    <strong className="text-white">{blogTranslations.p12_8}</strong> <br /> <br />
                    {blogTranslations.p12_9} <br /> <br />
                    {blogTranslations.p12_10} <br /> <br />
                    <strong className="text-white">{blogTranslations.p12_11}</strong> <br /> <br />
                    {blogTranslations.p12_12} <br /> <br />
                    {blogTranslations.p12_13} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />
                    {blogTranslations.p13_1} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p13_2}</li>
                        <li>{blogTranslations.p13_3}</li>
                        <li>{blogTranslations.p13_4}</li>
                        <li>{blogTranslations.p13_5}</li>
                    </ul> <br />
                    {blogTranslations.p13_6} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t10}</h3><br />
                    <strong className="text-white">{blogTranslations.p14_1}</strong> <br /> <br />
                    {blogTranslations.p14_2} <br /> <br />
                    {blogTranslations.p14_3} <br /> <br />
                    <strong className="text-white">{blogTranslations.p14_4}</strong> <br /> <br />
                    {blogTranslations.p14_5} <br /> <br />
                    <strong className="text-white">{blogTranslations.p14_6}</strong> <br /> <br />
                    {blogTranslations.p14_7} <br /> <br />
                    <strong className="text-white">{blogTranslations.p14_8}</strong> <br /> <br />
                    {blogTranslations.p14_9} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t11}</h3><br />
                    {blogTranslations.p15_1} <br /> <br />
                    {blogTranslations.p15_2} <br /> <br />
                    {blogTranslations.p15_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t12}</h3><br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p16_1}</li>
                        <li>{blogTranslations.p16_2}</li>
                        <li>{blogTranslations.p16_3}</li>
                        <li>{blogTranslations.p16_4}</li>
                        <li>{blogTranslations.p16_5}</li>
                        <li>{blogTranslations.p16_6}</li>
                        <li>{blogTranslations.p16_7}</li>
                        <li>{blogTranslations.p16_8}</li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t13}</h3><br />
                    {blogTranslations.p17_1} <br /> <br />
                    {blogTranslations.p17_2} <br /> <br />
                    {blogTranslations.p17_3} <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Crypto_Prop_Firms_Blog_CTA&hcategory=Mar2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="Crypto Prop Firms: Start Your Crypto Trading Career Today"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}