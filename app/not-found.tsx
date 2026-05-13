"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Home,
  Search,
} from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-black
        px-4
        py-24
      "
    >
      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",

          backgroundSize: "80px 80px",
        }}
      />

      {/* TOP LEFT GLOW */}
      <div
        className="
          absolute
          left-[-250px]
          top-[-250px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-pink-500/10
          blur-[120px]
          sm:h-[700px]
          sm:w-[700px]
          sm:blur-[180px]
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          right-[-200px]
          top-[20%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-500/10
          blur-[100px]
          sm:h-[600px]
          sm:w-[600px]
          sm:blur-[180px]
        "
      />

      {/* CENTER GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.04]
          blur-[120px]
          sm:h-[500px]
          sm:w-[500px]
        "
      />

      {/* MAIN CARD */}
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
          duration: 0.6,
        }}
        className="
          relative
          z-10
          w-full
          max-w-2xl
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
          text-center
          shadow-[0_0_80px_rgba(255,255,255,0.05)]
          backdrop-blur-3xl
          sm:p-12
        "
      >
        {/* TOP LIGHT */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[1px]
            w-[80%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-white/60
            to-transparent
          "
        />

        {/* NUMBER */}
        <motion.h1
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}
          className="
            bg-gradient-to-r
            from-white
            via-zinc-300
            to-zinc-500
            bg-clip-text
            text-[90px]
            font-black
            leading-none
            tracking-[0.15em]
            text-transparent
            sm:text-[140px]
          "
        >
          404
        </motion.h1>

        {/* TITLE */}
        <motion.h2
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
            mt-4
            text-2xl
            font-black
            uppercase
            tracking-[0.18em]
            text-white
            sm:text-4xl
          "
        >
          Page Not Found
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            mx-auto
            mt-5
            max-w-xl
            text-sm
            leading-7
            text-zinc-400
            sm:text-base
          "
        >
          The page you are trying to access
          may have been moved, deleted, or
          never existed inside the NextGrid
          luxury fashion experience.
        </motion.p>

        {/* BUTTONS */}
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
            delay: 0.4,
          }}
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
          "
        >
          {/* HOME */}
          <Link href="/">
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group
                flex
                h-14
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-white
                px-8
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-black
                shadow-2xl
              "
            >
              <Home size={18} />

              Back Home

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </Link>

          {/* SEARCH */}
          <Link href="/search">
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex
                h-14
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                px-8
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-white
                backdrop-blur-2xl
              "
            >
              <Search size={18} />

              Search Products
            </motion.button>
          </Link>
        </motion.div>

        {/* SMALL TEXT */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            mt-8
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-zinc-600
            sm:text-xs
          "
        >
          NextGrid Luxury Fashion Platform
        </motion.p>
      </motion.div>

      {/* NOISE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.02]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* TOP LIGHT */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[1px]
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/50
          to-transparent
        "
      />
    </div>
  );
}