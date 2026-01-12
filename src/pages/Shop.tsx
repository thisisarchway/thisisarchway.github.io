import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Instagram, ShoppingBag } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import ProductCard from '../components/ProductCard';
import { AnimatedSection } from '../components/AnimatedSection';
import Layout from '../components/Layout';
import { supabase, Product } from '../lib/supabase';

const Shop = () => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShouldLoadVideo(!isMobile && !hasReducedMotion);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('in_stock', true)
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;

      setProducts(data || []);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Unable to load products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    alert(`"${product.name}" will be added to cart. Payment integration coming soon!`);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black relative">
        <Helmet>
          <title>Shop - Archway Productions</title>
          <meta name="description" content="Shop exclusive Archway Productions merchandise. Premium apparel and accessories celebrating independent filmmaking and original storytelling." />
          <link rel="canonical" href="https://thisisarchway.com/shop" />
          <meta property="og:title" content="Shop - Archway Productions" />
          <meta property="og:description" content="Shop exclusive Archway Productions merchandise. Premium apparel and accessories celebrating independent filmmaking and original storytelling." />
        </Helmet>

        {shouldLoadVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="fixed inset-0 w-full h-full object-cover opacity-20"
            style={{ zIndex: 0 }}
          >
            <source src="https://i.imgur.com/6NgFNM9.mp4" type="video/mp4" />
          </video>
        )}

        <div className="py-24 md:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-12">
              <h1 className="text-7xl md:text-9xl lg:text-[8rem] xl:text-[10rem] text-white mb-4 leading-[0.9] tracking-tight">
                Archway Shop
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                Exclusive merchandise celebrating independent filmmaking and original storytelling
              </p>
            </div>

            {loading && (
              <div className="flex items-center justify-center py-20">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>
                  <div className="text-white text-lg font-light tracking-tight">Loading products...</div>
                </div>
              </div>
            )}

            {error && (
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-red-900/20 border border-red-700 rounded-lg p-8 mb-12">
                  <p className="text-red-400">{error}</p>
                </div>
              </div>
            )}

            {!loading && !error && products.length === 0 && (
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-12 md:p-16 mb-12">
                  <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
                    Coming Soon
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                    We're curating a collection of exclusive Archway merchandise and limited-edition items
                    that celebrate independent filmmaking and original storytelling.
                  </p>
                  <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
                    From premium apparel to behind-the-scenes content, our shop will offer unique ways
                    to support the future of authentic cinema.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 md:p-12">
                  <div className="flex justify-center mb-6">
                    <Instagram className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4 tracking-wide">
                    Be the First to Know
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Follow us on Instagram to get exclusive early access to our shop launch,
                    behind-the-scenes content, and limited-edition releases.
                  </p>
                  <AnimatedButton href="https://instagram.com/thisisarchway">
                    Follow @thisisarchway
                  </AnimatedButton>
                </div>
              </div>
            )}

            {!loading && !error && products.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {products.map((product, index) => (
                    <AnimatedSection key={product.id} animation="fade-up" delay={index * 100}>
                      <ProductCard
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.image_url}
                        category={product.category}
                        featured={product.featured}
                        onAddToCart={() => handleAddToCart(product)}
                      />
                    </AnimatedSection>
                  ))}
                </div>

                <div className="max-w-2xl mx-auto">
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 md:p-12 text-center">
                    <div className="flex justify-center mb-6">
                      <Instagram className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-tight">
                      Stay Connected
                    </h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      Follow us on Instagram for exclusive early access to new releases,
                      behind-the-scenes content, and limited-edition drops.
                    </p>
                    <AnimatedButton href="https://instagram.com/thisisarchway">
                      Follow @thisisarchway
                    </AnimatedButton>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
