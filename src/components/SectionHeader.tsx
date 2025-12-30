"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export default function SectionHeader({ title, subtitle, description, align = "center", className, dark = false }: SectionHeaderProps) {
  const alignmentClasses = { left: "text-left", center: "text-center mx-auto", right: "text-right ml-auto" };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6 }} 
      className={cn("max-w-2xl mb-12", alignmentClasses[align], className)}
    >
      {subtitle && (
        <span className={cn(
          "inline-block font-medium text-sm uppercase tracking-[0.2em] mb-4",
          dark ? "text-brand-cyan" : "text-brand-azure"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5",
        dark ? "text-white" : "text-brand-dark"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg leading-relaxed",
          dark ? "text-gray-300" : "text-gray-600"
        )}>
          {description}
        </p>
      )}
      <div className={cn(
        "w-16 h-1 rounded-full mt-6",
        "bg-gradient-to-r from-brand-cyan to-brand-azure",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto"
      )} />
    </motion.div>
  );
}
