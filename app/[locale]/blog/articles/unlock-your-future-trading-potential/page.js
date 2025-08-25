//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import CtaButton from "@/components/common/Buttons/CtaButton";
import { ENVIRONMENT_URL } from "@/constants/global";

//Images
import futuresImgEN from './assets/Blog_Futures_ENG.jpg'
import futuresImgES from './assets/Blog_Futures_SPA.jpg'
import Image from "next/image";
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

const i18nNameSpaces = ["common", "blog_landing", "article_unlock_your_future_trading_potential"];

//Params to bring the info from the db
const blogParam = "unlock-your-future-trading-potential"

const metadata_en = {
  metadataBase: new URL(`${ENVIRONMENT_URL}`),
  title: "Unlock Your Futures Trading Potential with TX3 Funding",
  description: "Join TX3 Funding to revolutionize your futures trading journey. Access exclusive early-bird perks like discounts and a $50,000 Challenge Raffle. Take control of your trading future today.",
  keywords: "futures trading, TX3 Funding, trading platform, early-bird perks, $50,000 Challenge, funded trading, trading evaluation",
  language: "en",
  subject: "Futures Trading with TX3 Funding",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Unlock Your Futures Trading Potential with TX3 Funding",
    description: "Join TX3 Funding to revolutionize your futures trading journey. Access exclusive early-bird perks like discounts and a $50,000 Challenge Raffle. Take control of your trading future today.",
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
  title: "Desbloquea tu Potencial en el Trading de Futuros con TX3 Funding",
  description: "Únete a TX3 Funding para revolucionar tu camino en el trading de futuros. Obtén beneficios exclusivos como descuentos y un sorteo de un Reto de $50,000. Toma el control de tu futuro como trader hoy.",
  keywords: "trading de futuros, TX3 Funding, plataforma de trading, beneficios exclusivos, Reto de $50,000, trading financiado, evaluación de trading",
  language: "es",
  subject: "Trading de Futuros con TX3 Funding",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Desbloquea tu Potencial en el Trading de Futuros con TX3 Funding",
    description: "Únete a TX3 Funding para revolucionar tu camino en el trading de futuros. Obtén beneficios exclusivos como descuentos y un sorteo de un Reto de $50,000. Toma el control de tu futuro como trader hoy.",
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
  title: "TopTier Trader Accueille à Nouveau son PDG Visionnaire : Jamal Hollingsworth",
  description: "Jamal Hollingsworth, fondateur de Top Tier Trader, revient en tant que PDG pour diriger une nouvelle ère d'innovation et de croissance dans la principale entreprise de trading propriétaire.",
  keywords: "Jamal Hollingsworth, TopTier Trader, PDG, trading propriétaire, innovation, leadership, FinTech, prop trading",
  language: "fr",
  subject: "Changement de direction chez Top Tier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "Top Tier Trader",
  publisher: "Top Tier Trader",
  og: {
    type: "article",
    title: "Top Tier Trader Accueille à Nouveau son PDG Visionnaire : Jamal Hollingsworth",
    description: "Jamal Hollingsworth revient en tant que PDG de Top Tier Trader pour diriger une nouvelle ère d'innovation et de croissance dans la principale entreprise de trading propriétaire.",
    image: "",
    site_name: "Top Tier Trader",
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

  const imageBlog = locale === 'es' ? futuresImgES : futuresImgEN

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

  
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >

      <Content currentLanguage={i18n.language} params={blogParam} translations={headContentTranslations} locale={locale} />


      {/* Article Content */}
      <div style={bgImageStyleBlog} className="flex flex-col items-start pb-20 mb:pt-5">

        <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5 ">{t('article_unlock_your_future_trading_potential:h1_title')}</h1>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike WIlliams'} role={'Trading Journalist'} date={'Nov 27 2024'} userImg={userImg}/> */}

          {t('article_unlock_your_future_trading_potential:p1')} <br /><br />
          {t('article_unlock_your_future_trading_potential:p2')} <br /><br />

          <Image className="w-full" alt="trading futures image" src={imageBlog} /> <br />

          <div className="text-green-600">
            {t('article_unlock_your_future_trading_potential:p3_1')} <br /> <br />
            <ul className="list-disc pl-6">
              <li>{t('article_unlock_your_future_trading_potential:p3_2')} <br /></li>
              <li>{t('article_unlock_your_future_trading_potential:p3_3')} <br /><br /></li>
            </ul>
          </div>

          {t('article_unlock_your_future_trading_potential:p4_1')} <br /><br />
          {t('article_unlock_your_future_trading_potential:p4_2')} <br /><br />

          <p>
            {t('article_unlock_your_future_trading_potential:p5_1')} <strong>{t('article_unlock_your_future_trading_potential:p5_2')}</strong>
          </p> <br /><br />

          <a href={`https://www.tx3funding.com/${locale}`} className="px-6 py-3 rounded-md bg-transparent border border-slate-300 text-white font-medium shadow-md  transition-all hover:brightness-125 hover:shadow-lg">
            {t('article_unlock_your_future_trading_potential:button')}
          </a>
          <br /><br />

          {t('article_unlock_your_future_trading_potential:p6')}

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=UnlockYourFutureTradingPotential_Blog&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="Unlock Your Future Trading Potential"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

