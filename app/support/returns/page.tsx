"use client";

import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  PackageCheck,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const returnSteps = [
  {
    icon: PackageCheck,
    title: "Request Return",
    description:
      "Submit a return request from your order history or support center.",
  },
  {
    icon: Truck,
    title: "Pickup Scheduled",
    description:
      "Our logistics partner will arrange pickup from your location.",
  },
  {
    icon: CheckCircle2,
    title: "Inspection",
    description:
      "Returned items are verified to ensure eligibility and quality.",
  },
  {
    icon: RefreshCcw,
    title: "Refund Processed",
    description:
      "Approved refunds are processed back to your original payment method.",
  },
];

const policies = [
  "Returns accepted within 7 days of delivery.",
  "Products must be unused and in original packaging.",
  "Refunds are processed within 5-7 business days.",
  "Some products may not be eligible for returns.",
];

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <RefreshCcw className="h-4 w-4" />
              Easy Returns & Refunds
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Returns &
              <span className="block text-neutral-500">
                Refund Policy
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              Shop confidently with hassle-free returns, secure refunds, and
              dedicated support for every purchase.
            </p>

            <button className="mt-10 rounded-2xl bg-black px-8 py-4 font-bold text-white transition hover:bg-neutral-800">
              Start Return Request
            </button>
          </div>
        </div>
      </section>

      {/* Return Steps */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black">
            How Returns Work
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            A smooth and transparent return process designed for convenience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {returnSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-[32px] border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-black">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Policies */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          {/* Left */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
              <ShieldCheck className="h-4 w-4" />
              Return Guidelines
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Important Return Information
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Please review our return conditions and refund timelines before
              initiating a request.
            </p>

            <div className="mt-10 space-y-5">
              {policies.map((policy, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>

                  <p className="leading-7 text-neutral-700">
                    {policy}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-[40px] bg-black p-10 text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Customer Satisfaction
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Hassle-Free Return Experience
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              We aim to make returns quick, transparent, and stress-free so you
              can shop with complete confidence.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Fast Refund Processing
                  </h3>

                  <p className="mt-2 text-neutral-300">
                    Refunds are processed quickly after successful inspection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <BadgeCheck className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Trusted Return Policy
                  </h3>

                  <p className="mt-2 text-neutral-300">
                    Transparent and customer-friendly policies for every order.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-10 flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-black transition hover:bg-neutral-200">
              Request Return
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}