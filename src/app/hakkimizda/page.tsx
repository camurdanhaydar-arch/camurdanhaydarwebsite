import SectionHeader from "@/components/SectionHeader";
import { Award, Users, Target, Eye, CheckCircle } from "lucide-react";
import Image from "next/image";

const milestones = [
  { year: "2008", title: "Kurulus", description: "Sefa Iklimlendirme nin temelleri atildi." },
  { year: "2012", title: "Daikin Bayiligi", description: "Resmi Daikin yetkili bayii olduk." },
  { year: "2018", title: "Pozcu Subesi", description: "Ikinci subemizi Pozcu da actik." },
  { year: "2023", title: "15. Yil", description: "15 yili askin tecrube ile hizmetinizdeyiz." },
];

const team = [
  { name: "Ahmet Yilmaz", role: "Genel Mudur", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Mehmet Demir", role: "Teknik Mudur", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Ayse Kaya", role: "Satis Muduru", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
];

export default function HakkimizdaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Hakkimizda" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 to-brand-dark/80" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Hakkimizda</h1>
          <p className="text-xl text-white/90 max-w-2xl">15 yili askin tecrubemizle Mersin in guvenilir klima uzmani olarak hizmet veriyoruz.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader subtitle="Hikayemiz" title="Koklu Gecmis, Guclu Gelecek" align="left" />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>2008 yilinda Mersin de kurulan Sefa Iklimlendirme, iklimlendirme sektorunde kaliteli hizmet anlayisiyla yola cikmistir. Kurulusumuzdan bu yana musteri memnuniyetini on planda tutarak, guvenilir ve profesyonel hizmet sunmayi ilke edindik.</p>
                <p>2012 yilinda Daikin yetkili bayii olarak, dunya standartlarinda urunleri Mersinli musterilerimizle bulusturmaya basladik. Bugun Mezitli ve Pozcu daki iki subemizle, genis bir musteri kitlesine hizmet vermekteyiz.</p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80" alt="Sirket" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-6"><Eye size={32} className="text-brand-cyan" /></div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Vizyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">Turkiye nin onde gelen iklimlendirme firmalarindan biri olarak, yenilikci cozumler ve ustun hizmet kalitesiyle sektorde oncu olmak.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-brand-azure/10 rounded-xl flex items-center justify-center mb-6"><Target size={32} className="text-brand-azure" /></div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Misyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">Musterilerimize kaliteli urunler ve profesyonel hizmet sunarak, yasam ve calisma alanlarinda konforlu bir iklim ortami saglamak.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader subtitle="Kilometre Taslari" title="Gelisim Surecimiz" />
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-cyan rounded-full flex items-center justify-center text-white font-bold shadow-lg">{milestone.year}</div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-full bg-brand-cyan/30 mt-2" />}
                </div>
                <div className="pt-3">
                  <h4 className="text-xl font-bold text-brand-dark mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader subtitle="Ekibimiz" title="Profesyonel Kadromuz" description="Deneyimli ve uzman ekibimizle her zaman yaninizdayiz" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-1">{member.name}</h4>
                <p className="text-brand-cyan font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader subtitle="Belgelerimiz" title="Sertifikalar" description="Kalite ve guvenilirligimizin resmi onaylari" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Daikin Yetkili Bayi Sertifikasi", "TSE Hizmet Yeterlilik Belgesi", "ISO 9001 Kalite Yonetim Sistemi", "Mesleki Yeterlilik Belgesi"].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <Award size={48} className="text-brand-cyan mx-auto mb-4" />
                <h4 className="font-semibold text-brand-dark">{cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader subtitle="Neden Bizi Secmelisiniz?" title="Farkimiz" className="[&_h2]:text-white [&_span]:text-brand-cyan [&_p]:text-gray-400" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["15 yili askin sektor tecrubesi", "Daikin yetkili bayi guvencesi", "Uzman ve sertifikali teknik ekip", "7/24 servis destegi", "Uygun taksit secenekleri", "Ucretsiz kesif hizmeti"].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                <CheckCircle size={24} className="text-brand-cyan flex-shrink-0" />
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
