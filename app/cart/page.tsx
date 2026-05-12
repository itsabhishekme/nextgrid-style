"use client";

import { useState } from "react";

import {
  ShoppingBag,
  Trash2,
  ArrowRight,
  CreditCard,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const initialCartItems = [
  {
    id: 1,
    name: "Premium Black Hoodie",
    size: "L",
    price: 14999,
    quantity: 1,
    image: "/streetwear/hoodie.jpg",
  },

  {
    id: 2,
    name: "Luxury Sneakers",
    size: "42",
    price: 22999,
    quantity: 1,
    image: "/streetwear/shoes.jpg",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] =
    useState(initialCartItems);

  const increaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const tax = 999;

  const total = subtotal + shipping + tax;

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
      {/* BACKGROUND EFFECTS */}
      <div
        className="
          absolute
          left-[-120px]
          top-[-120px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-fuchsia-600/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-150px]
          right-[-120px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      <div className="relative z-10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mb-16"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="text-fuchsia-400" />

              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.4em]
                  text-zinc-400
                "
              >
                Luxury Shopping Cart
              </p>
            </div>

            <h1
              className="
                mt-6
                text-5xl
                font-black
                leading-none
                md:text-7xl
              "
            >
              Your{" "}
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
                Cart
              </span>
            </h1>
          </motion.div>

          {/* MAIN GRID */}
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            {/* LEFT SIDE */}
            <div className="space-y-8">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[38px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-6
                    backdrop-blur-xl
                  "
                >
                  {/* HOVER GLOW */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition
                      duration-500
                      group-hover:opacity-100
                      bg-gradient-to-r
                      from-fuchsia-500/10
                      via-transparent
                      to-cyan-500/10
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      flex-col
                      gap-6
                      md:flex-row
                    "
                  >
                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-[30px]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          h-[240px]
                          w-full
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-110
                          md:w-[240px]
                        "
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex justify-between gap-4">
                          <div>
                            <h2
                              className="
                                text-3xl
                                font-black
                              "
                            >
                              {item.name}
                            </h2>

                            <div className="mt-4 flex gap-3">
                              <span
                                className="
                                  rounded-full
                                  border
                                  border-white/10
                                  bg-white/5
                                  px-4
                                  py-2
                                  text-sm
                                  text-zinc-300
                                "
                              >
                                Size {item.size}
                              </span>

                              <span
                                className="
                                  rounded-full
                                  border
                                  border-emerald-500/20
                                  bg-emerald-500/10
                                  px-4
                                  py-2
                                  text-sm
                                  text-emerald-400
                                "
                              >
                                In Stock
                              </span>
                            </div>
                          </div>

                          {/* DELETE BUTTON */}
                          <button
                            onClick={() =>
                              removeItem(item.id)
                            }
                            className="
                              flex
                              h-14
                              w-14
                              items-center
                              justify-center
                              rounded-2xl
                              border
                              border-white/10
                              bg-white/5
                              transition
                              hover:border-red-500/30
                              hover:bg-red-500/10
                              hover:text-red-400
                            "
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>

                      {/* BOTTOM */}
                      <div
                        className="
                          mt-10
                          flex
                          flex-col
                          gap-5
                          md:flex-row
                          md:items-center
                          md:justify-between
                        "
                      >
                        {/* QUANTITY */}
                        <div
                          className="
                            flex
                            items-center
                            gap-5
                            rounded-full
                            border
                            border-white/10
                            bg-black/30
                            px-5
                            py-3
                            w-fit
                          "
                        >
                          <button
                            onClick={() =>
                              decreaseQty(item.id)
                            }
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-full
                              bg-white/5
                              transition
                              hover:bg-white/10
                            "
                          >
                            <Minus size={16} />
                          </button>

                          <span className="text-lg font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQty(item.id)
                            }
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-full
                              bg-white/5
                              transition
                              hover:bg-white/10
                            "
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* PRICE */}
                        <h3
                          className="
                            text-4xl
                            font-black
                          "
                        >
                          ₹
                          {(
                            item.price *
                            item.quantity
                          ).toLocaleString("en-IN")}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
            >
              <div
                className="
                  sticky
                  top-28
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-8
                  backdrop-blur-xl
                "
              >
                {/* TOP GLOW */}
                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-40
                    bg-gradient-to-b
                    from-white/10
                    to-transparent
                  "
                />

                <div className="relative">
                  {/* TITLE */}
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/10
                      "
                    >
                      <ShoppingBag size={24} />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-400">
                        Secure Checkout
                      </p>

                      <h2
                        className="
                          text-3xl
                          font-black
                        "
                      >
                        Order Summary
                      </h2>
                    </div>
                  </div>

                  {/* PRICE DETAILS */}
                  <div className="mt-10 space-y-6">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">
                        Subtotal
                      </span>

                      <span className="font-semibold">
                        ₹
                        {subtotal.toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-zinc-400">
                        Shipping
                      </span>

                      <span className="text-emerald-400">
                        Free
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-zinc-400">
                        Taxes
                      </span>

                      <span>
                        ₹
                        {tax.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        text-3xl
                        font-black
                      "
                    >
                      <span>Total</span>

                      <span>
                        ₹
                        {total.toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="mt-10 space-y-4">
                    <div className="flex items-center gap-3 text-zinc-300">
                      <ShieldCheck
                        size={18}
                        className="text-emerald-400"
                      />

                      100% Secure Payments
                    </div>

                    <div className="flex items-center gap-3 text-zinc-300">
                      <Truck
                        size={18}
                        className="text-cyan-400"
                      />

                      Fast Delivery Across India
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    className="
                      group
                      relative
                      mt-10
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      overflow-hidden
                      rounded-full
                      bg-white
                      px-6
                      py-5
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-black
                      transition
                      hover:scale-[1.02]
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        translate-y-full
                        bg-gradient-to-r
                        from-fuchsia-500
                        to-cyan-500
                        transition
                        duration-500
                        group-hover:translate-y-0
                      "
                    />

                    <div
                      className="
                        relative
                        flex
                        items-center
                        gap-3
                        group-hover:text-white
                      "
                    >
                      <CreditCard size={20} />

                      Proceed To Checkout

                      <ArrowRight
                        size={18}
                        className="
                          transition
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}