"use client";

import {
  ArrowRight,
  Globe2,
  Handshake,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

const partners = [
  {
    name: "Urban Vogue",
    category: "Luxury Fashion",
  },
  {
    name: "StreetNova",
    category: "Streetwear",
  },
  {
    name: "Aura Beauty",
    category: "Beauty & Lifestyle",
  },
  {
    name: "Elite Sneakers",
    category: "Sneaker Brand",
  },
  {
    name: "Vision Studio",
    category: "Creative Agency",
  },
  {
    name: "FutureWear",
    category: "Sustainable Fashion",
  },
];

const benefits = [
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Expand your brand visibility through our international audience.",
  },
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description:
      "Accelerate sales and engagement with modern digital commerce.",
  },
  {
    icon: Users2,
    title: "Strong Community",
    description:
      "Connect with a loyal and fashion-driven customer base.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Platform",
    description:
      "Secure, scalable, and optimized for premium brand experiences.",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <Handshake className="h-4 w-4" />
              Partner With NextGrid Fashion
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Building Powerful
              <span className="block text-neutral-500">
                Fashion Collaborations
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Join leading fashion brands, creators, and innovators shaping the
              future of digital commerce and style culture.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-2xl bg-black px-7 py-4 font-semibold text-white transition hover:bg-neutral-800">
                Become A Partner
              </button>

              <button className="rounded-2xl border border-neutral-300 px-7 py-4 font-semibold transition hover:bg-neutral-100">
                View Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black">Why Partner With Us</h2>

          <p className="mt-4 text-lg text-neutral-600">
            A modern ecosystem designed for growth, innovation, and visibility.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Partnership Process */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black">
              Partnership Process
            </h2>

            <p className="mt-4 text-lg text-neutral-600">
              Simple, transparent, and growth-focused collaboration.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                <Sparkles className="h-7 w-7" />
              </div>

              <h3 className="text-2xl font-black">Apply</h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Submit your brand or business details through our partnership
                application process.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                <Layers3 className="h-7 w-7" />
              </div>

              <h3 className="text-2xl font-black">Collaborate</h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Work closely with our creative and ecommerce teams to launch
                impactful campaigns.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                <Rocket className="h-7 w-7" />
              </div>

              <h3 className="text-2xl font-black">Scale</h3>

              <p className="mt-4 leading-7 text-neutral-600">
                Grow your audience, increase sales, and expand into new markets
                with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black">Featured Partners</h2>

          <p className="mt-4 text-lg text-neutral-600">
            Brands and creators collaborating within our ecosystem.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="rounded-3xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                <Handshake className="h-7 w-7" />
              </div>

              <h3 className="text-3xl font-black">{partner.name}</h3>

              <p className="mt-3 text-neutral-500">
                {partner.category}
              </p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-black">
                Explore Partnership
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-[40px] bg-black px-8 py-16 text-center text-white lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-black sm:text-5xl">
              Ready To Grow Together?
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Let’s create powerful experiences, meaningful collaborations, and
              the next generation of fashion commerce.
            </p>

            <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-bold text-black transition hover:bg-neutral-200">
              Start Partnership
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}