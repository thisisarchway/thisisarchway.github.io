# Printful Integration Guide

## Step-by-Step Setup

### 1. Create Your Products in Printful

1. **Log into your Printful account** at [https://www.printful.com/dashboard](https://www.printful.com/dashboard)

2. **Create Products:**
   - Click "Create Product" or "Add Product"
   - Choose a product type (t-shirt, hoodie, hat, etc.)
   - Upload your designs
   - Set product details (sizes, colors, descriptions)
   - Set your retail prices (Printful's cost + your markup)

3. **Connect to a Store (Optional):**
   - For now, you can use Printful's "Manual Order" option
   - OR connect to Shopify/WooCommerce if you want automated fulfillment
   - OR use Printful's API (more advanced)

### 2. Get Your Printful API Key

1. Go to [https://www.printful.com/dashboard/settings](https://www.printful.com/dashboard/settings)
2. Click on "API" in the left sidebar
3. Click "Create API Access" or "Enable API Access"
4. Copy your API key (keep it secret!)

### 3. Add Products to Your Database

You have two options:

#### Option A: Manual Entry (Recommended for Starting)
1. Create products in Printful
2. Add product details to the database using the Supabase dashboard
3. Include:
   - Product name
   - Description
   - Price
   - Image URL (from Printful or your own hosting)
   - Printful product ID (optional, for API integration later)

#### Option B: API Integration (Advanced)
- Use Printful's API to automatically sync products
- Requires API key and more complex setup
- Good for large catalogs that change frequently

### 4. Handle Orders

For now, you can use Printful's manual order system:

1. **Customer places order on your site** → Saves to Supabase database
2. **You receive notification** → Check orders in Supabase
3. **You create manual order in Printful** → Log into Printful dashboard
4. **Printful fulfills and ships** → Customer receives product

### 5. Future Automation Options

When you're ready to scale:

- **Printful API**: Auto-create orders from your website
- **Webhooks**: Get real-time updates on order status
- **Shopify/WooCommerce Integration**: Full e-commerce platform

## Current Setup

Your shop is now configured to:
- Display products from your Supabase database
- Show product images, names, descriptions, and prices
- Link to purchase (you can update these to handle payments)

## Adding Your First Product

1. **In Printful**: Create a product and note its details
2. **In Supabase Dashboard**:
   - Go to your products table
   - Click "Insert row"
   - Fill in: name, description, price, image_url
   - Save

3. **Your website will automatically display it!**

## Recommended First Steps

1. Start with 3-5 simple products (t-shirts, hoodies)
2. Use high-quality mockup images from Printful
3. Test the full flow: create product → add to database → view on site
4. When ready, add payment processing (Stripe recommended)

## Need Help?

- Printful Documentation: https://developers.printful.com/
- Printful Support: Available in your dashboard
- Supabase Documentation: https://supabase.com/docs
