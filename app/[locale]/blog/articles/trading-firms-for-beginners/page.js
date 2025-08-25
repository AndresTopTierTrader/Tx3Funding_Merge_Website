//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import image1ES from './assets/Challenge Structure and Unique Advantages-Blog_LATM.jpg'
import image1EN from './assets/Challenge Structure and Unique Advantages-Blog.jpg'
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

const i18nNameSpaces = ["common", "blog_landing", "article_trading_firms_for_beginners"];

//Params to bring the info from the db
const blogParam = "trading-firms-for-beginners"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "Proprietary Trading Firms for Beginners in 2025",
    description: "Discover the best prop firms for beginners in 2025, with flexible rules, educational support, and realistic trading conditions. Start your funded journey with confidence.",
    keywords: "proprietary trading firms, best prop firms 2025, beginner trading prop firm, TopTier Trader, how to start prop trading, funded trading account",
    language: "en",
    subject: "Proprietary Trading for Beginners",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "Proprietary Trading Firms for Beginners in 2025",
        description: "Top proprietary trading firms for beginners in 2025: Learn about flexible challenges, profit targets, and how TopTier Trader helps new traders succeed.",
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
    title: "Empresas de Trading Propietario para Principiantes en 2025",
    description: "Conoce las mejores empresas de trading propietario para principiantes en 2025, con reglas flexibles, soporte educativo y condiciones realistas. Inicia tu camino como trader financiado.",
    keywords: "empresas de trading propietario, mejores empresas de trading 2025, trading para principiantes, TopTier Trader, cuenta financiada, cómo empezar a hacer trading",
    language: "es",
    subject: "Trading Propietario para Principiantes",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "Empresas de Trading Propietario para Principiantes en 2025",
        description: "Las mejores empresas de trading propietario para principiantes en 2025: descubre desafíos flexibles, objetivos realistas y cómo TopTier Trader apoya a nuevos traders.",
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
    title: "Sociétés de Trading Propriétaire pour Débutants en 2025",
    description: "Découvrez les meilleures sociétés de prop trading pour débutants en 2025, avec des règles flexibles, un soutien éducatif et des conditions de trading réalistes. Commencez votre parcours financé en toute confiance.",
    keywords: "sociétés de trading propriétaire, meilleures sociétés prop 2025, société prop trading débutant, TopTier Trader, comment débuter dans le prop trading, compte de trading financé",
    language: "fr",
    subject: "Trading Propriétaire pour Débutants",
    coverage: "Mondial",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "Sociétés de Trading Propriétaire pour Débutants en 2025",
        description: "Meilleures sociétés de trading propriétaire pour débutants en 2025 : Découvrez les challenges flexibles, les objectifs de profit et comment TopTier Trader aide les nouveaux traders à réussir.",
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
        h1_title: t('article_trading_firms_for_beginners:h1_title'),
        t1: t('article_trading_firms_for_beginners:t1'),
        t2: t('article_trading_firms_for_beginners:t2'),
        t3: t('article_trading_firms_for_beginners:t3'),
        t4: t('article_trading_firms_for_beginners:t4'),
        t5: t('article_trading_firms_for_beginners:t5'),
        t6: t('article_trading_firms_for_beginners:t6'),
        t7: t('article_trading_firms_for_beginners:t7'),
        hyperLink: t('article_trading_firms_for_beginners:hyperLink'),
        CTA: t('article_trading_firms_for_beginners:CTA'),
        p1_1: t('article_trading_firms_for_beginners:p1_1'),
        p1_2: t('article_trading_firms_for_beginners:p1_2'),
        p2_1: t('article_trading_firms_for_beginners:p2_1'),
        p2_2: t('article_trading_firms_for_beginners:p2_2'),
        p2_3: t('article_trading_firms_for_beginners:p2_3'),
        p2_4: t('article_trading_firms_for_beginners:p2_4'),
        p2_5: t('article_trading_firms_for_beginners:p2_5'),
        p2_6: t('article_trading_firms_for_beginners:p2_6'),
        p2_7: t('article_trading_firms_for_beginners:p2_7'),
        p2_8: t('article_trading_firms_for_beginners:p2_8'),
        p3_1: t('article_trading_firms_for_beginners:p3_1'),
        p3_2: t('article_trading_firms_for_beginners:p3_2'),
        p3_3: t('article_trading_firms_for_beginners:p3_3'),
        p3_4: t('article_trading_firms_for_beginners:p3_4'),
        p3_5: t('article_trading_firms_for_beginners:p3_5'),
        p3_6: t('article_trading_firms_for_beginners:p3_6'),
        p3_7: t('article_trading_firms_for_beginners:p3_7'),
        p3_8: t('article_trading_firms_for_beginners:p3_8'),
        p3_9: t('article_trading_firms_for_beginners:p3_9'),
        p3_10: t('article_trading_firms_for_beginners:p3_10'),
        p3_11: t('article_trading_firms_for_beginners:p3_11'),
        p3_12: t('article_trading_firms_for_beginners:p3_12'),
        p3_13: t('article_trading_firms_for_beginners:p3_13'),
        p3_14: t('article_trading_firms_for_beginners:p3_14'),
        p3_15: t('article_trading_firms_for_beginners:p3_15'),
        p3_16: t('article_trading_firms_for_beginners:p3_16'),
        p3_17: t('article_trading_firms_for_beginners:p3_17'),
        p3_18: t('article_trading_firms_for_beginners:p3_18'),
        p3_19: t('article_trading_firms_for_beginners:p3_19'),
        p3_20: t('article_trading_firms_for_beginners:p3_20'),
        p3_21: t('article_trading_firms_for_beginners:p3_21'),
        p3_22: t('article_trading_firms_for_beginners:p3_22'),
        p3_23: t('article_trading_firms_for_beginners:p3_23'),
        p3_24: t('article_trading_firms_for_beginners:p3_24'),
        p4_1: t('article_trading_firms_for_beginners:p4_1'),
        p4_2: t('article_trading_firms_for_beginners:p4_2'),
        p4_3: t('article_trading_firms_for_beginners:p4_3'),
        p4_4: t('article_trading_firms_for_beginners:p4_4'),
        p4_5: t('article_trading_firms_for_beginners:p4_5'),
        p4_6: t('article_trading_firms_for_beginners:p4_6'),
        p4_7: t('article_trading_firms_for_beginners:p4_7'),
        p4_8: t('article_trading_firms_for_beginners:p4_8'),
        p4_9: t('article_trading_firms_for_beginners:p4_9'),
        p4_10: t('article_trading_firms_for_beginners:p4_10'),
        p4_11: t('article_trading_firms_for_beginners:p4_11'),
        p4_12: t('article_trading_firms_for_beginners:p4_12'),
        p4_13: t('article_trading_firms_for_beginners:p4_13'),
        p4_14: t('article_trading_firms_for_beginners:p4_14'),
        p4_15: t('article_trading_firms_for_beginners:p4_15'),
        p4_16: t('article_trading_firms_for_beginners:p4_16'),
        p4_17: t('article_trading_firms_for_beginners:p4_17'),
        p4_18: t('article_trading_firms_for_beginners:p4_18'),
        p4_19: t('article_trading_firms_for_beginners:p4_19'),
        p5_1: t('article_trading_firms_for_beginners:p5_1'),
        p5_2: t('article_trading_firms_for_beginners:p5_2'),
        p5_3: t('article_trading_firms_for_beginners:p5_3'),
        p5_4: t('article_trading_firms_for_beginners:p5_4'),
        p5_5: t('article_trading_firms_for_beginners:p5_5'),
        p6_1: t('article_trading_firms_for_beginners:p6_1'),
        p6_2: t('article_trading_firms_for_beginners:p6_2'),
        p6_3: t('article_trading_firms_for_beginners:p6_3'),
        p6_4: t('article_trading_firms_for_beginners:p6_4'),
        p6_5: t('article_trading_firms_for_beginners:p6_5'),
        p7_1: t('article_trading_firms_for_beginners:p7_1'),
        p7_2: t('article_trading_firms_for_beginners:p7_2'),
        p8: t('article_trading_firms_for_beginners:p8'),
    }

    const image = mainLang === 'es' ? image1ES : image1EN


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
                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />
                    {blogTranslations.p2_1} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 md:pl-12 list-disc">
                        <li>{blogTranslations.p2_2}</li>
                        <li>{blogTranslations.p2_3}</li>
                        <li>{blogTranslations.p2_4}</li>
                        <li>{blogTranslations.p2_5}</li>
                        <li>{blogTranslations.p2_6}</li>
                    </ul> <br />
                    {blogTranslations.p2_7} <br /> <br />
                    {blogTranslations.p2_8} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    <strong className="text-white">{blogTranslations.p3_1}</strong> <br /> <br />
                    {blogTranslations.p3_2} <br /> <br />
                    {blogTranslations.p3_3} <br /> <br />

                    <strong className="text-white">{blogTranslations.p3_4}</strong> <br /> <br />
                    {blogTranslations.p3_5} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 md:pl-12 list-disc">
                        <li>{blogTranslations.p3_6}</li>
                        <li>{blogTranslations.p3_7}</li>
                    </ul> <br />
                    {blogTranslations.p3_8} <br /> <br />

                    <strong className="text-white">{blogTranslations.p3_9}</strong> <br /> <br />
                    {blogTranslations.p3_10} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 md:pl-12 list-disc">
                        <li>{blogTranslations.p3_11}</li>
                        <li>{blogTranslations.p3_12}</li>
                        <li>{blogTranslations.p3_13}</li>
                        <li>{blogTranslations.p3_14}</li>
                    </ul> <br />
                    {blogTranslations.p3_15} <br /> <br />

                    <strong className="text-white">{blogTranslations.p3_16}</strong> <br /> <br />
                    {blogTranslations.p3_17} <br /> <br />
                    {blogTranslations.p3_18} <br /> <br />

                    <strong className="text-white">{blogTranslations.p3_19}</strong> <br /> <br />
                    {blogTranslations.p3_20} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 md:pl-12 list-disc">
                        <li>{blogTranslations.p3_21}</li>
                        <li>{blogTranslations.p3_22}</li>
                        <li>{blogTranslations.p3_23}</li>
                    </ul> <br />
                    {blogTranslations.p3_24} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    {blogTranslations.p4_1} <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />
                    <Image src={image} alt="Challenge Structure and Unique Advantages Image" className="w-full" /> <br />
                    {blogTranslations.p4_3} <br /> <br />
                    {blogTranslations.p4_4} <br /> <br />
                    <ol className="flex flex-col gap-6 pl-6 md:pl-12 list-decimal">
                        <li><BoldBeforeComa inputText={blogTranslations.p4_5} /></li>
                        <li>
                            <p>{blogTranslations.p4_6}</p> <br />
                            <ul className="flex flex-col gap-6 pl-6 md:pl-12 list-disc">
                                <li>{blogTranslations.p4_7}</li>
                                <li>{blogTranslations.p4_8}</li>
                                <li>{blogTranslations.p4_9}</li>
                            </ul>
                        </li>
                        <li>
                            <p>{blogTranslations.p4_10}</p> <br />
                            <ul className="flex flex-col gap-6 pl-6 md:pl-12 list-disc">
                                <li>{blogTranslations.p4_11}</li>
                                <li>{blogTranslations.p4_12}</li>
                                <li>{blogTranslations.p4_13}</li>
                                <li>{blogTranslations.p4_14}</li>
                            </ul>
                        </li>
                    </ol> <br />
                    <strong className="text-white">{blogTranslations.p4_15}</strong> <br /> <br />
                    {blogTranslations.p4_16} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 md:pl-12 list-disc">
                        <li>{blogTranslations.p4_17}</li>
                        <li>{blogTranslations.p4_18}</li>
                        <li>{blogTranslations.p4_19}</li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    {blogTranslations.p5_1} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 md:pl-12 list-disc">
                        <li>{blogTranslations.p5_2}</li>
                        <li>{blogTranslations.p5_3}</li>
                        <li>{blogTranslations.p5_4}</li>
                        <li>{blogTranslations.p5_5}</li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    {blogTranslations.p6_1} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-6 md:pl-12 list-disc">
                        <li>{blogTranslations.p6_2}</li>
                        <li>{blogTranslations.p6_3}</li>
                        <li>{blogTranslations.p6_4}</li>
                        <li>{blogTranslations.p6_5}</li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    {blogTranslations.p8} <br /> <br />

                    <a href={`${ENVIRONMENT_URL}/${locale}/products/challenges`} className="underline hover:text-ttorange">{blogTranslations.hyperLink}</a> <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Trading_Firms_For_Beginners_Blog_CTA&hcategory=Apr2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="Proprietary Trading Firms for Beginners in 2025"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}