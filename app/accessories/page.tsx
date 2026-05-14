"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Gem,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Watch,
} from "lucide-react";

const accessories = [
  {
    title: "Luxury Watches",
    category: "Premium Collection",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Designer Sunglasses",
    category: "Modern Fashion",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Premium Bags",
    category: "Luxury Essentials",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Signature Jewelry",
    category: "Elegant Style",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function AccessoriesPage() {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/20 blur-[120px]" />

          <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/20 blur-[120px]" />

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
            <Sparkles size={16} />
            Luxury Accessories
          </div>

          <h1 className="max-w-5xl text-4xl font-black uppercase leading-tight tracking-[0.08em] sm:text-5xl md:text-6xl xl:text-7xl">
            Elevate Your
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              {" "}
              Signature Style
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Discover luxury watches, premium bags, modern eyewear, and iconic
            fashion accessories crafted for the future of style.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105"
            >
              Explore Collection
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/trending"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Trending Now
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
              <Watch size={26} />
            </div>

            <h3 className="text-2xl font-black uppercase tracking-[0.08em]">
              Premium Quality
            </h3>

            <p className="mt-4 leading-8 text-zinc-400">
              Crafted with premium materials and futuristic luxury aesthetics.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
              <ShieldCheck size={26} />
            </div>

            <h3 className="text-2xl font-black uppercase tracking-[0.08em]">
              Secure Shopping
            </h3>

            <p className="mt-4 leading-8 text-zinc-400">
              Safe checkout experience with trusted payment security systems.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
              <Gem size={26} />
            </div>

            <h3 className="text-2xl font-black uppercase tracking-[0.08em]">
              Luxury Collection
            </h3>

            <p className="mt-4 leading-8 text-zinc-400">
              Curated accessories inspired by modern street luxury culture.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between gap-5">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Featured Collection
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.08em] sm:text-4xl">
              Accessories Spotlight
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
          {accessories.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
            >
              <div className="relative h-[360px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                  <Star size={12} />
                  Featured
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  {item.category}
                </p>

                <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.05em]">
                  {item.title}
                </h3>

                <button
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    transition-all
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Shop Now
                  <ShoppingBag size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}