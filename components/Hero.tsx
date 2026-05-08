"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Play,
  Star,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function Hero() {
  const stats = [
    {
      number: "50K+",
      label: "Premium Customers",
    },

    {
      number: "120+",
      label: "Luxury Brands",
    },

    {
      number: "4.9★",
      label: "Customer Rating",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Luxury Fashion",
    },

    {
      icon: Truck,
      title: "Fast Delivery",
    },

    {
      icon: ShieldCheck,
      title: "Secure Checkout",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-[90px] text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        {/* TOP LEFT GLOW */}
        <div className="absolute left-[-300px] top-[-300px] h-[700px] w-[700px] rounded-full bg-white/5 blur-[180px]" />

        {/* RIGHT GLOW */}
        <div className="absolute right-[-250px] top-[20%] h-[600px] w-[600px] rounded-full bg-zinc-700/10 blur-[180px]" />

        {/* CENTER GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-white" />

              <span className="text-xs uppercase tracking-[0.3em] text-zinc-300">
                Premium Fashion Platform
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="mt-10 text-6xl font-black leading-[0.95] md:text-8xl xl:text-[9rem]"
            >
              <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                NEXTGRID
              </span>

              <span className="mt-2 block text-white">
                STYLE
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="mt-10 max-w-2xl text-lg leading-9 text-zinc-400 md:text-xl"
            >
              Discover luxury fashion collections for men,
              women and children with immersive shopping
              experiences, premium aesthetics and modern
              styling crafted for the next generation.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="mt-12 flex flex-col gap-5 sm:flex-row"
            >
              {/* SHOP BUTTON */}
              <Link href="/men">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group flex items-center justify-center gap-4 rounded-full bg-white px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] text-black shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all"
                >
                  Shop Collection

                  <ArrowRight
                    size={18}
                    className="transition-all group-hover:translate-x-1"
                  />
                </motion.button>
              </Link>

              {/* VIDEO BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group flex items-center justify-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] text-white backdrop-blur-xl transition-all hover:bg-white hover:text-black"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all group-hover:bg-black group-hover:text-white">
                  <Play size={16} className="ml-1" />
                </div>

                Watch Lookbook
              </motion.button>
            </motion.div>

            {/* FEATURES */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="mt-14 flex flex-wrap gap-5"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl"
                  >
                    <Icon size={18} />

                    <span className="text-sm text-zinc-300">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
              className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-4xl font-black text-white">
                    {stat.number}
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative"
          >
            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-white/5 blur-[120px]" />

            {/* MAIN IMAGE */}
            <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/[0.03]">
              <img
                src="/images/women/dress.jpg"
                alt="Luxury Fashion"
                className="h-[750px] w-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              {/* TOP CARD */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                }}
                className="absolute left-6 top-6 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
                    <ShoppingBag size={26} />
                  </div>

                  <div>
                    <p className="text-sm text-zinc-400">
                      New Collection
                    </p>

                    <h4 className="text-xl font-bold">
                      Summer 2026
                    </h4>
                  </div>
                </div>
              </motion.div>

              {/* BOTTOM CARD */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.2,
                  duration: 0.8,
                }}
                className="absolute bottom-6 left-6 right-6 rounded-[32px] border border-white/10 bg-black/40 p-6 backdrop-blur-2xl"
              >
                {/* RATING */}
                <div className="mb-5 flex items-center gap-2">
                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="ml-3 text-sm text-zinc-400">
                    Trusted by 50,000+ customers
                  </span>
                </div>

                <h3 className="text-3xl font-black text-white">
                  Modern Luxury Fashion
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  Experience premium shopping with immersive
                  fashion collections and luxury aesthetics.
                </p>
              </motion.div>
            </div>

            {/* FLOATING ELEMENT */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-10 top-1/2 hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl xl:block"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
                  <Sparkles size={24} />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Premium Experience
                  </p>

                  <h4 className="text-xl font-bold">
                    Luxury Shopping
                  </h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}