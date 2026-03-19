import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const productsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  };

  const navigateTo = (href: string) => {
    closeAllMenus();
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }

    const isHome = window.location.pathname === '/';
    if (!isHome) {
      window.location.href = `/${href}`;
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openProducts = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setIsProductsOpen(true);
  };

  const closeProducts = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setIsProductsOpen(false), 150);
  };

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!isProductsOpen) return;
      const wrapper = productsWrapperRef.current;
      if (wrapper && !wrapper.contains(e.target as Node)) setIsProductsOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsProductsOpen(false);
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isProductsOpen]);

  const logoSrc = isScrolled ? '/images/logo_advarna_dark.webp' : '/images/logo_advarna_white.webp';

  const productLinks = [
    { name: 'OBSESSIO X1', to: '/product/obsessio-x1' },
    { name: 'OBSESSIO X2', to: '/product/obsessio-x2' },
    { name: 'DISTANCIO', to: '/product/distancio' },
    { name: 'HORIZIO XY', to: '/product/horizio' },
    { name: 'EXTENSO', to: '/product/extenso' },
    { name: 'Module THx', to: '/product/thx' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button type="button" onClick={() => navigateTo('#hero')} className="flex items-center gap-2 group">
            <img src={logoSrc} alt="ADVARNA" width={230} />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <button type="button" onClick={() => navigateTo('#hero')} className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-[#2c3e50]' : 'text-white'} hover:text-[#54b9ff]`}>Home</button>

            <div ref={productsWrapperRef} className="relative" onMouseEnter={openProducts} onMouseLeave={closeProducts}>
              <div className="flex items-center gap-1">
                <button type="button" onClick={() => navigateTo('#products')} className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-[#2c3e50]' : 'text-white'} hover:text-[#54b9ff]`}>Products</button>
                <button type="button" aria-label="Toggle products menu" onClick={() => setIsProductsOpen((v) => !v)} className={`p-1 rounded transition-colors duration-300 ${isScrolled ? 'text-[#2c3e50]' : 'text-white'} hover:text-[#54b9ff]`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {isProductsOpen && (
                <div className="absolute top-full left-0 w-56 pt-2" onMouseEnter={openProducts} onMouseLeave={closeProducts}>
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-scale-in">
                    {productLinks.map((item) => (
                      <a key={item.to} href={item.to} onClick={closeAllMenus} className="block px-4 py-2 text-sm text-[#2c3e50] hover:bg-[#e8f4fc] hover:text-[#54b9ff] transition-colors duration-200">{item.name}</a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button type="button" onClick={() => navigateTo('#about')} className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-[#2c3e50]' : 'text-white'} hover:text-[#54b9ff]`}>About</button>
            <button type="button" onClick={() => navigateTo('#stats')} className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-[#2c3e50]' : 'text-white'} hover:text-[#54b9ff]`}>Partnerships</button>
            <button type="button" onClick={() => navigateTo('#contact')} className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-[#2c3e50]' : 'text-white'} hover:text-[#54b9ff]`}>Contact</button>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button className={`px-3 py-1 text-sm font-medium rounded transition-all duration-300 ${isScrolled ? 'bg-[#54b9ff] text-white' : 'bg-white/20 text-white hover:bg-white/30'}`}>EN</button>
            <button className={`px-3 py-1 text-sm font-medium rounded transition-all duration-300 ${isScrolled ? 'text-[#2c3e50] hover:bg-gray-100' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>FR</button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'text-[#2c3e50]' : 'text-white'}`} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200/20 animate-slide-up">
            <div className="flex flex-col gap-4">
              <button type="button" onClick={() => navigateTo('#hero')} className={`text-sm font-medium text-left ${isScrolled ? 'text-[#2c3e50]' : 'text-white'} hover:text-[#54b9ff]`}>Home</button>

              <div>
                <div className="flex items-center justify-between">
                  <button type="button" onClick={() => navigateTo('#products')} className={`text-sm font-medium text-left ${isScrolled ? 'text-[#2c3e50]' : 'text-white'} hover:text-[#54b9ff]`}>Products</button>
                  <button type="button" onClick={() => setIsProductsOpen(!isProductsOpen)} className={`p-2 rounded transition-colors duration-300 ${isScrolled ? 'text-[#2c3e50]' : 'text-white'}`} aria-label="Toggle products list">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {isProductsOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {productLinks.map((item) => (
                      <a key={item.to} href={item.to} onClick={closeAllMenus} className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-white/70'} hover:text-[#54b9ff]`}>{item.name}</a>
                    ))}
                  </div>
                )}
              </div>

              <button type="button" onClick={() => navigateTo('#about')} className={`text-sm font-medium text-left ${isScrolled ? 'text-[#2c3e50]' : 'text-white'} hover:text-[#54b9ff]`}>About</button>
              <button type="button" onClick={() => navigateTo('#stats')} className={`text-sm font-medium text-left ${isScrolled ? 'text-[#2c3e50]' : 'text-white'} hover:text-[#54b9ff]`}>Partnerships</button>
              <button type="button" onClick={() => navigateTo('#contact')} className={`text-sm font-medium text-left ${isScrolled ? 'text-[#2c3e50]' : 'text-white'} hover:text-[#54b9ff]`}>Contact</button>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-200/20">
                <button className="px-4 py-2 text-sm font-medium bg-[#54b9ff] text-white rounded">EN</button>
                <button className={`px-4 py-2 text-sm font-medium ${isScrolled ? 'text-[#2c3e50]' : 'text-white'}`}>FR</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
