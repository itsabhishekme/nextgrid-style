// data/products.ts

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  gender: "Men" | "Women" | "Children";
  image: string;
  gallery?: string[];
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  brand: string;
  badge?: string;
  colors: string[];
  sizes: string[];
  description: string;
  features: string[];
  stock: number;
  isNew?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
}

// ========================================
// MEN PRODUCTS
// ========================================

export const menProducts: Product[] = [
  {
    id: 1,
    name: "Black Leather Jacket",
    slug: "black-leather-jacket",
    category: "Jackets",
    gender: "Men",
    image: "/images/men/jacket.jpg",
    gallery: [
      "/images/men/jacket.jpg",
      "/images/men/jacket-2.jpg",
      "/images/men/jacket-3.jpg",
    ],
    price: 2999,
    oldPrice: 4999,
    rating: 4.9,
    reviews: 214,
    brand: "NextGrid",
    badge: "Best Seller",
    colors: ["Black", "Brown", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Premium leather jacket crafted with luxury finishing and urban streetwear aesthetics.",
    features: [
      "Premium Leather Finish",
      "Soft Inner Lining",
      "Water Resistant",
      "Modern Fit",
    ],
    stock: 12,
    isNew: true,
    isTrending: true,
    isFeatured: true,
  },

  {
    id: 2,
    name: "Urban Street Shirt",
    slug: "urban-street-shirt",
    category: "Shirts",
    gender: "Men",
    image: "/images/men/shirt.jpg",
    gallery: [
      "/images/men/shirt.jpg",
      "/images/men/shirt-2.jpg",
    ],
    price: 1499,
    oldPrice: 2299,
    rating: 4.7,
    reviews: 167,
    brand: "NextGrid",
    badge: "Trending",
    colors: ["White", "Black", "Navy"],
    sizes: ["M", "L", "XL"],
    description:
      "Elegant oversized urban shirt with premium cotton fabric for all-day comfort.",
    features: [
      "100% Cotton",
      "Breathable Fabric",
      "Oversized Fit",
      "Wrinkle Free",
    ],
    stock: 18,
    isTrending: true,
  },

  {
    id: 3,
    name: "Classic Denim Jeans",
    slug: "classic-denim-jeans",
    category: "Jeans",
    gender: "Men",
    image: "/images/men/jeans.jpg",
    price: 2199,
    oldPrice: 3199,
    rating: 4.8,
    reviews: 132,
    brand: "NextGrid",
    badge: "Hot",
    colors: ["Blue", "Dark Blue"],
    sizes: ["30", "32", "34", "36"],
    description:
      "Slim fit premium denim jeans designed for modern street fashion lovers.",
    features: [
      "Stretchable Fabric",
      "Slim Fit",
      "Fade Resistant",
      "Comfort Waist",
    ],
    stock: 15,
    isFeatured: true,
  },

  {
    id: 4,
    name: "Luxury Winter Hoodie",
    slug: "luxury-winter-hoodie",
    category: "Hoodies",
    gender: "Men",
    image: "/images/men/hoodie.jpg",
    price: 1899,
    oldPrice: 2799,
    rating: 4.6,
    reviews: 88,
    brand: "NextGrid",
    colors: ["Black", "Olive", "Gray"],
    sizes: ["S", "M", "L"],
    description:
      "Soft fleece hoodie with premium warmth and minimalist luxury styling.",
    features: [
      "Fleece Interior",
      "Heavy Cotton",
      "Warm Fabric",
      "Streetwear Style",
    ],
    stock: 20,
    isNew: true,
  },

  {
    id: 5,
    name: "Premium Sports Sneakers",
    slug: "premium-sports-sneakers",
    category: "Shoes",
    gender: "Men",
    image: "/images/men/shoes.jpg",
    price: 3999,
    oldPrice: 5999,
    rating: 5,
    reviews: 302,
    brand: "NextGrid",
    badge: "Top Rated",
    colors: ["White", "Black"],
    sizes: ["7", "8", "9", "10"],
    description:
      "Lightweight luxury sneakers with premium cushioning and stylish finish.",
    features: [
      "Ultra Lightweight",
      "Premium Cushioning",
      "Slip Resistant",
      "Luxury Design",
    ],
    stock: 10,
    isTrending: true,
    isFeatured: true,
  },
];

// ========================================
// WOMEN PRODUCTS
// ========================================

export const womenProducts: Product[] = [
  {
    id: 101,
    name: "Elegant Evening Dress",
    slug: "elegant-evening-dress",
    category: "Dresses",
    gender: "Women",
    image: "/images/women/dress.jpg",
    gallery: [
      "/images/women/dress.jpg",
      "/images/women/dress-2.jpg",
    ],
    price: 3499,
    oldPrice: 4999,
    rating: 4.9,
    reviews: 240,
    brand: "NextGrid",
    badge: "Luxury",
    colors: ["Red", "Black", "Pink"],
    sizes: ["S", "M", "L"],
    description:
      "Luxury evening dress crafted for elegance, confidence, and premium fashion.",
    features: [
      "Silk Blend Fabric",
      "Elegant Fit",
      "Premium Stitching",
      "Party Wear",
    ],
    stock: 14,
    isFeatured: true,
    isTrending: true,
  },

  {
    id: 102,
    name: "Modern Fashion Handbag",
    slug: "modern-fashion-handbag",
    category: "Accessories",
    gender: "Women",
    image: "/images/women/bag.jpg",
    price: 2599,
    oldPrice: 3599,
    rating: 4.8,
    reviews: 190,
    brand: "NextGrid",
    colors: ["Black", "Beige", "Brown"],
    sizes: ["Free Size"],
    description:
      "Premium luxury handbag designed with modern minimalist aesthetics.",
    features: [
      "Premium Leather",
      "Luxury Design",
      "Spacious Interior",
      "Water Resistant",
    ],
    stock: 9,
    isNew: true,
  },

  {
    id: 103,
    name: "Casual Summer Top",
    slug: "casual-summer-top",
    category: "Tops",
    gender: "Women",
    image: "/images/women/top.jpg",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,
    reviews: 123,
    brand: "NextGrid",
    badge: "Trending",
    colors: ["White", "Lavender", "Peach"],
    sizes: ["S", "M", "L"],
    description:
      "Soft and breathable summer top with elegant modern fashion styling.",
    features: [
      "Breathable Fabric",
      "Soft Texture",
      "Minimal Design",
      "Comfort Fit",
    ],
    stock: 22,
    isTrending: true,
  },

  {
    id: 104,
    name: "Premium High Heels",
    slug: "premium-high-heels",
    category: "Footwear",
    gender: "Women",
    image: "/images/women/heels.jpg",
    price: 2999,
    oldPrice: 4299,
    rating: 4.9,
    reviews: 178,
    brand: "NextGrid",
    badge: "Best Seller",
    colors: ["Black", "Silver"],
    sizes: ["5", "6", "7", "8"],
    description:
      "Luxury high heels with premium finishing and stylish elegance.",
    features: [
      "Luxury Finish",
      "Comfort Cushion",
      "Elegant Design",
      "Party Collection",
    ],
    stock: 11,
    isFeatured: true,
  },

  {
    id: 105,
    name: "Winter Long Coat",
    slug: "winter-long-coat",
    category: "Coats",
    gender: "Women",
    image: "/images/women/coat.jpg",
    price: 4999,
    oldPrice: 6999,
    rating: 5,
    reviews: 210,
    brand: "NextGrid",
    badge: "Premium",
    colors: ["Camel", "Black"],
    sizes: ["M", "L", "XL"],
    description:
      "Elegant winter long coat designed for luxury fashion and warmth.",
    features: [
      "Warm Wool Blend",
      "Luxury Buttons",
      "Premium Finish",
      "Elegant Fit",
    ],
    stock: 7,
    isNew: true,
    isFeatured: true,
  },
];

// ========================================
// CHILDREN PRODUCTS
// ========================================

export const childrenProducts: Product[] = [
  {
    id: 201,
    name: "Kids Winter Hoodie",
    slug: "kids-winter-hoodie",
    category: "Hoodies",
    gender: "Children",
    image: "/images/children/hoodie.jpg",
    price: 999,
    oldPrice: 1499,
    rating: 4.8,
    reviews: 91,
    brand: "NextGrid",
    badge: "Cute Pick",
    colors: ["Blue", "Yellow", "Red"],
    sizes: ["4Y", "6Y", "8Y"],
    description:
      "Comfortable and stylish kids hoodie with soft warm fleece interior.",
    features: [
      "Soft Fleece",
      "Skin Friendly",
      "Warm Fabric",
      "Cute Design",
    ],
    stock: 25,
    isTrending: true,
  },

  {
    id: 202,
    name: "Children Cartoon T-Shirt",
    slug: "children-cartoon-tshirt",
    category: "T-Shirts",
    gender: "Children",
    image: "/images/children/tshirt.jpg",
    price: 699,
    oldPrice: 1099,
    rating: 4.7,
    reviews: 70,
    brand: "NextGrid",
    colors: ["White", "Blue", "Pink"],
    sizes: ["3Y", "5Y", "7Y"],
    description:
      "Fun cartoon printed t-shirt designed for playful everyday comfort.",
    features: [
      "Cotton Fabric",
      "Cute Cartoon Print",
      "Comfort Fit",
      "Easy Wash",
    ],
    stock: 30,
    isNew: true,
  },

  {
    id: 203,
    name: "Kids Sneakers",
    slug: "kids-sneakers",
    category: "Shoes",
    gender: "Children",
    image: "/images/children/shoes.jpg",
    price: 1599,
    oldPrice: 2299,
    rating: 4.9,
    reviews: 110,
    brand: "NextGrid",
    badge: "Popular",
    colors: ["Black", "White", "Blue"],
    sizes: ["1", "2", "3", "4"],
    description:
      "Durable and stylish kids sneakers with lightweight comfort.",
    features: [
      "Lightweight",
      "Non Slip Sole",
      "Comfort Cushion",
      "Stylish Design",
    ],
    stock: 16,
    isFeatured: true,
  },

  {
    id: 204,
    name: "Baby Winter Set",
    slug: "baby-winter-set",
    category: "Winter Wear",
    gender: "Children",
    image: "/images/children/winter-set.jpg",
    price: 1799,
    oldPrice: 2599,
    rating: 5,
    reviews: 55,
    brand: "NextGrid",
    badge: "New Arrival",
    colors: ["Pink", "Sky Blue"],
    sizes: ["1Y", "2Y", "3Y"],
    description:
      "Adorable winter clothing set made with ultra-soft baby-safe fabric.",
    features: [
      "Baby Safe Fabric",
      "Soft Interior",
      "Warm Material",
      "Cute Design",
    ],
    stock: 13,
    isNew: true,
  },

  {
    id: 205,
    name: "Kids Party Dress",
    slug: "kids-party-dress",
    category: "Party Wear",
    gender: "Children",
    image: "/images/children/party-dress.jpg",
    price: 2299,
    oldPrice: 3199,
    rating: 4.8,
    reviews: 84,
    brand: "NextGrid",
    badge: "Party Collection",
    colors: ["Purple", "Pink", "White"],
    sizes: ["4Y", "6Y", "8Y"],
    description:
      "Beautiful party dress for kids designed with premium elegance.",
    features: [
      "Premium Fabric",
      "Elegant Finish",
      "Comfort Fit",
      "Party Wear",
    ],
    stock: 10,
    isTrending: true,
  },
];

// ========================================
// ALL PRODUCTS
// ========================================

export const allProducts: Product[] = [
  ...menProducts,
  ...womenProducts,
  ...childrenProducts,
];

// ========================================
// FEATURED PRODUCTS
// ========================================

export const featuredProducts = allProducts.filter(
  (product) => product.isFeatured
);

// ========================================
// TRENDING PRODUCTS
// ========================================

export const trendingProducts = allProducts.filter(
  (product) => product.isTrending
);

// ========================================
// NEW ARRIVALS
// ========================================

export const newArrivals = allProducts.filter(
  (product) => product.isNew
);