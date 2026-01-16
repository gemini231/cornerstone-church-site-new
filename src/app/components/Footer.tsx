import { motion } from 'motion/react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Ministries', href: '#ministries' },
    { name: 'Sermons', href: '#sermons' },
    { name: 'Events', href: '#events' },
    { name: 'Give', href: '#give' },
    { name: 'Contact', href: '#contact' },
  ];

  const ministries = [
    { name: 'Youth Church', href: '#' },
    { name: "Children's Ministry", href: '#' },
    { name: 'Family Life', href: '#' },
    { name: 'Worship Team', href: '#' },
    { name: 'Bible Study', href: '#' },
    { name: 'Prayer Ministry', href: '#' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100065010091116' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/christthecornerstonetabernacle/' },
    { name: 'Youtube', icon: Youtube, href: 'https://www.youtube.com/channel/UCXvQ0OWhyYkJVYlF3cnRaQTY8dz09' },
  ];

  return (
    <footer id="contact" className="bg-[#0E1E3A] text-[#FAF9F6]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Church Info */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <ImageWithFallback
                src="/logo.png"
                alt="Christ the Cornerstone Tabernacle" 
                className="w-20 h-20 object-contain"
              />
              <div>
                <div className="text-[#FAF9F6] font-['Playfair_Display'] text-base font-bold leading-tight">
                  Christ the Cornerstone
                </div>
                <div className="text-[#F5B301] font-['Inter'] text-xs tracking-wider">
                  Tabernacle
                </div>
              </div>
            </div>
            
            <div className="text-[#BFD7EA] font-['Inter'] mb-6 text-sm leading-relaxed space-y-3">
              <p className="font-['Playfair_Display'] text-[#FAF9F6] italic" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                WELCOME TO FELLOWSHIP OF THE SAINTS
              </p>
              <p className="text-[#F5B301] text-xs" style={{ fontWeight: 600 }}>
                (EPHESIANS 2: 19-22)
              </p>
              
              <div className="pt-2 pb-2">
                <p className="text-[#F5B301] font-['Playfair_Display']" style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                  WANTED !!!!
                </p>
              </div>
              
              <div className="space-y-2">
                <p>
                  <span className="text-[#FAF9F6]" style={{ fontWeight: 600 }}>God Seekers</span>, not just churchgoers
                </p>
                <p className="text-[#F5B301] text-xs pl-2" style={{ fontWeight: 600 }}>
                  (JEREMIAH 29:13, EXODUS 12:38)
                </p>
                
                <p>
                  <span className="text-[#FAF9F6]" style={{ fontWeight: 600 }}>Truth seekers</span>, not just hearers
                </p>
                <p className="text-[#F5B301] text-xs pl-2" style={{ fontWeight: 600 }}>
                  (2 TIMOTHY 4:3)
                </p>
              </div>
              
              <div className="pt-3 border-t border-[#1E2A38] space-y-2">
                <p className="text-[#FAF9F6]">
                  We trust that the above qualities describe <span className="text-[#F5B301]" style={{ fontWeight: 700 }}>YOU</span>
                </p>
                <p className="text-[#F5B301] font-['Playfair_Display'] italic" style={{ fontSize: '1rem', fontWeight: 600 }}>
                  A seat is RESERVED for you !
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E2A38] hover:bg-[#F5B301] p-2 rounded-lg transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-[#FAF9F6] group-hover:text-[#0E1E3A]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Playfair_Display'] mb-6" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#BFD7EA] hover:text-[#F5B301] font-['Inter'] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="font-['Playfair_Display'] mb-6" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              Ministries
            </h3>
            <ul className="space-y-3">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <a
                    href={ministry.href}
                    className="text-[#BFD7EA] hover:text-[#F5B301] font-['Inter'] text-sm transition-colors"
                  >
                    {ministry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Playfair_Display'] mb-6" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5B301] flex-shrink-0 mt-0.5" />
                <span className="text-[#BFD7EA] font-['Inter'] text-sm leading-relaxed">
                  The Chapel Building, Games village Estate, Abuja
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F5B301] flex-shrink-0" />
                <div className="text-[#BFD7EA] font-['Inter'] text-sm">
                  <a href="tel:+2347065611181" className="hover:text-[#F5B301] transition-colors block">
                    +234 706 561 1181
                  </a>
                  <a href="tel:+2348036009745" className="hover:text-[#F5B301] transition-colors block">
                    +234 803 600 9745
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F5B301] flex-shrink-0" />
                <a 
                  href="mailto:info.thecornerstone@gmail.com"
                  className="text-[#BFD7EA] hover:text-[#F5B301] font-['Inter'] text-sm transition-colors break-all"
                >
                  info.thecornerstone@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Scripture Quote */}
        <div className="bg-[#1E2A38] rounded-xl p-6 mb-8">
          <p className="text-[#BFD7EA] font-['Playfair_Display'] italic text-center mb-2" style={{ fontSize: '1.125rem' }}>
            "Jesus Christ the same yesterday, and to day, and for ever."
          </p>
          <p className="text-[#F5B301] font-['Inter'] text-center" style={{ fontWeight: 600 }}>
            — Hebrews 13:8
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E2A38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-[#BFD7EA] font-['Inter']">
              © {currentYear} Christ the Cornerstone Tabernacle. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#BFD7EA] hover:text-[#F5B301] font-['Inter'] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#BFD7EA] hover:text-[#F5B301] font-['Inter'] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="text-center mt-4 pt-3 border-t border-[#0A1628]">
            <p className="text-[#4A5568] hover:text-[#F5B301] font-['Inter'] text-xs tracking-wide transition-colors cursor-default">
              WILSYNE TECH CONSULTING
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}