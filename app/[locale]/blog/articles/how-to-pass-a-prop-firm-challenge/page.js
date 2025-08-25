//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import BoldBeforeComa from "@/utils/blog/boldBeforeComa";
import Image from "next/image";
import CtaButton from "@/components/common/Buttons/CtaButton";
import {ENVIRONMENT_URL} from "@/constants/global";

//Images
import celebrateImg from './assets/celebrate.jpg'
import pointsImg from './assets/points.jpg'
import stairsImg from './assets/stairs.jpg'
import studyImg from './assets/study.jpg'
import { bgImageStyleBlog } from "@/constants/styles"

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

const i18nNameSpaces = ["common", "blog_landing", "article_how_to_pass_a_prop_firm_challenge"];

//Params to bring the info from the db
const blogParam = "how-to-pass-a-prop-firm-challenge"

const metadata_en = {
  title: "How To Pass a Prop Firm Challenge",
  description: "Learn essential tips and strategies to pass a prop firm challenge, master risk management, and become a successful proprietary trader.",
  keywords: "how to pass a prop firm challenge, how to become a prop trader, how to become a proprietary trader, how to get into prop trading, become a prop trader, what is a prop firm trader, trading psychology, risk management, technical analysis, trading plan",
  language: "en",
  subject: "how to pass a prop firm challenge, Prop Firm Challenge, Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "How To Pass a Prop Firm Challenge",
    description: "Learn essential tips and strategies to pass a prop firm challenge, master risk management, and become a successful proprietary trader.",
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

const metadata_es = {
  title: "Cómo Pasar un Desafío de Firma Prop",
  description: "Aprende consejos y estrategias esenciales para pasar un desafío de firma prop, domina la gestión de riesgos y conviértete en un exitoso trader propietario.",
  keywords: "cómo pasar un desafío de firma prop, cómo convertirse en un trader prop, cómo convertirse en un trader propietario, cómo entrar en el trading prop, convertirse en un trader prop, qué es un trader de firma prop, psicología del trading, gestión de riesgos, análisis técnico, plan de trading",
  language: "es",
  subject: "cómo pasar un desafío de firma prop, Desafío de Firma Prop, Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Cómo Pasar un Desafío de Firma Prop",
    description: "Aprende consejos y estrategias esenciales para pasar un desafío de firma prop, domina la gestión de riesgos y conviértete en un exitoso trader propietario.",
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
  title: "Comment Réussir un Challenge de Société de Trading Propriétaire | TopTier Trader",
  description: "Apprenez les conseils et stratégies essentiels pour réussir un challenge de société de trading propriétaire, maîtrisez la gestion des risques et devenez un trader propriétaire à succès.",
  keywords: "comment réussir un challenge de société de trading propriétaire, comment devenir un trader prop, comment devenir un trader propriétaire, comment entrer dans le trading propriétaire, devenir un trader prop, qu'est-ce qu'un trader de société prop, psychologie du trading, gestion des risques, analyse technique, plan de trading",
  language: "fr",
  subject: "comment réussir un challenge de société de trading propriétaire, Challenge de Société de Trading Propriétaire, Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader",
  og: {
    type: "article",
    title: "Comment Réussir un Challenge de Société de Trading Propriétaire",
    description: "Apprenez les conseils et stratégies essentiels pour réussir un challenge de société de trading propriétaire, maîtrisez la gestion des risques et devenez un trader propriétaire à succès.",
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


      <Content currentLanguage={i18n.language} params={blogParam} translations={headContentTranslations} locale={locale} />


      {/* Article Content */}
      <div style={bgImageStyleBlog} className="flex flex-col items-center pb-20 mb:pt-5">

        <header className="mb:mt-0 flex flex-col items-start max-w-[1100px] my-6  w-full">
          <h1 className="mb:mt-0 mb:mb-10 max-w-[1100px] my-6 px-8  mb:px-0 text-4xl text-start font-medium mb:text-5xl text-white mb:mr-5"> {t('article_how_to_pass_a_prop_firm_challenge:h1_title')}</h1>
        </header>

        <article className="bg-transparent max-w-[1100px] text-slate-300 text-base mb:text-lg mb:px-0 px-8">

          {/* User */}
          {/* <User name={'Mike Williams'} role={'Trading Expert'} date={'Nov 2 2024'} userImg={userImg}/> */}

          {t('article_how_to_pass_a_prop_firm_challenge:p-1')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-2')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-1')}</h3><br />
          <Image src={studyImg} className="w-full" alt="Graphic of TopTier Academy" /> <br /><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-3')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-4')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-5')} <br /><br />


          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-2')}</h3><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-6')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-3')}</h3><br />
          <Image src={pointsImg} className="w-full" alt="Graphic of TopTier Academy" /> <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-7')} <br /><br />

          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-8')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-9')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-10')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-11')} prefix={t('')} /><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-12')} <br /><br />
          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-4')}</h3><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-13')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-14')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-5')}</h3><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-15')} <br /><br />

          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-16')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-17')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-18')} prefix={t('')} /><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-19')} <br /><br />

          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-20')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-21-p-1')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-21-p-2')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-21-p-3')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-21-p-4')} prefix={t('')} /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-7')}</h3><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-22')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-23')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-8')}</h3><br />
          <Image src={celebrateImg} className="w-full" alt="Graphic of TopTier Academy" /> <br /><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-24')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-25')} <br /><br />

          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-26')} prefix={t('')} /><br />
          <BoldBeforeComa inputText={t('article_how_to_pass_a_prop_firm_challenge:p-27')} prefix={t('')} /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-28')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:p-29')}</h3><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-29-p-1')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-29-p-2')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-30')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-9')}</h3><br />
          <Image src={stairsImg} className="w-full" alt="Graphic of TopTier Academy" /> <br /><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-31')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-10')}</h3><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-32')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-33')} <br /><br />


          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-11')}</h3><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-34')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-35')} <br /><br />

          - {t('article_how_to_pass_a_prop_firm_challenge:p-35-p-1')} <br />
          - {t('article_how_to_pass_a_prop_firm_challenge:p-35-p-2')} <br />
          - {t('article_how_to_pass_a_prop_firm_challenge:p-35-p-3')} <br />
          - {t('article_how_to_pass_a_prop_firm_challenge:p-35-p-4')} <br /><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-36')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-12')}</h3><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-37')} <br /><br />

          - {t('article_how_to_pass_a_prop_firm_challenge:p-37-p-1')} <br />
          - {t('article_how_to_pass_a_prop_firm_challenge:p-37-p-2')} <br />
          - {t('article_how_to_pass_a_prop_firm_challenge:p-37-p-3')} <br />
          - {t('article_how_to_pass_a_prop_firm_challenge:p-37-p-4')} <br /><br />


          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-13')}</h3><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-39')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-40')} <br /><br />


          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-14')}</h3><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-41')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-42')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-15')}</h3><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-43')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-44')} <br /><br />

          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-16')}</h3><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-45')} <br /><br />


          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-17')}</h3><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-46')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-47')} <br /><br />


          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-18')}</h3><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-48')} <br /><br />

          - {t('article_how_to_pass_a_prop_firm_challenge:p-49-p-1')} <br />
          - {t('article_how_to_pass_a_prop_firm_challenge:p-49-p-2')} <br />
          - {t('article_how_to_pass_a_prop_firm_challenge:p-49-p-3')} <br />
          - {t('article_how_to_pass_a_prop_firm_challenge:p-49-p-4')} <br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-50')} <br /><br />


          <h3 className="font-semibold text-2xl">  {t('article_how_to_pass_a_prop_firm_challenge:t-19')}</h3><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-51')} <br /><br />
          {t('article_how_to_pass_a_prop_firm_challenge:p-52')} <br /><br />

          - {t('article_how_to_pass_a_prop_firm_challenge:p-52-p-1')} <br />
          - {t('article_how_to_pass_a_prop_firm_challenge:p-52-p-2')} <br />
          - {t('article_how_to_pass_a_prop_firm_challenge:p-52-p-3')} <br />
          - {t('article_how_to_pass_a_prop_firm_challenge:p-52-p-4')} <br /><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-53')} <br /><br />

          - <a href="https://www.youtube.com/playlist?list=PLT6_Bt_TKitK6mmx21Gj8TO4ApuBdP2Af" className="underline" > {t('article_how_to_pass_a_prop_firm_challenge:p-53-p-1')}</a>  <br />
          - <a href="https://www.youtube.com/playlist?list=PLPqWQo6-TXfHyC12MRHK5doA5oUeGwpkV" className="underline" > {t('article_how_to_pass_a_prop_firm_challenge:p-53-p-2')}</a>  <br />
          - <a href="https://www.youtube.com/watch?v=YfhHuqUMz3U" className="underline" > {t('article_how_to_pass_a_prop_firm_challenge:p-53-p-3')}</a>  <br /><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-54')} <br /><br />

          {t('article_how_to_pass_a_prop_firm_challenge:p-55')} <br /><br />

          <CtaButton
            utm="https://app.toptiertrader.com/buy-challenge/?el=How_To_Pass_A_Prop_Firm_Challenge_Blog_CTA&hcategory=July2025&htrafficsource=Website&id=cad77f17-0cb5-4e7d-8a71-644f4a3f6a17&addons=doubleLeverage&addons=tradeOnWeekends&addons=higherProfitShare&addons=maxLoss"
            page="Blog"
            section="How to Pass a Prop Firm Challenge"
            translation={mainLang == 'es' ? "Comienza tu Challenge Ya!" : "Start your Challenge Now!"} />
          <br />

        </article>
      </div>
      <FinalSectionLazyLoading translations={finalSectionTranslations} isResourcesVisible={false} locale={mainLang} />
    </TranslationsProvider>
  )
}

