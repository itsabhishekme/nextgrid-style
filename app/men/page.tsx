import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

import { menProducts } from "@/data/products";

import {
  ArrowRight,
  Filter,
  SlidersHorizontal,
  Sparkles,
  ShieldCheck,
  Truck,
  Star,
} from "lucide-react";

export default function MenPage() {
  const categories = [
    "All",
    "Streetwear",
    "Luxury",
    "Casual",
    "Jackets",
    "Shoes",
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Luxury Fashion",
      description:
        "Premium crafted outfits with modern aesthetics.",
    },

    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Express shipping with live order tracking.",
    },

    {
      icon: ShieldCheck,
      title: "Secure Checkout",
      description:
        "Trusted payments with complete protection.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        {/* TOP LEFT */}
        <div className="absolute left-[-300px] top-[-300px] h-[700px] w-[700px] rounded-full bg-white/5 blur-[180px]" />

        {/* RIGHT */}
        <div className="absolute right-[-300px] top-[20%] h-[700px] w-[700px] rounded-full bg-zinc-700/10 blur-[180px]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 pt-[140px] lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              {/* BADGE */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-white" />

                <span className="text-xs uppercase tracking-[0.3em] text-zinc-300">
                  Premium Men's Collection
                </span>
              </div>

              {/* TITLE */}
              <h1 className="mt-10 text-6xl font-black leading-[0.95] md:text-8xl xl:text-[8rem]">
                <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                  MEN'S
                </span>

                <span className="mt-2 block text-white">
                  STYLE
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-10 max-w-2xl text-lg leading-9 text-zinc-400 md:text-xl">
                Discover modern streetwear, luxury fashion
                essentials and premium collections designed
                for bold personalities and timeless style.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                <button className="group flex items-center justify-center gap-4 rounded-full bg-white px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] text-black shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all hover:scale-105">
                  Explore Collection

                  <ArrowRight
                    size={18}
                    className="transition-all group-hover:translate-x-1"
                  />
                </button>

                <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] text-white backdrop-blur-xl transition-all hover:bg-white hover:text-black">
                  New Arrivals
                </button>
              </div>

              {/* STATS */}
              <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
                <div>
                  <h3 className="text-4xl font-black">
                    15K+
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Premium Customers
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black">
                    120+
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Luxury Products
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black">
                    4.9★
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Customer Rating
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/5 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/[0.03]">
                <img
                  src="/images/men/men.jpg"
                  alt="Men Fashion"
                  className="h-[750px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* FLOATING CARD */}
                <div className="absolute bottom-6 left-6 right-6 rounded-[32px] border border-white/10 bg-black/40 p-6 backdrop-blur-2xl">
                  {/* STARS */}
                  <div className="mb-5 flex items-center gap-2">
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

                    <span className="ml-3 text-sm text-zinc-400">
                      Rated by 15,000+ customers
                    </span>
                  </div>

                  <h3 className="text-3xl font-black">
                    Premium Men's Fashion
                  </h3>

                  <p className="mt-4 leading-8 text-zinc-400">
                    Elevate your wardrobe with modern luxury
                    collections crafted for bold personalities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06]"
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

      {/* PRODUCTS SECTION */}
      <section className="relative z-10 px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* TOP BAR */}
          <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                Trending Products
              </span>

              <h2 className="mt-5 text-5xl font-black md:text-6xl">
                Featured Collection
              </h2>
            </div>

            {/* RIGHT */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-sm uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black">
                <Filter size={18} />
                Filter
              </button>

              <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-sm uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black">
                <SlidersHorizontal size={18} />
                Sort
              </button>
            </div>
          </div>

          {/* CATEGORY BUTTONS */}
          <div className="mb-14 flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition-all ${
                  index === 0
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/[0.03] text-white hover:bg-white hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {menProducts.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[500px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* BADGE */}
                  <div className="absolute left-6 top-6 rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black">
                    New
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  {/* STARS */}
                  <div className="mb-5 flex items-center gap-1">
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  </div>

                  <h3 className="text-3xl font-bold">
                    {product.name}
                  </h3>

                  <p className="mt-4 leading-8 text-zinc-400">
                    Premium luxury fashion designed with
                    elegant aesthetics and modern styling.
                  </p>

                  {/* PRICE + BUTTON */}
                  <div className="mt-8 flex items-center justify-between">
                    <p className="text-3xl font-black">
                      ₹{product.price}
                    </p>

                    <button className="rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:scale-105">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM BANNER */}
      <section className="relative z-10 px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 lg:p-20">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="text-xs uppercase tracking-[0.5em] text-zinc-500">
                NextGrid Premium
              </span>

              <h2 className="mt-8 bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-7xl">
                Upgrade
                <br />
                Your Style
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                Unlock exclusive fashion drops, premium
                collections and luxury shopping experiences
                designed for modern fashion enthusiasts.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                <button className="rounded-full bg-white px-8 py-5 font-bold uppercase tracking-[0.2em] text-black transition-all hover:scale-105">
                  Join Premium
                </button>

                <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-5 font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black">
                  Learn More
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/5 blur-[120px]" />

              <img
                src="/images/men/jacket.jpg"
                alt="Luxury Fashion"
                className="relative z-10 h-[600px] w-full rounded-[40px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}