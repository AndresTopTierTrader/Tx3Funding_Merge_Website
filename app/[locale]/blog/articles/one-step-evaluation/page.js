//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import image from './assets/One Step Evaluation Prop Firm - Blog 3.jpg'
import headingEN from './assets/One Step Evaluation Prop Firm - Blog 4.jpg'
import headingES from './assets/One Step Evaluation Prop Firm - Blog 4 SPA.jpg'
import tableEN from './assets/One Step Evaluation Prop Firm - Blog 2.jpg'
import tableES from './assets/One Step Evaluation Prop Firm - Blog 2 SPA.jpg'
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

const i18nNameSpaces = ["common", "blog_landing", "article_one_step_evaluation"];

//Params to bring the info from the db
const blogParam = "one-step-evaluation"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "One Step Evaluation Prop Firm: The Best for 2025",
    description:
        "Discover why TopTier Trader's One Step Evaluation is the best choice for traders in 2025. With clear rules, high flexibility, and up to 90% profit payouts, this program offers a fast track to funded accounts.",
    keywords: "One Step Evaluation, prop firm, TopTier Trader, funded trading, one-step evaluation, best prop firm 2025, leveraged trading, 90% payout",
    language: "en",
    subject: "Prop Trading Evaluation",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "One Step Evaluation Prop Firm: The Best Choice for 2025",
        description:
            "Discover why TopTier Trader's One Step Evaluation is the best choice for traders in 2025. With clear rules, high flexibility, and up to 90% profit payouts, this program offers a fast track to funded accounts.",
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
    title: "Evaluación de Una Fase para Empresas de Fondeo: La Mejor para 2025",
    description:
        "Descubre por qué la Evaluación de una Fase de TopTier Trader es la mejor opción para traders en 2025. Con reglas claras, alta flexibilidad y pagos de hasta el 90% de las ganancias, este programa ofrece una vía rápida a cuentas fondeadas.",
    keywords: "Evaluación en un solo paso, prop firm, TopTier Trader, trading financiado, mejor prop firm 2025, trading con apalancamiento, pago del 90%",
    language: "es",
    subject: "Evaluación de Prop Trading",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Evaluación en un Solo Paso: La Mejor Prop Firm para 2025",
        description:
            "Descubre por qué la Evaluación en un Solo Paso de TopTier Trader es la mejor opción para traders en 2025. Con reglas claras, alta flexibilidad y pagos de hasta el 90% de las ganancias, este programa ofrece una vía rápida a cuentas fondeadas.",
        image: "", // Agrega el enlace a una imagen adecuada
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
    title: "Évaluation en Une Étape : La Meilleure Prop Firm pour 2025",
    description:
        "Découvrez pourquoi l'évaluation en une étape de TopTier Trader est le meilleur choix pour les traders en 2025. Avec des règles claires, une flexibilité élevée et des paiements allant jusqu'à 90% des bénéfices, ce programme offre une voie rapide vers des comptes financés.",
    keywords: "Évaluation en une étape, prop firm, TopTier Trader, trading financé, meilleure prop firm 2025, trading à effet de levier, paiement 90%",
    language: "fr",
    subject: "Évaluation du Prop Trading",
    coverage: "Mondial",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Évaluation en Une Étape : La Meilleure Prop Firm pour 2025",
        description:
            "Découvrez pourquoi l'évaluation en une étape de TopTier Trader est le meilleur choix pour les traders en 2025. Avec des règles claires, une flexibilité élevée et des paiements allant jusqu'à 90% des bénéfices, ce programme offre une voie rapide vers des comptes financés.",
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
        h1_title: t('article_one_step_evaluation:h1_title'),
        CTA: t('article_one_step_evaluation:CTA'),
        t1: t('article_one_step_evaluation:t1'),
        t2: t('article_one_step_evaluation:t2'),
        t3: t('article_one_step_evaluation:t3'),
        t4: t('article_one_step_evaluation:t4'),
        t5: t('article_one_step_evaluation:t5'),
        t6: t('article_one_step_evaluation:t6'),
        t7: t('article_one_step_evaluation:t7'),
        t8: t('article_one_step_evaluation:t8'),
        t9: t('article_one_step_evaluation:t9'),
        p1_1: t('article_one_step_evaluation:p1_1'),
        p1_2: t('article_one_step_evaluation:p1_2'),
        p2: t('article_one_step_evaluation:p2'),
        p3_1: t('article_one_step_evaluation:p3_1'),
        p3_2: t('article_one_step_evaluation:p3_2'),
        p3_3: t('article_one_step_evaluation:p3_3'),
        p3_4: t('article_one_step_evaluation:p3_4'),
        p4_1: t('article_one_step_evaluation:p4_1'),
        p4_2: t('article_one_step_evaluation:p4_2'),
        p4_3: t('article_one_step_evaluation:p4_3'),
        p4_4: t('article_one_step_evaluation:p4_4'),
        p5_1: t('article_one_step_evaluation:p5_1'),
        p5_2: t('article_one_step_evaluation:p5_2'),
        p5_3: t('article_one_step_evaluation:p5_3'),
        p5_4: t('article_one_step_evaluation:p5_4'),
        p5_5: t('article_one_step_evaluation:p5_5'),
        p6_1: t('article_one_step_evaluation:p6_1'),
        p6_2: t('article_one_step_evaluation:p6_2'),
        p7_1: t('article_one_step_evaluation:p7_1'),
        p7_2: t('article_one_step_evaluation:p7_2'),
        p7_3: t('article_one_step_evaluation:p7_3'),
        p8: t('article_one_step_evaluation:p8'),
        p9_1: t('article_one_step_evaluation:p9_1'),
        p9_2: t('article_one_step_evaluation:p9_2'),
        p9_3: t('article_one_step_evaluation:p9_3'),
        p9_4: t('article_one_step_evaluation:p9_4'),
        p9_5: t('article_one_step_evaluation:p9_5'),
        p9_6: t('article_one_step_evaluation:p9_6'),
        p9_7: t('article_one_step_evaluation:p9_7'),
        p9_8: t('article_one_step_evaluation:p9_8'),
        p9_9: t('article_one_step_evaluation:p9_9'),
        p9_10: t('article_one_step_evaluation:p9_10'),
        p9_11: t('article_one_step_evaluation:p9_11'),
        p9_12: t('article_one_step_evaluation:p9_12'),
        p9_13: t('article_one_step_evaluation:p9_13'),
        p9_14: t('article_one_step_evaluation:p9_14'),
        p9_15: t('article_one_step_evaluation:p9_15'),
        p9_16: t('article_one_step_evaluation:p9_16'),
        p10_1: t('article_one_step_evaluation:p10_1'),
        p10_2: t('article_one_step_evaluation:p10_2'),
        p10_3: t('article_one_step_evaluation:p10_3'),
        p11_1: t('article_one_step_evaluation:p11_1'),
        p11_2: t('article_one_step_evaluation:p11_2'),
        p11_3: t('article_one_step_evaluation:p11_3'),
        p11_4: t('article_one_step_evaluation:p11_4'),
        p11_5: t('article_one_step_evaluation:p11_5'),
        p11_6: t('article_one_step_evaluation:p11_6'),
        p11_7: t('article_one_step_evaluation:p11_7'),
        p11_8: t('article_one_step_evaluation:p11_8'),
        p12_1: t('article_one_step_evaluation:p12_1'),
        p12_2: t('article_one_step_evaluation:p12_2'),
        p12_3: t('article_one_step_evaluation:p12_3'),
        p12_4: t('article_one_step_evaluation:p12_4'),
        p12_5: t('article_one_step_evaluation:p12_5'),
        p12_6: t('article_one_step_evaluation:p12_6'),
        p12_7: t('article_one_step_evaluation:p12_7'),
        p12_8: t('article_one_step_evaluation:p12_8'),
        p13_1: t('article_one_step_evaluation:p13_1'),
        p13_2: t('article_one_step_evaluation:p13_2'),
        p13_3: t('article_one_step_evaluation:p13_3'),
        faq1_1: t('article_one_step_evaluation:faq1_1'),
        faq1_2: t('article_one_step_evaluation:faq1_2'),
        faq2_1: t('article_one_step_evaluation:faq2_1'),
        faq2_2: t('article_one_step_evaluation:faq2_2'),
    }

    const headingImg = mainLang === 'es' ? headingES : headingEN
    const tableImg = mainLang === 'es' ? tableES : tableEN


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

                    {blogTranslations.p1_1} <br /> <br />
                    {blogTranslations.p1_2} <br /> <br />
                    {blogTranslations.p2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />
                    <Image alt="" src={tableImg} className="w-full"/> <br/>


                    <strong className="text-white">{blogTranslations.p3_1}</strong> <br /> <br />
                    {blogTranslations.p3_2} <br /> <br />
                    {blogTranslations.p3_3} <br /> <br />
                    {blogTranslations.p3_4} <br /> <br />

                    <strong className="text-white">{blogTranslations.p4_1}</strong> <br /> <br />
                    <ul className="list-disc flex flex-col gap-6 pl-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_2}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_3}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_4}/>
                        </li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    <Image alt="" src={image} className="w-full"/> <br/>
                    {blogTranslations.p5_1} <br /> <br />
                    <strong className="text-white">{blogTranslations.p5_2}</strong> <br /> <br />
                    <ul className="list-disc flex flex-col gap-6 pl-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_3}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_4}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p5_5}/>
                        </li>
                    </ul> <br />

                    <strong className="text-white">{blogTranslations.p6_1}</strong> <br /> <br />
                    {blogTranslations.p6_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />
                    {blogTranslations.p7_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    {blogTranslations.p8} <br /> <br />
                    <Image alt="" src={headingImg} className="w-full"/> <br/>
                    <strong className="text-white">{blogTranslations.p9_1}</strong> <br /> <br />
                    {blogTranslations.p9_2} <br /> <br />
                    {blogTranslations.p9_3} <br /> <br />
                    <strong className="text-white">{blogTranslations.p9_4}</strong> <br /> <br />
                    {blogTranslations.p9_5} <br /> <br />
                    {blogTranslations.p9_6} <br /> <br />
                    <strong className="text-white">{blogTranslations.p9_7}</strong> <br /> <br />
                    {blogTranslations.p9_8} <br /> <br />
                    {blogTranslations.p9_9} <br /> <br />
                    <strong className="text-white">{blogTranslations.p9_10}</strong> <br /> <br />
                    {blogTranslations.p9_11} <br /> <br />
                    {blogTranslations.p9_12} <br /> <br />
                    <strong className="text-white">{blogTranslations.p9_13}</strong> <br /> <br />
                    {blogTranslations.p9_14} <br /> <br />
                    <strong className="text-white">{blogTranslations.p9_15}</strong> <br /> <br />
                    {blogTranslations.p9_16} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    {blogTranslations.p10_1} <br /> <br />
                    {blogTranslations.p10_2} <br /> <br />
                    {blogTranslations.p10_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    <strong className="text-white">{blogTranslations.p11_1}</strong> <br /> <br />
                    <ul className="list-disc flex flex-col gap-6 pl-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p11_2}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p11_3}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p11_4}/>
                        </li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.p11_5}</strong> <br /> <br />
                    <ul className="list-disc flex flex-col gap-6 pl-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p11_6}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p11_7}/>
                        </li>
                    </ul> <br />
                    {blogTranslations.p11_8} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    <strong className="text-white">{blogTranslations.p12_1}</strong> <br /> <br />
                    <ul className="list-disc flex flex-col gap-6 pl-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p12_2}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p12_3}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p12_4}/>
                        </li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.p12_5}</strong> <br /> <br />
                    <ul className="list-disc flex flex-col gap-6 pl-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p12_6}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p12_7}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p12_8}/>
                        </li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />
                    {blogTranslations.p13_1} <br /> <br />
                    {blogTranslations.p13_2} <br /> <br />
                    {blogTranslations.p13_3} <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=One_Step_Evaluation_Blog_CTA&hcategory=Mar2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="One Step Evaluation Prop Firm: The best for 2025"
                        translation={blogTranslations.CTA} />
                    <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />
                    <strong className="text-white">{blogTranslations.faq1_1}</strong> <br /> <br />
                    {blogTranslations.faq1_2} <br /> <br />
                    <strong className="text-white">{blogTranslations.faq2_1}</strong> <br /> <br />
                    {blogTranslations.faq2_2} <br /> <br />

                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}