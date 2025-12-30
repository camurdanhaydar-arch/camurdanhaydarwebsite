"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Snowflake, Shield, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const slides = [
  { 
    id: 1, 
    title: "Yetkili Daikin Bayii", 
    subtitle: "Mersin Guvenilir Klima Uzmani", 
    description: "Bireysel ve ticari klima cozumlerinde 15 yili askin tecrube ile hizmetinizdeyiz.", 
    cta: "Urunleri Incele", 
    ctaLink: "/urunler", 
    icon: Snowflake, 
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80",
  },
  { 
    id: 2, 
    title: "Profesyonel Montaj", 
    subtitle: "Uzman Ekip, Garantili Iscilik", 
    description: "Deneyimli teknik ekibimiz ile hizli ve guvenilir montaj hizmeti sunuyoruz.", 
    cta: "Bize Ulasin", 
    ctaLink: "/iletisim", 
    icon: Wrench, 
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80",
  },
  { 
    id: 3, 
    title: "Bakim & Servis", 
    subtitle: "7/24 Teknik Destek", 
    description: "Periyodik bakim ve acil servis hizmetlerimiz ile klimaniz her zaman en iyi performansta.", 
    cta: "Servis Talebi", 
    ctaLink: "/iletisim", 
    icon: Shield, 
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => { 
    const timer = setInterval(() => { 
      setCurrentSlide((prev) => (prev + 1) % slides.length); 
    }, 6000); 
    return () => clearInterval(timer); 
  }, []);
  
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => index === currentSlide && (
          <motion.div 
            key={slide.id} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.7 }} 
            className="absolute inset-0"
          >
            <div className="absolute inset-0">
              <Image src={slide.image} alt={slide.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/40" />
            </div>
            <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
              <div className="max-w-2xl">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-6">
                  <slide.icon size={48} className="text-brand-cyan" strokeWidth={1.5} />
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-brand-cyan font-medium text-base md:text-lg tracking-wide uppercase mb-4">
                  {slide.subtitle}
                </motion.p>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                  {slide.title}
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                  {slide.description}
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4">
                  <a href={slide.ctaLink} className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-azure text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-brand-cyan/30">
                    {slide.cta}
                  </a>
                  <a href="tel:+903241234567" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                    Hemen Ara
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Navigation */}
      <button onClick={prevSlide} className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 border border-white/20">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 border border-white/20">
        <ChevronRight size={24} />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className={cn("h-2 rounded-full transition-all duration-300", index === currentSlide ? "bg-brand-cyan w-8" : "bg-white/40 w-2 hover:bg-white/60")} />
        ))}
      </div>
    </section>
  );
}
