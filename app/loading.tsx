"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black
      "
    >
      {/* BACKGROUND GRID */}
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
          left-[-200px]
          top-[-200px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-pink-500/10
          blur-[120px]
          sm:h-[600px]
          sm:w-[600px]
          sm:blur-[180px]
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          right-[-150px]
          top-[20%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-500/10
          blur-[100px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[160px]
        "
      />

      {/* CENTER GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.04]
          blur-[90px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[140px]
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          px-6
          text-center
        "
      >
        {/* LOGO WRAPPER */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            flex
            items-center
            justify-center
          "
        >
          {/* OUTER RING */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
            className="
              absolute
              h-40
              w-40
              rounded-full
              border
              border-white/10
              border-t-white/40
              sm:h-52
              sm:w-52
            "
          />

          {/* SECOND RING */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="
              absolute
              h-28
              w-28
              rounded-full
              border
              border-white/5
              border-b-pink-400/40
              sm:h-36
              sm:w-36
            "
          />

          {/* LOGO */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
              relative
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-3xl
              sm:h-32
              sm:w-32
            "
          >
            {/* INNER GLOW */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-white/[0.05]
                blur-2xl
              "
            />

            {/* BRAND */}
            <h1
              className="
                relative
                z-10
                bg-gradient-to-r
                from-white
                via-zinc-300
                to-zinc-500
                bg-clip-text
                text-xl
                font-black
                uppercase
                tracking-[0.25em]
                text-transparent
                sm:text-2xl
              "
            >
              NG
            </h1>
          </motion.div>
        </motion.div>

        {/* BRAND NAME */}
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
            duration: 0.6,
          }}
          className="
            mt-10
            bg-gradient-to-r
            from-white
            via-zinc-300
            to-zinc-500
            bg-clip-text
            text-2xl
            font-black
            uppercase
            tracking-[0.28em]
            text-transparent
            sm:text-4xl
          "
        >
          NextGrid
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          className="
            mt-3
            text-[11px]
            uppercase
            tracking-[0.4em]
            text-zinc-500
            sm:text-xs
          "
        >
          Luxury Fashion Experience
        </motion.p>

        {/* LOADING BAR */}
        <div
          className="
            relative
            mt-10
            h-[4px]
            w-[220px]
            overflow-hidden
            rounded-full
            bg-white/10
            sm:w-[300px]
          "
        >
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "100%",
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-y-0
              w-1/2
              rounded-full
              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
            "
          />
        </div>

        {/* LOADING TEXT */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            mt-5
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-zinc-600
            sm:text-xs
          "
        >
          Loading Experience
        </motion.p>
      </div>

      {/* NOISE TEXTURE */}
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
          via-white/60
          to-transparent
        "
      />
    </div>
  );
}