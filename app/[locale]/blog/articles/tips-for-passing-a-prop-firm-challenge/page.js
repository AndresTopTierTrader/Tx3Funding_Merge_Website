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

const i18nNameSpaces = ["common", "blog_landing", "article_tips_for_passing_a_prop_firm_challenge"];

//Params to bring the info from the db
const blogParam = "tips-for-passing-a-prop-firm-challenge"

const metadata_en = {
  title: "10 Tips for Passing a Prop Firm Challenge - Complete Guide",
  description: "Master prop firm challenges with our comprehensive guide. Learn essential strategies, risk management, and proven techniques to help you secure a funded trading account.",
  keywords: "prop firm challenge tips, prop trading success, prop firm rules, trading strategy, risk management, trading psychology, funded trading account, prop firm evaluation",
  language: "en",
  subject: "prop trading challenges, trading education, trading strategy",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "10 Tips for Passing a Prop Firm Challenge - Complete Guide",
    description: "Master prop firm challenges with our comprehensive guide. Learn essential strategies, prop firm challenge, prop trading tips, funded trader, trading strategies, risk management, pass prop firm challenge, passing prop firm challenge, risk management, and proven techniques to help you secure a funded trading account.",
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
  title: "10 Consejos para pasar un Desafío de una Prop Firm",
  description: "Domina los desafíos de firmas prop con nuestra guía completa. Aprende estrategias esenciales, gestión de riesgos y técnicas probadas para obtener una cuenta financiada.",
  keywords: "consejos desafío firma prop, éxito trading prop, desafío de prop firm, consejos de trading prop, trader financiado, estrategias de trading, gestión de riesgos, reglas firma prop, estrategia trading, gestión de riesgos, psicología trading, cuenta financiada, evaluación firma prop",
  language: "es",
  subject: "desafíos trading prop, educación trading, estrategia trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "10 Consejos para Aprobar el Desafío de una Firma Prop - Guía Completa",
    description: "Domina los desafíos de firmas prop con nuestra guía completa. Aprende estrategias esenciales, gestión de riesgos y técnicas probadas para obtener una cuenta financiada.",
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
  title: "10 Conseils pour Réussir le Challenge d'une Société Prop - Guide Complet",
  description: "Maîtrisez les challenges des sociétés prop avec notre guide complet. Apprenez les stratégies essentielles, la gestion des risques et les techniques éprouvées pour obtenir un compte financé.",
  keywords: "conseils challenge société prop, succès trading prop, règles société prop, stratégie trading, gestion des risques, psychologie trading, compte financé, évaluation société prop",
  language: "fr",
  subject: "challenges trading prop, formation trading, stratégie trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "10 Conseils pour Réussir le Challenge d'une Société Prop - Guide Complet",
    description: "Maîtrisez les challenges des sociétés prop avec notre guide complet. Apprenez les stratégies essentielles, la gestion des risques et les techniques éprouvées pour obtenir un compte financé.",
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
      <header role="banner">
        <Content
          currentLanguage={i18n.language}
          params={blogParam}
          translations={headContentTranslations}
          locale={locale}
        />
      </header>

      {/* Main Content Area */}
      <main role="main" style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5">
        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5 ">{t('article_tips_for_passing_a_prop_firm_challenge:h1_title')}</h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Nov 11 2024'} userImg={userImg}/> */}


          <section className="introduction">
            <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-1')}</p><br />
            <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-2')}</p><br />
          </section>

          <section>
            <header>
              <h2 className="font-medium text-3xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-1')}</h2>
            </header><br />

            <section>
              <header>
                <h3 className="font-medium text-2xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-2')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-3-p-1')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-3-p-2')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-3-p-3')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-4')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-5')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-2xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-3')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-6')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-7')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-4')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-9')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-10')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-5')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-12')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-13')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-14')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-2xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-6')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-15')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-16')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-17')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-7')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-19')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-20')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-8')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-22')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-23')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-9')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-24')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-25')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-2xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-10')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-26')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-27')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-2xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-11')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-28')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-29')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-2xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-12')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-30')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-31')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-2xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-13')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-32')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-33')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-2xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-14')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-34')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-35')}</p><br />
            </section>

            <section>
              <header>
                <h3 className="font-medium text-2xl">{t('article_tips_for_passing_a_prop_firm_challenge:t-15')}</h3>
              </header><br />

              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-36')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-37')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-38-p-1')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-38-p-2')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-39')}</p><br />
              <p>{t('article_tips_for_passing_a_prop_firm_challenge:p-40')}</p><br />
            </section>

            <footer className="article-cta">
              <nav>
                <CtaButton
                  utm="https://app.toptiertrader.com/buy-challenge/?el=TipsForPassingAPropFirmChallenge_Blog&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
                  page="Blog"
                  section="Tips for Passing a Prop Firm Challenge"
                  translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
                <br />
              </nav>
            </footer><br />
          </section>
        </article>
      </main>

      <footer role="contentinfo">
        <FinalSectionLazyLoading
          translations={finalSectionTranslations}
          isResourcesVisible={false}
          locale={mainLang}
        />
      </footer>
    </TranslationsProvider>
  )
}

