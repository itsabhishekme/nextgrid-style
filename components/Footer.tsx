"use client";

import Image from "next/image";
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
  Globe,
  Sparkles,
  Send,
  ChevronRight,
  Star,
  BadgeCheck,
  Clock3,
  Gift,
  ExternalLink,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Express worldwide shipping with real-time tracking support.",
    href: "/shipping",
  },

  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Advanced encrypted payment systems with complete protection.",
    href: "/payments",
  },

  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Premium customer support available all day for assistance.",
    href: "/support",
  },

  {
    icon: BadgeCheck,
    title: "Premium Quality",
    desc: "Luxury verified collections with high-quality standards.",
    href: "/quality",
  },
];

const footerLinks = {
  Shop: [
    {
      name: "Men",
      href: "/men",
    },

    {
      name: "Women",
      href: "/women",
    },

    {
      name: "Kids",
      href: "/kids",
    },

    {
      name: "Luxury",
      href: "/luxury",
    },

    {
      name: "Trending",
      href: "/trending",
    },

    {
      name: "Accessories",
      href: "/accessories",
    },

    {
      name: "New Arrivals",
      href: "/new-arrivals",
    },

    {
      name: "Streetwear",
      href: "/streetwear",
    },
  ],

  Company: [
    {
      name: "About",
      href: "/about",
    },

    {
      name: "Careers",
      href: "/careers",
    },

    {
      name: "Stores",
      href: "/stores",
    },

    {
      name: "Contact",
      href: "/contact",
    },

    {
      name: "Investors",
      href: "/investors",
    },

    {
      name: "Press Media",
      href: "/press",
    },

    {
      name: "Blog",
      href: "/blog",
    },

    {
      name: "Partners",
      href: "/partners",
    },
  ],

  Support: [
    {
      name: "Help Center",
      href: "/help",
    },

    {
      name: "Shipping",
      href: "/shipping",
    },

    {
      name: "Returns",
      href: "/returns",
    },

    {
      name: "Privacy Policy",
      href: "/privacy",
    },

    {
      name: "Terms & Conditions",
      href: "/terms",
    },

    {
      name: "Track Order",
      href: "/track-order",
    },

    {
      name: "FAQs",
      href: "/faqs",
    },

    {
      name: "Customer Care",
      href: "/customer-care",
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden

        border-t
        border-white/10

        bg-black
        text-white
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,0.06) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,0.06) 1px,
                transparent 1px
              )
            `,
            backgroundSize:
              "80px 80px",
          }}
        />

        <div
          className="
            absolute
            left-[-120px]
            top-[-120px]

            h-[420px]
            w-[420px]

            rounded-full

            bg-fuchsia-500/20

            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]

            h-[420px]
            w-[420px]

            rounded-full

            bg-cyan-500/20

            blur-[120px]
          "
        />
      </div>

      {/* TOP TAGS */}
      <section
        className="
          relative

          border-b
          border-white/10
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl

            flex-wrap
            items-center
            justify-center

            gap-4

            px-4
            py-5
          "
        >
          {[
            "Premium Fashion",
            "Luxury Streetwear",
            "Secure Checkout",
            "Express Delivery",
            "Exclusive Collections",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -2,
              }}
              className="
                rounded-full

                border
                border-white/10

                bg-white/[0.04]

                px-5
                py-3

                text-sm
                text-zinc-300

                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-2">
                <Star size={14} />

                {item}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section
        className="
          relative

          border-b
          border-white/10
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl

            gap-5

            px-4
            py-12

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.href}
              >
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    relative

                    cursor-pointer

                    overflow-hidden

                    rounded-[30px]

                    border
                    border-white/10

                    bg-white/[0.04]

                    p-7

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:border-white/20
                    hover:bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0

                      opacity-0

                      transition-opacity
                      duration-500

                      group-hover:opacity-100
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-r
                        from-white/[0.03]
                        via-white/[0.07]
                        to-white/[0.03]
                      "
                    />
                  </div>

                  <div
                    className="
                      relative

                      flex
                      h-16
                      w-16

                      items-center
                      justify-center

                      rounded-2xl

                      bg-white
                      text-black
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <h3
                    className="
                      relative

                      mt-6

                      text-2xl
                      font-black
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      relative

                      mt-3

                      text-sm
                      leading-7

                      text-zinc-400
                    "
                  >
                    {item.desc}
                  </p>

                  <div
                    className="
                      relative

                      mt-6

                      flex
                      items-center
                      gap-2

                      text-sm
                      font-semibold

                      text-white
                    "
                  >
                    Explore

                    <ExternalLink size={16} />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MAIN */}
      <div
        className="
          relative
          mx-auto
          max-w-7xl

          px-4
          py-16
        "
      >
        <div
          className="
            grid
            gap-16

            xl:grid-cols-[1.3fr_1fr]
          "
        >
          {/* LEFT */}
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-5">
              <motion.div
                whileHover={{
                  rotate: 4,
                  scale: 1.05,
                }}
                className="
                  flex
                  h-20
                  w-20

                  items-center
                  justify-center

                  overflow-hidden

                  rounded-[28px]

                  border
                  border-white/10

                  bg-white

                  shadow-[0_0_40px_rgba(255,255,255,0.18)]
                "
              >
                <Image
                  src="/favicon.ico"
                  alt="logo"
                  width={54}
                  height={54}
                />
              </motion.div>

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

                    tracking-[0.15em]

                    text-transparent
                  "
                >
                  NextGrid
                </h2>

                <p
                  className="
                    mt-2

                    text-xs
                    uppercase

                    tracking-[0.4em]

                    text-zinc-500
                  "
                >
                  Fashion Studio
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8

                max-w-3xl

                text-base
                leading-9

                text-zinc-400

                md:text-lg
              "
            >
              Experience futuristic luxury
              fashion with modern ecommerce,
              premium collections,
              exclusive limited editions,
              advanced shopping experience,
              and beautifully designed
              fashion journeys.
            </p>

            {/* CONTACT */}
            <div
              className="
                mt-10

                grid
                gap-5

                md:grid-cols-2
              "
            >
              {[
                {
                  icon: Mail,
                  text: "support@nextgrid.com",
                  href: "mailto:support@nextgrid.com",
                },

                {
                  icon: Phone,
                  text: "+91 1120 0000",
                  href: "tel:+919876543210",
                },

                {
                  icon: MapPin,
                  text: "Bangalore, India",
                  href: "/stores",
                },

                {
                  icon: Globe,
                  text: "www.nextgrid.com",
                  href: "/",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={i}
                    href={item.href}
                  >
                    <motion.div
                      whileHover={{
                        y: -3,
                      }}
                      className="
                        group

                        flex
                        cursor-pointer

                        items-center
                        gap-4

                        rounded-2xl

                        border
                        border-white/10

                        bg-white/[0.03]

                        px-5
                        py-4

                        transition-all
                        duration-300

                        hover:border-white/20
                        hover:bg-white/[0.05]
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12

                          items-center
                          justify-center

                          rounded-xl

                          bg-white/[0.06]

                          transition-all

                          group-hover:bg-white
                          group-hover:text-black
                        "
                      >
                        <Icon size={18} />
                      </div>

                      <span
                        className="
                          text-sm
                          text-zinc-300
                        "
                      >
                        {item.text}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* APP BUTTONS */}
            <div
              className="
                mt-10

                flex
                flex-col
                gap-5

                sm:flex-row
              "
            >
              <Link href="/app-store">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    relative

                    flex
                    min-h-[90px]
                    min-w-[280px]

                    cursor-pointer

                    items-center
                    gap-5

                    overflow-hidden

                    rounded-[28px]

                    border
                    border-white/10

                    bg-black

                    px-8
                    py-5

                    transition-all
                    duration-300

                    hover:border-white/20
                    hover:bg-zinc-900
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16

                      items-center
                      justify-center

                      rounded-2xl

                      bg-white
                      text-black
                    "
                  >
                    <Apple size={30} />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        uppercase

                        tracking-[0.3em]

                        text-zinc-400
                      "
                    >
                      Download on the
                    </p>

                    <h4
                      className="
                        mt-1

                        text-2xl
                        font-black
                      "
                    >
                      App Store
                    </h4>
                  </div>
                </motion.div>
              </Link>

              <Link href="/google-play">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    relative

                    flex
                    min-h-[90px]
                    min-w-[280px]

                    cursor-pointer

                    items-center
                    gap-5

                    overflow-hidden

                    rounded-[28px]

                    border
                    border-white/10

                    bg-black

                    px-8
                    py-5

                    transition-all
                    duration-300

                    hover:border-white/20
                    hover:bg-zinc-900
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16

                      items-center
                      justify-center

                      rounded-2xl

                      bg-white/[0.08]

                      transition-all

                      group-hover:bg-white
                      group-hover:text-black
                    "
                  >
                    <Play size={30} />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        uppercase

                        tracking-[0.3em]

                        text-zinc-400
                      "
                    >
                      Get it on
                    </p>

                    <h4
                      className="
                        mt-1

                        text-2xl
                        font-black
                      "
                    >
                      Google Play
                    </h4>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              grid
              grid-cols-2
              gap-10

              lg:grid-cols-3
            "
          >
            {Object.entries(footerLinks).map(
              ([title, links]) => (
                <div key={title}>
                  <h3
                    className="
                      mb-6

                      text-2xl
                      font-black
                    "
                  >
                    {title}
                  </h3>

                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="
                            group

                            flex
                            items-center
                            gap-3

                            rounded-xl

                            px-3
                            py-2

                            text-zinc-400

                            transition-all
                            duration-300

                            hover:bg-white/[0.04]
                            hover:text-white
                          "
                        >
                          <ChevronRight
                            size={16}
                            className="
                              transition-transform

                              group-hover:translate-x-1
                            "
                          />

                          {link.name}
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
            relative

            mt-24

            overflow-hidden

            rounded-[40px]

            border
            border-white/10

            bg-white/[0.04]

            p-8

            backdrop-blur-2xl

            md:p-12
          "
        >
          <div
            className="
              absolute
              right-0
              top-0

              h-52
              w-52

              rounded-full

              bg-fuchsia-500/10

              blur-[100px]
            "
          />

          <div
            className="
              relative

              flex
              flex-col
              gap-10

              xl:flex-row
              xl:items-center
              xl:justify-between
            "
          >
            {/* LEFT */}
            <div className="max-w-2xl">
              <div
                className="
                  inline-flex
                  items-center
                  gap-3

                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.05]

                  px-6
                  py-3
                "
              >
                <Sparkles size={18} />

                <span
                  className="
                    text-xs
                    uppercase

                    tracking-[0.35em]

                    text-zinc-300
                  "
                >
                  Newsletter Access
                </span>
              </div>

              <h2
                className="
                  mt-6

                  text-4xl
                  font-black

                  leading-tight

                  md:text-6xl
                "
              >
                Stay Updated
              </h2>

              <p
                className="
                  mt-5

                  text-base
                  leading-8

                  text-zinc-400

                  md:text-lg
                "
              >
                Receive premium fashion
                drops, luxury collections,
                special offers, and
                exclusive ecommerce updates.
              </p>
            </div>

            {/* RIGHT */}
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const form =
                  e.currentTarget;

                const input =
                  form.querySelector(
                    "input"
                  );

                if (
                  input &&
                  input.value.trim() !== ""
                ) {
                  window.location.href =
                    "/subscribe-success";

                  input.value = "";
                }
              }}
              className="
                flex
                w-full
                max-w-2xl

                flex-col
                gap-5

                sm:flex-row
              "
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="
                    h-16
                    w-full

                    rounded-2xl

                    border
                    border-white/10

                    bg-black/40

                    px-6
                    pr-14

                    text-white

                    outline-none

                    transition-all
                    duration-300

                    placeholder:text-zinc-500

                    focus:border-white/30
                    focus:ring-2
                    focus:ring-white/20
                  "
                />

                <Send
                  size={18}
                  className="
                    absolute
                    right-5
                    top-1/2

                    -translate-y-1/2

                    text-zinc-500
                  "
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  relative

                  flex
                  h-16

                  cursor-pointer

                  items-center
                  justify-center

                  gap-3

                  overflow-hidden

                  rounded-2xl

                  bg-white

                  px-10

                  font-black

                  uppercase

                  tracking-[0.2em]

                  text-black

                  transition-all
                  duration-300

                  hover:bg-zinc-200
                "
              >
                Subscribe

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </motion.button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-16

            border-t
            border-white/10

            pt-10
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <p
              className="
                text-sm
                text-zinc-500
              "
            >
              © 2026 NextGrid Fashion.
              All rights reserved.
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-4
              "
            >
              {[
                {
                  name: "Privacy",
                  href: "/privacy",
                },

                {
                  name: "Terms",
                  href: "/terms",
                },

                {
                  name: "Cookies",
                  href: "/cookies",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    rounded-xl

                    px-4
                    py-2

                    text-sm
                    text-zinc-500

                    transition-all
                    duration-300

                    hover:bg-white/[0.04]
                    hover:text-white
                  "
                >
                  {item.name}
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

                bg-white/[0.04]

                px-5
                py-3
              "
            >
              <CreditCard size={18} />

              <span
                className="
                  text-sm
                  text-zinc-300
                "
              >
                Secure Payments Enabled
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}