import React, { useRef } from 'react';
import { PRODUCTS } from './constants';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import Header from './components/Header';
import { ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const shopRef = useRef<HTMLDivElement>(null);

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black relative font-sans text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center z-10">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-4 animate-fade-in-up drop-shadow-2xl">
            ASIAN BOY SHOP
          </h2>
          <p className="text-sm md:text-xl text-white/80 font-mono tracking-[0.3em] uppercase drop-shadow-lg">
            Future . Vision . Manny
          </p>
        </div>
        
        <button 
          onClick={scrollToShop}
          className="absolute bottom-12 animate-bounce text-white cursor-pointer hover:opacity-70 transition-opacity drop-shadow-md"
          aria-label="Scroll to shop"
        >
          <ChevronDown size={48} strokeWidth={1} />
        </button>
      </section>

      {/* Product Section */}
      <section 
        ref={shopRef} 
        className="relative z-10 min-h-screen py-24 px-6 md:px-12 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16 border-b border-white/20 pb-6">
            <h3 className="text-3xl font-bold text-white uppercase tracking-wider drop-shadow-md">Collection</h3>
            <span className="text-gray-300 font-mono drop-shadow-md">01 — 04</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;