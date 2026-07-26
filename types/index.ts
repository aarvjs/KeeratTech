export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  specs: ProductSpec[];
  applications: string[];
  features: string[];
  benefits: string[];
  downloadCatalogUrl?: string;
  isFeatured?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  iconName: string;
  itemCount: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  features: string[];
  processSteps: { title: string; desc: string }[];
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  badge: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: string;
  bio: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
}
