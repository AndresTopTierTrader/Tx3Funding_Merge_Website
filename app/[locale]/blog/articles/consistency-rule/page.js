//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import Image from "next/image";
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
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

const i18nNameSpaces = ["common", "blog_landing", "article_consistency_rule"];

//Params to bring the info from the db
const blogParam = "consistency-rule"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "What is the Consistency Rule in Trading?",
    description: "Discover the Consistency Rule in trading and learn how it promotes risk management, steady growth, and discipline for sustainable profits. A guide for traders to achieve long-term success in funded accounts.",
    keywords: "consistency rule in trading, trading discipline, risk management, funded accounts, trading strategies, sustainable profits, prop trading challenges, TopTier Trader",
    language: "en",
    subject: "Mastering the Consistency Rule: A Guide to Trading Success",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "What is the Consistency Rule in Trading?",
        description: "Discover the Consistency Rule in trading and learn how it promotes risk management, steady growth, and discipline for sustainable profits. A guide for traders to achieve long-term success in funded accounts.",
        image: "path/to/consistency-rule-graphic.jpg",
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
    title: "¿Qué es la regla de consistencia en el trading?",
    description: "Descubre la regla de consistencia en el trading y cómo promueve la gestión de riesgos, el crecimiento constante y la disciplina para obtener ganancias sostenibles. Una guía para traders en cuentas fondeadas.",
    keywords: "regla de consistencia en trading, disciplina en trading, gestión de riesgos, cuentas fondeadas, estrategias de trading, ganancias sostenibles, desafíos de trading fondeado, TopTier Trader",
    language: "es",
    subject: "Dominando la regla de consistencia: Una guía para el éxito en el trading",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "¿Qué es la regla de consistencia en el trading?",
        description: "Descubre la regla de consistencia en el trading y cómo promueve la gestión de riesgos, el crecimiento constante y la disciplina para obtener ganancias sostenibles. Una guía para traders en cuentas fondeadas.",
        image: "path/to/consistency-rule-graphic.jpg",
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
    title: "Qu'est-ce que la règle de cohérence dans le trading?",
    description: "Découvrez la règle de cohérence dans le trading et comment elle favorise la gestion des risques, une croissance stable et la discipline pour des profits durables. Un guide pour les traders en comptes financés.",
    keywords: "règle de cohérence dans le trading, discipline de trading, gestion des risques, comptes financés, stratégies de trading, profits durables, défis de trading financé, TopTier Trader",
    language: "fr",
    subject: "Maîtriser la règle de cohérence : Un guide pour réussir dans le trading",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Qu'est-ce que la règle de cohérence dans le trading?",
        description: "Découvrez la règle de cohérence dans le trading et comment elle favorise la gestion des risques, une croissance stable et la discipline pour des profits durables. Un guide pour les traders en comptes financés.",
        image: "path/to/consistency-rule-graphic.jpg",
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
        h1_title: t('article_consistency_rule:h1_title'),
        CTA: t('article_consistency_rule:CTA'),
        hyperLink_1: t('article_consistency_rule:hyperLink_1'),
        hyperLink_2: t('article_consistency_rule:hyperLink_2'),
        hyperLink_3: t('article_consistency_rule:hyperLink_3'),
        hyperLink_4: t('article_consistency_rule:hyperLink_4'),
        hyperLink_5: t('article_consistency_rule:hyperLink_5'),
        t1: t('article_consistency_rule:t1'),
        t2: t('article_consistency_rule:t2'),
        t3: t('article_consistency_rule:t3'),
        t4: t('article_consistency_rule:t4'),
        t5: t('article_consistency_rule:t5'),
        t6: t('article_consistency_rule:t6'),
        t7: t('article_consistency_rule:t7'),
        t8: t('article_consistency_rule:t8'),
        t9: t('article_consistency_rule:t9'),
        t10: t('article_consistency_rule:t10'),
        t11: t('article_consistency_rule:t11'),
        t12: t('article_consistency_rule:t12'),
        p1: t('article_consistency_rule:p1'),
        p2: t('article_consistency_rule:p2'),
        p3_1: t('article_consistency_rule:p3_1'),
        p3_2: t('article_consistency_rule:p3_2'),
        p3_3: t('article_consistency_rule:p3_3'),
        p3_4: t('article_consistency_rule:p3_4'),
        p3_5: t('article_consistency_rule:p3_5'),
        p3_6: t('article_consistency_rule:p3_6'),
        p4_1: t('article_consistency_rule:p4_1'),
        p4_2: t('article_consistency_rule:p4_2'),
        p4_3: t('article_consistency_rule:p4_3'),
        p4_4: t('article_consistency_rule:p4_4'),
        p4_5: t('article_consistency_rule:p4_5'),
        p5_1: t('article_consistency_rule:p5_1'),
        p5_2: t('article_consistency_rule:p5_2'),
        p5_3: t('article_consistency_rule:p5_3'),
        p5_4: t('article_consistency_rule:p5_4'),
        p5_5: t('article_consistency_rule:p5_5'),
        p5_6: t('article_consistency_rule:p5_6'),
        p6_1: t('article_consistency_rule:p6_1'),
        p6_2: t('article_consistency_rule:p6_2'),
        p6_3: t('article_consistency_rule:p6_3'),
        p6_4: t('article_consistency_rule:p6_4'),
        p6_5: t('article_consistency_rule:p6_5'),
        p7_1: t('article_consistency_rule:p7_1'),
        p7_2: t('article_consistency_rule:p7_2'),
        p8_1: t('article_consistency_rule:p8_1'),
        p8_2: t('article_consistency_rule:p8_2'),
        p8_3: t('article_consistency_rule:p8_3'),
        p9_1: t('article_consistency_rule:p9_1'),
        p9_2: t('article_consistency_rule:p9_2'),
        p10_1: t('article_consistency_rule:p10_1'),
        p10_2: t('article_consistency_rule:p10_2'),
        p10_3: t('article_consistency_rule:p10_3'),
        p11_1: t('article_consistency_rule:p11_1'),
        p11_2: t('article_consistency_rule:p11_2'),
        p11_3: t('article_consistency_rule:p11_3'),
        p11_4: t('article_consistency_rule:p11_4'),
        p11_5: t('article_consistency_rule:p11_5'),
        p11_6: t('article_consistency_rule:p11_6'),
        p11_7: t('article_consistency_rule:p11_7'),
        p11_8: t('article_consistency_rule:p11_8'),
        p12_1: t('article_consistency_rule:p12_1'),
        p12_2: t('article_consistency_rule:p12_2'),
        p12_3: t('article_consistency_rule:p12_3'),
        p12_4: t('article_consistency_rule:p12_4'),
        p12_5: t('article_consistency_rule:p12_5'),
        p13: t('article_consistency_rule:p13'),
    }

    const hyperLink1 = [
        { phrase: blogTranslations.hyperLink_1, link: `https://help.toptiertrader.com/${locale}/articles/6358367-ea-trading` }
    ]

    const hyperLink2 = [
        { phrase: blogTranslations.hyperLink_2, link: `${ENVIRONMENT_URL}/${locale}` },
        { phrase: blogTranslations.hyperLink_3, link: `${ENVIRONMENT_URL}/${locale}` },
    ]

    const hyperLink3 = [
        { phrase: blogTranslations.hyperLink_4, link: `https://help.toptiertrader.com/${locale}/articles/5636781-scaling-plan` },
        { phrase: blogTranslations.hyperLink_5, link: `${ENVIRONMENT_URL}/${locale}/products/challenges` },
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


                    <HyperLink text={blogTranslations.p1} links={hyperLink1} /> <br />
                    <HyperLink text={blogTranslations.p2} links={hyperLink2} /> <br />

                    <Image src={image1} alt="stock image" className="w-full" /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />

                    <ol className="flex flex-col gap-6 pl-8 list-decimal">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_1} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_4} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_5} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_6} />
                        </li>
                    </ol> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    {blogTranslations.p4_1} <br /> <br />

                    <ol className="flex flex-col gap-6 pl-8 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_4} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_5} />
                        </li>
                    </ol> <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    {blogTranslations.p5_1} <br /> <br />

                    <ol className="flex flex-col gap-6 pl-8 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_4} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_5} />
                        </li>
                    </ol> <br />
                    {blogTranslations.p5_6} <br /> <br />

                    <Image src={image2} alt="stock image" className="w-full" /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    {blogTranslations.p6_1} <br /> <br />

                    <ol className="flex flex-col gap-6 pl-8 list-disc">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_2} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_3} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_4} />
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p6_5} />
                        </li>
                    </ol> <br />


                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    {blogTranslations.p8_1} <br /> <br />
                    {blogTranslations.p8_2} <br /> <br />
                    {blogTranslations.p8_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    {blogTranslations.p9_1} <br /> <br />
                    {blogTranslations.p9_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />
                    {blogTranslations.p10_1} <br /> <br />
                    {blogTranslations.p10_2} <br /> <br />
                    {blogTranslations.p10_3} <br /> <br />

                    <Image src={image3} alt="stock image" className="w-full" /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />
                    {blogTranslations.p11_1} <br /> <br />
                    {blogTranslations.p11_2} <br /> <br />
                    {blogTranslations.p11_3} <br /> <br />
                    {blogTranslations.p11_4} <br /> <br />
                    <strong className="text-white">{blogTranslations.p11_5}</strong> <br /> <br />
                    <ol className="flex flex-col gap-6 pl-8 list-disc">
                        <li>{blogTranslations.p11_6}</li>
                        <li>{blogTranslations.p11_7}</li>
                    </ol> <br />
                    {blogTranslations.p11_8} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t10}</h3><br />
                    {blogTranslations.p12_1} <br /> <br />
                    {blogTranslations.p12_2} <br /> <br />
                    <ol className="flex flex-col gap-6 pl-8 list-disc">
                        <li>{blogTranslations.p12_3}</li>
                        <li>{blogTranslations.p12_4}</li>
                        <li>{blogTranslations.p12_5}</li>
                    </ol> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t11}</h3><br />

                    <HyperLink text={blogTranslations.p13} links={hyperLink3} /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Consistency_Rule_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="Consistency Rule"
                        translation={blogTranslations.CTA} />


                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}