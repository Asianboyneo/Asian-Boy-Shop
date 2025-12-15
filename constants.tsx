import { Instagram, Youtube, Globe, Coffee, AtSign } from 'lucide-react';
import { Product, SocialLink } from './types';

// Provided Video URL
export const HERO_VIDEO_URL = "https://res.cloudinary.com/dhnc6dsnl/video/upload/v1765817396/%E7%B6%B2%E9%A0%81%E5%BD%B1%E7%89%87_ffabqj.mp4";

export const CONTACT_EMAIL = "kiwi21501@gmail.com";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/asian_boy_neo",
    icon: Instagram,
    label: "Instagram"
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@asian_boy_neo",
    icon: Youtube,
    label: "YouTube"
  },
  {
    platform: "Threads",
    url: "https://www.threads.net/@asian_boy_neo?hl=zh-tw",
    icon: AtSign,
    label: "Threads"
  },
  {
    platform: "Ko-fi",
    url: "https://ko-fi.com/asianboyneo",
    icon: Coffee,
    label: "Ko-fi"
  },
  {
    platform: "Universe",
    url: "https://asianboyneo.github.io/Asian_boy_neo/",
    icon: Globe,
    label: "Asian Boy Universe"
  }
];

// Product Data
// Images selected to fit the "Manny" (likely a cat/pet) theme with a cinematic moody aesthetic
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '曼妮呼嚕款',
    price: '699',
    description: '享受曼妮溫柔的呼嚕聲，療癒心靈的沈浸式體驗。',
    imageUrl: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: '曼妮發呆款',
    price: '799',
    description: '捕捉曼妮放空的瞬間，詮釋隨性慵懶的生活哲學。',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: '曼妮經典款',
    price: '899',
    description: '永不退流行的經典造型，極致的細節工藝。',
    imageUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: '曼妮傭人旅行款',
    price: '200',
    description: '專為旅途設計的輕便夥伴，隨時隨地陪伴您的冒險。',
    imageUrl: 'https://images.unsplash.com/photo-1596700833775-585803977759?auto=format&fit=crop&q=80&w=800'
  }
];