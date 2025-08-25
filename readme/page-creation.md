# Creating New Pages in the Next.js App Router

This project uses the **Next.js App Router** architecture. All page routes are located in the `app/` directory, where each folder represents a new route endpoint.

---

## 🛠 How to Create a New Page

To add a new page to the site:

1. **Create a folder** inside the `app/` directory named after the desired endpoint.
2. Inside this folder, create a file named `page.jsx` (or `page.js`).

Example:
```
app/
└── your-endpoint/
    └── page.jsx
```

---

## 📄 Page File Structure

Each `page.jsx` file should include the following:

### 1. Metadata Objects

Define metadata for each supported language (English, Spanish, French):

```js
const metadata_en = {
  title: "TopTier Trader - High Quality Proprietary Trading | Fair Trading Conditions",
  description: "TopTier offers fair trading conditions, simple rules, and guaranteed 24-hour payouts. Start your challenge today with a prop firm that refuses to compromise on quality.",
  keywords: "prop trading, proprietary trading, funded trader, trading challenge, fair trading conditions, fast payouts, trading support, TopTier Trader",
  language: "en",
  subject: "Proprietary Trading Services and Challenges",
  coverage: "Global",
  robots: "index, follow",
  author: "TopTier Trader",
  publisher: "TopTier Trader LLC",
  og: {
    type: "website",
    title: "TopTier Trader - Quality Proprietary Trading That Puts Traders First",
    description: "We could make it cheaper. We could also make it worse. TopTier offers fair trading conditions, simple rules, and 24-hour payouts with no hidden costs or tricks.",
    site_name: "TopTier Trader",
    url: "https://www.toptiertrader.com/en/could-be-worse"
  },
  alternates: {
    canonical: "https://www.toptiertrader.com/en/could-be-worse",
    languages: {
      en: "/en",
      es: "/es",
      "es-co": "/es-co",
      "es-ar": "/es-ar",
      "es-mx": "/es-mx",
      "es-pr": "/es-pr",
      fr: "/fr"
    },
    openGraph: {
      images: {}
    }
  }
};
```

### 2. `generateMetadata` Function

This function selects the correct metadata object based on the locale:

```js
export async function generateMetadata({ params: { locale } }) {
  let returnedMetadata = "";
  const mainLang = locale.split("-")[0];

  if (mainLang === "en") returnedMetadata = metadata_en;
  if (mainLang === "es") returnedMetadata = metadata_es;
  if (mainLang === "fr") returnedMetadata = metadata_fr;

  return returnedMetadata;
}
```

### 3. Translation Namespaces

Declare the translation namespaces for [i18Nexus](#i18nexus-implementation-guide):

```js
const i18nNameSpaces = ["common", "your_namespace_here"];
```

### 4. Default Export Function

The main component of the page must be an async function to fetch translations:

```js
export default async function YourPage({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18nNameSpaces);
  const mainLang = locale.split("-")[0];

  const translations = {
    section: {
      title: t("your_namespace:title"),
      description: t("your_namespace:description")
    }
  };

  return (
    <div className="text-[#0B111D]">
      <YourComponent locale={mainLang} translations={translations.section} />
    </div>
  );
}
```

---

## 🧩 Page Content with Components

To keep the page modular and clean:

- Avoid writing HTML directly inside `page.jsx`.
- Abstract each section into reusable components.
- Place components inside `components/YOUR_PAGE_ENDPOINT/SECTION_NAME/component.jsx`.

Example:
```
components/
└── could_be_worse/
    └── Hero/
        └── component.jsx
```

Use the components in your page like this:

```js
import Hero from "@/components/could_be_worse/Hero/component";

<Hero locale={mainLang} translations={translations.hero} />
```

Pass down the `translations` via props to each section.

---

## ✅ Full Example

```js
export async function generateMetadata({ params: { locale } }) {
  let returnedMetadata = '';
  const mainLang = locale.split('-')[0];

  if (mainLang === "en") returnedMetadata = metadata_en;
  if (mainLang === "es") returnedMetadata = metadata_es;
  if (mainLang === "fr") returnedMetadata = metadata_fr;

  return returnedMetadata;
}

const i18nNameSpaces = ["common", "could_be_worse"];

export default async function CouldBeWorse({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18nNameSpaces);
  const mainLang = locale.split('-')[0];

  const translations = {
    hero: {
      h1_title_1: t("could_be_worse:h1_title_1"),
      h1_title_2: t("could_be_worse:h1_title_2")
    },
    cheapPropFirms: {
      t1: t("could_be_worse:t1")
    },
    whatTTStands: {
      t3: t("could_be_worse:t3"),
      card1_t: t("could_be_worse:card1_t")
    },
    theOnlyPropFirm: {
      t4_1: t("could_be_worse:t4_1")
    },
    videosSection: {
      t5: t("could_be_worse:t5"),
      p7: t("could_be_worse:p7")
    },
    youTradeWePay: {
      t6: t("could_be_worse:t6"),
      p8: t("could_be_worse:p8"),
      button1: t("could_be_worse:button_1")
    },
    socialMediaSection: {
      title: t("could_be_worse:t7"),
      desc: t("could_be_worse:p9")
    }
  };

  return (
    <div className="text-[#0B111D]">
      <Hero locale={mainLang} translations={translations.hero} />
      <CheapPropFirms translations={translations.cheapPropFirms} />
      <WhatTTStands translations={translations.whatTTStands} />
      <TheOnlyPropFirm translations={translations.theOnlyPropFirm} />
      <VideoSlider translations={translations.videosSection} />
      <YouTradeWePay translations={translations.youTradeWePay} />
      <SocialMediaSection translations={translations.socialMediaSection} />
    </div>
  );
}
```
