"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, companyInfo } from "@/lib/data";
import { Language } from "../lib/types";

interface NavbarProps {
  lang: Language;
}

export default function Navbar({ lang }: NavbarProps) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLang = lang === "ar" ? "en" : "ar";
  const currentPath =
    pathname === "/"
      ? lang === "ar"
        ? "/en"
        : "/ar"
      : pathname.replace(`/${lang}`, `/${currentLang}`);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-black transform-none">
        <div className="flex items-center justify-between px-4 py-2 max-w-6xl mx-auto">
          <div className="flex items-center space-x-2">
            <a 
              href={companyInfo.locationUrl} 
              target="_blank" 
              className="flex items-center text-sm font-bold hover:text-[#b0b435] transition-colors"
              style={{ color: "white" }}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {lang === "ar" ? "الموقع الجغرافي" : "Our location"}
            </a>
            <span style={{ color: "white" }}>|</span>
            <Link 
              href={`/${lang}/contact`} 
              className="flex items-center text-sm font-bold hover:text-[#b0b435] transition-colors"
              style={{ color: "white" }}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.397 1.27a11.042 11.042 0 005.516 5.516l1.27-2.397a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {lang === "ar" ? "اتصل بنا" : "Contact Us"}
            </Link>
          </div>
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1 px-3 py-1 bg-[#b0b435] text-white text-sm font-semibold rounded hover:bg-[#9a9c2d] transition-colors duration-300"
            >
              <span>{lang.toUpperCase()}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langDropdownOpen && (
              <div className="absolute right-0 mt-1 w-24 bg-white rounded-md shadow-lg overflow-hidden z-[70]">
                <Link
                  href={currentPath}
                  onClick={() => setLangDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#b0b435] hover:text-white transition-colors"
                >
                  {lang === "ar" ? "English" : "العربية"}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <header className={`fixed top-10 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
        <nav className="flex items-center justify-center px-4 py-2">
          <div className="flex items-center justify-between w-full max-w-6xl">
            <div className="flex items-center">
              <button className="lg:hidden p-2 mr-2" type="button" aria-label="Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Link href={`/${lang}`}>
                <img src="/images/rrrrp.png" className="h-10" alt="EL SAFWA" />
              </Link>
            </div>
            
            <ul className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
              {navigation.map((item) => {
                const label = lang === "ar" ? item.labelAr : item.label;
                const href = item.href === "/" ? `/${lang}` : `/${lang}${item.href}`;
                const isActive =
                  (pathname === "/" && item.href === "/") ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.href} className="relative group">
                    <Link
                      href={href}
                      className={`block px-4 py-3 font-semibold transition-all duration-300 ${
                        isActive 
                          ? "text-[#b0b435]" 
                          : "text-gray-600 group-hover:text-[#b0b435]"
                      }`}
                    >
                      {label}
                      <span className={`absolute left-0 -bottom-0.5 w-full h-0.5 bg-[#b0b435] origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}