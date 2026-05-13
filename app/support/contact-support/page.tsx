"use client";

import {
  Clock3,
  Headphones,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat instantly with our customer support specialists.",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed assistance for orders and account issues.",
  },
  {
    icon: Phone,
    title: "Phone Assistance",
    description: "Talk directly with our support team for quick help.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Resolution",
    description: "Your account and order information stay protected.",
  },
];

export default function ContactSupportPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <Headphones className="h-4 w-4" />
              24/7 Customer Support
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              We’re Here
              <span className="block text-neutral-500">To Help You</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Need help with orders, payments, returns, or your account? Our
              support team is always ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {supportOptions.map((item, index) => {
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

      {/* Contact + Form */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          {/* Info */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
              <Sparkles className="h-4 w-4" />
              Support Information
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Contact Our Support Team
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Reach out through chat, email, or phone for quick and reliable
              support regarding your shopping experience.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-5 rounded-3xl border border-neutral-200 bg-white p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Mail className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Email Support</h3>

                  <p className="mt-2 text-neutral-600">
                    support@nextgridfashion.com
                  </p>
                </div>
              </div>

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
                  <Clock3 className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Support Hours</h3>

                  <p className="mt-2 text-neutral-600">
                    Monday - Sunday
                    <br />
                    24/7 Assistance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[36px] bg-white p-8 shadow-sm lg:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-black">
                Submit A Request
              </h2>

              <p className="mt-3 text-neutral-600">
                Fill out the form below and our team will respond shortly.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Order Number
                </label>

                <input
                  type="text"
                  placeholder="#NGF123456"
                  className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Describe your issue..."
                  className="w-full resize-none rounded-2xl border border-neutral-300 px-5 py-4 outline-none transition focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 font-semibold text-white transition hover:bg-neutral-800"
              >
                Send Request
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}