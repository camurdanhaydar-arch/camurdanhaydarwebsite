import SectionHeader from "@/components/SectionHeader";
import { Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

const pressItems = [
  { id: "1", title: "Sefa Iklimlendirme, Daikin in En Iyi Bayii Odulunu Aldi", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80", summary: "2023 yilinda gosterdigi ustun performans ile Daikin Turkiye tarafindan Yilin En Iyi Bayii odulune layik gorulduk.", date: "15 Aralik 2023" },
  { id: "2", title: "Yeni Pozcu Subemiz Hizmete Acildi", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", summary: "Mersin in merkezinde, Pozcu daki yeni subemiz ile musterilerimize daha yakiniz.", date: "1 Mart 2023" },
  { id: "3", title: "Enerji Verimliligi Semineri Duzenlendi", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", summary: "Daikin isbirligi ile duzenlenen seminerde, enerji tasarruflu klima kullanimi hakkinda bilgiler paylasildi.", date: "20 Haziran 2023" },
  { id: "4", title: "15. Yil Kutlamasi", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80", summary: "Sefa Iklimlendirme olarak 15. yilimizi musterilerimiz ve is ortaklarimizla birlikte kutladik.", date: "10 Eylul 2023" },
  { id: "5", title: "Yesil Bina Projesine Destek", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", summary: "Mersin deki yesil bina projesine VRF sistem kurulumu ile destek verdik.", date: "5 Kasim 2023" },
  { id: "6", title: "Teknik Ekip Egitimi Tamamlandi", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", summary: "Teknik ekibimiz, Daikin Akademi de ileri seviye egitim programini basariyla tamamladi.", date: "25 Temmuz 2023" },
];

export default function BasindaBizPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80" alt="Basinda Biz" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 to-brand-dark/80" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Basinda Biz</h1>
          <p className="text-xl text-white/90 max-w-2xl">Sefa Iklimlendirme hakkindaki haberler ve duyurular.</p>
        </div>
      </section>

      {/* Press Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader subtitle="Haberler & Duyurular" title="Guncel Gelismeler" description="Sirketimiz hakkindaki son haberler ve etkinlikler" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressItems.map((item) => (
              <article key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink size={32} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-azure transition-colors line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.summary}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-azure font-semibold text-sm transition-colors">
                    Devamini Oku <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <SectionHeader subtitle="Medya" title="Basin Kiti" description="Logo, gorseller ve kurumsal bilgiler icin basin kitimizi indirebilirsiniz." />
          <a href="#" className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-azure text-white px-8 py-4 rounded-xl font-semibold transition-all">Basin Kitini Indir</a>
        </div>
      </section>
    </div>
  );
}
