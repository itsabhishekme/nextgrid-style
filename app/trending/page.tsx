"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Flame,
  Heart,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

const trendingProducts = [
  {
    title: "Neo Street Jacket",
    category: "Luxury Streetwear",
    price: "$249",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Futuristic Sneakers",
    category: "Designer Footwear",
    price: "$189",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Minimal Black Watch",
    category: "Luxury Accessories",
    price: "$329",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Signature Sunglasses",
    category: "Premium Eyewear",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
  },
];

const stats = [
  {
    title: "Trending Products",
    value: "250+",
  },
  {
    title: "Global Customers",
    value: "120K",
  },
  {
    title: "Luxury Collections",
    value: "85+",
  },
];

export default function TrendingPage() {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/20 blur-[120px]" />

          <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/20 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="mx-auto flex min-h-[85dvh] w-full max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-sm">
            <Flame size={16} />
            Trending Collection
          </div>

          <h1 className="max-w-5xl text-4xl font-black uppercase leading-tight tracking-[0.08em] sm:text-5xl md:text-6xl xl:text-7xl">
            Discover What’s
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              {" "}
              Trending Now
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Explore luxury fashion trends, futuristic streetwear, premium
            accessories, and modern styles dominating the fashion world.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105"
            >
              Shop Trending
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/magazine"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Fashion Magazine
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
            >
              <h2 className="text-4xl font-black uppercase tracking-[0.08em]">
                {stat.value}
              </h2>

              <p className="mt-4 text-sm uppercase tracking-[0.22em] text-zinc-500">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED BANNER */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10">
          <div className="relative h-[650px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop"
              alt="Trending Fashion"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                <Sparkles size={12} />
                Editor’s Pick
              </div>

              <h2 className="max-w-4xl text-3xl font-black uppercase leading-tight tracking-[0.08em] sm:text-5xl">
                Luxury Streetwear Inspired By The Future Of Fashion
              </h2>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.18em] text-zinc-300">
                <div className="flex items-center gap-2">
                  <TrendingUp size={16} />
                  Trending Worldwide
                </div>

                <div className="flex items-center gap-2">
                  <Star size={16} />
                  Premium Collection
                </div>
              </div>

              <button
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-black
                  transition-all
                  hover:scale-105
                "
              >
                Explore Collection
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between gap-5">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Most Popular
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.08em] sm:text-4xl">
              Trending Products
            </h2>
          </div>

          <Link
            href="/shop"
            className="hidden items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-zinc-300 transition hover:text-white md:flex"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {trendingProducts.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
            >
              <div className="relative h-[360px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <button
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-black
                    shadow-lg
                    transition-all
                    hover:scale-110
                  "
                >
                  <Heart size={18} />
                </button>

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                  <Flame size={12} />
                  Trending
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  {product.category}
                </p>

                <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.05em]">
                  {product.title}
                </h3>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xl font-black uppercase tracking-[0.08em]">
                    {product.price}
                  </p>

                  <button
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-black
                      transition-all
                      hover:scale-110
                    "
                  >
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}