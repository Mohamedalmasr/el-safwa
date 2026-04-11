"use client";

import Header from "../../components/components/Header";
import Hero from "../../components/components/Hero";
import CategoryBox from "../../components/components/CategoryBox";
import ProductCard from "../../components/components/ProductCard";
import BlogCard from "../../components/components/BlogCard";
import Footer from "../../components/components/Footer";
import { categories, products, blogPosts } from "../lib/data";

export default function HomePage() {
  return (
    <>
      <Header lang="ar" />
      <Hero lang="ar" />

      <div className="py-16 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryBox key={category.id} category={category} lang="ar" />
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              البقوليات والفواكة والخضروات
            </h1>
            <p className="text-gray-600">للاستفسار عن الأسعار، تواصل معنا.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-[#b0b435] text-white rounded-full hover:bg-[#9a9c2d] transition-colors">
              الكل
            </button>
            <button className="px-6 py-2 border border-[#b0b435] text-[#b0b435] rounded-full hover:bg-[#b0b435] hover:text-white transition-colors">
              البقوليات
            </button>
            <button className="px-6 py-2 border border-[#b0b435] text-[#b0b435] rounded-full hover:bg-[#b0b435] hover:text-white transition-colors">
              الفواكة
            </button>
            <button className="px-6 py-2 border border-[#b0b435] text-[#b0b435] rounded-full hover:bg-[#b0b435] hover:text-white transition-colors">
              الخضروات
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} lang="ar" />
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">الجودة</h1>
            <p className="text-gray-600">
              جميع المنتجات السابقة مصرية المصدر، 100% طبيعية وغير معدلة
              وراثياً.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} lang="ar" />
            ))}
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
