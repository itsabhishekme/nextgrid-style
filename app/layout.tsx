import type { Metadata } from "next";

import "./globals.css";

import { Poppins } from "next/font/google";

import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],

  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],

  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "NextGrid Style Fashion",

    template: "%s | NextGrid Style Fashion",
  },

  description:
    "Luxury futuristic fashion platform for men, women and children powered by Next.js, Tailwind CSS, Framer Motion and Capacitor mobile apps.",

  keywords: [
    "NextGrid",
    "Luxury Fashion",
    "Fashion Store",
    "Modern Clothing",
    "Streetwear",
    "Designer Fashion",
    "Men Fashion",
    "Women Fashion",
    "Children Fashion",
    "Next.js Fashion Website",
    "Premium Fashion App",
    "Fashion Ecommerce",
    "Luxury Clothing",
    "Futuristic Fashion",
  ],

  authors: [
    {
      name: "NextGrid Studio",
    },
  ],

  creator: "NextGrid Studio",

  publisher: "NextGrid Studio",

  metadataBase: new URL(
    "https://nextgridstyle.com"
  ),

  openGraph: {
    title: "NextGrid Style Fashion",

    description:
      "Premium luxury fashion experience for men, women and children.",

    url: "https://nextgridstyle.com",

    siteName: "NextGrid Style Fashion",

    images: [
      {
        url: "/banners/hero-banner.jpg",

        width: 1200,

        height: 630,

        alt: "NextGrid Style Fashion",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "NextGrid Style Fashion",

    description:
      "Luxury modern fashion platform powered by Next.js.",

    images: ["/banners/hero-banner.jpg"],
  },

  robots: {
    index: true,

    follow: true,
  },

  icons: {
    icon: "/favicon.ico",

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`
          ${poppins.variable}
          relative
          overflow-x-hidden
          bg-black
          font-sans
          text-white
          antialiased
          selection:bg-white
          selection:text-black
        `}
      >
        {/* GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* GRID */}
          <div
            className="
              absolute
              inset-0
              opacity-[0.03]
            "
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",

              backgroundSize: "80px 80px",
            }}
          />

          {/* TOP LEFT GLOW */}
          <div
            className="
              absolute
              left-[-300px]
              top-[-300px]
              h-[700px]
              w-[700px]
              rounded-full
              bg-pink-500/10
              blur-[180px]
            "
          />

          {/* RIGHT GLOW */}
          <div
            className="
              absolute
              right-[-250px]
              top-[20%]
              h-[600px]
              w-[600px]
              rounded-full
              bg-purple-500/10
              blur-[180px]
            "
          />

          {/* CENTER LIGHT */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.04]
              blur-[140px]
            "
          />

          {/* BOTTOM GLOW */}
          <div
            className="
              absolute
              bottom-[-300px]
              left-1/2
              h-[700px]
              w-[900px]
              -translate-x-1/2
              rounded-full
              bg-cyan-500/10
              blur-[180px]
            "
          />

          {/* EXTRA LIGHT */}
          <div
            className="
              absolute
              bottom-0
              right-0
              h-[400px]
              w-[400px]
              rounded-full
              bg-blue-500/10
              blur-[140px]
            "
          />
        </div>

        {/* TOP LOADING BAR */}
        <div
          className="
            fixed
            left-0
            top-0
            z-[120]
            h-[2px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
          "
        />

        {/* WEBSITE WRAPPER */}
        <div
          className="
            relative
            flex
            min-h-screen
            flex-col
          "
        >
          {/* NAVBAR */}
          <Navbar />

          {/* MAIN CONTENT */}
          <main
            className="
              relative
              z-10
              flex-1
              pt-[90px]
            "
          >
            {children}
          </main>

          {/* FOOTER */}
          <Footer />
        </div>

        {/* CUSTOM CURSOR LIGHT */}
        <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-[999]
            hidden
            lg:block
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[450px]
              w-[450px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.03]
              blur-[140px]
            "
          />
        </div>

        {/* MOBILE APP SAFE AREA */}
        <div
          className="
            fixed
            bottom-0
            left-0
            z-[1]
            h-[env(safe-area-inset-bottom)]
            w-full
            bg-black
          "
        />

        {/* NOISE TEXTURE */}
        <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-[1]
            opacity-[0.02]
            mix-blend-soft-light
          "
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        {/* SIDE LIGHT */}
        <div
          className="
            pointer-events-none
            fixed
            left-0
            top-0
            z-[1]
            h-full
            w-[1px]
            bg-gradient-to-b
            from-transparent
            via-white/20
            to-transparent
          "
        />

        <div
          className="
            pointer-events-none
            fixed
            right-0
            top-0
            z-[1]
            h-full
            w-[1px]
            bg-gradient-to-b
            from-transparent
            via-white/20
            to-transparent
          "
        />

        {/* FLOATING DECORATION */}
        <div
          className="
            pointer-events-none
            fixed
            bottom-20
            right-10
            z-[5]
            hidden
            h-28
            w-28
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-3xl
            lg:block
          "
        />

        {/* SMALL GLOW */}
        <div
          className="
            pointer-events-none
            fixed
            left-10
            top-40
            z-[1]
            hidden
            h-20
            w-20
            rounded-full
            bg-pink-500/10
            blur-[60px]
            lg:block
          "
        />

        {/* ANOTHER GLOW */}
        <div
          className="
            pointer-events-none
            fixed
            bottom-40
            left-20
            z-[1]
            hidden
            h-24
            w-24
            rounded-full
            bg-cyan-500/10
            blur-[70px]
            lg:block
          "
        />
      </body>
    </html>
  );
}