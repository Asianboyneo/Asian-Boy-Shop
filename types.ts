export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
}