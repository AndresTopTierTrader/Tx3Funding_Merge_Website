//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import { bgImageStyleBlog } from "@/constants/styles"

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

const i18nNameSpaces = ["common", "blog_landing", "article_how_to_become_a_trader"];

//Params to bring the info from the db
const blogParam = "how-to-become-a-trader"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "How to Become a Trader: Top Tips for Success in 2025",
    description: "Learn how to become a trader with this step-by-step guide. Discover trading styles, risk management, trading psychology, and tips for long-term success.",
    keywords: "how to become a trader, learn trading, trader personality types, trading for beginners, trading plan, risk management, trading psychology, trading journal tips",
    language: "en",
    subject: "Trading Education and Career Development",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "How to Become a Trader: Top Tips for Success in 2025",
        description: "Master the steps to become a successful trader—understand trading styles, leverage, risk tolerance, and trading psychology to build long-term success.",
        image: `${ENVIRONMENT_URL}/assets/images/blog/how-to-become-a-trader-cover.jpg`, // Replace with actual blog image
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
    title: "Cómo Convertirse en Trader: Consejos Clave para el Éxito en 2025",
    description: "Descubre cómo convertirte en trader con esta guía práctica. Aprende sobre estilos de trading, gestión del riesgo, psicología del trader y planificación.",
    keywords: "cómo convertirse en trader, aprender trading, tipos de trader, trading para principiantes, plan de trading, gestión del riesgo, psicología del trading",
    language: "es",
    subject: "Educación Financiera y Desarrollo de Carrera en Trading",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Cómo Convertirse en Trader: Consejos Clave para el Éxito en 2025",
        description: "Aprende paso a paso cómo convertirte en un trader exitoso. Identifica tu estilo, gestiona el riesgo y domina la psicología del trading para el éxito a largo plazo.",
        image: `${ENVIRONMENT_URL}/assets/images/blog/how-to-become-a-trader-cover.jpg`, // Replace with actual blog image
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
    title: "Comment devenir trader : Meilleurs conseils pour réussir en 2025",
    description: "Apprenez à devenir trader grâce à ce guide étape par étape. Découvrez les styles de trading, la gestion des risques, la psychologie du trading et des conseils pour réussir à long terme.",
    keywords: "comment devenir trader, apprendre le trading, types de personnalités de traders, trading pour débutants, plan de trading, gestion des risques, psychologie du trading, conseils pour journal de trading",
    language: "fr",
    subject: "Éducation au trading et développement de carrière",
    coverage: "Mondial",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Comment devenir trader : Meilleurs conseils pour réussir en 2025",
        description: "Maîtrisez les étapes pour devenir un trader à succès—comprenez les styles de trading, l'effet de levier, la tolérance au risque et la psychologie du trading pour construire une réussite durable.",
        image: `${ENVIRONMENT_URL}/assets/images/blog/how-to-become-a-trader-cover.jpg`, // Remplacer par l'image réelle du blog
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
        h1_title: t('article_how_to_become_a_trader:h1_title'),
        CTA: t('article_how_to_become_a_trader:CTA'),
        t1: t('article_how_to_become_a_trader:t1'),
        t2: t('article_how_to_become_a_trader:t2'),
        t3: t('article_how_to_become_a_trader:t3'),
        t4: t('article_how_to_become_a_trader:t4'),
        t5: t('article_how_to_become_a_trader:t5'),
        t6: t('article_how_to_become_a_trader:t6'),
        t7: t('article_how_to_become_a_trader:t7'),
        t8: t('article_how_to_become_a_trader:t8'),
        t9: t('article_how_to_become_a_trader:t9'),
        t10: t('article_how_to_become_a_trader:t10'),
        t11: t('article_how_to_become_a_trader:t11'),
        t12: t('article_how_to_become_a_trader:t12'),
        t13: t('article_how_to_become_a_trader:t13'),
        p1: t('article_how_to_become_a_trader:p1'),
        p2_1: t('article_how_to_become_a_trader:p2_1'),
        p2_2: t('article_how_to_become_a_trader:p2_2'),
        p2_3: t('article_how_to_become_a_trader:p2_3'),
        p3_1: t('article_how_to_become_a_trader:p3_1'),
        p3_2: t('article_how_to_become_a_trader:p3_2'),
        p3_3: t('article_how_to_become_a_trader:p3_3'),
        p3_4: t('article_how_to_become_a_trader:p3_4'),
        p4_1: t('article_how_to_become_a_trader:p4_1'),
        p4_2: t('article_how_to_become_a_trader:p4_2'),
        p4_3: t('article_how_to_become_a_trader:p4_3'),
        p4_4: t('article_how_to_become_a_trader:p4_4'),
        p5_1: t('article_how_to_become_a_trader:p5_1'),
        p5_2: t('article_how_to_become_a_trader:p5_2'),
        p5_3: t('article_how_to_become_a_trader:p5_3'),
        p5_4: t('article_how_to_become_a_trader:p5_4'),
        p6_1: t('article_how_to_become_a_trader:p6_1'),
        p6_2: t('article_how_to_become_a_trader:p6_2'),
        p6_3: t('article_how_to_become_a_trader:p6_3'),
        p6_4: t('article_how_to_become_a_trader:p6_4'),
        p7_1: t('article_how_to_become_a_trader:p7_1'),
        p7_2: t('article_how_to_become_a_trader:p7_2'),
        p7_3: t('article_how_to_become_a_trader:p7_3'),
        p7_4: t('article_how_to_become_a_trader:p7_4'),
        p8_1: t('article_how_to_become_a_trader:p8_1'),
        p8_2: t('article_how_to_become_a_trader:p8_2'),
        p8_3: t('article_how_to_become_a_trader:p8_3'),
        p8_4: t('article_how_to_become_a_trader:p8_4'),
        p9_1: t('article_how_to_become_a_trader:p9_1'),
        p9_2: t('article_how_to_become_a_trader:p9_2'),
        p9_3: t('article_how_to_become_a_trader:p9_3'),
        p9_4: t('article_how_to_become_a_trader:p9_4'),
        p10_1: t('article_how_to_become_a_trader:p10_1'),
        p10_2: t('article_how_to_become_a_trader:p10_2'),
        p10_3: t('article_how_to_become_a_trader:p10_3'),
        p10_4: t('article_how_to_become_a_trader:p10_4'),
        p11_1: t('article_how_to_become_a_trader:p11_1'),
        p11_2: t('article_how_to_become_a_trader:p11_2'),
        p11_3: t('article_how_to_become_a_trader:p11_3'),
        p11_4: t('article_how_to_become_a_trader:p11_4'),
        p12_1: t('article_how_to_become_a_trader:p12_1'),
        p12_2: t('article_how_to_become_a_trader:p12_2'),
        p12_3: t('article_how_to_become_a_trader:p12_3'),
        p12_4: t('article_how_to_become_a_trader:p12_4'),
        p13_1: t('article_how_to_become_a_trader:p13_1'),
        p13_2: t('article_how_to_become_a_trader:p13_2'),
        p13_3: t('article_how_to_become_a_trader:p13_3'),
        p13_4: t('article_how_to_become_a_trader:p13_4'),
        p14_1: t('article_how_to_become_a_trader:p14_1'),
        p14_2: t('article_how_to_become_a_trader:p14_2'),
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

                    {blogTranslations.p1} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />
                    <ul className="flex flex-col gap-6 pl-6 list-disc">
                        <li>{blogTranslations.p2_1}</li>
                        <li>{blogTranslations.p2_2}</li>
                        <li>{blogTranslations.p2_3}</li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    {blogTranslations.p3_1} <br /> <br />
                    {blogTranslations.p3_2} <br /> <br />
                    {blogTranslations.p3_3} <br /> <br />
                    {blogTranslations.p3_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    {blogTranslations.p4_1} <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />
                    {blogTranslations.p4_3} <br /> <br />
                    {blogTranslations.p4_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    {blogTranslations.p5_1} <br /> <br />
                    {blogTranslations.p5_2} <br /> <br />
                    {blogTranslations.p5_3} <br /> <br />
                    {blogTranslations.p5_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    {blogTranslations.p6_1} <br /> <br />
                    {blogTranslations.p6_2} <br /> <br />
                    {blogTranslations.p6_3} <br /> <br />
                    {blogTranslations.p6_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />
                    {blogTranslations.p7_3} <br /> <br />
                    {blogTranslations.p7_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    {blogTranslations.p8_1} <br /> <br />
                    {blogTranslations.p8_2} <br /> <br />
                    {blogTranslations.p8_3} <br /> <br />
                    {blogTranslations.p8_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />
                    {blogTranslations.p9_1} <br /> <br />
                    {blogTranslations.p9_2} <br /> <br />
                    {blogTranslations.p9_3} <br /> <br />
                    {blogTranslations.p9_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />
                    {blogTranslations.p10_1} <br /> <br />
                    {blogTranslations.p10_2} <br /> <br />
                    {blogTranslations.p10_3} <br /> <br />
                    {blogTranslations.p10_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t10}</h3><br />
                    {blogTranslations.p11_1} <br /> <br />
                    {blogTranslations.p11_2} <br /> <br />
                    {blogTranslations.p11_3} <br /> <br />
                    {blogTranslations.p11_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t11}</h3><br />
                    {blogTranslations.p12_1} <br /> <br />
                    {blogTranslations.p12_2} <br /> <br />
                    {blogTranslations.p12_3} <br /> <br />
                    {blogTranslations.p12_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t12}</h3><br />
                    {blogTranslations.p13_1} <br /> <br />
                    {blogTranslations.p13_2} <br /> <br />
                    {blogTranslations.p13_3} <br /> <br />
                    {blogTranslations.p13_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t13}</h3><br />
                    {blogTranslations.p12_1} <br /> <br />
                    {blogTranslations.p12_2} <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=How_To_Become_A_Trader_Blog_CTA&hcategory=Mar2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="How to Become a Trader: Top Tips for Success"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}