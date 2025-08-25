//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import CtaButton from "@/components/common/Buttons/CtaButton";
import Image from "next/image";
import image from "./assets/TopTier Lifts Restrictions on 11 Countries - 1.jpg"
import { bgImageStyleBlog } from "@/constants/styles"
import Content from "../../../../../components/blog/Content";

const FinalSectionLazyLoading = dynamic(() => import("@/components/common/FinalSection/Final-Section"), {
    ssr: true,
    loading: () => <div className="flex flex-col items-center justify-center w-full py-10 mb:flex-row rounded-xl">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <p className="mt-5 ml-3 text-xl text-white mb:ml-5 mb:mt-0">Loading Latest Resources...</p>
    </div>
})

const i18nNameSpaces = ["common", "blog_landing", "article_toptier_lift_restrictions"];

//Params to bring the info from the db
const blogParam = "toptier-lift-restrictions"

const metadata_en = {
    metadataBase: new URL(`${ENVIRONMENT_URL}`),
    title: "TopTier Trader Lifts Restrictions on 11 Countries in 2025: Global Trading Access Restored",
    description: "TopTier Trader officially unbans 11 countries in 2025, restoring access to Vietnam, Egypt, Pakistan, Germany, India, Turkey, Romania, Kenya, Czech Republic, Nigeria, and Ethiopia. Join our global prop firm community.",
    keywords: "TopTier Trader unbanned countries, prop firm country restrictions lifted, Vietnam Egypt Pakistan Germany India Turkey Romania Kenya Czech Republic Nigeria Ethiopia, global prop firm access, international trading opportunities, 2025 country unban",
    language: "en",
    subject: "TopTier Trader Country Restrictions Lifted and Global Expansion",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "TopTier Trader Lifts Restrictions on 11 Countries in 2025: Global Trading Access Restored",
        description: "Major expansion: 11 previously banned countries can now access TopTier Trader's prop firm services. Enhanced challenge programs and global trading opportunities await.",
        image: "",
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
    title: "TopTier Trader Levanta Restricciones en 11 Países en 2025: Acceso Global al Trading Restaurado",
    description: "TopTier Trader oficialmente desbloquea 11 países en 2025, restaurando acceso a Vietnam, Egipto, Pakistán, Alemania, India, Turquía, Rumania, Kenia, República Checa, Nigeria y Etiopía.",
    keywords: "TopTier Trader países desbloqueados, restricciones prop firm levantadas, Vietnam Egipto Pakistán Alemania India Turquía Rumania Kenia República Checa Nigeria Etiopía, acceso prop firm global, oportunidades trading internacional, desbloqueo países 2025",
    language: "es",
    subject: "Restricciones de Países de TopTier Trader Levantadas y Expansión Global",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "TopTier Trader Levanta Restricciones en 11 Países en 2025: Acceso Global al Trading Restaurado",
        description: "Gran expansión: 11 países previamente prohibidos ahora pueden acceder a los servicios de prop firm de TopTier Trader. Programas de desafío mejorados y oportunidades globales de trading esperan.",
        image: "",
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
    title: "TopTier Trader Lève les Restrictions sur 11 Pays en 2025: Accès Global au Trading Restauré",
    description: "TopTier Trader débloque officiellement 11 pays en 2025, restaurant l'accès au Vietnam, Égypte, Pakistan, Allemagne, Inde, Turquie, Roumanie, Kenya, République Tchèque, Nigeria et Éthiopie.",
    keywords: "TopTier Trader pays débloqués, restrictions société trading levées, Vietnam Égypte Pakistan Allemagne Inde Turquie Roumanie Kenya République Tchèque Nigeria Éthiopie, accès société trading global, opportunités trading international, déblocage pays 2025",
    language: "fr",
    subject: "Restrictions de Pays de TopTier Trader Levées et Expansion Mondiale",
    coverage: "Mondial",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader",
    og: {
        type: "article",
        title: "TopTier Trader Lève les Restrictions sur 11 Pays en 2025: Accès Global au Trading Restauré",
        description: "Expansion majeure: 11 pays précédemment interdits peuvent maintenant accéder aux services de société de trading de TopTier Trader. Programmes de défi améliorés et opportunités de trading mondiales vous attendent.",
        image: "",
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
        h1_title: t('article_toptier_lift_restrictions:h1_title'),
        CTA: t('article_toptier_lift_restrictions:CTA'),
        t1: t('article_toptier_lift_restrictions:t1'),
        t2: t('article_toptier_lift_restrictions:t2'),
        t3: t('article_toptier_lift_restrictions:t3'),
        t4: t('article_toptier_lift_restrictions:t4'),
        t5: t('article_toptier_lift_restrictions:t5'),
        t6: t('article_toptier_lift_restrictions:t6'),
        p1: t('article_toptier_lift_restrictions:p1'),
        p2: t('article_toptier_lift_restrictions:p2'),
        p3_1: t('article_toptier_lift_restrictions:p3_1'),
        p3_2: t('article_toptier_lift_restrictions:p3_2'),
        p3_3: t('article_toptier_lift_restrictions:p3_3'),
        p3_4: t('article_toptier_lift_restrictions:p3_4'),
        p3_5: t('article_toptier_lift_restrictions:p3_5'),
        p3_6: t('article_toptier_lift_restrictions:p3_6'),
        p3_7: t('article_toptier_lift_restrictions:p3_7'),
        p3_8: t('article_toptier_lift_restrictions:p3_8'),
        p3_9: t('article_toptier_lift_restrictions:p3_9'),
        p3_10: t('article_toptier_lift_restrictions:p3_10'),
        p3_11: t('article_toptier_lift_restrictions:p3_11'),
        p4_1: t('article_toptier_lift_restrictions:p4_1'),
        p4_2: t('article_toptier_lift_restrictions:p4_2'),
        p4_3: t('article_toptier_lift_restrictions:p4_3'),
        p4_4: t('article_toptier_lift_restrictions:p4_4'),
        p4_5: t('article_toptier_lift_restrictions:p4_5'),
        p4_6: t('article_toptier_lift_restrictions:p4_6'),
        p4_7: t('article_toptier_lift_restrictions:p4_7'),
        p5_1: t('article_toptier_lift_restrictions:p5_1'),
        p5_2: t('article_toptier_lift_restrictions:p5_2'),
        p6_1: t('article_toptier_lift_restrictions:p6_1'),
        p6_2: t('article_toptier_lift_restrictions:p6_2'),
        p6_3: t('article_toptier_lift_restrictions:p6_3'),
        p6_4: t('article_toptier_lift_restrictions:p6_4'),
        p6_5: t('article_toptier_lift_restrictions:p6_5'),
        p6_6: t('article_toptier_lift_restrictions:p6_6'),
        p6_7: t('article_toptier_lift_restrictions:p6_7'),
        p6_8: t('article_toptier_lift_restrictions:p6_8'),
        p6_9: t('article_toptier_lift_restrictions:p6_9'),
        p6_10: t('article_toptier_lift_restrictions:p6_10'),
        p6_11: t('article_toptier_lift_restrictions:p6_11'),
        p6_12: t('article_toptier_lift_restrictions:p6_12'),
        p6_13: t('article_toptier_lift_restrictions:p6_13'),
        p6_14: t('article_toptier_lift_restrictions:p6_14'),
        p7_1: t('article_toptier_lift_restrictions:p7_1'),
        p7_2: t('article_toptier_lift_restrictions:p7_2'),
        p7_3: t('article_toptier_lift_restrictions:p7_3'),
        p7_4: t('article_toptier_lift_restrictions:p7_4'),
        p7_5: t('article_toptier_lift_restrictions:p7_5'),
        p7_6: t('article_toptier_lift_restrictions:p7_6'),
        p8_1: t('article_toptier_lift_restrictions:p8_1'),
        p8_2: t('article_toptier_lift_restrictions:p8_2'),
        p8_3: t('article_toptier_lift_restrictions:p8_3'),
        p8_4: t('article_toptier_lift_restrictions:p8_4'),
        p9_1: t('article_toptier_lift_restrictions:p9_1'),
        p9_2: t('article_toptier_lift_restrictions:p9_2'),
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

                    {blogTranslations.p1} <br /> <br />
                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t1}</h3><br />
                    {blogTranslations.p2} <br /> <br />

                    <ol className="flex flex-col gap-4 pl-6 list-decimal">
                        <li>{blogTranslations.p3_1}</li>
                        <li>{blogTranslations.p3_2}</li>
                        <li>{blogTranslations.p3_3}</li>
                        <li>{blogTranslations.p3_4}</li>
                        <li>{blogTranslations.p3_5}</li>
                        <li>{blogTranslations.p3_6}</li>
                        <li>{blogTranslations.p3_7}</li>
                        <li>{blogTranslations.p3_8}</li>
                        <li>{blogTranslations.p3_9}</li>
                        <li>{blogTranslations.p3_10}</li>
                        <li>{blogTranslations.p3_11}</li>
                    </ol> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t2}</h3><br />

                    <strong className="text-white">{blogTranslations.p4_1}</strong> <br /> <br />
                    {blogTranslations.p4_2} <br /> <br />
                    {blogTranslations.p4_3} <br /> <br />
                    <ul className="flex flex-col gap-4 pl-6 list-disc">
                        <li>{blogTranslations.p4_4}</li>
                        <li>{blogTranslations.p4_5}</li>
                        <li>{blogTranslations.p4_6}</li>
                    </ul> <br />
                    {blogTranslations.p4_7} <br /> <br />

                    <strong className="text-white">{blogTranslations.p5_1}</strong> <br /> <br />
                    {blogTranslations.p5_2} <br /> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t3}</h3><br />
                    {blogTranslations.p6_1} <br /> <br />
                    <strong className="text-white">{blogTranslations.p6_2}</strong> <br /> <br />
                    {blogTranslations.p6_3} <br /> <br />
                    <ul className="flex flex-col gap-4 pl-6 list-disc">
                        <li>{blogTranslations.p6_4}</li>
                        <li>{blogTranslations.p6_5}</li>
                        <li>{blogTranslations.p6_6}</li>
                        <li>{blogTranslations.p6_7}</li>
                        <li>{blogTranslations.p6_8}</li>
                    </ul> <br />
                    <strong className="text-white">{blogTranslations.p6_9}</strong> <br /> <br />
                    <Image src={image} alt="image" className="w-full" /> <br />
                    <ul className="flex flex-col gap-4 pl-6 list-disc">
                        <li>{blogTranslations.p6_10}</li>
                        <li>{blogTranslations.p6_11}</li>
                        <li>{blogTranslations.p6_12}</li>
                        <li>{blogTranslations.p6_13}</li>
                        <li>{blogTranslations.p6_14}</li>
                    </ul> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t4}</h3><br />
                    {blogTranslations.p7_1} <br /> <br />
                    <ul className="flex flex-col gap-4 pl-6 list-disc">
                        <li>{blogTranslations.p7_2}</li>
                        <li>{blogTranslations.p7_3}</li>
                        <li>{blogTranslations.p7_4}</li>
                    </ul> <br />
                    {blogTranslations.p7_5} <br /> <br />
                    <a className="underline" href={`${ENVIRONMENT_URL}/blog/articles/toptier-trader-pro-vs-flex`}>{blogTranslations.p7_6}</a> <br /> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t5}</h3><br />
                    <ol className="flex flex-col gap-4 pl-6 list-decimal">
                        <li>
                            <a className="underline" href={`${ENVIRONMENT_URL}`}>{blogTranslations.p8_1}</a>
                        </li>
                        <li>{blogTranslations.p8_2}</li>
                        <li>{blogTranslations.p8_3}</li>
                        <li>{blogTranslations.p8_4}</li>
                    </ol> <br />

                    <h3 className="text-2xl font-semibold text-white">{blogTranslations.t6}</h3><br />
                    {blogTranslations.p9_1} <br /> <br />
                    {blogTranslations.p9_1} <br /> <br />

                    <CtaButton
                        utm="https://app.toptiertrader.com/buy-challenge/?el=Best_One_Step_Prop_Firm_Blog_CTA&hcategory=Mar2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                        page="Blog"
                        section="TopTier Trader Lifts Restrictions on 11 Countries in 2025"
                        translation={blogTranslations.CTA} />
                    <br />
                </article>
            </div>
            <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
        </TranslationsProvider>
    )
}