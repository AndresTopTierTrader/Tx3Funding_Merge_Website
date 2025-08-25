//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import table1EN from './assets/Table 1 - Blog.jpg'
import table1ES from './assets/Table 1 - Blog SPA.jpg'
import table2EN from './assets/Table 2 - Blog.jpg'
import table2ES from './assets/Table 2 - Blog SPA.jpg'
import table3EN from './assets/Table 3 - Blog.jpg'
import table3ES from './assets/Table 3 - Blog SPA.jpg'
import table4EN from './assets/Table 4 - Blog.jpg'
import table4ES from './assets/Table 4 - Blog SPA.jpg'
import table5EN from './assets/Table 5 - Blog.jpg'
import table5ES from './assets/Table 5 - Blog SPA.jpg'

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

const i18nNameSpaces = ["common", "blog_landing", "article_e8_vs_toptier"];

//Params to bring the info from the db
const blogParam = "e8-vs-toptier"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "E8 Markets vs. TopTier Trader: Which Prop Firm is Right for You?",
    description:
        "Compare E8 Markets and TopTier Trader's funding programs, profit splits, challenge fees, and payout policies to find the ideal proprietary trading firm for your trading style.",
    keywords: "E8 Markets, TopTier Trader, prop trading, forex funded accounts, proprietary trading, trading challenges",
    language: "en",
    subject: "Prop Trading Comparison",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "E8 Markets vs. TopTier Trader: Which Prop Firm Offers Better Value?",
        description:
            "Compare E8 Markets and TopTier Trader's funding programs, profit splits, challenge fees, and payout policies to find the ideal proprietary trading firm for your trading style.",
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
    title: "E8 Markets vs. TopTier Trader: ¿Qué Firma Prop es Adecuada para Ti?",
    description:
        "Compara los programas de financiamiento, las divisiones de ganancias, las tarifas de desafío y las políticas de pago de E8 Markets y TopTier Trader para encontrar la firma de trading propietario ideal para tu estilo de trading.",
    keywords: "E8 Markets, TopTier Trader, prop trading, cuentas fondeadas, trading propietario, desafíos de trading",
    language: "es",
    subject: "Comparación de Prop Trading",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "E8 Markets vs. TopTier Trader: ¿Qué Firma Prop Ofrece Mejor Valor?",
        description:
            "Compara los programas de financiamiento, las divisiones de ganancias, las tarifas de desafío y las políticas de pago de E8 Markets y TopTier Trader para encontrar la firma de trading propietario ideal para tu estilo de trading.",
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
    title: "E8 Markets vs. TopTier Trader : Quelle société de prop trading vous convient le mieux ?",
    description:
        "Comparez les programmes de financement, le partage des bénéfices, les frais de challenge et les politiques de paiement d'E8 Markets et TopTier Trader pour trouver la société de trading propriétaire idéale pour votre style de trading.",
    keywords: "E8 Markets, TopTier Trader, prop trading, comptes financés forex, trading propriétaire, challenges de trading",
    language: "fr",
    subject: "Comparaison du trading propriétaire",
    coverage: "Mondial",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "E8 Markets vs. TopTier Trader : Quelle société de prop trading offre la meilleure valeur ?",
        description:
            "Comparez les programmes de financement, le partage des bénéfices, les frais de challenge et les politiques de paiement d'E8 Markets et TopTier Trader pour trouver la société de trading propriétaire idéale pour votre style de trading.",
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
        h1_title: t('article_e8_vs_toptier:h1_title'),
        CTA: t('article_e8_vs_toptier:CTA'),
        t1: t('article_e8_vs_toptier:t1'),
        t2: t('article_e8_vs_toptier:t2'),
        t3: t('article_e8_vs_toptier:t3'),
        t4: t('article_e8_vs_toptier:t4'),
        t5: t('article_e8_vs_toptier:t5'),
        t6: t('article_e8_vs_toptier:t6'),
        t7: t('article_e8_vs_toptier:t7'),
        t8: t('article_e8_vs_toptier:t8'),
        p1: t('article_e8_vs_toptier:p1'),
        p2_1: t('article_e8_vs_toptier:p2_1'),
        p2_2: t('article_e8_vs_toptier:p2_2'),
        p3_1: t('article_e8_vs_toptier:p3_1'),
        p3_2: t('article_e8_vs_toptier:p3_2'),
        p3_3: t('article_e8_vs_toptier:p3_3'),
        p3_4: t('article_e8_vs_toptier:p3_4'),
        p3_5: t('article_e8_vs_toptier:p3_5'),
        p3_6: t('article_e8_vs_toptier:p3_6'),
        p3_7: t('article_e8_vs_toptier:p3_7'),
        p3_8: t('article_e8_vs_toptier:p3_8'),
        p3_9: t('article_e8_vs_toptier:p3_9'),
        p4_1: t('article_e8_vs_toptier:p4_1'),
        p4_2: t('article_e8_vs_toptier:p4_2'),
        p4_3: t('article_e8_vs_toptier:p4_3'),
        p4_4: t('article_e8_vs_toptier:p4_4'),
        p4_5: t('article_e8_vs_toptier:p4_5'),
        p4_6: t('article_e8_vs_toptier:p4_6'),
        p4_7: t('article_e8_vs_toptier:p4_7'),
        p4_8: t('article_e8_vs_toptier:p4_8'),
        p4_9: t('article_e8_vs_toptier:p4_9'),
        p5: t('article_e8_vs_toptier:p5'),
        p6: t('article_e8_vs_toptier:p6'),
        p7: t('article_e8_vs_toptier:p7'),
        p8_1: t('article_e8_vs_toptier:p8_1'),
        p8_2: t('article_e8_vs_toptier:p8_2'),
        p8_3: t('article_e8_vs_toptier:p8_3'),
        p8_4: t('article_e8_vs_toptier:p8_4'),
        p8_5: t('article_e8_vs_toptier:p8_5'),
        p8_6: t('article_e8_vs_toptier:p8_6'),
        p8_7: t('article_e8_vs_toptier:p8_7'),
        p9_1: t('article_e8_vs_toptier:p9_1'),
        p9_2: t('article_e8_vs_toptier:p9_2'),
        p9_3: t('article_e8_vs_toptier:p9_3'),
        p10_1: t('article_e8_vs_toptier:p10_1'),
        p10_2: t('article_e8_vs_toptier:p10_2'),
        p10_3: t('article_e8_vs_toptier:p10_3'),
        p11_1: t('article_e8_vs_toptier:p11_1'),
        p11_2: t('article_e8_vs_toptier:p11_2'),
        p11_3: t('article_e8_vs_toptier:p11_3'),
        p11_4: t('article_e8_vs_toptier:p11_4'),
        p11_5: t('article_e8_vs_toptier:p11_5'),
        p11_6: t('article_e8_vs_toptier:p11_6'),
        p11_7: t('article_e8_vs_toptier:p11_7'),
        p11_8: t('article_e8_vs_toptier:p11_8'),
        p11_9: t('article_e8_vs_toptier:p11_9'),
        p11_10: t('article_e8_vs_toptier:p11_10'),
        p11_11: t('article_e8_vs_toptier:p11_11'),
        p11_12: t('article_e8_vs_toptier:p11_12'),
        p11_13: t('article_e8_vs_toptier:p11_13'),
        p11_14: t('article_e8_vs_toptier:p11_14'),
        p11_15: t('article_e8_vs_toptier:p11_15'),
        p11_16: t('article_e8_vs_toptier:p11_16'),
        p11_17: t('article_e8_vs_toptier:p11_17'),
        p11_18: t('article_e8_vs_toptier:p11_18'),
        p11_19: t('article_e8_vs_toptier:p11_19'),
        p12_1: t('article_e8_vs_toptier:p12_1'),
        p12_2: t('article_e8_vs_toptier:p12_2'),
        p12_3: t('article_e8_vs_toptier:p12_3'),
        p12_4: t('article_e8_vs_toptier:p12_4'),
        p12_5: t('article_e8_vs_toptier:p12_5'),
        p12_6: t('article_e8_vs_toptier:p12_6'),
        p12_7: t('article_e8_vs_toptier:p12_7'),
        p12_8: t('article_e8_vs_toptier:p12_8'),
        p12_9: t('article_e8_vs_toptier:p12_9'),
        p12_10: t('article_e8_vs_toptier:p12_10'),
        p12_11: t('article_e8_vs_toptier:p12_11'),
        p12_12: t('article_e8_vs_toptier:p12_12'),
        p12_13: t('article_e8_vs_toptier:p12_13'),
    }

    const table1 = mainLang === 'es' ? table1ES : table1EN 
    const table2 = mainLang === 'es' ? table2ES : table2EN 
    const table3 = mainLang === 'es' ? table3ES : table3EN 
    const table4 = mainLang === 'es' ? table4ES : table4EN 
    const table5 = mainLang === 'es' ? table5ES : table5EN 


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
                    {blogTranslations.p2_1} <br /> <br />
                    {blogTranslations.p2_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />

                    {blogTranslations.p3_1} <br /> <br />
                    {blogTranslations.p3_2} <br /> <br />
                    <strong className="text-white">{blogTranslations.p3_3}</strong> <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p3_4}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p3_5}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p3_6}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p3_7}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p3_8}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p3_9}/></li>
                    </ul> <br/>

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />

                    {blogTranslations.p4_1} <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />
                    <strong className="text-white">{blogTranslations.p4_3}</strong> <br /> <br />

                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p4_4}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_5}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_6}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_7}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_8}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p4_9}/></li>
                    </ul> <br/>

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    <strong className="text-white">{blogTranslations.p5}</strong> <br /> <br />
                    {blogTranslations.p6} <br /> <br />
                    <Image src={table1} alt="table" className="w-full"/> <br/>
                    <strong className="text-white">{blogTranslations.p7}</strong> <br /> <br />
                    <Image src={table2} alt="table" className="w-full"/> <br/>

                    {blogTranslations.p8_1} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p8_2}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p8_3}/></li>
                    </ul> <br/>
                    {blogTranslations.p8_4} <br /> <br />
                    <strong className="text-white">{blogTranslations.p8_5}</strong> <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p8_6}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p8_7}/></li>
                    </ul> <br/>

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    <Image src={table3} alt="table" className="w-full"/> <br/>
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p9_1}</li>
                        <li>{blogTranslations.p9_2}</li>
                        <li>{blogTranslations.p9_3}</li>
                    </ul> <br/>

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    <Image src={table4} alt="table" className="w-full"/> <br/>
                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    <Image src={table5} alt="table" className="w-full"/> <br/>
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p10_1}</li>
                        <li>{blogTranslations.p10_2}</li>
                        <li>{blogTranslations.p10_3}</li>
                    </ul> <br/>

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    <strong className="text-white">{blogTranslations.p11_1}</strong> <br /> <br />
                    {blogTranslations.p11_2} <br /> <br />
                    {blogTranslations.p11_3} <br /> <br />
                    <strong className="text-white">{blogTranslations.p11_4}</strong> <br /> <br />
                    {blogTranslations.p11_5} <br /> <br />
                    <strong className="text-white">{blogTranslations.p11_6}</strong> <br /> <br />
                    {blogTranslations.p11_7} <br /> <br />
                    <strong className="text-white">{blogTranslations.p11_8}</strong> <br /> <br />
                    {blogTranslations.p11_9} <br /> <br />
                    <strong className="text-white">{blogTranslations.p11_10}</strong> <br /> <br />
                    {blogTranslations.p11_11} <br /> <br />
                    <strong className="text-white">{blogTranslations.p11_12}</strong> <br /> <br />
                    {blogTranslations.p11_13} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p11_14}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p11_15}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p11_16}/></li>
                    </ul> <br/>
                    {blogTranslations.p11_17} <br /> <br />
                    <strong className="text-white">{blogTranslations.p11_18}</strong> <br /> <br />
                    {blogTranslations.p11_19} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />
                    <strong className="text-white">{blogTranslations.p12_1}</strong> <br /> <br />
                    {blogTranslations.p12_2} <br /> <br />
                    <strong className="text-white">{blogTranslations.p12_3}</strong> <br /> <br />
                    {blogTranslations.p12_4} <br /> <br />
                    <strong className="text-white">{blogTranslations.p12_5}</strong> <br /> <br />
                    {blogTranslations.p12_6} <br /> <br />
                    {blogTranslations.p12_7} <br /> <br />
                    <ol className="flex flex-col gap-6 pl-6 list-decimal">
                        <li><BoldBeforeComa inputText={blogTranslations.p12_8}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p12_9}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p12_10}/></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p12_11}/></li>
                    </ol> <br/>
                    {blogTranslations.p12_12} <br /> <br />
                    {blogTranslations.p12_13} <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=E8_Vs_Toptier_Blog_CTA&hcategory=Mar2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="[E8 Markets vs. TopTier Trader: Which Prop Firm is Right for You?"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}