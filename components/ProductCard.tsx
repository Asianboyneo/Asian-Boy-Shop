import React from 'react';
import { Product } from '../types';
import { CONTACT_EMAIL } from '../constants';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const handleBuyClick = () => {
    const subject = encodeURIComponent(`[購買] ${product.name}`);
    const body = encodeURIComponent(`你好，我想購買：\n\n商品：${product.name}\n價格：${product.price} TWD\n\n請告知匯款資訊與後續步驟。`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div 
      className="group relative flex flex-col gap-5 animate-fade-in-up" 
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Image Container */}
      <div 
        className="relative w-full aspect-[3/4] overflow-hidden bg-gray-900 cursor-pointer" 
        onClick={handleBuyClick}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <div className="border border-white/80 px-8 py-3 flex items-center gap-2 text-white hover:bg-white hover:text-black transition-colors duration-300">
            <ShoppingBag size={16} />
            <span className="text-sm tracking-[0.2em] font-light uppercase">Order Now</span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start border-l-2 border-white/0 group-hover:border-white/50 pl-0 group-hover:pl-4 transition-all duration-300">
          <h3 className="text-lg font-bold text-white tracking-wider">{product.name}</h3>
          <span className="text-lg font-mono text-gray-300 whitespace-nowrap">{product.price} TWD</span>
        </div>
        <p className="text-xs text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors pl-0 group-hover:pl-4 duration-300">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;