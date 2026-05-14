"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Eye,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

const articles = [
  {
    title: "The Future Of Luxury Streetwear",
    category: "Fashion Trends",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    views: "24K",
    date: "July 2026",
  },
  {
    title: "Minimal Fashion With Futuristic Design",
    category: "Style Guide",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    views: "18K",
    date: "August 2026",
  },
  {
    title: "Luxury Accessories Defining Modern Fashion",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    views: "31K",
    date: "September 2026",
  },
];

const categories = [
  "Luxury",
  "Streetwear",
  "Accessories",
  "Sneakers",
  "Lifestyle",
  "Runway",
];

export default function MagazinePage() {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

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
            <BookOpen size={16} />
            NextGrid Magazine
          </div>

          <h1 className="max-w-5xl text-4xl font-black uppercase leading-tight tracking-[0.08em] sm:text-5xl md:text-6xl xl:text-7xl">
            The Future Of
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              {" "}
              Fashion Stories
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Explore luxury fashion insights, futuristic trends, premium
            lifestyle articles, and modern streetwear culture curated for the
            next generation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/trending"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105"
            >
              Explore Articles
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-6
                py-3
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-zinc-300
                transition-all
                hover:bg-white
                hover:text-black
              "
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10">
          <div className="relative h-[650px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop"
              alt="Magazine"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                <Sparkles size={12} />
                Cover Story
              </div>

              <h2 className="max-w-4xl text-3xl font-black uppercase leading-tight tracking-[0.08em] sm:text-5xl">
                Redefining Luxury Streetwear In The Digital Fashion Era
              </h2>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm uppercase tracking-[0.18em] text-zinc-300">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  October 2026
                </div>

                <div className="flex items-center gap-2">
                  <Eye size={16} />
                  48K Views
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
                Read Article
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between gap-5">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Latest Stories
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.08em] sm:text-4xl">
              Trending Articles
            </h2>
          </div>

          <Link
            href="/trending"
            className="hidden items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-zinc-300 transition hover:text-white md:flex"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
            >
              <div className="relative h-[360px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
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
                  {article.category}
                </p>

                <h3 className="mt-3 text-2xl font-black uppercase leading-snug tracking-[0.05em]">
                  {article.title}
                </h3>

                <div className="mt-5 flex items-center gap-5 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Eye size={14} />
                    {article.views}
                  </div>

                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} />
                    {article.date}
                  </div>
                </div>

                <button
                  className="
                    mt-7
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
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}