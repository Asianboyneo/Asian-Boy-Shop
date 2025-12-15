import { Product, SocialLink } from './types';
import { Instagram, Youtube, Coffee, Globe, AtSign } from 'lucide-react';

export const HERO_VIDEO_URL = "https://res.cloudinary.com/dhnc6dsnl/video/upload/v1765817396/%E7%B6%B2%E9%A0%81%E5%BD%B1%E7%89%87_ffabqj.mp4";
export const CONTACT_EMAIL = "kiwi21501@gmail.com";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "曼妮呼嚕款",
    price: 699,
    description: "療癒系首選，柔軟觸感彷彿真實陪伴。",
    features: [
      "極致柔軟材質",
      "安撫心靈的設計",
      "適合居家放鬆"
    ],
    imageUrl: "https://picsum.photos/800/800?random=1"
  },
  {
    id: 2,
    name: "曼妮發呆款",
    price: 799,
    description: "獨特放空美學，極簡設計適合擺放於任何思考空間。",
    features: [
      "極簡藝術風格",
      "沈靜的視覺體驗",
      "獨特收藏價值"
    ],
    imageUrl: "https://picsum.photos/800/800?random=2"
  },
  {
    id: 3,
    name: "曼妮經典款",
    price: 899,
    description: "品牌標誌性設計，收藏家必備，完美呈現初代風格。",
    features: [
      "Asian Boy Vision 原創精神",
      "高品質精細做工",
      "永不過時的經典"
    ],
    imageUrl: "https://picsum.photos/800/800?random=3"
  },
  {
    id: 4,
    name: "曼妮傭人旅行款",
    price: 200,
    description: "輕便好攜帶，隨身掛件設計，讓曼妮陪你走遍世界。",
    features: [
      "輕量化設計",
      "耐用掛扣配件",
      "最佳旅行伴侶"
    ],
    imageUrl: "https://picsum.photos/800/800?random=4"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/asian_boy_neo",
    icon: Instagram
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@asian_boy_neo",
    icon: Youtube
  },
  {
    platform: "Threads",
    url: "https://www.threads.com/@asian_boy_neo?hl=zh-tw",
    icon: AtSign
  },
  {
    platform: "Ko-fi",
    url: "https://ko-fi.com/asianboyneo",
    icon: Coffee
  },
  {
    platform: "Asian Boy Universe",
    url: "https://asianboyneo.github.io/Asian_boy_neo/",
    icon: Globe
  }
];