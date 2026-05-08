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
  Sparkles,
  Headphones,
  BadgeCheck,
} from "lucide-react";

import { motion } from "framer-motion";

const shopLinks = [
  {
    name: "Men Fashion",
    href: "/men",
  },

  {
    name: "Women Fashion",
    href: "/women",
  },

  {
    name: "Children Collection",
    href: "/children",
  },

  {
    name: "New Arrivals",
    href: "/new-arrivals",
  },

  {
    name: "Luxury Wear",
    href: "/luxury",
  },

  {
    name: "Streetwear",
    href: "/streetwear",
  },
];

const companyLinks = [
  {
    name: "About Us",
    href: "/about",
  },

  {
    name: "Careers",
    href: "/careers",
  },

  {
    name: "Fashion Blog",
    href: "/blog",
  },

  {
    name: "Stores",
    href: "/stores",
  },

  {
    name: "Contact",
    href: "/contact",
  },
];

const supportLinks = [
  {
    name: "Support Center",
    href: "/support",
  },

  {
    name: "Shipping Policy",
    href: "/shipping",
  },

  {
    name: "Returns & Refunds",
    href: "/returns",
  },

  {
    name: "Track Order",
    href: "/orders",
  },

  {
    name: "Help Center",
    href: "/help",
  },
];

const legalLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy",
  },

  {
    name: "Terms & Conditions",
    href: "/terms",
  },

  {
    name: "Cookies Policy",
    href: "/cookies",
  },

  {
    name: "Support",
    href: "/support",
  },
];

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Worldwide premium shipping",
  },

  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "100% protected checkout",
  },

  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated customer service",
  },

  {
    icon: BadgeCheck,
    title: "Premium Quality",
    desc: "Luxury verified fashion",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[160px]" />
      </div>

      {/* FEATURES */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                }}
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-xl
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

                <h3 className="mt-6 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        {/* TOP CTA */}
        <div
          className="
            mb-24
            overflow-hidden
            rounded-[50px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-3xl
            lg:p-16
          "
        >
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-3
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-zinc-400
                "
              >
                <Sparkles size={14} />
                NextGrid Mobile App
              </span>

              <h2
                className="
                  mt-8
                  text-5xl
                  font-black
                  leading-tight
                  md:text-7xl
                "
              >
                Shop Fashion
                <span
                  className="
                    bg-gradient-to-r
                    from-white
                    via-zinc-300
                    to-zinc-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {" "}
                  Anywhere
                </span>
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
                Experience luxury shopping directly from your
                smartphone with exclusive offers, premium
                collections and ultra-fast checkout.
              </p>

              {/* APP BUTTONS */}
              <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                {/* APPLE */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-3xl
                    bg-white
                    px-6
                    py-5
                    text-black
                  "
                >
                  <Apple size={34} />

                  <div className="text-left">
                    <p className="text-xs font-medium">
                      Download on the
                    </p>

                    <h4 className="text-xl font-black">
                      App Store
                    </h4>
                  </div>
                </motion.button>

                {/* PLAYSTORE */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-6
                    py-5
                    transition-all
                    hover:bg-white
                    hover:text-black
                  "
                >
                  <Play size={32} />

                  <div className="text-left">
                    <p className="text-xs font-medium">
                      GET IT ON
                    </p>

                    <h4 className="text-xl font-black">
                      Google Play
                    </h4>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* RIGHT STATS */}
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
                  Happy Customers Worldwide
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
                  150+
                </h3>

                <p className="mt-3 text-zinc-400">
                  Premium Fashion Brands
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
                  Dedicated Customer Support
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
                  Secure Shopping Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-2">
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

            <p
              className="
                mt-8
                max-w-md
                text-base
                leading-9
                text-zinc-400
              "
            >
              Redefining modern fashion with premium
              streetwear, luxury collections and futuristic
              shopping experiences designed for the next
              generation.
            </p>

            {/* CONTACT */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 text-zinc-400">
                <Mail size={18} />

                <span>support@nextgridstyle.com</span>
              </div>

              <div className="flex items-center gap-4 text-zinc-400">
                <Phone size={18} />

                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4 text-zinc-400">
                <MapPin size={18} />

                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="mb-8 text-xl font-black">
              Shop
            </h3>

            <ul className="space-y-5">
              {shopLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
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

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-8 text-xl font-black">
              Company
            </h3>

            <ul className="space-y-5">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
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

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT + NEWSLETTER */}
          <div>
            <h3 className="mb-8 text-xl font-black">
              Newsletter
            </h3>

            <p className="mb-6 text-sm leading-7 text-zinc-400">
              Subscribe for exclusive offers and latest luxury
              fashion drops.
            </p>

            {/* INPUT */}
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  text-sm
                  text-white
                  outline-none
                  transition
                  placeholder:text-zinc-500
                  focus:border-white
                "
              />

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-5
                  py-4
                  text-sm
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

            {/* SUPPORT LINKS */}
            <div className="mt-10 space-y-4">
              {supportLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    block
                    text-sm
                    text-zinc-400
                    transition-all
                    hover:text-white
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-14 h-px w-full bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT */}
          <div>
            <p className="text-sm text-zinc-500">
              © 2026 NextGrid Style Fashion. All rights
              reserved.
            </p>
          </div>

          {/* CENTER */}
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  text-sm
                  text-zinc-500
                  transition-all
                  hover:text-white
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* RIGHT */}
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
              Secure Payments Enabled
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}