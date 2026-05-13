"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  Home,
  ShoppingBag,
  Heart,
  User,
  Search,
  Sparkles,
  Menu,
  X,
  ArrowRight,
  Star,
  Bell,
  Crown,
  Shirt,
  Gem,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

const navItems = [
  {
    href: "/",
    icon: Home,
  },

  {
    href: "/search",
    icon: Search,
  },

  {
    href: "/wishlist",
    icon: Heart,
  },

  {
    href: "/luxury",
    icon: Crown,
  },

  {
    href: "/login",
    icon: User,
  },
];

const dropdownItems = [
  {
    title: "Men Fashion",
    href: "/men",
    icon: Shirt,
  },

  {
    title: "Women Fashion",
    href: "/women",
    icon: Sparkles,
  },

  {
    title: "Children",
    href: "/children",
    icon: Star,
  },

  {
    title: "Streetwear",
    href: "/streetwear",
    icon: Gem,
  },

  {
    title: "Luxury Collection",
    href: "/luxury",
    icon: Crown,
  },

  {
    title: "New Arrivals",
    href: "/new-arrivals",
    icon: Bell,
  },
];

export default function MobileNav() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [menuOpen]);

  if (!mounted) return null;

  return (
    <>
      {/* BACKDROP */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={() =>
              setMenuOpen(false)
            }
            className="
              fixed
              inset-0
              z-[9980]
              bg-black/90
              backdrop-blur-2xl
              md:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* MENU PANEL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 120,
              scale: 0.88,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 120,
              scale: 0.88,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              bottom-28
              left-1/2
              z-[9990]
              w-[94%]
              max-w-md
              -translate-x-1/2
              overflow-hidden
              rounded-[42px]
              border
              border-white/10
              bg-gradient-to-b
              from-zinc-900
              via-black
              to-zinc-950
              p-5
              shadow-[0_20px_120px_rgba(0,0,0,0.85)]
              backdrop-blur-3xl
              md:hidden
            "
          >
            {/* HEADER */}
            <div
              className="
                mb-7
                flex
                items-center
                justify-between
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    text-zinc-500
                  "
                >
                  NEXTGRID STYLE
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-white
                  "
                >
                  Explore
                </h2>
              </div>

              <motion.button
                whileTap={{
                  scale: 0.92,
                }}
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  text-white
                "
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* MENU ITEMS */}
            <div className="grid grid-cols-2 gap-4">
              {dropdownItems.map(
                (item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.05,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() =>
                          setMenuOpen(
                            false
                          )
                        }
                        className="
                          group
                          flex
                          flex-col
                          items-center
                          justify-center
                          gap-4
                          rounded-[30px]
                          border
                          border-white/5
                          bg-white/[0.03]
                          p-6
                          transition-all
                          duration-300
                          hover:border-white/20
                          hover:bg-white
                          hover:text-black
                        "
                      >
                        <div
                          className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-3xl
                            bg-white/[0.06]
                            transition-all
                            duration-300
                            group-hover:bg-black
                            group-hover:text-white
                          "
                        >
                          <Icon size={28} />
                        </div>

                        <span
                          className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.18em]
                          "
                        >
                          {item.title}
                        </span>
                      </Link>
                    </motion.div>
                  );
                }
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTTOM NAVBAR */}
      <motion.nav
        initial={{
          y: 120,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          fixed
          bottom-4
          left-1/2
          z-[9999]
          flex
          h-[84px]
          w-[94%]
          max-w-md
          -translate-x-1/2
          items-center
          justify-around
          rounded-[34px]
          border
          border-white/10
          bg-black/80
          px-3
          backdrop-blur-3xl
          shadow-[0_10px_60px_rgba(0,0,0,0.7)]
          md:hidden
        "
      >
        {/* MENU BUTTON */}
        <motion.button
          whileTap={{
            scale: 0.92,
          }}
          onClick={() => {
            setMenuOpen(
              (prev) => !prev
            );
          }}
          className="
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/[0.05]
            text-zinc-300
          "
        >
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{
                  rotate: -180,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: 180,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{
                  rotate: 180,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: -180,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* NAV ITEMS */}
        {navItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative
                flex
                items-center
                justify-center
              "
            >
              <motion.div
                whileTap={{
                  scale: 0.92,
                }}
                className="
                  relative
                  flex
                  items-center
                  justify-center
                "
              >
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="
                      absolute
                      inset-0
                      rounded-3xl
                      bg-white/[0.08]
                    "
                  />
                )}

                <div
                  className={`
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                        bg-white
                        text-black
                        shadow-[0_0_30px_rgba(255,255,255,0.45)]
                      `
                        : `
                        bg-white/[0.04]
                        text-zinc-400
                      `
                    }
                  `}
                >
                  <Icon
                    size={22}
                    className="
                      relative
                      z-10
                    "
                  />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </motion.nav>

      {/* FLOATING CART */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="
          fixed
          bottom-28
          right-5
          z-[9999]
          md:hidden
        "
      >
        <Link href="/cart">
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            className="
              relative
              flex
              h-[68px]
              w-[68px]
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white
              text-black
              shadow-[0_10px_60px_rgba(255,255,255,0.25)]
            "
          >
            <ShoppingBag
              size={26}
            />

            <div
              className="
                absolute
                -right-1
                -top-1
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-red-500
                text-[11px]
                font-black
                text-white
              "
            >
              5
            </div>
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
}