import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Wifi, Signal, Radio } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#2c3e50] via-[#1a252f] to-[#0d1117]"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#54b9ff" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#54b9ff] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#54b9ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ff8c42]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Wifi className="w-4 h-4 text-[#54b9ff]" />
              <span className="text-sm text-white/80 font-medium">Wireless IoT Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Reliable, precise and{' '}
              <span className="text-[#54b9ff]">autonomous</span> sensors
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              ADVARNA develops and manufactures wireless measurement solutions 
              dedicated to structural and geotechnical monitoring in civil engineering 
              and industrial applications.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Signal, label: 'SIGFOX' },
                { icon: Radio, label: 'LoRaWAN' },
                { icon: Wifi, label: 'NB-IoT' },
              ].map((tech, index) => (
                <div
                  key={tech.label}
                  className={`flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#54b9ff]/30 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <tech.icon className="w-4 h-4 text-[#54b9ff]" />
                  <span className="text-sm text-white/80 font-medium">{tech.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToProducts}
                className="group flex items-center gap-2 px-8 py-4 bg-[#54b9ff] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#3aa8f5] hover:shadow-lg hover:shadow-[#54b9ff]/30 hover:-translate-y-1"
              >
                Discover our products
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Product Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#54b9ff]/30 to-[#ff8c42]/20 rounded-3xl blur-3xl transform scale-110" />
              
              {/* Product image */}
              <div className="relative animate-float">
                <img
                  src="/images/hero-sensor.jpg"
                  alt="ADVARNA OBSESSIO X1 Sensor"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl shadow-black/50"
                />
                
                {/* Floating stats cards */}
                <div className="absolute -left-8 top-1/4 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 animate-pulse-glow">
                  <div className="text-2xl font-bold text-[#54b9ff]">±1mm</div>
                  <div className="text-xs text-white/60">Precision</div>
                </div>
                
                <div className="absolute -right-4 bottom-1/4 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 animate-pulse-glow" style={{ animationDelay: '1s' }}>
                  <div className="text-2xl font-bold text-[#ff8c42]">IP66</div>
                  <div className="text-xs text-white/60">Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
