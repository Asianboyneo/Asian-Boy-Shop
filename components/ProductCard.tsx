import React from 'react';
import { Product } from '../types';
import { ShoppingBag } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleBuyClick = () => {
    const subject = encodeURIComponent(`購買查詢：${product.name}`);
    const body = encodeURIComponent(`你好，我有興趣購買 ${product.name} (價格: ${product.price} TWD)。請提供購買詳情。`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden rounded-xl hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
      {/* Image Container */}
      <div className="aspect-square w-full overflow-hidden relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <div className="absolute bottom-4 left-4">
          <p className="text-white text-lg font-bold tracking-widest">{product.price} TWD</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed min-h-[40px]">
          {product.description}
        </p>
        
        <div className="mb-6">
          <ul className="space-y-1">
            {product.features.map((feature, idx) => (
              <li key={idx} className="text-xs text-gray-400 flex items-center">
                <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={handleBuyClick}
          className="w-full py-3 px-4 bg-white text-black font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors rounded"
        >
          <ShoppingBag size={16} />
          購買詢問
        </button>
      </div>
    </div>
  );
};

export default ProductCard;