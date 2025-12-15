import React, { useRef } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';
import { ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const shopRef = useRef<HTMLDivElement>(null);

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Header />
      <BackgroundVideo />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 z-10">
        <div className="text-center space-y-6 animate-fade-in mix-blend-screen">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            ASIAN BOY<br />VISION
          </h2>
          <p className="text-sm md:text-lg font-mono tracking-[0.5em] text-gray-300 uppercase">
            Asian Boy Shop Collection
          </p>
        </div>
        
        <button 
          onClick={scrollToShop}
          className="absolute bottom-16 flex flex-col items-center gap-3 text-white/40 hover:text-white transition-all duration-500 group cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-light group-hover:tracking-[0.4em] transition-all">Scroll</span>
          <ChevronDown className="animate-bounce w-5 h-5 opacity-50 group-hover:opacity-100" />
        </button>
      </section>

      {/* Cinematic Transition Spacer */}
      <div className="h-[25vh] w-full bg-gradient-to-b from-transparent via-black/50 to-black z-10 relative pointer-events-none"></div>

      {/* Product Section */}
      <section 
        ref={shopRef} 
        className="relative z-20 bg-black px-6 md:px-12 pb-32 pt-12 min-h-screen"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/10 pb-6">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">精選系列</h3>
            <p className="text-gray-500 mt-4 md:mt-0 font-mono text-xs md:text-sm tracking-wider">
              ASIAN BOY VISION / OFFICIAL MERCH
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-20">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;