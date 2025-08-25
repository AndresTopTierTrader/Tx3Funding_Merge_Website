//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import imageEN from './assets/Limitless - Blog 2.jpg'
import imageES from './assets/Limitless - Blog 2 SPA.jpg'
import { bgImageStyleBlog } from "@/constants/styles"
import Content from "../../../../../components/blog/Content";
import BoldBeforeComa from "@/utils/blog/boldBeforeComa";
import HyperLink from "@/utils/blog/HyperLink";

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

const i18nNameSpaces = ["common", "blog_landing", "article_toptier_trader_pro_and_flex"];

//Params to bring the info from the db
const blogParam = "toptier-trader-pro-vs-flex"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "TopTier Trader Pro & Flex: Trade Your Way with TT",
    description:
        "Discover the difference between TopTier Trader Pro and Flex. Choose between unlimited potential with Pro or a structured, affordable approach with Flex. Find the best path for your trading journey today!",
    keywords: "TopTier Trader Pro, TopTier Trader Flex, prop firm, trading plans, best prop firm 2025, structured trading, unlimited potential, 2% daily profit cap",
    language: "en",
    subject: "Prop Trading Plans",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "TopTier Trader Pro & Flex: Trade Your Way with TT",
        description:
            "Discover the difference between TopTier Trader Pro and Flex. Choose between unlimited potential with Pro or a structured, affordable approach with Flex. Find the best path for your trading journey today!",
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
    title: "TopTier Trader Pro Vs Flex: Opera a Tu Manera con TT",
    description:
        "Descubre la diferencia entre TopTier Trader Pro y Flex. Elige entre el potencial ilimitado de Pro o un enfoque estructurado y accesible con Flex. Encuentra el mejor camino para tu viaje en el trading hoy mismo!",
    keywords: "TopTier Trader Pro, TopTier Trader Flex, prop firm, planes de trading, mejor prop firm 2025, trading estructurado, potencial ilimitado, límite de ganancia diaria 2%",
    language: "es",
    subject: "Planes de Prop Trading",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "TopTier Trader Pro Vs Flex: Opera a Tu Manera con TT",
        description:
            "Descubre la diferencia entre TopTier Trader Pro y Flex. Elige entre el potencial ilimitado de Pro o un enfoque estructurado y accesible con Flex. Encuentra el mejor camino para tu viaje en el trading hoy mismo!",
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
    title: "TopTier Trader Pro & Flex: Tradez à Votre Façon avec TT",
    description:
        "Découvrez la différence entre TopTier Trader Pro et Flex. Choisissez entre un potentiel illimité avec Pro ou une approche structurée et abordable avec Flex. Trouvez le meilleur chemin pour votre parcours de trading dès aujourd'hui!",
    keywords: "TopTier Trader Pro, TopTier Trader Flex, prop firm, plans de trading, meilleure prop firm 2025, trading structuré, potentiel illimité, limite de gain quotidien 2%",
    language: "fr",
    subject: "Plans de Prop Trading",
    coverage: "Mondial",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "TopTier Trader Pro & Flex: Tradez à Votre Façon avec TT",
        description:
            "Découvrez la différence entre TopTier Trader Pro et Flex. Choisissez entre un potentiel illimité avec Pro ou une approche structurée et abordable avec Flex. Trouvez le meilleur chemin pour votre parcours de trading dès aujourd'hui!",
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
        h1_title: t('article_toptier_trader_pro_and_flex:h1_title'),
        CTA: t('article_toptier_trader_pro_and_flex:CTA'),
        t1: t('article_toptier_trader_pro_and_flex:t1'),
        t2: t('article_toptier_trader_pro_and_flex:t2'),
        t3: t('article_toptier_trader_pro_and_flex:t3'),
        t4: t('article_toptier_trader_pro_and_flex:t4'),
        p1_1: t('article_toptier_trader_pro_and_flex:p1_1'),
        p1_2: t('article_toptier_trader_pro_and_flex:p1_2'),
        p2_1: t('article_toptier_trader_pro_and_flex:p2_1'),
        p2_2: t('article_toptier_trader_pro_and_flex:p2_2'),
        p3_1: t('article_toptier_trader_pro_and_flex:p3_1'),
        p3_2: t('article_toptier_trader_pro_and_flex:p3_2'),
        p3_3: t('article_toptier_trader_pro_and_flex:p3_3'),
        p3_4: t('article_toptier_trader_pro_and_flex:p3_4'),
        p3_5: t('article_toptier_trader_pro_and_flex:p3_5'),
        p3_6: t('article_toptier_trader_pro_and_flex:p3_6'),
        p3_7: t('article_toptier_trader_pro_and_flex:p3_7'),
        p4_1: t('article_toptier_trader_pro_and_flex:p4_1'),
        p4_2: t('article_toptier_trader_pro_and_flex:p4_2'),
        p4_3: t('article_toptier_trader_pro_and_flex:p4_3'),
        p4_4: t('article_toptier_trader_pro_and_flex:p4_4'),
        p4_5: t('article_toptier_trader_pro_and_flex:p4_5'),
        p4_6: t('article_toptier_trader_pro_and_flex:p4_6'),
        p4_7: t('article_toptier_trader_pro_and_flex:p4_7'),
        p4_8: t('article_toptier_trader_pro_and_flex:p4_8'),
        p4_9: t('article_toptier_trader_pro_and_flex:p4_8'),
        p5_1: t('article_toptier_trader_pro_and_flex:p5_1'),
        p5_2: t('article_toptier_trader_pro_and_flex:p5_2'),
        p5_3: t('article_toptier_trader_pro_and_flex:p5_3'),
        p5_4: t('article_toptier_trader_pro_and_flex:p5_4'),
        p5_5: t('article_toptier_trader_pro_and_flex:p5_5'),
        p5_6: t('article_toptier_trader_pro_and_flex:p5_6'),
        p5_7: t('article_toptier_trader_pro_and_flex:p5_7'),
        p5_8: t('article_toptier_trader_pro_and_flex:p5_8'),
        p5_9: t('article_toptier_trader_pro_and_flex:p5_9'),
        p5_10: t('article_toptier_trader_pro_and_flex:p5_10'),
        p6_1: t('article_toptier_trader_pro_and_flex:p6_1'),
        p6_2: t('article_toptier_trader_pro_and_flex:p6_2'),
        p6_3: t('article_toptier_trader_pro_and_flex:p6_3'),
        p6_4: t('article_toptier_trader_pro_and_flex:p6_4'),
        hyperLink: t('article_toptier_trader_pro_and_flex:hyperLink'),
    }

    const hyperLinks = [
        { phrase: blogTranslations.hyperLink, link: `${ENVIRONMENT_URL}/${locale}/products/challenges` }
    ]

    const image = mainLang === 'es' ? imageES : imageEN


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
                    {blogTranslations.p2_2} <br /> <br />                    

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
                    {blogTranslations.p3_1} <br /> <br />
                    <ul className="flex flex-col list-disc gap-6 pl-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_2}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_3}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_4}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p3_5}/>
                        </li>
                    </ul> <br />
                    {blogTranslations.p3_6} <br /> <br />
                    {blogTranslations.p3_7} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
                    {blogTranslations.p4_1} <br /> <br />
                    <ul className="flex flex-col list-disc gap-6 pl-6">
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_2}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_3}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_4}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_5}/>
                        </li>
                        <li>
                            <BoldBeforeComa inputText={blogTranslations.p4_6}/>
                        </li>
                        <li>
                            {blogTranslations.p4_7}
                        </li>
                    </ul> <br />
                    {blogTranslations.p4_8} <br /> <br />
                    {blogTranslations.p4_9} <br /> <br />

                    <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
                    <Image src={image} alt="comparison image" className="w-full"/> <br/>
                    <strong className="text-white">{blogTranslations.p5_1}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc gap-6 pl-6">
                        <li>{blogTranslations.p5_2}</li>
                        <li>{blogTranslations.p5_3}</li>
                        <li>{blogTranslations.p5_4}</li>
                        <li>{blogTranslations.p5_5}</li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.p5_6}</strong> <br /> <br />
                    <ul className="flex flex-col list-disc gap-6 pl-6">
                        <li>{blogTranslations.p5_7}</li>
                        <li>{blogTranslations.p5_8}</li>
                        <li>{blogTranslations.p5_9}</li>
                        <li>{blogTranslations.p5_10}</li>
                    </ul> <br />

                    {blogTranslations.p6_1} <br /> <br />
                    {blogTranslations.p6_2} <br /> <br />
                    {blogTranslations.p6_3} <br /> <br />
                    <HyperLink text={blogTranslations.p6_4} links={hyperLinks}/> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Toptier_Trader_Pro_Vs_Flex_Blog_CTA&hcategory=Mar2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="Toptier Trader Pro & Flex : Trade Your Way with TT"
                        translation={blogTranslations.CTA} />
                    <br />

                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}