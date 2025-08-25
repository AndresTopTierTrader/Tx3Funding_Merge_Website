import initTranslations from "@/i18n";
import CarouselTextSection from "@/components/common/FinalSection/Carousel-Text-Section";
import SocialMediaSection from "@/components/common/SocialMediaSection/SocialMedia-Section";
import { Hero } from "@/components/military-discount/hero/Main";
import ExactPicks from "@/components/military-discount/exactPicks/Main";
import TrustpilotSection from "@/components/home/TrustpilotSection/Trustpilot-Section";
import { ENVIRONMENT_URL } from "@/constants/global";

const i18nNameSpaces = ["common", "prop_firm_secrets", "reveal_my_strategy", "competitive_edge_section"];

const metadata_en = {
    metadataBase: new URL(ENVIRONMENT_URL),
    title: "Military Discount - TopTier Trader | Exclusive Savings for Service Members",
    description: "Get 10% off all trading challenges at TopTier Trader. Exclusive military discount for active duty service members and veterans. Join thousands of traders earning real funding.",
    keywords: "military discount, veteran discount, prop trading military, trading discount veterans, active duty discount, military trading program, veteran trader funding, service member discount",
    language: "en",
    subject: "Military Discount Program - Proprietary Trading",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "Military Discount - 10% Off All Trading Challenges | TopTier Trader",
        description: "Exclusive military discount for active duty & veterans. Get 10% off all trading challenges, lightning-fast payouts, and 24/7 support. Honor your service with TopTier Trader.",
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/en/military-discount`
    },
    alternates: {
        canonical: `${ENVIRONMENT_URL}/en/military-discount`,
        languages: {
            'en': '/en/military-discount',
            'es': '/es/descuento-militar',
            'es-co': '/es-co/descuento-militar',
            'es-ar': '/es-ar/descuento-militar',
            'es-mx': '/es-mx/descuento-militar',
            'es-pr': '/es-pr/descuento-militar',
            'fr': '/fr/reduction-militaire'
        }
    }
};

const metadata_es = {
    metadataBase: new URL(ENVIRONMENT_URL),
    title: "Descuento Militar - TopTier Trader | Ahorros Exclusivos para Miembros del Servicio",
    description: "Obtén 10% de descuento en todos los desafíos de trading en TopTier Trader. Descuento militar exclusivo para miembros en servicio activo y veteranos. Únete a miles de traders obteniendo financiamiento real.",
    keywords: "descuento militar, descuento veteranos, prop trading militar, descuento trading veteranos, descuento servicio activo, programa trading militar, financiamiento trader veterano, descuento miembro servicio",
    language: "es",
    subject: "Programa de Descuento Militar - Trading Propietario",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "Descuento Militar - 10% en Todos los Desafíos de Trading | TopTier Trader",
        description: "Descuento militar exclusivo para servicio activo y veteranos. Obtén 10% de descuento en todos los desafíos, pagos ultrarrápidos y soporte 24/7. Honramos tu servicio con TopTier Trader.",
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/es/descuento-militar`
    },
    alternates: {
        canonical: `${ENVIRONMENT_URL}/es/descuento-militar`,
        languages: {
            'en': '/en/military-discount',
            'es': '/es/descuento-militar',
            'es-co': '/es-co/descuento-militar',
            'es-ar': '/es-ar/descuento-militar',
            'es-mx': '/es-mx/descuento-militar',
            'es-pr': '/es-pr/descuento-militar',
            'fr': '/fr/reduction-militaire'
        },
        openGraph: {
            images: {}
        }
    }
};

const metadata_fr = {
    metadataBase: new URL(ENVIRONMENT_URL),
    title: "Réduction Militaire - TopTier Trader | Économies Exclusives pour les Membres du Service",
    description: "Obtenez 10% de réduction sur tous les défis de trading chez TopTier Trader. Réduction militaire exclusive pour les membres en service actif et les vétérans. Rejoignez des milliers de traders obtenant un financement réel.",
    keywords: "réduction militaire, réduction vétérans, prop trading militaire, réduction trading vétérans, réduction service actif, programme trading militaire, financement trader vétéran, réduction membre service",
    language: "fr",
    subject: "Programme de Réduction Militaire - Trading Propriétaire",
    coverage: "Global",
    robots: "index, follow",
    author: "TopTier Trader",
    publisher: "TopTier Trader LLC",
    og: {
        type: "website",
        title: "Réduction Militaire - 10% sur Tous les Défis de Trading | TopTier Trader",
        description: "Réduction militaire exclusive pour le service actif et les vétérans. Obtenez 10% de réduction sur tous les défis, paiements ultra-rapides et support 24/7. Nous honorons votre service avec TopTier Trader.",
        site_name: "TopTier Trader",
        url: `${ENVIRONMENT_URL}/fr/reduction-militaire`
    },
    alternates: {
        canonical: `${ENVIRONMENT_URL}/fr/reduction-militaire`,
        languages: {
            'en': '/en/military-discount',
            'es': '/es/descuento-militar',
            'es-co': '/es-co/descuento-militar',
            'es-ar': '/es-ar/descuento-militar',
            'es-mx': '/es-mx/descuento-militar',
            'es-pr': '/es-pr/descuento-militar',
            'fr': '/fr/reduction-militaire'
        },
        openGraph: {
            images: {}
        }
    }
};

export async function generateMetadata({ params: { locale } }) {

    let returnedMetadata = ''
    if (locale === "en") {
        returnedMetadata = metadata_en
    }
    if (locale === "es") {
        returnedMetadata = metadata_es
    }
    if (locale === "fr") {
        returnedMetadata = metadata_fr
    }
    return returnedMetadata
}


export default async function PropFirmSecrets({ params: { locale } }) {

    const { t, resources } = await initTranslations(locale, i18nNameSpaces);

    const socialmediaTranslations = {
        title: t('common:socialmedia_title'),
        desc: t('common:socialmedia_desc'),
    }

    const heroTranslations = {
        h1_title_1: t("reveal_my_strategy:h1_title_1"),
        h1_title_2: t("reveal_my_strategy:h1_title_2"),
        h1_title_3: t("reveal_my_strategy:h1_title_3"),
        h1_title_4: t("reveal_my_strategy:h1_title_4"),
    }

    const picks = {
        t1_1: t("reveal_my_strategy:t1_1"),
        t1_2: t("reveal_my_strategy:t1_2"),
        t1_3: t("reveal_my_strategy:t1_3"),
        p1: t("reveal_my_strategy:p1"),
        p2: t("reveal_my_strategy:p2"),
        p3: t("reveal_my_strategy:p3"),
        p4: t("reveal_my_strategy:p4"),
        p5: t("reveal_my_strategy:p5"),
    }

    const communityTranslations = {
        community_title: t('competitive_edge_section:community_title'),
        community_review: t('competitive_edge_section:community_review'),
        cta: t('competitive_edge_section:cta')
    }

    return (
        <div className="bg-[#0B111D] text-[#717892]">
            <Hero translations={heroTranslations} />
            <ExactPicks translations={picks} />
            <section className="py-10">
                <TrustpilotSection locale={locale} translations={communityTranslations} />
            </section>
            <span className="my-32">
                <CarouselTextSection />
            </span>
            <SocialMediaSection translations={socialmediaTranslations} />
        </div>
    )
}