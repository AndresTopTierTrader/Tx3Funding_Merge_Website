//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import Head from 'next/head';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { bgImageStyleBlog } from "@/constants/styles"
import { ENVIRONMENT_URL } from "@/constants/global";

//Lazy loading for components
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

//Params to bring the info from the db
const blogParam = "toptier-academy"

const metadata_en = {
  title: "TopTier Academy Plus: Supercharge Your Forex Education",
  description: "Elevate your forex trading skills with TopTier Academy Plus, our premium subscription service featuring exclusive access to expert-led classes, mentorship, and a supportive community.",
  keywords: "TopTier Academy Plus, forex education, forex trading, premium forex education, expert traders, interactive learning, community support",
  language: "en",
  subject: "Premium Forex Education: TopTier Academy Plus",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "TopTier Academy Plus: Supercharge Your Forex Education",
    description: "Elevate your forex trading skills with TopTier Academy Plus, our premium subscription service featuring exclusive access to expert-led classes, mentorship, and a supportive community.",
    image: "",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`,
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
  title: "TopTier Academy Plus: Impulsa tu Educación en Forex",
  description: "Eleva tus habilidades en trading de forex con TopTier Academy Plus, nuestro servicio de suscripción premium con acceso exclusivo a clases impartidas por expertos, mentoría y una comunidad de apoyo.",
  keywords: "TopTier Academy Plus, educación forex, trading forex, educación forex premium, traders expertos, aprendizaje interactivo, apoyo comunitario",
  language: "es",
  subject: "Educación Forex Premium: TopTier Academy Plus",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "TopTier Academy Plus: Impulsa tu Educación en Forex",
    description: "Eleva tus habilidades en trading de forex con TopTier Academy Plus, nuestro servicio de suscripción premium con acceso exclusivo a clases impartidas por expertos, mentoría y una comunidad de apoyo.",
    image: "",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/blog/articles/${blogParam}`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/blog/articles/${blogParam}`,
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
  title: "TopTier Academy Plus : Boostez votre Éducation sur le Forex",
  description: "Élévez vos compétences de trading Forex avec TopTier Academy Plus, notre service d'abonnement premium avec un accès exclusif à des cours dispensés par des experts, un mentorat et une communauté de soutien.",
  keywords: "TopTier Academy Plus, éducation forex, trading forex, éducation forex premium, traders experts, apprentissage interactif, soutien communautaire",
  language: "fr",
  subject: "Éducation Forex Premium : TopTier Academy Plus",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "TopTier Academy Plus : Boostez votre Éducation sur le Forex",
    description: "Élévez vos compétences de trading Forex avec TopTier Academy Plus, notre service d'abonnement premium avec un accès exclusif à des cours dispensés par des experts, un mentorat et une communauté de soutien.",
    image: "",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/blog/articles/${blogParam}`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/blog/articles/${blogParam}`,
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


const i18nNameSpaces = ["common", "blog_landing", "article_toptier_academy"];

export default async function Page({ params: { locale } }) {
  const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);

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

  const translatedTexts = {
    h1_title: t('article_toptier_academy:h1_title'),
    p1: t('article_toptier_academy:p1'),
    t1: t('article_toptier_academy:t1'),
    p2: t('article_toptier_academy:p2'),
    p3: t('article_toptier_academy:p3'),
    p4: t('article_toptier_academy:p4'),
    t2: t('article_toptier_academy:t2'),
    p5_1: t('article_toptier_academy:p5_1'),
    p5_2: t('article_toptier_academy:p5_2'),
    p5_3: t('article_toptier_academy:p5_3'),
    p5_4: t('article_toptier_academy:p5_4'),
    p5_5: t('article_toptier_academy:p5_5'),
    p5_6: t('article_toptier_academy:p5_6'),
    p6: t('article_toptier_academy:p6'),
    p7_1: t('article_toptier_academy:p7_1'),
    p7_2: t('article_toptier_academy:p7_2'),
    p7_3: t('article_toptier_academy:p7_3'),
    p7_4: t('article_toptier_academy:p7_4'),
    p7_5: t('article_toptier_academy:p7_5'),
    t3: t('article_toptier_academy:t3'),
    p8: t('article_toptier_academy:p8'),
    p9: t('article_toptier_academy:p9'),
    p10: t('article_toptier_academy:p10'),
    p11: t('article_toptier_academy:p11'),
    btn: t('article_toptier_academy:btn')
  }

  

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >
      <Head>
        <link rel="alternate" hreflang="en" href={`${ENVIRONMENT_URL}/en/blog/articles/${blogParam}`} />
        <link rel="alternate" hreflang="es" href={`${ENVIRONMENT_URL}/es/blog/articles/${blogParam}`} />
      </Head>

      <Content currentLanguage={i18n.language} params={blogParam} translations={headContentTranslations} locale={locale} />

      {/* Article Content */}
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5">
        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {translatedTexts.h1_title}</h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Sep 23 2024'} userImg={userImg} /> */}

          {translatedTexts.p1} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t1}</h3><br />


          {translatedTexts.p2} <br /><br />
          {translatedTexts.p3} <br /><br />
          {translatedTexts.p4} <br /><br />

          {translatedTexts.p5_1} <br /><br />
          <div className="pl-4 ">
            <p className="font-semibold">  {translatedTexts.p5_2} <br /><br /></p>

            <p className="font-semibold -mt-4">  {translatedTexts.p5_3} <br /><br /></p>
            <div className="pl-8">
              - {translatedTexts.p5_4} <br />
              - {translatedTexts.p5_5} <br />
              - {translatedTexts.p5_6} <br /><br />
            </div>
          </div>

          {translatedTexts.p6} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t2}</h3><br />

          {translatedTexts.p7_1} <br /><br />
          <div className="pl-8">
            - {translatedTexts.p7_2} <br /><br />
            - {translatedTexts.p7_3} <br /><br />
            - {translatedTexts.p7_4} <br /><br />
            - {translatedTexts.p7_5} <br /><br />
          </div>

          {translatedTexts.p8} <br /><br />

          <h3 className="font-semibold text-2xl">  {translatedTexts.t3}</h3><br />

          {translatedTexts.p9} <br /><br />

          <Link target="_blank" href={`${ENVIRONMENT_URL}/${locale}/academy-plus`} className="-my-4 " >
            <button className="px-8 justify-center py-4 my-0 rounded-md bg-ttorange font-semibold text-white transition-all flex flex-row hover:bg-[#FF532D]">
              <p>   {translatedTexts.btn}</p>
              <FaArrowRight className="ml-2 mt-1" />
            </button>
          </Link><br /><br />

          {translatedTexts.p10} <br /><br />

          <Link target="_blank" href={`https://discord.gg/x3hFEKPZp4`} className="-my-4 mb:-mT-10" >
            <button className="px-8 py-4 my-0 rounded-md bg-[#5165F6] font-semibold text-white transition-all hover:bg-[#FF532D] flex flex-row">
              <p> Join TopTier Academy Discord</p>
              <FaDiscord className="ml-2 w-8 h-6" />
            </button>
          </Link><br />

          {translatedTexts.p11} <br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=TopTierAcademyPlus_Blog&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="TopTier Academy"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} />
    </TranslationsProvider>
  )
}
