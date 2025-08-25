//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import ImgTestimony from "./assets/payout.png"
import ImgTestimonyTwo from "./assets/payoutTwo.png"
import ImgTestimonyThree from "./assets/payoutThree.png"
import ImgTestimonyFour from "./assets/payoutOne.png"
import Image from "next/image";
import CtaButton from "@/components/common/Buttons/CtaButton";
import getCurrentUTMMonth from "@/utils/misc/getCurrentUTM";
import { ENVIRONMENT_URL } from "@/constants/global";

const CURRENT_MONTH = getCurrentUTMMonth();


import { bgImageStyleBlog } from "@/constants/styles"

//Lazy loading for components
const Content = dynamic(() => import("../../../../../components/blog/Content"), {
  ssr: false,
  loading: () => <div style={bgImageStyleBlog} className="w-full py-44 -mt-20 mb:mt-0 flex mb:flex-row flex-col justify-center items-center rounded-xl">
    <svg aria-hidden="true" className="w-8 h-8 ,b-10 text-gray-200 animate-spin dark:text-gray-200 fill-ttblue" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <p className="text-ttblue
   ml-3 text-xl mt-5 mb:ml-5 mb:mt-0">Loading Blog...</p>
  </div>
})


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

const i18nNameSpaces = ["common", "blog_landing", "article_24_hour_payout"];

//Params to bring the info from the db
const blogParam = "24-hour-payout"

const metadata_en = {
  title: "TopTier Trader Payout: Experience 24-Hour Payouts or Receive $1000",
  description: "Discover the TopTier Trader Payout process. Get paid within 24 hours or receive $1000. Learn how it works and read real user reviews.",
  keywords: "TopTier Trader Payout, 24-hour payouts, fast payouts, trading payouts, payout guarantee, trading platform, user feedback",
  language: "en",
  subject: "TopTier Trader Payout: Fast and Guaranteed Payouts",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "TopTier Trader Payout: Experience 24-Hour Payouts or Receive $1000",
    description: "Discover how TopTier Trader ensures fast payouts within 24 hours or guarantees $1000 if not delivered on time.",
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
  title: "Payout de TopTier Trader: Recibe Payouts en 24 Horas o Gana $1000",
  description: "Descubre el proceso de Payout de TopTier Trader. Recibe tu pago en 24 horas o gana $1000. Aprende cómo funciona y lee reseñas reales de usuarios.",
  keywords: "Pago de TopTier Trader, pagos en 24 horas, pagos rápidos, garantía de pago, plataforma de trading, comentarios de usuarios",
  language: "es",
  subject: "Pago de TopTier Trader: Pagos Rápidos y Garantizados",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Pago de TopTier Trader: Recibe Pagos en 24 Horas o Gana $1000",
    description: "Descubre cómo TopTier Trader garantiza pagos rápidos en 24 horas o $1000 si no se entrega a tiempo.",
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
  title: "Paiement de TopTier Trader : Recevez vos Paiements en 24 Heures ou Obtenez 1000 $",
  description: "Découvrez le processus de paiement de TopTier Trader. Recevez votre paiement en 24 heures ou obtenez 1000 $. Apprenez comment cela fonctionne et lisez les avis d'utilisateurs réels.",
  keywords: "Paiement TopTier Trader, paiements en 24 heures, paiements rapides, paiements de trading, garantie de paiement, plateforme de trading, avis des utilisateurs",
  language: "fr",
  subject: "Paiement de TopTier Trader : Paiements Rapides et Garantis",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Paiement de TopTier Trader : Recevez vos Paiements en 24 Heures ou Obtenez 1000 $",
    description: "Découvrez comment TopTier Trader assure des paiements rapides en 24 heures ou garantit 1000 $ en cas de non-respect des délais.",
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
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {t('article_24_hour_payout:h1_title')}</h1>
        </header>
        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Jul 1 2024'} userImg={userImg} /> */}

          {t('article_24_hour_payout:p_one')} <br /><br />
          {t('article_24_hour_payout:p_two')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_24_hour_payout:p_three')}</h3><br />

          {t('article_24_hour_payout:p_four')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_24_hour_payout:p_five')}</h3><br />

          <div>
            <Image src={ImgTestimony} alt="Payout" className="w-full" /> <br />
          </div>

          <div>
            <Image loading="lazy" src={ImgTestimonyTwo} alt="Payout" className="w-full" /> <br />
          </div>

          <div>
            <Image loading="lazy" src={ImgTestimonyThree} alt="Payout" className="w-full" /> <br />
          </div>

          <div>
            <Image loading="lazy" src={ImgTestimonyFour} alt="Payout" className="w-full" /> <br />
          </div>


          {t('article_24_hour_payout:p_six')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_24_hour_payout:p_seven')}</h3><br />

          {t('article_24_hour_payout:p_eight')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_24_hour_payout:p_nine')}</h3><br />

          {t('article_24_hour_payout:p_ten')} <br /><br />

          <lu >
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <li /> <h3 className="font-semibold text-2xl">  {t('article_24_hour_payout:t_one')}</h3><br />
              </div>
              {t('article_24_hour_payout:c_one')} <br /><br />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <li /> <h3 className="font-semibold text-2xl">  {t('article_24_hour_payout:t_two')}:</h3><br />
              </div>
              {t('article_24_hour_payout:c-two')} <br /><br />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <li /> <h3 className="font-semibold text-2xl">  {t('article_24_hour_payout:t_three')}</h3><br />
              </div>
              {t('article_24_hour_payout:c_three')} <br /><br />
            </div>
          </lu>

          {t('article_24_hour_payout:p_eleven')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_24_hour_payout:p_twelve')}</h3><br />

          {t('article_24_hour_payout:p_thridteen')} <br /><br />

          <CtaButton
            utm={`https://app.toptiertrader.com/buy-challenge/?el=24_Hour_Payouts&hcategory=${CURRENT_MONTH}&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss`}
            page="Blog"
            section="24 Hour Payout"
            translation='Get Your Challenge Now' />

          <br />
          {t('article_24_hour_payout:p_fourteen')} <br /><br />

          <a href='https://help.toptiertrader.com'>
            <div className="border-ttorange border-2 transition-all hover:scale-110 hover:cursor-pointer w-fit px-10 py-3 rounded-xl">
              <p className="font-bold  text-ttorange"> Check FAQ&apos;s </p>
            </div>
          </a>
          <br />
          {t('article_24_hour_payout:p_fiveteen')} <br /><br />

          <h3 className="font-semibold text-base mb:text-lg italic">  {t('article_24_hour_payout:p_sixteen')}</h3><br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

