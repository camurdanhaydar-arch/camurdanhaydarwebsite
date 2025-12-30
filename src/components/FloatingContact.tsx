"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Instagram, Facebook, X } from "lucide-react";
import { cn } from "@/lib/utils";

const contactButtons = [
  { id: "whatsapp", icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/905001234567", bgColor: "bg-green-500 hover:bg-green-600", hoverLabel: "WhatsApp" },
  { id: "phone", icon: Phone, label: "Telefon", href: "tel:+903241234567", bgColor: "bg-brand-azure hover:bg-brand-cyan", hoverLabel: "Hemen Arayin" },
  { id: "instagram", icon: Instagram, label: "Instagram", href: "https://instagram.com", bgColor: "bg-gradient-to-br from-purple-500 to-pink-500", hoverLabel: "Instagram" },
  { id: "facebook", icon: Facebook, label: "Facebook", href: "https://facebook.com", bgColor: "bg-blue-600 hover:bg-blue-700", hoverLabel: "Facebook" },
];

export default function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="flex flex-col gap-3">
            {contactButtons.map((button, index) => (
              <motion.a key={button.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ delay: index * 0.05 }} href={button.href} target={button.id !== "phone" ? "_blank" : undefined} rel="noopener noreferrer" className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110", button.bgColor)}>
                <button.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button onClick={() => setIsExpanded(!isExpanded)} className={cn("w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300", isExpanded ? "bg-brand-dark" : "bg-brand-cyan hover:bg-brand-azure")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>{isExpanded ? <X size={26} /> : <MessageCircle size={26} />}</motion.div>
      </motion.button>
      {!isExpanded && <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-brand-cyan animate-ping opacity-30 pointer-events-none" />}
    </div>
  );
}
