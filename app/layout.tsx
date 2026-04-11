import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "EL SAFWA - Export Company",
  description: "Exporting high-quality agricultural products from Egypt, including grains, legumes, and fresh crops with advanced sorting and packaging services.",
  keywords: "Export, Agricultural Products, Egyptian Exports, Fresh Crops, Grains, Legumes, Sesame, White Beans, Rice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={cn("font-sans", geist.variable)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/rrrrp.png" type="image/x-icon" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}