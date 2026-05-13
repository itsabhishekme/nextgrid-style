"use client";

import { useState } from "react";
import {
  ChevronDown,
  CreditCard,
  Headphones,
  PackageCheck,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const faqCategories = [
  {
    title: "Orders & Shipping",
    icon: Truck,
    questions: [
      {
        question: "How long does shipping take?",
        answer:
          "Orders are typically delivered within 3-7 business days depending on your location.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes, once your order ships, you’ll receive a tracking link via email or SMS.",
      },
    ],
  },
  {
    title: "Payments",
    icon: CreditCard,
    questions: [
      {
        question: "Which payment methods are accepted?",
        answer:
          "We accept credit cards, debit cards, UPI, net banking, and digital wallets.",
      },
      {
        question: "Are payments secure?",
        answer:
          "Yes, all transactions are encrypted and securely processed.",
      },
    ],
  },
  {
    title: "Returns & Refunds",
    icon: RefreshCcw,
    questions: [
      {
        question: "Can I return a product?",
        answer:
          "Yes, eligible items can be returned within the return window mentioned in our policy.",
      },
      {
        question: "When will I receive my refund?",
        answer:
          "Refunds are usually processed within 5-7 business days after approval.",
      },
    ],
  },
  {
    title: "Account & Support",
    icon: Headphones,
    questions: [
      {
        question: "How do I contact customer support?",
        answer:
          "You can reach us through live chat, email, or phone support anytime.",
      },
      {
        question: "How do I reset my password?",
        answer:
          "Use the forgot password option on the login page to reset your password securely.",
      },
    ],
  },
];

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState<string | null>("0-0");

  const toggleQuestion = (key: string) => {
    setActiveIndex(activeIndex === key ? null : key);
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
              Help Center & FAQs
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Answers To Your
              <span className="block text-neutral-500">
                Most Common Questions
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Find everything you need about orders, payments, returns,
              shipping, and customer support.
            </p>

            {/* Search */}
            <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl border border-neutral-200 bg-white px-4 shadow-sm">
              <Search className="h-5 w-5 text-neutral-400" />

              <input
                type="text"
                placeholder="Search frequently asked questions..."
                className="w-full bg-transparent px-4 py-4 outline-none"
              />

              <button className="rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="space-y-10">
          {faqCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={categoryIndex}
                className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                    <CategoryIcon className="h-6 w-6" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-black">
                      {category.title}
                    </h2>
                  </div>
                </div>

                <div className="space-y-5">
                  {category.questions.map((faq, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isActive = activeIndex === key;

                    return (
                      <div
                        key={questionIndex}
                        className="overflow-hidden rounded-2xl border border-neutral-200"
                      >
                        <button
                          onClick={() => toggleQuestion(key)}
                          className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                        >
                          <h3 className="text-lg font-bold">
                            {faq.question}
                          </h3>

                          <ChevronDown
                            className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                              isActive ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isActive && (
                          <div className="border-t border-neutral-200 px-6 py-5">
                            <p className="leading-8 text-neutral-600">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Support CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-[40px] bg-black px-8 py-16 text-white lg:px-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                <ShieldCheck className="h-4 w-4" />
                Premium Support
              </div>

              <h2 className="text-4xl font-black sm:text-5xl">
                Need Additional Help?
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-300">
                Our support specialists are available to assist with orders,
                returns, payments, and account-related questions.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 text-black shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    <PackageCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-black">
                      Order Assistance
                    </h3>

                    <p className="mt-2 text-neutral-600">
                      Help with tracking, returns, exchanges, and delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                    <Headphones className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-black">
                      24/7 Customer Care
                    </h3>

                    <p className="mt-2 text-neutral-600">
                      Quick support through chat, email, and phone.
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