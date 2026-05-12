"use client";

import Link from "next/link";

import {
  ShoppingBag,
  Search,
  Heart,
  Menu,
  X,
  User,
  ChevronDown,
  Sparkles,
  Bell,
  ArrowRight,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useState } from "react";

const navItems = [
  {
    name: "Men",
    href: "/men",
  },

  {
    name: "Women",
    href: "/women",
  },

  {
    name: "Children",
    href: "/children",
  },

  {
    name: "New Arrivals",
    href: "/new-arrivals",
    badge: true,
  },

  {
    name: "Luxury",
    href: "/luxury",
    dropdown: true,
  },

  {
    name: "Streetwear",
    href: "/streetwear",
  },
];

const luxuryDropdown = [
  {
    title: "Premium Jackets",
    href: "/luxury/jackets",
  },

  {
    title: "Designer Shoes",
    href: "/luxury/shoes",
  },

  {
    title: "Luxury Watches",
    href: "/luxury/watches",
  },

  {
    title: "Accessories",
    href: "/luxury/accessories",
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [luxuryOpen, setLuxuryOpen] =
    useState(false);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          fixed
          top-0
          left-0
          z-50
          w-full
          border-b
          border-white/10
          bg-black/40
          backdrop-blur-3xl
        "
      >
        <nav
          className="
            mx-auto
            flex
            h-[90px]
            max-w-7xl
            items-center
            justify-between
            px-6
            lg:px-10
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-14">
            {/* LOGO */}
            <Link href="/">
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                className="cursor-pointer"
              >
                <h1
                  className="
                    bg-gradient-to-r
                    from-white
                    via-zinc-300
                    to-zinc-500
                    bg-clip-text
                    text-3xl
                    font-black
                    uppercase
                    tracking-[0.3em]
                    text-transparent
                  "
                >
                  NextGrid
                </h1>

                <p
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.5em]
                    text-zinc-500
                  "
                >
                  Fashion Studio
                </p>
              </motion.div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="relative group"
                  onMouseEnter={() => {
                    if (item.dropdown)
                      setLuxuryOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.dropdown)
                      setLuxuryOpen(false);
                  }}
                >
                  <Link
                    href={item.href}
                    className="
                      relative
                      flex
                      items-center
                      gap-2
                      text-sm
                      uppercase
                      tracking-[0.2em]
                      text-zinc-300
                      transition-all
                      hover:text-white
                    "
                  >
                    {item.name}

                    {item.badge && (
                      <span
                        className="
                          rounded-full
                          bg-white
                          px-2
                          py-1
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-black
                        "
                      >
                        New
                      </span>
                    )}

                    {item.dropdown && (
                      <ChevronDown size={14} />
                    )}
                  </Link>

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[1px]
                      w-0
                      bg-white
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />

                  <AnimatePresence>
                    {item.dropdown &&
                      luxuryOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 20,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="
                            absolute
                            left-0
                            top-12
                            w-[320px]
                            overflow-hidden
                            rounded-[30px]
                            border
                            border-white/10
                            bg-black/90
                            p-6
                            backdrop-blur-3xl
                          "
                        >
                          <div className="mb-5">
                            <p
                              className="
                                text-xs
                                uppercase
                                tracking-[0.3em]
                                text-zinc-500
                              "
                            >
                              Premium Collection
                            </p>

                            <h3 className="mt-3 text-2xl font-black">
                              Luxury Fashion
                            </h3>
                          </div>

                          <div className="space-y-4">
                            {luxuryDropdown.map(
                              (drop) => (
                                <Link
                                  key={drop.title}
                                  href={drop.href}
                                  className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    rounded-2xl
                                    border
                                    border-white/5
                                    bg-white/[0.03]
                                    px-5
                                    py-4
                                    transition-all
                                    hover:bg-white
                                    hover:text-black
                                  "
                                >
                                  <span>
                                    {drop.title}
                                  </span>

                                  <ArrowRight
                                    size={16}
                                  />
                                </Link>
                              )
                            )}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3 lg:gap-5">
            {/* SEARCH */}
            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                setSearchOpen(true)
              }
              className="
                hidden
                md:flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                transition-all
                hover:bg-white/10
              "
            >
              <Search size={18} />
            </motion.button>

            {/* NOTIFICATIONS */}
            <Link href="/notifications">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  relative
                  hidden
                  md:flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  hover:bg-white/10
                "
              >
                <Bell size={18} />

                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-red-500
                    text-[10px]
                    font-bold
                  "
                >
                  3
                </span>
              </motion.button>
            </Link>

            {/* WISHLIST */}
            <Link href="/wishlist">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  relative
                  hidden
                  md:flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  hover:bg-white/10
                "
              >
                <Heart size={18} />

                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[10px]
                    font-bold
                    text-black
                  "
                >
                  2
                </span>
              </motion.button>
            </Link>

            {/* LOGIN / PROFILE */}
            <Link href="/login">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  hidden
                  md:flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  hover:bg-white/10
                "
              >
                <User size={18} />
              </motion.button>
            </Link>

            {/* CART */}
            <Link href="/cart">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  shadow-2xl
                "
              >
                <ShoppingBag size={18} />

                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-red-500
                    text-[10px]
                    font-bold
                    text-white
                  "
                >
                  5
                </span>
              </motion.button>
            </Link>

            {/* MOBILE MENU */}
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                lg:hidden
              "
            >
              {mobileMenu ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>
    </>
  );
}