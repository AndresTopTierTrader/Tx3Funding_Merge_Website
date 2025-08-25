//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
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

const i18nNameSpaces = ["common", "blog_landing", "article_how_levels_paves_the_way"];

//Params to bring the info from the db
const blogParam = "how-levels-paves-the-way"

const metadata_en = {
    title: "The Future of Trading: How Levels Paves the Way",
    description: "Discover how Levels is revolutionizing forex trading with a pip-centered approach, gamification, and innovative risk management strategies.",
    keywords: "future of trading, forex trading, Levels trading platform, trading psychology, gamification in trading, risk management, trading technology",
    language: "en",
    subject: "Innovations in Trading and Market Evolution",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "The Future of Trading: How Levels Paves the Way",
        description: "Explore how Levels is redefining forex trading through innovation, accessibility, and a trader-focused experience.",
        image: "",
        site_name: "TopTier Trader",
        url: ""
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
    title: "El Futuro del Trading: Cómo Levels Marca el Camino",
    description: "Descubre cómo Levels está revolucionando el trading de forex con un enfoque basado en pips, gamificación e innovadoras estrategias de gestión de riesgos.",
    keywords: "futuro del trading, trading de forex, Levels plataforma de trading, psicología del trading, gamificación en trading, gestión de riesgos, tecnología en trading",
    language: "es",
    subject: "Innovaciones en Trading y Evolución del Mercado",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "El Futuro del Trading: Cómo Levels Marca el Camino",
        description: "Explora cómo Levels está redefiniendo el trading de forex a través de la innovación, accesibilidad y una experiencia centrada en el trader.",
        image: "",
        site_name: "TopTier Trader",
        url: ""
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
    title: "L'Avenir du Trading : Comment Levels Ouvre la Voie",
    description: "Découvrez comment Levels révolutionne le trading forex avec une approche centrée sur le pip, la gamification et des stratégies innovantes de gestion des risques.",
    keywords: "avenir du trading, trading forex, plateforme de trading Levels, psychologie du trading, gamification en trading, gestion des risques, technologie du trading",
    language: "fr",
    subject: "Innovations dans le Trading et Évolution des Marchés",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "L'Avenir du Trading : Comment Levels Ouvre la Voie",
        description: "Explorez comment Levels redéfinit le trading forex grâce à l'innovation, l'accessibilité et une expérience centrée sur le trader.",
        image: "",
        site_name: "TopTier Trader",
        url: ""
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
        h1_title: t('article_how_levels_paves_the_way:h1_title'),
        CTA: t('article_how_levels_paves_the_way:CTA'),
        t1: t('article_how_levels_paves_the_way:t1'),
        t2: t('article_how_levels_paves_the_way:t2'),
        t3: t('article_how_levels_paves_the_way:t3'),
        t4: t('article_how_levels_paves_the_way:t4'),
        t5: t('article_how_levels_paves_the_way:t5'),
        t6: t('article_how_levels_paves_the_way:t6'),
        t7: t('article_how_levels_paves_the_way:t7'),
        p1: t('article_how_levels_paves_the_way:p1'),
        p2_1: t('article_how_levels_paves_the_way:p2_1'),
        p2_2: t('article_how_levels_paves_the_way:p2_2'),
        p3_1: t('article_how_levels_paves_the_way:p3_1'),
        p3_2: t('article_how_levels_paves_the_way:p3_2'),
        p4_1: t('article_how_levels_paves_the_way:p4_1'),
        p4_2: t('article_how_levels_paves_the_way:p4_2'),
        p5_1: t('article_how_levels_paves_the_way:p5_1'),
        p5_2: t('article_how_levels_paves_the_way:p5_2'),
        p5_3: t('article_how_levels_paves_the_way:p5_3'),
        p6_1: t('article_how_levels_paves_the_way:p6_1'),
        p6_2: t('article_how_levels_paves_the_way:p6_2'),
        p6_3: t('article_how_levels_paves_the_way:p6_3'),
        p6_4: t('article_how_levels_paves_the_way:p6_4'),
        p7_1: t('article_how_levels_paves_the_way:p7_1'),
        p7_2: t('article_how_levels_paves_the_way:p7_2'),
        p8_1: t('article_how_levels_paves_the_way:p8_1'),
        p8_2: t('article_how_levels_paves_the_way:p8_2'),
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

                    {blogTranslations.p1} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />
                    {blogTranslations.p2_1} <br /> <br />
                    {blogTranslations.p2_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    {blogTranslations.p3_1} <br /> <br />
                    {blogTranslations.p3_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    {blogTranslations.p4_1} <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    {blogTranslations.p5_1} <br /> <br />
                    {blogTranslations.p5_2} <br /> <br />
                    {blogTranslations.p5_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    {blogTranslations.p6_1} <br /> <br />
                    {blogTranslations.p6_2} <br /> <br />
                    {blogTranslations.p6_3} <br /> <br />
                    {blogTranslations.p6_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    {blogTranslations.p8_1} <br /> <br />
                    {blogTranslations.p8_2} <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=How_Levels_Paves_The_Way_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="The Future of Trading: How Levels Paves the Way"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}