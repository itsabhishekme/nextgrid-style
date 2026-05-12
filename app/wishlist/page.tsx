"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Heart,
  ShoppingBag,
  Trash2,
  Star,
  Sparkles,
  ArrowRight,
  Eye,
  ShieldCheck,
} from "lucide-react";

const wishlistProducts = [
  {
    id: 1,
    name: "Luxury Black Hoodie",
    price: 14999,
    image: "/streetwear/hoodie.jpg",
    tag: "Trending",
    rating: "4.9",
  },

  {
    id: 2,
    name: "Premium Sneakers",
    price: 22999,
    image: "/streetwear/shoes.jpg",
    tag: "Luxury",
    rating: "5.0",
  },

  {
    id: 3,
    name: "Urban Cargo Pants",
    price: 11999,
    image: "/streetwear/cargo.jpg",
    tag: "New",
    rating: "4.8",
  },

  {
    id: 4,
    name: "Designer Jacket",
    price: 31999,
    image: "/streetwear/jacket.jpg",
    tag: "Exclusive",
    rating: "4.9",
  },
];

export default function WishlistPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
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

        {/* GLOW EFFECTS */}
        <div
          className="
            absolute
            left-[-200px]
            top-[-100px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-fuchsia-500/20
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-[-200px]
            right-[-150px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-cyan-500/20
            blur-[180px]
          "
        />
      </div>

      {/* HERO */}
      <section
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          pb-24
          pt-[150px]
          lg:px-10
        "
      >
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
            backdrop-blur-xl
          "
        >
          <Sparkles
            size={16}
            className="text-fuchsia-400"
          />

          <span
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-zinc-300
            "
          >
            Premium Wishlist Collection
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-10
            text-6xl
            font-black
            leading-[0.9]
            md:text-8xl
          "
        >
          YOUR
          <span
            className="
              block
              bg-gradient-to-r
              from-white
              via-zinc-300
              to-zinc-500
              bg-clip-text
              text-transparent
            "
          >
            WISHLIST
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            mt-8
            max-w-3xl
            text-lg
            leading-9
            text-zinc-400
          "
        >
          Save luxury streetwear, premium fashion,
          futuristic outfits and exclusive collections
          for your next iconic look.
        </motion.p>
      </section>

      {/* PRODUCTS */}
      <section className="relative mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        {/* HEADER */}
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-zinc-500
              "
            >
              Saved Products
            </p>

            <h2
              className="
                mt-5
                text-5xl
                font-black
              "
            >
              Luxury Collection
            </h2>
          </div>

          <button
            className="
              hidden
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-6
              py-4
              text-sm
              uppercase
              tracking-[0.2em]
              transition
              hover:bg-white/10
              md:flex
            "
          >
            View All

            <ArrowRight size={18} />
          </button>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {wishlistProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[38px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
              "
            >
              {/* HOVER GRADIENT */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-b
                  from-fuchsia-500/10
                  via-transparent
                  to-cyan-500/10
                "
              />

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={650}
                  className="
                    h-[420px]
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* TAG */}
                <div
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    bg-white
                    px-4
                    py-2
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-black
                  "
                >
                  {product.tag}
                </div>

                {/* REMOVE */}
                <button
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-black/50
                    backdrop-blur-xl
                    transition
                    hover:bg-red-500
                  "
                >
                  <Trash2 size={18} />
                </button>

                {/* QUICK VIEW */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-4
                    flex
                    justify-center
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  <button
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white
                      px-6
                      py-3
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-black
                    "
                  >
                    <Eye size={16} />

                    Quick View
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative p-6">
                {/* RATING */}
                <div className="flex items-center gap-2">
                  <Star
                    size={16}
                    className="
                      fill-yellow-400
                      text-yellow-400
                    "
                  />

                  <span className="text-sm text-zinc-400">
                    {product.rating} Rating
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-4
                    text-3xl
                    font-black
                    leading-tight
                  "
                >
                  {product.name}
                </h3>

                {/* PRICE */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p
                      className="
                        text-3xl
                        font-black
                      "
                    >
                      ₹
                      {product.price.toLocaleString(
                        "en-IN"
                      )}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <ShieldCheck
                        size={14}
                        className="text-emerald-400"
                      />

                      <span
                        className="
                          text-xs
                          text-zinc-400
                        "
                      >
                        Premium Quality
                      </span>
                    </div>
                  </div>

                  <button
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-black
                      transition
                      hover:scale-110
                    "
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>

                {/* ACTIONS */}
                <div className="mt-7 flex gap-4">
                  <button
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-4
                      py-4
                      text-sm
                      uppercase
                      tracking-[0.2em]
                      transition
                      hover:bg-white/10
                    "
                  >
                    <Eye size={16} />

                    View
                  </button>

                  <button
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-gradient-to-r
                      from-fuchsia-500
                      to-cyan-500
                      px-4
                      py-4
                      text-sm
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-white
                    "
                  >
                    <Heart size={16} />

                    Saved
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative border-t border-white/10 py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          {/* ICON */}
          <div className="flex justify-center">
            <div
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-fuchsia-500
                to-cyan-500
                text-white
                shadow-2xl
                shadow-fuchsia-500/30
              "
            >
              <Sparkles size={36} />
            </div>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-10
              text-5xl
              font-black
              md:text-7xl
            "
          >
            Discover More
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-zinc-400
            "
          >
            Explore futuristic luxury collections,
            premium streetwear and elite fashion
            crafted for the modern generation.
          </p>

          {/* BUTTON */}
          <button
            className="
              group
              mt-12
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-8
              py-5
              font-black
              uppercase
              tracking-[0.2em]
              text-black
              transition
              hover:scale-105
            "
          >
            Continue Shopping

            <ArrowRight
              size={18}
              className="
                transition
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </section>
    </main>
  );
}