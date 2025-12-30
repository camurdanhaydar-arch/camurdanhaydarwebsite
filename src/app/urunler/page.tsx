"use client";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Filter, Search, MessageCircle, Info, Snowflake, Building2, Layers, Wind } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const categories = [
  { id: "all", label: "Tumu", icon: Filter },
  { id: "bireysel", label: "Bireysel", icon: Snowflake },
  { id: "ticari", label: "Ticari", icon: Building2 },
  { id: "multisplit", label: "Multi Split", icon: Layers },
  { id: "hava-temizleyici", label: "Hava Temizleyici", icon: Wind },
];

const products = [
  { id: "1", title: "Daikin Perfera FTXM-R", category: "bireysel", image: "https://images.unsplash.com/photo-1631545806609-3c480b5de4bd?w=500&q=80", description: "Yuksek enerji verimliligi ve sessiz calisma ozelligi ile ev kullanimi icin ideal.", is_featured: true },
  { id: "2", title: "Daikin Stylish FTXA-A", category: "bireysel", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80", description: "Sik tasarimi ve akilli ozellikleri ile modern evlerin vazgecilmezi.", is_featured: true },
  { id: "3", title: "Daikin Emura FTXJ-A", category: "bireysel", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", description: "Odullu tasarimi ile estetik ve performansi bir arada sunar.", is_featured: false },
  { id: "4", title: "Daikin Sky Air FBA-A", category: "ticari", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80", description: "Ticari alanlar icin guclu performans ve enerji tasarrufu.", is_featured: false },
  { id: "5", title: "Daikin VRV IV", category: "ticari", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&q=80", description: "Buyuk ticari binalar icin merkezi iklimlendirme cozumu.", is_featured: true },
  { id: "6", title: "Daikin Multi Split 3MXM-N", category: "multisplit", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80", description: "Tek dis unite ile birden fazla odayi sogutur.", is_featured: true },
  { id: "7", title: "Daikin Multi Split 4MXM-N", category: "multisplit", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80", description: "4 farkli ic uniteye kadar baglanti imkani.", is_featured: false },
  { id: "8", title: "Daikin MC55W Hava Temizleyici", category: "hava-temizleyici", image: "https://images.unsplash.com/photo-1527089969932-4e6c1c1e4f94?w=500&q=80", description: "Streamer teknolojisi ile havadaki zararli maddeleri yok eder.", is_featured: false },
];

export default function UrunlerPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1631545806609-3c480b5de4bd?w=1920&q=80" alt="Urunler" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 to-brand-dark/80" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Urunlerimiz</h1>
          <p className="text-xl text-white/90 max-w-2xl">Daikin genis urun yelpazesinden ihtiyaciniza en uygun klimayi kesfedin.</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="font-bold text-brand-dark mb-4">Kategoriler</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all", selectedCategory === category.id ? "bg-brand-cyan text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100")}>
                      <category.icon size={20} />
                      <span className="font-medium">{category.label}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="font-bold text-brand-dark mb-4">Ara</h3>
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Urun ara..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan" />
                  </div>
                </div>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600"><span className="font-semibold text-brand-dark">{filteredProducts.length}</span> urun bulundu</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-52 overflow-hidden">
                      <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      {product.is_featured && <span className="absolute top-3 left-3 bg-brand-cyan text-white text-xs font-semibold px-3 py-1 rounded-full">One Cikan</span>}
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-azure transition-colors">{product.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex gap-3">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-azure text-white px-4 py-2.5 rounded-xl font-medium transition-colors">
                          <Info size={18} /><span>Detay</span>
                        </button>
                        <a href={`https://wa.me/905001234567?text=Merhaba, ${product.title} hakkinda bilgi almak istiyorum.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors">
                          <MessageCircle size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeader subtitle="Yardima mi ihtiyaciniz var?" title="Size Uygun Klimayi Birlikte Secelim" description="Uzman ekibimiz, ihtiyaciniza en uygun urunu secmenizde size yardimci olsun." />
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/iletisim" className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-azure text-white px-8 py-4 rounded-xl font-semibold transition-all">Ucretsiz Kesif Talep Et</a>
            <a href="tel:+903241234567" className="inline-flex items-center gap-2 bg-brand-dark hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all">Hemen Ara</a>
          </div>
        </div>
      </section>
    </div>
  );
}
