"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";

const faqs = [
  {
    icon: ShoppingBag,
    question: "How do I place an order?",
    answer:
      "Browse products, add items to your cart, proceed to checkout, and complete payment securely.",
  },
  {
    icon: Truck,
    question: "How long does shipping take?",
    answer:
      "Orders are usually delivered within 3-7 business days depending on your location.",
  },
  {
    icon: ShieldCheck,
    question: "Are payments secure?",
    answer:
      "Yes, all transactions are encrypted and securely processed through trusted payment gateways.",
  },
  {
    icon: HelpCircle,
    question: "Can I return or exchange products?",
    answer:
      "Yes, eligible products can be returned or exchanged within the return policy period.",
  },
  {
    icon: ShoppingBag,
    question: "How can I track my order?",
    answer:
      "You can track your order through the tracking link shared via email or SMS after shipment.",
  },
  {
    icon: ShieldCheck,
    question: "Do you offer cash on delivery?",
    answer:
      "Yes, cash on delivery is available in selected regions and locations.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4" />
              Help & FAQ Center
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Frequently Asked
              <span className="block text-neutral-500">
                Questions
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Find quick answers about orders, shipping, returns, payments,
              and customer support.
            </p>

            {/* Search */}
            <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl border border-neutral-200 bg-white px-4 shadow-sm">
              <Search className="h-5 w-5 text-neutral-400" />

              <input
                type="text"
                placeholder="Search your question..."
                className="w-full bg-transparent px-4 py-4 outline-none"
              />

              <button className="rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 p-8 text-left"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-xl font-black">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <ChevronDown
                    className={`h-6 w-6 shrink-0 transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isActive && (
                  <div className="border-t border-neutral-200 px-8 pb-8 pt-6">
                    <p className="leading-8 text-neutral-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-[40px] bg-black px-8 py-16 text-center text-white lg:px-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              <HelpCircle className="h-4 w-4" />
              Need More Help?
            </div>

            <h2 className="text-4xl font-black sm:text-5xl">
              Our Support Team Is Here For You
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Still have questions? Contact our support specialists anytime for
              quick and reliable assistance.
            </p>

            <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-bold text-black transition hover:bg-neutral-200">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}