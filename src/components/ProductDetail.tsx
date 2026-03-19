import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Check,
  Mail,
  Phone,
  FileText,
  Ruler,
  Battery,
  Thermometer,
  Droplets,
  Wifi,
  Signal,
  Shield,
  Zap,
  ChevronRight,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { productsData } from '@/data/products';

interface ProductDetailProps {
  productId: string;
}

const ProductDetail = ({ productId }: ProductDetailProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const product = productsData[productId] ?? null;

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold text-[#2c3e50] mb-4">Product Not Found</h1>
          <a href="/" className="text-[#54b9ff] hover:underline">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  const relatedProductsList = product.relatedProducts.map((id) => productsData[id]).filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#2c3e50] via-[#1a252f] to-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <a href="/" className="hover:text-[#54b9ff] transition-colors">Home</a>
              <ChevronRight className="w-4 h-4" />
              <a href="/#products" className="hover:text-[#54b9ff] transition-colors">Products</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{product.name}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 bg-[#54b9ff]/20 text-[#54b9ff] text-sm font-semibold rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{product.name}</h1>
                <p className="text-xl text-[#54b9ff] mb-6">{product.subtitle}</p>
                <p className="text-white/70 text-lg leading-relaxed mb-8">{product.description}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {product.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white/80 text-sm"
                    >
                      <Wifi className="w-4 h-4 text-[#54b9ff]" />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 px-6 py-3 bg-[#54b9ff] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#3aa8f5]"
                  >
                    <Mail className="w-5 h-5" />
                    Request Quote
                  </a>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20">
                        <FileText className="w-5 h-5" />
                        Download Datasheet
                      </button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Download Datasheet</DialogTitle>
                      </DialogHeader>
                      <p className="text-gray-600">
                        The datasheet for {product.name} will be available soon.
                        Please contact us for more information.
                      </p>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#54b9ff]/20 to-[#ff8c42]/10 rounded-3xl blur-3xl" />
                <img src={product.image} alt={product.name} className="relative w-full rounded-2xl shadow-2xl shadow-black/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start bg-white p-1 rounded-xl mb-8 flex-wrap h-auto gap-2">
              <TabsTrigger value="overview" className="px-6 py-3 data-[state=active]:bg-[#54b9ff] data-[state=active]:text-white">Overview</TabsTrigger>
              <TabsTrigger value="specs" className="px-6 py-3 data-[state=active]:bg-[#54b9ff] data-[state=active]:text-white">Specifications</TabsTrigger>
              <TabsTrigger value="features" className="px-6 py-3 data-[state=active]:bg-[#54b9ff] data-[state=active]:text-white">Features</TabsTrigger>
              <TabsTrigger value="applications" className="px-6 py-3 data-[state=active]:bg-[#54b9ff] data-[state=active]:text-white">Applications</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-[#2c3e50] mb-6">Product Description</h2>
                    <div className="prose prose-gray max-w-none">
                      {product.longDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-[#e8f4fc] rounded-xl">
                      <h3 className="font-bold text-[#2c3e50] mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-[#54b9ff]" />
                        Key Benefits
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Battery autonomy: 1-3 years</li>
                        <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />IP66 waterproof rating</li>
                        <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Data redundancy with internal memory</li>
                        <li className="flex items-start gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />Bluetooth/NFC configuration</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-[#fff3e8] rounded-xl">
                      <h3 className="font-bold text-[#2c3e50] mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-[#ff8c42]" />
                        Certifications
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• IP66 Protection Rating</li>
                        <li>• Railway Approval (DIN45545-2)</li>
                        <li>• V0 Flame Retardant</li>
                        <li>• UV Resistant</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specs" className="mt-0">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-8">Technical Specifications</h2>
                <div className="space-y-8">
                  {product.specs.map((specCategory, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-[#54b9ff] mb-4 pb-2 border-b border-gray-100">{specCategory.category}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {specCategory.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                            <span className="text-gray-600 text-sm">{item.label}</span>
                            <span className="text-[#2c3e50] font-medium text-sm text-right">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-0">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-8">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-[#e8f4fc] transition-colors duration-300">
                      <div className="w-10 h-10 bg-[#54b9ff] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="applications" className="mt-0">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-8">Typical Applications</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.applications.map((application, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-[#e8f4fc] to-white rounded-xl border border-[#54b9ff]/10 hover:border-[#54b9ff]/30 transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 bg-[#54b9ff]/10 rounded-xl flex items-center justify-center mb-4">
                        <Ruler className="w-6 h-6 text-[#54b9ff]" />
                      </div>
                      <p className="text-[#2c3e50] font-medium">{application}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-8 bg-[#2c3e50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3"><Battery className="w-8 h-8 text-[#54b9ff]" /><div><div className="text-white font-bold">1-3 Years</div><div className="text-white/60 text-sm">Battery Life</div></div></div>
            <div className="flex items-center gap-3"><Droplets className="w-8 h-8 text-[#54b9ff]" /><div><div className="text-white font-bold">IP66</div><div className="text-white/60 text-sm">Protection</div></div></div>
            <div className="flex items-center gap-3"><Thermometer className="w-8 h-8 text-[#54b9ff]" /><div><div className="text-white font-bold">Integrated</div><div className="text-white/60 text-sm">Temp. Sensor</div></div></div>
            <div className="flex items-center gap-3"><Signal className="w-8 h-8 text-[#54b9ff]" /><div><div className="text-white font-bold">Multiple</div><div className="text-white/60 text-sm">Protocols</div></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-8">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProductsList.map((relatedProduct) => (
              <a key={relatedProduct.id} href={`/product/${relatedProduct.id}`} className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#54b9ff] font-semibold uppercase tracking-wider">{relatedProduct.category}</span>
                  <h3 className="text-lg font-bold text-[#2c3e50] mt-2 group-hover:text-[#54b9ff] transition-colors">{relatedProduct.name}</h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{relatedProduct.description}</p>
                  <div className="flex items-center gap-2 mt-4 text-[#54b9ff] font-medium text-sm">View Details<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gradient-to-br from-[#2c3e50] via-[#1a252f] to-[#0d1117]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in {product.name}?</h2>
          <p className="text-white/70 mb-8">Contact our team for a personalized quote and technical consultation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@advarna.fr" className="flex items-center gap-2 px-8 py-4 bg-[#54b9ff] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#3aa8f5]"><Mail className="w-5 h-5" />Email Us</a>
            <a href="tel:+33123456789" className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20"><Phone className="w-5 h-5" />Call Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
