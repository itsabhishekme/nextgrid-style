"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Search,
  Sparkles,
} from "lucide-react";

const featuredPost = {
  title: "The Future of Streetwear in 2026",
  description:
    "Discover how oversized silhouettes, sustainable fabrics, and digital fashion are reshaping modern streetwear culture.",
  image:
    "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1600&auto=format&fit=crop",
  category: "Fashion Trends",
  date: "August 10, 2026",
  readTime: "6 min read",
};

const posts = [
  {
    title: "Minimal Fashion Essentials You Need",
    category: "Style Guide",
    date: "August 08, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Top Luxury Sneakers This Season",
    category: "Sneakers",
    date: "August 05, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "How Gen-Z Is Changing Fashion",
    category: "Culture",
    date: "August 02, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Summer Colors That Always Work",
    category: "Color Trends",
    date: "July 28, 2026",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Behind The Scenes Of Modern Fashion",
    category: "Editorial",
    date: "July 22, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Luxury Meets Comfort In 2026",
    category: "Luxury",
    date: "July 18, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4" />
              NextGrid Fashion Journal
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Fashion Stories &
              <span className="block text-neutral-500">Style Inspiration</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Explore trends, styling ideas, luxury fashion insights, and the
              future of modern streetwear culture.
            </p>

            <div className="mx-auto mt-10 flex max-w-xl items-center rounded-2xl border border-neutral-200 bg-white px-4 shadow-sm">
              <Search className="h-5 w-5 text-neutral-400" />

              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-transparent px-4 py-4 outline-none"
              />

              <button className="rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Featured Article</h2>
            <p className="mt-2 text-neutral-500">
              Handpicked insights from the fashion world.
            </p>
          </div>

          <Link
            href="#"
            className="hidden items-center gap-2 text-sm font-semibold text-black md:flex"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
              {featuredPost.category}
            </span>

            <h3 className="text-4xl font-black leading-tight">
              {featuredPost.title}
            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              {featuredPost.description}
            </p>

            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {featuredPost.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {featuredPost.readTime}
              </div>
            </div>

            <button className="mt-10 flex w-fit items-center gap-2 rounded-2xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-neutral-800">
              Read Article
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <p className="mt-2 text-neutral-500">
            Fresh updates from fashion, culture, and luxury lifestyle.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
                  {post.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold leading-snug transition group-hover:text-neutral-500">
                  {post.title}
                </h3>

                <div className="mt-5 flex items-center justify-between text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {post.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <button className="mt-6 flex items-center gap-2 font-semibold text-black">
                  Read More
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}