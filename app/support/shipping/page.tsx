"use client";

import {
  ArrowRight,
  Clock3,
  Globe2,
  MapPinned,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const shippingFeatures = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick and reliable shipping across multiple cities and regions.",
  },
  {
    icon: Globe2,
    title: "Worldwide Shipping",
    description:
      "International delivery support for global fashion customers.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Packaging",
    description:
      "Premium packaging designed to protect every order safely.",
  },
  {
    icon: PackageCheck,
    title: "Real-Time Tracking",
    description:
      "Track your shipment with live updates and delivery status.",
  },
];

const shippingSteps = [
  {
    title: "Order Confirmed",
    description:
      "Your order is successfully placed and verified for processing.",
  },
  {
    title: "Packed & Processed",
    description:
      "Products are carefully packed and prepared for shipment.",
  },
  {
    title: "Shipped",
    description:
      "Your package is dispatched and tracking details are shared.",
  },
  {
    title: "Delivered",
    description:
      "The order reaches your doorstep safely and securely.",
  },
];

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm">
              <Truck className="h-4 w-4" />
              Shipping & Delivery
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              Fast & Reliable
              <span className="block text-neutral-500">
                Shipping Experience
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              Enjoy smooth delivery, secure packaging, and real-time tracking
              for every NextGrid Fashion order.
            </p>

            <button className="mt-10 rounded-2xl bg-black px-8 py-4 font-bold text-white transition hover:bg-neutral-800">
              Track Your Order
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black">
            Shipping Benefits
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Designed for secure, premium, and efficient delivery experiences.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {shippingFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-[32px] border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-black">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Shipping Process */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black">
              Shipping Process
            </h2>

            <p className="mt-4 text-lg text-neutral-600">
              Transparent order handling from checkout to delivery.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {shippingSteps.map((step, index) => (
              <div
                key={index}
                className="relative rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-xl font-black text-white">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-black">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {step.description}
                </p>

                {index !== shippingSteps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-neutral-300 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
              <Sparkles className="h-4 w-4" />
              Delivery Information
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Seamless Delivery Across Locations
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              We partner with trusted logistics providers to ensure timely and
              secure deliveries for all customers.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-5 rounded-3xl border border-neutral-200 bg-white p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Clock3 className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Estimated Delivery
                  </h3>

                  <p className="mt-2 text-neutral-600">
                    3-7 business days for most domestic orders.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 rounded-3xl border border-neutral-200 bg-white p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <MapPinned className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Worldwide Coverage
                  </h3>

                  <p className="mt-2 text-neutral-600">
                    International shipping available in selected countries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-[40px] bg-black p-10 text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              <Truck className="h-4 w-4" />
              Trusted Logistics
            </div>

            <h2 className="text-4xl font-black leading-tight">
              Premium Shipping Experience
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Every package is carefully handled to ensure quality, safety, and
              timely delivery for your fashion purchases.
            </p>

            <button className="mt-10 flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-black transition hover:bg-neutral-200">
              Track Shipment
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}