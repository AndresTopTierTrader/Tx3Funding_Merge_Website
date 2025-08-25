//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import Image from "next/image";
import testi1 from './assets/testi1.jpg'
import testi2 from './assets/testi2.jpg'
import keyStatsSPA from './assets/Key Stats from Levels Beta Testing - Blog thumbnail SPA.jpg'
import keyStats from './assets/Key Stats from Levels Beta Testing - Blog thumbnail.jpg'
import CtaButton from "@/components/common/Buttons/CtaButton";
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

const i18nNameSpaces = ["common", "blog_landing", "article_levels_trading_community"];

//Params to bring the info from the db
const blogParam = "levels-trading-community"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "Levels Trading: Community Reviews & Early Reactions",
    description: "Discover how the trading community is reacting to Levels, a revolutionary pip-centered trading platform. Explore key features, beta tester insights, and the transformative impact of this platform.",
    keywords: "Levels trading, pip trading platform, community reviews, beta testers, trading innovation, trading strategies, trading features",
    language: "en",
    subject: "Exploring Levels Trading: Community Reviews & Innovations",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Levels Trading: Community Reviews & Early Reactions",
        description: "Explore the early reactions to Levels, a game-changing trading platform. Discover insights from beta testers and key community feedback.",
        image: "path/to/levels-trading-graphic.jpg",
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
    title: "Levels Trading: Opiniones de la Comunidad y Reacciones Tempranas",
    description: "Descubre cómo la comunidad de trading está reaccionando a Levels, una plataforma revolucionaria centrada en pips. Explora las características clave, las opiniones de beta testers y su impacto transformador.",
    keywords: "Levels trading, plataforma de trading de pips, opiniones de la comunidad, beta testers, innovación en trading, estrategias de trading, características de trading",
    language: "es",
    subject: "Explorando Levels Trading: Opiniones e Innovaciones",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Levels Trading: Opiniones de la Comunidad y Reacciones Tempranas",
        description: "Explora las primeras reacciones a Levels, una plataforma de trading innovadora. Descubre las ideas de beta testers y las opiniones clave de la comunidad.",
        image: "path/to/levels-trading-graphic.jpg",
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
    title: "Levels Trading : Avis de la Communauté et Réactions Initiales",
    description: "Découvrez comment la communauté de trading réagit à Levels, une plateforme révolutionnaire centrée sur les pips. Explorez les fonctionnalités clés, les retours des bêta-testeurs et son impact transformateur.",
    keywords: "Levels trading, plateforme de trading de pips, avis de la communauté, bêta-testeurs, innovation en trading, stratégies de trading, fonctionnalités de trading",
    language: "fr",
    subject: "Explorer Levels Trading : Avis et Innovations",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Levels Trading : Avis de la Communauté et Réactions Initiales",
        description: "Explorez les premières réactions à Levels, une plateforme de trading révolutionnaire. Découvrez les retours des bêta-testeurs et les avis clés de la communauté.",
        image: "path/to/levels-trading-graphic.jpg",
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
        h1_title: t('article_levels_trading_community:h1_title'),
        CTA: t('article_levels_trading_community:CTA'),
        hyperLink: t('article_levels_trading_community:hyperLink'),
        t1: t('article_levels_trading_community:t1'),
        t2: t('article_levels_trading_community:t2'),
        t3: t('article_levels_trading_community:t3'),
        t4: t('article_levels_trading_community:t4'),
        p1: t('article_levels_trading_community:p1'),
        p2: t('article_levels_trading_community:p2'),
        p3: t('article_levels_trading_community:p3'),
        p4_1: t('article_levels_trading_community:p4_1'),
        p4_2: t('article_levels_trading_community:p4_2'),
        p5: t('article_levels_trading_community:p5'),
        p6: t('article_levels_trading_community:p6'),
        p7_1: t('article_levels_trading_community:p7_1'),
        p7_2: t('article_levels_trading_community:p7_2'),
        p8_1: t('article_levels_trading_community:p8_1'),
        p8_2: t('article_levels_trading_community:p8_2'),
        p9: t('article_levels_trading_community:p9'),
    }

    const hyperLink = [
        { phrase: blogTranslations.hyperLink, link: `${ENVIRONMENT_URL}/${locale}` }
    ]

    const translatedImage = locale === 'es' ? keyStatsSPA : keyStats

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

                    <Image src={testi1} alt="Levels Trading" className="w-full" /> <br />

                    {blogTranslations.p2} <br /> <br />
                    {blogTranslations.p3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />

                    <Image src={testi2} alt="Levels Trading" className="w-full" /> <br />

                    {blogTranslations.p4_1} <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />
                    {blogTranslations.p5} <br /> <br />
                    {blogTranslations.p6} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />

                    <Image src={translatedImage} alt="Levels Trading" className="w-full" /> <br />

                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />

                    {blogTranslations.p8_1} <br /> <br />
                    {blogTranslations.p8_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />

                    {blogTranslations.p9} <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Levels_Trading_Community_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="Levels Trading Community Reviews"
                        translation={blogTranslations.CTA} />
                    <br/>
                    
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}