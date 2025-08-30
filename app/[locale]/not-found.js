//Functions 
import TranslationsProvider from "@/TranslationsProvider";
import initTranslations from "@/i18n";
import { bgImageStyle } from "@/constants/styles"
import { ENVIRONMENT_URL } from "@/constants/global";

const i18nNameSpaces = ["home"];


export const metadata = {
  title: "Page Not Found - TopTier Trader",
  description:
    "TopTier Trader is an evaluation company that is searching for experienced traders. Get Funded and start your journey today!",
};

export default async function NotFound() {
  const { t, resources } = await initTranslations("en", i18nNameSpaces);

  return (

    <TranslationsProvider
      resources={resources}
      locale={"en"}
      namespaces={i18nNameSpaces}
    >
      <div className='flex flex-col  items-center -mt-0 py-24 mb:mt-0 mb:py-40 ' style={bgImageStyle}>
        <p className='pt-20 pb-5 font-semibold text-7xl bg-gradient-to-r from-[#45D1FF] to-[#167BCC] inline-block text-transparent bg-clip-text'>404</p>
        <p className='text-textPrimary text-center text-3xl mb:text-4xl font-light'>Opps... Something went wrong</p>
        <p className='mt-5 text-secondary'>Let us guide you back</p>
        <a href={`${ENVIRONMENT_URL}`}>
          <button className='text-textPrimary py-2 px-3 border text-sm border-slate-300 rounded-lg mt-5' >
            Back to Home Page
          </button>
        </a>
      </div>
    </TranslationsProvider>

  );
}