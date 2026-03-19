import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

type ContactInfoItem =
  | {
      kind: 'single';
      icon: typeof Mail | typeof MapPin;
      label: string;
      value: string;
      href: string;
    }
  | {
      kind: 'phones';
      icon: typeof Phone;
      label: string;
      phones: { value: string; href: string }[];
    };

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false,
  });

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo: ContactInfoItem[] = [
    {
      kind: 'single',
      icon: Mail,
      label: 'Email',
      value: 'contact@advarna.fr',
      href: 'mailto:contact@advarna.fr',
    },
    {
      kind: 'phones',
      icon: Phone,
      label: 'Phone',
      phones: [
        { value: '+33 (0)6 78 74 30 87', href: 'tel:+33678743087' },
        { value: '+33 (0)6 58 52 74 04', href: 'tel:+33658527404' },
      ],
    },
    {
      kind: 'single',
      icon: MapPin,
      label: 'Address',
      value: "460 Chemin d’Antonelle, 13090 Aix en Provence, Provence-Alpes-Côte d'Azur, France",
      href: '#',
    },
  ];

  if (isSubmitted) {
    return (
      <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/contact-bg.jpg"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2c3e50]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
              <p className="text-white/70 mb-6">
                Thank you for contacting us. We will get back to you as soon as possible.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    privacy: false,
                  });
                }}
                className="px-6 py-3 bg-[#54b9ff] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#3aa8f5]"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-bg.jpg"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50]/90 via-[#2c3e50]/80 to-[#2c3e50]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div>
              <span className="inline-block px-4 py-1 bg-white/10 text-[#54b9ff] text-sm font-semibold rounded-full mb-4 border border-white/20">
                Contact Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Let's <span className="text-[#54b9ff]">Talk</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Tell us what information you need and we will put you in touch with the right
                person to help you with your structural monitoring project.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const cardClasses = `flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-[#54b9ff]/30 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`;

                const cardStyle = { transitionDelay: `${300 + index * 100}ms` };

                const CardInner = (
                  <>
                    <div className="w-12 h-12 bg-[#54b9ff]/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#54b9ff]/30">
                      <info.icon className="w-6 h-6 text-[#54b9ff]" />
                    </div>

                    <div>
                      <div className="text-white/50 text-sm">{info.label}</div>

                      <div className="text-white font-medium">
                        {info.kind === 'phones' ? (
                          <div className="space-y-1">
                            {info.phones.map((p, i) => (
                              <a
                                key={`${p.href}-${i}`}
                                href={p.href}
                                className="block hover:text-[#54b9ff] transition-colors"
                              >
                                {p.value}
                              </a>
                            ))}
                          </div>
                        ) : (
                          info.value
                        )}
                      </div>
                    </div>
                  </>
                );

                // IMPORTANT: phone card is NOT an <a> (avoids <a> inside <a>)
                if (info.kind === 'phones') {
                  return (
                    <div
                      key={`${info.label}-${index}`}
                      className={cardClasses}
                      style={cardStyle}
                    >
                      {CardInner}
                    </div>
                  );
                }

                // Single item card stays clickable
                return (
                  <a
                    key={`${info.label}-${index}`}
                    href={info.href}
                    className={cardClasses}
                    style={cardStyle}
                  >
                    {CardInner}
                  </a>
                );
              })}
            </div>

            {/* Working Hours */}
            <div
              className={`p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h4 className="text-white font-semibold mb-3">Working Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-white/50">
                  <span>Saturday - Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>

              <div className="space-y-5">
                {/* Name & Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/80">
                      Name <span className="text-[#ff8c42]">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#54b9ff] focus:ring-[#54b9ff]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white/80">
                      Company <span className="text-[#ff8c42]">*</span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Your company"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#54b9ff] focus:ring-[#54b9ff]/20"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/80">
                      Email <span className="text-[#ff8c42]">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#54b9ff] focus:ring-[#54b9ff]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/80">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 1 23 45 67 89"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#54b9ff] focus:ring-[#54b9ff]/20"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white/80">
                    Subject <span className="text-[#ff8c42]">*</span>
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is your inquiry about?"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#54b9ff] focus:ring-[#54b9ff]/20"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/80">
                    Message <span className="text-[#ff8c42]">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#54b9ff] focus:ring-[#54b9ff]/20 resize-none"
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, privacy: checked as boolean }))
                    }
                    className="mt-1 border-white/30 data-[state=checked]:bg-[#54b9ff] data-[state=checked]:border-[#54b9ff]"
                  />
                  <Label htmlFor="privacy" className="text-sm text-white/60 leading-relaxed cursor-pointer">
                    I agree that my data will be used to be contacted by ADVARNA in accordance
                    with the privacy policy of this site. <span className="text-[#ff8c42]">*</span>
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!formData.privacy || isSubmitting}
                  className="w-full py-6 bg-[#54b9ff] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#3aa8f5] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
