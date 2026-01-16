import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Ministries', href: '#ministries' },
    { name: 'Sermons', href: '#sermons' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0E1E3A] shadow-lg' : 'bg-[#0E1E3A]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 py-2">
            <div className="flex items-center gap-3">
              <ImageWithFallback
                src="/logo.png"
                alt="Christ the Cornerstone Tabernacle" 
                className="h-16 w-16 object-contain"
              />
              <div className="hidden sm:block">
                <div className="text-[#FAF9F6] font-['Playfair_Display'] text-lg md:text-xl font-bold leading-tight">
                  Christ the Cornerstone
                </div>
                <div className="text-[#F5B301] font-['Inter'] text-xs tracking-wider">
                  Tabernacle
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#FAF9F6] hover:text-[#C9A24D] transition-colors font-['Inter'] text-sm tracking-wide"
              >
                {item.name}
              </a>
            ))}
            <a href="#giving">
              <Button
                className="bg-[#F5B301] hover:bg-[#C9A24D] text-[#0E1E3A] font-['Inter'] uppercase tracking-wider"
                style={{ fontWeight: 600 }}
              >
                Give
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#FAF9F6] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0E1E3A] border-t border-[#C9A24D]/20">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-[#FAF9F6] hover:text-[#C9A24D] transition-colors font-['Inter'] py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#giving" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                className="w-full bg-[#F5B301] hover:bg-[#C9A24D] text-[#0E1E3A] font-['Inter'] uppercase tracking-wider"
                style={{ fontWeight: 600 }}
              >
                Give
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}