//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import {ENVIRONMENT_URL} from "@/constants/global";

//Images
import Image from "next/image";
import image1 from './assets/Futures Prop Firms - Blog photo 01.jpg'
import image2 from './assets/Futures Prop Firms - Blog photo 02.jpg'
import image3 from './assets/Futures Prop Firms - Blog photo 03.jpg'
import { bgImageStyleBlog } from "@/constants/styles"
import { FaArrowRight } from "react-icons/fa";

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

const i18nNameSpaces = ["common", "blog_landing", "article_futures_prop_firms"];

//Params to bring the info from the db
const blogParam = "futures-prop-firms"

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Futures Prop Firms: Your Guide to the Best Trading Opportunities",
  description: "Explore the world of futures prop trading. Learn about top firms, trading strategies, and opportunities to grow your trading skills and profits.",
  keywords: "Futures prop firms, trading opportunities, futures trading, prop trading strategies, risk management, TX3 Funding, trading education, advanced trading tools",
  language: "en",
  subject: "Comprehensive Guide to Futures Prop Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Futures Prop Firms: Your Guide to the Best Trading Opportunities",
    description: "Explore the world of futures prop trading. Learn about top firms, trading strategies, and opportunities to grow your trading skills and profits.",
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
  title: "Empresas de Trading Propietario de Futuros: Tu Guía a las Mejores Oportunidades",
  description: "Explora el mundo del trading propietario de futuros. Aprende sobre las mejores firmas, estrategias de trading y oportunidades para mejorar tus habilidades y ganancias.",
  keywords: "Empresas de trading propietario, oportunidades de trading, trading de futuros, estrategias de trading, gestión de riesgos, TX3 Funding, educación en trading, herramientas avanzadas de trading",
  language: "es",
  subject: "Guía Completa del Trading Propietario de Futuros",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Empresas de Trading Propietario de Futuros: Tu Guía a las Mejores Oportunidades",
    description: "Explora el mundo del trading propietario de futuros. Aprende sobre las mejores firmas, estrategias de trading y oportunidades para mejorar tus habilidades y ganancias.",
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
  title: "Firms de Trading Prop Futures: Votre Guide des Meilleures Opportunités",
  description: "Explorez le monde du trading pour compte propre sur les contrats à terme. Apprenez-en plus sur les meilleures entreprises, les stratégies de trading et les opportunités pour développer vos compétences et profits.",
  keywords: "Firms de trading prop, opportunités de trading, trading de futurs, stratégies de trading, gestion des risques, TX3 Funding, éducation au trading, outils de trading avancés",
  language: "fr",
  subject: "Guide Complet sur le Trading Prop Futures",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Firms de Trading Prop Futures: Votre Guide des Meilleures Opportunités",
    description: "Explorez le monde du trading pour compte propre sur les contrats à terme. Apprenez-en plus sur les meilleures entreprises, les stratégies de trading et les opportunités pour développer vos compétences et profits.",
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
    h1_title: t('article_futures_prop_firms:h1_title'),
    CTA: t('article_futures_prop_firms:CTA'),
    t1: t('article_futures_prop_firms:t1'),
    t2: t('article_futures_prop_firms:t2'),
    t3: t('article_futures_prop_firms:t3'),
    t4: t('article_futures_prop_firms:t4'),
    t5: t('article_futures_prop_firms:t5'),
    t6: t('article_futures_prop_firms:t6'),
    t7: t('article_futures_prop_firms:t7'),
    t8: t('article_futures_prop_firms:t8'),
    t9: t('article_futures_prop_firms:t9'),
    t10: t('article_futures_prop_firms:t10'),
    t11: t('article_futures_prop_firms:t11'),
    t12: t('article_futures_prop_firms:t12'),
    t13: t('article_futures_prop_firms:t13'),
    t14: t('article_futures_prop_firms:t14'),
    t15: t('article_futures_prop_firms:t15'),
    t16: t('article_futures_prop_firms:t16'),
    t17: t('article_futures_prop_firms:t17'),
    hyperLink: t('article_futures_prop_firms:hyperLink'),
    faq1_1: t('article_futures_prop_firms:faq1_1'),
    faq1_2: t('article_futures_prop_firms:faq1_2'),
    faq2_1: t('article_futures_prop_firms:faq2_1'),
    faq2_2: t('article_futures_prop_firms:faq2_2'),
    faq3_1: t('article_futures_prop_firms:faq3_1'),
    faq3_2: t('article_futures_prop_firms:faq3_2'),
    faq4_1: t('article_futures_prop_firms:faq4_1'),
    faq4_2: t('article_futures_prop_firms:faq4_2'),
    faq5_1: t('article_futures_prop_firms:faq5_1'),
    faq5_2: t('article_futures_prop_firms:faq5_2'),
    faq6_1: t('article_futures_prop_firms:faq6_1'),
    faq6_2: t('article_futures_prop_firms:faq6_2'),
    p1_1: t('article_futures_prop_firms:p1_1'),
    p1_2: t('article_futures_prop_firms:p1_2'),
    p1_3: t('article_futures_prop_firms:p1_3'),
    p2_1: t('article_futures_prop_firms:p2_1'),
    p2_2: t('article_futures_prop_firms:p2_2'),
    p2_3: t('article_futures_prop_firms:p2_3'),
    p3_1: t('article_futures_prop_firms:p3_1'),
    p3_2: t('article_futures_prop_firms:p3_2'),
    p3_3: t('article_futures_prop_firms:p3_3'),
    p3_4: t('article_futures_prop_firms:p3_4'),
    p4_1: t('article_futures_prop_firms:p4_1'),
    p4_2: t('article_futures_prop_firms:p4_2'),
    p4_3: t('article_futures_prop_firms:p4_3'),
    p5_1: t('article_futures_prop_firms:p5_1'),
    p5_2: t('article_futures_prop_firms:p5_2'),
    p6_1: t('article_futures_prop_firms:p6_1'),
    p6_2: t('article_futures_prop_firms:p6_2'),
    p7_1: t('article_futures_prop_firms:p7_1'),
    p7_2: t('article_futures_prop_firms:p7_2'),
    p8_1: t('article_futures_prop_firms:p8_1'),
    p8_2: t('article_futures_prop_firms:p8_2'),
    p9_1: t('article_futures_prop_firms:p9_1'),
    p9_2: t('article_futures_prop_firms:p9_2'),
    p10_1: t('article_futures_prop_firms:p10_1'),
    p10_2: t('article_futures_prop_firms:p10_2'),
    p11_1: t('article_futures_prop_firms:p11_1'),
    p11_2: t('article_futures_prop_firms:p11_2'),
    p12_1: t('article_futures_prop_firms:p12_1'),
    p12_2: t('article_futures_prop_firms:p12_2'),
    p12_3: t('article_futures_prop_firms:p12_3'),
    p13_1: t('article_futures_prop_firms:p13_1'),
    p13_2: t('article_futures_prop_firms:p13_2'),
    p14_1: t('article_futures_prop_firms:p14_1'),
    p14_2: t('article_futures_prop_firms:p14_2'),
    p15_1: t('article_futures_prop_firms:p15_1'),
    p15_2: t('article_futures_prop_firms:p15_2'),
    p16_1: t('article_futures_prop_firms:p16_1'),
    p16_2: t('article_futures_prop_firms:p16_2'),
  }

  const textLinks = [
    { phrase: blogTranslations.hyperLink, link: `https://www.tx3funding.com/${locale}` },
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
          {blogTranslations.p1_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />
          {blogTranslations.p2_1} <br /> <br />
          {blogTranslations.p2_2} <br /> <br />
          {blogTranslations.p2_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />
          <Image src={image1} alt='' className="w-full" /> <br />
          {blogTranslations.p3_1} <br /> <br />
          {blogTranslations.p3_2} <br /> <br />
          {blogTranslations.p3_3} <br /> <br />
          <HyperLink text={blogTranslations.p3_4} links={textLinks} /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />
          {blogTranslations.p4_1} <br /> <br />
          {blogTranslations.p4_2} <br /> <br />
          {blogTranslations.p4_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />
          <Image src={image2} alt='' className="w-full" /> <br />
          {blogTranslations.p5_1} <br /> <br />
          {blogTranslations.p5_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />
          {blogTranslations.p6_1} <br /> <br />
          {blogTranslations.p6_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />
          {blogTranslations.p7_1} <br /> <br />
          {blogTranslations.p7_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />
          <Image src={image3} alt='' className="w-full" /> <br />
          {blogTranslations.p8_1} <br /> <br />
          {blogTranslations.p8_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />
          {blogTranslations.p9_1} <br /> <br />
          {blogTranslations.p9_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t10}</h3><br />
          {blogTranslations.p10_1} <br /> <br />
          {blogTranslations.p10_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t11}</h3><br />
          {blogTranslations.p11_1} <br /> <br />
          {blogTranslations.p11_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t12}</h3><br />
          {blogTranslations.p12_1} <br /> <br />
          {blogTranslations.p12_2} <br /> <br />
          {blogTranslations.p12_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t13}</h3><br />
          {blogTranslations.p13_1} <br /> <br />
          {blogTranslations.p13_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t14}</h3><br />
          {blogTranslations.p14_1} <br /> <br />
          {blogTranslations.p14_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t15}</h3><br />
          {blogTranslations.p15_1} <br /> <br />
          {blogTranslations.p15_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t16}</h3><br />
          {blogTranslations.p16_1} <br /> <br />
          <a href={`https://www.tx3funding.com/${locale}`} className="underline">{blogTranslations.p16_2}</a> <br /> <br />

          <a className="px-4 text-sm flex-row items-center py-3 my-2 rounded-md bg-ttorange flex text-center text-balance w-fit text-white hover:brightness-150" href='https://app.toptiertrader.com/buy-challenge/?el=Futures_Prop_Firms_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss' target="_blank">
            {blogTranslations.CTA}
            <FaArrowRight className="w-3 ml-2 "></FaArrowRight>
          </a>  <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t17}</h3><br />

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

          <strong className='text-white'>{blogTranslations.faq6_1} <br /> <br /></strong>
          {blogTranslations.faq6_2} <br /> <br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Futures_Prop_Firms_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Futures Prop Firms"
            translation='Start Your Challenge Today!' />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

