"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  image: string;
  href: string;
}

export default function CategoryCard({
  title,
  image,
  href,
}: Props) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -12 }}
        transition={{
          duration: 0.4,
        }}
        className="group relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900 cursor-pointer"
      >
        {/* IMAGE */}
        <div className="relative h-[500px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 w-full p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-400">
                Collection
              </p>

              <h3 className="text-3xl font-bold text-white">
                {title}
              </h3>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:rotate-45">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        {/* GLOW */}
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-white/5" />
        </div>
      </motion.div>
    </Link>
  );
}