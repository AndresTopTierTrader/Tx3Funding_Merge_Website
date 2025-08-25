//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
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

const i18nNameSpaces = ["common", "blog_landing", "article_how_many_trading_days"];

//Params to bring the info from the db
const blogParam = "how-many-trading-days"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "How Many Trading Days in a Year? Your 2025 Guide",
    description: "Discover how many trading days are in 2025, the impact of market holidays, weekends, and key events on stock exchanges like NYSE and LSE.",
    keywords: "how many trading days in a year, trading days 2025, NYSE trading schedule, LSE market holidays, stock market hours, trading strategies",
    language: "en",
    subject: "Stock Market Trading Schedule",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "How Many Trading Days in a Year? Your 2025 Guide",
        description: "Learn the total number of trading days in 2025, including market holidays and weekend closures, to optimize your trading strategies.",
        image: "",
        site_name: "Toptier Trader",
        url: `${ENVIRONMENT_URL}/en/blog/articles/how-many-trading-days-in-a-year`
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
    title: "¿Cuántos días de negociación hay en un año? Guía 2025",
    description: "Descubre cuántos días de negociación hay en 2025 y cómo los feriados del mercado, los fines de semana y los eventos clave afectan la bolsa.",
    keywords: "cuántos días de negociación hay en un año, días de negociación 2025, NYSE horario de mercado, festivos bursátiles LSE, estrategias de trading",
    language: "es",
    subject: "Calendario de Negociación en el Mercado de Valores",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "¿Cuántos días de negociación hay en un año? Guía 2025",
        description: "Conoce el número total de días de negociación en 2025, incluidos los días festivos del mercado y los cierres de fin de semana.",
        image: "",
        site_name: "Toptier Trader",
        url: `${ENVIRONMENT_URL}/es/blog/articles/cuantos-dias-de-negociacion-hay-en-un-ano`
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
    title: "Combien de jours de négociation y a-t-il en une année ? Guide 2025",
    description: "Découvrez combien de jours de négociation il y aura en 2025 et comment les jours fériés du marché, les week-ends et les événements clés influencent la bourse.",
    keywords: "combien de jours de négociation en une année, jours de négociation 2025, horaires du marché NYSE, jours fériés boursiers LSE, stratégies de trading",
    language: "fr",
    subject: "Calendrier de négociation sur le marché boursier",
    coverage: "Global",
    robots: "index, follow",
    author: "Toptier Trader",
    publisher: "Toptier Trader",
    og: {
        type: "article",
        title: "Combien de jours de négociation y a-t-il en une année ? Guide 2025",
        description: "Découvrez le nombre total de jours de négociation en 2025, y compris les jours fériés du marché et les fermetures de week-end.",
        image: "",
        site_name: "Toptier Trader",
        url: `${ENVIRONMENT_URL}/fr/blog/articles/combien-de-jours-de-negociation-en-une-annee`
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
        h1_title: t('article_how_many_trading_days:h1_title'),
        CTA: t('article_how_many_trading_days:CTA'),
        faq1_1: t('article_how_many_trading_days:faq1_1'),
        faq1_2: t('article_how_many_trading_days:faq1_2'),
        faq2_1: t('article_how_many_trading_days:faq2_1'),
        faq2_2: t('article_how_many_trading_days:faq2_2'),
        faq3_1: t('article_how_many_trading_days:faq3_1'),
        faq3_2: t('article_how_many_trading_days:faq3_2'),
        faq4_1: t('article_how_many_trading_days:faq4_1'),
        faq4_2: t('article_how_many_trading_days:faq4_2'),
        faq5_1: t('article_how_many_trading_days:faq5_1'),
        faq5_2: t('article_how_many_trading_days:faq5_2'),
        t1: t('article_how_many_trading_days:t1'),
        t2: t('article_how_many_trading_days:t2'),
        t3: t('article_how_many_trading_days:t3'),
        t4: t('article_how_many_trading_days:t4'),
        t5: t('article_how_many_trading_days:t5'),
        t6: t('article_how_many_trading_days:t6'),
        t7: t('article_how_many_trading_days:t7'),
        t8: t('article_how_many_trading_days:t8'),
        t9: t('article_how_many_trading_days:t9'),
        t10: t('article_how_many_trading_days:t10'),
        t11: t('article_how_many_trading_days:t11'),
        t12: t('article_how_many_trading_days:t12'),
        t13: t('article_how_many_trading_days:t13'),
        t14: t('article_how_many_trading_days:t14'),
        t15: t('article_how_many_trading_days:t15'),
        t16: t('article_how_many_trading_days:t16'),
        t17: t('article_how_many_trading_days:t17'),
        t18: t('article_how_many_trading_days:t18'),
        t19: t('article_how_many_trading_days:t19'),
        p1_1: t('article_how_many_trading_days:p1_1'),
        p1_2: t('article_how_many_trading_days:p1_2'),
        p2_1: t('article_how_many_trading_days:p2_1'),
        p2_2: t('article_how_many_trading_days:p2_2'),
        p2_3: t('article_how_many_trading_days:p2_3'),
        p2_4: t('article_how_many_trading_days:p2_4'),
        p3_1: t('article_how_many_trading_days:p3_1'),
        p3_2: t('article_how_many_trading_days:p3_2'),
        p3_3: t('article_how_many_trading_days:p3_3'),
        p3_4: t('article_how_many_trading_days:p3_4'),
        p4: t('article_how_many_trading_days:p4'),
        p5_1: t('article_how_many_trading_days:p5_1'),
        p5_2: t('article_how_many_trading_days:p5_2'),
        p5_3: t('article_how_many_trading_days:p5_3'),
        p5_4: t('article_how_many_trading_days:p5_4'),
        p6_1: t('article_how_many_trading_days:p6_1'),
        p6_2: t('article_how_many_trading_days:p6_2'),
        p6_3: t('article_how_many_trading_days:p6_3'),
        p6_4: t('article_how_many_trading_days:p6_4'),
        p7_1: t('article_how_many_trading_days:p7_1'),
        p7_2: t('article_how_many_trading_days:p7_2'),
        p7_3: t('article_how_many_trading_days:p7_3'),
        p8_1: t('article_how_many_trading_days:p8_1'),
        p8_2: t('article_how_many_trading_days:p8_2'),
        p9_1: t('article_how_many_trading_days:p9_1'),
        p9_2: t('article_how_many_trading_days:p9_2'),
        p10_1: t('article_how_many_trading_days:p10_1'),
        p10_2: t('article_how_many_trading_days:p10_2'),
        p10_3: t('article_how_many_trading_days:p10_3'),
        p10_4: t('article_how_many_trading_days:p10_4'),
        p10_5: t('article_how_many_trading_days:p10_5'),
        p10_6: t('article_how_many_trading_days:p10_6'),
        p10_7: t('article_how_many_trading_days:p10_7'),
        p10_8: t('article_how_many_trading_days:p10_8'),
        p10_9: t('article_how_many_trading_days:p10_9'),
        p10_10: t('article_how_many_trading_days:p10_10'),
        p10_11: t('article_how_many_trading_days:p10_11'),
        p10_12: t('article_how_many_trading_days:p10_12'),
        p10_13: t('article_how_many_trading_days:p10_13'),
        p10_14: t('article_how_many_trading_days:p10_14'),
        p10_15: t('article_how_many_trading_days:p10_15'),
        p10_16: t('article_how_many_trading_days:p10_16'),
        p10_17: t('article_how_many_trading_days:p10_17'),
        p10_18: t('article_how_many_trading_days:p10_18'),
        p11_1: t('article_how_many_trading_days:p11_1'),
        p11_2: t('article_how_many_trading_days:p11_2'),
        p12_1: t('article_how_many_trading_days:p12_1'),
        p12_2: t('article_how_many_trading_days:p12_2'),
        p12_3: t('article_how_many_trading_days:p12_3'),
        p12_4: t('article_how_many_trading_days:p12_4'),
        p12_5: t('article_how_many_trading_days:p12_5'),
        p12_6: t('article_how_many_trading_days:p12_6'),
        p12_7: t('article_how_many_trading_days:p12_7'),
        p12_8: t('article_how_many_trading_days:p12_8'),
        p13_1: t('article_how_many_trading_days:p13_1'),
        p13_2: t('article_how_many_trading_days:p13_2'),
        p14_1: t('article_how_many_trading_days:p14_1'),
        p14_2: t('article_how_many_trading_days:p14_2'),
        p14_3: t('article_how_many_trading_days:p14_3'),
        p15_1: t('article_how_many_trading_days:p15_1'),
        p15_2: t('article_how_many_trading_days:p15_2'),
        p16_1: t('article_how_many_trading_days:p16_1'),
        p16_2: t('article_how_many_trading_days:p16_2'),
        p16_3: t('article_how_many_trading_days:p16_3'),
        p16_4: t('article_how_many_trading_days:p16_4'),
        p16_5: t('article_how_many_trading_days:p16_5'),
        p16_6: t('article_how_many_trading_days:p16_6'),
        p17_1: t('article_how_many_trading_days:p17_1'),
        p17_2: t('article_how_many_trading_days:p17_2'),
        p17_3: t('article_how_many_trading_days:p17_3'),
        p18_1: t('article_how_many_trading_days:p18_1'),
        p18_2: t('article_how_many_trading_days:p18_2'),
        p19_1: t('article_how_many_trading_days:p19_1'),
        p19_2: t('article_how_many_trading_days:p19_2'),
        p19_3: t('article_how_many_trading_days:p19_3'),
        p20_1: t('article_how_many_trading_days:p20_1'),
        p20_2: t('article_how_many_trading_days:p20_2'),
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

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />

                    <ul className="pl-6 flex flex-col list-disc gap-6">
                        <li>{blogTranslations.p2_1}</li>
                        <li>{blogTranslations.p2_2}</li>
                        <li>{blogTranslations.p2_3}</li>
                        <li>{blogTranslations.p2_4}</li>
                    </ul> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />

                    {blogTranslations.p3_1} <br /> <br />
                    {blogTranslations.p3_2} <br /> <br />
                    {blogTranslations.p3_3} <br /> <br />
                    {blogTranslations.p3_4} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    {blogTranslations.p4} <br /> <br />

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

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />

                    {blogTranslations.p8_1} <br /> <br />
                    {blogTranslations.p8_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />

                    {blogTranslations.p9_1} <br /> <br />
                    {blogTranslations.p9_2} <br /> <br />

                    {blogTranslations.p10_1} <br /> <br />
                    <ul className="pl-6 flex flex-col list-disc gap-6">
                        <li>{blogTranslations.p10_2}</li>
                        <li>{blogTranslations.p10_3}</li>
                        <li>{blogTranslations.p10_4}</li>
                        <li>{blogTranslations.p10_5}</li>
                        <li>{blogTranslations.p10_6}</li>
                        <li>{blogTranslations.p10_7}</li>
                        <li>{blogTranslations.p10_8}</li>
                        <li>{blogTranslations.p10_9}</li>
                        <li>{blogTranslations.p10_10}</li>
                        <li>{blogTranslations.p10_11}</li>
                        <li>{blogTranslations.p10_12}</li>
                    </ul> <br /> <br />

                    {blogTranslations.p10_13} <br /> <br />

                    <ul className="pl-6 flex flex-col list-disc gap-6">
                        <li>{blogTranslations.p10_13}</li>
                        <li>{blogTranslations.p10_14}</li>
                        <li>{blogTranslations.p10_15}</li>
                        <li>{blogTranslations.p10_16}</li>
                        <li>{blogTranslations.p10_17}</li>
                    </ul> <br />

                    {blogTranslations.p10_18} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />

                    {blogTranslations.p11_1} <br /> <br />
                    {blogTranslations.p11_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t10}</h3><br />

                    {blogTranslations.p12_1} <br /> <br />
                    {blogTranslations.p12_2} <br /> <br />
                    {blogTranslations.p12_3} <br /> <br />
                    {blogTranslations.p12_4} <br /> <br />

                    <ul className="pl-6 flex flex-col list-disc gap-6">
                        <li>{blogTranslations.p12_5}</li>
                        <li>{blogTranslations.p12_6}</li>
                        <li>{blogTranslations.p12_7}</li>
                    </ul> <br />

                    {blogTranslations.p12_8} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t11}</h3><br />

                    {blogTranslations.p13_1} <br /> <br />
                    {blogTranslations.p13_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t12}</h3><br />

                    {blogTranslations.p14_1} <br /> <br />
                    {blogTranslations.p14_2} <br /> <br />
                    {blogTranslations.p14_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t13}</h3><br />

                    {blogTranslations.p15_1} <br /> <br />
                    {blogTranslations.p15_2} <br /> <br />


                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t14}</h3><br />

                    {blogTranslations.p16_1} <br /> <br />
                    {blogTranslations.p16_2} <br /> <br />

                    <ul className="pl-6 flex flex-col list-disc gap-6">
                        <li>{blogTranslations.p16_3}</li>
                        <li>{blogTranslations.p16_4}</li>
                        <li>{blogTranslations.p16_5}</li>
                    </ul> <br />

                    {blogTranslations.p16_6} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t15}</h3><br />

                    {blogTranslations.p17_1} <br /> <br />
                    {blogTranslations.p17_2} <br /> <br />
                    {blogTranslations.p17_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t16}</h3><br />

                    {blogTranslations.p18_1} <br /> <br />
                    {blogTranslations.p18_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t17}</h3><br />

                    {blogTranslations.p19_1} <br /> <br />
                    {blogTranslations.p19_2} <br /> <br />
                    {blogTranslations.p19_3} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t18}</h3><br />

                    {blogTranslations.p20_1} <br /> <br />
                    {blogTranslations.p20_2} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t19}</h3><br />

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

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=How_Many_Trading_Days_In_A_Year_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="How Many Trading Days in a Year"
                        translation={blogTranslations.CTA} />
                    <br />

                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}