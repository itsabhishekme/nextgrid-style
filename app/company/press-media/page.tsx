"use client";

import {
  ArrowRight,
  CalendarDays,
  Download,
  Globe2,
  Newspaper,
  PlayCircle,
  Sparkles,
  Tv,
} from "lucide-react";

const pressReleases = [
  {
    title: "NextGrid Fashion Expands Global Marketplace",
    date: "August 12, 2026",
    category: "Press Release",
  },
  {
    title: "New AI Fashion Discovery Experience Launched",
    date: "July 28, 2026",
    category: "Technology",
  },
  {
    title: "NextGrid Partners With Luxury Fashion Brands",
    date: "July 10, 2026",
    category: "Partnership",
  },
];

const mediaCoverage = [
  {
    source: "Fashion Weekly",
    title: "How NextGrid Is Changing Modern Fashion Commerce",
  },
  {
    source: "Tech Today",
    title: "The Rise Of AI-Powered Ecommerce Platforms",
  },
  {
    source: "Global Style",
    title: "NextGrid Fashion Leads The Digital Fashion Era",
  },
];

const mediaAssets = [
  {
    title: "Brand Logos",
    description: "Official NextGrid logos and identity assets.",
  },
  {
    title: "Press Kit",
    description: "Company overview, leadership details, and brand story.",
  },
  {
    title: "Product Images",
    description: "High-resolution fashion and campaign imagery.",
  },
];

export default function PressMediaPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4" />
              Press & Media Center
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              News, Stories &
              <span className="block text-neutral-500">
                Media Resources
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Explore company announcements, press releases, media coverage,
              and official brand resources.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-2xl bg-black px-7 py-4 font-semibold text-white transition hover:bg-neutral-800">
                Download Press Kit
              </button>

              <button className="rounded-2xl border border-neutral-300 px-7 py-4 font-semibold transition hover:bg-neutral-100">
                Media Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black">Latest Press Releases</h2>

          <p className="mt-4 text-lg text-neutral-600">
            Official announcements and updates from NextGrid Fashion.
          </p>
        </div>

        <div className="space-y-6">
          {pressReleases.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-8 transition hover:shadow-xl lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  {item.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold leading-snug">
                  {item.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-neutral-500">
                  <CalendarDays className="h-4 w-4" />
                  {item.date}
                </div>
              </div>

              <button className="flex items-center gap-2 rounded-2xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-neutral-800">
                Read More
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Media Coverage */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black">Media Coverage</h2>

            <p className="mt-4 text-lg text-neutral-600">
              Featured stories and publications covering NextGrid Fashion.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {mediaCoverage.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                  <Newspaper className="h-7 w-7" />
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  {item.source}
                </p>

                <h3 className="mt-4 text-2xl font-black leading-snug">
                  {item.title}
                </h3>

                <button className="mt-8 flex items-center gap-2 font-semibold text-black">
                  View Article
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black">Media Resources</h2>

          <p className="mt-4 text-lg text-neutral-600">
            Download official brand assets and company resources.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {mediaAssets.map((asset, index) => (
            <div
              key={index}
              className="rounded-3xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                <Download className="h-7 w-7" />
              </div>

              <h3 className="text-2xl font-black">{asset.title}</h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {asset.description}
              </p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-black">
                Download
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Media Contact */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-[40px] bg-black px-8 py-16 text-white lg:px-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                <Tv className="h-4 w-4" />
                Media Inquiries
              </div>

              <h2 className="text-4xl font-black sm:text-5xl">
                Connect With Our Media Team
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-300">
                For interviews, collaborations, partnerships, or press-related
                questions, contact our communications team.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 text-black shadow-2xl">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                    Press Email
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    media@nextgridfashion.com
                  </h3>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                    Global Media
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-lg font-medium">
                    <Globe2 className="h-5 w-5" />
                    Worldwide Coverage & Partnerships
                  </div>
                </div>

                <button className="flex items-center gap-2 rounded-2xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-neutral-800">
                  Contact Media Team
                  <PlayCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}