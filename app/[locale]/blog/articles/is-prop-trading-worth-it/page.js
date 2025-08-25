//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import image1 from './assets/Is Prop Trading Worth It_ - Blog photo 1.jpg'
import image2 from './assets/Is Prop Trading Worth It_ - Blog photo 2.jpg'
import image3 from './assets/Is Prop Trading Worth It_ - Blog photo 3.jpg'
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

const i18nNameSpaces = ["common", "blog_landing", "article_is_prop_trading_worth_it"];

//Params to bring the info from the db
const blogParam = "is-prop-trading-worth-it"

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
    h1_title: t('article_is_prop_trading_worth_it:h1_title'),
    p1: t('article_is_prop_trading_worth_it:p1'),
    p2: t('article_is_prop_trading_worth_it:p2'),
    p3: t('article_is_prop_trading_worth_it:p3'),
    p4: t('article_is_prop_trading_worth_it:p4'),
    p5_1: t('article_is_prop_trading_worth_it:p5_1'),
    p5_2: t('article_is_prop_trading_worth_it:p5_2'),
    p5_3: t('article_is_prop_trading_worth_it:p5_3'),
    p6: t('article_is_prop_trading_worth_it:p6'),
    p7_1: t('article_is_prop_trading_worth_it:p7_1'),
    p7_2: t('article_is_prop_trading_worth_it:p7_2'),
    p7_3: t('article_is_prop_trading_worth_it:p7_3'),
    p8_1: t('article_is_prop_trading_worth_it:p8_1'),
    p8_2: t('article_is_prop_trading_worth_it:p8_2'),
    p8_3: t('article_is_prop_trading_worth_it:p8_3'),
    p8_4: t('article_is_prop_trading_worth_it:p8_4'),
    p8_5: t('article_is_prop_trading_worth_it:p8_5'),
    p9_1: t('article_is_prop_trading_worth_it:p9_1'),
    p9_2: t('article_is_prop_trading_worth_it:p9_2'),
    p9_3: t('article_is_prop_trading_worth_it:p9_3'),
    p9_4: t('article_is_prop_trading_worth_it:p9_4'),
    p9_5: t('article_is_prop_trading_worth_it:p9_5'),
    p10_1: t('article_is_prop_trading_worth_it:p10_1'),
    p10_2: t('article_is_prop_trading_worth_it:p10_2'),
    p10_3: t('article_is_prop_trading_worth_it:p10_3'),
    p11_1: t('article_is_prop_trading_worth_it:p11_1'),
    p11_2: t('article_is_prop_trading_worth_it:p11_2'),
    p12_1: t('article_is_prop_trading_worth_it:p12_1'),
    p12_2: t('article_is_prop_trading_worth_it:p12_2'),
    p13_1: t('article_is_prop_trading_worth_it:p13_1'),
    p13_2: t('article_is_prop_trading_worth_it:p13_2'),
    p13_3: t('article_is_prop_trading_worth_it:p13_3'),
    p13_4: t('article_is_prop_trading_worth_it:p13_4'),
    p13_5: t('article_is_prop_trading_worth_it:p13_5'),
    p14_1: t('article_is_prop_trading_worth_it:p14_1'),
    p14_2: t('article_is_prop_trading_worth_it:p14_2'),
    p14_3: t('article_is_prop_trading_worth_it:p14_3'),
    p14_4: t('article_is_prop_trading_worth_it:p14_4'),
    p15_1: t('article_is_prop_trading_worth_it:p15_1'),
    p15_2: t('article_is_prop_trading_worth_it:p15_2'),
    p16_1: t('article_is_prop_trading_worth_it:p16_1'),
    p16_2: t('article_is_prop_trading_worth_it:p16_2'),
    p16_3: t('article_is_prop_trading_worth_it:p16_3'),
    p16_4: t('article_is_prop_trading_worth_it:p16_4'),
    t1: t('article_is_prop_trading_worth_it:t1'),
    t2: t('article_is_prop_trading_worth_it:t2'),
    t3: t('article_is_prop_trading_worth_it:t3'),
    t4: t('article_is_prop_trading_worth_it:t4'),
    t5: t('article_is_prop_trading_worth_it:t5'),
    t6: t('article_is_prop_trading_worth_it:t6'),
    t7: t('article_is_prop_trading_worth_it:t7'),
    t8: t('article_is_prop_trading_worth_it:t8'),
    t9: t('article_is_prop_trading_worth_it:t9'),
    t10: t('article_is_prop_trading_worth_it:t10'),
    faq1_1: t('article_is_prop_trading_worth_it:faq1_1'),
    faq1_2: t('article_is_prop_trading_worth_it:faq1_2'),
    faq2_1: t('article_is_prop_trading_worth_it:faq2_1'),
    faq2_2: t('article_is_prop_trading_worth_it:faq2_2'),
    faq3_1: t('article_is_prop_trading_worth_it:faq3_1'),
    faq3_2: t('article_is_prop_trading_worth_it:faq3_2'),
    faq4_1: t('article_is_prop_trading_worth_it:faq4_1'),
    faq4_2: t('article_is_prop_trading_worth_it:faq4_2'),
    hyperText_1: t('article_is_prop_trading_worth_it:hyperText_1'),
    hyperText_2: t('article_is_prop_trading_worth_it:hyperText_2'),
  }

  const textLinks = [
    { phrase: blogTranslations.hyperText_1, link: `https://discord.com/invite/9vUYq5FZnq` },
    { phrase: blogTranslations.hyperText_2, link: `https://app.toptiertrader.com/buy-challenge` },
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
          {blogTranslations.p2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t1}</h3><br />

          {blogTranslations.p3} <br /> <br />
          {blogTranslations.p4} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />

          {blogTranslations.p5_1} <br /> <br />
          {blogTranslations.p5_2} <br /> <br />
          {blogTranslations.p5_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />

          {blogTranslations.p6} <br /> <br />

          <BoldBeforeComa inputText={blogTranslations.p7_1} /> <br />
          <BoldBeforeComa inputText={blogTranslations.p7_2} /> <br />
          <BoldBeforeComa inputText={blogTranslations.p7_3} /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />

          <Image src={image1} alt='girl looking at bunch of screens' className="w-full"/> <br/>

          <strong className="text-white">{blogTranslations.p8_1}</strong><br /><br />

          <BoldBeforeComa inputText={blogTranslations.p8_2} /> <br />
          <BoldBeforeComa inputText={blogTranslations.p8_3} /> <br />
          <BoldBeforeComa inputText={blogTranslations.p8_4} /> <br />
          <BoldBeforeComa inputText={blogTranslations.p8_5} /> <br />

          <strong className="text-white">{blogTranslations.p9_1}</strong><br /><br />

          <BoldBeforeComa inputText={blogTranslations.p9_2} /> <br />
          <BoldBeforeComa inputText={blogTranslations.p9_3} /> <br />
          <BoldBeforeComa inputText={blogTranslations.p9_4} /> <br />
          <BoldBeforeComa inputText={blogTranslations.p9_5} /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />

          {blogTranslations.p10_1} <br /> <br />
          {blogTranslations.p10_2} <br /> <br />
          {blogTranslations.p10_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />

          {blogTranslations.p11_1} <br /> <br />
          {blogTranslations.p11_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />

          <Image src={image2} alt='girl looking at bunch of screens' className="w-full"/> <br/>

          {blogTranslations.p12_1} <br /> <br />
          {blogTranslations.p12_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.p13_1}</h3><br />

          {blogTranslations.p13_2} <br /> <br />
          {blogTranslations.p13_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.p13_4}</h3><br />

          {blogTranslations.p13_5} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.p14_1}</h3><br />

          {blogTranslations.p14_2} <br /> <br />
          {blogTranslations.p14_3} <br /> <br />
          {blogTranslations.p14_4} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />

          <Image src={image3} alt='girl looking at bunch of screens' className="w-full"/> <br/>

          {blogTranslations.p15_1} <br /> <br />
          {blogTranslations.p15_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />

          {blogTranslations.p16_1} <br /> <br />
          {blogTranslations.p16_2} <br /> <br />

          <strong className="text-white">{blogTranslations.p16_3}</strong> <HyperLink text={blogTranslations.p16_4} links={textLinks} />
          <br /> <br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Is_Prop_Trading_Worth_It_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Is Prop Trading Worth It"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t10}</h3><br />

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

