"use client";

import { BlogPost } from "../../app/lib/types";
import { Language } from "../../app/lib/types";

interface BlogCardProps {
  post: BlogPost;
  lang: Language;
}

export default function BlogCard({ post, lang }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
          src={post.image}
          alt={lang === "ar" ? post.titleAr : post.title}
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {lang === "ar" ? post.titleAr : post.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {lang === "ar" ? post.contentAr : post.content}
        </p>
      </div>
    </div>
  );
}
