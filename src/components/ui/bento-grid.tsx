import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[14rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  header,
}: {
  className?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-[#1a1a18]/[0.08] bg-white/70 p-6",
        "flex flex-col justify-between gap-3",
        "hover:-translate-y-[3px] hover:border-[#1a1a18]/20 transition-all duration-300",
        className
      )}
    >
      {header && <div className="mb-2">{header}</div>}
      <div className="flex flex-col gap-2 group-hover:translate-x-1 transition-transform duration-200">
        {icon && (
          <div className="w-8 h-8 text-[#1a1a18]">{icon}</div>
        )}
        <h3 className="font-serif text-xl font-semibold text-[#2a2a28] tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[#6b6b66] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
