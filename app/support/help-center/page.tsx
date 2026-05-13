"use client";

import {
  ArrowRight,
  CreditCard,
  Headphones,
  HelpCircle,
  PackageCheck,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const supportCards = [
  {
    icon: PackageCheck,
    title: "Orders",
    description:
      "Track orders, manage purchases, and get delivery updates easily.",
  },
  {
    icon: Truck,
    title: "Shipping",
    description:
      "Learn about shipping timelines, tracking, and delivery options.",
  },
  {
    icon: RefreshCcw,
    title: "Returns",
    description:
      "Quickly request returns, exchanges, and refund assistance.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Get help with transactions, payment methods, and billing issues.",
  },
];

const popularTopics = [
  "How do I track my order?",
  "What is your return policy?",
  "How can I change my delivery address?",
  "Which payment methods are supported?",
  "How long do refunds take?",
  "How do I contact customer support?",
];

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4" />
              NextGrid Help Center
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              How Can We
              <span className="block text-neutral-500">
                Help You Today?
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Search answers, explore support topics, and get assistance for
              your orders, payments, returns, and account.
            </p>

            {/* Search */}
            <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl border border-neutral-200 bg-white px-4 shadow-sm">
              <Search className="h-5 w-5 text-neutral-400" />

              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full bg-transparent px-4 py-4 outline-none"
              />

              <button className="rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {supportCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[32px] border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-black">{item.title}</h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {item.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-black">
                  Explore
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Popular Topics */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black">
              Popular Help Topics
            </h2>

            <p className="mt-4 text-lg text-neutral-600">
              Quick answers to the questions customers ask most often.
            </p>
          </div>

          <div className="grid gap-5">
            {popularTopics.map((topic, index) => (
              <button
                key={index}
                className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-6 py-5 text-left transition hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    <HelpCircle className="h-5 w-5" />
                  </div>

                  <span className="text-lg font-semibold">
                    {topic}
                  </span>
                </div>

                <ArrowRight className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[40px] bg-black px-8 py-16 text-white lg:px-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                <Headphones className="h-4 w-4" />
                Premium Support
              </div>

              <h2 className="text-4xl font-black sm:text-5xl">
                Still Need Assistance?
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-300">
                Our support specialists are available anytime to help with
                orders, returns, account issues, and payments.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 text-black shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-black">
                      Trusted Customer Care
                    </h3>

                    <p className="mt-2 text-neutral-600">
                      Fast and secure support from our dedicated team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    <Headphones className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-black">
                      24/7 Availability
                    </h3>

                    <p className="mt-2 text-neutral-600">
                      Contact us anytime through chat, email, or phone.
                    </p>
                  </div>
                </div>

                <button className="w-full rounded-2xl bg-black px-6 py-4 font-bold text-white transition hover:bg-neutral-800">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}