"use client";

import Link from "next/link";

import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Apple,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-10 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[150px]" />

        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[150px]" />
      </div>

      {/* LOGIN CARD */}
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
          duration: 0.5,
        }}
        className="
          relative
          w-full
          max-w-md
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.04]
          p-8
          backdrop-blur-3xl
          md:p-10
        "
      >
        {/* GLOW */}
        <div className="absolute right-0 top-0 h-[240px] w-[240px] rounded-full bg-white/5 blur-[100px]" />

        {/* HEADER */}
        <div className="relative text-center">
          <h1 className="text-4xl font-black md:text-5xl">
            Login
          </h1>

          <p className="mt-3 text-sm text-zinc-500">
            Access your account
          </p>
        </div>

        {/* SOCIAL LOGIN */}
        <div className="mt-8 space-y-4">
          {/* GOOGLE */}
          <button
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              transition-all
              hover:bg-white
              hover:text-black
            "
          >
            {/* GOOGLE SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-5 w-5"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.7 15 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6 7.1l.1-.1 6.2 5.2C35.2 39.9 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
              />
            </svg>

            Continue with Google
          </button>

          {/* FACEBOOK */}
          <button
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              transition-all
              hover:bg-white
              hover:text-black
            "
          >
            {/* FACEBOOK SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.008 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.93-1.956 1.885v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.081 24 18.092 24 12.073z" />
            </svg>

            Continue with Facebook
          </button>

          {/* APPLE */}
          <button
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              transition-all
              hover:bg-white
              hover:text-black
            "
          >
            <Apple size={20} />

            Continue with Apple
          </button>
        </div>

        {/* DIVIDER */}
        <div className="relative my-8">
          <div className="border-t border-white/10" />

          <span
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              bg-black
              px-4
              text-xs
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            OR
          </span>
        </div>

        {/* FORM */}
        <form className="space-y-5">
          {/* EMAIL */}
          <div>
            <label className="mb-3 block text-sm text-zinc-400">
              Email
            </label>

            <div
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-4
              "
            >
              <Mail size={20} />

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  bg-transparent
                  outline-none
                  placeholder:text-zinc-500
                "
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="mb-3 block text-sm text-zinc-400">
              Password
            </label>

            <div
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-4
              "
            >
              <Lock size={20} />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter password"
                className="
                  w-full
                  bg-transparent
                  outline-none
                  placeholder:text-zinc-500
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-3 text-zinc-400">
              <input
                type="checkbox"
                className="h-4 w-4 rounded"
              />

              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="
                text-zinc-400
                transition-all
                hover:text-white
              "
            >
              Forgot Password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              mt-3
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-white
              px-6
              py-4
              font-bold
              uppercase
              tracking-[0.2em]
              text-black
            "
          >
            Login

            <ArrowRight size={18} />
          </motion.button>
        </form>

        {/* FOOTER */}
        <div className="mt-8 text-center">
          <p className="text-sm text-zinc-500">
            Don’t have an account?{" "}

            <Link
              href="/register"
              className="
                font-semibold
                text-white
                transition-all
                hover:text-zinc-300
              "
            >
              Create Account
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}