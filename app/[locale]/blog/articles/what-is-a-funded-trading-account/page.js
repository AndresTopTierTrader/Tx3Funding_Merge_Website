//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import image1 from './assets/What is a Funded Trading Account_ - Blog 2.jpg'
import image2 from './assets/What is a Funded Trading Account_ - Blog 3.jpg'
import image3 from './assets/What is a Funded Trading Account_ - Blog 4.jpg'
import { bgImageStyleBlog } from "@/constants/styles"
import { FaArrowRight } from "react-icons/fa";

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

const i18nNameSpaces = ["common", "blog_landing", "article_what_is_a_funded_trading_account"];

//Params to bring the info from the db
const blogParam = "what-is-a-funded-trading-account"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "What is a Funded Trading Account?",
    description:
        "Discover how funded trading accounts work, their benefits, evaluation processes, and why TopTier Trader offers superior capital allocation and profit splits for aspiring traders.",
    keywords: "funded trading account, prop trading, proprietary trading firms, trading capital, funded trader, trading challenges, profit splits, trading evaluation, TopTier Trader",
    language: "en",
    subject: "Funded Trading Education",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Funded Trading Accounts: Access More Capital Without Financial Risk",
        description:
            "Learn how funded trading accounts work, evaluation processes, and why TopTier Trader offers superior capital allocation up to $300,000 with profit splits up to 90%.",
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
    title: "¿Qué es una Cuenta de Trading Fondeada?",
    description:
        "Descubre cómo funcionan las cuentas de trading fondeadas, sus beneficios, procesos de evaluación y por qué TopTier Trader ofrece una asignación de capital y división de ganancias superior para traders aspirantes.",
    keywords: "cuenta de trading fondeada, prop trading, firmas de trading propietario, capital de trading, trader fondeado, desafíos de trading, división de ganancias, evaluación de trading, TopTier Trader",
    language: "es",
    subject: "Educación de Trading Fondeado",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Cuentas de Trading Fondeadas: Accede a Más Capital Sin Riesgo Financiero",
        description:
            "Aprende cómo funcionan las cuentas de trading fondeadas, los procesos de evaluación y por qué TopTier Trader ofrece una asignación de capital superior de hasta $300,000 con divisiones de ganancias de hasta el 90%.",
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
    title: "Qu'est-ce qu'un Compte de Trading Financé ?",
    description:
        "Découvrez comment fonctionnent les comptes de trading financés, leurs avantages, les processus d'évaluation et pourquoi TopTier Trader offre une allocation de capital et un partage des bénéfices supérieurs pour les traders aspirants.",
    keywords: "compte de trading financé, prop trading, sociétés de trading propriétaire, capital de trading, trader financé, challenges de trading, partage des bénéfices, évaluation de trading, TopTier Trader",
    language: "fr",
    subject: "Éducation sur le Trading Financé",
    coverage: "Mondial",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Comptes de Trading Financés : Accédez à Plus de Capital Sans Risque Financier",
        description:
            "Apprenez comment fonctionnent les comptes de trading financés, les processus d'évaluation et pourquoi TopTier Trader offre une allocation de capital supérieure jusqu'à 300 000 $ avec un partage des bénéfices jusqu'à 90 %.",
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
        h1_title: t('article_what_is_a_funded_trading_account:h1_title'),
        CTA: t('article_what_is_a_funded_trading_account:CTA'),
        t1: t('article_what_is_a_funded_trading_account:t1'),
        t2: t('article_what_is_a_funded_trading_account:t2'),
        t3: t('article_what_is_a_funded_trading_account:t3'),
        t4: t('article_what_is_a_funded_trading_account:t4'),
        t5: t('article_what_is_a_funded_trading_account:t5'),
        t6: t('article_what_is_a_funded_trading_account:t6'),
        t7: t('article_what_is_a_funded_trading_account:t7'),
        t8: t('article_what_is_a_funded_trading_account:t8'),
        t9: t('article_what_is_a_funded_trading_account:t9'),
        hyperLink_1: t('article_what_is_a_funded_trading_account:hyperLink_1'),
        hyperLink_2: t('article_what_is_a_funded_trading_account:hyperLink_2'),
        hyperLink_3: t('article_what_is_a_funded_trading_account:hyperLink_3'),
        hyperLink_4: t('article_what_is_a_funded_trading_account:hyperLink_4'),
        hyperLink_5: t('article_what_is_a_funded_trading_account:hyperLink_5'),
        hyperLink_6: t('article_what_is_a_funded_trading_account:hyperLink_6'),
        hyperLink_7: t('article_what_is_a_funded_trading_account:hyperLink_7'),
        hyperLink_8: t('article_what_is_a_funded_trading_account:hyperLink_8'),
        hyperLink_9: t('article_what_is_a_funded_trading_account:hyperLink_9'),
        hyperLink_10: t('article_what_is_a_funded_trading_account:hyperLink_10'),
        hyperLink_11: t('article_what_is_a_funded_trading_account:hyperLink_11'),
        p1_1: t('article_what_is_a_funded_trading_account:p1_1'),
        p1_2: t('article_what_is_a_funded_trading_account:p1_2'),
        p1_3: t('article_what_is_a_funded_trading_account:p1_3'),
        p2_1: t('article_what_is_a_funded_trading_account:p2_1'),
        p2_2: t('article_what_is_a_funded_trading_account:p2_2'),
        p2_3: t('article_what_is_a_funded_trading_account:p2_3'),
        p2_4: t('article_what_is_a_funded_trading_account:p2_4'),
        p2_5: t('article_what_is_a_funded_trading_account:p2_5'),
        p2_6: t('article_what_is_a_funded_trading_account:p2_6'),
        p2_7: t('article_what_is_a_funded_trading_account:p2_7'),
        p2_8: t('article_what_is_a_funded_trading_account:p2_8'),
        p2_9: t('article_what_is_a_funded_trading_account:p2_9'),
        p3_1: t('article_what_is_a_funded_trading_account:p3_1'),
        p3_2: t('article_what_is_a_funded_trading_account:p3_2'),
        p3_3: t('article_what_is_a_funded_trading_account:p3_3'),
        p3_4: t('article_what_is_a_funded_trading_account:p3_4'),
        p3_5: t('article_what_is_a_funded_trading_account:p3_5'),
        p3_6: t('article_what_is_a_funded_trading_account:p3_6'),
        p3_7: t('article_what_is_a_funded_trading_account:p3_7'),
        p3_8: t('article_what_is_a_funded_trading_account:p3_8'),
        p3_9: t('article_what_is_a_funded_trading_account:p3_9'),
        p3_10: t('article_what_is_a_funded_trading_account:p3_10'),
        p3_11: t('article_what_is_a_funded_trading_account:p3_11'),
        p3_12: t('article_what_is_a_funded_trading_account:p3_12'),
        p3_13: t('article_what_is_a_funded_trading_account:p3_13'),
        p3_14: t('article_what_is_a_funded_trading_account:p3_14'),
        p3_15: t('article_what_is_a_funded_trading_account:p3_15'),
        p3_16: t('article_what_is_a_funded_trading_account:p3_16'),
        p3_17: t('article_what_is_a_funded_trading_account:p3_17'),
        p4_1: t('article_what_is_a_funded_trading_account:p4_1'),
        p4_2: t('article_what_is_a_funded_trading_account:p4_2'),
        p4_3: t('article_what_is_a_funded_trading_account:p4_3'),
        p4_4: t('article_what_is_a_funded_trading_account:p4_4'),
        p4_5: t('article_what_is_a_funded_trading_account:p4_5'),
        p4_6: t('article_what_is_a_funded_trading_account:p4_6'),
        p4_7: t('article_what_is_a_funded_trading_account:p4_7'),
        p4_8: t('article_what_is_a_funded_trading_account:p4_8'),
        p5_1: t('article_what_is_a_funded_trading_account:p5_1'),
        p5_2: t('article_what_is_a_funded_trading_account:p5_2'),
        p5_3: t('article_what_is_a_funded_trading_account:p5_3'),
        p5_4: t('article_what_is_a_funded_trading_account:p5_4'),
        p5_5: t('article_what_is_a_funded_trading_account:p5_5'),
        p6_1: t('article_what_is_a_funded_trading_account:p6_1'),
        p6_2: t('article_what_is_a_funded_trading_account:p6_2'),
        p6_3: t('article_what_is_a_funded_trading_account:p6_3'),
        p6_4: t('article_what_is_a_funded_trading_account:p6_4'),
        p6_5: t('article_what_is_a_funded_trading_account:p6_5'),
        p6_6: t('article_what_is_a_funded_trading_account:p6_6'),
        p6_7: t('article_what_is_a_funded_trading_account:p6_7'),
        p6_8: t('article_what_is_a_funded_trading_account:p6_8'),
        p6_9: t('article_what_is_a_funded_trading_account:p6_9'),
        p6_10: t('article_what_is_a_funded_trading_account:p6_10'),
        p6_11: t('article_what_is_a_funded_trading_account:p6_11'),
        p6_12: t('article_what_is_a_funded_trading_account:p6_12'),
        p6_13: t('article_what_is_a_funded_trading_account:p6_13'),
        p6_14: t('article_what_is_a_funded_trading_account:p6_14'),
        p7_1: t('article_what_is_a_funded_trading_account:p7_1'),
        p7_2: t('article_what_is_a_funded_trading_account:p7_2'),
        p7_3: t('article_what_is_a_funded_trading_account:p7_3'),
        p7_4: t('article_what_is_a_funded_trading_account:p7_4'),
        p7_5: t('article_what_is_a_funded_trading_account:p7_5'),
        p7_6: t('article_what_is_a_funded_trading_account:p7_6'),
        p7_7: t('article_what_is_a_funded_trading_account:p7_7'),
        p8_1: t('article_what_is_a_funded_trading_account:p8_1'),
        p8_2: t('article_what_is_a_funded_trading_account:p8_2'),
        p8_3: t('article_what_is_a_funded_trading_account:p8_3'),
        p8_4: t('article_what_is_a_funded_trading_account:p8_4'),
        p8_5: t('article_what_is_a_funded_trading_account:p8_5'),
        p8_6: t('article_what_is_a_funded_trading_account:p8_6'),
        p8_7: t('article_what_is_a_funded_trading_account:p8_7'),
        p8_8: t('article_what_is_a_funded_trading_account:p8_8'),
        p8_9: t('article_what_is_a_funded_trading_account:p8_9'),
        p8_10: t('article_what_is_a_funded_trading_account:p8_10'),
        p8_11: t('article_what_is_a_funded_trading_account:p8_11'),
        p9_1: t('article_what_is_a_funded_trading_account:p9_1'),
        p9_2: t('article_what_is_a_funded_trading_account:p9_2'),
        p9_3: t('article_what_is_a_funded_trading_account:p9_3'),
        p9_4: t('article_what_is_a_funded_trading_account:p9_4'),
        p9_5: t('article_what_is_a_funded_trading_account:p9_5'),
        p9_6: t('article_what_is_a_funded_trading_account:p9_6'),
        p9_7: t('article_what_is_a_funded_trading_account:p9_7'),
        p9_8: t('article_what_is_a_funded_trading_account:p9_8'),
        p9_9: t('article_what_is_a_funded_trading_account:p9_9'),
        p9_10: t('article_what_is_a_funded_trading_account:p9_10'),
        p9_11: t('article_what_is_a_funded_trading_account:p9_11'),
        p10_1: t('article_what_is_a_funded_trading_account:p10_1'),
        p10_2: t('article_what_is_a_funded_trading_account:p10_2'),
        p10_3: t('article_what_is_a_funded_trading_account:p10_3'),
        p10_4: t('article_what_is_a_funded_trading_account:p10_4'),
        p10_5: t('article_what_is_a_funded_trading_account:p10_5'),
        p10_6: t('article_what_is_a_funded_trading_account:p10_6'),
        p10_7: t('article_what_is_a_funded_trading_account:p10_7'),
        p10_8: t('article_what_is_a_funded_trading_account:p10_8'),
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

                    {blogTranslations.p1_1} <br /> <br />
                    {blogTranslations.p1_2} <br /> <br />
                    {blogTranslations.p1_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />

                    {blogTranslations.p2_1} <br /> <br />
                    {blogTranslations.p2_2} <br /> <br />
                    {blogTranslations.p2_3} <br /> <br />

                    <ul className="flex flex-col pl-6 gap-6 list-disc">
                        <li>{blogTranslations.p2_4}</li>
                        <li>{blogTranslations.p2_5}</li>
                        <li>{blogTranslations.p2_6}</li>
                        <li>{blogTranslations.p2_7}</li>
                        <li>{blogTranslations.p2_8}</li>
                    </ul> <br />

                    {blogTranslations.p2_9} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />

                    <strong className="text-white">{blogTranslations.p3_1}</strong> <br /> <br />
                    {blogTranslations.p3_2} <br /> <br />
                    {blogTranslations.p3_3} <br /> <br />
                    <ul className="flex flex-col pl-6 gap-6 list-disc">
                        <li>{blogTranslations.p3_4}</li>
                        <li>{blogTranslations.p3_5}</li>
                        <li>{blogTranslations.p3_6}</li>
                        <li>{blogTranslations.p3_7}</li>
                    </ul> <br />

                    <strong className="text-white">{blogTranslations.p3_8}</strong> <br /> <br />
                    {blogTranslations.p3_9} <br /> <br />
                    {blogTranslations.p3_10} <br /> <br />

                    <strong className="text-white">{blogTranslations.p3_11}</strong> <br /> <br />
                    {blogTranslations.p3_12} <br /> <br />
                    <ul className="flex flex-col pl-6 gap-6 list-disc">
                        <li>{blogTranslations.p3_13}</li>
                        <li>{blogTranslations.p3_14}</li>
                        <li>{blogTranslations.p3_15}</li>
                        <li>{blogTranslations.p3_16}</li>
                    </ul> <br />
                    {blogTranslations.p3_17} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    <Image src={image1} alt="" className="w-full" /> <br />
                    {blogTranslations.p4_1} <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />
                    <ul className="flex flex-col pl-6 gap-6 list-disc">
                        <li>{blogTranslations.p4_3}</li>
                        <li>{blogTranslations.p4_4}</li>
                        <li>{blogTranslations.p4_5}</li>
                        <li>{blogTranslations.p4_6}</li>
                        <li>{blogTranslations.p4_7}</li>
                    </ul> <br />
                    {blogTranslations.p4_8} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    {blogTranslations.p5_1} <br /> <br />
                    <ol className="flex flex-col pl-6 gap-6 list-decimal">
                        <li><BoldBeforeComa inputText={blogTranslations.p5_2} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_3} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p5_4} /></li>
                    </ol> <br />
                    {blogTranslations.p5_5} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    {blogTranslations.p6_1} <br /> <br />
                    <strong className="text-white">{blogTranslations.p6_2}</strong> <br /> <br />
                    <ul className="flex flex-col pl-6 gap-6 list-disc">
                        <li>{blogTranslations.p6_3}</li>
                        <li>{blogTranslations.p6_4}</li>
                        <li>{blogTranslations.p6_5}</li>
                        <li>{blogTranslations.p6_6}</li>
                        <li>{blogTranslations.p6_7}</li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.p6_8}</strong> <br /> <br />
                    <ul className="flex flex-col pl-6 gap-6 list-disc">
                        <li>{blogTranslations.p6_9}</li>
                        <li>{blogTranslations.p6_10}</li>
                        <li>{blogTranslations.p6_11}</li>
                        <li>{blogTranslations.p6_13}</li>
                    </ul> <br />
                    {blogTranslations.p6_14} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    <Image src={image3} alt="" className="w-full" /> <br />
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />
                    <ul className="flex flex-col pl-6 gap-6 list-disc">
                        <li>{blogTranslations.p7_3}</li>
                        <li>{blogTranslations.p7_4}</li>
                        <li>{blogTranslations.p7_5}</li>
                        <li>{blogTranslations.p7_6}</li>
                    </ul> <br />
                    {blogTranslations.p7_7} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    {blogTranslations.p8_1} <br /> <br />
                    <ul className="flex flex-col pl-6 gap-6 list-disc">
                        <li>{blogTranslations.p8_2}</li>
                        <li>{blogTranslations.p8_3}</li>
                        <li>{blogTranslations.p8_4}</li>
                        <li>{blogTranslations.p8_5}</li>
                        <li>{blogTranslations.p8_6}</li>
                        <li>{blogTranslations.p8_7}</li>
                        <li>{blogTranslations.p8_8}</li>
                        <li>{blogTranslations.p8_9}</li>
                        <li>{blogTranslations.p8_10}</li>
                    </ul> <br />
                    {blogTranslations.p8_11} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />
                    <Image src={image2} alt="" className="w-full" /> <br />
                    {blogTranslations.p9_1} <br /> <br />
                    <strong className="text-white">{blogTranslations.p9_2}</strong> <br /> <br />
                    {blogTranslations.p9_3} <br /> <br />
                    <ul className="flex flex-col pl-6 gap-6 list-disc">
                        <li><BoldBeforeComa inputText={blogTranslations.p9_4} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p9_5} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p9_6} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p9_7} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p9_8} /></li>
                        <li><BoldBeforeComa inputText={blogTranslations.p9_9} /></li>
                    </ul> <br />
                    {blogTranslations.p9_10} <br /> <br />
                    {blogTranslations.p9_11} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />
                    {blogTranslations.p10_1} <br /> <br />
                    <ol className="flex flex-col pl-6 gap-6 list-decimal">
                        <li>{blogTranslations.p10_2}</li>
                        <li>{blogTranslations.p10_3}</li>
                        <li>{blogTranslations.p10_4}</li>
                        <li>{blogTranslations.p10_5}</li>
                        <li>{blogTranslations.p10_6}</li>
                    </ol> <br />
                    {blogTranslations.p10_7} <br /> <br />
                    {blogTranslations.p10_8} <br /> <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=What_Is_A_Funded_Trading_Account_Blog_CTA&hcategory=Mar2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="What is a Funded Trading Account?"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}