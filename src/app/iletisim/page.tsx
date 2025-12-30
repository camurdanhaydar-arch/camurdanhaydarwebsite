"use client";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Image from "next/image";

const branches = [
  { name: "Mezitli Subesi", address: "Mezitli Mah. GMK Bulvari No:123, Mezitli / Mersin", phone: "(0324) 123 45 67", hours: "Pzt - Cmt: 09:00 - 19:00" },
  { name: "Pozcu Subesi", address: "Pozcu Mah. Istiklal Cad. No:456, Yenisehir / Mersin", phone: "(0324) 987 65 43", hours: "Pzt - Cmt: 09:00 - 19:00" },
];

export default function IletisimPage() {
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" alt="Iletisim" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 to-brand-dark/80" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Iletisim</h1>
          <p className="text-xl text-white/90 max-w-2xl">Sorulariniz icin bize ulasin, size en kisa surede donus yapalim.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <SectionHeader subtitle="Bize Yazin" title="Iletisim Formu" align="left" />
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Mesajiniz Alindi!</h3>
                  <p className="text-green-700">En kisa surede sizinle iletisime gececegiz.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-brand-cyan hover:text-brand-azure font-semibold">Yeni Mesaj Gonder</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" placeholder="Adiniz Soyadiniz *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan" />
                  <input type="tel" placeholder="Telefon Numaraniz *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan" />
                  <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan bg-white">
                    <option value="">Konu Secin *</option>
                    <option value="satis">Satis / Fiyat Bilgisi</option>
                    <option value="montaj">Montaj Talebi</option>
                    <option value="bakim">Bakim / Servis</option>
                    <option value="ariza">Ariza Bildirimi</option>
                    <option value="diger">Diger</option>
                  </select>
                  <textarea placeholder="Mesajiniz *" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan resize-none" />
                  <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-azure disabled:bg-gray-400 text-white px-8 py-4 rounded-xl font-semibold transition-all">
                    {loading ? "Gonderiliyor..." : <><Send size={20} /><span>Mesaj Gonder</span></>}
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <SectionHeader subtitle="Iletisim Bilgileri" title="Bize Ulasin" align="left" />
              <div className="space-y-6">
                {branches.map((branch, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-brand-dark mb-4">{branch.name}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3"><MapPin size={20} className="text-brand-cyan flex-shrink-0 mt-0.5" /><span className="text-gray-600">{branch.address}</span></li>
                      <li className="flex items-center gap-3"><Phone size={20} className="text-brand-cyan" /><a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="text-gray-600 hover:text-brand-cyan transition-colors">{branch.phone}</a></li>
                      <li className="flex items-center gap-3"><Clock size={20} className="text-brand-cyan" /><span className="text-gray-600">{branch.hours}</span></li>
                    </ul>
                  </div>
                ))}
                <div className="bg-brand-dark rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Genel Iletisim</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><Mail size={20} className="text-brand-cyan" /><a href="mailto:info@sefaiklimlendirme.com" className="hover:text-brand-cyan transition-colors">info@sefaiklimlendirme.com</a></li>
                    <li className="flex items-center gap-3"><Phone size={20} className="text-brand-cyan" /><a href="tel:+905001234567" className="hover:text-brand-cyan transition-colors">WhatsApp: 0500 123 45 67</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader subtitle="Konumlarimiz" title="Subelerimizi Ziyaret Edin" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image src={index === 0 ? "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" : "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"} alt={branch.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-brand-dark">{branch.name}</h3>
                  <p className="text-gray-600 text-sm">{branch.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
