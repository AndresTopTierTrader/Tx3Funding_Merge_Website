// app/layout.js
import dynamic from 'next/dynamic';
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import { Analytics } from "@vercel/analytics/react";
import "@/globals.css";
import { Inter } from "next/font/google";
import EnviromentTag from '@/components/common/EnviromentTag';

const MainBanner = dynamic(
  () => import("@/components/common/Banner/MainBanner"),
  { 
    ssr: false, 
    loading: () => <div className="h-16 bg-gray-100 animate-pulse" aria-label="Loading banner" /> 
  }
);

const inter = Inter({
  subsets: ["latin"],
  weights: ["300", "400", "500", "700", "900"],
  display: 'swap',
  preload: true,
});

const NavbarLazyLoading = dynamic(
  () => import("@/components/common/Navbar/Main.jsx"),
  {
    ssr: true,
    loading: () => <div className="h-16 bg-gray-100 animate-pulse" aria-label="Loading navigation" />,
  }
);

const FooterLazyLoading = dynamic(
  () => import("@/components/common/Footer/Main"),
  {
    ssr: true,
    loading: () => <div className="h-40 bg-white animate-pulse" aria-label="Loading footer" />,
  }
);

const Intercom = dynamic(
  () => import('@/utils/misc/Intercom'),
  {
    ssr: false,
    loading: () => null,
  }
);

// Client Components for handling cookie consent and scripts
const CookieConsentHandler = dynamic(
  () => import('@/components/misc/CookieConsentHandler'),
  { ssr: false }
);

const i18nNameSpaces = ["home", "navbar", "payout", "common", "table_section", "footer"];

export default async function Layout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNameSpaces);

  const couponTranslations = {
    off: t('common:coupon_off'),
    lifetime: t('common:coupon_lifetime'),
    payout: t('common:coupon_payout'),
    refund: t('common:coupon_refund'),
    code: t('common:coupon_use_code'),
    click: t('common:click'),
    valid: t('common:valid'),
    hourGet: t('common:hour_get'),
    hourDay: t('common:hour_day'),
    hourOne: t('common:hour_one'),
    hour24: t('common:hour_24'),
    hourPayout: t('common:hour_payout'),
    hourFunded: t('common:hour_funded'),
    hourNowOffering: t('common:hour_now_offering'),
    bebold: {
      bold: t('common:bebold_bold'),
      with: t('common:bebold_with'),
      code: t('common:bebold_code'),
      lifetime: t('common:bebold_lifetime'),
      payout: t('common:bebold_payout'),
      valid: t('common:bebold_valid')
    },
    community: {
      for: t('common:community_for'),
      community: t('common:community_community'),
      until: t('common:community_until'),
      code: t('common:community_code')
    },
        traderQuiz: {
      p1: t('common:traderQuizCoupon_p1'),
      p2: t('common:traderQuizCoupon_p2'),
      CTA: t('common:traderQuizCoupon_CTA'),
    },
    newToToptier: {
      p1: t('common:newToToptier_p1'),
      p2: t('common:newToToptier_p2'),
      p3: t('common:newToToptier_p3'),
      p4: t('common:newToToptier_p4'),
      CTA: t('common:newToToptier_CTA'),
    }
  };

  const footerTranslations = {
    products: t('navbar:products'),
    resources: t('navbar:resources'),
    company: t('navbar:company'),
    about: t('navbar:about'),
    affiliates: t('navbar:affiliates'),
    contact: t('navbar:contact'),
    disclaimer: t('footer:disclaimer'),
    termsLink: t('footer:termsLink'),
    privacyLink: t('footer:privacyLink'),
    refundLink: t('footer:refundLink'),
  };

  const cookieTranslations = {
    title: t('common:cookie_title'),
    description: t('common:cookie_desc'),
    agree: t('common:cookie_agree'),
    decline: t('common:cookie_decline')
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        <TranslationsProvider
          resources={resources}
          locale={locale}
          namespaces={i18nNameSpaces}
        >
          <NavbarLazyLoading locale={locale} />
          <main className="w-full overflow-x-hidden">
            {children}
          </main>
          <EnviromentTag />
          {/* <MainBanner translations={couponTranslations} locale={locale} /> */}
          <FooterLazyLoading locale={locale} translations={footerTranslations} />
          <CookieConsentHandler translations={cookieTranslations} />
          <Analytics />
          <Intercom locale={locale} />
        </TranslationsProvider>
      </body>
    </html>
  );
}