"use client";

import { Category } from "../lib/types";
import { Language } from "../lib/types";
import { Card } from "@/components/ui/card";

interface CategoryBoxProps {
  category: Category;
  lang: Language;
}

export default function CategoryBox({ category, lang }: CategoryBoxProps) {
  return (
    <Card className="relative group overflow-hidden rounded-lg shadow-lg">
      <img
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
        src={category.image}
        alt={lang === "ar" ? category.nameAr : category.name}
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="px-8 py-3 bg-[#b0b435] text-white font-semibold rounded-full hover:bg-[#9a9c2d] transition-colors">
          {lang === "ar" ? category.nameAr : category.name}
        </button>
      </div>
    </Card>
  );
}