"use client";

import { useState, useEffect } from "react";
import { heroSlides } from "@/lib/data";
import { Language } from "@/lib/types";

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden mt-16">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/65 pointer-events-none" />

      {/* Shared overlay - one for all slides */}
      <div className="absolute inset-0 bg-black/40 flex items-center pointer-events-none">
        <div className={`text-white px-4 md:px-8 md:pr-16 ${lang === "ar" ? "text-right" : "text-left"} max-w-2xl`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-white">{lang === "ar" ? "مرحباً بكم في" : "Welcome To"}</span>{' '}
            <span className="text-[#b0b435]">{lang === "ar" ? "الصفورا" : "EL SAFWA"}</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            {lang === "ar"
              ? "شركة الصفورا للتصدير هي شركة مصرية متخصصة في تصدير مجموعة واسعة من المنتجات الزراعية والصناعية إلى الأسواق العالمية. تركز الشركة على تقديم منتجات عالية الجودة تتوافق مع المعايير الدولية، مما يساهم في سمعة المنتجات المصرية في الأسواق الخارجية. تهدف الصفورة للتصدير إلى بناء شراكات قوية مع عملائها من خلال الالتزام بالجودة والمواعيد والشفافية في التعاملات التجارية."
              : "EL SAFWA FOR EXPORT is an Egyptian company specialized in exporting a wide range of agricultural and industrial products to global markets. The company focuses on providing high-quality products that meet international standards, contributing to the reputation of Egyptian products in foreign markets. EL SAFWA FOR EXPORT aims to build strong partnerships with its clients by adhering to quality, deadlines, and transparency in business dealings."}
          </p>
        </div>
      </div>
    </div>
  );
}