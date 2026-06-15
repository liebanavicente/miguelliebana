"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-[92svh] bg-[#0c0c0a] text-[#f0ede6] overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "[--aurora:repeating-linear-gradient(100deg,#1a1a10_0%,#2a2510_15%,#1a1a18_30%,#10181a_50%,#1a1510_70%)]",
            "[background-image:var(--aurora)]",
            "[background-size:300%_200%]",
            "[background-position:50%_50%]",
            "after:content-[''] after:absolute after:inset-0",
            "after:[background-image:var(--aurora)]",
            "after:[background-size:200%_100%]",
            "after:animate-aurora",
            "after:mix-blend-screen",
            "after:opacity-40",
            "pointer-events-none absolute -inset-[10px] opacity-60 will-change-transform animate-aurora",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_50%_100%,black_20%,transparent_75%)]"
          )}
        />
      </div>
      {children}
    </div>
  );
};
