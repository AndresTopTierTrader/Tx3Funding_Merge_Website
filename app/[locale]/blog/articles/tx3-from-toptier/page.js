//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import image1 from "./assets/image1.jpg"
import image2 from "./assets/image2.jpg"
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

const i18nNameSpaces = ["common", "blog_landing", "article_tx3_from_toptier"];

//Params to bring the info from the db
const blogParam = "tx3-from-toptier"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "TX3Funding: The Futures Prop Firm Backed by TopTier Trader",
    description: "Discover how TX3Funding—launched by the creators of TopTier Trader—is revolutionizing futures prop trading with instant funding, fast payouts, and trader-first rules.",
    keywords: "TX3Funding, futures prop firm, TopTier Trader, instant funding, futures trading, prop trading, funded trader program, E-mini futures, get funded fast",
    language: "en",
    subject: "Futures Prop Trading",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "TX3Funding: The Futures Prop Firm Backed by TopTier Trader",
        description: "Revolutionary futures prop firm from TopTier Trader—get funded in minutes with fast payouts and zero activation fees.",
        image: `${ENVIRONMENT_URL}/images/blog/tx3funding-cover.jpg`, // Replace with actual blog image path
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/en/blog/articles/tx3funding-the-futures-prop-firm`
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
    title: "TX3Funding: El Prop Firm de Futuros Respaldado por TopTier Trader",
    description: "TX3Funding, creado por el equipo de TopTier Trader, transforma el trading de futuros con evaluaciones instantáneas, pagos rápidos y reglas centradas en el trader.",
    keywords: "TX3Funding, prop firm futuros, TopTier Trader, financiamiento instantáneo, trading de futuros, programa de traders financiados, contratos E-mini",
    language: "es",
    subject: "Trading de Futuros Prop",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "TX3Funding: El Prop Firm de Futuros Respaldado por TopTier Trader",
        description: "Descubre cómo TX3Funding revoluciona el trading de futuros con acceso a capital en minutos y pagos rápidos.",
        image: `${ENVIRONMENT_URL}/images/blog/tx3funding-cover.jpg`, // Replace with actual blog image path
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/es/blog/articles/tx3funding-el-prop-firm-de-futuros`
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
    title: "TX3Funding : La société de trading sur contrats à terme soutenue par TopTier Trader",
    description: "Découvrez comment TX3Funding—lancée par les créateurs de TopTier Trader—révolutionne le trading prop sur contrats à terme avec un financement instantané, des paiements rapides et des règles axées sur les traders.",
    keywords: "TX3Funding, société de trading sur contrats à terme, TopTier Trader, financement instantané, trading sur contrats à terme, trading prop, programme de trader financé, E-mini futures, financement rapide",
    language: "fr",
    subject: "Trading Prop sur Contrats à Terme",
    coverage: "Mondial",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "TX3Funding : La société de trading sur contrats à terme soutenue par TopTier Trader",
        description: "Société de trading prop révolutionnaire de TopTier Trader—obtenez un financement en quelques minutes avec des paiements rapides et aucun frais d’activation.",
        image: `${ENVIRONMENT_URL}/images/blog/tx3funding-cover.jpg`,
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/fr/blog/articles/tx3funding-la-societe-de-trading-sur-contrats-a-terme`
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
        h1_title: t('article_tx3_from_toptier:h1_title'),
        CTA: t('article_tx3_from_toptier:CTA'),
        t1: t('article_tx3_from_toptier:t1'),
        t2: t('article_tx3_from_toptier:t2'),
        t3: t('article_tx3_from_toptier:t3'),
        t4: t('article_tx3_from_toptier:t4'),
        t5: t('article_tx3_from_toptier:t5'),
        t6: t('article_tx3_from_toptier:t6'),
        p1: t('article_tx3_from_toptier:p1'),
        p2: t('article_tx3_from_toptier:p2'),
        p3: t('article_tx3_from_toptier:p3'),
        p4: t('article_tx3_from_toptier:p4'),
        p5_1: t('article_tx3_from_toptier:p5_1'),
        p5_2: t('article_tx3_from_toptier:p5_2'),
        p5_3: t('article_tx3_from_toptier:p5_3'),
        p5_4: t('article_tx3_from_toptier:p5_4'),
        p6_1: t('article_tx3_from_toptier:p6_1'),
        p6_2: t('article_tx3_from_toptier:p6_2'),
        p7_1: t('article_tx3_from_toptier:p7_1'),
        p7_2: t('article_tx3_from_toptier:p7_2'),
        p8: t('article_tx3_from_toptier:p8'),
        p9_1: t('article_tx3_from_toptier:p9_1'),
        p9_2: t('article_tx3_from_toptier:p9_2'),
        p9_3: t('article_tx3_from_toptier:p9_3'),
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
                    {blogTranslations.p2} <br /> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t1}</h3><br />
                    {blogTranslations.p3} <br /> <br />
                    {blogTranslations.p4} <br /> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t2}</h3><br />
                    <Image alt="image1" src={image1} className="w-full" /> <br />
                    {blogTranslations.p5_1} <br /> <br />
                    {blogTranslations.p5_2} <br /> <br />
                    {blogTranslations.p5_3} <br /> <br />
                    {blogTranslations.p5_4} <br /> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t3}</h3><br />
                    {blogTranslations.p6_1} <br /> <br />
                    {blogTranslations.p6_2} <br /> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t4}</h3><br />
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t5}</h3><br />
                    {blogTranslations.p8} <br /> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t6}</h3><br />
                    <Image alt="image2" src={image2} className="w-full" /> <br />
                    {blogTranslations.p9_1} <br /> <br />
                    <a href="http://TX3Funding.com" className="underline">{blogTranslations.p9_2}</a> <br /> <br />
                    {blogTranslations.p9_3} <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Tx3_From_Toptier_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="TX3Funding: The Futures Prop Firm from the TopTier Trader Team"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}