import { useEffect, useRef, useState } from 'react';
import { Handshake, Cpu, Building2, Users } from 'lucide-react';

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ partnerships: 0, modules: 0, buildings: 0, clients: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate counters when visible
  useEffect(() => {
    if (!isVisible) return;

    const targets = { partnerships: 5, modules: 100, buildings: 20, clients: 15 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        partnerships: Math.round(targets.partnerships * easeOut),
        modules: Math.round(targets.modules * easeOut),
        buildings: Math.round(targets.buildings * easeOut),
        clients: Math.round(targets.clients * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: Handshake,
      value: counts.partnerships,
      suffix: '+',
      label: 'New partnerships in progress',
      color: 'from-[#54b9ff] to-blue-500',
    },
    {
      icon: Cpu,
      value: counts.modules,
      suffix: '+',
      label: 'Modules installed in France',
      color: 'from-[#ff8c42] to-orange-500',
    },
    {
      icon: Building2,
      value: counts.buildings,
      suffix: '+',
      label: 'Buildings instrumented',
      color: 'from-green-400 to-green-500',
    },
    {
      icon: Users,
      value: counts.clients,
      suffix: '+',
      label: 'Satisfied clients',
      color: 'from-purple-400 to-purple-500',
    },
  ];

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-br from-[#2c3e50] via-[#1a252f] to-[#0d1117] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="stats-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#54b9ff" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stats-grid)" />
          </svg>
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#54b9ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ff8c42]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-white/10 text-[#54b9ff] text-sm font-semibold rounded-full mb-4 border border-white/20">
            Our Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            They <span className="text-[#54b9ff]">Trust</span> Us
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            ADVARNA collaborates with leading companies in civil engineering, construction, 
            and infrastructure management across France.
          </p>
        </div>

        {/* Stats Grid */}
{/* Partner Logos */}
<div
  className={`flex justify-center items-center gap-10 mb-12 transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
  style={{ transitionDelay: '150ms' }}
>
  <img
    src="/images/cimeo.webp"
    alt="Partner 1"
    className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
  />
  <img
    src="/images/eliaris.webp"
    alt="Partner 2"
    className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
  />
</div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#54b9ff]/30 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>

              {/* Value */}
              <div className="mb-2">
                <span className="text-5xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-3xl font-bold text-[#54b9ff]">{stat.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-white/60 text-sm leading-relaxed">
                {stat.label}
              </p>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Partner Logos Placeholder */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-center text-white/40 text-sm mb-8">Our partners include</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {['Engineering Firms', 'Construction Companies', 'Infrastructure Managers', 'Research Institutes'].map((partner, index) => (
              <div
                key={partner}
                className="px-6 py-3 bg-white/5 rounded-lg border border-white/10 text-white/60 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-white/60 mb-4">Interested in becoming a partner?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#54b9ff] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#3aa8f5] hover:shadow-lg hover:shadow-[#54b9ff]/30"
          >
            <Handshake className="w-5 h-5" />
            Become a partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;
