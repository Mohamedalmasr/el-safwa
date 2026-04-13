"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryBox from "@/components/CategoryBox";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { categories, products, blogPosts } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Navbar lang="en" />
      <Hero lang="en" />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryBox key={category.id} category={category} lang="en" />
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Legumes & Fruits & Vegetables
            </h1>
            <p className="text-gray-600">
              For inquiries about prices, contact us.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-[#b0b435] text-white rounded-full hover:bg-[#9a9c2d] transition-colors">
              All
            </button>
            <button className="px-6 py-2 border border-[#b0b435] text-[#b0b435] rounded-full hover:bg-[#b0b435] hover:text-white transition-colors">
              Legumes
            </button>
            <button className="px-6 py-2 border border-[#b0b435] text-[#b0b435] rounded-full hover:bg-[#b0b435] hover:text-white transition-colors">
              Fruits
            </button>
            <button className="px-6 py-2 border border-[#b0b435] text-[#b0b435] rounded-full hover:bg-[#b0b435] hover:text-white transition-colors">
              Vegetables
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} lang="en" />
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Quality</h1>
            <p className="text-gray-600">
              All previous products are of Egyptian origin, 100% organic and
              non-GMO.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} lang="en" />
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

      <Footer lang="en" />
    </>
  );
}