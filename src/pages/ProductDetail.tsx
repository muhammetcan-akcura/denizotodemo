import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Phone,
  MessageCircle,
  Truck,
  Shield,
  CheckCircle,
  Heart,
  Share2,
  ArrowLeft,
  Package,
  Clock,
  Award,
  Users
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  // Mock product data - gerçek uygulamada API'den gelecek
  const product = {
    id: 1,
    name: "Mercedes W204 Fren Diski",
    brand: "Mercedes",
    model: "W204 C-Class",
    year: "2007-2014",
    partNumber: "A2044230712",
    price: "850 TL",
    originalPrice: "1.200 TL",
    discount: "29%",
    images: [
      "/bmw-seeklogo.svg",
      "/jeep-wordmark-seeklogo.svg",
      "/mercedes-benz-seeklogo.svg",
      "/volvo-new-2021-seeklogo.svg"
    ],
    inStock: true,
    stockCount: 15,
    rating: 4.8,
    reviewCount: 127,
    description: "Orijinal kalitede Mercedes W204 C-Class için ön fren diski. Yüksek karbon çelik malzemeden üretilmiş, uzun ömürlü ve güvenilir fren performansı sağlar.",
    features: [
      "Orijinal kalite garantisi",
      "Yüksek karbon çelik malzeme",
      "Mükemmel fren performansı",
      "Uzun ömürlü kullanım",
      "Kolay montaj",
      "1 yıl garanti"
    ],
    specifications: {
      "Marka": "Mercedes-Benz",
      "Model": "W204 C-Class",
      "Yıl": "2007-2014",
      "Parça Numarası": "A2044230712",
      "Malzeme": "Yüksek Karbon Çelik",
      "Çap": "300mm",
      "Kalınlık": "25mm",
      "Delik Sayısı": "5",
      "Ağırlık": "8.5 kg"
    },
    compatibility: [
      "Mercedes C180 (2007-2014)",
      "Mercedes C200 (2007-2014)",
      "Mercedes C220 CDI (2007-2014)",
      "Mercedes C250 (2007-2014)",
      "Mercedes C300 (2007-2014)",
      "Mercedes C350 (2007-2014)"
    ]
  };

  const reviews = [
    {
      id: 1,
      name: "Ahmet K.",
      rating: 5,
      date: "15 Kasım 2024",
      comment: "Mükemmel kalite, orijinalinden farkı yok. Montajı çok kolay oldu. Kesinlikle tavsiye ederim."
    },
    {
      id: 2,
      name: "Mehmet S.",
      rating: 5,
      date: "8 Kasım 2024",
      comment: "Hızlı teslimat, kaliteli ürün. Fiyat performans açısından çok iyi. Teşekkürler."
    },
    {
      id: 3,
      name: "Fatma Y.",
      rating: 4,
      date: "2 Kasım 2024",
      comment: "Ürün güzel ama ambalaj biraz zayıftı. Yine de memnunum, kaliteli bir ürün."
    }
  ];

  const faqItems = [
    {
      question: "Bu ürün aracıma uygun mu?",
      answer: "Ürün Mercedes W204 C-Class (2007-2014) modelleri için uyumludur. Aracınızın model yılını ve motor tipini kontrol ederek uyumluluğu doğrulayabilirsiniz."
    },
    {
      question: "Garanti süresi ne kadar?",
      answer: "Tüm ürünlerimizde 1 yıl garanti bulunmaktadır. Garanti kapsamında üretim hatası ve malzeme kusurları yer alır."
    },
    {
      question: "Kargo süresi ne kadar?",
      answer: "Stokta bulunan ürünler aynı gün kargoya verilir. Teslimat süresi 1-3 iş günüdür. Ücretsiz kargo avantajından yararlanabilirsiniz."
    },
    {
      question: "Montaj hizmeti var mı?",
      answer: "Montaj hizmeti vermiyoruz ancak güvenilir servis önerileri sunabiliriz. Ürünle birlikte montaj kılavuzu gönderilir."
    },
    {
      question: "İade politikanız nedir?",
      answer: "14 gün içinde koşulsuz iade hakkınız bulunur. Ürün orijinal ambalajında ve kullanılmamış olmalıdır."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground hover:text-foreground transition-colors">Geri Dön</span>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <h1 className="text-xl font-display text-foreground">OtoYedekParça</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-border">
                <Phone className="w-4 h-4 mr-2" />
                0532 123 45 67
              </Button>
              <Button className="auto-button-primary">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square bg-muted rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    src={image}
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Breadcrumb */}
            <div className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
              <span className="mx-2">/</span>
              <Link to="/urunler" className="hover:text-primary transition-colors">Ürünler</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{product.brand}</span>
            </div>

            {/* Product Title & Rating */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {product.brand}
                </Badge>
                <Badge variant="outline" className="border-green-500/20 text-green-600 bg-green-500/10">
                  Orijinal Kalite
                </Badge>
              </div>
              <h1 className="text-3xl font-display text-foreground mb-2">{product.name}</h1>
              <p className="text-muted-foreground mb-4">{product.model} • {product.year}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviewCount} değerlendirme)
                  </span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-muted/50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                    <Badge variant="destructive" className="bg-red-500/10 text-red-600 border-red-500/20">
                      {product.discount} İndirim
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">KDV Dahil • Ücretsiz Kargo</p>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {product.inStock ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-green-600 font-medium">Stokta ({product.stockCount} adet)</span>
                    </>
                  ) : (
                    <span className="text-red-500 font-medium">Stokta Yok</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-border">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-border">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full auto-button-primary text-lg py-6" disabled={!product.inStock}>
                  <Package className="w-5 h-5 mr-2" />
                  Sepete Ekle
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="border-border">
                    <Phone className="w-4 h-4 mr-2" />
                    Hemen Ara
                  </Button>
                  <Button className="auto-button-secondary">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Truck className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Hızlı Teslimat</p>
                <p className="text-xs text-muted-foreground">1-3 İş Günü</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">1 Yıl Garanti</p>
                <p className="text-xs text-muted-foreground">Kalite Güvencesi</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Orijinal Kalite</p>
                <p className="text-xs text-muted-foreground">Sertifikalı</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-muted/50">
              <TabsTrigger value="description" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Açıklama
              </TabsTrigger>
              <TabsTrigger value="specifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Teknik Özellikler
              </TabsTrigger>
              <TabsTrigger value="compatibility" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Uyumluluk
              </TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Değerlendirmeler
              </TabsTrigger>
              <TabsTrigger value="faq" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                S.S.S.
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <Card className="auto-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Ürün Açıklaması</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Özellikler:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card className="auto-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Teknik Özellikler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-border last:border-b-0">
                        <span className="font-medium text-foreground">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compatibility" className="mt-8">
              <Card className="auto-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Uyumlu Araç Modelleri</CardTitle>
                  <CardDescription>Bu ürün aşağıdaki araç modellerine uyumludur:</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {product.compatibility.map((model, index) => (
                      <div key={index} className="flex items-center p-3 bg-muted/30 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-foreground">{model}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card className="auto-card">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Müşteri Değerlendirmeleri
                  </CardTitle>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2 text-lg font-semibold text-foreground">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({product.reviewCount} değerlendirme)</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-foreground">{review.name}</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faq" className="mt-8">
              <Card className="auto-card">
                <CardHeader>
                  <CardTitle className="text-foreground">Sıkça Sorulan Sorular</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-foreground hover:text-primary">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-display text-foreground mb-4">Hemen Sipariş Verin</h3>
          <p className="text-muted-foreground mb-6">
            Kaliteli oto yedek parçalar için doğru adrestesiniz. Hızlı teslimat ve garanti ile güvenle alışveriş yapın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="auto-button-primary text-lg px-8 py-4">
              <Package className="w-5 h-5 mr-2" />
              Sepete Ekle
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-border">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp ile Sor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;