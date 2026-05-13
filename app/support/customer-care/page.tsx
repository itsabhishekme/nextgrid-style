"use client";

import {
  BadgeCheck,
  Clock3,
  Headphones,
  Mail,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "24/7 Assistance",
    description:
      "Our customer care team is available anytime to support you.",
  },
  {
    icon: Truck,
    title: "Order Support",
    description:
      "Track orders, shipping updates, returns, and delivery help.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Support",
    description:
      "Safe and secure handling of your account and payment concerns.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Experience",
    description:
      "Dedicated support focused on smooth and luxury shopping.",
  },
];

export default function CustomerCarePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4" />
              Customer Care Center
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Exceptional Support
              <span className="block text-neutral-500">
                For Every Customer
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              We’re committed to delivering premium customer service for all
              your fashion and shopping needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-black">{item.title}</h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          {/* Left */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
              <MessageSquareText className="h-4 w-4" />
              Contact Information
            </div>

            <h2 className="text-4xl font-black leading-tight">
              We’re Always Ready To Help
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Reach out for assistance with orders, payments, shipping,
              exchanges, returns, or general inquiries.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-5 rounded-3xl border border-neutral-200 bg-white p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Phone className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Phone Support</h3>

                  <p className="mt-2 text-neutral-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-3xl border border-neutral-200 bg-white p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Mail className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Email Support</h3>

                  <p className="mt-2 text-neutral-600">
                    care@nextgridfashion.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-3xl border border-neutral-200 bg-white p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Clock3 className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Working Hours</h3>

                  <p className="mt-2 text-neutral-600">
                    Monday - Sunday
                    <br />
                    24/7 Customer Support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-[40px] bg-black p-10 text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              <Headphones className="h-4 w-4" />
              Premium Assistance
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Fast, Friendly & Reliable Support
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Our dedicated customer care specialists ensure every issue is
              resolved quickly and professionally for the best shopping
              experience.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-white" />

                <p className="text-neutral-300">
                  Quick response times for all support requests.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-white" />

                <p className="text-neutral-300">
                  Dedicated help for returns, exchanges, and refunds.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-white" />

                <p className="text-neutral-300">
                  Personalized assistance for premium customers.
                </p>
              </div>
            </div>

            <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-bold text-black transition hover:bg-neutral-200">
              Start Live Chat
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}