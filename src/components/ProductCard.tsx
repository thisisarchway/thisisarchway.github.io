import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  featured?: boolean;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  imageUrl,
  category,
  featured,
  onAddToCart,
}) => {
  return (
    <div className="group bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden hover:bg-gray-800/50 hover:scale-[1.02] hover:shadow-xl transition-all duration-700">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-white text-black px-3 py-1 text-xs font-medium rounded-full">
              Featured
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-light text-white group-hover:text-gray-100 transition-colors">
            {name}
          </h3>
          <span className="text-sm text-gray-400 uppercase tracking-wide">
            {category}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-light text-white">
            ${price.toFixed(2)}
          </span>

          <button
            onClick={onAddToCart}
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-light">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
