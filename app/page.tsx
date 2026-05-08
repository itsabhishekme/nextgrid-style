import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";

import {
  Sparkles,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Star,
  ArrowRight,
  Heart,
  BadgeCheck,
  Gem,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Sparkles,
      title: "Luxury Collections",
      description:
        "Premium fashion collections crafted with modern aesthetics and elegant styling.",
    },

    {
      icon: ShoppingBag,
      title: "Exclusive Fashion",
      description:
        "Discover trending streetwear, luxury wear and premium seasonal arrivals.",
    },

    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Ultra-fast delivery experience with secure shipping and real-time tracking.",
    },

    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      description:
        "100% secure payments with trusted checkout and customer protection.",
    },
  ];

  const categories = [
    {
      title: "Men Collection",
      image: "/images/categories/men.jpg",
      href: "/shop/men",
    },

    {
      title: "Women Fashion",
      image: "/images/categories/women.jpg",
      href: "/shop/women",
    },

    {
      title: "Kids Wear",
      image: "/images/categories/kids.jpg",
      href: "/shop/kids",
    },
  ];

  const trendingProducts = [
    {
      title: "Urban Black Jacket",
      price: "$149",
      image: "/images/men/jacket.jpg",
      category: "Men",
    },

    {
      title: "Luxury Women Dress",
      price: "$199",
      image: "/images/women/dress.jpg",
      category: "Women",
    },

    {
      title: "Premium Kids Hoodie",
      price: "$89",
      image: "/images/children/hoodie.jpg",
      category: "Kids",
    },

    {
      title: "Classic White Sneakers",
      price: "$129",
      image: "/images/shoes/sneakers.jpg",
      category: "Shoes",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-300px] top-[10%] h-[700px] w-[700px] rounded-full bg-white/5 blur-[180px]" />

        <div className="absolute bottom-[-300px] right-[-300px] h-[700px] w-[700px] rounded-full bg-zinc-700/10 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-500/5 blur-[160px]" />
      </div>

      {/* CATEGORY SECTION */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex items-center justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">
              Categories
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Explore Collections
            </h2>
          </div>

          <button className="hidden items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm transition hover:border-white hover:bg-white hover:text-black md:flex">
            View All
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              href={category.href}
            />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Why Choose Us
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Premium Shopping Experience
          </h2>

          <p className="mx-auto max-w-2xl text-zinc-400">
            Elevate your style with luxury fashion collections designed for
            modern lifestyles and premium comfort.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-zinc-600"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-black">
                    <Icon size={30} />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRENDING PRODUCTS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.4em] text-zinc-500">
              Trending Products
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              New Fashion Arrivals
            </h2>
          </div>

          <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105">
            Shop Collection
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {trendingProducts.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-zinc-600"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-2 text-xs uppercase tracking-widest text-white backdrop-blur-md">
                  {product.category}
                </div>

                <button className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-110">
                  <Heart size={18} />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-center gap-1 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />

                  <span className="ml-2 text-sm text-zinc-400">(5.0)</span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">
                    {product.price}
                  </span>

                  <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-105">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 rounded-[40px] border border-zinc-800 bg-zinc-900/50 p-10 backdrop-blur-xl md:grid-cols-4">
          <div>
            <h3 className="mb-2 text-5xl font-bold">15K+</h3>
            <p className="text-zinc-400">Happy Customers</p>
          </div>

          <div>
            <h3 className="mb-2 text-5xl font-bold">250+</h3>
            <p className="text-zinc-400">Luxury Products</p>
          </div>

          <div>
            <h3 className="mb-2 text-5xl font-bold">98%</h3>
            <p className="text-zinc-400">Positive Reviews</p>
          </div>

          <div>
            <h3 className="mb-2 text-5xl font-bold">24/7</h3>
            <p className="text-zinc-400">Customer Support</p>
          </div>
        </div>
      </section>

      {/* PREMIUM BANNER */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[40px] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-10 md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
                <Gem size={28} />
              </div>

              <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
                Premium Membership
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Unlock Exclusive Fashion Benefits
            </h2>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Join our premium membership and get early access to luxury
              collections, exclusive discounts and personalized fashion drops.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
                Join Membership
              </button>

              <button className="rounded-full border border-zinc-700 px-8 py-4 font-semibold transition hover:border-white hover:bg-white hover:text-black">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}