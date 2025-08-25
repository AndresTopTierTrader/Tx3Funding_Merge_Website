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

const i18nNameSpaces = ["common", "blog_landing", "article_how_to_choose_the_best_prop_firm"];

//Params to bring the info from the db
const blogParam = "how-to-choose-the-best-prop-firm"

const metadata_en = {
  title: "How to Choose the Right Prop Firm",
  description: "Discover how to choose the best prop firm for your forex trading capital, ensuring alignment with your trading goals and style.",
  keywords: "prop firm, forex trading capital, trading strategy, risk management, forex trading, proprietary trading, funded accounts",
  language: "en",
  subject: "Forex Trading Capital and Prop Firms",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "How to Choose the Right Prop Firm",
    description: "Discover the key factors in choosing the right prop firm for your trading goals and style.",
    image: "link_to_image.jpg",  // replace with actual image link
    site_name: "Toptier Trader",
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
  title: "Cómo Elegir La Prop Firm Correcta",
  description: "Descubre cómo elegir la mejor prop firm para tu capital de trading en forex, asegurando alineación con tus objetivos y estilo de trading.",
  keywords: "prop firm, capital de trading en forex, estrategia de trading, gestión de riesgos, trading en forex, trading propietario, cuentas fondeadas",
  language: "es",
  subject: "Capital de Trading en Forex y Prop Firms",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Cómo Elegir El Prop Firm Correcto",
    description: "Descubre los factores clave para elegir la prop firm adecuada para tus objetivos y estilo de trading.",
    image: "link_to_image.jpg",  // replace with actual image link
    site_name: "Toptier Trader",
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
  title: "Comment Choisir la Bonne Prop Firm",
  description: "Découvrez comment choisir la meilleure prop firm pour votre capital de trading forex, en assurant l'alignement avec vos objectifs et votre style de trading.",
  keywords: "prop firm, capital de trading forex, stratégie de trading, gestion des risques, trading forex, trading propriétaire, comptes financés",
  language: "fr",
  subject: "Capital de Trading Forex et Prop Firms",
  coverage: "Global",
  robots: "index, follow",
  author: "Toptier Trader",
  publisher: "Toptier Trader",
  og: {
    type: "article",
    title: "Comment Choisir la Bonne Prop Firm",
    description: "Découvrez les facteurs clés pour choisir la bonne prop firm pour vos objectifs et votre style de trading.",
    image: "link_to_image.jpg",  // replace with actual image link
    site_name: "Toptier Trader",
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


      <Content currentLanguage={i18n.language} params={blogParam} translations={headContentTranslations} locale={locale} />


      {/* Article Content */}
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5">

        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {t('article_how_to_choose_the_best_prop_firm:h1_title')}</h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Aug 11 2024'} userImg={userImg} /> */}

          {t('article_how_to_choose_the_best_prop_firm:p-1')} <br /><br />
          {t('article_how_to_choose_the_best_prop_firm:p-2')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_choose_the_best_prop_firm:t-1')}</h3><br />
          {t('article_how_to_choose_the_best_prop_firm:p-3')} <br /><br />
          {t('article_how_to_choose_the_best_prop_firm:p-4')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_choose_the_best_prop_firm:t-2')}</h3><br />
          {t('article_how_to_choose_the_best_prop_firm:p-5')} <br /><br />

          <p>
            <span className="font-semibold"> {t('article_how_to_choose_the_best_prop_firm:p-6-t-1')} </span>
            {t('article_how_to_choose_the_best_prop_firm:p-6-p-1')}
          </p> <br />
          <p>
            <span className="font-semibold"> {t('article_how_to_choose_the_best_prop_firm:p-7-t-1')} </span>
            {t('article_how_to_choose_the_best_prop_firm:p-7-p-1')}
          </p> <br />

          <p>
            <span className="font-semibold"> {t('article_how_to_choose_the_best_prop_firm:p-8-t-1')} </span>
            {t('article_how_to_choose_the_best_prop_firm:p-8-p-1')}
          </p> <br />

          <p>
            <span className="font-semibold"> {t('article_how_to_choose_the_best_prop_firm:p-9-t-1')} </span>
            {t('article_how_to_choose_the_best_prop_firm:p-9-p-1')}
          </p> <br />

          <p>
            <span className="font-semibold"> {t('article_how_to_choose_the_best_prop_firm:p-10-t-1')} </span>
            {t('article_how_to_choose_the_best_prop_firm:p-10-p-1')}
          </p> <br />

          <p>
            <span className="font-semibold"> {t('article_how_to_choose_the_best_prop_firm:p-11-t-1')} </span>
            {t('article_how_to_choose_the_best_prop_firm:p-11-p-1')}
          </p> <br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_choose_the_best_prop_firm:t-3')}</h3><br />

          {t('article_how_to_choose_the_best_prop_firm:p-5')} <br /><br />

          <p>
            <span className="font-semibold"> 1.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-13')}
          </p> <br />
          <p>
            <span className="font-semibold"> 2.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-14')}
          </p> <br />
          <p>
            <span className="font-semibold"> 3.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-15')}
          </p> <br />
          <p>
            <span className="font-semibold"> 4.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-16')}
          </p> <br />
          <p>
            <span className="font-semibold"> 5.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-17')}
          </p> <br />
          <p>
            <span className="font-semibold"> 6.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-18')}
          </p> <br />


          <h3 className="font-semibold text-2xl">  {t('article_how_to_choose_the_best_prop_firm:t-4')}</h3><br />

          {t('article_how_to_choose_the_best_prop_firm:p-19')} <br /><br />

          <p>
            <span className="font-semibold"> 1.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-20')}
          </p> <br />
          <p>
            <span className="font-semibold"> 2.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-21')}
          </p> <br />
          <p>
            <span className="font-semibold"> 3.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-22')}
          </p> <br />
          <p>
            <span className="font-semibold"> 4.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-23')}
          </p> <br />
          <p>
            <span className="font-semibold"> 5.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-24')}
          </p> <br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_choose_the_best_prop_firm:t-5')}</h3><br />

          {t('article_how_to_choose_the_best_prop_firm:p-25')} <br /><br />

          <p>
            <span className="font-semibold"> 1.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-26')}
          </p> <br />
          <p>
            <span className="font-semibold"> 2.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-27')}8
          </p> <br />
          <p>
            <span className="font-semibold"> 3.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-2')}
          </p> <br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_choose_the_best_prop_firm:t-6')}</h3><br />

          {t('article_how_to_choose_the_best_prop_firm:p-30')} <br /><br />

          <p>
            <span className="font-semibold"> 1.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-31')}
          </p> <br />
          <p>
            <span className="font-semibold"> 2.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-32')}8
          </p> <br />
          <p>
            <span className="font-semibold"> 3.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-33')}
          </p>

          <p>
            <span className="font-semibold"> 4.  </span>
            {t('article_how_to_choose_the_best_prop_firm:p-34')}
          </p> <br />


          {t('article_how_to_choose_the_best_prop_firm:p-35')} <br /><br />

          {t('article_how_to_choose_the_best_prop_firm:p-36')} <br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=How_To_Choose_The_Best_Prop_Firm_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="How to Choose the Best Prop Firm"
            translation={t('article_how_to_choose_the_best_prop_firm:cta-quiz')} />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

