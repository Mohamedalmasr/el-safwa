"use client";

import Header from "../../../components/components/Header";
import Footer from "../../../components/components/Footer";
import { companyInfo } from "../../lib/data";

export default function ContactPage() {
  return (
    <>
      <Header lang="ar" />

      <div
        className="bg-cover bg-center py-20 mt-16"
        style={{ backgroundImage: "url(/images/contact-bg.jpg)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">اتصل بنا</h2>
            <nav className="text-white" dir="rtl">
              <a href="/ar" className="hover:text-[#b0b435]">
                الرئيسية
              </a>
              <span className="mx-2">/</span>
              <span className="text-[#b0b435]">اتصل بنا</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                تواصل مع الصفورا
              </h2>
              <p className="text-gray-600 mb-6">
                إذا كنت مهتماً بخدمات الصفورا أو لديك أي استفسارات حول منتجاتنا
                أو مشاريعنا، نرحب بتواصلكم. نؤمن بأهمية التواصل الفعال مع
                عملائنا لتلبية احتياجاتهم وتقديم أفضل الحلول.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-[#b0b435]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 font-semibold">
                    العنوان: {companyInfo.addressAr}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-[#b0b435]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-[#b0b435] hover:underline"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-[#b0b435]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-[#b0b435] hover:underline"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "/images/instagram-img-01.jpg",
              "/images/categories_img_02.jpg",
              "/images/categories_img_03.jpg",
              "/images/instagram-img-02.jpg",
              "/images/instagram-img-04.jpg",
            ].map((src, idx) => (
              <div key={idx} className="relative overflow-hidden group">
                <img
                  src={src}
                  alt=""
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer lang="ar" />
    </>
  );
}
