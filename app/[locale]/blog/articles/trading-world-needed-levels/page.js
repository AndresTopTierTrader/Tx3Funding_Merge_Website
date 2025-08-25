//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import image from './assets/image1.jpg'
import { bgImageStyleBlog } from "@/constants/styles"
import Content from "../../../../../components/blog/Content";

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

const i18nNameSpaces = ["common", "blog_landing", "article_trading_world_needed_levels"];

//Params to bring the info from the db
const blogParam = "trading-world-needed-levels"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "Why the Trading World Needed Levels Right Now",
    description: "Discover how Levels is revolutionizing forex trading by addressing emotional decision-making, simplifying complexity, and promoting sustainable development.",
    keywords: "Levels, forex trading, trading psychology, risk management, trading platform, pip accumulation, trader progression",
    language: "en",
    subject: "Forex Trading Innovation",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Why the Trading World Needed Levels Right Now",
        description: "Discover how Levels is revolutionizing forex trading by addressing emotional decision-making, simplifying complexity, and promoting sustainable development.",
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
    title: "Por Qué el Mundo del Trading Necesitaba Levels Ahora Mismo",
    description: "Descubre cómo Levels está revolucionando el trading de forex al abordar la toma de decisiones emocionales, simplificar la complejidad y promover un desarrollo sostenible.",
    keywords: "Levels, trading de forex, psicología del trading, gestión de riesgos, plataforma de trading, acumulación de pips, progresión del trader",
    language: "es",
    subject: "Innovación en el Trading de Forex",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Por Qué el Mundo del Trading Necesitaba Levels Ahora Mismo",
        description: "Descubre cómo Levels está revolucionando el trading de forex al abordar la toma de decisiones emocionales, simplificar la complejidad y promover un desarrollo sostenible.",
        image: "",
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/es/blog/articulos/${blogParam}`
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
    title: "Pourquoi le Monde du Trading Avait Besoin de Levels Dès Maintenant",
    description: "Découvrez comment Levels révolutionne le trading forex en abordant la prise de décision émotionnelle, en simplifiant la complexité et en favorisant un développement durable.",
    keywords: "Levels, trading forex, psychologie du trading, gestion des risques, plateforme de trading, accumulation de pips, progression du trader",
    language: "fr",
    subject: "Innovation dans le Trading Forex",
    coverage: "Mondial",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Pourquoi le Monde du Trading Avait Besoin de Levels Dès Maintenant",
        description: "Découvrez comment Levels révolutionne le trading forex en abordant la prise de décision émotionnelle, en simplifiant la complexité et en favorisant un développement durable.",
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
        h1_title: t('article_trading_world_needed_levels:h1_title'),
        CTA: t('article_trading_world_needed_levels:CTA'),
        t1: t('article_trading_world_needed_levels:t1'),
        t2: t('article_trading_world_needed_levels:t2'),
        t3: t('article_trading_world_needed_levels:t3'),
        t4: t('article_trading_world_needed_levels:t4'),
        t5: t('article_trading_world_needed_levels:t5'),
        t6: t('article_trading_world_needed_levels:t6'),
        t7: t('article_trading_world_needed_levels:t7'),
        p1_1: t('article_trading_world_needed_levels:p1_1'),
        p1_2: t('article_trading_world_needed_levels:p1_2'),
        p2_1: t('article_trading_world_needed_levels:p2_1'),
        p2_2: t('article_trading_world_needed_levels:p2_2'),
        p2_3: t('article_trading_world_needed_levels:p2_3'),
        p2_4: t('article_trading_world_needed_levels:p2_4'),
        p3_1: t('article_trading_world_needed_levels:p3_1'),
        p3_2: t('article_trading_world_needed_levels:p3_2'),
        p3_3: t('article_trading_world_needed_levels:p3_3'),
        p4_1: t('article_trading_world_needed_levels:p4_1'),
        p4_2: t('article_trading_world_needed_levels:p4_2'),
        p4_3: t('article_trading_world_needed_levels:p4_3'),
        p4_4: t('article_trading_world_needed_levels:p4_4'),
        p5_1: t('article_trading_world_needed_levels:p5_1'),
        p5_2: t('article_trading_world_needed_levels:p5_2'),
        p5_3: t('article_trading_world_needed_levels:p5_3'),
        p6_1: t('article_trading_world_needed_levels:p6_1'),
        p6_2: t('article_trading_world_needed_levels:p6_2'),
        p6_3: t('article_trading_world_needed_levels:p6_3'),
        p7_1: t('article_trading_world_needed_levels:p7_1'),
        p7_2: t('article_trading_world_needed_levels:p7_2'),
        p7_3: t('article_trading_world_needed_levels:p7_3'),
        p8_1: t('article_trading_world_needed_levels:p8_1'),
        p8_2: t('article_trading_world_needed_levels:p8_2'),
        p8_3: t('article_trading_world_needed_levels:p8_3'),
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

                    {/* User */}
                    {/* <User name={'Mike WIlliams'} role={'Trading Journalist'} date={'Nov 27 2024'} userImg={userImg} /> */}

                    {blogTranslations.p1_1} <br /> <br />
                    {blogTranslations.p1_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />
                    
                    {blogTranslations.p2_1} <br /> <br />
                    {blogTranslations.p2_2} <br /> <br />
                    {blogTranslations.p2_3} <br /> <br />
                    {blogTranslations.p2_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    
                    {blogTranslations.p3_1} <br /> <br />
                    {blogTranslations.p3_2} <br /> <br />
                    {blogTranslations.p3_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    <Image src={image} alt="image of desk" className="w-full"/> <br/>
                    
                    {blogTranslations.p4_1} <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />
                    {blogTranslations.p4_3} <br /> <br />
                    {blogTranslations.p4_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    
                    {blogTranslations.p5_1} <br /> <br />
                    {blogTranslations.p5_2} <br /> <br />
                    {blogTranslations.p5_3} <br /> <br />


                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    
                    {blogTranslations.p6_1} <br /> <br />
                    {blogTranslations.p6_2} <br /> <br />
                    {blogTranslations.p6_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />
                    {blogTranslations.p7_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    
                    {blogTranslations.p8_1} <br /> <br />
                    {blogTranslations.p8_2} <br /> <br />
                    {blogTranslations.p8_3} <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Trading_World_Needed_Levels_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="TWhy the Trading World Needed Levels Right Now"
                        translation={blogTranslations.CTA} />
                    <br />

                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}