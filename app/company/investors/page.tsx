"use client";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Globe2,
  LineChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    title: "Rapid Growth",
    value: "240%",
    description: "Year-over-year platform growth across fashion commerce.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    value: "18+",
    description: "Countries actively engaging with our digital ecosystem.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Brand Partners",
    value: "120+",
    description: "Luxury and modern fashion brands collaborating with us.",
  },
  {
    icon: ShieldCheck,
    title: "Customer Trust",
    value: "98%",
    description: "Positive customer satisfaction and retention rate.",
  },
];

const reports = [
  {
    title: "Q1 Financial Report 2026",
    category: "Financial",
    date: "August 2026",
  },
  {
    title: "Annual Growth Presentation",
    category: "Presentation",
    date: "July 2026",
  },
  {
    title: "Investor Strategy Overview",
    category: "Strategy",
    date: "June 2026",
  },
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4" />
              Investor Relations
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Powering The Future
              <span className="block text-neutral-500">
                Of Digital Fashion
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Building a scalable, technology-driven fashion ecosystem designed
              for modern commerce, innovation, and global expansion.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-2xl bg-black px-7 py-4 font-semibold text-white transition hover:bg-neutral-800">
                Download Reports
              </button>

              <button className="rounded-2xl border border-neutral-300 px-7 py-4 font-semibold transition hover:bg-neutral-100">
                Investor Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black">Company Highlights</h2>

          <p className="mt-4 text-lg text-neutral-600">
            Key numbers driving our growth and innovation journey.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  {item.title}
                </p>

                <h3 className="mt-3 text-5xl font-black">{item.value}</h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Growth Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
              <LineChart className="h-4 w-4" />
              Market Expansion
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Redefining Fashion Through Technology
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              NextGrid Fashion combines modern ecommerce infrastructure,
              creator-driven experiences, and premium fashion storytelling to
              scale globally.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-black" />

                <p className="text-neutral-700">
                  AI-powered fashion discovery and personalization.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-black" />

                <p className="text-neutral-700">
                  High-growth omnichannel ecommerce infrastructure.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-black" />

                <p className="text-neutral-700">
                  Strong community-driven brand engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] bg-black p-10 text-white">
            <div className="mb-8 flex items-center gap-3">
              <BarChart3 className="h-8 w-8" />

              <h3 className="text-3xl font-black">
                Investor Snapshot
              </h3>
            </div>

            <div className="space-y-8">
              <div className="border-b border-white/10 pb-6">
                <p className="text-sm uppercase tracking-wide text-neutral-400">
                  Revenue Growth
                </p>

                <h4 className="mt-2 text-5xl font-black">+180%</h4>
              </div>

              <div className="border-b border-white/10 pb-6">
                <p className="text-sm uppercase tracking-wide text-neutral-400">
                  Active Customers
                </p>

                <h4 className="mt-2 text-5xl font-black">1.2M+</h4>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-neutral-400">
                  Expansion Markets
                </p>

                <h4 className="mt-2 text-5xl font-black">12</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black">Reports & Resources</h2>

          <p className="mt-4 text-lg text-neutral-600">
            Explore our latest financial updates and investor materials.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reports.map((report, index) => (
            <div
              key={index}
              className="rounded-3xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
                {report.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-snug">
                {report.title}
              </h3>

              <p className="mt-3 text-neutral-500">{report.date}</p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-black">
                View Report
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}