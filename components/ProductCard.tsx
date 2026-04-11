"use client";

import { Product } from "../../app/lib/types";
import { Language } from "../../app/lib/types";

interface ProductCardProps {
  product: Product;
  lang: Language;
}

export default function ProductCard({ product, lang }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden group">
        <img
          src={product.image}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          alt={lang === "ar" ? product.nameAr : product.name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          {lang === "ar" ? product.nameAr : product.name}
        </h4>
        {(product.description || product.descriptionAr) && (
          <p className="text-gray-600 text-sm mb-2">
            {lang === "ar" ? product.descriptionAr : product.description}
          </p>
        )}
        {(product.details || product.detailsAr) && (
          <p className="text-gray-500 text-xs">
            {lang === "ar" ? product.detailsAr : product.details}
          </p>
        )}
      </div>
    </div>
  );
}
