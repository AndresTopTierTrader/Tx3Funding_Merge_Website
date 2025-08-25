//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import Image from "next/image";
import image1 from "./assets/Mastering Trading Psychology - Blog photo1.jpg"
import image2 from "./assets/Mastering Trading Psychology - Blog photo2.jpg"
import image3 from "./assets/Mastering Trading Psychology - Blog photo3.jpg"
import CtaButton from "@/components/common/Buttons/CtaButton";
import { bgImageStyleBlog } from "@/constants/styles"
import Content from "../../../../../components/blog/Content";

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

const i18nNameSpaces = ["common", "blog_landing", "article_trading_psychology_essential_tips"];

//Params to bring the info from the db
const blogParam = "trading-psychology-essential-tips"

const metadata_en = {
    title: "Mastering Trading Psychology: Essential Tips for Every Trader",
    description: "Discover how to manage emotions like fear and greed, overcome cognitive biases, and develop a strong trading strategy to improve your trading success.",
    keywords: "trading psychology, trading emotions, fear in trading, greed in trading, cognitive biases, successful trader traits, trading discipline, risk management",
    language: "en",
    subject: "Trading Psychology and Emotional Discipline",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Mastering Trading Psychology: Essential Tips for Every Trader",
        description: "Learn how to manage trading emotions, develop a robust trading strategy, and enhance your decision-making for long-term success.",
        image: "",
        site_name: "TopTier Trader",
        url: ""
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
    title: "Dominando la Psicología del Trading: Consejos Esenciales para Todo Trader",
    description: "Aprende a gestionar emociones como el miedo y la avaricia, superar sesgos cognitivos y desarrollar una estrategia sólida para mejorar tu éxito en el trading.",
    keywords: "psicología del trading, emociones en el trading, miedo en el trading, avaricia en el trading, sesgos cognitivos, disciplina en el trading, gestión de riesgos",
    language: "es",
    subject: "Psicología del Trading y Disciplina Emocional",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Dominando la Psicología del Trading: Consejos Esenciales para Todo Trader",
        description: "Descubre cómo controlar las emociones en el trading, desarrollar estrategias efectivas y tomar mejores decisiones para el éxito a largo plazo.",
        image: "",
        site_name: "TopTier Trader",
        url: ""
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
    title: "Maîtriser la Psychologie du Trading : Conseils Essentiels pour Tout Trader",
    description: "Apprenez à gérer des émotions comme la peur et la cupidité, à surmonter les biais cognitifs et à développer une stratégie solide pour améliorer votre succès en trading.",
    keywords: "psychologie du trading, émotions en trading, peur en trading, cupidité en trading, biais cognitifs, discipline en trading, gestion des risques",
    language: "fr",
    subject: "Psychologie du Trading et Discipline Émotionnelle",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "Maîtriser la Psychologie du Trading : Conseils Essentiels pour Tout Trader",
        description: "Découvrez comment contrôler les émotions en trading, développer des stratégies efficaces et prendre de meilleures décisions pour réussir à long terme.",
        image: "",
        site_name: "TopTier Trader",
        url: ""
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
        h1_title: t('article_trading_psychology_essential_tips:h1_title'),
        CTA: t('article_trading_psychology_essential_tips:CTA'),
        hyperLink: t('article_trading_psychology_essential_tips:hyperLink'),
        t1: t('article_trading_psychology_essential_tips:t1'),
        t2: t('article_trading_psychology_essential_tips:t2'),
        t3: t('article_trading_psychology_essential_tips:t3'),
        t4: t('article_trading_psychology_essential_tips:t4'),
        t5: t('article_trading_psychology_essential_tips:t5'),
        t6: t('article_trading_psychology_essential_tips:t6'),
        t7: t('article_trading_psychology_essential_tips:t7'),
        t8: t('article_trading_psychology_essential_tips:t8'),
        t9: t('article_trading_psychology_essential_tips:t9'),
        t10: t('article_trading_psychology_essential_tips:t10'),
        t11: t('article_trading_psychology_essential_tips:t11'),
        t12: t('article_trading_psychology_essential_tips:t12'),
        faq1_1: t('article_trading_psychology_essential_tips:faq1_1'),
        faq1_2: t('article_trading_psychology_essential_tips:faq1_2'),
        faq2_1: t('article_trading_psychology_essential_tips:faq2_1'),
        faq2_2: t('article_trading_psychology_essential_tips:faq2_2'),
        faq3_1: t('article_trading_psychology_essential_tips:faq3_1'),
        faq3_2: t('article_trading_psychology_essential_tips:faq3_2'),
        faq4_1: t('article_trading_psychology_essential_tips:faq4_1'),
        faq4_2: t('article_trading_psychology_essential_tips:faq4_2'),
        faq5_1: t('article_trading_psychology_essential_tips:faq5_1'),
        faq5_2: t('article_trading_psychology_essential_tips:faq5_2'),
        p1: t('article_trading_psychology_essential_tips:p1'),
        p2_1: t('article_trading_psychology_essential_tips:p2_1'),
        p2_2: t('article_trading_psychology_essential_tips:p2_2'),
        p2_3: t('article_trading_psychology_essential_tips:p2_3'),
        p3_1: t('article_trading_psychology_essential_tips:p3_1'),
        p3_2: t('article_trading_psychology_essential_tips:p3_2'),
        p3_3: t('article_trading_psychology_essential_tips:p3_3'),
        p3_4: t('article_trading_psychology_essential_tips:p3_4'),
        p4_1: t('article_trading_psychology_essential_tips:p4_1'),
        p4_2: t('article_trading_psychology_essential_tips:p4_2'),
        p4_3: t('article_trading_psychology_essential_tips:p4_3'),
        p4_4: t('article_trading_psychology_essential_tips:p4_4'),
        p4_5: t('article_trading_psychology_essential_tips:p4_5'),
        p4_6: t('article_trading_psychology_essential_tips:p4_6'),
        p4_7: t('article_trading_psychology_essential_tips:p4_7'),
        p4_8: t('article_trading_psychology_essential_tips:p4_8'),
        p4_9: t('article_trading_psychology_essential_tips:p4_9'),
        p4_10: t('article_trading_psychology_essential_tips:p4_10'),
        p4_11: t('article_trading_psychology_essential_tips:p4_11'),
        p4_12: t('article_trading_psychology_essential_tips:p4_12'),
        p4_13: t('article_trading_psychology_essential_tips:p4_13'),
        p5_1: t('article_trading_psychology_essential_tips:p5_1'),
        p5_2: t('article_trading_psychology_essential_tips:p5_2'),
        p5_3: t('article_trading_psychology_essential_tips:p5_3'),
        p5_4: t('article_trading_psychology_essential_tips:p5_4'),
        p5_5: t('article_trading_psychology_essential_tips:p5_5'),
        p5_6: t('article_trading_psychology_essential_tips:p5_6'),
        p5_7: t('article_trading_psychology_essential_tips:p5_7'),
        p5_8: t('article_trading_psychology_essential_tips:p5_8'),
        p5_9: t('article_trading_psychology_essential_tips:p5_9'),
        p5_10: t('article_trading_psychology_essential_tips:p5_10'),
        p5_11: t('article_trading_psychology_essential_tips:p5_11'),
        p6_1: t('article_trading_psychology_essential_tips:p6_1'),
        p6_2: t('article_trading_psychology_essential_tips:p6_2'),
        p6_3: t('article_trading_psychology_essential_tips:p6_3'),
        p6_4: t('article_trading_psychology_essential_tips:p6_4'),
        p6_5: t('article_trading_psychology_essential_tips:p6_5'),
        p6_6: t('article_trading_psychology_essential_tips:p6_6'),
        p6_7: t('article_trading_psychology_essential_tips:p6_7'),
        p6_8: t('article_trading_psychology_essential_tips:p6_8'),
        p6_9: t('article_trading_psychology_essential_tips:p6_9'),
        p6_10: t('article_trading_psychology_essential_tips:p6_10'),
        p6_11: t('article_trading_psychology_essential_tips:p6_11'),
        p7_1: t('article_trading_psychology_essential_tips:p7_1'),
        p7_2: t('article_trading_psychology_essential_tips:p7_2'),
        p7_3: t('article_trading_psychology_essential_tips:p7_3'),
        p8_1: t('article_trading_psychology_essential_tips:p8_1'),
        p8_2: t('article_trading_psychology_essential_tips:p8_2'),
        p9_1: t('article_trading_psychology_essential_tips:p9_1'),
        p9_2: t('article_trading_psychology_essential_tips:p9_2'),
        p10_1: t('article_trading_psychology_essential_tips:p10_1'),
        p10_2: t('article_trading_psychology_essential_tips:p10_2'),
        p10_3: t('article_trading_psychology_essential_tips:p10_3'),
        p11_1: t('article_trading_psychology_essential_tips:p11_1'),
        p11_2: t('article_trading_psychology_essential_tips:p11_2'),
        p12_1: t('article_trading_psychology_essential_tips:p12_1'),
        p12_2: t('article_trading_psychology_essential_tips:p12_2'),
        p12_3: t('article_trading_psychology_essential_tips:p12_3'),
    }

    const hyperLink = [
        {
            phrase: blogTranslations.hyperLink,
            link: `${ENVIRONMENT_URL}/${locale}/blog/articles/trading-psychology-why-it-matters`
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
                    <Image src={image1} alt="image 1 for the blog" className="w-full" /> <br />

                    <ul className="flex flex-col gap-6 pl-8 list-disc">
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
                    <Image src={image3} alt="image 1 for the blog" className="w-full" /> <br />
                    {blogTranslations.p4_1} <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />
                    <strong className="text-white">{blogTranslations.p4_3}</strong> <br /> <br />
                    {blogTranslations.p4_4} <br /> <br />
                    {blogTranslations.p4_5} <br /> <br />
                    {blogTranslations.p4_6} <br /> <br />
                    <strong className="text-white">{blogTranslations.p4_7}</strong> <br /> <br />
                    {blogTranslations.p4_8} <br /> <br />
                    {blogTranslations.p4_9} <br /> <br />
                    <strong className="text-white">{blogTranslations.p4_10}</strong> <br /> <br />
                    {blogTranslations.p4_11} <br /> <br />
                    {blogTranslations.p4_12} <br /> <br />
                    {blogTranslations.p4_13} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    {blogTranslations.p5_1} <br /> <br />
                    <strong className="text-white">{blogTranslations.p5_2}</strong> <br /> <br />
                    {blogTranslations.p5_3} <br /> <br />
                    {blogTranslations.p5_4} <br /> <br />
                    <ul className="flex flex-col gap-6 pl-8 list-disc">
                        <li>{blogTranslations.p5_5}</li>
                        <li>{blogTranslations.p5_6}</li>
                        <li>{blogTranslations.p5_7}</li>
                        <li>{blogTranslations.p5_8}</li>
                        <li>{blogTranslations.p5_9}</li>
                    </ul> <br />
                    {blogTranslations.p5_10} <br /> <br />
                    {blogTranslations.p5_11} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
                    {blogTranslations.p6_1} <br /> <br />
                    <strong className="text-white">{blogTranslations.p6_2}</strong> <br /> <br />
                    {blogTranslations.p6_3} <br /> <br />
                    {blogTranslations.p6_4} <br /> <br />
                    {blogTranslations.p6_5} <br /> <br />
                    {blogTranslations.p6_6} <br /> <br />
                    {blogTranslations.p6_7} <br /> <br />
                    {blogTranslations.p6_8} <br /> <br />
                    {blogTranslations.p6_9} <br /> <br />
                    {blogTranslations.p6_10} <br /> <br />
                    {blogTranslations.p6_11} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
                    <Image src={image2} alt="image 1 for the blog" className="w-full" /> <br />
                    {blogTranslations.p7_1} <br /> <br />
                    {blogTranslations.p7_2} <br /> <br />
                    {blogTranslations.p7_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
                    {blogTranslations.p8_1} <br /> <br />
                    {blogTranslations.p8_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />
                    {blogTranslations.p9_1} <br /> <br />
                    {blogTranslations.p9_2} <br /> <br />
                    {blogTranslations.p9_3} <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />
                    {blogTranslations.p10_1} <br /> <br />
                    {blogTranslations.p10_2} <br /> <br />
                    {blogTranslations.p10_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t10}</h3><br />
                    {blogTranslations.p11_1} <br /> <br />
                    {blogTranslations.p11_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t11}</h3><br />
                    {blogTranslations.p12_1} <br /> <br />
                    {blogTranslations.p12_2} <br /> <br />
                    {blogTranslations.p12_3} <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Trading_Psychology_Essential_Tips_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="Mastering Trading Psychology: Essential Tips for Every Trader"
                        translation={blogTranslations.CTA} />
                    <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t12}</h3><br />

                    <strong className='text-white'>{blogTranslations.faq1_1} <br /> <br /></strong>
                    {blogTranslations.faq1_2} <br /> <br />

                    <strong className='text-white'>{blogTranslations.faq2_1} <br /> <br /></strong>
                    {blogTranslations.faq2_2} <br /> <br />

                    <strong className='text-white'>{blogTranslations.faq3_1} <br /> <br /></strong>
                    {blogTranslations.faq3_2} <br /> <br />

                    <strong className='text-white'>{blogTranslations.faq4_1} <br /> <br /></strong>
                    {blogTranslations.faq4_2} <br /> <br />

                    <strong className='text-white'>{blogTranslations.faq5_1} <br /> <br /></strong>
                    {blogTranslations.faq5_2} <br /> <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}