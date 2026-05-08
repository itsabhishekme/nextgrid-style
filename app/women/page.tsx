import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  Sparkles,
  Star,
  Heart,
  ShoppingBag,
  Crown,
  ShieldCheck,
  Truck,
  Filter,
  SlidersHorizontal,
} from "lucide-react";

const womenProducts = [
  {
    name: "Luxury Pink Dress",
    price: 4999,
    image: "/images/women/women.jpg",
  },

  {
    name: "Elegant Fashion Outfit",
    price: 6999,
    image: "/images/women/dress.jpg",
  },

  {
    name: "Modern Streetwear",
    price: 3999,
    image: "/images/women/women.jpg",
  },
];

export default function WomenPage() {
  const categories = [
    "All",
    "Luxury",
    "Dresses",
    "Streetwear",
    "Beauty",
    "Accessories",
  ];

  const features = [
    {
      icon: Crown,
      title: "Luxury Fashion",
      description:
        "Elegant premium collections crafted for modern women.",
    },

    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Express shipping with real-time tracking worldwide.",
    },

    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description:
        "Trusted checkout with complete customer protection.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 pt-36 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3">
                <Sparkles size={16} />

                <span className="text-xs uppercase tracking-[0.3em] text-zinc-300">
                  Women's Luxury Collection
                </span>
              </div>

              <h1 className="mt-10 text-6xl font-black leading-none md:text-8xl">
                <span className="block bg-gradient-to-r from-pink-300 via-white to-purple-400 bg-clip-text text-transparent">
                  WOMEN'S
                </span>

                <span className="block text-white">
                  FASHION
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-9 text-zinc-400">
                Explore elegant luxury fashion collections
                designed for confident women with premium
                aesthetics and timeless beauty.
              </p>

              <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                <button className="flex items-center justify-center gap-4 rounded-full bg-white px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] text-black transition-all hover:scale-105">
                  Explore Collection

                  <ArrowRight size={18} />
                </button>

                <button className="rounded-full border border-white/10 bg-white/5 px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] transition-all hover:bg-white hover:text-black">
                  New Arrivals
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="overflow-hidden rounded-[40px] border border-white/10">
                <img
                  src="/images/women/women.jpg"
                  alt="Women Fashion"
                  className="h-[700px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-[30px] border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
                  <div className="mb-4 flex gap-1">
                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  </div>

                  <h3 className="text-3xl font-black">
                    Elegant Luxury Style
                  </h3>

                  <p className="mt-4 text-zinc-400">
                    Discover premium modern fashion for women.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8 transition-all hover:-translate-y-2"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-black">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* TOP */}
          <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                Premium Collection
              </span>

              <h2 className="mt-5 text-5xl font-black">
                Featured Products
              </h2>
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black">
                <Filter size={18} />
                Filter
              </button>

              <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black">
                <SlidersHorizontal size={18} />
                Sort
              </button>
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="mb-14 flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] ${
                  index === 0
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/5 hover:bg-white hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PRODUCTS GRID */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {womenProducts.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/5 transition-all hover:-translate-y-2"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[520px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                  <div className="absolute left-6 top-6 rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black">
                    Luxury
                  </div>

                  <button className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-xl hover:bg-white hover:text-black">
                    <Heart size={18} />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold">
                    {product.name}
                  </h3>

                  <p className="mt-4 leading-8 text-zinc-400">
                    Elegant premium fashion crafted with
                    modern aesthetics and timeless beauty.
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <p className="text-3xl font-black">
                      ₹{product.price}
                    </p>

                    <button className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:scale-105">
                      <ShoppingBag size={16} />
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}