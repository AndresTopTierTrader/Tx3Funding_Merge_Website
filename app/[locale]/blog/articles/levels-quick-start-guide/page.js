//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import {ENVIRONMENT_URL} from "@/constants/global";

//Images
import Image from "next/image";
import image1 from "./assets/image1.png"
import image2 from "./assets/image2.png"
import image3 from "./assets/image3.png"
import image4 from "./assets/image4.png"
import image5 from "./assets/image5.png"
import CtaButton from "@/components/common/Buttons/CtaButton";
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

const i18nNameSpaces = ["common", "blog_landing", "article_levels_quick_start_guide"];

//Params to bring the info from the db
const blogParam = "levels-quick-start-guide"

const metadata_en = {
    title: "Master Levels: Your Quick-Start Guide to Pip-Based Trading Success",
    description: "Elevate your trading game with our comprehensive, step-by-step guide on pip-based trading. Learn account setup, platform navigation, trade execution, and effective trade management to achieve trading success.",
    keywords: "pip-based trading, trading guide, Levels, forex trading, account setup, trade management, beginner trading, trading strategies",
    language: "en",
    subject: "Pip-Based Trading Guide",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "Master Levels: Your Quick-Start Guide to Pip-Based Trading Success",
        description: "Discover the essential steps to set up your account, navigate the trading platform, execute your first trade, and manage your positions effectively.",
        image: "",
        site_name: "Toptier Trader",
        url: `${ENVIRONMENT_URL}/en/blog/articles/master-levels-guide`
    }
    ,
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
    title: "Master Levels: Tu Guía Rápida para el Éxito en el Trading Basado en Pips",
    description: "Eleva tu juego de trading con nuestra guía paso a paso sobre estrategias basadas en pips. Aprende a configurar tu cuenta, navegar en la plataforma, ejecutar tu primera operación y gestionar tus trades de manera efectiva para alcanzar el éxito.",
    keywords: "trading basado en pips, guía de trading, Levels, forex trading, configuración de cuenta, gestión de operaciones, trading para principiantes, estrategias de trading",
    language: "es",
    subject: "Guía de Trading Basado en Pips",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "Master Levels: Tu Guía Rápida para el Éxito en el Trading Basado en Pips",
        description: "Descubre los pasos esenciales para configurar tu cuenta, navegar en la plataforma, ejecutar tu primera operación y gestionar tus posiciones de manera efectiva.",
        image: "",
        site_name: "Toptier Trader",
        url: `${ENVIRONMENT_URL}/es/blog/articles/master-levels-guide`
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
    title: "Niveaux Maîtres : Votre Guide de Démarrage Rapide pour Réussir le Trading Basé sur les Pips",
    description: "Améliorez votre trading avec notre guide complet et détaillé sur le trading basé sur les pips. Apprenez à configurer votre compte, naviguer sur la plateforme, exécuter des transactions et gérer efficacement vos positions pour réussir dans le trading.",
    keywords: "trading basé sur les pips, guide de trading, niveaux, trading forex, configuration de compte, gestion des transactions, trading pour débutants, stratégies de trading",
    language: "fr",
    subject: "Guide de Trading Basé sur les Pips",
    coverage: "Mondial",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "Niveaux Maîtres : Votre Guide de Démarrage Rapide pour Réussir le Trading Basé sur les Pips",
        description: "Découvrez les étapes essentielles pour configurer votre compte, naviguer sur la plateforme de trading, exécuter votre première transaction et gérer efficacement vos positions.",
        image: "",
        site_name: "Toptier Trader",
        url: `${ENVIRONMENT_URL}/fr/blog/articles/guide-niveaux-maîtres`
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
        h1_title: t('article_levels_quick_start_guide:h1_title'),
        CTA: t('article_levels_quick_start_guide:CTA'),
        t1: t('article_levels_quick_start_guide:t1'),
        t2: t('article_levels_quick_start_guide:t2'),
        t3: t('article_levels_quick_start_guide:t3'),
        t4: t('article_levels_quick_start_guide:t4'),
        t5: t('article_levels_quick_start_guide:t5'),
        t6: t('article_levels_quick_start_guide:t6'),
        t7: t('article_levels_quick_start_guide:t7'),
        hyperLink: t('article_levels_quick_start_guide:hyperLink'),
        p1: t('article_levels_quick_start_guide:p1'),
        p2_1: t('article_levels_quick_start_guide:p2_1'),
        p2_2: t('article_levels_quick_start_guide:p2_2'),
        p2_3: t('article_levels_quick_start_guide:p2_3'),
        p2_3_1: t('article_levels_quick_start_guide:p2_3_1'),
        p2_3_2: t('article_levels_quick_start_guide:p2_3_2'),
        p2_4: t('article_levels_quick_start_guide:p2_4'),
        p2_5: t('article_levels_quick_start_guide:p2_5'),
        p2_6: t('article_levels_quick_start_guide:p2_6'),
        p3_1: t('article_levels_quick_start_guide:p3_1'),
        p3_2: t('article_levels_quick_start_guide:p3_2'),
        p3_3: t('article_levels_quick_start_guide:p3_3'),
        p3_4: t('article_levels_quick_start_guide:p3_4'),
        p3_5: t('article_levels_quick_start_guide:p3_5'),
        p4_1: t('article_levels_quick_start_guide:p4_1'),
        p4_2: t('article_levels_quick_start_guide:p4_2'),
        p4_3: t('article_levels_quick_start_guide:p4_3'),
        p4_4: t('article_levels_quick_start_guide:p4_4'),
        p4_5: t('article_levels_quick_start_guide:p4_5'),
        p5_1: t('article_levels_quick_start_guide:p5_1'),
        p5_2: t('article_levels_quick_start_guide:p5_2'),
        p5_3: t('article_levels_quick_start_guide:p5_3'),
        p5_3_1: t('article_levels_quick_start_guide:p5_3_1'),
        p5_3_2: t('article_levels_quick_start_guide:p5_3_2'),
        p5_4: t('article_levels_quick_start_guide:p5_4'),
        p5_5: t('article_levels_quick_start_guide:p5_5'),
        p6_1: t('article_levels_quick_start_guide:p6_1'),
        p6_2: t('article_levels_quick_start_guide:p6_2'),
        p6_3: t('article_levels_quick_start_guide:p6_3'),
        p6_4: t('article_levels_quick_start_guide:p6_4'),
        p6_5: t('article_levels_quick_start_guide:p6_5'),
        p7_1: t('article_levels_quick_start_guide:p7_1'),
        p7_2: t('article_levels_quick_start_guide:p7_2'),
        p8_1: t('article_levels_quick_start_guide:p8_1'),
        p8_2: t('article_levels_quick_start_guide:p8_2'),
        p8_3: t('article_levels_quick_start_guide:p8_3'),
    }

    const hyperLink = [
        {
            phrase: blogTranslations.hyperLink,
            link: `${ENVIRONMENT_URL}/${locale}/levels`
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
                    <Image src={image1} alt="" className="w-full" /> <br />
                    <ol className="flex flex-col gap-4 list-decimal pl-6">
                        <li>{blogTranslations.p2_1}</li>
                        <li>{blogTranslations.p2_2}</li>
                        <li>
                            {blogTranslations.p2_3}
                            <ul className="flex flex-col gap-3 pl-6 list-disc mt-3">
                                <li>{blogTranslations.p2_3_1}</li>
                                <li>{blogTranslations.p2_3_2}</li>
                            </ul>
                        </li>
                        <li>{blogTranslations.p2_4}</li>
                        <li>{blogTranslations.p2_5}</li>
                    </ol> <br />
                    {blogTranslations.p2_6} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    <Image src={image2} alt="" className="w-full" /> <br />
                    {blogTranslations.p3_1} <br /> <br />
                    <ul className="flex flex-col gap-3 pl-6 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_4} />
                        </li>
                    </ul> <br />
                    {blogTranslations.p3_5} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    <Image src={image3} alt="" className="w-full" /> <br />
                    {blogTranslations.p4_1} <br /> <br />
                    <ul className="flex flex-col gap-3 pl-6 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_4} />
                        </li>
                    </ul> <br />
                    {blogTranslations.p4_5} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    <Image src={image4} alt="" className="w-full" /> <br />
                    {blogTranslations.p5_1} <br /> <br />
                    <ul className="flex flex-col gap-3 pl-6 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_3} />
                            <ul className="flex flex-col gap-3 pl-6 list-disc mt-3">
                                <li><BoldBeforeComa inputText={blogTranslations.p5_3_1} /></li>
                                <li><BoldBeforeComa inputText={blogTranslations.p5_3_2} /></li>
                            </ul>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_4} />
                        </li>
                    </ul> <br />
                    {blogTranslations.p5_5} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    <Image src={image5} alt="" className="w-full" /> <br />
                    {blogTranslations.p6_1} <br /> <br />
                    <ul className="flex flex-col gap-3 pl-6 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_4} />
                        </li>
                    </ul> <br />
                    {blogTranslations.p6_5} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    {blogTranslations.p8_1} <br /> <br />
                    {blogTranslations.p8_2} <br /> <br />
                    <HyperLink text={blogTranslations.p8_3} links={hyperLink} /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Levels_Quick_Start_Guide_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="How Many Trading Days in a Year"
                        translation={blogTranslations.CTA} />
                    <br />

                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}