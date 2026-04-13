"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function GalleryPage() {
  return (
    <>
      <Navbar lang="en" />

      <div
        className="bg-cover bg-center py-20 mt-16"
        style={{ backgroundImage: "url(/images/all-bg-title.jpg)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Gallery</h2>
            <nav className="text-white">
              <a href="/en" className="hover:text-[#b0b435]">
                Home
              </a>
              <span className="mx-2">/</span>
              <span className="text-[#b0b435]">Gallery</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Our Gallery
            </h1>
            <p className="text-gray-600">
              All previous products are of Egyptian origin, 100% organic and
              non-GMO.
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