import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Camera,
  ChevronRight,
  Crown,
  Eye,
  Flame,
  Globe2,
  Heart,
  Layers3,
  Palette,
  Play,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wand2,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "NextGrid Style Magazine | Luxury Fashion, Lifestyle & Future Streetwear",
  description:
    "Explore the NextGrid Universe — luxury fashion, futuristic streetwear, women’s elegance, premium lifestyle stories, modern trends, and next generation style inspiration.",
  keywords: [
    "NextGrid Style",
    "Luxury Fashion",
    "Streetwear",
    "Fashion Magazine",
    "Lifestyle",
    "Modern Fashion",
    "Luxury Streetwear",
    "Fashion Blog",
    "Women Fashion",
    "Kids Fashion",
    "Fashion Trends",
    "Luxury Lifestyle",
  ],
  openGraph: {
    title: "NextGrid Style Magazine",
    description:
      "Luxury fashion, modern lifestyle, premium editorials, and futuristic streetwear inspiration.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
};

const categories = [
  "Luxury",
  "Streetwear",
  "Lifestyle",
  "Sneakers",
  "Culture",
  "Fashion Week",
  "Minimal",
  "Runway",
  "Future",
  "Premium",
];

const heroArticles = [
  {
    title: "The Future Of Luxury Streetwear",
    subtitle: "Modern Culture Meets Premium Fashion",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1800&auto=format&fit=crop",
  },
];

const features = [
  {
    icon: Crown,
    title: "Luxury Editorials",
    description:
      "Premium fashion insights inspired by luxury culture and modern runway fashion.",
  },
  {
    icon: Globe2,
    title: "Global Trends",
    description:
      "Discover future trends shaping modern fashion and lifestyle globally.",
  },
  {
    icon: Zap,
    title: "Future Fashion",
    description:
      "Futuristic aesthetics and digital culture for the next generation.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Identity",
    description:
      "Confidence, individuality, comfort, and creativity in every collection.",
  },
];

const magazineArticles = [
  {
    title: "Luxury Accessories Defining Modern Fashion",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    views: "31K",
    date: "September 2026",
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
    title: "Digital Fashion & AI Powered Styling",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
    views: "44K",
    date: "December 2026",
  },
  {
    title: "The Rise Of Quiet Luxury In Youth Fashion",
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    views: "12K",
    date: "October 2026",
  },
  {
    title: "Luxury Sneakers Dominating Global Fashion",
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    views: "26K",
    date: "January 2027",
  },
  {
    title: "Inside The Future Of Sustainable Fashion",
    category: "Eco Fashion",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    views: "28K",
    date: "February 2027",
  },
  {
    title: "Runway Styling For The New Generation",
    category: "Runway",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    views: "39K",
    date: "March 2027",
  },
  {
    title: "Streetwear Culture Transforming Fashion",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    views: "22K",
    date: "April 2027",
  },
  {
    title: "Fashion Week Trends Shaping Tomorrow",
    category: "Fashion Week",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    views: "35K",
    date: "May 2027",
  },
];

const universe = [
  {
    title: "NextGrid Lifestyle",
    subtitle: "Style For Ambition",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop",
    description:
      "NextGrid Lifestyle creates fashion for modern men who believe style is more than appearance — it is ambition, confidence, and identity.",
  },
  {
    title: "NextGrid HerStyle",
    subtitle: "Style That Speaks Her Story",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop",
    description:
      "HerStyle celebrates elegance, empowerment, and fearless femininity through timeless collections designed for confident women.",
  },
  {
    title: "NextGrid LittleStyle",
    subtitle: "The Joy Of Growing With Style",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1400&auto=format&fit=crop",
    description:
      "LittleStyle blends comfort, creativity, and playful aesthetics for kids growing with confidence and happiness.",
  },
];

const editorialCards = [
  {
    title: "Streetwear Culture",
    icon: Layers3,
  },
  {
    title: "Luxury Fashion",
    icon: Sparkles,
  },
  {
    title: "Modern Lifestyle",
    icon: Camera,
  },
  {
    title: "Creative Styling",
    icon: Palette,
  },
];

export default function MagazinePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[180px]" />

        <div className="absolute bottom-[-220px] right-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-300 backdrop-blur-xl">
              <Sparkles size={15} />
              Welcome To NextGrid Style
            </div>

            <h1 className="mt-8 text-5xl font-black uppercase leading-[1.02] tracking-[0.08em] sm:text-7xl xl:text-8xl">
              Fashion
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                {" "}
                Meets
              </span>
              <br />
              Purpose
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-9 text-zinc-400 sm:text-lg">
              Welcome to NextGrid Style, where fashion meets purpose and
              individuality defines the future. Designed for the modern
              generation, NextGrid creates a seamless blend of comfort,
              confidence, creativity, luxury, and modern lifestyle inspiration.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/trending"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105"
              >
                Explore Magazine
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/shop"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Shop Collection
                <ShoppingBag size={18} />
              </Link>
            </div>

            {/* STATS */}
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <h3 className="text-4xl font-black">250K+</h3>

                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Monthly Readers
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <h3 className="text-4xl font-black">120+</h3>

                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Fashion Stories
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <h3 className="text-4xl font-black">50+</h3>

                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Global Trends
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[40px] border border-white/10">
              <div className="relative h-[760px]">
                <Image
                  src={heroArticles[0].image}
                  alt="NextGrid Magazine"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                    <Flame size={12} />
                    Cover Story
                  </div>

                  <h2 className="mt-5 text-3xl font-black uppercase leading-tight tracking-[0.06em] sm:text-5xl">
                    {heroArticles[0].title}
                  </h2>

                  <p className="mt-5 text-zinc-300">
                    {heroArticles[0].subtitle}
                  </p>

                  <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105">
                    Read Story
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 hidden rounded-[30px] border border-white/10 bg-black/70 p-6 backdrop-blur-xl lg:block">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white p-4 text-black">
                  <BadgeCheck size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-black uppercase">
                    Premium Fashion
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Luxury Meets Identity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 transition-all duration-300 hover:bg-white hover:text-black"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Why NextGrid
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-[0.08em] sm:text-5xl">
            The Future Of Fashion Media
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-white p-4 text-black">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-black uppercase tracking-[0.05em]">
                  {feature.title}
                </h3>

                <p className="mt-5 text-sm leading-8 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* NEXTGRID UNIVERSE */}
      <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            NextGrid Universe
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-[0.08em] sm:text-6xl">
            Three Worlds One Vision
          </h2>
        </div>

        <div className="space-y-10">
          {universe.map((item) => (
            <div
              key={item.title}
              className="grid overflow-hidden rounded-[40px] border border-white/10 bg-white/5 lg:grid-cols-2"
            >
              <div className="relative h-[450px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300">
                  <Star size={14} />
                  {item.subtitle}
                </div>

                <h3 className="mt-6 text-4xl font-black uppercase tracking-[0.06em]">
                  {item.title}
                </h3>

                <p className="mt-6 text-base leading-9 text-zinc-400">
                  {item.description}
                </p>

                <button className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105">
                  Discover More
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAGAZINE CONTENT */}
      <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Latest Stories
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-[0.08em] sm:text-5xl">
              Trending Magazine Content
            </h2>
          </div>

          <Link
            href="/trending"
            className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-zinc-300 transition hover:text-white"
          >
            View All Stories
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {magazineArticles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
            >
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                  <Sparkles size={12} />
                  Featured
                </div>
              </div>

              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  {article.category}
                </p>

                <h3 className="mt-4 text-2xl font-black uppercase leading-snug tracking-[0.05em]">
                  {article.title}
                </h3>

                <div className="mt-6 flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Eye size={14} />
                    {article.views}
                  </div>

                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} />
                    {article.date}
                  </div>
                </div>

                <button className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all duration-300 hover:bg-white hover:text-black">
                  Read Article
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 sm:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300">
              <Play size={14} />
              Editorial Vision
            </div>

            <h2 className="mt-7 text-4xl font-black uppercase leading-tight tracking-[0.06em]">
              Fashion Is More Than Appearance
            </h2>

            <p className="mt-8 text-base leading-9 text-zinc-400">
              NextGrid Style exists for creators, dreamers, innovators, and the
              modern generation seeking more than trends. Every story explores
              identity, ambition, confidence, and individuality through premium
              fashion experiences.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {editorialCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="rounded-[24px] border border-white/10 bg-black/40 p-5"
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-black">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-black uppercase">
                      {card.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-black">
              <Heart size={14} />
              Brand Philosophy
            </div>

            <h2 className="mt-7 text-4xl font-black uppercase leading-tight tracking-[0.06em]">
              Every Outfit Tells A Story
            </h2>

            <p className="mt-8 text-base leading-9 text-zinc-300">
              Together, these three worlds form the NextGrid Universe — a
              lifestyle movement where fashion meets emotion, trends meet
              tradition, and individuality becomes identity.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white p-3 text-black">
                  <BadgeCheck size={18} />
                </div>

                <div>
                  <h4 className="font-black uppercase">
                    Confidence Through Style
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    Fashion designed to inspire confidence and self-expression.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white p-3 text-black">
                  <Users size={18} />
                </div>

                <div>
                  <h4 className="font-black uppercase">
                    Built For The New Generation
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    A future-driven lifestyle for creators and dreamers.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105">
              Explore Vision
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-28 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300">
            <BookOpen size={14} />
            Join NextGrid
          </div>

          <h2 className="mt-8 text-4xl font-black uppercase leading-tight tracking-[0.08em] sm:text-6xl">
            Enter The Future Of Fashion
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-9 text-zinc-400">
            Discover luxury editorials, global fashion insights, modern
            lifestyle inspiration, premium culture, and futuristic fashion
            stories curated for the next generation.
          </p>

          <div className="mt-10 flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-white/10 bg-white/5 px-6 text-sm text-white outline-none placeholder:text-zinc-500"
            />

            <button className="h-14 rounded-full bg-white px-8 text-sm font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}