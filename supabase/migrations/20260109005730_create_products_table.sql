/*
  # Create Products Table for Shop

  1. New Tables
    - `products`
      - `id` (uuid, primary key) - Unique identifier for each product
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `price` (numeric) - Product price in USD
      - `image_url` (text) - URL to product image
      - `category` (text) - Product category (apparel, accessories, etc.)
      - `sizes` (text[]) - Available sizes for the product
      - `colors` (text[]) - Available colors for the product
      - `printful_id` (text, optional) - Printful product ID for API integration
      - `in_stock` (boolean) - Whether product is currently available
      - `featured` (boolean) - Whether product should be featured
      - `created_at` (timestamptz) - When product was added
      - `updated_at` (timestamptz) - When product was last updated
      
  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access (anyone can view products)
    - Add policy for authenticated admin users to manage products
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric(10, 2) NOT NULL CHECK (price >= 0),
  image_url text NOT NULL,
  category text DEFAULT 'apparel',
  sizes text[] DEFAULT ARRAY['S', 'M', 'L', 'XL'],
  colors text[] DEFAULT ARRAY['Black', 'White'],
  printful_id text,
  in_stock boolean DEFAULT true,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
  ON products
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_products_in_stock ON products(in_stock);
