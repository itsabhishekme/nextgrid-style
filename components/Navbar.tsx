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
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
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
  },
  {
    name: "Sale",
    href: "/sale",
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
          backdrop-blur-2xl
          bg-black/40
          border-b
          border-white/10
        "
      >
        <nav
          className="
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            h-[90px]
            flex
            items-center
            justify-between
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-12">
            {/* LOGO */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <h1
                  className="
                    text-3xl
                    font-black
                    tracking-[0.3em]
                    uppercase
                    bg-gradient-to-r
                    from-white
                    via-zinc-300
                    to-zinc-500
                    text-transparent
                    bg-clip-text
                  "
                >
                  NextGrid
                </h1>

                <p
                  className="
                    text-[10px]
                    tracking-[0.5em]
                    text-zinc-500
                    uppercase
                    mt-1
                  "
                >
                  Fashion Studio
                </p>
              </motion.div>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <Link
                    href={item.href}
                    className="
                      relative
                      text-sm
                      uppercase
                      tracking-widest
                      text-zinc-300
                      hover:text-white
                      transition-all
                      duration-300
                      group
                    "
                  >
                    <span className="flex items-center gap-1">
                      {item.name}

                      {item.name === "Sale" && (
                        <ChevronDown size={14} />
                      )}
                    </span>

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-2
                        w-0
                        h-[1px]
                        bg-white
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
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
              className="
                hidden
                md:flex
                items-center
                justify-center
                w-11
                h-11
                rounded-full
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition-all
              "
            >
              <Search size={18} />
            </motion.button>

            {/* WISHLIST */}
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
                items-center
                justify-center
                w-11
                h-11
                rounded-full
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition-all
                relative
              "
            >
              <Heart size={18} />

              <span
                className="
                  absolute
                  -top-1
                  -right-1
                  w-5
                  h-5
                  rounded-full
                  bg-white
                  text-black
                  text-[10px]
                  flex
                  items-center
                  justify-center
                  font-bold
                "
              >
                2
              </span>
            </motion.button>

            {/* ACCOUNT */}
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
                items-center
                justify-center
                w-11
                h-11
                rounded-full
                border
                border-white/10
                bg-white/5
                hover:bg-white/10
                transition-all
              "
            >
              <User size={18} />
            </motion.button>

            {/* CART */}
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
                items-center
                justify-center
                w-12
                h-12
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
                  -top-1
                  -right-1
                  w-5
                  h-5
                  rounded-full
                  bg-red-500
                  text-white
                  text-[10px]
                  flex
                  items-center
                  justify-center
                  font-bold
                "
              >
                3
              </span>
            </motion.button>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                lg:hidden
                flex
                items-center
                justify-center
                w-11
                h-11
                rounded-full
                border
                border-white/10
                bg-white/5
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              top-[90px]
              left-0
              w-full
              z-40
              bg-black/95
              backdrop-blur-2xl
              border-b
              border-white/10
              lg:hidden
            "
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="
                      text-xl
                      uppercase
                      tracking-[0.2em]
                      text-zinc-300
                      hover:text-white
                      transition-all
                      duration-300
                      block
                    "
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* MOBILE EXTRA */}
              <div
                className="
                  mt-6
                  pt-6
                  border-t
                  border-white/10
                  flex
                  items-center
                  gap-4
                "
              >
                <button
                  className="
                    flex-1
                    h-12
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    hover:bg-white/10
                    transition-all
                  "
                >
                  Login
                </button>

                <button
                  className="
                    flex-1
                    h-12
                    rounded-full
                    bg-white
                    text-black
                    font-semibold
                    hover:scale-[1.02]
                    transition-all
                  "
                >
                  Shop Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}