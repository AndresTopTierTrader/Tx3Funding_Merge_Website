import { lazy, Suspense } from "react";
import initTranslations from "@/i18n";

// Lazy load all components
const CarouselTextSection = lazy(() => import("@/components/common/FinalSection/Carousel-Text-Section"));
const Hero = lazy(() => import("@/components/prop-firm-secrets/hero/Main").then(module => ({ default: module.Hero })));
const Secret1 = lazy(() => import("@/components/prop-firm-secrets/secret1/Main").then(module => ({ default: module.Secret1 })));
const Secret2 = lazy(() => import("@/components/prop-firm-secrets/secret2/Main").then(module => ({ default: module.Secret2 })));
const Secret3 = lazy(() => import("@/components/prop-firm-secrets/secret3/Main").then(module => ({ default: module.Secret3 })));
const WhatIDidNotDo = lazy(() => import("@/components/prop-firm-secrets/what-not-do/Main").then(module => ({ default: module.WhatIDidNotDo })));
const SocialMediaSection = lazy(() => import("@/components/common/SocialMediaSection/SocialMedia-Section"));
const SameSecrets = lazy(() => import("@/components/prop-firm-secrets/sameSecrets/Main").then(module => ({ default: module.SameSecrets })));
const TableSection = lazy(() => import("@/components/common/TableSection/Main"));

const i18nNameSpaces = ["common", "prop_firm_secrets", "table_section"];

// Loading component for better UX
const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#717892]"></div>
    </div>
);

// Section wrapper component for consistent loading states
const LazySection = ({ children, className = "" }) => (
    <Suspense fallback={<LoadingSpinner />}>
        <div className={className}>
            {children}
        </div>
    </Suspense>
);

export default async function PropFirmSecrets({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, i18nNameSpaces);

    const socialmediaTranslations = {
        title: t('common:socialmedia_title'),
        desc: t('common:socialmedia_desc'),
    };

    const heroTranslations = {
        h1_title_1: t('prop_firm_secrets:h1_title_1'),
        h1_title_2: t('prop_firm_secrets:h1_title_2'),
        p1: t('prop_firm_secrets:p1'),
        CTA: t('prop_firm_secrets:CTA'),
    };

    const secret1 = {
        secret_1: t('prop_firm_secrets:secret_1'),
        t1: t('prop_firm_secrets:t1'),
        p2: t('prop_firm_secrets:p2'),
        p3: t('prop_firm_secrets:p3'),
        p4: t('prop_firm_secrets:p4'),
        p5: t('prop_firm_secrets:p5'),
        st_1: t('prop_firm_secrets:st_1'),
        st_2: t('prop_firm_secrets:st_2'),
        st_3: t('prop_firm_secrets:st_3'),
        quote_1_1: t('prop_firm_secrets:quote_1_1'),
        quote_1_2: t('prop_firm_secrets:quote_1_2'),
        quote_1_3: t('prop_firm_secrets:quote_1_3'),
    };

    const secret2 = {
        secret_2: t('prop_firm_secrets:secret_2'),
        t2: t('prop_firm_secrets:t2'),
        p6: t('prop_firm_secrets:p6'),
        p7: t('prop_firm_secrets:p7'),
        p8: t('prop_firm_secrets:p8'),
        p9: t('prop_firm_secrets:p9'),
        coin_1: t('prop_firm_secrets:coin_1'),
        coin_2: t('prop_firm_secrets:coin_2'),
        coin_3: t('prop_firm_secrets:coin_3'),
        coin_4: t('prop_firm_secrets:coin_4'),
        quote_2_1: t('prop_firm_secrets:quote_2_1'),
        quote_2_2: t('prop_firm_secrets:quote_2_2'),
    };

    const secret3 = {
        secret_3: t('prop_firm_secrets:secret_3'),
        t3: t('prop_firm_secrets:t3'),
        p10: t('prop_firm_secrets:p10'),
        p11: t('prop_firm_secrets:p11'),
        p12: t('prop_firm_secrets:p12'),
        p13: t('prop_firm_secrets:p13'),
        p14: t('prop_firm_secrets:p14'),
    };

    const whatIDidNotDo = {
        t4_1: t('prop_firm_secrets:t4_1'),
        t4_2: t('prop_firm_secrets:t4_2'),
        t4_3: t('prop_firm_secrets:t4_3'),
        st_4: t('prop_firm_secrets:st_4'),
        st_5: t('prop_firm_secrets:st_5'),
        st_6: t('prop_firm_secrets:st_6'),
        p15: t('prop_firm_secrets:p15'),
        p16: t('prop_firm_secrets:p16'),
        p17: t('prop_firm_secrets:p17'),
        p18: t('prop_firm_secrets:p18'),
    };

    const sameSecrets = {
        t5_1: t('prop_firm_secrets:t5_1'),
        t5_2: t('prop_firm_secrets:t5_2'),
        p19: t('prop_firm_secrets:p19'),
        p20: t('prop_firm_secrets:p20'),
        p21: t('prop_firm_secrets:newCta'),
        p22: t('prop_firm_secrets:p22'),
        p23: t('prop_firm_secrets:p23'),
        st_7: t('prop_firm_secrets:st_7'),
        st_8: t('prop_firm_secrets:st_8'),
        st_9: t('prop_firm_secrets:st_9'),
    };

    const tableTranslations = {
        accountType: t('table_section:table_accountType'),
        description: t('table_section:description'),
        table_one_phase: t('table_section:table_one_phase'),
        table_two_phase: t('table_section:table_two_phase'),
        challenge: t('table_section:table_challenge'),
        get: t('table_section:table_get'),
        limited_time: t('table_section:table_limited_time'),
        offer_1: t('table_section:offer_1'),
        offer_2: t('table_section:offer_2'),
        offer_3: t('table_section:offer_3'),
      }
    return (
        <div className="bg-[#0B111D] text-[#717892]">
            <LazySection>
                <Hero translations={heroTranslations} />
            </LazySection>

            <LazySection>
                <Secret1 translations={secret1} />
            </LazySection>

            <LazySection>
                <Secret2 translations={secret2} />
            </LazySection>

            <LazySection>
                <Secret3 translations={secret3} locale={locale} />
            </LazySection>

            <LazySection>
                <WhatIDidNotDo translations={whatIDidNotDo} />
            </LazySection>

            <LazySection>
                <TableSection locale={locale} translations={tableTranslations} />

            </LazySection>

            <LazySection>
                <SameSecrets translations={sameSecrets} promoCode={'Secret20'} />
            </LazySection>

            <LazySection className="my-32">
                <CarouselTextSection />
            </LazySection>

            <LazySection>
                <SocialMediaSection translations={socialmediaTranslations} />
            </LazySection>
        </div>
    );
}