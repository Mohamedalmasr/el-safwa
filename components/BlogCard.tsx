"use client";

import { BlogPost } from "../lib/types";
import { Language } from "../lib/types";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface BlogCardProps {
  post: BlogPost;
  lang: Language;
}

export default function BlogCard({ post, lang }: BlogCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
          src={post.image}
          alt={lang === "ar" ? post.titleAr : post.title}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {lang === "ar" ? post.titleAr : post.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {lang === "ar" ? post.contentAr : post.content}
        </p>
      </CardContent>
    </Card>
  );
}