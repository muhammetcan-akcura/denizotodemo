import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Star, Phone, MessageCircle, Truck, Shield, Clock, CheckCircle, Search, Filter, Award, Users, MapPin, Mail, Calendar, Wrench, Car, Settings, Package, ThumbsUp, Zap, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// WhatsApp ikonu için özel component
const WhatsAppIcon = ({
  className
}: {
  className?: string;
}) => <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z" />
  </svg>;
const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const popularProducts = [{
    id: 1,
    name: "Mercedes-Benz W204 Ön Fren Disk Takımı",
    brand: "Mercedes-Benz",
    category: "Fren Sistemi",
    price: "1.285 TL",
    originalPrice: "1.650 TL",
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.8,
    reviews: 89,
    partNumber: "A2044230712",
    description: "OEM kalitesinde üretilmiş, yüksek performanslı fren disk takımı"
  }, {
    id: 2,
    name: "BMW 3 Serisi Tam Sentetik Motor Yağı",
    brand: "BMW",
    category: "Motor Bakım",
    price: "485 TL",
    originalPrice: "620 TL",
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.9,
    reviews: 156,
    partNumber: "83212365946",
    description: "BMW Long Life-04 onaylı, 5W-30 viskoziteli premium motor yağı"
  }, {
    id: 3,
    name: "Volvo XC60 Gaz Amortisör Takımı",
    brand: "Volvo",
    category: "Süspansiyon Sistemi",
    price: "2.150 TL",
    originalPrice: "2.850 TL",
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.7,
    reviews: 73,
    partNumber: "31277805",
    description: "Orijinal spesifikasyonlarda üretilmiş, çift etkili gaz amortisör"
  }, {
    id: 4,
    name: "Jeep Grand Cherokee Kabin Hava Filtresi",
    brand: "Jeep",
    category: "Filtrasyon Sistemleri",
    price: "245 TL",
    originalPrice: "320 TL",
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.6,
    reviews: 92,
    partNumber: "68079744AA",
    description: "Aktif karbon katmanlı, yüksek filtrasyon kapasiteli kabin filtresi"
  }, {
    id: 5,
    name: "Land Rover Discovery Sport Fren Balata Takımı",
    brand: "Land Rover",
    category: "Fren Sistemi",
    price: "895 TL",
    originalPrice: "1.150 TL",
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.8,
    reviews: 64,
    partNumber: "LR025739",
    description: "Sertificalı OEM kalitesinde, sessiz fren performansı sağlayan balata takımı"
  }, {
    id: 6,
    name: "Mini Cooper S Turbo Şarj Ünitesi",
    brand: "Mini Cooper",
    category: "Motor Performans",
    price: "3.250 TL",
    originalPrice: "4.100 TL",
    image: "/placeholder.svg",
    inStock: true,
    rating: 4.9,
    reviews: 41,
    partNumber: "11657647003",
    description: "Fabrika garantili, yenilenmiş turbo şarj ünitesi - 24 ay garanti"
  }];
  const brands = [{
    name: "Mercedes",
    count: 1250,
    logo: "/placeholder.svg"
  }, {
    name: "BMW",
    count: 980,
    logo: "/placeholder.svg"
  }, {
    name: "Volvo",
    count: 650,
    logo: "/placeholder.svg"
  }, {
    name: "Jeep",
    count: 420,
    logo: "/placeholder.svg"
  }, {
    name: "Chrysler",
    count: 380,
    logo: "/placeholder.svg"
  }, {
    name: "Land Rover",
    count: 520,
    logo: "/placeholder.svg"
  }, {
    name: "Mini Cooper",
    count: 340,
    logo: "/placeholder.svg"
  }];
  const categories = [{
    name: "Motor Parçaları",
    count: 850,
    icon: Settings
  }, {
    name: "Fren Sistemi",
    count: 620,
    icon: Shield
  }, {
    name: "Süspansiyon",
    count: 480,
    icon: Car
  }, {
    name: "Elektrik",
    count: 390,
    icon: Zap
  }, {
    name: "Filtreleme",
    count: 320,
    icon: Package
  }, {
    name: "Kaporta",
    count: 280,
    icon: Wrench
  }];
  const testimonials = [{
    id: 1,
    name: "Ahmet Kaya",
    location: "İstanbul",
    rating: 5,
    comment: "Mercedes C180 için aldığım fren diski mükemmel kalitede. Orijinalinden farkı yok, fiyatı da çok uygun. Kesinlikle tavsiye ederim.",
    date: "2 gün önce",
    verified: true
  }, {
    id: 2,
    name: "Fatma Özkan",
    location: "Ankara",
    rating: 5,
    comment: "BMW için motor yağı aldım, aynı gün kargoya verildi. Kalite mükemmel, fiyat çok uygun. Müşteri hizmetleri de çok ilgili.",
    date: "1 hafta önce",
    verified: true
  }, {
    id: 3,
    name: "Mehmet Demir",
    location: "İzmir",
    rating: 5,
    comment: "Volvo XC60 için amortisör aldım. Montaj sonrası araç yeni gibi oldu. Garanti de var, çok memnunum.",
    date: "2 hafta önce",
    verified: true
  }, {
    id: 4,
    name: "Ayşe Yılmaz",
    location: "Bursa",
    rating: 5,
    comment: "Jeep için hava filtresi siparişi verdim. Ürün kaliteli, ambalaj güvenli, teslimat hızlıydı. Teşekkürler.",
    date: "3 hafta önce",
    verified: true
  }];
  const faqItems = [{
    question: "Ürünleriniz orijinal mi?",
    answer: "Evet, satışa sunduğumuz tüm ürünler orijinal kalitededir. OEM (Original Equipment Manufacturer) standartlarında üretilmiş parçalar sunuyoruz. Her ürün için kalite sertifikası mevcuttur."
  }, {
    question: "Garanti süresi ne kadar?",
    answer: "Tüm ürünlerimizde minimum 1 yıl garanti bulunmaktadır. Motor parçaları için 2 yıl, elektronik parçalar için 1 yıl garanti veriyoruz. Garanti kapsamında üretim hatası ve malzeme kusurları yer alır."
  }, {
    question: "Kargo ücreti ne kadar?",
    answer: "500 TL ve üzeri alışverişlerde kargo ücretsizdir. 500 TL altı siparişlerde kargo ücreti 25 TL'dir. Aynı gün kargo, 1-3 iş günü teslimat garantisi veriyoruz."
  }, {
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer: "Kredi kartı, banka kartı, havale/EFT ve kapıda ödeme seçeneklerini kabul ediyoruz. Taksit imkanları mevcuttur. Güvenli ödeme altyapısı kullanıyoruz."
  }, {
    question: "Ürün iadesi yapabilir miyim?",
    answer: "14 gün içinde koşulsuz iade hakkınız bulunur. Ürün orijinal ambalajında ve kullanılmamış olmalıdır. İade kargo ücreti tarafımızdan karşılanır."
  }, {
    question: "Montaj hizmeti veriyor musunuz?",
    answer: "Doğrudan montaj hizmeti vermiyoruz ancak güvenilir servis önerileri sunabiliriz. Ürünlerle birlikte detaylı montaj kılavuzu gönderilir."
  }, {
    question: "Stokta olmayan ürünleri temin edebilir misiniz?",
    answer: "Evet, stokta olmayan ürünleri özel olarak temin edebiliriz. Temin süresi 3-7 iş günüdür. WhatsApp üzerinden bizimle iletişime geçebilirsiniz."
  }, {
    question: "Toptan satış yapıyor musunuz?",
    answer: "Evet, oto servis ve galeri işletmeleri için toptan satış yapıyoruz. Özel fiyat listesi için iletişime geçiniz. Minimum sipariş tutarı uygulanır."
  }, {
    question: "Ürün uyumluluğunu nasıl kontrol ederim?",
    answer: "Her ürün sayfasında uyumluluk listesi bulunur. Ayrıca araç şasi numaranızı WhatsApp üzerinden gönderebilirsiniz, uzman ekibimiz uyumluluğu kontrol eder."
  }, {
    question: "Müşteri hizmetlerine nasıl ulaşabilirim?",
    answer: "7/24 WhatsApp hattımız (0532 123 45 67) aktiftir. Ayrıca telefon, e-posta ve canlı destek seçenekleri mevcuttur. Ortalama yanıt süresi 5 dakikadır."
  }];

  // Hero section images
  const heroImages = [{
    src: "/mercedes-benz-seeklogo.svg",
    alt: "Mercedes Fren Diski",
    title: "Mercedes Parçaları"
  }, {
    src: "/bmw-seeklogo.svg",
    alt: "BMW Motor Yağı",
    title: "BMW Parçaları"
  }, {
    src: "/volvo-new-2021-seeklogo.svg",
    alt: "Volvo Amortisör",
    title: "Volvo Parçaları"
  }, {
    src: "/mercedes-benz-seeklogo.svg",
    alt: "Jeep Hava Filtresi",
    title: "Jeep Parçaları"
  }];
  return <div className="min-h-screen bg-background">
    {/* Siyah-Beyaz Header */}
    <header className="bw-header sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-200 rounded-xl flex items-center justify-center shadow-lg border border-gray-600">
                  <div >
                    <img
                      src="/mercedes-benz-seeklogo.png"
                      alt="Mercedes-Benz Logo"
                      className="w-full h-full object-contain"
                    />
                  
                  </div>
                </div>

              </div>
              <div>
                <h1 className="navbar-logo text-2xl font-bold">Deniz Oto</h1>
                <p className="text-xs text-gray-300 font-medium">Oto Yedek Parça</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="navbar-link">Ürünler</Link>
              <Link to="/" className="navbar-link">Markalar</Link>
              <Link to="/" className="navbar-link">Hizmetler</Link>
              <Link to="/" className="navbar-link">Hakkımızda</Link>
              <Link to="/" className="navbar-link">İletişim</Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center space-x-2 navbar-contact">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">0532 123 45 67</span>
              </div>
            </div>

            <Button className="navbar-whatsapp">
              <WhatsAppIcon className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="outline" className="lg:hidden border-gray-300">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>

    {/* Hero Section with Effects */}
    <section className=" py-12 md:py-20 lg:py-24  overflow-hidden">
      {/* Floating Elements */}


      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content with Menu */}
          <div className="order-2 lg:order-1">
            {/* Premium Badge */}


            <h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Deniz Oto Yedek Parça
              <br />

            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Mercedes, BMW, Volvo, Jeep, Land Rover ve Mini Cooper için premium kalitede
              yedek parçalar. Otomotiv sektöründe güvenilir çözüm ortağınız.
            </p>

            {/* Tasarımlı Sol Menü */}
            <div className="hero-menu rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-blue-600" />
                Hızlı Erişim Menüsü
              </h3>
              <div className="space-y-3">
                <div className="hero-menu-item p-4 rounded-xl cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Ürün Kataloğu</h4>
                        <p className="text-sm text-gray-500">5000+ ürün seçeneği</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className="hero-menu-item p-4 rounded-xl cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Stok Durumu</h4>
                        <p className="text-sm text-gray-500">Canlı stok takibi</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className="hero-menu-item p-4 rounded-xl cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Truck className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Hızlı Teslimat</h4>
                        <p className="text-sm text-gray-500">24 saat içinde kargo</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className="hero-menu-item p-4 rounded-xl cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Garanti</h4>
                        <p className="text-sm text-gray-500">2 yıl garanti</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="order-1 lg:order-2 hero-images grid grid-cols-2 gap-3 md:gap-4 mb-8 lg:mb-0">
            {heroImages.map((image, index) => <Card key={index} className="auto-card overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-foreground text-center text-sm md:text-base">{image.title}</h3>
              </div>
            </Card>)}
          </div>
        </div>
      </div>
    </section>

    {/* Premium Search Section */}
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ürün Arama Merkezi
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              5000+ ürün arasından aradığınız yedek parçayı hızlıca bulun.
              Marka, kategori ve özelliklere göre filtreleme yapabilirsiniz.
            </p>
          </div>

          {/* Main Search Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12">
            {/* Search Input */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-800 mb-4">
                Ürün Adı veya Parça Numarası
              </label>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <Input placeholder="Örnek: fren diski, motor yağı, amortisör, 1234567890..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-16 pr-6 py-6 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-0 bg-gray-50 hover:bg-white transition-all duration-300" />
              </div>
            </div>

            {/* Filter Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Brand Filter */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3">
                  Marka Seçimi
                </label>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger className="h-14 text-base border-2 border-gray-200 rounded-xl bg-gray-50 hover:bg-white transition-all duration-300">
                    <SelectValue placeholder="Tüm Markalar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Tüm Markalar</SelectItem>
                    {brands.map(brand => <SelectItem key={brand.name} value={brand.name}>
                      <div className="flex items-center space-x-2">
                        <Car className="w-4 h-4" />
                        <span>{brand.name}</span>
                        <span className="text-gray-500 text-sm">({brand.count})</span>
                      </div>
                    </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3">
                  Kategori Seçimi
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-14 text-base border-2 border-gray-200 rounded-xl bg-gray-50 hover:bg-white transition-all duration-300">
                    <SelectValue placeholder="Tüm Kategoriler" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Tüm Kategoriler</SelectItem>
                    {categories.map(category => {
                      const IconComponent = category.icon;
                      return <SelectItem key={category.name} value={category.name}>
                        <div className="flex items-center space-x-2">
                          <IconComponent className="w-4 h-4" />
                          <span>{category.name}</span>
                          <span className="text-gray-500 text-sm">({category.count})</span>
                        </div>
                      </SelectItem>;
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3">
                  Fiyat Aralığı
                </label>
                <Select>
                  <SelectTrigger className="h-14 text-base border-2 border-gray-200 rounded-xl bg-gray-50 hover:bg-white transition-all duration-300">
                    <SelectValue placeholder="Tüm Fiyatlar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tüm Fiyatlar</SelectItem>
                    <SelectItem value="0-100">0 - 100 TL</SelectItem>
                    <SelectItem value="100-500">100 - 500 TL</SelectItem>
                    <SelectItem value="500-1000">500 - 1.000 TL</SelectItem>
                    <SelectItem value="1000+">1.000 TL +</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Search className="w-6 h-6 mr-3" />
                Ürünleri Ara
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-gray-400 px-12 py-6 text-lg rounded-2xl transition-all duration-300">
                <Filter className="w-6 h-6 mr-3" />
                Filtreleri Temizle
              </Button>
            </div>

            {/* Quick Search Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-base font-semibold text-gray-700 mb-4">Popüler Aramalar:</p>
              <div className="flex flex-wrap gap-3">
                {['Fren Diski', 'Motor Yağı', 'Amortisör', 'Fren Balata', 'Filtre', 'Lastik', 'Akü', 'Faro'].map(tag => <Button key={tag} variant="outline" size="sm" className="rounded-full border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  {tag}
                </Button>)}
              </div>
            </div>
          </div>

          {/* Search Stats */}

        </div>
      </div>
    </section>

    {/* Popular Products - Moved to top for prominence */}
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Öne Çıkan Ürünlerimiz</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            En kaliteli ve en çok tercih edilen yedek parçalar
          </p>
        </div>
        <div className="product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {popularProducts.slice(0, 6).map(product => <Card key={product.id} className="auto-card hover:shadow-xl transition-all duration-300 group">
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img src={product.image} alt={product.name} className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-3 md:top-4 left-3 md:left-4">
                  <Badge variant="secondary" className="bg-primary/90 text-white border-none text-xs md:text-sm">
                    {product.brand}
                  </Badge>
                </div>
                <div className="absolute top-3 md:top-4 right-3 md:right-4">
                  <Badge variant="destructive" className="bg-red-500/90 text-white border-none text-xs md:text-sm">
                    %{Math.round((parseInt(product.originalPrice.replace(' TL', '')) - parseInt(product.price.replace(' TL', ''))) / parseInt(product.originalPrice.replace(' TL', '')) * 100)} İndirim
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                  {product.category}
                </Badge>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                  <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                </div>
              </div>
              <CardTitle className="text-base md:text-lg text-foreground mb-2 line-clamp-2">{product.name}</CardTitle>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xl md:text-2xl font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through ml-2">{product.originalPrice}</span>
                </div>
                <div className="flex items-center">
                  {product.inStock ? <>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600 font-medium">Stokta</span>
                  </> : <span className="text-sm text-red-500 font-medium">Stokta Yok</span>}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Parça No: {product.partNumber}</p>
              <div className="flex gap-2">
                <Link to={`/urun/${product.id}`} className="flex-1">
                  <Button className="w-full auto-button-primary text-sm md:text-base">
                    Detayları Gör
                  </Button>
                </Link>
                <Button className="whatsapp-button-small px-3">
                  <WhatsAppIcon className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>)}
        </div>
        <div className="text-center mt-8 md:mt-12">
          <Button size="lg" variant="outline" className="border-border text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
            Tüm Ürünleri Gör
          </Button>
        </div>
      </div>
    </section>

    {/* Brands Section */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-foreground mb-4">Desteklenen Markalar</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium otomobil markaları için geniş ürün yelpazesi
          </p>
        </div>
        <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-6">
          {brands.map(brand => <Card key={brand.name} className="auto-card text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{brand.name}</h3>
              <p className="text-sm text-muted-foreground">{brand.count} ürün</p>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </section>

    {/* Categories Section */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-foreground mb-4">Ürün Kategorileri</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Araç bakım ve onarımı için ihtiyacınız olan tüm parçalar
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => {
            const IconComponent = category.icon;
            return <Card key={category.name} className="auto-card hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{category.name}</h3>
                    <p className="text-muted-foreground">{category.count} ürün mevcut</p>
                  </div>
                </div>
              </CardContent>
            </Card>;
          })}
        </div>
      </div>
    </section>


    {/* Testimonials */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-foreground mb-4">Müşteri Yorumları</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Binlerce mutlu müşterimizin deneyimleri
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(testimonial => <Card key={testimonial.id} className="auto-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />)}
                </div>
                {testimonial.verified && <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20 text-xs">
                  Doğrulanmış
                </Badge>}
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">"{testimonial.comment}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {testimonial.location}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">{testimonial.date}</p>
              </div>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-foreground mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Merak ettiğiniz tüm soruların yanıtları burada
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-primary text-left py-6">
                <span className="font-semibold">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-display text-foreground mb-6">
          Hemen Sipariş Verin, Aynı Gün Kargolayalim!
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Kaliteli oto yedek parçalar için doğru adrestesiniz.
          Uzman ekibimizle iletişime geçin, size en uygun çözümü bulalım.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="auto-button-primary text-lg px-8 py-4">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp ile İletişim
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-border">
            <Phone className="w-5 h-5 mr-2" />
            Hemen Ara: 0532 123 45 67
          </Button>
        </div>
      </div>
    </section>

    {/* Siyah-Beyaz Footer */}
    <footer className="bw-footer text-white py-20">
      <div className="automotive-pattern absolute inset-0 opacity-50"></div>
      <div className="container mx-auto px-4 footer-section">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-200 rounded-xl flex items-center justify-center shadow-lg border border-gray-600">
                <div >
                  <img
                    src="/mercedes-benz-seeklogo.png"
                    alt="Mercedes-Benz Logo"
                    className="w-full h-full object-contain"
                  />
                
                </div>
              </div>
              <div>
                <h3 className="footer-logo text-3xl font-bold mb-1">Deniz Oto</h3>
                <p className="text-gray-400 text-sm">Yedek Parça Uzmanı</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Mercedes, BMW, Volvo, Jeep, Land Rover ve Mini Cooper için premium kalitede
              yedek parçalar. Otomotiv sektöründe güvenilir çözüm ortağınız.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="whatsapp-button text-lg px-8 py-4">
                <WhatsAppIcon className="w-5 h-5 mr-3" />
                WhatsApp İletişim
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-3" />
                0532 123 45 67
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Hızlı Erişim</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="footer-link text-lg">Ürünlerimiz</Link></li>
              <li><Link to="/" className="footer-link text-lg">Markalar</Link></li>
              <li><Link to="/" className="footer-link text-lg">Hizmetlerimiz</Link></li>
              <li><Link to="/" className="footer-link text-lg">Hakkımızda</Link></li>
              <li><Link to="/" className="footer-link text-lg">Garanti Koşulları</Link></li>
              <li><Link to="/" className="footer-link text-lg">İletişim</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">İletişim</h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="footer-icon">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Telefon</p>
                  <p className="text-white font-medium">0532 123 45 67</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="footer-icon">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">E-posta</p>
                  <p className="text-white font-medium">info@denizoto.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="footer-icon">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Adres</p>
                  <p className="text-white font-medium">İstanbul, Türkiye</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="footer-icon">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Destek</p>
                  <p className="text-white font-medium">7/24 Aktif</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Line */}


        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-lg">
                &copy; 2024 <span className="text-white font-semibold"> Deniz Oto</span>. Tüm hakları saklıdır.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Otomotiv sektöründe güvenilir çözüm ortağınız
              </p>
            </div>

            <div className="flex items-center space-x-6">



            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>;
};
export default Index;