import {
  Apple,
  Play,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-pink-500/20 blur-[150px]" />

        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-purple-500/20 blur-[150px]" />

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        {/* TOP CTA */}
        <div className="mb-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl lg:p-14">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                NextGrid Mobile App
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Shop Fashion
                <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                  {" "}
                  Anywhere
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Experience luxury shopping directly from your
                smartphone with exclusive offers, premium
                collections and ultra-fast checkout.
              </p>

              {/* APP BUTTONS */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white px-6 py-4 text-left text-black transition-all duration-300 hover:scale-105">
                  <Apple size={30} />

                  <div>
                    <p className="text-xs font-medium">
                      Download on the
                    </p>

                    <h4 className="text-lg font-black">
                      App Store
                    </h4>
                  </div>
                </button>

                <button className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 text-left transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
                  <Play size={28} />

                  <div>
                    <p className="text-xs font-medium">
                      GET IT ON
                    </p>

                    <h4 className="text-lg font-black">
                      Google Play
                    </h4>
                  </div>
                </button>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <h3 className="text-5xl font-black">2M+</h3>

                <p className="mt-3 text-zinc-400">
                  Happy Customers Worldwide
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <h3 className="text-5xl font-black">150+</h3>

                <p className="mt-3 text-zinc-400">
                  Premium Fashion Brands
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <h3 className="text-5xl font-black">24/7</h3>

                <p className="mt-3 text-zinc-400">
                  Dedicated Customer Support
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <h3 className="text-5xl font-black">99%</h3>

                <p className="mt-3 text-zinc-400">
                  Secure Shopping Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black tracking-wide">
              NextGrid Style
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-zinc-400">
              Redefining modern fashion with premium streetwear,
              luxury collections and futuristic shopping
              experiences designed for the next generation.
            </p>

            {/* CONTACT */}
            <div className="mt-8 space-y-4 text-sm text-zinc-400">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                support@nextgridstyle.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                Bangalore, India
              </div>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Shop
            </h3>

            <ul className="space-y-4 text-zinc-400">
              <li>
                <a
                  href="/men"
                  className="transition hover:text-white"
                >
                  Men Fashion
                </a>
              </li>

              <li>
                <a
                  href="/women"
                  className="transition hover:text-white"
                >
                  Women Fashion
                </a>
              </li>

              <li>
                <a
                  href="/children"
                  className="transition hover:text-white"
                >
                  Kids Collection
                </a>
              </li>

              <li>
                <a
                  href="/luxury"
                  className="transition hover:text-white"
                >
                  Luxury Wear
                </a>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Company
            </h3>

            <ul className="space-y-4 text-zinc-400">
              <li>
                <a
                  href="/about"
                  className="transition hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/careers"
                  className="transition hover:text-white"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="/blog"
                  className="transition hover:text-white"
                >
                  Fashion Blog
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Newsletter
            </h3>

            <p className="mb-5 text-sm leading-7 text-zinc-400">
              Subscribe for exclusive offers and latest luxury
              fashion drops.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none transition focus:border-white"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all hover:scale-105"
              >
                Subscribe
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-5 text-sm text-zinc-500 md:flex-row">
          <p>
            © 2026 NextGrid Style Fashion. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </a>

            <a
              href="/cookies"
              className="transition hover:text-white"
            >
              Cookies
            </a>

            <a
              href="/support"
              className="transition hover:text-white"
            >
              Support Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}