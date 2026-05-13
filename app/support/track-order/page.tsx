"use client";

import {
  CheckCircle2,
  MapPin,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const trackingSteps = [
  {
    title: "Order Confirmed",
    description:
      "Your order has been placed successfully and is being prepared.",
    completed: true,
  },
  {
    title: "Packed",
    description:
      "Your items have been securely packed and ready for shipment.",
    completed: true,
  },
  {
    title: "Shipped",
    description:
      "Your order is on the way and moving through our logistics network.",
    completed: true,
  },
  {
    title: "Out For Delivery",
    description:
      "The package is out for delivery and will arrive soon.",
    completed: false,
  },
  {
    title: "Delivered",
    description:
      "Your order has been successfully delivered to your address.",
    completed: false,
  },
];

export default function TrackOrderPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <Truck className="h-4 w-4" />
              Order Tracking
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Track Your
              <span className="block text-neutral-500">
                Fashion Order
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              Enter your order ID to get real-time updates about shipping,
              delivery status, and tracking progress.
            </p>

            {/* Tracking Search */}
            <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl border border-neutral-200 bg-white px-4 shadow-sm">
              <Search className="h-5 w-5 text-neutral-400" />

              <input
                type="text"
                placeholder="Enter Order ID"
                className="w-full bg-transparent px-4 py-4 outline-none"
              />

              <button className="rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Track Order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Info */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left */}
          <div className="lg:col-span-2">
            <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-5 border-b border-neutral-200 pb-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                    Order Number
                  </p>

                  <h2 className="mt-2 text-3xl font-black">
                    #NGF458921
                  </h2>
                </div>

                <div className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
                  In Transit
                </div>
              </div>

              <div className="mt-10 space-y-10">
                {trackingSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex gap-6"
                  >
                    {/* Line */}
                    {index !== trackingSteps.length - 1 && (
                      <div className="absolute left-[19px] top-12 h-full w-[2px] bg-neutral-200" />
                    )}

                    {/* Icon */}
                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        step.completed
                          ? "bg-black text-white"
                          : "bg-neutral-200 text-neutral-500"
                      }`}
                    >
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-black">
                        {step.title}
                      </h3>

                      <p className="mt-2 leading-7 text-neutral-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-8">
            {/* Delivery Card */}
            <div className="overflow-hidden rounded-[32px] bg-black p-8 text-white">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Delivery Details
              </div>

              <h2 className="text-3xl font-black">
                Estimated Arrival
              </h2>

              <p className="mt-4 text-lg text-neutral-300">
                Your order is expected to arrive within 2 business days.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      Delivery Address
                    </h3>

                    <p className="mt-2 leading-7 text-neutral-300">
                      22 Fashion Street,
                      <br />
                      Bangalore, Karnataka,
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h2 className="text-2xl font-black">
                Secure Delivery
              </h2>

              <p className="mt-4 leading-7 text-neutral-600">
                Every package is securely packed and carefully handled to ensure
                safe delivery.
              </p>
            </div>

            {/* Support */}
            <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                <PackageCheck className="h-6 w-6" />
              </div>

              <h2 className="text-2xl font-black">
                Need Help?
              </h2>

              <p className="mt-4 leading-7 text-neutral-600">
                Contact our support team for assistance regarding shipping,
                delivery, or order updates.
              </p>

              <button className="mt-8 w-full rounded-2xl bg-black px-6 py-4 font-bold text-white transition hover:bg-neutral-800">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}