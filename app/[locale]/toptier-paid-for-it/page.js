//Functions
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import dynamic from "next/dynamic";
import { ENVIRONMENT_URL } from "@/constants/global";

//Lazy loading for components
const MainSectionLazyLoading = dynamic(() => import("@/components/toptier-paid-for-it/Main"), {
  ssr: true
})

const JoinUsLazyLoading = dynamic(() => import("@/components/toptier-paid-for-it/JoinUs"), {
  ssr: true
})

const TestimonialLazyLoading = dynamic(() => import("@/components/toptier-paid-for-it/Testimonial"), {
  ssr: true
})

const SubmissionLazyLoading = dynamic(() => import("@/components/toptier-paid-for-it/Submission"), {
  ssr: true
})

const i18nNameSpaces = ["toptier-paid-for-it", "common", "products"];

const metadata_es = {
  title: "TopTier Paid For It - Comparte Tu Historia de Éxito | TopTier Proprietary Trading",
  description: "Comparte tu historia de éxito en trading y obtén 50% de descuento en tu próximo desafío. Envía un video testimonial mostrando cómo los pagos de TopTier impactaron tu vida del 19 de noviembre al 11 de diciembre.",
  keywords: "testimonios trading, historias éxito traders, pagos trading, trader financiado, testimonios TopTier, descuento desafíos trading, TopTierPaidForIt",
  language: "es",
  subject: "Historias de Éxito y Testimonios de Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "TopTier Paid For It - Comparte Tu Historia de Éxito",
    description: "Únete a la campaña #TopTierPaidForIt compartiendo cómo usaste tus pagos de trading. Envía un video testimonial y recibe 50% de descuento en todos los desafíos. Historias reales, impacto real.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/es/paid-for-it`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/es/paid-for-it`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    },
    openGraph: {
      images: {}
    }
  }
};

const metadata_en = {
  title: "TopTier Paid For It - Share Your Success Story | TopTier Proprietary Trading",
  description: "Share your trading success story and get 50% OFF your next challenge. Submit a video testimonial showing how TopTier's payouts impacted your life from November 19 - December 11.",
  keywords: "trading testimonials, trader success stories, trading payouts, funded trader, TopTier testimonials, trading challenges discount, TopTierPaidForIt",
  language: "en",
  subject: "Trading Success Stories and Testimonials",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "TopTier Paid For It - Share Your Success Story",
    description: "Join #TopTierPaidForIt campaign by sharing how you used your trading payouts. Submit a video testimonial and receive 50% OFF all trading challenges. Real stories, real impact.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/en/paid-for-it`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/en/paid-for-it`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    },
    openGraph: {
      images: {}
    }
  }
};

const metadata_fr = {
  title: "TopTier Paid For It - Partagez Votre Histoire de Réussite | TopTier Proprietary Trading",
  description: "Partagez votre histoire de réussite en trading et obtenez 50% de réduction sur votre prochain défi. Soumettez une vidéo témoignage montrant comment les paiements de TopTier ont impacté votre vie du 19 novembre au 11 décembre.",
  keywords: "témoignages trading, histoires réussite traders, paiements trading, trader financé, témoignages TopTier, réduction défis trading, TopTierPaidForIt",
  language: "fr",
  subject: "Histoires de Réussite et Témoignages de Trading",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "TopTier Paid For It - Partagez Votre Histoire de Réussite",
    description: "Rejoignez la campagne #TopTierPaidForIt en partageant comment vous avez utilisé vos paiements de trading. Soumettez une vidéo témoignage et recevez 50% de réduction sur tous les défis. Histoires réelles, impact réel.",
    site_name: "TopTier Trader",
    url: `${ENVIRONMENT_URL}/fr/paid-for-it`
  },
  alternates: {
    canonical: `${ENVIRONMENT_URL}/fr/paid-for-it`,
    languages: {
      'en': '/en',
      'es': '/es',
      'es-co': '/es-co',
      'es-ar': '/es-ar',
      'es-mx': '/es-mx',
      'es-pr': '/es-pr',
      'fr': '/fr'
    },
    openGraph: {
      images: {}
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

const bgImageStyle = {
  backgroundColor: 'hsla(219,45%,7%,1)',
  backgroundImage: `
    radial-gradient(at 63% 43%, hsla(217,43%,7%,1) 0px, transparent 50%),
    radial-gradient(at 63% 59%, hsla(197,100%,32%,0.2) 0px, transparent 50%),
    radial-gradient(at 80% 94%, hsla(218,44%,7%,1) 0px, transparent 50%),
    radial-gradient(at 39% 40%, hsla(218,44%,7%,1) 0px, transparent 50%),
    radial-gradient(at 39% 76%, hsla(218,44%,7%,1) 0px, transparent 50%),
    radial-gradient(at 99% 46%, hsla(212,100%,20%,1) 0px, transparent 50%),
    radial-gradient(at 51% 0%, hsla(212,100%,20%,1) 0px, transparent 50%),
    radial-gradient(at 0% 47%, hsla(212,100%,15%,1) 0px, transparent 50%),
    radial-gradient(at 0% 61%, hsla(197,100%,32%,0.6) 0px, transparent 50%)
  `
}


export default async function Products({ params: { locale } }) {


  const { t, resources, i18n } = await initTranslations(locale, i18nNameSpaces);

  const translations = {
    received: t("toptier-paid-for-it:received"),
    interested: t("toptier-paid-for-it:interested"),
    next: t("toptier-paid-for-it:next"),
    ready: t("toptier-paid-for-it:ready"),
    join: t("toptier-paid-for-it:join"),
    the: t("toptier-paid-for-it:the"),
    campaign: t("toptier-paid-for-it:campaign"),
    excited: t("toptier-paid-for-it:excited"),
    promo: t("toptier-paid-for-it:promo"),
    how: t("toptier-paid-for-it:how"),
    testimonial: t("toptier-paid-for-it:testimonial"),
    step_one: t("toptier-paid-for-it:step_one"),
    step_two: t("toptier-paid-for-it:step_two"),
    step_three: t("toptier-paid-for-it:step_three"),
    submission: t("toptier-paid-for-it:submission"),
    guidelines: t("toptier-paid-for-it:guidelines"),
    before: t("toptier-paid-for-it:before"),
    video_req: t("toptier-paid-for-it:video_req"),
    orientation: t("toptier-paid-for-it:orientation"),
    orientation_desc: t("toptier-paid-for-it:orientation_desc"),
    light: t("toptier-paid-for-it:light"),
    light_desc: t("toptier-paid-for-it:light_desc"),
    length: t("toptier-paid-for-it:length"),
    length_desc: t("toptier-paid-for-it:length_desc"),
    content: t("toptier-paid-for-it:content"),
    content_desc: t("toptier-paid-for-it:content_desc"),
    funding: t("toptier-paid-for-it:funding"),
    funding_desc: t("toptier-paid-for-it:funding_desc"),
    biggest: t("toptier-paid-for-it:biggest"),
    biggest_desc: t("toptier-paid-for-it:biggest_desc"),
    used: t("toptier-paid-for-it:used"),
    used_desc: t("toptier-paid-for-it:used_desc"),
    receiving: t("toptier-paid-for-it:receiving"),
    receiving_desc: t("toptier-paid-for-it:receiving_desc"),
    cta: t("toptier-paid-for-it:cta"),
    note_title: t("toptier-paid-for-it:note_title"),
    note_desc: t("toptier-paid-for-it:note_desc"),
    check_video: t("toptier-paid-for-it:check_video"),
    form: {
      form_upload: t("toptier-paid-for-it:form_upload"),
      form_here: t("toptier-paid-for-it:form_here"),
      form_get: t("toptier-paid-for-it:form_get"),
      form_next: t("toptier-paid-for-it:form_next"),
      form_first: t("toptier-paid-for-it:form_first"),
      form_last: t("toptier-paid-for-it:form_last"),
      form_email: t("toptier-paid-for-it:form_email"),
      form_clicking: t("toptier-paid-for-it:form_clicking"),
      form_terms: t("toptier-paid-for-it:form_terms"),
      form_max_upload: t("toptier-paid-for-it:form_max_upload"),
      form_cta: t("toptier-paid-for-it:form_cta"),
      form_selected: t("toptier-paid-for-it:form_selected"),
      form_few: t("toptier-paid-for-it:form_few"),
      form_success_title: t("toptier-paid-for-it:form_success_title"),
      form_succes_desc: t("toptier-paid-for-it:form_succes_desc"),
      form_error_title: t("toptier-paid-for-it:form_error_title"),
      form_error_desc: t("toptier-paid-for-it:form_error_desc"),
      form_home: t("toptier-paid-for-it:form_home"),
      form_uploading: t("toptier-paid-for-it:form_uploading"),
      form_phone: t("toptier-paid-for-it:form_phone"),
      form_account: t("toptier-paid-for-it:form_account"),
      form_payout_amount: t("toptier-paid-for-it:form_payout_amount"),
      form_story: t("toptier-paid-for-it:form_story"),
      form_payout: t("toptier-paid-for-it:form_payout")
    }
  }

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNameSpaces}
    >
      <div style={bgImageStyle} className="text-base text-slate-300">
        <MainSectionLazyLoading locale={locale} translations={translations} />
        <JoinUsLazyLoading translations={translations} />
        <TestimonialLazyLoading locale={locale} translations={translations} />
        <SubmissionLazyLoading translations={translations} locale={locale} />
      </div>

    </TranslationsProvider >
  )
}

