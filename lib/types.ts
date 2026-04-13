export interface Product {
  id: string;
  name: string;
  nameAr: string;
  category: "fruits" | "vegetables" | "legumes";
  image: string;
  description?: string;
  descriptionAr?: string;
  details?: string;
  detailsAr?: string;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleAr: string;
  content: string;
  contentAr: string;
  image: string;
}

export interface CompanyInfo {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  address: string;
  addressAr: string;
  phone: string;
  email: string;
  locationUrl: string;
}

export interface NavigationItem {
  label: string;
  labelAr: string;
  href: string;
}

export type Language = "en" | "ar";

export interface Translations {
  home: string;
  homeAr: string;
  aboutUs: string;
  aboutUsAr: string;
  gallery: string;
  galleryAr: string;
  contactUs: string;
  contactUsAr: string;
  language: string;
  products: string;
  productsAr: string;
  quality: string;
  qualityAr: string;
  allProducts: string;
  allProductsAr: string;
  legumes: string;
  legumesAr: string;
  fruits: string;
  fruitsAr: string;
  vegetables: string;
  vegetablesAr: string;
  welcomeTo: string;
  welcomeToAr: string;
  companyDescription: string;
  companyDescriptionAr: string;
  contactForPrice: string;
  contactForPriceAr: string;
  viewAll: string;
  viewAllAr: string;
  getInTouch: string;
  getInTouchAr: string;
  ourLocation: string;
  ourLocationAr: string;
}