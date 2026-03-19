import { useEffect, useRef, useState } from 'react';
import { Users, Handshake, Zap, Lightbulb, Target, Award } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: Award,
      title: 'Expertise',
      description: 'Our company is led by two managers with expertise in physical measurement, sensors, networks, and instrumentation. We listen to your needs and support you in your instrumentation projects.',
      color: 'from-[#54b9ff] to-[#2c3e50]',
    },
    {
      icon: Handshake,
      title: 'Partnership of Trust',
      description: 'We are committed to supporting our clients throughout their project. From recommending the type of wireless solution to assisting with installation when needed. ADVARNA operates throughout France.',
      color: 'from-[#ff8c42] to-[#e67e22]',
    },
    {
      icon: Zap,
      title: 'Reactivity',
      description: 'Our company is able to adapt to any situation or problem in the fastest and most qualitative way possible. We respond quickly to your technical and commercial requests.',
      color: 'from-[#54b9ff] to-[#3aa8f5]',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Innovation is the DNA of our company. We maintain constant market surveillance to improve our products. We also listen to our clients to support them in their new wireless solution development processes.',
      color: 'from-[#2c3e50] to-[#1a252f]',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#e8f4fc]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#54b9ff]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Company Info */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <span className="inline-block px-4 py-1 bg-[#e8f4fc] text-[#54b9ff] text-sm font-semibold rounded-full mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c3e50] leading-tight">
                ADVARNA <span className="text-[#54b9ff]">Development</span> & Manufacturing
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                ADVARNA is a company specialized in the development and manufacturing of 
                <span className="text-[#2c3e50] font-semibold"> wireless measurement solutions</span>, 
                dedicated to structural and geotechnical monitoring in the field of civil engineering and industry.
              </p>
              <p>
                Founded in <span className="text-[#54b9ff] font-semibold">2021</span>, ADVARNA aims to meet client needs 
                in the field of civil engineering, with the goal of becoming a reference in the coming years.
              </p>
              <p>
                ADVARNA offers several types of wireless modules that interface with different types of sensors. 
                The communication technologies used can be <span className="font-semibold text-[#2c3e50]">SIGFOX</span>, 
                <span className="font-semibold text-[#2c3e50]"> LoRaWAN</span>, 
                <span className="font-semibold text-[#2c3e50]"> NB-IoT</span>, and 
                <span className="font-semibold text-[#2c3e50]"> M2M</span>.
              </p>
              <p>
                Our proposed solutions interface with sensors using the best technologies on the market, 
                in order to have total confidence in our measurements.
              </p>
            </div>

            {/* Stats mini */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#e8f4fc] rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#54b9ff]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#2c3e50]">2021</div>
                  <div className="text-sm text-gray-500">Founded</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#fff3e8] rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#ff8c42]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#2c3e50]">France</div>
                  <div className="text-sm text-gray-500">Coverage</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Values Cards */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold text-[#2c3e50] mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Our <span className="text-[#54b9ff]">Values</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#54b9ff]/10 hover:-translate-y-2 hover:border-[#54b9ff]/20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold text-[#2c3e50] mb-2 group-hover:text-[#54b9ff] transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#54b9ff] to-[#ff8c42] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
