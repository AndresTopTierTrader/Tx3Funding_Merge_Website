//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import imageEN from './assets/cTrader - Blog 2.jpg'
import imageES from './assets/cTrader - Blog 2 SPA.jpg'
import { bgImageStyleBlog } from "@/constants/styles"
import BoldBeforeComa from "@/utils/blog/boldBeforeComa";
import getCurrentUTMMonth from "@/utils/misc/getCurrentUTM";

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

const i18nNameSpaces = ["common", "blog_landing", "article_ctrader_now_on_toptier"];

//Params to bring the info from the db
const blogParam = "ctrader-now-on-toptier"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    ttitle: "cTrader Now Available at TopTier Trader – Elevate Your Trading",
    description: "TopTier Trader introduces cTrader – a powerful, intuitive trading platform with lightning-fast execution, advanced charting, and full mobile sync. Discover the edge it brings to funded traders.",
    keywords: "cTrader, TopTier Trader, funded trading, trading challenge, advanced trading platform, fast execution, mobile trading, technical analysis, professional charting tools, trade analytics",
    language: "en",
    subject: "Trading Platforms",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "cTrader Now Available at TopTier Trader – Elevate Your Trading",
        description: "Unlock institutional-grade trading tools with cTrader at TopTier Trader. Fast execution, advanced analytics, and seamless mobile access now available for funded traders.",
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
    title: "cTrader Ya Disponible en TopTier Trader – Mejora Tu Experiencia de Trading",
    description: "TopTier Trader lanza cTrader: una plataforma de trading avanzada con ejecución ultra rápida, gráficos técnicos profesionales y acceso completo desde dispositivos móviles. Ideal para traders financiados.",
    keywords: "cTrader, TopTier Trader, trading financiado, desafío de trading, plataforma de trading avanzada, ejecución rápida, trading móvil, análisis técnico, herramientas de gráficos profesionales, analítica de trading",
    language: "es",
    subject: "Plataformas de Trading",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "cTrader Ya Disponible en TopTier Trader – Mejora Tu Experiencia de Trading",
        description: "Accede a herramientas de trading de nivel institucional con cTrader en TopTier Trader. Ejecución veloz, análisis avanzado y acceso móvil para traders financiados.",
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
    title: "cTrader Maintenant Disponible chez TopTier Trader – Élevez Votre Trading",
    description: "TopTier Trader présente cTrader – une plateforme de trading puissante et intuitive avec une exécution ultra-rapide, des graphiques avancés et une synchronisation mobile complète. Découvrez l'avantage qu'elle apporte aux traders financés.",
    keywords: "cTrader, TopTier Trader, trading financé, défi de trading, plateforme de trading avancée, exécution rapide, trading mobile, analyse technique, outils de graphiques professionnels, analytique de trading",
    language: "fr",
    subject: "Plateformes de Trading",
    coverage: "Mondial",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "cTrader Maintenant Disponible chez TopTier Trader – Élevez Votre Trading",
        description: "Débloquez les outils de trading de niveau institutionnel avec cTrader chez TopTier Trader. Exécution rapide, analytique avancée et accès mobile transparent maintenant disponibles pour les traders financés.",
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
        h1_title: t('article_ctrader_now_on_toptier:h1_title'),
        CTA: t('article_ctrader_now_on_toptier:CTA'),
        t1: t('article_ctrader_now_on_toptier:t1'),
        t2: t('article_ctrader_now_on_toptier:t2'),
        t3: t('article_ctrader_now_on_toptier:t3'),
        t4: t('article_ctrader_now_on_toptier:t4'),
        t5: t('article_ctrader_now_on_toptier:t5'),
        p1: t('article_ctrader_now_on_toptier:p1'),
        p2: t('article_ctrader_now_on_toptier:p2'),
        p3_1: t('article_ctrader_now_on_toptier:p3_1'),
        p3_2: t('article_ctrader_now_on_toptier:p3_2'),
        p3_3: t('article_ctrader_now_on_toptier:p3_3'),
        p3_4: t('article_ctrader_now_on_toptier:p3_4'),
        p4: t('article_ctrader_now_on_toptier:p4'),
        p5_1: t('article_ctrader_now_on_toptier:p5_1'),
        p5_2: t('article_ctrader_now_on_toptier:p5_2'),
        p5_3: t('article_ctrader_now_on_toptier:p5_3'),
        p5_4: t('article_ctrader_now_on_toptier:p5_4'),
        p5_5: t('article_ctrader_now_on_toptier:p5_5'),
        p6_1: t('article_ctrader_now_on_toptier:p6_1'),
        p6_2: t('article_ctrader_now_on_toptier:p6_2'),
        p6_3: t('article_ctrader_now_on_toptier:p6_3'),
        p7_1: t('article_ctrader_now_on_toptier:p7_1'),
        p7_2: t('article_ctrader_now_on_toptier:p7_2'),
        p7_3: t('article_ctrader_now_on_toptier:p7_3'),
        p7_4: t('article_ctrader_now_on_toptier:p7_4'),
        p7_5: t('article_ctrader_now_on_toptier:p7_5'),
    }

    const image = locale == "es" ? imageES : imageEN

    return (
        <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={i18nNameSpaces}
        >

            <Content currentLanguage={i18n.language} params={blogParam} translations={headContentTranslations} locale={locale} />


            {/* Article Content */}
            <div style={bgImageStyleBlog} className="flex flex-col items-start pb-20 mb:pt-5">

                <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5">{blogTranslations.h1_title}</h1>

                <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

                    {blogTranslations.p1} <br /> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t1}</h3><br />
                    {blogTranslations.p2} <br /> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t2}</h3><br />
                    <BoldBeforeComa inputText={blogTranslations.p3_1} /> <br />
                    <BoldBeforeComa inputText={blogTranslations.p3_2} /> <br />
                    <BoldBeforeComa inputText={blogTranslations.p3_3} /> <br />
                    <BoldBeforeComa inputText={blogTranslations.p3_4} /> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t3}</h3><br />
                    {blogTranslations.p4} <br /> <br />
                    <ul className="flex flex-col gap-4 pl-6 list-disc">
                        <li>{blogTranslations.p5_1}</li>
                        <li>{blogTranslations.p5_2}</li>
                        <li>{blogTranslations.p5_3}</li>
                        <li>{blogTranslations.p5_4}</li>
                        <li>{blogTranslations.p5_5}</li>
                    </ul> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t4}</h3><br />
                    <Image src={image} alt="image" className="w-full"/> <br/>
                    {blogTranslations.p6_1} <br /> <br />
                    {blogTranslations.p6_2} <br /> <br />
                    {blogTranslations.p6_3} <br /> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t5}</h3><br />
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />
                    {blogTranslations.p7_3} <br /> <br />
                    {blogTranslations.p7_4} <br /> <br />
                    <strong className="text-white">{blogTranslations.p7_5}</strong> <br /> <br />


                    <CtaButton
                        utm={`https://app.toptiertrader.com/buy-challenge/?el=Ctrader_Now_On_TopTier_Blog_CTA&hcategory=${getCurrentUTMMonth()}&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss`}
                        page="Blog"
                        section="cTrader is Now Available at TopTier Trader"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}