import { Product, Category, BlogPost, CompanyInfo, NavigationItem, Translations } from "./types";

export const companyInfo: CompanyInfo = {
  name: "EL SAFWA",
  nameAr: "الصوفرا",
  description:
    "EL SAFWA FOR EXPORT is an Egyptian company specialized in exporting a wide range of agricultural and industrial products to global markets. The company focuses on providing high-quality products that meet international standards, contributing to the reputation of Egyptian products in foreign markets. EL SAFWA FOR EXPORT aims to build strong partnerships with its clients by adhering to quality, deadlines, and transparency in business dealings.",
  descriptionAr:
    "شركة الصفورا للتصدير هي شركة مصرية متخصصة في تصدير مجموعة واسعة من المنتجات الزراعية والصناعية إلى الأسواق العالمية. تركز الشركة على تقديم منتجات عالية الجودة تلبي المعايير الدولية، مما يساهم في سمعة المنتجات المصرية في الأسواق الخارجية. تسعى شركة الصفورا للتصدير إلى بناء شراكات قوية مع عملائها من خلال الالتزام بالجودة والمواعيد والشفافية في التعاملات التجارية.",
  address: "DELENGAT, ALBEHERA, EGYPT",
  addressAr: "دلنجات، البحيرة، مصر",
  phone: "+201148548688",
  email: "alsafwacompany1965@gmail.com",
  locationUrl: "https://www.google.com/maps/place/%D8%A7%D9%84%D8%B5%D9%81%D9%88%D8%A9%E2%80%AD/@30.8013221,30.5811797,12z/data=!4m6!3m5!1s0x14f63d648a805ad5:0x1bd23c91ab410423!8m2!3d30.8272034!4d30.5349336!16s%2Fg%2F11b5pkjgyx?entry=ttu",
};

export const navigation: NavigationItem[] = [
  { label: "Home", labelAr: "الرئيسية", href: "/" },
  { label: "About Us", labelAr: "من نحن", href: "/about" },
  { label: "Gallery", labelAr: "المعرض", href: "/gallery" },
  { label: "Contact Us", labelAr: "اتصل بنا", href: "/contact" },
];

export const categories: Category[] = [
  { id: "legumes", name: "Legumes", nameAr: "البقوليات", image: "/images/11111.jpg" },
  { id: "fruits", name: "Fruits", nameAr: "الفواكة", image: "/images/1111.jpg" },
  { id: "vegetables", name: "Vegetables", nameAr: "الخضروات", image: "/images/Selection-of-vegetables-02-99e06de.jpg" },
];

export const products: Product[] = [
  {
    id: "orange",
    name: "Orange",
    nameAr: "برتقال",
    category: "fruits",
    image: "/images/Fruits_1.jpg",
  },
  {
    id: "carrots",
    name: "Carrots",
    nameAr: "جزر",
    category: "vegetables",
    image: "/images/Vegetables_1.jpg",
  },
  {
    id: "potato",
    name: "Potato",
    nameAr: "بطاطس",
    category: "vegetables",
    image: "/images/Vegetables_2.jpg",
  },
  {
    id: "lemon-benazhir",
    name: "Lemon Benazhir",
    nameAr: "ليمون بناذر",
    category: "vegetables",
    image: "/images/Vegetables_3.jpg",
  },
  {
    id: "lemon-adalia",
    name: "Lemon Adalia",
    nameAr: "ليمون اداليا",
    category: "vegetables",
    image: "/images/Vegetables_4.jpg",
  },
  {
    id: "white-onions",
    name: "White Onions",
    nameAr: "بصل أبيض",
    category: "vegetables",
    image: "/images/Vegetables_5.jpg",
  },
  {
    id: "red-onions",
    name: "Red Onions",
    nameAr: "بصل أحمر",
    category: "vegetables",
    image: "/images/Vegetables_6.jpg",
  },
  {
    id: "beans-grade-a",
    name: "Beans/Grade A",
    nameAr: "فول/درجة أ",
    category: "legumes",
    image: "/images/Legumes_1.jpeg",
    description: "Sizes: 170-180 pcs/100g, 180-200 pcs/100g",
    descriptionAr: "الأحجام: 170-180 حبة/100جم، 180-200 حبة/100جم",
  },
  {
    id: "beans-grade-b",
    name: "Beans/Grade B",
    nameAr: "فول/درجة ب",
    category: "legumes",
    image: "/images/Legumes_2.jpeg",
    description: "Sizes: 300-350 pcs/100g, 350-400 pcs/100g",
    descriptionAr: "الأحجام: 300-350 حبة/100جم، 350-400 حبة/100جم",
  },
  {
    id: "barley",
    name: "Barley",
    nameAr: "شعير",
    category: "legumes",
    image: "/images/Legumes_3.jpg",
    details: "Moisture: 11%-13%. Protein: 12. Free of Insects. Processed with sieves and Sortex",
    detailsAr: "رطوبة: 11%-13%. بروتين: 12. خالٍ من الحشرات. معالج بالمناخل وال Sortex",
  },
  {
    id: "white-corn",
    name: "White Corn",
    nameAr: "ذرة بيضاء",
    category: "legumes",
    image: "/images/Legumes_4.jpg",
    details: "New season 2024. Moisture: 12%-14%. Free of Insects and foreign matters. Processed with sieves and Sortex.",
    detailsAr: "موسم جديد 2024. رطوبة: 12%-14%. خالٍ من الحشرات والمواد الغريبة. معالج بالمناخل وال Sortex.",
  },
  {
    id: "fava-beans",
    name: "Fava Beans",
    nameAr: "فول مصرى",
    category: "legumes",
    image: "/images/Legumes_5.jpg",
    details: "New season 2024. Free of Insects and foreign matters. Processed with sieves and Sortex.",
    detailsAr: "موسم جديد 2024. خالٍ من الحشرات والمواد الغريبة. معالج بالمناخل وال Sortex.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "vegetables-quality",
    title: "Vegetables",
    titleAr: "الخضروات",
    content:
      "Quality of vegetables at EL SAFWA company is based on: Freshness: Ensuring no damage. Color and Size: Matching color and size to the type. Texture: Smooth and free from cracks. Smell: Pure and natural. No Rot: Free from mold or rot. Storage: Kept in suitable conditions to maintain quality.",
    contentAr:
      "جودة الخضروات في شركة الصفورا تعتمد على: freshness: التأكد من عدم التلف. اللون والحجم: مطابق للون والحجم المناسب للنوع. الملمس: ناعم وخالٍ من الشقوق. الرائحة: نقية وطبيعية. عدم التعفن: خالٍ من العفن أو التلف. التخزين:kept in ظروف مناسبة للحفاظ على الجودة.",
    image: "/images/111111.jpg",
  },
  {
    id: "legumes-quality",
    title: "Legumes",
    titleAr: "البقوليات",
    content:
      "Legumes at EL SAFWA company are defined by the following criteria: Freshness and Cleanliness: Ensuring legumes are fresh and free from any impurities. Color and Size: Matching natural colors and sizes for the type. Texture: Should have a uniform texture, free from cracks or damage. Smell: Pure and natural, without any unusual odors. No Defects: Free from mold or other defects affecting quality. Packaging and Storage: Packaged and stored in suitable conditions to maintain quality and freshness.",
    contentAr:
      "البقوليات في شركة الصفورا تتحدد بالمعايير التالية: freshness والنظافة: التأكد من أن البقوليات طازجة وخالية من أي شوائب. اللون والحجم: مطابق للألوان والأحجام الطبيعية للنوع. الملمس: يجب أن يكون ملمسًا موحدًا وخاليًا من الشقوق أو التلف. الرائحة: نقية وطبيعية، بدون أي روائح غير معتادة. عدم العيوب: خالية من العفن أوعيوب أخرى تؤثر على الجودة. التعبئة والتخزين: معبأة ومخزنة في ظروف مناسبة للحفاظ على الجودة والطزاجة.",
    image: "/images/11111.jpg",
  },
  {
    id: "fruits-quality",
    title: "Fruits",
    titleAr: "الفواكة",
    content:
      "Fruit quality at EL SAFWA company is defined by the following criteria: Freshness: Ensuring fruit is fresh and undamaged. Color: Natural color appropriate for the type of fruit. Texture: Smooth texture without spots or damage. Smell: Pure and natural fruit aroma. Taste: Sweet and natural flavor. Defect Check: Free from defects such as mold or rot. Packaging and Storage: Packaged and stored in suitable conditions to maintain quality and freshness.",
    contentAr:
      "تحدد جودة الفواكة في شركة الصفورا بالمعايير التالية: freshness: التأكد من أن الفواكة طازجة وغير تالفة. اللون: لون طبيعي مناسب لنوع الفواكة. الملمس: ملمس ناعم بدون بقع أو تلف. الرائحة: رائحة فواكة نقية وطبيعية. الطعم: طعم حلو ونكهة طبيعية. فحص العيوب: خالية من العيوب مثل العفن أو التلف. التعبئة والتخزين: معبأة ومخزنة في ظروف مناسبة للحفاظ على الجودة والطزاجة.",
    image: "/images/1111.jpg",
  },
];

export const heroSlides = [
  { image: "/images/1111.jpg", alt: "Agricultural products" },
  { image: "/images/111111.jpg", alt: "Export quality" },
  { image: "/images/11111.jpg", alt: "Fresh produce" },
];

export const translations: Record<string, Translations> = {
  en: {
    home: "Home",
    homeAr: "الرئيسية",
    aboutUs: "About Us",
    aboutUsAr: "من نحن",
    gallery: "Gallery",
    galleryAr: "المعرض",
    contactUs: "Contact Us",
    contactUsAr: "اتصل بنا",
    language: "AR",
    products: "Products",
    productsAr: "المنتجات",
    quality: "Quality",
    qualityAr: "الجودة",
    allProducts: "All",
    allProductsAr: "الكل",
    legumes: "Legumes",
    legumesAr: "البقوليات",
    fruits: "Fruits",
    fruitsAr: "الفواكة",
    vegetables: "Vegetables",
    vegetablesAr: "الخضروات",
    welcomeTo: "Welcome To",
    welcomeToAr: "مرحباً بكم في",
    companyDescription: companyInfo.description,
    companyDescriptionAr: companyInfo.descriptionAr,
    contactForPrice: "For inquiries about prices, contact us.",
    contactForPriceAr: "للاستفسار عن الأسعار، تواصل معنا.",
    viewAll: "View All",
    viewAllAr: "عرض الكل",
    getInTouch: "Get In Touch",
    getInTouchAr: "تواصل معنا",
    ourLocation: "Our location",
    ourLocationAr: "موقعنا",
  },
  ar: {
    home: "Home",
    homeAr: "الرئيسية",
    aboutUs: "About Us",
    aboutUsAr: "من نحن",
    gallery: "Gallery",
    galleryAr: "المعرض",
    contactUs: "Contact Us",
    contactUsAr: "اتصل بنا",
    language: "EN",
    products: "Products",
    productsAr: "المنتجات",
    quality: "Quality",
    qualityAr: "الجودة",
    allProducts: "All",
    allProductsAr: "الكل",
    legumes: "Legumes",
    legumesAr: "البقوليات",
    fruits: "Fruits",
    fruitsAr: "الفواكة",
    vegetables: "Vegetables",
    vegetablesAr: "الخضروات",
    welcomeTo: "Welcome To",
    welcomeToAr: "مرحباً بكم في",
    companyDescription: companyInfo.description,
    companyDescriptionAr: companyInfo.descriptionAr,
    contactForPrice: "For inquiries about prices, contact us.",
    contactForPriceAr: "للاستفسار عن الأسعار، تواصل معنا.",
    viewAll: "View All",
    viewAllAr: "عرض الكل",
    getInTouch: "Get In Touch",
    getInTouchAr: "تواصل معنا",
    ourLocation: "Our location",
    ourLocationAr: "موقعنا",
  },
};