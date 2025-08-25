//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import imageEN from './assets/One Step Evaluation Prop Firm - Blog 2.jpg'
import imageES from './assets/One Step Evaluation Prop Firm - Blog 2 SPA.jpg'

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

const i18nNameSpaces = ["common", "blog_landing", "article_best_one_step_prop_firm"];

//Params to bring the info from the db
const blogParam = "best-one-step-prop-firm"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "Best One Step Prop Firm 2025: Fast Funding for Skilled Traders",
    description: "Discover the best one step prop firms in 2025. Get funded quickly with TopTier Trader's 1 Phase Challenge. Compare profit splits, drawdown limits, and trading flexibility.",
    keywords: "one step prop firm, best one step prop firm, fast funding traders, 1 phase challenge, TopTier Trader, prop firm evaluation, funded trading account, single step evaluation",
    language: "en",
    subject: "One Step Proprietary Trading Firms and Fast Funding",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Best One Step Prop Firm 2025: Fast Funding for Skilled Traders",
        description: "Learn how one step prop firms work, pass single evaluation challenges, and get funded in days not months. Start with TopTier Trader's 1 Phase Challenge today.",
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
    title: "Mejor Prop Firm de Un Solo Paso 2025: Financiamiento Rápido para Traders",
    description: "Descubre las mejores prop firms de un paso en 2025. Obtén financiamiento rápido con el Desafío de 1 Fase de TopTier Trader. Compara divisiones de ganancias y límites.",
    keywords: "prop firm un paso, mejor prop firm un paso, financiamiento rápido traders, desafío 1 fase, TopTier Trader, evaluación prop firm, cuenta de trading financiada, evaluación un solo paso",
    language: "es",
    subject: "Empresas de Trading Propietario de Un Paso y Financiamiento Rápido",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Mejor Prop Firm de Un Solo Paso 2025: Financiamiento Rápido para Traders",
        description: "Aprende cómo funcionan las prop firms de un paso, supera evaluaciones únicas y obtén financiamiento en días, no meses. Comienza con el Desafío de 1 Fase de TopTier Trader.",
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
    title: "Meilleure Société de Trading à Une Étape 2025: Financement Rapide pour Traders",
    description: "Découvrez les meilleures sociétés de trading à une étape en 2025. Obtenez un financement rapide avec le Défi 1 Phase de TopTier Trader. Comparez les partages de profits.",
    keywords: "société trading une étape, meilleure société trading une étape, financement rapide traders, défi 1 phase, TopTier Trader, évaluation société trading, compte trading financé, évaluation une étape",
    language: "fr",
    subject: "Sociétés de Trading Propriétaire à Une Étape et Financement Rapide",
    coverage: "Mondial",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Meilleure Société de Trading à Une Étape 2025: Financement Rapide pour Traders",
        description: "Apprenez comment fonctionnent les sociétés de trading à une étape, réussissez les évaluations uniques et obtenez un financement en jours, pas en mois. Commencez avec le Défi 1 Phase de TopTier Trader.",
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
        h1_title: t('article_best_one_step_prop_firm:h1_title'),
        CTA: t('article_best_one_step_prop_firm:CTA'),
        t1: t('article_best_one_step_prop_firm:t1'),
        t2: t('article_best_one_step_prop_firm:t2'),
        t3: t('article_best_one_step_prop_firm:t3'),
        t4: t('article_best_one_step_prop_firm:t4'),
        t5: t('article_best_one_step_prop_firm:t5'),
        t6: t('article_best_one_step_prop_firm:t6'),
        t7: t('article_best_one_step_prop_firm:t7'),
        t8: t('article_best_one_step_prop_firm:t8'),
        t9: t('article_best_one_step_prop_firm:t9'),
        t10: t('article_best_one_step_prop_firm:t10'),
        t11: t('article_best_one_step_prop_firm:t11'),
        p1: t('article_best_one_step_prop_firm:p1'),
        p2_1: t('article_best_one_step_prop_firm:p2_1'),
        p2_2: t('article_best_one_step_prop_firm:p2_2'),
        p2_3: t('article_best_one_step_prop_firm:p2_3'),
        p3_1: t('article_best_one_step_prop_firm:p3_1'),
        p3_2: t('article_best_one_step_prop_firm:p3_2'),
        p3_3: t('article_best_one_step_prop_firm:p3_3'),
        p3_4: t('article_best_one_step_prop_firm:p3_4'),
        p3_5: t('article_best_one_step_prop_firm:p3_5'),
        p3_6: t('article_best_one_step_prop_firm:p3_6'),
        p3_7: t('article_best_one_step_prop_firm:p3_7'),
        p3_8: t('article_best_one_step_prop_firm:p3_8'),
        p3_9: t('article_best_one_step_prop_firm:p3_9'),
        p3_10: t('article_best_one_step_prop_firm:p3_10'),
        p3_11: t('article_best_one_step_prop_firm:p3_11'),
        p4_1: t('article_best_one_step_prop_firm:p4_1'),
        p4_2: t('article_best_one_step_prop_firm:p4_2'),
        p4_3: t('article_best_one_step_prop_firm:p4_3'),
        p4_4: t('article_best_one_step_prop_firm:p4_4'),
        p4_5: t('article_best_one_step_prop_firm:p4_5'),
        p4_6: t('article_best_one_step_prop_firm:p4_6'),
        p4_7: t('article_best_one_step_prop_firm:p4_7'),
        p4_8: t('article_best_one_step_prop_firm:p4_8'),
        p4_9: t('article_best_one_step_prop_firm:p4_9'),
        p4_10: t('article_best_one_step_prop_firm:p4_10'),
        p4_11: t('article_best_one_step_prop_firm:p4_11'),
        p4_12: t('article_best_one_step_prop_firm:p4_12'),
        p5_1: t('article_best_one_step_prop_firm:p5_1'),
        p5_2: t('article_best_one_step_prop_firm:p5_2'),
        p5_3: t('article_best_one_step_prop_firm:p5_3'),
        p5_4: t('article_best_one_step_prop_firm:p5_4'),
        p5_5: t('article_best_one_step_prop_firm:p5_5'),
        p5_6: t('article_best_one_step_prop_firm:p5_6'),
        p5_7: t('article_best_one_step_prop_firm:p5_7'),
        p5_8: t('article_best_one_step_prop_firm:p5_8'),
        p5_9: t('article_best_one_step_prop_firm:p5_9'),
        p5_10: t('article_best_one_step_prop_firm:p5_10'),
        p5_11: t('article_best_one_step_prop_firm:p5_11'),
        p5_12: t('article_best_one_step_prop_firm:p5_12'),
        p5_13: t('article_best_one_step_prop_firm:p5_13'),
        p5_14: t('article_best_one_step_prop_firm:p5_14'),
        p5_15: t('article_best_one_step_prop_firm:p5_15'),
        p5_16: t('article_best_one_step_prop_firm:p5_16'),
        p5_17: t('article_best_one_step_prop_firm:p5_17'),
        p5_18: t('article_best_one_step_prop_firm:p5_18'),
        p5_19: t('article_best_one_step_prop_firm:p5_19'),
        p5_20: t('article_best_one_step_prop_firm:p5_20'),
        p6_1: t('article_best_one_step_prop_firm:p6_1'),
        p6_2: t('article_best_one_step_prop_firm:p6_2'),
        p6_3: t('article_best_one_step_prop_firm:p6_3'),
        p6_4: t('article_best_one_step_prop_firm:p6_4'),
        p6_5: t('article_best_one_step_prop_firm:p6_5'),
        p6_6: t('article_best_one_step_prop_firm:p6_6'),
        p6_7: t('article_best_one_step_prop_firm:p6_7'),
        p6_8: t('article_best_one_step_prop_firm:p6_8'),
        p6_9: t('article_best_one_step_prop_firm:p6_9'),
        p6_10: t('article_best_one_step_prop_firm:p6_10'),
        p6_11: t('article_best_one_step_prop_firm:p6_11'),
        p6_12: t('article_best_one_step_prop_firm:p6_12'),
        p6_13: t('article_best_one_step_prop_firm:p6_13'),
        p6_14: t('article_best_one_step_prop_firm:p6_14'),
        p6_15: t('article_best_one_step_prop_firm:p6_15'),
        p6_16: t('article_best_one_step_prop_firm:p6_16'),
        p6_17: t('article_best_one_step_prop_firm:p6_17'),
        p7_1: t('article_best_one_step_prop_firm:p7_1'),
        p7_2: t('article_best_one_step_prop_firm:p7_2'),
        p7_3: t('article_best_one_step_prop_firm:p7_3'),
        p7_4: t('article_best_one_step_prop_firm:p7_4'),
        p7_5: t('article_best_one_step_prop_firm:p7_5'),
        p7_6: t('article_best_one_step_prop_firm:p7_6'),
        p7_7: t('article_best_one_step_prop_firm:p7_7'),
        p7_8: t('article_best_one_step_prop_firm:p7_8'),
        p7_9: t('article_best_one_step_prop_firm:p7_9'),
        p7_10: t('article_best_one_step_prop_firm:p7_10'),
        p7_11: t('article_best_one_step_prop_firm:p7_11'),
        p8_1: t('article_best_one_step_prop_firm:p8_1'),
        p8_2: t('article_best_one_step_prop_firm:p8_2'),
        p8_3: t('article_best_one_step_prop_firm:p8_3'),
        p8_4: t('article_best_one_step_prop_firm:p8_4'),
        p8_5: t('article_best_one_step_prop_firm:p8_5'),
        p8_6: t('article_best_one_step_prop_firm:p8_6'),
        p8_7: t('article_best_one_step_prop_firm:p8_7'),
        p8_8: t('article_best_one_step_prop_firm:p8_8'),
        p8_9: t('article_best_one_step_prop_firm:p8_9'),
        p9_1: t('article_best_one_step_prop_firm:p9_1'),
        p9_2: t('article_best_one_step_prop_firm:p9_2'),
        p9_3: t('article_best_one_step_prop_firm:p9_3'),
        p9_4: t('article_best_one_step_prop_firm:p9_4'),
        p9_5: t('article_best_one_step_prop_firm:p9_5'),
        p9_6: t('article_best_one_step_prop_firm:p9_6'),
        p9_7: t('article_best_one_step_prop_firm:p9_7'),
        p9_8: t('article_best_one_step_prop_firm:p9_8'),
        p9_9: t('article_best_one_step_prop_firm:p9_9'),
        p9_10: t('article_best_one_step_prop_firm:p9_10'),
        p9_11: t('article_best_one_step_prop_firm:p9_11'),
        p9_12: t('article_best_one_step_prop_firm:p9_12'),
        p9_13: t('article_best_one_step_prop_firm:p9_13'),
        p9_14: t('article_best_one_step_prop_firm:p9_14'),
        p9_15: t('article_best_one_step_prop_firm:p9_15'),
        p9_16: t('article_best_one_step_prop_firm:p9_16'),
        p9_17: t('article_best_one_step_prop_firm:p9_17'),
        p9_18: t('article_best_one_step_prop_firm:p9_18'),
        p9_19: t('article_best_one_step_prop_firm:p9_19'),
        p9_20: t('article_best_one_step_prop_firm:p9_20'),
        p9_21: t('article_best_one_step_prop_firm:p9_21'),
        p9_22: t('article_best_one_step_prop_firm:p9_22'),
        p9_23: t('article_best_one_step_prop_firm:p9_23'),
        p10_1: t('article_best_one_step_prop_firm:p10_1'),
        p10_2: t('article_best_one_step_prop_firm:p10_2'),
        p11_1: t('article_best_one_step_prop_firm:p11_1'),
        p11_2: t('article_best_one_step_prop_firm:p11_2'),
        p11_3: t('article_best_one_step_prop_firm:p11_3'),
        p11_4: t('article_best_one_step_prop_firm:p11_4'),
        p11_5: t('article_best_one_step_prop_firm:p11_5'),
        p11_6: t('article_best_one_step_prop_firm:p11_6'),
        p11_7: t('article_best_one_step_prop_firm:p11_7'),
        p11_8: t('article_best_one_step_prop_firm:p11_8'),
        p11_9: t('article_best_one_step_prop_firm:p11_9'),
        p11_10: t('article_best_one_step_prop_firm:p11_10'),
        p11_11: t('article_best_one_step_prop_firm:p11_11'),
        p11_12: t('article_best_one_step_prop_firm:p11_12'),
        p11_13: t('article_best_one_step_prop_firm:p11_13'),
        p12: t('article_best_one_step_prop_firm:p12'),
        p13_1: t('article_best_one_step_prop_firm:p13_1'),
        p13_2: t('article_best_one_step_prop_firm:p13_2'),
        p13_1: t('article_best_one_step_prop_firm:p13_1'),
        p13_2: t('article_best_one_step_prop_firm:p13_2'),
        p13_3: t('article_best_one_step_prop_firm:p13_3'),
        p13_4: t('article_best_one_step_prop_firm:p13_4'),
        p13_5: t('article_best_one_step_prop_firm:p13_5'),
        p13_6: t('article_best_one_step_prop_firm:p13_6'),
        p13_7: t('article_best_one_step_prop_firm:p13_7'),
        p13_8: t('article_best_one_step_prop_firm:p13_8'),
        p13_9: t('article_best_one_step_prop_firm:p13_9'),
        p13_10: t('article_best_one_step_prop_firm:p13_10'),
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

                <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5 ">{blogTranslations.h1_title}</h1>

                <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

                    {blogTranslations.p1} <br /> <br />
                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />
                    {blogTranslations.p2_1} <br /> <br />
                    {blogTranslations.p2_2} <br /> <br />
                    {blogTranslations.p2_3} <br /> <br />
                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    {blogTranslations.p3_1} <br /> <br />
                    <strong className="text-white">{blogTranslations.p3_2}</strong> <br /> <br />
                    {blogTranslations.p3_3} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p3_4} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p3_5} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p3_6} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p3_7} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p3_8} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p3_9} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p3_10} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p3_11} /></li>
                    </ul><br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    <strong className="text-white">{blogTranslations.p4_1}</strong> <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p4_2} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_3} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_4} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_5} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_6} /></li>
                    </ul><br />
                    <strong className="text-white">{blogTranslations.p4_7}</strong> <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p4_8} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_9} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_10} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_11} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_12} /></li>
                    </ul><br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    {blogTranslations.p5_1} <br /> <br />
                    <strong className="text-white">{blogTranslations.p5_2}</strong> <br /> <br />
                    {blogTranslations.p5_3} <br /> <br />
                    <strong className="text-white">{blogTranslations.p5_4}</strong> <br /> <br />
                    {blogTranslations.p5_5} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>$5,000</li>
                        <li>$10,000</li>
                        <li>$25,000</li>
                        <li>$50,000</li>
                        <li>$100,000</li>
                    </ul> <br />
                    {blogTranslations.p5_6} <br /> <br />

                    <strong className="text-white">{blogTranslations.p5_7}</strong> <br /> <br />
                    {blogTranslations.p5_8} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p5_9} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_10} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_11} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_12} /></li>
                    </ul><br />
                    {blogTranslations.p5_13} <br /> <br />

                    <strong className="text-white">{blogTranslations.p5_14}</strong> <br /> <br />
                    {blogTranslations.p5_15} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p5_16} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_17} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_18} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_19} /></li>
                    </ul><br />
                    {blogTranslations.p5_20} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    {blogTranslations.p6_1} <br /> <br />
                    <Image src={image} alt="table" className="w-full" /> <br />
                    <strong className="text-white">{blogTranslations.p6_2}</strong> <br /> <br />
                    {blogTranslations.p6_3} <br /> <br />
                    <strong className="text-white">{blogTranslations.p6_4}</strong> <br /> <br />
                    {blogTranslations.p6_5} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p6_6}</li>
                        <li>{blogTranslations.p6_7}</li>
                        <li>{blogTranslations.p6_8}</li>
                        <li>{blogTranslations.p6_9}</li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.p6_10}</strong> <br /> <br />
                    {blogTranslations.p6_11} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p6_12}</li>
                        <li>{blogTranslations.p6_13}</li>
                        <li>{blogTranslations.p6_14}</li>
                        <li>{blogTranslations.p6_15}</li>
                        <li>{blogTranslations.p6_16}</li>
                    </ul> <br />
                    {blogTranslations.p6_17} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    {blogTranslations.p7_1} <br /> <br />
                    <strong className="text-white">{blogTranslations.p7_2}</strong> <br /> <br />
                    {blogTranslations.p7_3} <br /> <br />
                    <strong className="text-white">{blogTranslations.p7_4}</strong> <br /> <br />
                    {blogTranslations.p7_5} <br /> <br />
                    <strong className="text-white">{blogTranslations.p7_6}</strong> <br /> <br />
                    {blogTranslations.p7_7} <br /> <br />
                    <strong className="text-white">{blogTranslations.p7_8}</strong> <br /> <br />
                    {blogTranslations.p7_9} <br /> <br />
                    <strong className="text-white">{blogTranslations.p7_10}</strong> <br /> <br />
                    {blogTranslations.p7_11} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    {blogTranslations.p8_1} <br /> <br />
                    <strong className="text-white">{blogTranslations.p8_2}</strong> <br /> <br />
                    {blogTranslations.p8_3} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p8_4}</li>
                        <li>{blogTranslations.p8_5}</li>
                        <li>{blogTranslations.p8_6}</li>
                        <li>{blogTranslations.p8_7}</li>
                        <li>{blogTranslations.p8_8}</li>
                        <li>{blogTranslations.p8_9}</li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.t8}</strong> <br /> <br />
                    {blogTranslations.p9_1} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p9_2}</li>
                        <li>{blogTranslations.p9_3}</li>
                        <li>{blogTranslations.p9_4}</li>
                        <li>{blogTranslations.p9_5}</li>
                        <li>{blogTranslations.p9_6}</li>
                        <li>{blogTranslations.p9_7}</li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.p9_8}</strong> <br /> <br />
                    {blogTranslations.p9_9} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p9_10}</li>
                        <li>{blogTranslations.p9_11}</li>
                        <li>{blogTranslations.p9_12}</li>
                        <li>{blogTranslations.p9_13}</li>
                        <li>{blogTranslations.p9_14}</li>
                        <li>{blogTranslations.p9_15}</li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.p9_16}</strong> <br /> <br />
                    {blogTranslations.p9_17} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p9_18}</li>
                        <li>{blogTranslations.p9_19}</li>
                        <li>{blogTranslations.p9_20}</li>
                        <li>{blogTranslations.p9_21}</li>
                        <li>{blogTranslations.p9_22}</li>
                        <li>{blogTranslations.p9_23}</li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />
                    {blogTranslations.p10_1} <br /> <br />
                    {blogTranslations.p10_2} <br /> <br />

                    <strong className="text-white">{blogTranslations.p11_1}</strong> <br /> <br />
                    {blogTranslations.p11_2} <br /> <br />
                    <ol className="flex flex-col gap-6 pl-6 list-decimal">
                        <li><BoldBeforeComa inputText={blogTranslations.p11_3} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p11_4} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p11_5} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p11_6} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p11_7} /></li>
                    </ol><br />
                    <strong className="text-white">{blogTranslations.p11_8}</strong> <br /> <br />
                    {blogTranslations.p11_9} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p11_10} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p11_11} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p11_12} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p11_13} /></li>
                    </ul><br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t10}</h3><br />
                    {blogTranslations.p12} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t11}</h3><br />
                    {blogTranslations.p13_1} <br /> <br />
                    {blogTranslations.p13_2} <br /> <br />
                    <ol className="flex flex-col gap-6 pl-6 list-decimal">
                        <li><BoldBeforeComa inputText={blogTranslations.p13_3} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p13_4} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p13_5} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p13_6} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p13_7} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p13_8} /></li>
                    </ol><br />
                    {blogTranslations.p13_9} <br /> <br />
                    {blogTranslations.p13_10} <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Best_One_Step_Prop_Firm_Blog_CTA&hcategory=Mar2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="The Best One Step Prop Firm in 2025: Fast Funding for Skilled Traders"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}