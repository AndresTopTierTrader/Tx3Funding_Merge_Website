//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import Image from "next/image";
import image1 from './assets/image 1.png'
import image2 from './assets/image 2.png'
import image3 from './assets/image 3.png'
import image4 from './assets/image 4.png'
import image5 from './assets/image 5.png'
import image6 from './assets/image 6.png'

import { bgImageStyleBlog } from "@/constants/styles"

import Content from "../../../../../components/blog/Content";
import HyperLink from "@/utils/blog/HyperLink";
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

const i18nNameSpaces = ["common", "blog_landing", "article_tradezella"];

//Params to bring the info from the db
const blogParam = "tradezella"

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Tradezella: Effective Journaling for Forex Traders",
  description: "Discover how Tradezella transforms trade journaling with automation, analytics, and mentorship to improve profitability for forex traders.",
  keywords: "Tradezella, trading journal, forex traders, trade analytics, trading strategies, journaling tools, mentor mode, data-driven trading",
  language: "en",
  subject: "Effective Trade Journaling for Forex Traders",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Tradezella: Effective Journaling for Forex Traders",
    description: "Discover how Tradezella transforms trade journaling with automation, analytics, and mentorship to improve profitability for forex traders.",
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
  title: "Tradezella: Diario Eficiente para Traders de Forex",
  description: "Descubre cómo Tradezella transforma el registro de operaciones con automatización, análisis y mentoría para mejorar la rentabilidad de los traders de forex.",
  keywords: "Tradezella, diario de trading, traders de forex, análisis de operaciones, estrategias de trading, herramientas de registro, modo mentor, trading basado en datos",
  language: "es",
  subject: "Diario de Operaciones Eficiente para Traders de Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Tradezella: Diario Eficiente para Traders de Forex",
    description: "Descubre cómo Tradezella transforma el registro de operaciones con automatización, análisis y mentoría para mejorar la rentabilidad de los traders de forex.",
    image: "",
    site_name: "Toptier Trader",
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
  title: "Tradezella : Journal Efficace pour les Traders Forex",
  description: "Découvrez comment Tradezella transforme le journal de trading avec automatisation, analyses et mentorat pour améliorer la rentabilité des traders forex.",
  keywords: "Tradezella, journal de trading, traders forex, analyse des trades, stratégies de trading, outils de journalisation, mode mentor, trading axé sur les données",
  language: "fr",
  subject: "Journal de Trading Efficace pour les Traders Forex",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Tradezella : Journal Efficace pour les Traders Forex",
    description: "Découvrez comment Tradezella transforme le journal de trading avec automatisation, analyses et mentorat pour améliorer la rentabilité des traders forex.",
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
    h1_title: t('article_tradezella:h1_title'),
    CTA: t('article_tradezella:CTA'),
    t1: t('article_tradezella:t1'),
    t2: t('article_tradezella:t2'),
    t3: t('article_tradezella:t3'),
    t4: t('article_tradezella:t4'),
    t5: t('article_tradezella:t5'),
    t6: t('article_tradezella:t6'),
    t7: t('article_tradezella:t7'),
    t8: t('article_tradezella:t8'),
    hyperLink_1: t('article_tradezella:hyperLink_1'),
    hyperLink_2: t('article_tradezella:hyperLink_2'),
    hyperLink_3: t('article_tradezella:hyperLink_3'),
    hyperLink_4: t('article_tradezella:hyperLink_4'),
    faq1_1: t('article_tradezella:faq1_1'),
    faq1_2: t('article_tradezella:faq1_2'),
    faq1_3: t('article_tradezella:faq1_3'),
    faq1_4: t('article_tradezella:faq1_4'),
    faq1_5: t('article_tradezella:faq1_5'),
    p1_1: t('article_tradezella:p1_1'),
    p1_2: t('article_tradezella:p1_2'),
    p2: t('article_tradezella:p2'),
    p3_1: t('article_tradezella:p3_1'),
    p3_2: t('article_tradezella:p3_2'),
    p3_3: t('article_tradezella:p3_3'),
    p3_4: t('article_tradezella:p3_4'),
    p3_5: t('article_tradezella:p3_5'),
    p3_6: t('article_tradezella:p3_6'),
    p4_1: t('article_tradezella:p4_1'),
    p4_2: t('article_tradezella:p4_2'),
    p4_3: t('article_tradezella:p4_3'),
    p4_4: t('article_tradezella:p4_4'),
    p4_5: t('article_tradezella:p4_5'),
    p5_1: t('article_tradezella:p5_1'),
    p5_2: t('article_tradezella:p5_2'),
    p5_3: t('article_tradezella:p5_3'),
    p5_4: t('article_tradezella:p5_4'),
    p5_5: t('article_tradezella:p5_5'),
    p6_1: t('article_tradezella:p6_1'),
    p6_2: t('article_tradezella:p6_2'),
    p6_2_1: t('article_tradezella:p6_2_1'),
    p6_2_2: t('article_tradezella:p6_2_2'),
    p6_3: t('article_tradezella:p6_3'),
    p6_3_1: t('article_tradezella:p6_3_1'),
    p6_3_2: t('article_tradezella:p6_3_2'),
    p6_4: t('article_tradezella:p6_4'),
    p6_4_1: t('article_tradezella:p6_4_1'),
    p6_4_2: t('article_tradezella:p6_4_2'),
    p6_4_3: t('article_tradezella:p6_4_3'),
    p6_5: t('article_tradezella:p6_5'),
    p7_1: t('article_tradezella:p7_1'),
    p7_2: t('article_tradezella:p7_2'),
    p7_3: t('article_tradezella:p7_3'),
    p7_4: t('article_tradezella:p7_4'),
    p7_5: t('article_tradezella:p7_5'),
    p8: t('article_tradezella:p8'),
    p9_1: t('article_tradezella:p9_1'),
    p9_2: t('article_tradezella:p9_2'),
    p9_3: t('article_tradezella:p9_3'),
    p9_4: t('article_tradezella:p9_4'),
    p10_1: t('article_tradezella:p10_1'),
    p10_2: t('article_tradezella:p10_2'),
    p10_3: t('article_tradezella:p10_3'),
    p10_4: t('article_tradezella:p10_4'),
    p10_5: t('article_tradezella:p10_5'),
    p10_6: t('article_tradezella:p10_6'),
    p11_1: t('article_tradezella:p11_1'),
    p11_2: t('article_tradezella:p11_2'),
    p12_1: t('article_tradezella:p12_1'),
    p12_2: t('article_tradezella:p12_2'),
  }

  const textLinks_1 = [
    { phrase: blogTranslations.hyperLink_1, link: `https://tradelocker.com/how-to/connect-tradelocker-with-tradezella/` },
  ]

  const textLinks_2 = [
    { phrase: blogTranslations.hyperLink_2, link: `https://www.tradezella.com/features` },
  ]

  const textLinks_3 = [
    { phrase: blogTranslations.hyperLink_3, link: `${ENVIRONMENT_URL}/${locale}` },
  ]

  const textLinks_4 = [
    { phrase: blogTranslations.hyperLink_4, link: `https://www.tradezella.com/` },
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

          {blogTranslations.p1_1} <br /> <br />
          {blogTranslations.p1_2} <br /> <br />
          {blogTranslations.p2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />

          <strong className='text-white'>{blogTranslations.p3_1} <br /> <br /></strong>

          <Image src={image1} alt='' className="w-full" /> <br />

          <HyperLink links={textLinks_1} text={blogTranslations.p3_2} /> <br />
          <strong className='text-white'>{blogTranslations.p3_3} <br /> <br /></strong>
          {blogTranslations.p3_4} <br /> <br />
          <strong className='text-white'>{blogTranslations.p3_5} <br /> <br /></strong>
          {blogTranslations.p3_6} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />

          <Image src={image2} alt='' className="w-full" /> <br />

          <HyperLink links={textLinks_2} text={blogTranslations.p4_1} /> <br />
          <ul className="list-disc pl-6 flex flex-col gap-6">
            <li>
              <BoldBeforeComa inputText={blogTranslations.p4_2} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p4_3} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p4_4} />
            </li>
          </ul> <br />
          {blogTranslations.p4_5} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />

          <Image src={image3} alt='' className="w-full" /> <br />

          {blogTranslations.p5_1} <br /> <br />
          <ul className="list-disc pl-6 flex flex-col gap-6">
            <li>
              <BoldBeforeComa inputText={blogTranslations.p5_2} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p5_3} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p5_4} />
            </li>
          </ul> <br />
          {blogTranslations.p5_5} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />

          <Image src={image4} alt='' className="w-full" /> <br />

          {blogTranslations.p6_1} <br /> <br />

          <strong className='text-white'>1. {blogTranslations.p6_2} <br /> <br /></strong>
          <ul className="list-disc pl-6 flex flex-col gap-6">
            <li>
              {blogTranslations.p6_2_1}
            </li>
            <li>
              {blogTranslations.p6_2_2}
            </li>
          </ul> <br />

          <strong className='text-white'>2. {blogTranslations.p6_3} <br /> <br /></strong>
          <ul className="list-disc pl-6 flex flex-col gap-6">
            <li>
              {blogTranslations.p6_3_1}
            </li>
            <li>
              {blogTranslations.p6_3_2}
            </li>
          </ul> <br />

          <strong className='text-white'>1. {blogTranslations.p6_4} <br /> <br /></strong>
          <ul className="list-disc pl-6 flex flex-col gap-6">
            <li>
              {blogTranslations.p6_4_1}
            </li>
            <li>
              {blogTranslations.p6_4_2}
            </li>
            <li>
              {blogTranslations.p6_4_3}
            </li>
          </ul> <br />
          {blogTranslations.p6_5} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />

          <Image src={image5} alt='' className="w-full" /> <br />

          {blogTranslations.p7_1} <br /> <br />
          <ul className="list-disc pl-6 flex flex-col gap-6">
            <li>
              <BoldBeforeComa inputText={blogTranslations.p7_2} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p7_3} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p7_4} />
            </li>
          </ul> <br />
          {blogTranslations.p7_5} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
          {blogTranslations.p8} <br /> <br />

          <Image src={image6} alt='' className="w-full" /> <br />

          <strong className='text-white'>{blogTranslations.p9_1} <br /> <br /></strong>
          <ul className="list-disc pl-6 flex flex-col gap-6">
            <li>
              <BoldBeforeComa inputText={blogTranslations.p9_2} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p9_3} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p9_4} />
            </li>
          </ul> <br />

          <strong className='text-white'>{blogTranslations.p10_1} <br /> <br /></strong>
          <ul className="list-disc pl-6 flex flex-col gap-6">
            <li>
              <BoldBeforeComa inputText={blogTranslations.p10_2} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p10_3} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p10_4} />
            </li>
          </ul> <br />
          {blogTranslations.p10_5} <br /> <br />
          {blogTranslations.p10_6} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
          {blogTranslations.p11_1} <br /> <br />
          {blogTranslations.p11_2} <br /> <br />

          <strong className='text-white'>{blogTranslations.p12_1} <br /> <br /></strong>
          <HyperLink text={blogTranslations.p12_2} links={textLinks_3} /> <br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Tradezella_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Tradezella"
            translation={blogTranslations.CTA} />
          <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />

          <strong className='text-white'>{blogTranslations.faq1_1} <br /> <br /></strong>
          <HyperLink text={blogTranslations.faq1_2} links={textLinks_4} /> <br />
          <ul className="list-disc pl-6 flex flex-col gap-6">
            <li>
              <BoldBeforeComa inputText={blogTranslations.faq1_3} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.faq1_4} />
            </li>
          </ul> <br />
          {blogTranslations.faq1_5} <br /> <br />



        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

