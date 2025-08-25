//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import imageES from './assets/Blog 2 - 1 Comparison Table_ Fastest Prop Firm Payouts_SPA.jpg'
import imageEN from './assets/Blog 2 - 1 Comparison Table_ Fastest Prop Firm Payouts.jpg'
import { bgImageStyleBlog } from "@/constants/styles"
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

const i18nNameSpaces = ["common", "blog_landing", "article_fastest_payouts"];

//Params to bring the info from the db
const blogParam = "fastest-payouts"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "Fastest Payout Prop Firm in 2025: Instant Withdrawals for Traders",
    description: "Looking for the fastest payout prop firm in 2025? Discover firms like TopTier Trader, FundedNext, and FTMO that offer lightning-fast withdrawals—some within 24 hours.",
    keywords: "fastest payout prop firm, instant payout prop firms, quick withdrawal prop trading, TopTier Trader payouts, FundedNext withdrawal time, best prop firms 2025",
    language: "en",
    subject: "Proprietary Trading & Payout Speeds",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Fastest Payout Prop Firm in 2025: Instant Withdrawals for Traders",
        description: "Compare the fastest payout prop firms in 2025 with verified payout speeds and trader-friendly conditions. See why TopTier Trader leads with a 24-hour guarantee.",
        image: "", // Replace with your blog header image
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
    title: "La Prop Firm con Retiros Más Rápidos en 2025: Ganancias al Instante",
    description: "¿Buscas la prop firm con pagos más rápidos en 2025? Descubre las firmas con retiros en 24 horas como TopTier Trader, FundedNext y FTMO.",
    keywords: "retiros rápidos prop firm, prop firm con pagos instantáneos, TopTier Trader pagos, retiro rápido trading 2025, mejores prop firms con retiros rápidos",
    language: "es",
    subject: "Trading Proprietario y Velocidad de Retiros",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "La Prop Firm con Retiros Más Rápidos en 2025: Ganancias al Instante",
        description: "Compara las prop firms con retiros más rápidos en 2025 y descubre por qué TopTier Trader lidera con su garantía de pago en 24 horas.",
        image: "", // Replace with your blog header image
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
    title: "Société de Trading Propriétaire aux Paiements les Plus Rapides en 2025 : Retraits Instantanés pour les Traders",
    description: "Vous cherchez la société de trading propriétaire aux paiements les plus rapides en 2025 ? Découvrez des entreprises comme TopTier Trader, FundedNext et FTMO qui offrent des retraits ultra-rapides—certains en moins de 24 heures.",
    keywords: "société de trading propriétaire paiement rapide, sociétés de trading propriétaire paiement instantané, retrait rapide trading propriétaire, paiements TopTier Trader, délai de retrait FundedNext, meilleures sociétés de trading propriétaire 2025",
    language: "fr",
    subject: "Trading Propriétaire et Vitesse des Paiements",
    coverage: "Mondial",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Société de Trading Propriétaire aux Paiements les Plus Rapides en 2025 : Retraits Instantanés pour les Traders",
        description: "Comparez les sociétés de trading propriétaire aux paiements les plus rapides en 2025 avec des vitesses de paiement vérifiées et des conditions favorables aux traders. Découvrez pourquoi TopTier Trader est leader avec une garantie de 24 heures.",
        image: "", // Remplacez par l'image d'en-tête de votre blog
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
        h1_title: t('article_fastest_payouts:h1_title'),
        CTA: t('article_fastest_payouts:CTA'),
        t1: t('article_fastest_payouts:t1'),
        t2: t('article_fastest_payouts:t2'),
        t3: t('article_fastest_payouts:t3'),
        t4: t('article_fastest_payouts:t4'),
        t5: t('article_fastest_payouts:t5'),
        t6: t('article_fastest_payouts:t6'),
        t7: t('article_fastest_payouts:t7'),
        t8: t('article_fastest_payouts:t8'),
        p1_1: t('article_fastest_payouts:p1_1'),
        p1_2: t('article_fastest_payouts:p1_2'),
        p1_3: t('article_fastest_payouts:p1_3'),
        p2: t('article_fastest_payouts:p2'),
        p3_1: t('article_fastest_payouts:p3_1'),
        p3_2: t('article_fastest_payouts:p3_2'),
        p3_3: t('article_fastest_payouts:p3_3'),
        p3_4: t('article_fastest_payouts:p3_4'),
        p3_5: t('article_fastest_payouts:p3_5'),
        p3_6: t('article_fastest_payouts:p3_6'),
        p4_1: t('article_fastest_payouts:p4_1'),
        p4_2: t('article_fastest_payouts:p4_2'),
        p4_3: t('article_fastest_payouts:p4_3'),
        p4_4: t('article_fastest_payouts:p4_4'),
        p4_5: t('article_fastest_payouts:p4_5'),
        p4_6: t('article_fastest_payouts:p4_6'),
        p4_7: t('article_fastest_payouts:p4_7'),
        p4_8: t('article_fastest_payouts:p4_8'),
        p4_9: t('article_fastest_payouts:p4_9'),
        p4_10: t('article_fastest_payouts:p4_10'),
        p4_11: t('article_fastest_payouts:p4_11'),
        p5_1: t('article_fastest_payouts:p5_1'),
        p5_2: t('article_fastest_payouts:p5_2'),
        p5_3: t('article_fastest_payouts:p5_3'),
        p5_4: t('article_fastest_payouts:p5_4'),
        p5_5: t('article_fastest_payouts:p5_5'),
        p5_6: t('article_fastest_payouts:p5_6'),
        p5_7: t('article_fastest_payouts:p5_7'),
        p5_8: t('article_fastest_payouts:p5_8'),
        p5_9: t('article_fastest_payouts:p5_9'),
        p5_10: t('article_fastest_payouts:p5_10'),
        p6_1: t('article_fastest_payouts:p6_1'),
        p6_2: t('article_fastest_payouts:p6_2'),
        p6_3: t('article_fastest_payouts:p6_3'),
        p6_4: t('article_fastest_payouts:p6_4'),
        p6_5: t('article_fastest_payouts:p6_5'),
        p6_6: t('article_fastest_payouts:p6_6'),
        p6_7: t('article_fastest_payouts:p6_7'),
        p6_8: t('article_fastest_payouts:p6_8'),
        p6_9: t('article_fastest_payouts:p6_9'),
        p6_10: t('article_fastest_payouts:p6_10'),
        p6_11: t('article_fastest_payouts:p6_11'),
        p6_12: t('article_fastest_payouts:p6_12'),
        p7_1: t('article_fastest_payouts:p7_1'),
        p7_2: t('article_fastest_payouts:p7_2'),
        p7_3: t('article_fastest_payouts:p7_3'),
        p7_4: t('article_fastest_payouts:p7_4'),
        p7_5: t('article_fastest_payouts:p7_5'),
        p7_6: t('article_fastest_payouts:p7_6'),
        p7_7: t('article_fastest_payouts:p7_7'),
        p7_8: t('article_fastest_payouts:p7_8'),
        p7_9: t('article_fastest_payouts:p7_9'),
        p7_10: t('article_fastest_payouts:p7_10'),
        p7_11: t('article_fastest_payouts:p7_11'),
        p8_1: t('article_fastest_payouts:p8_1'),
        p8_2: t('article_fastest_payouts:p8_2'),
        p8_3: t('article_fastest_payouts:p8_3'),
        p8_4: t('article_fastest_payouts:p8_4'),
        p8_5: t('article_fastest_payouts:p8_5'),
        p8_6: t('article_fastest_payouts:p8_6'),
        p8_7: t('article_fastest_payouts:p8_7'),
        p8_8: t('article_fastest_payouts:p8_8'),
        p8_9: t('article_fastest_payouts:p8_9'),
        p8_10: t('article_fastest_payouts:p8_10'),
        p8_11: t('article_fastest_payouts:p8_11'),
        p8_12: t('article_fastest_payouts:p8_12'),
        p9: t('article_fastest_payouts:p9'),
        p10_1: t('article_fastest_payouts:p10_1'),
        p10_2: t('article_fastest_payouts:p10_2'),
        p10_3: t('article_fastest_payouts:p10_3'),
        p10_4: t('article_fastest_payouts:p10_4'),
        p10_5: t('article_fastest_payouts:p10_5'),
        p10_6: t('article_fastest_payouts:p10_6'),
        p10_7: t('article_fastest_payouts:p10_7'),
        p10_8: t('article_fastest_payouts:p10_8'),
        p10_9: t('article_fastest_payouts:p10_9'),
        p11_1: t('article_fastest_payouts:p11_1'),
        p11_2: t('article_fastest_payouts:p11_2'),
        p11_3: t('article_fastest_payouts:p11_3'),
        p11_4: t('article_fastest_payouts:p11_4'),
        p11_5: t('article_fastest_payouts:p11_5'),
        p11_6: t('article_fastest_payouts:p11_6'),
        p12_1: t('article_fastest_payouts:p12_1'),
        p12_2: t('article_fastest_payouts:p12_2'),
        p12_3: t('article_fastest_payouts:p12_3'),
        p12_4: t('article_fastest_payouts:p12_4'),
        p12_5: t('article_fastest_payouts:p12_5'),
        p12_6: t('article_fastest_payouts:p12_6'),
        p13_1: t('article_fastest_payouts:p13_1'),
        p13_2: t('article_fastest_payouts:p13_2'),
        p13_3: t('article_fastest_payouts:p13_3'),
        p13_4: t('article_fastest_payouts:p13_4'),
        p13_5: t('article_fastest_payouts:p13_5'),
        p13_6: t('article_fastest_payouts:p13_6'),
        p14_1: t('article_fastest_payouts:p14_1'),
        p14_2: t('article_fastest_payouts:p14_2'),
        p14_3: t('article_fastest_payouts:p14_3'),
        p14_4: t('article_fastest_payouts:p14_4'),
        p14_5: t('article_fastest_payouts:p14_5'),
        p14_6: t('article_fastest_payouts:p14_6'),
        p14_7: t('article_fastest_payouts:p14_7'),
        p14_8: t('article_fastest_payouts:p14_8'),
        p14_9: t('article_fastest_payouts:p14_9'),
        p14_10: t('article_fastest_payouts:p14_10'),
        p14_11: t('article_fastest_payouts:p14_11'),
        p14_12: t('article_fastest_payouts:p14_12'),
        p14_13: t('article_fastest_payouts:p14_13'),
        p14_14: t('article_fastest_payouts:p14_14'),
        p14_15: t('article_fastest_payouts:p14_15'),
        p14_16: t('article_fastest_payouts:p14_16'),
        p14_17: t('article_fastest_payouts:p14_17'),
        p14_18: t('article_fastest_payouts:p14_18'),
        p14_19: t('article_fastest_payouts:p14_19'),
        p14_20: t('article_fastest_payouts:p14_20'),
        p14_21: t('article_fastest_payouts:p14_21'),
        p14_22: t('article_fastest_payouts:p14_22'),
        p14_23: t('article_fastest_payouts:p14_23'),
        p15_1: t('article_fastest_payouts:p15_1'),
        p15_2: t('article_fastest_payouts:p15_2'),
        p15_3: t('article_fastest_payouts:p15_3'),
        p15_4: t('article_fastest_payouts:p15_4'),
        p15_5: t('article_fastest_payouts:p15_5'),
        p15_6: t('article_fastest_payouts:p15_6'),
        p15_7: t('article_fastest_payouts:p15_7'),
        p15_8: t('article_fastest_payouts:p15_8'),
        p15_9: t('article_fastest_payouts:p15_9'),
        p16_1: t('article_fastest_payouts:p16_1'),
        p16_2: t('article_fastest_payouts:p16_2'),
        p16_3: t('article_fastest_payouts:p16_3'),
        p16_4: t('article_fastest_payouts:p16_4'),
        p16_5: t('article_fastest_payouts:p16_5'),
        p16_6: t('article_fastest_payouts:p16_6'),
        p16_7: t('article_fastest_payouts:p16_7'),
        p17_1: t('article_fastest_payouts:p17_1'),
        p17_2: t('article_fastest_payouts:p17_2'),
        p17_3: t('article_fastest_payouts:p17_3'),
        p17_4: t('article_fastest_payouts:p17_4'),
        p17_5: t('article_fastest_payouts:p17_5'),
        p17_6: t('article_fastest_payouts:p17_6'),
        p17_7: t('article_fastest_payouts:p17_7'),
        p17_8: t('article_fastest_payouts:p17_8'),
        p17_9: t('article_fastest_payouts:p17_9'),
        p17_10: t('article_fastest_payouts:p17_10'),
        p17_11: t('article_fastest_payouts:p17_11'),
    }

    const tableImage = locale === 'es' ? imageES : imageEN

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

                    <p className="italic">{blogTranslations.p2}</p> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />

                    {blogTranslations.p3_1} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p3_2}</li>
                        <li>{blogTranslations.p3_3}</li>
                        <li>{blogTranslations.p3_4}</li>
                        <li>{blogTranslations.p3_5}</li>
                    </ul> <br />
                    {blogTranslations.p3_6} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />

                    {blogTranslations.p4_1} <br /> <br />

                    <strong className="text-white">{blogTranslations.p4_2}</strong> <br /> <br />

                    <BoldBeforeComa inputText={blogTranslations.p4_3} /> <br />

                    {blogTranslations.p4_4} <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_5} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_6} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_7} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_8} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_9} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_10} />
                        </li>
                    </ul> <br />

                    {blogTranslations.p4_11} <br /> <br />

                    <strong className="text-white">{blogTranslations.p5_1}</strong> <br /> <br />

                    <BoldBeforeComa inputText={blogTranslations.p5_2} /> <br />

                    {blogTranslations.p5_3} <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_5} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_6} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_7} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_8} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_9} />
                        </li>
                    </ul> <br />

                    {blogTranslations.p5_10} <br /> <br />

                    <strong className="text-white">{blogTranslations.p6_1}</strong> <br /> <br />

                    <BoldBeforeComa inputText={blogTranslations.p6_2} /> <br />

                    {blogTranslations.p6_3} <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_4} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_5} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_6} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_7} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_8} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_10} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_11} />
                        </li>
                    </ul> <br />

                    {blogTranslations.p6_12} <br /> <br />

                    <strong className="text-white">{blogTranslations.p7_1}</strong> <br /> <br />

                    <BoldBeforeComa inputText={blogTranslations.p7_2} /> <br />

                    {blogTranslations.p7_3} <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p7_4} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p7_5} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p7_6} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p7_7} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p7_8} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p7_10} />
                        </li>
                    </ul> <br />

                    {blogTranslations.p7_11} <br /> <br />

                    <strong className="text-white">{blogTranslations.p8_1}</strong> <br /> <br />

                    <BoldBeforeComa inputText={blogTranslations.p8_2} /> <br />

                    {blogTranslations.p8_3} <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p8_4} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p8_5} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p8_6} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p8_7} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p8_8} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p8_10} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p8_11} />
                        </li>
                    </ul> <br />

                    {blogTranslations.p8_12} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />

                    {blogTranslations.p9} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />

                    <Image src={tableImage} alt="comparative table" className="w-full" /> <br />

                    {blogTranslations.p10_1} <br /> <br />

                    <strong className="text-white">{blogTranslations.p10_2}</strong> <br /> <br />

                    {blogTranslations.p10_3} <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p10_4}</li>
                        <li>{blogTranslations.p10_5}</li>
                        <li>{blogTranslations.p10_6}</li>
                        <li>{blogTranslations.p10_7}</li>
                        <li>{blogTranslations.p10_8}</li>
                        <li>{blogTranslations.p10_9}</li>
                    </ul> <br />

                    <strong className="text-white">{blogTranslations.p11_1}</strong> <br /> <br />

                    {blogTranslations.p11_2} <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p11_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p11_4} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p11_5} />
                        </li>
                    </ul> <br />

                    {blogTranslations.p11_6} <br /> <br />

                    <strong className="text-white">{blogTranslations.p12_1}</strong> <br /> <br />

                    {blogTranslations.p12_2} <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p12_3}</li>
                        <li>{blogTranslations.p12_4}</li>
                        <li>{blogTranslations.p12_5}</li>
                        <li>{blogTranslations.p12_6}</li>
                    </ul> <br />

                    <strong className="text-white">{blogTranslations.p13_1}</strong> <br /> <br />

                    {blogTranslations.p13_6} <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p13_2}</li>
                        <li>{blogTranslations.p13_3}</li>
                        <li>{blogTranslations.p13_4}</li>
                        <li>{blogTranslations.p13_5}</li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />

                    {blogTranslations.p14_1} <br /> <br />

                    <strong className="text-white">{blogTranslations.p14_2}</strong> <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p14_3}</li>
                        <li>{blogTranslations.p14_4}</li>
                        <li>{blogTranslations.p14_5}</li>
                        <li>{blogTranslations.p14_6}</li>
                    </ul> <br />

                    <strong className="text-white">{blogTranslations.p14_7}</strong> <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p14_8}</li>
                        <li>{blogTranslations.p14_9}</li>
                        <li>{blogTranslations.p14_10}</li>
                        <li>{blogTranslations.p14_11}</li>
                    </ul> <br />

                    <strong className="text-white">{blogTranslations.p14_12}</strong> <br /> <br />

                    {blogTranslations.p14_13} <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p14_14}</li>
                        <li>{blogTranslations.p14_15}</li>
                        <li>{blogTranslations.p14_16}</li>
                        <li>{blogTranslations.p14_17}</li>
                    </ul> <br />

                    <strong className="text-white">{blogTranslations.p14_18}</strong> <br /> <br />

                    {blogTranslations.p14_19} <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p14_20}</li>
                        <li>{blogTranslations.p14_21}</li>
                        <li>{blogTranslations.p14_22}</li>
                        <li>{blogTranslations.p14_23}</li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />

                    {blogTranslations.p15_1} <br /> <br />

                    <ol className="flex flex-col gap-6 pl-6 list-decimal">
                        <li>{blogTranslations.p15_2}</li>
                        <li>{blogTranslations.p15_3}</li>
                        <li>{blogTranslations.p15_4}</li>
                        <li>{blogTranslations.p15_5}</li>
                        <li>{blogTranslations.p15_6}</li>
                        <li>{blogTranslations.p15_7}</li>
                        <li>{blogTranslations.p15_8}</li>
                    </ol> <br />

                    {blogTranslations.p15_9} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />

                    {blogTranslations.p16_1} <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p16_2}</li>
                        <li>{blogTranslations.p16_3}</li>
                        <li>{blogTranslations.p16_4}</li>
                        <li>{blogTranslations.p16_5}</li>
                    </ul> <br />

                    {blogTranslations.p16_6} <br /> <br />

                    <a href={`${ENVIRONMENT_URL}`} className="underline">{blogTranslations.p16_7}</a> <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />

                    <strong className="text-white">{blogTranslations.p17_1}</strong> <br /> <br />

                    {blogTranslations.p17_2} <br /> <br />
                    {blogTranslations.p17_2} <br /> <br />

                    <strong className="text-white">{blogTranslations.p17_4}</strong> <br /> <br />

                    {blogTranslations.p17_5} <br /> <br />
                    {blogTranslations.p17_6} <br /> <br />

                    <strong className="text-white">{blogTranslations.p17_7}</strong> <br /> <br />

                    {blogTranslations.p17_8} <br /> <br />
                    {blogTranslations.p17_9} <br /> <br />

                    <strong className="text-white">{blogTranslations.p17_10}</strong> <br /> <br />

                    {blogTranslations.p17_11} <br /> <br />




                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Fastest_Payouts_Blog_CTA&hcategory=Mar2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="Fastest Payout Prop Firms in 2025:Get Your Trading Profits Within Hours"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}