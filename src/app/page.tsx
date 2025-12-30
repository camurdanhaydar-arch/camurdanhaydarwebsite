import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { Snowflake, Building2, Layers, Wind, Shield, Wrench, Clock, CreditCard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { id: "bireysel", title: "Bireysel Klimalar", description: "Ev ve kucuk ofisler icin ideal cozumler", icon: Snowflake, href: "/urunler?category=bireysel", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80" },
  { id: "ticari", title: "Ticari Klimalar", description: "Is yerleri ve buyuk alanlar icin", icon: Building2, href: "/urunler?category=ticari", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { id: "multisplit", title: "Multi Split Sistemler", description: "Coklu oda cozumleri", icon: Layers, href: "/urunler?category=multisplit", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { id: "hava-temizleyici", title: "Hava Temizleyicileri", description: "Temiz ve saglikli hava", icon: Wind, href: "/urunler?category=hava-temizleyici", image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=600&q=80" },
];

const features = [
  { icon: Shield, title: "Garantili Urunler", description: "Tum urunlerimiz resmi Daikin garantisi altindadir." },
  { icon: Wrench, title: "Profesyonel Montaj", description: "Uzman ekibimizle hizli ve guvenilir montaj hizmeti." },
  { icon: Clock, title: "7/24 Servis Destegi", description: "Acil durumlar icin kesintisiz teknik destek." },
];

const products = [
  { id: 1, name: "Daikin Perfera FTXM-R", category: "Bireysel", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80" },
  { id: 2, name: "Daikin Stylish FTXA-A", category: "Bireysel", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: 3, name: "Daikin Sky Air FBA-A", category: "Ticari", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" },
  { id: 4, name: "Daikin VRV IV", category: "Ticari", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80" },
];

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            subtitle="Urun Kategorileri" 
            title="Ihtiyaciniza Uygun Cozumler" 
            description="Daikin genis urun yelpazesinden size en uygun klimayi secin." 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={category.href} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden">
                  <Image src={category.image} alt={category.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <category.icon size={28} className="text-brand-cyan" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-brand-dark mb-2">{category.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{category.description}</p>
                  <span className="text-brand-azure font-medium text-sm group-hover:text-brand-cyan transition-colors inline-flex items-center gap-1">
                    Incele <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            subtitle="Neden Biz?" 
            title="Guvenilir Hizmet Anlayisi" 
            description="15 yili askin tecrubemizle musteri memnuniyetini on planda tutuyoruz." 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-10 rounded-2xl bg-white border border-gray-100 hover:border-brand-cyan/20 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-cyan to-brand-azure rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-cyan/20">
                  <feature.icon size={28} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-dark mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader 
            subtitle="One Cikan Urunler" 
            title="Populer Klimalar" 
            description="En cok tercih edilen Daikin modelleri" 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-52 overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">{product.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-brand-dark mb-4">{product.name}</h3>
                  <button className="w-full bg-brand-cyan hover:bg-brand-azure text-white py-3 rounded-xl font-medium transition-colors">
                    Detayli Bilgi
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/urunler" className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-azure text-white px-8 py-4 rounded-xl font-medium transition-all duration-300">
              Tum Urunleri Gor
            </Link>
          </div>
        </div>
      </section>

      {/* Branch - Mezitli */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-azure font-medium text-sm uppercase tracking-[0.2em] mb-4 block">Subelerimiz</span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-6">Mezitli Subemiz</h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">Mezitli deki ana subemizde genis urun yelpazemizi inceleyebilir, uzman ekibimizden birebir danismanlik alabilirsiniz.</p>
              <ul className="space-y-4 mb-10">
                {["Genis showroom alani", "Ucretsiz otopark", "Uzman teknik kadro"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />{item}
                  </li>
                ))}
              </ul>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-azure text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
                Yol Tarifi Al
              </a>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Mezitli Sube" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Branch - Pozcu */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80" alt="Pozcu Sube" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-brand-azure font-medium text-sm uppercase tracking-[0.2em] mb-4 block">Subelerimiz</span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-6">Pozcu Subemiz</h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">Pozcu daki subemiz ile Mersin in merkezinde size daha yakiniz. Hizli servis ve satis hizmetlerimizden yararlanin.</p>
              <ul className="space-y-4 mb-10">
                {["Merkezi konum", "Hizli servis imkani", "Kolay ulasim"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />{item}
                  </li>
                ))}
              </ul>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-azure text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Banner */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <CreditCard size={40} className="text-brand-cyan mx-auto mb-5" strokeWidth={1.5} />
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">Tum Kredi Kartlarina Taksit Imkani</h2>
          <p className="text-gray-400 mb-10">Anlasmali bankalarimizla uygun taksit secenekleri</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Ziraat Bankasi", "Garanti BBVA", "Is Bankasi", "Yapi Kredi", "Akbank", "QNB Finansbank"].map((bank, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-lg text-white/70 text-sm font-medium border border-white/10">{bank}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-8">Mersin in Guvenilir Klima Uzmani</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Sefa Iklimlendirme olarak, Mersin ve cevresinde 15 yili askin suredir klima satis, montaj, bakim ve onarim hizmetleri sunmaktayiz. Daikin yetkili bayii olarak, dunya standartlarinda urunleri sizlere ulastiriyoruz.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Bireysel klimalardan ticari VRF sistemlerine, multi split cozumlerden hava temizleyicilere kadar genis urun yelpazemizle her ihtiyaca uygun cozumler sunuyoruz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
