"use client";

import { heroSlides, companyInfo } from "../../app/lib/data";
import { Language } from "../../app/lib/types";
import { getTranslations } from "../../app/lib/i18n";

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = getTranslations(lang);
  const isRTL = lang === "ar";

  return (
    <div className="relative h-[600px] overflow-hidden mt-16">
      {heroSlides.map((slide, index) => (
        <div key={index} className="absolute inset-0">
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {lang === "ar" ? "مرحباً بكم في" : "Welcome To"} <br />
                {lang === "ar" ? "الصفورا" : "EL SAFWA"}
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                {lang === "ar"
                  ? companyInfo.descriptionAr
                  : companyInfo.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-all">
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-all">
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
