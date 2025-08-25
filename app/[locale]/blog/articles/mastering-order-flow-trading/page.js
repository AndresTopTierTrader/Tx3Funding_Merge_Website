//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import chartImage from './assets/chartImage.png'
import Image from "next/image";
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

const i18nNameSpaces = ["common", "blog_landing", "article_mastering_order_flow_trading"];

//Params to bring the info from the db
const blogParam = "mastering-order-flow-trading"

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Is Prop Trading Worth It? Exploring Opportunities and Challenges",
  description: "Explore if prop trading is worth it. Uncover opportunities, challenges, and potential profits in proprietary trading.",
  keywords: "Is Prop Trading Worth It, profit split, profit target, prop firms, risk management rules, trading simulator, trading strategies, prop trading firm, trading strategy",
  language: "en",
  subject: "Proprietary Trading Opportunities and Challenges",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Is Prop Trading Worth It? Exploring Opportunities and Challenges",
    description: "Explore if prop trading is worth it. Uncover opportunities, challenges, and potential profits in proprietary trading.",
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
  title: "¿Vale la pena el trading propietario? Explorando oportunidades y desafíos",
  description: "Descubre si el trading propietario vale la pena. Conoce las oportunidades, desafíos y ganancias potenciales.",
  keywords: "¿Vale la pena el trading propietario?, distribución de ganancias, objetivo de ganancias, firmas propietarias, reglas de gestión de riesgos, simulador de trading, estrategias de trading, estrategia de trading",
  language: "es",
  subject: "Oportunidades y desafíos del trading propietario",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "¿Vale la pena el trading propietario? Explorando oportunidades y desafíos",
    description: "Descubre si el trading propietario vale la pena. Conoce las oportunidades, desafíos y ganancias potenciales.",
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
  title: "Le Prop Trading en Vaut-il la Peine ? Opportunités et Défis",
  description: "Découvrez si le prop trading en vaut la peine. Explorez les opportunités, les défis et les profits potentiels du trading pour compte propre.",
  keywords: "Le Prop Trading en Vaut-il la Peine, partage des profits, objectif de profit, sociétés de prop trading, règles de gestion des risques, simulateur de trading, stratégies de trading, société de prop trading, stratégie de trading",
  language: "fr",
  subject: "Opportunités et Défis du Trading pour Compte Propre",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Le Prop Trading en Vaut-il la Peine ? Opportunités et Défis",
    description: "Découvrez si le prop trading en vaut la peine. Explorez les opportunités, les défis et les profits potentiels du trading pour compte propre.",
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
    h1_title: t('article_mastering_order_flow_trading:h1_title'),
    t1: t('article_mastering_order_flow_trading:t1'),
    t2: t('article_mastering_order_flow_trading:t2'),
    t3: t('article_mastering_order_flow_trading:t3'),
    t4: t('article_mastering_order_flow_trading:t4'),
    t5: t('article_mastering_order_flow_trading:t5'),
    t6: t('article_mastering_order_flow_trading:t6'),
    t7: t('article_mastering_order_flow_trading:t7'),
    t8: t('article_mastering_order_flow_trading:t8'),
    t9: t('article_mastering_order_flow_trading:t9'),
    t10: t('article_mastering_order_flow_trading:t10'),
    t11: t('article_mastering_order_flow_trading:t11'),
    t12: t('article_mastering_order_flow_trading:t12'),
    t13: t('article_mastering_order_flow_trading:t13'),
    p1_1: t('article_mastering_order_flow_trading:p1_1'),
    p1_2: t('article_mastering_order_flow_trading:p1_2'),
    p2_1: t('article_mastering_order_flow_trading:p2_1'),
    p2_2: t('article_mastering_order_flow_trading:p2_2'),
    p3_1: t('article_mastering_order_flow_trading:p3_1'),
    p3_2: t('article_mastering_order_flow_trading:p3_2'),
    p4_1: t('article_mastering_order_flow_trading:p4_1'),
    p4_2: t('article_mastering_order_flow_trading:p4_2'),
    p4_3: t('article_mastering_order_flow_trading:p4_3'),
    p4_4: t('article_mastering_order_flow_trading:p4_4'),
    p4_5: t('article_mastering_order_flow_trading:p4_5'),
    p4_6: t('article_mastering_order_flow_trading:p4_6'),
    p5_1: t('article_mastering_order_flow_trading:p5_1'),
    p5_2: t('article_mastering_order_flow_trading:p5_2'),
    p5_3: t('article_mastering_order_flow_trading:p5_3'),
    p5_4: t('article_mastering_order_flow_trading:p5_4'),
    p5_5: t('article_mastering_order_flow_trading:p5_5'),
    p5_6: t('article_mastering_order_flow_trading:p5_6'),
    p6_1: t('article_mastering_order_flow_trading:p6_1'),
    p6_2: t('article_mastering_order_flow_trading:p6_2'),
    p6_3: t('article_mastering_order_flow_trading:p6_3'),
    p7_1: t('article_mastering_order_flow_trading:p7_1'),
    p7_2: t('article_mastering_order_flow_trading:p7_2'),
    p8_1: t('article_mastering_order_flow_trading:p8_1'),
    p8_2: t('article_mastering_order_flow_trading:p8_2'),
    p8_3: t('article_mastering_order_flow_trading:p8_3'),
    p9_1: t('article_mastering_order_flow_trading:p9_1'),
    p9_2: t('article_mastering_order_flow_trading:p9_2'),
    p9_3: t('article_mastering_order_flow_trading:p9_3'),
    p9_4: t('article_mastering_order_flow_trading:p9_4'),
    p9_5: t('article_mastering_order_flow_trading:p9_5'),
    p9_6: t('article_mastering_order_flow_trading:p9_6'),
    p10_1: t('article_mastering_order_flow_trading:p10_1'),
    p10_2: t('article_mastering_order_flow_trading:p10_2'),
    p10_3: t('article_mastering_order_flow_trading:p10_3'),
    p10_4: t('article_mastering_order_flow_trading:p10_4'),
    p11_1: t('article_mastering_order_flow_trading:p11_1'),
    p11_2: t('article_mastering_order_flow_trading:p11_2'),
    p11_3: t('article_mastering_order_flow_trading:p11_3'),
    p11_4: t('article_mastering_order_flow_trading:p11_4'),
    p12_1: t('article_mastering_order_flow_trading:p12_1'),
    p12_2: t('article_mastering_order_flow_trading:p12_2'),
    p12_3: t('article_mastering_order_flow_trading:p12_3'),
    p12_4: t('article_mastering_order_flow_trading:p12_4'),
    faq1_1: t('article_mastering_order_flow_trading:faq1_1'),
    faq1_2: t('article_mastering_order_flow_trading:faq1_2'),
    faq2_1: t('article_mastering_order_flow_trading:faq2_1'),
    faq2_2: t('article_mastering_order_flow_trading:faq2_2'),
    faq3_1: t('article_mastering_order_flow_trading:faq3_1'),
    faq3_2: t('article_mastering_order_flow_trading:faq3_2'),
    faq4_1: t('article_mastering_order_flow_trading:faq4_1'),
    faq4_2: t('article_mastering_order_flow_trading:faq4_2'),
    hyperLink: t('article_mastering_order_flow_trading:hyperLink'),
    CTA: t('article_mastering_order_flow_trading:CTA')
  }

  const textLinks = [
    { phrase: blogTranslations.hyperLink, link: `${ENVIRONMENT_URL}/${locale}/products/challenges` },
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

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />
          {blogTranslations.p1_1} <br /> <br />
          {blogTranslations.p1_2} <br /> <br />

          <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/hbv8YH5xINc?si=QZmq2b6rTnrEao55" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
          {blogTranslations.p2_1} <br /> <br />
          {blogTranslations.p2_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
          {blogTranslations.p3_1} <br /> <br />
          {blogTranslations.p3_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
          <ul className="flex flex-col gap-4 list-disc pl-4">
            <li>
              {blogTranslations.p4_1}
            </li>
            <li>
              {blogTranslations.p4_2}
            </li>
            <li>
              {blogTranslations.p4_3}
            </li>
            <li>
              {blogTranslations.p4_4}
            </li>
            <li>
              {blogTranslations.p4_5}
            </li>
          </ul> <br /> <br />
          {blogTranslations.p4_6} <br /> <br />

          <Image src={chartImage} alt='girl looking at bunch of screens' className="w-full" /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
          {blogTranslations.p5_1} <br /> <br />
          <ul className="flex flex-col gap-4 list-disc pl-4">
            <li>
              <BoldBeforeComa inputText={blogTranslations.p5_2} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p5_3} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p5_4} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p5_5} />
            </li>
          </ul> <br /> <br />
          {blogTranslations.p5_6} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
          {blogTranslations.p6_1} <br /> <br />
          {blogTranslations.p6_2} <br /> <br />
          {blogTranslations.p6_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
          {blogTranslations.p7_1} <br /> <br />
          <ul className="flex flex-col gap-4 list-disc pl-4">
            <li>
              <BoldBeforeComa inputText={blogTranslations.p7_2} />
            </li>
          </ul> <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />
          {blogTranslations.p8_1} <br /> <br />
          {blogTranslations.p8_2} <br /> <br />
          {blogTranslations.p8_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />
          {blogTranslations.p9_1} <br /> <br />
          <ul className="flex flex-col gap-4 list-disc pl-4">
            <li>
              <BoldBeforeComa inputText={blogTranslations.p9_2} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p9_3} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p9_4} />
            </li>
            <li>
              <BoldBeforeComa inputText={blogTranslations.p9_5} />
            </li>
          </ul> <br /> <br />
          {blogTranslations.p9_6} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t10}</h3><br />
          <ul className="flex flex-col gap-4 list-disc pl-4">
            <li>
              {blogTranslations.p10_1}
            </li>
            <li>
              {blogTranslations.p10_2}
            </li>
            <li>
              {blogTranslations.p10_3}
            </li>
            <li>
              {blogTranslations.p10_4}
            </li>
          </ul> <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t11}</h3><br />
          <ul className="flex flex-col gap-4 list-disc pl-4">
            <li>
              {blogTranslations.p11_1}
            </li>
            <li>
              {blogTranslations.p11_2}
            </li>
            <li>
              {blogTranslations.p11_3}
            </li>
            <li>
              {blogTranslations.p11_4}
            </li>
          </ul> <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t12}</h3><br />
          {blogTranslations.p12_1} <br /> <br />
          {blogTranslations.p12_2} <br /> <br />
          <strong className="text-white font-bold">{blogTranslations.p12_3} <br /> <br /></strong>
          <HyperLink text={blogTranslations.p12_4} links={textLinks} /> <br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Order_Flow_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Mastering Order Flow Trading"
            translation={blogTranslations.CTA} />
          <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t13}</h3><br />

          <strong className='text-white'>{blogTranslations.faq1_1} <br /> <br /></strong>
          {blogTranslations.faq1_2} <br /> <br />

          <strong className='text-white'>{blogTranslations.faq2_1} <br /> <br /></strong>
          {blogTranslations.faq2_2} <br /> <br />

          <strong className='text-white'>{blogTranslations.faq3_1} <br /> <br /></strong>
          {blogTranslations.faq3_2} <br /> <br />

          <strong className='text-white'>{blogTranslations.faq4_1} <br /> <br /></strong>
          {blogTranslations.faq4_2} <br /> <br />


        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

