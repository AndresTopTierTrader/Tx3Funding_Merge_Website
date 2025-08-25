//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import table1EN from './assets/Comparison Table_ Key Differences in Challenge Structure - Blog.jpg'
import table1ES from './assets/Comparison Table_ Key Differences in Challenge Structure - Blog SPA.jpg'
import table2EN from './assets/Comparison Table_ Key Differences in Trading Rules - Blog.jpg'
import table2ES from './assets/Comparison Table_ Key Differences in Trading Rules - Blog SPA.jpg'
import image1EN from './assets/FTMO Challenge - Blog 2.jpg'
import image1ES from './assets/FTMO Challenge - Blog 2 SPA.jpg'
import { bgImageStyleBlog } from "@/constants/styles"

import Content from "../../../../../components/blog/Content";
import { User } from "@/components/blog/User";
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

const i18nNameSpaces = ["common", "blog_landing", "article_ftmo_challenge"];

//Params to bring the info from the db
const blogParam = "ftmo-challenge"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "FTMO Challenge: How It Compares to TopTier Trader’s Funding Program",
    description:
        "Discover how the FTMO Challenge measures up against TopTier Trader. Compare rules, fees, and payouts to find the ideal prop firm for your trading style.",
    keywords: "FTMO Challenge, TopTier Trader, prop trading, forex funded accounts, proprietary trading",
    language: "en",
    subject: "Prop Trading Comparison",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "FTMO Challenge vs. TopTier Trader: Which Prop Firm Suits You Best?",
        description:
            "Discover how the FTMO Challenge measures up against TopTier Trader. Compare rules, fees, and payouts to find the ideal prop firm for your trading style.",
        image: "", // Add link to an appropriate image
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
    title: "Desafío de FTMO: Cómo se Compara con el Programa de Fondos de TopTier Trader",
    description:
        "Descubre cómo el Desafío de FTMO se enfrenta al enfoque flexible de TopTier Trader. Compara reglas, tarifas y pagos para encontrar la mejor opción para tu estilo de trading.",
    keywords: "Desafío de FTMO, TopTier Trader, prop trading, cuentas fondeadas, trading propietario",
    language: "es",
    subject: "Comparación de Prop Trading",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Desafío de FTMO: Cómo se Compara con el Programa de Fondos de TopTier Trader",
        description:
            "Descubre cómo el Desafío de FTMO se enfrenta al enfoque flexible de TopTier Trader. Compara reglas, tarifas y pagos para encontrar la mejor opción para tu estilo de trading.",
        image: "", // Agrega el enlace a una imagen adecuada
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

const metadata_fr = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "Défi FTMO : Comparaison avec le programme de financement de TopTier Trader",
    description:
        "Découvrez comment le défi FTMO se compare à TopTier Trader. Comparez les règles, les frais et les paiements pour trouver la firme de trading propriétaire idéale pour votre style de trading.",
    keywords: "Défi FTMO, TopTier Trader, trading propriétaire, comptes financés forex, trading institutionnel",
    language: "fr",
    subject: "Comparaison du trading propriétaire",
    coverage: "Mondial",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Défi FTMO vs. TopTier Trader : Quelle firme de trading propriétaire vous convient le mieux ?",
        description:
            "Découvrez comment le défi FTMO se compare à TopTier Trader. Comparez les règles, les frais et les paiements pour trouver la firme de trading propriétaire idéale pour votre style de trading.",
        image: "", // Ajouter un lien vers une image appropriée
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
        h1_title: t('article_ftmo_challenge:h1_title'),
        CTA: t('article_ftmo_challenge:CTA'),
        t1: t('article_ftmo_challenge:t1'),
        t2: t('article_ftmo_challenge:t2'),
        t3: t('article_ftmo_challenge:t3'),
        t4: t('article_ftmo_challenge:t4'),
        t5: t('article_ftmo_challenge:t5'),
        t6: t('article_ftmo_challenge:t6'),
        t7: t('article_ftmo_challenge:t7'),
        t8: t('article_ftmo_challenge:t8'),
        t9: t('article_ftmo_challenge:t9'),
        t10: t('article_ftmo_challenge:t10'),
        p1_1: t('article_ftmo_challenge:p1_1'),
        p1_2: t('article_ftmo_challenge:p1_2'),
        p2: t('article_ftmo_challenge:p2'),
        p3_1: t('article_ftmo_challenge:p3_1'),
        p3_2: t('article_ftmo_challenge:p3_2'),
        p3_3: t('article_ftmo_challenge:p3_3'),
        p3_4: t('article_ftmo_challenge:p3_4'),
        p3_4_1: t('article_ftmo_challenge:p3_4_1'),
        p3_4_2: t('article_ftmo_challenge:p3_4_2'),
        p3_4_3: t('article_ftmo_challenge:p3_4_3'),
        p3_5: t('article_ftmo_challenge:p3_5'),
        p3_6: t('article_ftmo_challenge:p3_6'),
        p3_7: t('article_ftmo_challenge:p3_7'),
        p3_8: t('article_ftmo_challenge:p3_8'),
        p3_9: t('article_ftmo_challenge:p3_9'),
        p3_9_1: t('article_ftmo_challenge:p3_9_1'),
        p3_9_2: t('article_ftmo_challenge:p3_9_2'),
        p3_9_3: t('article_ftmo_challenge:p3_9_3'),
        p3_10: t('article_ftmo_challenge:p3_10'),
        p4_1: t('article_ftmo_challenge:p4_1'),
        p4_2: t('article_ftmo_challenge:p4_2'),
        p4_3: t('article_ftmo_challenge:p4_3'),
        p4_4_1: t('article_ftmo_challenge:p4_4_1'),
        p4_4_2: t('article_ftmo_challenge:p4_4_2'),
        p4_4_3: t('article_ftmo_challenge:p4_4_3'),
        p4_5: t('article_ftmo_challenge:p4_5'),
        p4_6_1: t('article_ftmo_challenge:p4_6_1'),
        p4_6_2: t('article_ftmo_challenge:p4_6_2'),
        p4_6_3: t('article_ftmo_challenge:p4_6_3'),
        p4_7: t('article_ftmo_challenge:p4_7'),
        p4_8: t('article_ftmo_challenge:p4_8'),
        p4_9: t('article_ftmo_challenge:p4_9'),
        p4_9_1: t('article_ftmo_challenge:p4_9_1'),
        p4_9_2: t('article_ftmo_challenge:p4_9_2'),
        p4_10: t('article_ftmo_challenge:p4_10'),
        p5_1: t('article_ftmo_challenge:p5_1'),
        p5_2: t('article_ftmo_challenge:p5_2'),
        p5_3: t('article_ftmo_challenge:p5_3'),
        p5_4: t('article_ftmo_challenge:p5_4'),
        p5_5: t('article_ftmo_challenge:p5_5'),
        p5_6: t('article_ftmo_challenge:p5_6'),
        p5_7: t('article_ftmo_challenge:p5_7'),
        p5_8: t('article_ftmo_challenge:p5_8'),
        p5_9: t('article_ftmo_challenge:p5_9'),
        p5_10: t('article_ftmo_challenge:p5_10'),
        p5_11: t('article_ftmo_challenge:p5_11'),
        p5_12: t('article_ftmo_challenge:p5_12'),
        p5_13: t('article_ftmo_challenge:p5_13'),
        p5_14: t('article_ftmo_challenge:p5_14'),
        p6_1: t('article_ftmo_challenge:p6_1'),
        p6_2: t('article_ftmo_challenge:p6_2'),
        p6_3: t('article_ftmo_challenge:p6_3'),
        p6_4: t('article_ftmo_challenge:p6_4'),
        p6_5: t('article_ftmo_challenge:p6_5'),
        p6_6: t('article_ftmo_challenge:p6_6'),
        p6_7: t('article_ftmo_challenge:p6_7'),
        p6_8: t('article_ftmo_challenge:p6_8'),
        p6_9: t('article_ftmo_challenge:p6_9'),
        p7_1: t('article_ftmo_challenge:p7_1'),
        p7_2: t('article_ftmo_challenge:p7_2'),
        p7_3: t('article_ftmo_challenge:p7_3'),
        p7_4: t('article_ftmo_challenge:p7_4'),
        p7_5: t('article_ftmo_challenge:p7_5'),
        p7_6: t('article_ftmo_challenge:p7_6'),
        p7_7: t('article_ftmo_challenge:p7_7'),
        p7_8: t('article_ftmo_challenge:p7_8'),
        p8_1: t('article_ftmo_challenge:p8_1'),
        p8_2: t('article_ftmo_challenge:p8_2'),
        p8_3: t('article_ftmo_challenge:p8_3'),
        p8_4: t('article_ftmo_challenge:p8_4'),
        p8_5: t('article_ftmo_challenge:p8_5'),
        p8_6: t('article_ftmo_challenge:p8_6'),
        p8_7: t('article_ftmo_challenge:p8_7'),
        p8_8: t('article_ftmo_challenge:p8_8'),
        p9_1: t('article_ftmo_challenge:p9_1'),
        p9_2: t('article_ftmo_challenge:p9_2'),
        p9_3: t('article_ftmo_challenge:p9_3'),
        p9_4: t('article_ftmo_challenge:p9_4'),
        p9_5: t('article_ftmo_challenge:p9_5'),
        p9_6: t('article_ftmo_challenge:p9_6'),
        p9_7: t('article_ftmo_challenge:p9_7'),
        p9_8: t('article_ftmo_challenge:p9_8'),
        p10_1: t('article_ftmo_challenge:p10_1'),
        p10_2: t('article_ftmo_challenge:p10_2'),
        p10_3: t('article_ftmo_challenge:p10_3'),
        t1_r1_1: t('article_ftmo_challenge:t1_r1_1'),
        t1_r1_2: t('article_ftmo_challenge:t1_r1_2'),
        t1_r1_3: t('article_ftmo_challenge:t1_r1_3'),
        t1_r2_1: t('article_ftmo_challenge:t1_r2_1'),
        t1_r2_2: t('article_ftmo_challenge:t1_r2_2'),
        t1_r2_3: t('article_ftmo_challenge:t1_r2_3'),
        t1_r3_1: t('article_ftmo_challenge:t1_r3_1'),
        t1_r3_2: t('article_ftmo_challenge:t1_r3_2'),
        t1_r3_3: t('article_ftmo_challenge:t1_r3_3'),
        t1_r4_1: t('article_ftmo_challenge:t1_r4_1'),
        t1_r4_2: t('article_ftmo_challenge:t1_r4_2'),
        t1_r4_3: t('article_ftmo_challenge:t1_r4_3'),
        t1_r5_1: t('article_ftmo_challenge:t1_r5_1'),
        t1_r5_2: t('article_ftmo_challenge:t1_r5_2'),
        t1_r5_3: t('article_ftmo_challenge:t1_r5_3'),
        t1_r6_1: t('article_ftmo_challenge:t1_r6_1'),
        t1_r6_2: t('article_ftmo_challenge:t1_r6_2'),
        t1_r6_3: t('article_ftmo_challenge:t1_r6_3'),
        t1_r7_1: t('article_ftmo_challenge:t1_r7_1'),
        t1_r7_2: t('article_ftmo_challenge:t1_r7_2'),
        t1_r7_3: t('article_ftmo_challenge:t1_r7_3'),
        t1_r8_1: t('article_ftmo_challenge:t1_r8_1'),
        t1_r8_2: t('article_ftmo_challenge:t1_r8_2'),
        t1_r8_3: t('article_ftmo_challenge:t1_r8_3'),
        t2_r1_1: t('article_ftmo_challenge:t2_r1_1'),
        t2_r1_2: t('article_ftmo_challenge:t2_r1_2'),
        t2_r1_3: t('article_ftmo_challenge:t2_r1_3'),
        t2_r2_1: t('article_ftmo_challenge:t2_r2_1'),
        t2_r2_2: t('article_ftmo_challenge:t2_r2_2'),
        t2_r2_3: t('article_ftmo_challenge:t2_r2_3'),
        t2_r3_1: t('article_ftmo_challenge:t2_r3_1'),
        t2_r3_2: t('article_ftmo_challenge:t2_r3_2'),
        t2_r3_3: t('article_ftmo_challenge:t2_r3_3'),
        t2_r4_1: t('article_ftmo_challenge:t2_r4_1'),
        t2_r4_2: t('article_ftmo_challenge:t2_r4_2'),
        t2_r4_3: t('article_ftmo_challenge:t2_r4_3'),
        t2_r5_1: t('article_ftmo_challenge:t2_r5_1'),
        t2_r5_2: t('article_ftmo_challenge:t2_r5_2'),
        t2_r5_3: t('article_ftmo_challenge:t2_r5_3'),
        t2_r6_1: t('article_ftmo_challenge:t2_r6_1'),
        t2_r6_2: t('article_ftmo_challenge:t2_r6_2'),
        t2_r6_3: t('article_ftmo_challenge:t2_r6_3'),
        t2_r7_1: t('article_ftmo_challenge:t2_r7_1'),
        t2_r7_2: t('article_ftmo_challenge:t2_r7_2'),
        t2_r7_3: t('article_ftmo_challenge:t2_r7_3'),
    }

    const table1 = mainLang === 'es' ? table1ES : table1EN
    const table2 = mainLang === 'es' ? table2ES : table2EN
    const image1 = mainLang === 'es' ? image1ES : image1EN


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

                    <Image src={image1} alt="table" className="w-full" /> <br />

                    {blogTranslations.p1_1} <br /> <br />
                    {blogTranslations.p1_2} <br /> <br />
                    {blogTranslations.p2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />

                    <strong className="text-white">{blogTranslations.p3_1}</strong> <br /> <br />
                    <ul className="flex flex-col gap-4 pl-6 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_3} />
                        </li>
                        <li className="flex flex-col gap-2">
                            <strong>{blogTranslations.p3_4}</strong>
                            <ul className="flex flex-col gap-2 list-decimal pl-6">
                                <li>{blogTranslations.p3_4_1}</li>
                                <li>{blogTranslations.p3_4_2}</li>
                                <li>{blogTranslations.p3_4_3}</li>
                            </ul>
                        </li>
                    </ul> <br />
                    {blogTranslations.p3_5} <br /> <br />
                    <strong className="text-white">{blogTranslations.p3_6}</strong> <br /> <br />
                    <ul className="flex flex-col gap-4 pl-6 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_7} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_8} />
                        </li>
                        <li className="flex flex-col gap-2">
                            <strong>{blogTranslations.p3_9}</strong>
                            <ul className="flex flex-col gap-2 list-decimal pl-6">
                                <li>{blogTranslations.p3_9_1}</li>
                                <li>{blogTranslations.p3_9_2}</li>
                                <li>{blogTranslations.p3_9_3}</li>
                            </ul>
                        </li>
                    </ul> <br />
                    {blogTranslations.p3_10} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    <strong className="text-white">{blogTranslations.p4_1}</strong> <br /> <br />
                    <ul className="list-disc pl-6">
                        <li>
                            {blogTranslations.p4_2}
                            <ol className="flex flex-col gap-8 list-decimal pl-8 mt-2">
                                <li>
                                    <strong>{blogTranslations.p4_3}</strong>
                                    <ul className="flex flex-col list-disc pl-8">
                                        <li>{blogTranslations.p4_4_1}</li>
                                        <li>{blogTranslations.p4_4_2}</li>
                                        <li>{blogTranslations.p4_4_3}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{blogTranslations.p4_5}</strong>
                                    <ul className="flex flex-col list-disc pl-8">
                                        <li>{blogTranslations.p4_6_1}</li>
                                        <li>{blogTranslations.p4_6_2}</li>
                                        <li>{blogTranslations.p4_6_3}</li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                    </ul> <br />
                    {blogTranslations.p4_7} <br /> <br />

                    <strong className="text-white">{blogTranslations.p4_8}</strong> <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>
                            {blogTranslations.p4_9}
                            <ol className="mt-4 flex flex-col gap-4 list-decimal pl-8">
                                <li><BoldBeforeComa inputText={blogTranslations.p4_9_1} /></li>
                                <li><BoldBeforeComa inputText={blogTranslations.p4_9_2} /></li>
                            </ol>
                        </li>
                    </ul> <br />
                    {blogTranslations.p4_10} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />

                    {/* <table className="w-full border-collapse mx-auto">
                        <tbody>
                            <tr className="font-bold">
                                <td className="px-5 py-3 border border-[#717892] text-center text-white">{blogTranslations.t1_r1_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center text-white">{blogTranslations.t1_r1_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center text-white">{blogTranslations.t1_r1_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t1_r2_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r2_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r2_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t1_r3_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r3_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r3_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t1_r4_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r4_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r4_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t1_r5_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r5_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r5_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t1_r6_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r6_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r6_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t1_r7_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r7_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r7_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t1_r8_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r8_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t1_r8_3}</td>
                            </tr>
                        </tbody>
                    </table> <br /> <br /> */}
                    <Image src={table1} alt="table" className="w-full" /> <br />


                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    <strong className="text-white">{blogTranslations.p5_1}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-4">
                        <li><BoldBeforeComa inputText={blogTranslations.p5_2} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_3} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_4} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_5} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_6} /></li>
                    </ul> <br />
                    {blogTranslations.p5_7} <br /> <br />

                    <strong className="text-white">{blogTranslations.p5_8}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-4">
                        <li><BoldBeforeComa inputText={blogTranslations.p5_9} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_10} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_11} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_12} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_13} /></li>
                    </ul> <br />
                    {blogTranslations.p5_14} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />

                    {/* <table className="w-full border-collapse mx-auto">
                        <tbody>
                            <tr className="font-bold">
                                <td className="px-5 py-3 border border-[#717892] text-center text-white">{blogTranslations.t2_r1_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center text-white">{blogTranslations.t2_r1_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center text-white">{blogTranslations.t2_r1_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t2_r2_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t2_r2_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t2_r2_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t2_r3_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t2_r3_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t2_r3_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t2_r4_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t2_r4_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t2_r4_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t2_r5_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t2_r5_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t2_r5_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t2_r6_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t2_r6_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t2_r6_3}</td>
                            </tr>
                            <tr>
                                <td className="px-5 py-3 border border-[#717892] text-center font-medium">{blogTranslations.t2_r7_1}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t2_r7_2}</td>
                                <td className="px-5 py-3 border border-[#717892] text-center">{blogTranslations.t2_r7_3}</td>
                            </tr>
                        </tbody>
                    </table> <br /> <br /> */}
                    <Image src={table2} alt="table" className="w-full" /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    <strong className="text-white">{blogTranslations.p6_1}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-4">
                        <li><BoldBeforeComa inputText={blogTranslations.p6_2} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p6_3} /></li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.p6_4}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-4">
                        <li><BoldBeforeComa inputText={blogTranslations.p6_5} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p6_6} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p6_7} /></li>
                    </ul> <br />
                    {blogTranslations.p6_8} <br /> <br />
                    {blogTranslations.p6_9} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    <strong className="text-white">{blogTranslations.p7_1}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-4">
                        <li><BoldBeforeComa inputText={blogTranslations.p7_2} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p7_3} /></li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.p7_4}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-4">
                        <li><BoldBeforeComa inputText={blogTranslations.p7_5} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p7_6} /></li>
                    </ul> <br />
                    {blogTranslations.p7_8} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />
                    <strong className="text-white">{blogTranslations.p8_1}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-4">
                        <li><BoldBeforeComa inputText={blogTranslations.p8_2} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p8_3} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p8_4} /></li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.p8_5}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc pl-6 gap-4">
                        <li><BoldBeforeComa inputText={blogTranslations.p8_6} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p8_7} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p8_8} /></li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />
                    <strong className="text-white">{blogTranslations.p9_1}</strong> <br /> <br />
                    <ul className="flex flex-col list-decimal pl-6 gap-4">
                        <li>{blogTranslations.p9_2}</li>
                        <li>{blogTranslations.p9_3}</li>
                        <li>{blogTranslations.p9_4}</li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.p9_5}</strong> <br /> <br />
                    <ul className="flex flex-col list-decimal pl-6 gap-4">
                        <li>{blogTranslations.p9_6}</li>
                        <li>{blogTranslations.p9_7}</li>
                        <li>{blogTranslations.p9_8}</li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t10}</h3><br />
                    {blogTranslations.p10_1} <br /> <br />
                    {blogTranslations.p10_2} <br /> <br />
                    {blogTranslations.p10_3} <br /> <br />


                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=FTMO_Challenge_Blog_CTA&hcategory=Feb2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="FTMO Challenge"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}