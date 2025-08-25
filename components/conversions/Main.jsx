import heroImgEn from "./assets/heroImgEn.webp";
import heroImgEs from "./assets/heroImgEs.webp";
import Image from "next/image";

export function Hero({ mainLang }) {
  const heroImg = mainLang === "es" ? heroImgEs : heroImgEn;
  const altText =
    mainLang === "es" ? "imagen de una oferta" : "hero image of an offer";

  return (
    <section className="pt-20 px-7 md:pt-28">
      <Image
        src={heroImg}
        alt={altText}
        loading="lazy"
        className="w-full mx-auto max-w-[1280px]"
      />
    </section>
  );
}
