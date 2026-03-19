import { useEffect, useRef, useState } from 'react';
import { TrendingDown, Clock, Shield, FileCheck, ArrowUpRight } from 'lucide-react';

const Advantages = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      icon: TrendingDown,
      title: 'Cost Reduction',
      description: 'Optimize maintenance operations and reduce intervention costs through predictive monitoring and early detection of structural issues.',
      stat: '-40%',
      statLabel: 'Maintenance costs',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Clock,
      title: 'Lifespan Extension',
      description: 'Extend the service life of your structures by continuously monitoring their health and addressing issues before they become critical.',
      stat: '+25%',
      statLabel: 'Structure lifespan',
      color: 'from-[#54b9ff] to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Shield,
      title: 'Safety Improvement',
      description: 'Enhance the safety of users and operators by detecting anomalies early and preventing catastrophic failures.',
      stat: '99%',
      statLabel: 'Uptime reliability',
      color: 'from-[#ff8c42] to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Meet regulatory requirements for structural monitoring with certified, traceable measurement systems and automated reporting.',
      stat: '100%',
      statLabel: 'Compliance rate',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section
      id="advantages"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          {/* Central pulsing circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-[#54b9ff]/10 rounded-full animate-pulse" />
          </div>
          {/* Orbiting dots */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 animate-spin"
              style={{
                animationDuration: `${20 + i * 5}s`,
                animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
              }}
            >
              <div
                className="absolute w-3 h-3 bg-[#54b9ff] rounded-full"
                style={{
                  top: `${50 - 40 * Math.cos((i * Math.PI) / 2)}%`,
                  left: `${50 + 40 * Math.sin((i * Math.PI) / 2)}%`,
                  opacity: 0.3 + i * 0.15,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1 bg-[#e8f4fc] text-[#54b9ff] text-sm font-semibold rounded-full mb-4">
            Why Monitor
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c3e50] mb-6">
            The <span className="text-[#54b9ff]">Advantages</span> of Monitoring
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Structural monitoring provides significant benefits for infrastructure management, 
            from cost savings to enhanced safety and regulatory compliance.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`group relative p-8 rounded-2xl border border-gray-100 bg-white shadow-lg shadow-gray-100/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${advantage.color} rounded-t-2xl`} />

              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 ${advantage.bgColor} rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <advantage.icon className={`w-8 h-8 bg-gradient-to-br ${advantage.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                  <div className={`absolute w-8 h-8 bg-gradient-to-br ${advantage.color} rounded-lg opacity-20`} />
                  <advantage.icon className="absolute w-8 h-8 text-gray-700" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#2c3e50] group-hover:text-[#54b9ff] transition-colors duration-300">
                      {advantage.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {advantage.description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-center gap-3">
                    <span className={`text-3xl font-bold bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent`}>
                      {advantage.stat}
                    </span>
                    <span className="text-sm text-gray-500">{advantage.statLabel}</span>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-[#2c3e50] to-[#1a252f] rounded-2xl">
            <div className="text-left">
              <p className="text-white font-semibold">Ready to start monitoring your structures?</p>
              <p className="text-white/70 text-sm">Get in touch with our team for a personalized quote.</p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-6 py-3 bg-[#54b9ff] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#3aa8f5] whitespace-nowrap"
            >
              Get a quote
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
