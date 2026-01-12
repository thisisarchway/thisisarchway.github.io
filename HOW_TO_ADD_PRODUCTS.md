# How to Add Products to Your Shop

Your shop is now fully set up and ready to display products! Here's how to add them:

## Quick Start

Your website currently has **4 sample products** displayed. You can replace these with your real Printful products.

## Method 1: Using Supabase Dashboard (Easiest)

1. **Log into Supabase:**
   - Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
   - Find your project: `ssludktczbhhgezyaxfq`

2. **Navigate to the Products Table:**
   - Click "Table Editor" in the left sidebar
   - Select the `products` table

3. **Add a New Product:**
   - Click "Insert row" or "+ Insert" button
   - Fill in the fields:
     - **name**: Product name (e.g., "Archway Logo Tee")
     - **description**: Product description
     - **price**: Price as a number (e.g., 29.99)
     - **image_url**: Full URL to the product image
     - **category**: Product category (e.g., "apparel", "accessories")
     - **sizes**: Click to add sizes (e.g., S, M, L, XL)
     - **colors**: Click to add colors (e.g., Black, White)
     - **in_stock**: Set to `true` to show on site
     - **featured**: Set to `true` to mark as featured
   - Click "Save"

4. **Your product will immediately appear on the website!**

## Method 2: Using SQL (Advanced)

If you want to add multiple products at once, you can use SQL:

```sql
INSERT INTO products (name, description, price, image_url, category, featured) VALUES
('Product Name', 'Product description here', 29.99, 'https://example.com/image.jpg', 'apparel', true);
```

## Getting Product Images from Printful

1. Create your product in Printful
2. Generate mockup images (Printful provides these)
3. Right-click on the mockup image and copy the image URL
4. Use that URL in the `image_url` field

Alternatively, you can:
- Upload images to Pexels (free stock photos)
- Host images on your own server
- Use any publicly accessible image URL

## Editing Existing Products

1. Go to Supabase Dashboard → Table Editor → products
2. Click on any cell to edit it
3. Changes are saved automatically
4. Refresh your website to see updates

## Removing Products

Two options:

1. **Delete permanently**: Click the row, then click the trash icon
2. **Hide temporarily**: Edit the product and set `in_stock` to `false`

## Product Fields Explained

- **name**: Product title displayed on the card
- **description**: Product description text
- **price**: Price in USD (numeric value, e.g., 29.99)
- **image_url**: Full URL to product image
- **category**: Used for filtering (e.g., "apparel", "accessories")
- **sizes**: Array of available sizes
- **colors**: Array of available colors
- **printful_id**: Optional - for API integration later
- **in_stock**: Set to false to hide from shop
- **featured**: Set to true to show "Featured" badge

## Next Steps

1. Create 3-5 products in Printful
2. Add them to your Supabase database using the dashboard
3. Test the shop page to see them display
4. When ready, add payment processing (see PRINTFUL_SETUP.md)

## Tips

- Use high-quality images (at least 800x800px)
- Keep descriptions concise and compelling
- Start with 3-5 products, add more later
- Mark your best sellers as "featured"
- Use consistent image sizes for best appearance

## Need Help?

Check out PRINTFUL_SETUP.md for Printful integration details!
