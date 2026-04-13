"use client";

import { Product } from "../lib/types";
import { Language } from "../lib/types";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
  lang: Language;
}

export default function ProductCard({ product, lang }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden group">
        <img
          src={product.image}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          alt={lang === "ar" ? product.nameAr : product.name}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      </div>
      <CardContent className="p-4">
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
      </CardContent>
    </Card>
  );
}