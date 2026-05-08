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
    "Luxury modern fashion platform for men, women and children built with Next.js, Tailwind CSS and Framer Motion.",

  keywords: [
    "Fashion",
    "Luxury Fashion",
    "Modern Clothing",
    "Men Fashion",
    "Women Fashion",
    "Children Fashion",
    "Next.js Fashion Website",
    "NextGrid",
  ],

  authors: [
    {
      name: "NextGrid Studio",
    },
  ],

  creator: "NextGrid Studio",

  metadataBase: new URL("https://nextgridstyle.com"),

  openGraph: {
    title: "NextGrid Style Fashion",
    description:
      "Premium modern fashion experience for men, women and children.",

    url: "https://nextgridstyle.com",

    siteName: "NextGrid Style Fashion",

    images: [
      {
        url: "/og-image.jpg",
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

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
          font-sans
          bg-black
          text-white
          antialiased
          overflow-x-hidden
          selection:bg-white
          selection:text-black
        `}
      >
        {/* GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* TOP GRADIENT */}
          <div
            className="
              absolute
              top-[-300px]
              left-[-300px]
              w-[700px]
              h-[700px]
              bg-zinc-800/20
              rounded-full
              blur-[160px]
            "
          />

          {/* RIGHT GLOW */}
          <div
            className="
              absolute
              top-[20%]
              right-[-250px]
              w-[600px]
              h-[600px]
              bg-white/5
              rounded-full
              blur-[180px]
            "
          />

          {/* BOTTOM GLOW */}
          <div
            className="
              absolute
              bottom-[-300px]
              left-1/2
              -translate-x-1/2
              w-[900px]
              h-[500px]
              bg-zinc-700/10
              rounded-full
              blur-[160px]
            "
          />
        </div>

        {/* LOADING LINE */}
        <div
          className="
            fixed
            top-0
            left-0
            w-full
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
            z-[100]
          "
        />

        {/* WEBSITE CONTAINER */}
        <div className="relative min-h-screen flex flex-col">
          {/* NAVBAR */}
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="flex-1 pt-[90px]">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />
        </div>

        {/* CUSTOM CURSOR GLOW */}
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
              top-1/2
              left-1/2
              w-[400px]
              h-[400px]
              -translate-x-1/2
              -translate-y-1/2
              bg-white/5
              rounded-full
              blur-[120px]
            "
          />
        </div>
      </body>
    </html>
  );
}