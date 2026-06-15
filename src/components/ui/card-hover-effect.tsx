"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface HoverItem {
  title: string;
  description: string;
  link: string;
  badge?: string;
  meta?: { role?: string; result?: string };
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-3", className)}>
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#f0ede6]/[0.06] block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 h-full rounded-xl border border-[#f0ede6]/[0.08] bg-[#f0ede6]/[0.03] p-6 flex flex-col gap-3 group-hover:border-[#f0ede6]/20 transition-colors duration-300">
            {item.badge && (
              <span className="self-start text-[0.62rem] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#f0ede6]/10 text-[#f0ede6]/60">
                {item.badge}
              </span>
            )}
            <h3 className="font-serif text-2xl font-semibold text-[#f0ede6] leading-tight tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm text-[#f0ede6]/55 leading-relaxed flex-1">
              {item.description}
            </p>
            {item.meta && (
              <div className="pt-3 border-t border-[#f0ede6]/[0.07] flex flex-col gap-1">
                {item.meta.role && (
                  <p className="text-xs text-[#f0ede6]/40">
                    <span className="font-semibold text-[#f0ede6]/60">Rol</span>: {item.meta.role}
                  </p>
                )}
                {item.meta.result && (
                  <p className="text-xs text-[#f0ede6]/40">
                    <span className="font-semibold text-[#f0ede6]/60">Resultado</span>: {item.meta.result}
                  </p>
                )}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
