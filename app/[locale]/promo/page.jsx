import CarouselTextSection from "@/components/common/FinalSection/Carousel-Text-Section";
import SocialMediaSection from "@/components/common/SocialMediaSection/SocialMedia-Section";
import CountdownTimer from "@/components/promo/CountDownTimer";
import Hero from "@/components/promo/Hero";
import { SupportedByTraders } from "@/components/promo/SupportedByTraders";
import { Traders } from "@/components/promo/Traders";
import { WhatYouAreGetting } from "@/components/promo/WhatYouAreGetting";
import { Opportunity } from "@/components/promo/Opportunity";
import ComparationSection from "@/components/home/ComparationSection/Comparation-Section";
import initTranslations from "@/i18n"
import { ENVIRONMENT_URL } from "@/constants/global";

const i18nNameSpaces = ["common", "comparation_section", "payout", "competitive_edge_section", "conversions_page"];

const metadata_es = {
    title: "Claim Your Offer Today | TopTier Proprietary Trading",
    description: "Win big with TopTier, get your offer today and comparte tu historia de éxito en trading. Envía un video testimonial mostrando cómo los pagos de TopTier impactaron tu vida del 19 de noviembre al 11 de diciembre.",
    keywords: "testimonios trading, historias éxito traders, pagos trading, trader financiado, testimonios TopTier, descuento desafíos trading, TopTierPaidForIt",
    language: "es",
    subject: "Historias de Éxito y Testimonios de Trading",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "Claim Your Offer Today",
        description: "Win big with TopTier, get your offer today and únete a la campaña #TopTierPaidForIt compartiendo cómo usaste tus pagos de trading. Historias reales, impacto real.",
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
    title: "Claim Your Offer Today | TopTier Proprietary Trading",
    description: "Win big with TopTier, get your offer today and share your trading success story. Submit a video testimonial showing how TopTier's payouts impacted your life from November 19 - December 11.",
    keywords: "trading testimonials, trader success stories, trading payouts, funded trader, TopTier testimonials, trading challenges discount, TopTierPaidForIt",
    language: "en",
    subject: "Trading Success Stories and Testimonials",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "Claim Your Offer Today",
        description: "Win big with TopTier, get your offer today and join #TopTierPaidForIt campaign by sharing how you used your trading payouts. Real stories, real impact.",
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
    title: "Claim Your Offer Today | TopTier Proprietary Trading",
    description: "Win big with TopTier, get your offer today and partagez votre histoire de réussite en trading. Soumettez une vidéo témoignage montrant comment les paiements de TopTier ont impacté votre vie du 19 novembre au 11 décembre.",
    keywords: "témoignages trading, histoires réussite traders, paiements trading, trader financé, témoignages TopTier, réduction défis trading, TopTierPaidForIt",
    language: "fr",
    subject: "Histoires de Réussite et Témoignages de Trading",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "Claim Your Offer Today",
        description: "Win big with TopTier, get your offer today and rejoignez la campagne #TopTierPaidForIt en partageant comment vous avez utilisé vos paiements de trading. Histoires réelles, impact réel.",
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



export default async function ConversionsPage({ params: { locale } }) {

    const { t } = await initTranslations(locale, i18nNameSpaces);
    const mainLang = locale.split('-')[0]

    const socialmediaTranslations = {
        title: t('common:socialmedia_title'),
        desc: t('common:socialmedia_desc'),
    }

    const comparationTranslations = {
        title: t('comparation_section:title'),
        desc: t('comparation_section:desc'),
        indicators: t('comparation_section:indicators'),
        price: t('comparation_section:price'),
        drawdown: t('comparation_section:drawdown'),
        split: t('comparation_section:split'),
        minimun: t('comparation_section:minimun'),
        evaluation: t('comparation_section:evaluation'),
        targets: t('comparation_section:targets'),
        size: t('comparation_section:size'),
        weekends: t('comparation_section:weekends'),
        frequency: t('comparation_section:frequency'),
        yes: t('comparation_section:yes'),
        up: t('comparation_section:up'),
        phase: t('comparation_section:phase'),
        days: t('comparation_section:days'),
        daily: t('comparation_section:daily')
    }

    const mainTranslations = {
        countdown: {
            h1_title: t("conversions_page:h1_title"),
            days: t("conversions_page:days"),
            hours: t("conversions_page:hours"),
            minutes: t("conversions_page:minutes"),
            seconds: t("conversions_page:seconds"),
            CTA: t("conversions_page:CTA"),
        },
        whatYouAreGetting: {
            t1: t("conversions_page:t1"),
            f1: t("conversions_page:f1"),
            f2: t("conversions_page:f2"),
            f3: t("conversions_page:f3"),
            f4: t("conversions_page:f4"),
            f5: t("conversions_page:f5"),
            f6: t("conversions_page:f6"),
            CTA: t("conversions_page:CTA"),
        },
        traders: {
            t2: t("conversions_page:t2"),
            CTA: t("conversions_page:CTA"),
        },
        oportunity: {
            t3: t("conversions_page:t3"),
            l1: t("conversions_page:l1"),
            l2: t("conversions_page:l2"),
            l3: t("conversions_page:l3"),
            CTA: t("conversions_page:CTA"),
        },
        supportedByTraders: {
            t4: t("conversions_page:t4"),
            t5_1: t("conversions_page:t5_1"),
            t5_2: t("conversions_page:t5_2"),
            CTA: t("conversions_page:CTA"),
        }
    }



    return (
        <div className="text-secondary bg-[#0B111D]">
            <Hero mainLang={mainLang} />
            <CountdownTimer translations={mainTranslations.countdown} />
            <WhatYouAreGetting translations={mainTranslations.whatYouAreGetting} />
            <Traders translations={mainTranslations.traders} />
            <Opportunity translations={mainTranslations.oportunity} mainLang={mainLang} />
            <SupportedByTraders translations={mainTranslations.supportedByTraders} />
            <div className="mt-6 md:mt-12">
                <CarouselTextSection mainLang={mainLang} />
            </div>
            <ComparationSection locale={mainLang} translations={comparationTranslations} />
            <SocialMediaSection locale={mainLang} translations={socialmediaTranslations} />
        </div>
    )
}