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
  Crown,
  Gem,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  const stats = [
    {
      number: "120K+",
      label: "Premium Customers",
    },

    {
      number: "350+",
      label: "Luxury Collections",
    },

    {
      number: "4.9★",
      label: "Customer Rating",
    },

    {
      number: "80+",
      label: "Fashion Brands",
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

    {
      icon: Crown,
      title: "Premium Experience",
    },
  ];

  const collections = [
    {
      title: "Men Fashion",
      image: "/men/men.jpg",
    },

    {
      title: "Women Luxury",
      image: "/women/women.jpg",
    },

    {
      title: "Children Style",
      image: "/children/children.jpg",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-[90px] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",

            backgroundSize: "80px 80px",
          }}
        />

        {/* GLOW 1 */}
        <div
          className="
            absolute
            left-[-300px]
            top-[-300px]
            h-[700px]
            w-[700px]
            rounded-full
            bg-pink-500/10
            blur-[180px]
          "
        />

        {/* GLOW 2 */}
        <div
          className="
            absolute
            right-[-300px]
            top-[10%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-purple-500/10
            blur-[180px]
          "
        />

        {/* GLOW 3 */}
        <div
          className="
            absolute
            bottom-[-300px]
            left-1/2
            h-[800px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />

        {/* CENTER LIGHT */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.04]
            blur-[140px]
          "
        />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* TOP BADGE */}
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
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-6
                py-3
                backdrop-blur-2xl
              "
            >
              <Sparkles size={16} />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-zinc-300
                "
              >
                Luxury Fashion Platform
              </span>
            </motion.div>

            {/* HEADING */}
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
              className="
                mt-10
                text-6xl
                font-black
                leading-[0.95]
                md:text-8xl
                xl:text-[9rem]
              "
            >
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-zinc-300
                  to-zinc-600
                  bg-clip-text
                  text-transparent
                "
              >
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
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="
                mt-10
                max-w-2xl
                text-lg
                leading-9
                text-zinc-400
                md:text-xl
              "
            >
              Experience futuristic luxury fashion crafted for
              the next generation with premium collections,
              immersive shopping experiences and elevated
              modern aesthetics.
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
                delay: 0.4,
                duration: 0.8,
              }}
              className="mt-12 flex flex-col gap-5 sm:flex-row"
            >
              {/* PRIMARY */}
              <Link href="/new-arrivals">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    gap-4
                    rounded-full
                    bg-white
                    px-8
                    py-5
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-black
                    shadow-[0_20px_60px_rgba(255,255,255,0.15)]
                  "
                >
                  Explore Collection

                  <ArrowRight
                    size={18}
                    className="
                      transition-all
                      group-hover:translate-x-1
                    "
                  />
                </motion.button>
              </Link>

              {/* SECONDARY */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-4
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-8
                  py-5
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-white
                  backdrop-blur-xl
                  transition-all
                  hover:bg-white
                  hover:text-black
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-black
                    transition-all
                    group-hover:bg-black
                    group-hover:text-white
                  "
                >
                  <Play
                    size={16}
                    className="ml-1"
                  />
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
                delay: 0.6,
                duration: 0.8,
              }}
              className="mt-14 flex flex-wrap gap-5"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-5
                      py-3
                      backdrop-blur-xl
                    "
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
                delay: 0.8,
                duration: 0.8,
              }}
              className="
                mt-16
                grid
                gap-8
                border-t
                border-white/10
                pt-10
                sm:grid-cols-2
                xl:grid-cols-4
              "
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3
                    className="
                      bg-gradient-to-r
                      from-white
                      to-zinc-500
                      bg-clip-text
                      text-4xl
                      font-black
                      text-transparent
                    "
                  >
                    {stat.number}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      uppercase
                      tracking-[0.2em]
                      text-zinc-500
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
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
            {/* MAIN IMAGE */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[50px]
                border
                border-white/10
                bg-white/[0.03]
              "
            >
              <img
                src="/women/dress.jpg"
                alt="Luxury Fashion"
                className="
                  h-[820px]
                  w-full
                  object-cover
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                "
              />

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
                className="
                  absolute
                  left-6
                  top-6
                  rounded-[30px]
                  border
                  border-white/10
                  bg-black/40
                  p-5
                  backdrop-blur-2xl
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white
                      text-black
                    "
                  >
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

              {/* BOTTOM INFO */}
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
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  rounded-[32px]
                  border
                  border-white/10
                  bg-black/40
                  p-6
                  backdrop-blur-2xl
                "
              >
                {/* RATING */}
                <div className="mb-5 flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="
                        fill-yellow-400
                        text-yellow-400
                      "
                    />
                  ))}

                  <span className="ml-3 text-sm text-zinc-400">
                    Trusted by 120,000+ customers
                  </span>
                </div>

                <h3 className="text-3xl font-black">
                  Premium Luxury Fashion
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  Modern futuristic collections with immersive
                  premium shopping experiences crafted for
                  fashion lovers.
                </p>
              </motion.div>
            </div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                absolute
                -right-10
                top-1/2
                hidden
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.05]
                p-6
                backdrop-blur-2xl
                xl:block
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                    text-black
                  "
                >
                  <Gem size={24} />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Exclusive Experience
                  </p>

                  <h4 className="text-xl font-bold">
                    Luxury Shopping
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* TREND CARD */}
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                -left-10
                bottom-24
                hidden
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.05]
                p-5
                backdrop-blur-2xl
                xl:block
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                    text-black
                  "
                >
                  <TrendingUp size={22} />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Trending Fashion
                  </p>

                  <h4 className="text-lg font-bold">
                    +250% Growth
                  </h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* COLLECTION GRID */}
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
            delay: 1,
            duration: 0.8,
          }}
          className="
            mt-28
            grid
            gap-8
            md:grid-cols-3
          "
        >
          {collections.map((collection, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
              "
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="
                  h-[450px]
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                "
              />

              <div className="absolute bottom-8 left-8">
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-zinc-400
                  "
                >
                  Premium Collection
                </p>

                <h3 className="mt-3 text-4xl font-black">
                  {collection.title}
                </h3>

                <button
                  className="
                    mt-6
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-6
                    py-3
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    backdrop-blur-xl
                    transition-all
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Explore
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* BOTTOM BANNER */}
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
          className="
            mt-24
            overflow-hidden
            rounded-[50px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            backdrop-blur-3xl
            lg:p-16
          "
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-3
                "
              >
                <BadgeCheck size={16} />

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-zinc-400
                  "
                >
                  NextGrid Premium
                </span>
              </div>

              <h2
                className="
                  mt-8
                  text-5xl
                  font-black
                  leading-tight
                  md:text-7xl
                "
              >
                The Future
                <br />
                Of Fashion
              </h2>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-9
                  text-zinc-400
                "
              >
                Discover exclusive luxury collections,
                futuristic aesthetics and premium shopping
                experiences designed for the modern generation.
              </p>
            </div>

            {/* RIGHT */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-8
                "
              >
                <h3 className="text-5xl font-black">
                  2M+
                </h3>

                <p className="mt-3 text-zinc-400">
                  Products Delivered
                </p>
              </div>

              <div
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-8
                "
              >
                <h3 className="text-5xl font-black">
                  99%
                </h3>

                <p className="mt-3 text-zinc-400">
                  Secure Shopping
                </p>
              </div>

              <div
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-8
                "
              >
                <h3 className="text-5xl font-black">
                  24/7
                </h3>

                <p className="mt-3 text-zinc-400">
                  Customer Support
                </p>
              </div>

              <div
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-8
                "
              >
                <h3 className="text-5xl font-black">
                  80+
                </h3>

                <p className="mt-3 text-zinc-400">
                  Global Fashion Brands
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}