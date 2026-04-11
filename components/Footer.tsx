"use client";

import Link from "next/link";
import { companyInfo, navigation } from "../../app/lib/data";
import { Language } from "../../app/lib/types";
import { getTranslations } from "../../app/lib/i18n";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = getTranslations(lang);
  const isRTL = lang === "ar";

  return (
    <footer className="bg-gray-100 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              {lang === "ar" ? "معلومات" : "Information"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={lang === "ar" ? "/ar/about" : "/en/about"}
                  className="text-gray-600 hover:text-[#b0b435]"
                >
                  {lang === "ar" ? "من نحن" : "About Us"}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === "ar" ? "/ar/gallery" : "/en/gallery"}
                  className="text-gray-600 hover:text-[#b0b435]"
                >
                  {lang === "ar" ? "المعرض" : "Gallery"}
                </Link>
              </li>
              <li>
                <Link
                  href={lang === "ar" ? "/ar/contact" : "/en/contact"}
                  className="text-gray-600 hover:text-[#b0b435]"
                >
                  {lang === "ar" ? "اتصل بنا" : "Contact Us"}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              {lang === "ar" ? "اتصل بنا" : "Contact Us"}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-[#b0b435] mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">
                  {lang === "ar" ? "العنوان: " : "Address: "}
                  <span className="font-semibold">
                    {lang === "ar"
                      ? companyInfo.addressAr
                      : companyInfo.address}
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#b0b435] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-600">
                  {lang === "ar" ? "الهاتف: " : "Phone: "}
                </span>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-[#b0b435] hover:underline"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#b0b435] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-600">
                  {lang === "ar" ? "البريد: " : "Email: "}
                </span>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-[#b0b435] hover:underline"
                >
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} EL SAFWA.{" "}
            {lang === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
