import React from 'react'
import Proxy from "@/utils/misc/proxy";
import initTranslations from "@/i18n";

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

const i18nNameSpaces = ["common", "about-section"];

export default async function Page({ params: { locale } }) {

  const { t, resources } = await initTranslations(locale, i18nNameSpaces);



  return (
    <div>
      <Proxy link={'https://help.toptiertrader.com/en/articles/9545987-upcoming-changes-to-overleveraging-all/?el=AllorNothingWebRedirection&hcategory=Jul2024&htrafficsource=Email'} />
    </div>
  )
}
