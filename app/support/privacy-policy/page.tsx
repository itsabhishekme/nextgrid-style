"use client";

import {
  CheckCircle2,
  Database,
  Eye,
  Globe,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    description:
      "We collect personal information such as your name, email address, shipping details, payment information, and browsing activity to improve your shopping experience.",
  },
  {
    icon: ShieldCheck,
    title: "How We Use Your Data",
    description:
      "Your information is used for order processing, customer support, personalization, fraud prevention, and improving platform performance.",
  },
  {
    icon: Eye,
    title: "Cookies & Analytics",
    description:
      "Cookies and analytics technologies help us understand customer behavior, optimize performance, and deliver personalized recommendations.",
  },
  {
    icon: Lock,
    title: "Security Protection",
    description:
      "Industry-standard encryption and secure payment gateways protect your personal and financial information.",
  },
  {
    icon: Globe,
    title: "Third-Party Services",
    description:
      "Trusted partners may assist with payments, logistics, analytics, and communication while maintaining strict security standards.",
  },
];

const rights = [
  "Access and review your personal information.",
  "Request updates or corrections to your account details.",
  "Request deletion of eligible personal data.",
  "Manage communication and marketing preferences.",
  "Control cookies and browser privacy settings.",
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4" />
              Privacy & Security
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Privacy
              <span className="block text-neutral-500">
                Policy
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              Your privacy matters to us. Learn how NextGrid Fashion collects,
              uses, and protects your personal information and shopping data.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <div
                key={index}
                className="rounded-[32px] border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h2 className="text-2xl font-black">
                  {section.title}
                </h2>

                <p className="mt-4 leading-7 text-neutral-600">
                  {section.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Rights Section */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          {/* Left */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
              <ShieldCheck className="h-4 w-4" />
              Your Rights
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Control Your Personal Information
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              We believe in transparency and giving customers full control over
              their privacy preferences and account information.
            </p>

            <div className="mt-10 space-y-5">
              {rights.map((right, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>

                  <p className="leading-7 text-neutral-700">
                    {right}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-[40px] bg-black p-10 text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              <Lock className="h-4 w-4" />
              Trusted Protection
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Secure Shopping Experience
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              We continuously improve our systems, encryption methods, and
              security infrastructure to keep your information safe.
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-bold">
                  Secure Payments
                </h3>

                <p className="mt-3 leading-7 text-neutral-300">
                  All payment transactions are encrypted and securely processed
                  through trusted providers.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-bold">
                  Data Transparency
                </h3>

                <p className="mt-3 leading-7 text-neutral-300">
                  We clearly explain how your information is stored, managed,
                  and protected across our platform.
                </p>
              </div>
            </div>

            <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-bold text-black transition hover:bg-neutral-200">
              Contact Privacy Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}