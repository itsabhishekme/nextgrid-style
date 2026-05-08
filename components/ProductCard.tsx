"use client";

import { motion } from "framer-motion";

import {
  Heart,
  ShoppingBag,
  Star,
  Eye,
  Sparkles,
  ArrowUpRight,
  Apple,
  Play,
} from "lucide-react";

interface Props {
  name: string;
  image: string;
  price: number;
}

export default function ProductCard({
  name,
  image,
  price,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="group relative overflow-hidden rounded-[38px] border border-white/10 bg-zinc-950"
    >
      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          className="h-[480px] w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* TOP BADGES */}
        <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between p-5">
          {/* BADGE */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
            <Sparkles
              size={14}
              className="text-yellow-400"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
              Luxury Drop
            </span>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black">
              <Heart size={18} />
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black">
              <Eye size={18} />
            </button>
          </div>
        </div>

        {/* QUICK SHOP */}
        <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-20 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:scale-[1.02]">
            <ShoppingBag size={18} />
            Add To Cart
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative p-7">
        {/* STARS */}
        <div className="mb-4 flex items-center gap-1">
          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="ml-2 text-sm text-zinc-400">
            5.0 Reviews
          </span>
        </div>

        {/* PRODUCT NAME */}
        <h3 className="text-3xl font-black leading-tight text-white transition-all duration-300 group-hover:text-zinc-200">
          {name}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-4 text-sm leading-7 text-zinc-400">
          Premium quality fashion crafted with luxury fabrics,
          futuristic design aesthetics and modern streetwear
          inspiration.
        </p>

        {/* FEATURES */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300">
            Premium
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300">
            Trending
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300">
            New Arrival
          </span>
        </div>

        {/* PRICE + BUTTON */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Price
            </p>

            <h4 className="mt-2 text-4xl font-black text-white">
              ₹{price}
            </h4>
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:rotate-45"
          >
            <ArrowUpRight size={26} />
          </motion.button>
        </div>

        {/* APP DOWNLOAD */}
        <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
          <div className="flex flex-col gap-5">
            {/* TEXT */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Mobile Shopping
              </p>

              <h4 className="mt-2 text-xl font-bold text-white">
                Download App
              </h4>

              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Shop exclusive collections and premium luxury
                fashion directly from your mobile device.
              </p>
            </div>

            {/* STORE BUTTONS */}
            <div className="flex gap-3">
              {/* APP STORE */}
              <button className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-white px-4 py-4 text-black transition-all duration-300 hover:scale-105">
                <Apple size={22} />

                <div className="text-left">
                  <p className="text-[10px] font-semibold uppercase">
                    Download
                  </p>

                  <h5 className="text-sm font-black">
                    App Store
                  </h5>
                </div>
              </button>

              {/* PLAY STORE */}
              <button className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
                <Play size={22} />

                <div className="text-left">
                  <p className="text-[10px] font-semibold uppercase">
                    Get It On
                  </p>

                  <h5 className="text-sm font-black">
                    Play Store
                  </h5>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HOVER GLOW */}
      <div className="absolute -bottom-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-white/10 blur-[120px] transition-all duration-500 group-hover:bg-white/20" />
    </motion.div>
  );
}