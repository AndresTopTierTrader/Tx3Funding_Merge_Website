//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import { bgImageStyleBlog } from "@/constants/styles"
import Content from "../../../../../components/blog/Content";
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

const i18nNameSpaces = ["common", "blog_landing", "article_smart_money_concepts"];

//Params to bring the info from the db
const blogParam = "smart-money-concepts"

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Mastering Smart Money Concepts for Successful Trading Strategies",
  description: "Learn how to master Smart Money Concepts and align your trading strategies with institutional market movers. This comprehensive guide covers order blocks, fair value gaps, and liquidity grabs for improved trading outcomes.",
  keywords: "Smart Money Concepts, trading strategies, order blocks, fair value gaps, liquidity grabs, smart money trading, institutional trading, advanced trading techniques, market structure, SMC trading, trading insights",
  language: "en",
  subject: "Trading Strategies and Smart Money Concepts",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Mastering Smart Money Concepts for Successful Trading Strategies",
    description: "Learn how to master Smart Money Concepts and align your trading strategies with institutional market movers. This comprehensive guide covers order blocks, fair value gaps, and liquidity grabs for improved trading outcomes.",
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
  title: "Dominando los Conceptos de Dinero Inteligente para Estrategias de Trading Exitosas",
  description: "Aprende a dominar los Conceptos de Dinero Inteligente y alinea tus estrategias de trading con los movimientos del mercado institucional. Esta guía integral cubre bloques de órdenes, brechas de valor justo y capturas de liquidez para mejorar los resultados del trading.",
  keywords: "Conceptos de Dinero Inteligente, estrategias de trading, bloques de órdenes, brechas de valor justo, capturas de liquidez, trading institucional, técnicas avanzadas de trading, estructura del mercado, trading SMC, ideas de trading",
  language: "es",
  subject: "Estrategias de Trading y Conceptos de Dinero Inteligente",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Dominando los Conceptos de Dinero Inteligente para Estrategias de Trading Exitosas",
    description: "Aprende a dominar los Conceptos de Dinero Inteligente y alinea tus estrategias de trading con los movimientos del mercado institucional. Esta guía integral cubre bloques de órdenes, brechas de valor justo y capturas de liquidez para mejorar los resultados del trading.",
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
  title: "Maîtriser les Concepts de Smart Money pour des Stratégies de Trading Réussies",
  description: "Apprenez à maîtriser les Concepts de Smart Money et à aligner vos stratégies de trading avec les mouvements institutionnels. Ce guide complet couvre les blocs d'ordres, les écarts de valeur équitable et les captures de liquidité pour améliorer vos résultats.",
  keywords: "Concepts de Smart Money, stratégies de trading, blocs d'ordres, écarts de valeur équitable, captures de liquidité, trading institutionnel, techniques avancées de trading, structure du marché, trading SMC, idées de trading",
  language: "fr",
  subject: "Stratégies de Trading et Concepts de Smart Money",
  coverage: "Mondial",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Maîtriser les Concepts de Smart Money pour des Stratégies de Trading Réussies",
    description: "Apprenez à maîtriser les Concepts de Smart Money et à aligner vos stratégies de trading avec les mouvements institutionnels. Ce guide complet couvre les blocs d'ordres, les écarts de valeur équitable et les captures de liquidité pour améliorer vos résultats.",
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
    h1_title: t('article_smart_money_concepts:h1_title'),
    p1: t('article_smart_money_concepts:p1'),
    p2_1: t('article_smart_money_concepts:p2_1'),
    p2_2: t('article_smart_money_concepts:p2_2'),
    p3_1: t('article_smart_money_concepts:p3_1'),
    p3_2: t('article_smart_money_concepts:p3_2'),
    p4_1: t('article_smart_money_concepts:p4_1'),
    p4_2: t('article_smart_money_concepts:p4_2'),
    p5: t('article_smart_money_concepts:p5'),
    p6_1: t('article_smart_money_concepts:p6_1'),
    p6_2: t('article_smart_money_concepts:p6_2'),
    p7: t('article_smart_money_concepts:p7'),
    p8_1: t('article_smart_money_concepts:p8_1'),
    p8_2: t('article_smart_money_concepts:p8_2'),
    p8_3: t('article_smart_money_concepts:p8_3'),
    p9_1: t('article_smart_money_concepts:p9_1'),
    p9_2: t('article_smart_money_concepts:p9_2'),
    p9_3: t('article_smart_money_concepts:p9_3'),
    p10: t('article_smart_money_concepts:p10'),
    p11_1: t('article_smart_money_concepts:p11_1'),
    p11_2: t('article_smart_money_concepts:p11_2'),
    p11_3: t('article_smart_money_concepts:p11_3'),
    p12_1: t('article_smart_money_concepts:p12_1'),
    p12_2: t('article_smart_money_concepts:p12_2'),
    p12_3: t('article_smart_money_concepts:p12_3'),
    p13_1: t('article_smart_money_concepts:p13_1'),
    p13_2: t('article_smart_money_concepts:p13_2'),
    p14_1: t('article_smart_money_concepts:p14_1'),
    p14_2: t('article_smart_money_concepts:p14_2'),
    p14_3: t('article_smart_money_concepts:p14_3'),
    p15_1: t('article_smart_money_concepts:p15_1'),
    p15_2: t('article_smart_money_concepts:p15_2'),
    p15_3: t('article_smart_money_concepts:p15_3'),
    p16: t('article_smart_money_concepts:p16'),
    p17_1: t('article_smart_money_concepts:p17_1'),
    p17_2: t('article_smart_money_concepts:p17_2'),
    p17_3: t('article_smart_money_concepts:p17_3'),
    p18_1: t('article_smart_money_concepts:p18_1'),
    p18_2: t('article_smart_money_concepts:p18_2'),
    p18_3: t('article_smart_money_concepts:p18_3'),
    p19_1: t('article_smart_money_concepts:p19_1'),
    p19_2: t('article_smart_money_concepts:p19_2'),
    p19_3: t('article_smart_money_concepts:p19_3'),
    p20_1: t('article_smart_money_concepts:p20_1'),
    p20_2: t('article_smart_money_concepts:p20_2'),
    p21_1: t('article_smart_money_concepts:p21_1'),
    p21_2: t('article_smart_money_concepts:p21_2'),
    p21_3: t('article_smart_money_concepts:p21_3'),
    p22_1: t('article_smart_money_concepts:p22_1'),
    p22_2: t('article_smart_money_concepts:p22_2'),
    p22_3: t('article_smart_money_concepts:p22_3'),
    p23_1: t('article_smart_money_concepts:p23_1'),
    p23_2: t('article_smart_money_concepts:p23_2'),
    p24_1: t('article_smart_money_concepts:p24_1'),
    p24_2: t('article_smart_money_concepts:p24_2'),
    p25: t('article_smart_money_concepts:p25'),
    p26_1: t('article_smart_money_concepts:p26_1'),
    p26_2: t('article_smart_money_concepts:p26_2'),
    p26_3: t('article_smart_money_concepts:p26_3'),
    p27_1: t('article_smart_money_concepts:p27_1'),
    p27_2: t('article_smart_money_concepts:p27_2'),
    p27_3: t('article_smart_money_concepts:p27_3'),
    p28_1: t('article_smart_money_concepts:p28_1'),
    p28_2: t('article_smart_money_concepts:p28_2'),
    p29: t('article_smart_money_concepts:p29'),
    p30: t('article_smart_money_concepts:p30'),
    p31: t('article_smart_money_concepts:p31'),
    t1: t('article_smart_money_concepts:t1'),
    t2: t('article_smart_money_concepts:t2'),
    t3: t('article_smart_money_concepts:t3'),
    t4: t('article_smart_money_concepts:t4'),
    t5: t('article_smart_money_concepts:t5'),
    t6: t('article_smart_money_concepts:t6'),
    t7: t('article_smart_money_concepts:t7'),
    t8: t('article_smart_money_concepts:t8'),
    t9: t('article_smart_money_concepts:t9'),
    faq1_1: t('article_smart_money_concepts:faq1_1'),
    faq1_2: t('article_smart_money_concepts:faq1_2'),
    faq2_1: t('article_smart_money_concepts:faq2_1'),
    faq2_2: t('article_smart_money_concepts:faq2_2'),
    faq3_1: t('article_smart_money_concepts:faq3_1'),
    faq3_2: t('article_smart_money_concepts:faq3_2'),
    faq4_1: t('article_smart_money_concepts:faq4_1'),
    faq4_2: t('article_smart_money_concepts:faq4_2'),
    faq5_1: t('article_smart_money_concepts:faq5_1'),
    faq5_2: t('article_smart_money_concepts:faq5_2'),
    hyperText: t('article_smart_money_concepts:hyperText'),
  }

  const textLinks = [
    { phrase: blogTranslations.hyperText, link: `${ENVIRONMENT_URL}/${locale}/products/challenges` }
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

          {blogTranslations.p2_1} <br /> <br />
          {blogTranslations.p2_2} <br /> <br />
          {blogTranslations.p3_1} <br /> <br />
          {blogTranslations.p3_2} <br /> <br />
          {blogTranslations.p4_1} <br /> <br />
          {blogTranslations.p4_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t2}</h3><br />

          {blogTranslations.p5} <br /> <br />
          <strong className='text-white'>{blogTranslations.p6_1} <br /> <br /></strong>
          {blogTranslations.p6_2} <br /> <br />

          {blogTranslations.p7} <br /> <br />

          <strong className='text-white'>{blogTranslations.p8_1} <br /> <br /></strong>
          {blogTranslations.p8_2} <br /> <br />
          {blogTranslations.p8_3} <br /> <br />

          <strong className='text-white'>{blogTranslations.p9_1} <br /> <br /></strong>
          {blogTranslations.p9_2} <br /> <br />
          {blogTranslations.p9_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t3}</h3><br />

          {blogTranslations.p10} <br /> <br />
          <strong className='text-white'>{blogTranslations.p11_1} <br /> <br /></strong>
          {blogTranslations.p11_2} <br /> <br />
          {blogTranslations.p11_3} <br /> <br />

          <strong className='text-white'>{blogTranslations.p12_1} <br /> <br /></strong>
          {blogTranslations.p12_2} <br /> <br />
          {blogTranslations.p12_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t4}</h3><br />

          {blogTranslations.p13_1} <br /> <br />
          {blogTranslations.p13_2} <br /> <br />

          <strong className='text-white'>{blogTranslations.p14_1} <br /> <br /></strong>
          {blogTranslations.p14_2} <br /> <br />
          {blogTranslations.p14_3} <br /> <br />

          <strong className='text-white'>{blogTranslations.p15_1} <br /> <br /></strong>
          {blogTranslations.p15_2} <br /> <br />
          {blogTranslations.p15_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t5}</h3><br />

          {blogTranslations.p16} <br /> <br />

          <strong className='text-white'>{blogTranslations.p17_1} <br /> <br /></strong>
          {blogTranslations.p17_2} <br /> <br />
          {blogTranslations.p17_3} <br /> <br />

          <strong className='text-white'>{blogTranslations.p18_1} <br /> <br /></strong>
          {blogTranslations.p18_2} <br /> <br />
          {blogTranslations.p18_3} <br /> <br />

          <strong className='text-white'>{blogTranslations.p19_1} <br /> <br /></strong>
          {blogTranslations.p19_2} <br /> <br />
          {blogTranslations.p19_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t6}</h3><br />

          {blogTranslations.p20_1} <br /> <br />
          {blogTranslations.p20_2} <br /> <br />

          <strong className='text-white'>{blogTranslations.p21_1} <br /> <br /></strong>
          {blogTranslations.p21_2} <br /> <br />
          {blogTranslations.p21_3} <br /> <br />

          <strong className='text-white'>{blogTranslations.p22_1} <br /> <br /></strong>
          {blogTranslations.p22_2} <br /> <br />
          {blogTranslations.p22_3} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t7}</h3><br />

          {blogTranslations.p23_1} <br /> <br />
          {blogTranslations.p23_2} <br /> <br />

          {blogTranslations.p24_1} <br /> <br />
          {blogTranslations.p24_2} <br /> <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t8}</h3><br />

          {blogTranslations.p25} <br /> <br />

          <strong className='text-white'>{blogTranslations.p26_1} <br /> <br /></strong>
          {blogTranslations.p26_2} <br /> <br />
          {blogTranslations.p26_3} <br /> <br />

          <strong className='text-white'>{blogTranslations.p27_1} <br /> <br /></strong>
          {blogTranslations.p27_2} <br /> <br />
          {blogTranslations.p27_3} <br /> <br />

          {blogTranslations.p28_1} <br /> <br />
          {blogTranslations.p28_2} <br /> <br />

          {blogTranslations.p29} <br /> <br />
          {blogTranslations.p30} <br /> <br />
          <HyperLink text={blogTranslations.p31} links={textLinks} /> <br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=Smart_Money_Concepts_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Smart Money Concepts"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

          <h3 className="font-semibold text-2xl text-white">{blogTranslations.t9}</h3><br />

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

