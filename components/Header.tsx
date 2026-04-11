"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, companyInfo } from "../../app/lib/data";
import { Language } from "../../app/lib/types";
import { getTranslations } from "../../app/lib/i18n";

interface HeaderProps {
  lang: Language;
}

export default function Header({ lang }: HeaderProps) {
  const pathname = usePathname();
  const t = getTranslations(lang);
  const isRTL = lang === "ar";

  const currentLang = lang === "ar" ? "en" : "ar";
  const currentPath =
    pathname === "/"
      ? lang === "ar"
        ? "/en"
        : "/ar"
      : pathname.replace(`/${lang}`, `/${currentLang}`);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="lg:hidden p-2 mr-2 text-gray-600 hover:text-gray-900"
              type="button"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link href={`/${lang}`} className="flex items-center">
              <img
                src="/images/rrrrp.png"
                className="h-12 w-auto"
                alt="EL SAFWA"
              />
            </Link>
          </div>
          <div
            className="hidden lg:flex items-center space-x-8"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <ul className="flex space-x-6">
              {navigation.map((item) => {
                const label = lang === "ar" ? item.labelAr : item.label;
                const href =
                  item.href === "/" ? `/${lang}` : `/${lang}${item.href}`;
                const isActive =
                  (pathname === "/" && item.href === "/") ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={href}
                      className={`text-gray-700 hover:text-[#b0b435] transition-colors duration-300 ${isActive ? "text-[#b0b435] font-semibold" : ""}`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center">
            <Link
              href={currentPath}
              className="px-4 py-2 bg-[#b0b435] text-white font-semibold rounded hover:bg-[#9a9c2d] transition-colors"
            >
              {lang === "ar" ? "EN" : "AR"}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
