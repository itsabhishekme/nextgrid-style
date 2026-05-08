import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  Sparkles,
  Star,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Truck,
  ToyBrick,
  Filter,
  SlidersHorizontal,
  Smile,
} from "lucide-react";

const childrenProducts = [
  {
    name: "Kids Premium Hoodie",
    price: 2499,
    image: "/images/children/children.jpg",
  },

  {
    name: "Cute Summer Outfit",
    price: 1999,
    image: "/images/children/kids1.jpg",
  },

  {
    name: "Modern Kids Fashion",
    price: 2999,
    image: "/images/children/kids2.jpg",
  },

  {
    name: "Luxury Kids Jacket",
    price: 3499,
    image: "/images/children/kids3.jpg",
  },

  {
    name: "Casual Kids Wear",
    price: 1799,
    image: "/images/children/kids4.jpg",
  },

  {
    name: "Streetwear Collection",
    price: 2799,
    image: "/images/children/kids5.jpg",
  },
];

export default function ChildrenPage() {
  const categories = [
    "All",
    "Hoodies",
    "Jackets",
    "Casual",
    "Streetwear",
    "Accessories",
  ];

  const features = [
    {
      icon: ToyBrick,
      title: "Creative Styles",
      description:
        "Colorful and modern collections designed for children.",
    },

    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Quick shipping with premium packaging and care.",
    },

    {
      icon: ShieldCheck,
      title: "Comfort First",
      description:
        "Soft fabrics and safe premium materials for kids.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* LEFT GLOW */}
        <div className="absolute left-[-300px] top-[-300px] h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

        {/* RIGHT GLOW */}
        <div className="absolute bottom-[-300px] right-[-300px] h-[700px] w-[700px] rounded-full bg-yellow-500/10 blur-[180px]" />

        {/* CENTER LIGHT */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative z-10 px-6 pt-[140px] lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              {/* BADGE */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-xl">
                <Smile size={16} />

                <span className="text-xs uppercase tracking-[0.3em] text-zinc-300">
                  Kids Fashion Collection
                </span>
              </div>

              {/* TITLE */}
              <h1 className="mt-10 text-6xl font-black leading-[0.95] md:text-8xl xl:text-[8rem]">
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-yellow-300 bg-clip-text text-transparent">
                  CHILDREN
                </span>

                <span className="mt-2 block text-white">
                  STYLE
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-10 max-w-2xl text-lg leading-9 text-zinc-400 md:text-xl">
                Explore fun, colorful and premium fashion
                collections designed for children with comfort,
                creativity and modern luxury aesthetics.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                {/* SHOP */}
                <button className="group flex items-center justify-center gap-4 rounded-full bg-white px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] text-black shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all hover:scale-105">
                  Explore Collection

                  <ArrowRight
                    size={18}
                    className="transition-all group-hover:translate-x-1"
                  />
                </button>

                {/* ARRIVALS */}
                <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-5 text-sm font-bold uppercase tracking-[0.25em] text-white transition-all hover:bg-white hover:text-black">
                  New Arrivals
                </button>
              </div>

              {/* STATS */}
              <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
                <div>
                  <h3 className="text-4xl font-black">
                    10K+
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Happy Families
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black">
                    90+
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Kids Styles
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black">
                    4.9★
                  </h3>

                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Parent Rating
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              {/* GLOW */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[120px]" />

              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/[0.03]">
                <img
                  src="/images/children/children.jpg"
                  alt="Children Fashion"
                  className="h-[780px] w-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* FLOATING INFO */}
                <div className="absolute bottom-6 left-6 right-6 rounded-[32px] border border-white/10 bg-black/40 p-6 backdrop-blur-2xl">
                  {/* STARS */}
                  <div className="mb-5 flex items-center gap-2">
                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="ml-3 text-sm text-zinc-400">
                      Loved by 10,000+ families
                    </span>
                  </div>

                  <h3 className="text-3xl font-black">
                    Fun Premium Fashion
                  </h3>

                  <p className="mt-4 leading-8 text-zinc-400">
                    Comfortable modern styles crafted for
                    children with colorful premium aesthetics.
                  </p>
                </div>

                {/* BADGE */}
                <div className="absolute left-6 top-6 rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black">
                  Trending Kids Collection
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/20"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-black">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative z-10 px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* TOP */}
          <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                Premium Kids Collection
              </span>

              <h2 className="mt-5 text-5xl font-black md:text-6xl">
                Featured Products
              </h2>
            </div>

            {/* RIGHT */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-sm uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black">
                <Filter size={18} />
                Filter
              </button>

              <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-sm uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black">
                <SlidersHorizontal size={18} />
                Sort
              </button>
            </div>
          </div>

          {/* CATEGORY BUTTONS */}
          <div className="mb-14 flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition-all ${
                  index === 0
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/[0.03] text-white hover:bg-white hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {childrenProducts.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/20"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[520px] w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* BADGE */}
                  <div className="absolute left-6 top-6 rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black">
                    Kids Fashion
                  </div>

                  {/* HEART */}
                  <button className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all hover:bg-white hover:text-black">
                    <Heart size={18} />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  {/* STARS */}
                  <div className="mb-5 flex items-center gap-1">
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-3xl font-bold">
                    {product.name}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 leading-8 text-zinc-400">
                    Comfortable premium fashion designed with
                    fun modern aesthetics for children.
                  </p>

                  {/* PRICE */}
                  <div className="mt-8 flex items-center justify-between">
                    <p className="text-3xl font-black">
                      ₹{product.price}
                    </p>

                    <button className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:scale-105">
                      <ShoppingBag size={16} />
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM BANNER */}
      <section className="relative z-10 px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-cyan-500/[0.08] to-yellow-500/[0.05] p-10 lg:p-20">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="text-xs uppercase tracking-[0.5em] text-zinc-500">
                NextGrid Kids Premium
              </span>

              <h2 className="mt-8 bg-gradient-to-r from-cyan-300 via-white to-yellow-300 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-7xl">
                Bright
                <br />
                Kids Fashion
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                Explore playful premium collections with
                colorful styles, comfort and luxury shopping
                experiences for children.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-col gap-5 sm:flex-row">
                <button className="rounded-full bg-white px-8 py-5 font-bold uppercase tracking-[0.2em] text-black transition-all hover:scale-105">
                  Explore More
                </button>

                <button className="rounded-full border border-white/10 bg-white/[0.03] px-8 py-5 font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black">
                  Learn More
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[120px]" />

              <img
                src="/images/children/kids3.jpg"
                alt="Kids Fashion"
                className="relative z-10 h-[650px] w-full rounded-[40px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}