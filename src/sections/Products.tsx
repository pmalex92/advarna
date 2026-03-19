import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Wifi, Battery, Thermometer, Droplets, Ruler, Activity, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { productList } from '@/data/products';

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleProduct = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <section id="products" ref={sectionRef} className="relative py-24 lg:py-32 bg-[#f8fafc] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#54b9ff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#ff8c42]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[#e8f4fc] text-[#54b9ff] text-sm font-semibold rounded-full mb-4">Our Products</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c3e50] mb-6">IoT <span className="text-[#54b9ff]">Solutions</span></h2>
          <p className="text-lg text-gray-600 leading-relaxed">We offer a comprehensive range of wireless monitoring solutions for structural and geotechnical applications. Our products interface with the best sensors on the market using cutting-edge communication technologies.</p>
        </div>

        <div className="space-y-4">
          {productList.map((product, index) => (
            <div key={product.id} className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
              <div className="p-6 cursor-pointer transition-colors duration-300 hover:bg-gray-50" onClick={() => toggleProduct(product.id)}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="w-full lg:w-48 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-[#e8f4fc] text-[#54b9ff] text-xs font-semibold rounded-full">{product.category}</span>
                      <div className="flex gap-2 flex-wrap">
                        {product.technologies.map((tech) => (
                          <span key={tech} className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"><Wifi className="w-3 h-3" />{tech}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3e50] mb-1">{product.name}</h3>
                    <p className="text-[#54b9ff] font-medium text-sm mb-2">{product.subtitle}</p>
                    <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a href={`/product/${product.id}`} onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 px-4 py-2 bg-[#2c3e50] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-[#1a252f]">View Page<ExternalLink className="w-4 h-4" /></a>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 px-4 py-2 bg-[#54b9ff] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-[#3aa8f5]">Quick View<ArrowRight className="w-4 h-4" /></button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader><DialogTitle className="text-2xl font-bold text-[#2c3e50]">{product.name}</DialogTitle></DialogHeader>
                        <div className="mt-4">
                          <div className="aspect-video rounded-xl overflow-hidden mb-6"><img src={product.image} alt={product.name} className="w-full h-full object-cover" /></div>
                          <p className="text-gray-600 mb-6">{product.description}</p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-bold text-[#2c3e50] mb-3 flex items-center gap-2"><Activity className="w-5 h-5 text-[#54b9ff]" />Features</h4>
                              <ul className="space-y-2">
                                {product.features.map((feature, i) => (<li key={i} className="flex items-start gap-2 text-sm text-gray-600"><span className="w-1.5 h-1.5 bg-[#54b9ff] rounded-full mt-2 flex-shrink-0" />{feature}</li>))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-bold text-[#2c3e50] mb-3 flex items-center gap-2"><Ruler className="w-5 h-5 text-[#54b9ff]" />Specifications</h4>
                              <div className="space-y-2">
                                {product.specs[0]?.items?.slice(0, 6).map((spec, i) => (<div key={i} className="flex justify-between text-sm"><span className="text-gray-500">{spec.label}</span><span className="text-[#2c3e50] font-medium">{spec.value}</span></div>))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-[#e8f4fc] hover:text-[#54b9ff]">{expandedProduct === product.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}</button>
                  </div>
                </div>
              </div>

              {expandedProduct === product.id && (
                <div className="px-6 pb-6 border-t border-gray-100 animate-slide-up">
                  <div className="pt-6 grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-[#2c3e50] mb-4 flex items-center gap-2"><Activity className="w-5 h-5 text-[#54b9ff]" />Key Features</h4>
                      <ul className="space-y-3">{product.features.map((feature, i) => (<li key={i} className="flex items-start gap-3 text-sm text-gray-600"><span className="w-2 h-2 bg-[#54b9ff] rounded-full mt-1.5 flex-shrink-0" />{feature}</li>))}</ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#2c3e50] mb-4 flex items-center gap-2"><Ruler className="w-5 h-5 text-[#54b9ff]" />Technical Specifications</h4>
                      <div className="grid grid-cols-2 gap-3">{product.specs[0]?.items?.slice(0, 6).map((spec, i) => (<div key={i} className="p-3 bg-gray-50 rounded-lg"><div className="text-xs text-gray-500 mb-1">{spec.label}</div><div className="text-sm font-semibold text-[#2c3e50]">{spec.value}</div></div>))}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#e8f4fc] rounded-lg"><Battery className="w-4 h-4 text-[#54b9ff]" /><span className="text-sm text-[#2c3e50] font-medium">1-3 years autonomy</span></div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#fff3e8] rounded-lg"><Thermometer className="w-4 h-4 text-[#ff8c42]" /><span className="text-sm text-[#2c3e50] font-medium">Temp. sensor included</span></div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#e8f4fc] rounded-lg"><Droplets className="w-4 h-4 text-[#54b9ff]" /><span className="text-sm text-[#2c3e50] font-medium">IP66 waterproof</span></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-600 mb-4">Need a custom solution for your project?</p>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-8 py-4 bg-[#2c3e50] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#1a252f] hover:shadow-lg">Contact us<ArrowRight className="w-5 h-5" /></a>
        </div>
      </div>
    </section>
  );
};

export default Products;
