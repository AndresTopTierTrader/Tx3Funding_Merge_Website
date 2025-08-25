//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
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

const i18nNameSpaces = ["common", "blog_landing"];

//Params to bring the info from the db
const blogParam = "top-tiertrader-challenges-updates"

const metadata_en = {
  title: "TopTier Trader Challenge: Latest Updates and Essential Rules",
  description: "Discover the latest updates to the TopTier Trader Challenge, including reduced minimum trading days and extended Tier 2 completion times. Learn about the essential rules for maintaining your TopTier Funded Account.",
  keywords: "TopTier Trader, trading challenge, funded account, drawdown limits, trading rules, trading updates, profit target, trading days",
  language: "en",
  subject: "Updates and Rules of the TopTier Trader Challenge",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "TopTier Trader Challenge: Latest Updates and Essential Rules",
    description: "Stay informed about the recent changes to the TopTier Trader Challenge and understand the drawdown limits and requirements for your funded account to ensure successful trading.",
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
  title: "Últimas Actualizaciones en los desafios de TopTier Trader y Reglas Esenciales",
  description: "Descubre las últimas actualizaciones del Desafío de TopTier Trader, incluyendo la reducción de días mínimos de trading y la extensión de tiempos para completar el Nivel 2. Aprende sobre las reglas esenciales para mantener tu Cuenta Financiada de TopTier.",
  keywords: "TopTier Trader, desafío de trading, cuenta financiada, límites de reducción, reglas de trading, actualizaciones de trading, objetivo de beneficio, días de trading",
  language: "es",
  subject: "Actualizaciones y Reglas del Desafío de TopTier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Desafío de TopTier Trader: Últimas Actualizaciones y Reglas Esenciales",
    description: "Mantente informado sobre los cambios recientes en el Desafío de TopTier Trader y entiende los límites de reducción y los requisitos para tu cuenta financiada para asegurar un trading exitoso.",
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
  title: "Défi TopTier Trader : Dernières Mises à Jour et Règles Essentielles",
  description: "Découvrez les dernières mises à jour du défi TopTier Trader, y compris la réduction des jours minimum de trading et l'extension des délais de réalisation du Tier 2. Apprenez les règles essentielles pour maintenir votre compte financé par TopTier.",
  keywords: "TopTier Trader, défi de trading, compte financé, limites de drawdown, règles de trading, mises à jour de trading, objectif de profit, jours de trading",
  language: "fr",
  subject: "Mises à Jour et Règles du Défi TopTier Trader",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Défi TopTier Trader : Dernières Mises à Jour et Règles Essentielles",
    description: "Restez informé des récents changements apportés au défi TopTier Trader et comprenez les limites de drawdown et les exigences pour votre compte financé afin d'assurer un trading réussi.",
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

  
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >


      <Content currentLanguage={i18n.language} translations={headContentTranslations} params={blogParam} />


      {/* Article Content */}
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5 mb:-mt-10">
        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> TopTier Trader Challenges Updates  </h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'May 11 2024'} userImg={userImg} /> */}

          Throughout 2022, TopTier Trader has grown and expanded at a quick rate. One of the main reasons why TopTier Trader has grown so quickly is that we listen to our community. Throughout our Discord, we have listened to members and improved our challenges. <br /><br />
          <br />
          Here are some of the recent updates that we have made to TopTier Trader:<br /><br />
          <ul>
            <li>&bull; &nbsp;All Challenges now have a minimum trading day of 4 instead of 7.</li>
            <li>&bull; &nbsp;TopTier Plus traders have their first payout after 14 days of their first trade on their funded accounts.</li>
            <li>&bull; &nbsp;TopTier Plus now has 70 days to complete Tier 2 instead of 60 days.</li>
            <li>&bull; &nbsp;TopTier Affiliates now get paid out of their bank accounts or debit cards.</li>
          </ul>
          <br />
          Also, we want to reiterate some of the processes and rules of our challenges: <br /><br />

          <h3 className="font-semibold text-2xl">TopTier Challenge Plus Tier 1 Upgrade</h3><br />
          Upon passing the TopTier Challenge Plus Tier 1 challenge, you shall receive your Tier 2 credentials via email within 36 – 48 hours. The only way to pass the challenge is to meet these requirements:<br /><br />
          <ul>
            <li>&bull; &nbsp;Met the profit target of 8%</li>
            <li>&bull; &nbsp;Met the minimum of 4 trading days</li>
            <li>&bull; &nbsp;Closed all active trades on the Tier 1 account</li>
            <li>&bull; &nbsp;Have not violated any of our rules</li>
          </ul>
          Once all the above conditions are met you should receive your Tier 2 credentials.<br /><br />

          <h3 className="font-semibold text-2xl">TopTier Challenge Regular or TopTier Challenge Swing Tier 2 Challenge Upgrade</h3><br />
          Upon passing the TopTier Challenge Regular or TopTier Challenge Swing Tier 2 challenge, your TopTier account should be issued within 36 – 48 hours. All of these conditions must be met before receiving funding:<br /><br />
          <ul>
            <li>&bull; &nbsp;Met the profit target of 5%</li>
            <li>&bull; &nbsp;Met the minimum of 4 trading days</li>
            <li>&bull; &nbsp;Closed all active trades on the Tier 2 account</li>
            <li>&bull; &nbsp;Have not violated any of our rules</li>
          </ul>
          Your TopTier Funded Accounts will be issued within 36 – 48 hours.<br /><br />

          <h3 className="font-semibold text-2xl">Drawdown Limits</h3><br />
          In order to stay a TopTier Funded trader, you need to avoid breaching the drawdown limits based on your funded account type and any other rules.<br /><br />
          <h4 className="font-semibold">TopTier Funded Regular:</h4><br />
          <ul>
            <li> &bull; &nbsp;Lose no more than 5% of the day’s starting balance, this would be the daily drawdown limit.</li>
            <li> &bull; &nbsp;Lose no more than 10% of the initial balance meaning that the account should not reach 90% of its initial value, this would be the max drawdown limit.</li>
          </ul>
          <br />
          < h4 className="font-semibold">TopTier Funded Swing:</h4><br />
          <ul>
            <li>  &bull; &nbsp;Lose no more than 5% of the day’s starting balance, this would be the daily drawdown limit.</li>
            <li>  &bull; &nbsp;Lose no more than 10% of the initial balance meaning that the account should not reach 90% of its initial value, this would be the max drawdown limit.</li>
          </ul>
          <br />
          <h4 className="font-semibold">TopTier Funded Plus:</h4><br />
          <ul>
            <li> &bull; &nbsp;Lose no more than 5% of the initial balance, this would be the daily drawdown limit.</li>
            <li> &bull; &nbsp;Lose no more than 8% of the initial balance meaning that the account should not reach 92% of its initial value, this would be the max drawdown limit.</li>
          </ul>
          <br />
          If you manage to avoid the above conditions whilst being profitable, you will be eligible for your first payout in 14 or 30 days from your first trade on the funded account depending on the funded account type. Thereafter payouts will be biweekly.<br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=TopTierTraderChallengesUpdates_Blog&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="TopTier Trader Challenges Updates"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>


      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

