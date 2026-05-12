"use client";

import Link from "next/link";

import {
  Apple,
  Play,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  CreditCard,
  ShieldCheck,
  Truck,
  Headphones,
  Crown,
  Globe,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
  },

  {
    icon: ShieldCheck,
    title: "Secure Payments",
  },

  {
    icon: Headphones,
    title: "24/7 Support",
  },
];

const footerLinks = {
  Shop: [
    "Men",
    "Women",
    "Luxury",
    "Streetwear",
  ],

  Company: [
    "About",
    "Careers",
    "Stores",
    "Blog",
  ],

  Support: [
    "Help Center",
    "Shipping",
    "Returns",
    "Contact",
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      {/* FEATURES */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-3 lg:px-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  backdrop-blur-2xl
                "
              >
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
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MAIN */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-5">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  bg-white
                  text-black
                "
              >
                <Crown size={30} />
              </div>

              <div>
                <h2
                  className="
                    bg-gradient-to-r
                    from-white
                    via-zinc-300
                    to-zinc-500
                    bg-clip-text
                    text-4xl
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-transparent
                  "
                >
                  NextGrid
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Luxury Fashion
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              Premium futuristic fashion platform
              delivering luxury experiences worldwide.
            </p>

            {/* CONTACT */}
            <div className="mt-10 space-y-5 text-zinc-400">
              <div className="flex items-center gap-4">
                <Mail size={18} />

                support@nextgrid.com
              </div>

              <div className="flex items-center gap-4">
                <Phone size={18} />

                +91 98765 43210
              </div>

              <div className="flex items-center gap-4">
                <MapPin size={18} />

                Bangalore, India
              </div>

              <div className="flex items-center gap-4">
                <Globe size={18} />

                www.nextgrid.com
              </div>
            </div>

            {/* APP BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {/* APPLE */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-3xl
                  bg-white
                  px-7
                  py-5
                  text-black
                "
              >
                <Apple size={32} />

                <div>
                  <p className="text-xs">
                    Download on the
                  </p>

                  <h4 className="text-lg font-black">
                    App Store
                  </h4>
                </div>
              </motion.button>

              {/* PLAYSTORE */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-7
                  py-5
                  transition-all
                  hover:bg-white
                  hover:text-black
                "
              >
                <Play size={32} />

                <div>
                  <p className="text-xs">
                    GET IT ON
                  </p>

                  <h4 className="text-lg font-black">
                    Google Play
                  </h4>
                </div>
              </motion.button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(
              ([title, links]) => (
                <div key={title}>
                  <h3 className="mb-6 text-2xl font-black">
                    {title}
                  </h3>

                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link}>
                        <Link
                          href="/"
                          className="
                            group
                            flex
                            items-center
                            gap-3
                            text-zinc-400
                            transition-all
                            hover:text-white
                          "
                        >
                          <ArrowRight
                            size={14}
                            className="
                              opacity-0
                              transition-all
                              group-hover:opacity-100
                            "
                          />

                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>

        {/* NEWSLETTER */}
        <div
          className="
            mt-20
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-3xl
            md:p-12
          "
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
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
                <Sparkles size={16} />

                <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  Newsletter
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-black">
                Stay Updated
              </h2>

              <p className="mt-4 text-zinc-400">
                Get fashion drops and premium updates.
              </p>
            </div>

            {/* RIGHT */}
            <form className="flex w-full max-w-xl flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-14
                  flex-1
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  outline-none
                  placeholder:text-zinc-500
                "
              />

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  flex
                  h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-8
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-black
                "
              >
                Subscribe

                <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-zinc-500">
              © 2026 NextGrid. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              {[
                "Privacy",
                "Terms",
                "Cookies",
              ].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="
                    text-sm
                    text-zinc-500
                    transition-all
                    hover:text-white
                  "
                >
                  {item}
                </Link>
              ))}
            </div>

            <div
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
              "
            >
              <CreditCard size={18} />

              <span className="text-sm text-zinc-400">
                Secure Payments
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}