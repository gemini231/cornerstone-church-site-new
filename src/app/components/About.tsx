import { motion } from 'motion/react';
import { Heart, Users, Book, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Spirit-Filled',
      description: 'Empowered by the Holy Spirit in worship and daily life',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong families and passionate youth',
    },
    {
      icon: Book,
      title: 'Word-Centered',
      description: 'Grounded in biblical truth and teaching',
    },
    {
      icon: Sparkles,
      title: 'Worship',
      description: 'Expressing our love for God with joy and reverence',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Pastor Image */}
              <div className="relative">
                <ImageWithFallback
                  src="/pastor.png"
                  alt="Pastor Ademola Adetokunbo Fasubaa" 
                  className="w-full h-[520px] object-cover"
                />
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E3A] via-transparent to-transparent"></div>
                
                {/* Pastor Name Overlay */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0E1E3A] via-[#0E1E3A]/95 to-transparent pt-12 pb-6 px-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-[#F5B301] font-['Playfair_Display'] text-center" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.35rem)', fontWeight: 700, lineHeight: 1.3 }}>
                    PASTOR ADEMOLA ADETOKUNBO FASUBAA
                  </h3>
                  <p className="text-[#FAF9F6] font-['Inter'] text-center mt-2" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em' }}>
                    LEAD PASTOR
                  </p>
                </motion.div>
              </div>
            </motion.div>
            {/* Decorative element */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#C9A24D] rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            ></motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6">
              <span className="text-[#F5B301] font-['Inter'] uppercase tracking-wider" style={{ fontWeight: 600 }}>
                Welcome to Our Church
              </span>
              <h2
                className="text-[#0E1E3A] font-['Playfair_Display'] mt-3"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
              >
                About Us
              </h2>
              <div className="h-1 w-20 bg-[#F5B301] mt-4"></div>
            </div>

            <p className="text-[#2E2E2E] font-['Inter'] mb-6 leading-relaxed" style={{ fontSize: '1rem' }}>
              It is with great pleasure we welcome you to CHRIST the CORNERSTONE TABERNACLE today and we believe you had a blessed experience. We look forward to seeing you become part of our Christian family - if you live in Abuja, or welcoming you again at our future Services, if you are just visiting.
            </p>

            <p className="text-[#2E2E2E] font-['Inter'] mb-6 leading-relaxed" style={{ fontSize: '1rem' }}>
              We will also like to encourage you to pay special attention to the aspect of your spiritual growth as it is the will of God that all should come unto repentance, becoming His disciples, being built unto maturity and fulfilment of our God-given purpose on earth - with a view to ultimately securing eternity with Christ. This is our reason for being here for you.
            </p>

            <p className="text-[#2E2E2E] font-['Inter'] mb-8 leading-relaxed" style={{ fontSize: '1rem' }}>
              We invite you to kindly take advantage of any of our following Services, Departments, Programmes and Events which we hold from time to time, as may be appropriate for both your Spiritual and secular development.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-[#BFD7EA] p-2 rounded-lg flex-shrink-0">
                    <value.icon className="w-5 h-5 text-[#0E1E3A]" />
                  </div>
                  <div>
                    <h4 className="font-['Inter'] text-[#0E1E3A] mb-1" style={{ fontWeight: 600 }}>
                      {value.title}
                    </h4>
                    <p className="text-[#2E2E2E] font-['Inter'] text-sm">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-6 bg-[#0E1E3A] rounded-xl"
            >
              <p className="text-[#BFD7EA] font-['Playfair_Display'] italic text-center" style={{ fontSize: '1.125rem' }}>
                "Therefore thus saith the Lord GOD, Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone, a sure foundation"
              </p>
              <p className="text-[#F5B301] font-['Inter'] text-center mt-2" style={{ fontWeight: 600 }}>
                — Isaiah 28:16
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}