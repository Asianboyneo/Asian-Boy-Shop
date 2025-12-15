export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string; // We will use placeholders since no product images provided
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: any; // Lucide icon component
  label: string;
}
