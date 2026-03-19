import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, Wifi, Battery, Thermometer, Droplets, Ruler, Activity, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  technologies: string[];
}

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const products: Product[] = [
    {
      id: 'obsessio-x1',
      name: 'OBSESSIO X1',
      subtitle: 'Potentiometric Displacement',
      category: 'Displacement Range',
      description: 'OBSESSIO X1 is a connected sensor designed to monitor the evolution of cracks, expansion joints, and other phenomena related to structural displacements. It interfaces with all potentiometric displacement sensors available on the market.',
      image: '/images/product-obsessio-x1.jpg',
      features: [
        'Compatible with wide variety of potentiometric displacement sensors',
        'Battery autonomy: 1 to 3 years (depending on acquisition frequency)',
        'Remote temperature sensor integrated',
        'Waterproof IP66 compliant',
        'Data redundancy with integrated internal memory',
        'Local configuration via smartphone (Bluetooth/NFC)',
      ],
      specs: [
        { label: 'Dimensions', value: '98 x 64 x 35 mm' },
        { label: 'Weight', value: '0.2 kg' },
        { label: 'Protection', value: 'IP66' },
        { label: 'Temperature Range', value: '-20°C to +60°C' },
        { label: 'Power', value: '3.6V Battery or 4.8-32V DC' },
        { label: 'Precision', value: '≤ 20 µm' },
      ],
      technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    },
    {
      id: 'obsessio-x2',
      name: 'OBSESSIO X2',
      subtitle: 'LVDT Displacement',
      category: 'Displacement Range',
      description: 'OBSESSIO X2 is a connected sensor designed to monitor crack evolution and structural displacements. It interfaces with LVDT (Linear Variable Differential Transformer) sensors known for their high precision, low temperature disturbance, and long-term reliability.',
      image: '/images/product-obsessio-x2.jpg',
      features: [
        'High precision LVDT sensor interface',
        'Low temperature disturbance',
        'Great long-term reliability',
        'Battery autonomy: 1 to 3 years',
        'Remote temperature sensor',
        'Waterproof IP66 compliant',
      ],
      specs: [
        { label: 'Dimensions', value: '98 x 64 x 35 mm' },
        { label: 'Weight', value: '0.2 kg' },
        { label: 'Protection', value: 'IP66' },
        { label: 'Temperature Range', value: '-20°C to +60°C' },
        { label: 'Resolution', value: '± 0.01 µm' },
        { label: 'Precision', value: '≤ 5 µm' },
      ],
      technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    },
    {
      id: 'pack-fissure',
      name: 'PACK FISSURE AUTONOME',
      subtitle: 'Complete Crack Monitoring Kit',
      category: 'Complete Solutions',
      description: 'The Autonomous Crack Pack is the ideal entry-level solution to ensure reliable and continuous crack monitoring on your structures. The pack includes OBSESSIO X1 module, radio card, potentiometric sensor, temperature probe, and 1-year subscription.',
      image: '/images/product-pack-fissure.jpg',
      features: [
        'Turnkey solution for crack monitoring',
        'Includes all necessary components',
        '1-year SIGFOX or LoRaWAN subscription included',
        'Complete metrological verification certificate',
        'Battery autonomy: 1 to 3 years',
        'Easy installation and configuration',
      ],
      specs: [
        { label: 'Sensor Type', value: 'MIRAN KTR2' },
        { label: 'Stroke', value: '25mm or 50mm' },
        { label: 'Precision', value: '≤ 50 µm' },
        { label: 'Linearity', value: '± 0.1% FS' },
        { label: 'Subscription', value: '1 year included' },
        { label: 'Warranty', value: '2 years' },
      ],
      technologies: ['SIGFOX', 'LoRaWAN'],
    },
    {
      id: 'distancio',
      name: 'DISTANCIO',
      subtitle: 'Laser Distance & Inclinometer',
      category: 'Displacement Range',
      description: 'DISTANCIO is a 2-in-1 sensor that enables precise non-contact measurements over a range of up to 150 meters. It features a high-performance laser and a dual-axis MEMS inclinometer for complementary tilt measurement.',
      image: '/images/product-distancio.jpg',
      features: [
        '2-in-1 sensor (Laser distance + MEMS inclinometer)',
        'Non-contact measurement up to 150 meters',
        'High precision laser with ±1mm accuracy',
        'Battery autonomy: 1 to 3 years',
        'Waterproof IP66 compliant',
        'Data redundancy with internal memory',
      ],
      specs: [
        { label: 'Dimensions', value: '170 x 111 x 61 mm' },
        { label: 'Weight', value: '0.65 kg' },
        { label: 'Laser Range', value: '0.05 to 150m' },
        { label: 'Precision', value: '± 1.0 mm' },
        { label: 'Inclinometer', value: '± 90° range' },
        { label: 'Resolution', value: '0.1 mm' },
      ],
      technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    },
    {
      id: 'horizio',
      name: 'HORIZIO XY',
      subtitle: 'Capacitive Inclinometer 2-Axis',
      category: 'Inclinometry Range',
      description: 'HORIZIO measures inclination phenomena of structures (facades, bridge piers...), slope sliding, railway uplift and settlement. It features high-precision capacitive sensors with 0.001° resolution and very low temperature sensitivity.',
      image: '/images/product-horizio.jpg',
      features: [
        'High precision measurement with 0.001° resolution',
        'Very low temperature variation',
        'No hysteresis on output signal',
        'Angle independent of local gravitational acceleration',
        'Insensitive to magnetic field interference',
        'Waterproof IP66 compliant',
      ],
      specs: [
        { label: 'Dimensions', value: '98 x 60 x 45 mm' },
        { label: 'Weight', value: '0.4 kg' },
        { label: 'Range', value: '± 10°' },
        { label: 'Resolution', value: '0.001°' },
        { label: 'Linearity', value: '< 0.1% FS' },
        { label: 'Temp. Drift', value: '< ±0.001°/K' },
      ],
      technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    },
    {
      id: 'extenso',
      name: 'EXTENSO X1 / X3',
      subtitle: 'Strain Gauge Module',
      category: 'Extensometry Range',
      description: 'EXTENSO measures mechanical deformations of a material or structure using strain gauges. It can interface with cold-bonded gauges, hot-welded spot gauges, and different wiring types (quarter bridge, half bridge, full bridge).',
      image: '/images/product-extenso.jpg',
      features: [
        'High precision for material deformations',
        'High sensitivity for micro-deformation measurement',
        'Compatible with wide range of gauge types',
        'Adjustable gauge factor',
        'Battery autonomy: 1 to 3 years',
        'Waterproof IP66 compliant',
      ],
      specs: [
        { label: 'Dimensions', value: '98 x 64 x 35 mm' },
        { label: 'Weight', value: '0.2 kg' },
        { label: 'Bridge Types', value: '1/4, 1/2, Full' },
        { label: 'Resolution', value: '0.001°' },
        { label: 'Temperature', value: '-40°C to +85°C' },
        { label: 'Protection', value: 'IP66' },
      ],
      technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    },
    {
      id: 'thx',
      name: 'Module THx',
      subtitle: 'Temperature & Humidity',
      category: 'Environment Range',
      description: 'The THx module is a connected sensor designed to continuously monitor temperature and humidity conditions. It interfaces with two probe ranges: standard TH50 and premium HMP110 from VAISALA®, offering excellent metrological performance.',
      image: '/images/product-thx.jpg',
      features: [
        'Two ranges available according to needs',
        'Premium VAISALA® HMP110 option',
        'Battery autonomy: 1 to 3 years',
        'Waterproof IP66 compliant',
        'Data redundancy with internal memory',
        'Local configuration via smartphone',
      ],
      specs: [
        { label: 'Dimensions', value: '98 x 64 x 35 mm' },
        { label: 'Weight', value: '0.2 kg' },
        { label: 'TH50 Precision', value: '± 3% RH, ± 0.1°C' },
        { label: 'HMP110 Precision', value: '± 1.5% RH, ± 0.2°C' },
        { label: 'Temperature', value: '-20°C to +60°C' },
        { label: 'Protection', value: 'IP66' },
      ],
      technologies: ['SIGFOX', 'LoRaWAN', 'LoRa P2P'],
    },
  ];

  const toggleProduct = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#f8fafc] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#54b9ff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#ff8c42]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[#e8f4fc] text-[#54b9ff] text-sm font-semibold rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c3e50] mb-6">
            IoT <span className="text-[#54b9ff]">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We offer a comprehensive range of wireless monitoring solutions for structural 
            and geotechnical applications. Our products interface with the best sensors on 
            the market using cutting-edge communication technologies.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Product Header - Always visible */}
              <div
                className="p-6 cursor-pointer transition-colors duration-300 hover:bg-gray-50"
                onClick={() => toggleProduct(product.id)}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Product Image */}
                  <div className="w-full lg:w-48 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-[#e8f4fc] text-[#54b9ff] text-xs font-semibold rounded-full">
                        {product.category}
                      </span>
                      <div className="flex gap-2">
                        {product.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            <Wifi className="w-3 h-3" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3e50] mb-1">{product.name}</h3>
                    <p className="text-[#54b9ff] font-medium text-sm mb-2">{product.subtitle}</p>
                    <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                  </div>

                  {/* Expand Button */}
                  <div className="flex items-center gap-3">
                    <Link
                      to={`/product/${product.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-4 py-2 bg-[#2c3e50] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-[#1a252f]"
                    >
                      View Page
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 px-4 py-2 bg-[#54b9ff] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-[#3aa8f5]"
                        >
                          Quick View
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-[#2c3e50]">
                            {product.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <div className="aspect-video rounded-xl overflow-hidden mb-6">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-gray-600 mb-6">{product.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-bold text-[#2c3e50] mb-3 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-[#54b9ff]" />
                                Features
                              </h4>
                              <ul className="space-y-2">
                                {product.features.map((feature, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="w-1.5 h-1.5 bg-[#54b9ff] rounded-full mt-2 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-bold text-[#2c3e50] mb-3 flex items-center gap-2">
                                <Ruler className="w-5 h-5 text-[#54b9ff]" />
                                Specifications
                              </h4>
                              <div className="space-y-2">
                                {product.specs.map((spec, i) => (
                                  <div key={i} className="flex justify-between text-sm">
                                    <span className="text-gray-500">{spec.label}</span>
                                    <span className="text-[#2c3e50] font-medium">{spec.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <button className="p-2 rounded-lg bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-[#e8f4fc] hover:text-[#54b9ff]">
                      {expandedProduct === product.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedProduct === product.id && (
                <div className="px-6 pb-6 border-t border-gray-100 animate-slide-up">
                  <div className="pt-6 grid md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="font-bold text-[#2c3e50] mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-[#54b9ff]" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="w-2 h-2 bg-[#54b9ff] rounded-full mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specs */}
                    <div>
                      <h4 className="font-bold text-[#2c3e50] mb-4 flex items-center gap-2">
                        <Ruler className="w-5 h-5 text-[#54b9ff]" />
                        Technical Specifications
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {product.specs.map((spec, i) => (
                          <div key={i} className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-xs text-gray-500 mb-1">{spec.label}</div>
                            <div className="text-sm font-semibold text-[#2c3e50]">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#e8f4fc] rounded-lg">
                      <Battery className="w-4 h-4 text-[#54b9ff]" />
                      <span className="text-sm text-[#2c3e50] font-medium">1-3 years autonomy</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#fff3e8] rounded-lg">
                      <Thermometer className="w-4 h-4 text-[#ff8c42]" />
                      <span className="text-sm text-[#2c3e50] font-medium">Temp. sensor included</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#e8f4fc] rounded-lg">
                      <Droplets className="w-4 h-4 text-[#54b9ff]" />
                      <span className="text-sm text-[#2c3e50] font-medium">IP66 waterproof</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-600 mb-4">Need a custom solution for your project?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2c3e50] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#1a252f] hover:shadow-lg"
          >
            Contact us
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
