//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import BoldBeforeComa from "@/utils/blog/boldBeforeComa";
import HyperLink from "@/utils/blog/HyperLink";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import Image from "next/image";
import summaryTable from './assets/Summary Table.jpg'
import keyFeatures from './assets/Key Features and Rules.jpg'
import summaryTableSPA from './assets/Summary Table SPA.jpg'
import keyFeaturesSPA from './assets/Key Features and Rules SPA.jpg'
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

const i18nNameSpaces = ["common", "blog_landing", "article_toptier_new_website"];

//Params to bring the info from the db
const blogParam = "toptier-new-website"

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Discover TopTier Trader's New Website and One Phase Challenge",
  description: "Explore the revamped TopTier Trader platform and take on the One Phase Challenge. Designed for traders of all levels, it's your path to a funded account with fewer obstacles and greater opportunities.",
  keywords: "TopTier Trader, One Phase Challenge, funded trading, trading platform, trading rules, leverage, weekend trading, trading news",
  language: "en",
  subject: "TopTier Trader Website Redesign and One Phase Challenge",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Discover TopTier Trader's New Website and One Phase Challenge",
    description: "Explore the revamped TopTier Trader platform and take on the One Phase Challenge. Designed for traders of all levels, it's your path to a funded account with fewer obstacles and greater opportunities.",
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
  title: "Descubre el Nuevo Sitio Web de TopTier Trader y el One Phase Challenge",
  description: "Explora la renovada plataforma de TopTier Trader y participa en el One Phase Challenge. Diseñado para traders de todos los niveles, es tu camino hacia una cuenta fondeada con menos obstáculos y mayores oportunidades.",
  keywords: "TopTier Trader, One Phase Challenge, trading financiado, plataforma de trading, reglas de trading, apalancamiento, trading en fines de semana, noticias de trading",
  language: "es",
  subject: "Renovación del Sitio Web de TopTier Trader y One Phase Challenge",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Descubre el Nuevo Sitio Web de TopTier Trader y el One Phase Challenge",
    description: "Explora la renovada plataforma de TopTier Trader y participa en el One Phase Challenge. Diseñado para traders de todos los niveles, es tu camino hacia una cuenta fondeada con menos obstáculos y mayores oportunidades.",
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
  title: "Découvrez le Nouveau Site Web de TopTier Trader et le One Phase Challenge",
  description: "Explorez la plateforme réinventée de TopTier Trader et relevez le One Phase Challenge. Conçu pour les traders de tous niveaux, c'est votre chemin vers un compte financé avec moins d'obstacles et plus d'opportunités.",
  keywords: "TopTier Trader, One Phase Challenge, trading financé, plateforme de trading, règles de trading, effet de levier, trading le week-end, nouvelles de trading",
  language: "fr",
  subject: "Refonte du Site Web de TopTier Trader et One Phase Challenge",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Découvrez le Nouveau Site Web de TopTier Trader et le One Phase Challenge",
    description: "Explorez la plateforme réinventée de TopTier Trader et relevez le One Phase Challenge. Conçu pour les traders de tous niveaux, c'est votre chemin vers un compte financé avec moins d'obstacles et plus d'opportunités.",
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

  const table1 = locale === 'es' ? keyFeaturesSPA : keyFeatures
  const table2 = locale === 'es' ? summaryTableSPA : summaryTable

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
    h1_title: t('article_toptier_new_website:h1_title'),
    p1: t('article_toptier_new_website:p1'),
    p2_1: t('article_toptier_new_website:p2_1'),
    p2_2: t('article_toptier_new_website:p2_2'),
    t1: t('article_toptier_new_website:t1'),
    p3: t('article_toptier_new_website:p3'),
    p4_1: t('article_toptier_new_website:p4_1'),
    p4_2: t('article_toptier_new_website:p4_2'),
    p4_3: t('article_toptier_new_website:p4_3'),
    p4_4: t('article_toptier_new_website:p4_4'),
    p4_5: t('article_toptier_new_website:p4_5'),
    t2: t('article_toptier_new_website:t2'),
    p5: t('article_toptier_new_website:p5'),
    p6: t('article_toptier_new_website:p6'),
    p7: t('article_toptier_new_website:p7'),
    p8: t('article_toptier_new_website:p8'),
    p9_1: t('article_toptier_new_website:p9_1'),
    p9_2: t('article_toptier_new_website:p9_2'),
    p9_3: t('article_toptier_new_website:p9_3'),
    t3: t('article_toptier_new_website:t3'),
    t4: t('article_toptier_new_website:t4'),
    p10_1: t('article_toptier_new_website:p10_1'),
    p10_2: t('article_toptier_new_website:p10_2'),
    p11: t('article_toptier_new_website:p11'),
    hyperText: t('article_toptier_new_website:hyperText')
  }

  const hyperLinkText = [
    { phrase: blogTranslations.hyperText, link: `${ENVIRONMENT_URL}/${locale}` },
  ]

  const linkhref = locale === 'es' ? 'https://help.toptiertrader.com/es/collections/11021150-challenge-de-una-fase' : 'https://help.toptiertrader.com/en/collections/11021150-1-phase-challenge'

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
          {/* <User date={'Dec 3 2024'} userImg={userImg} /> */}

          {blogTranslations.p1} <br /><br />
          {blogTranslations.p2_1} <br /><br />
          {blogTranslations.p2_2} <br /><br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />

          {blogTranslations.p3} <br /><br />

          <ul className="list-disc flex flex-col pl-4 gap-2">
            <li><BoldBeforeComa inputText={blogTranslations.p4_1} prefix={''} /></li>
            <li><BoldBeforeComa inputText={blogTranslations.p4_2} prefix={''} /></li>
            <li><BoldBeforeComa inputText={blogTranslations.p4_3} prefix={''} /></li>
            <li><BoldBeforeComa inputText={blogTranslations.p4_4} prefix={''} /></li>
            <li><BoldBeforeComa inputText={blogTranslations.p4_5} prefix={''} /></li>
          </ul> <br /><br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />

          <BoldBeforeComa inputText={blogTranslations.p5} prefix={'1. '} /><br /><br />

          {/* table 1 here */}
          <Image alt="blog image" src={table1} loading="lazy" className="w-full" /><br /><br />

          <BoldBeforeComa inputText={blogTranslations.p6} prefix={'2. '} /><br /><br />
          <BoldBeforeComa inputText={blogTranslations.p7} prefix={'3. '} /><br /><br />
          <BoldBeforeComa inputText={blogTranslations.p8} prefix={'4. '} /><br /><br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />

          <ul className="list-disc flex flex-col pl-4 gap-2">
            <li><BoldBeforeComa inputText={blogTranslations.p9_1} prefix={''} /></li>
            <li><BoldBeforeComa inputText={blogTranslations.p9_2} prefix={''} /></li>
            <li><BoldBeforeComa inputText={blogTranslations.p9_3} prefix={''} /></li>
          </ul> <br /><br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />

          {/* table 2 here */}
          <Image alt="blog image" src={table2} loading="lazy" className="w-full" /><br /><br />

          <a target="_blank" href={linkhref} className="underline text-ttorange hover:brightness-150 cursor-pointer">{blogTranslations.p10_1}</a> <br /><br />
          {blogTranslations.p10_2}<br /><br />

          <HyperLink text={blogTranslations.p11} links={hyperLinkText} />  <br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=TopTierNewWebsite_Blog&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="TopTier New Website"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

