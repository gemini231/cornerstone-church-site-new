import { motion } from 'motion/react';
import { Heart, CreditCard, Building2, ShieldCheck } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export function Giving() {
  const givingMethods = [
    {
      icon: CreditCard,
      title: 'Online Giving',
      description: 'Safe and secure one-time or recurring donations',
    },
    {
      icon: Building2,
      title: 'Bank Transfer',
      description: 'Direct deposit to our church account',
    },
    {
      icon: Heart,
      title: 'In-Person',
      description: 'Give during any of our worship services',
    },
  ];

  return (
    <section id="giving" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#F5B301] font-['Inter'] uppercase tracking-wider" style={{ fontWeight: 600 }}>
              Generosity
            </span>
            <h2
              className="text-[#0E1E3A] font-['Playfair_Display'] mt-3 mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
            >
              Give to Support God's Work
            </h2>
            <div className="h-1 w-20 bg-[#F5B301] mb-6"></div>

            <div className="bg-[#BFD7EA]/30 p-6 rounded-xl mb-8">
              <p className="text-[#0E1E3A] font-['Playfair_Display'] italic mb-2" style={{ fontSize: '1.25rem' }}>
                "Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over"
              </p>
              <p className="text-[#F5B301] font-['Inter']" style={{ fontWeight: 600 }}>
                — Luke 6:38
              </p>
            </div>

            <p className="text-[#2E2E2E] font-['Inter'] mb-6 leading-relaxed">
              Your generous giving helps us spread the Gospel, support our community, maintain our facilities, and empower ministries that change lives. Every contribution makes a difference in advancing God's kingdom.
            </p>

            <div className="space-y-3 mb-8">
              {givingMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-[#0E1E3A] p-2 rounded-lg flex-shrink-0">
                    <method.icon className="w-5 h-5 text-[#F5B301]" />
                  </div>
                  <div>
                    <h4 className="font-['Inter'] text-[#0E1E3A] mb-1" style={{ fontWeight: 600 }}>
                      {method.title}
                    </h4>
                    <p className="text-[#2E2E2E] font-['Inter'] text-sm">
                      {method.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/giving-details">
              <Button
                size="lg"
                className="bg-[#F5B301] hover:bg-[#C9A24D] text-[#0E1E3A] font-['Inter'] px-8 py-6 uppercase tracking-wider shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                style={{ fontWeight: 600 }}
              >
                Give Now
              </Button>
            </Link>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Impact Stats */}
            <Card className="p-8 bg-gradient-to-br from-[#0E1E3A] to-[#1E2A38] text-white">
              <h3 className="font-['Playfair_Display'] mb-6" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                Your Impact
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[#F5B301] font-['Playfair_Display']" style={{ fontSize: '3rem', fontWeight: 700 }}>
                    500+
                  </p>
                  <p className="text-[#BFD7EA] font-['Inter']">
                    Families Served
                  </p>
                </div>
                <div>
                  <p className="text-[#F5B301] font-['Playfair_Display']" style={{ fontSize: '3rem', fontWeight: 700 }}>
                    50+
                  </p>
                  <p className="text-[#BFD7EA] font-['Inter']">
                    Youth Mentored
                  </p>
                </div>
                <div>
                  <p className="text-[#F5B301] font-['Playfair_Display']" style={{ fontSize: '3rem', fontWeight: 700 }}>
                    200+
                  </p>
                  <p className="text-[#BFD7EA] font-['Inter']">
                    Community Events
                  </p>
                </div>
                <div>
                  <p className="text-[#F5B301] font-['Playfair_Display']" style={{ fontSize: '3rem', fontWeight: 700 }}>
                    15
                  </p>
                  <p className="text-[#BFD7EA] font-['Inter']">
                    Active Ministries
                  </p>
                </div>
              </div>
            </Card>

            {/* Security Badge */}
            <Card className="p-6 bg-[#9DB8A0]/20 border-2 border-[#9DB8A0]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#9DB8A0] p-3 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-['Inter'] text-[#0E1E3A]" style={{ fontWeight: 600 }}>
                    Safe & Secure
                  </h4>
                  <p className="text-[#2E2E2E] font-['Inter'] text-sm">
                    All transactions are encrypted
                  </p>
                </div>
              </div>
              <p className="text-[#2E2E2E] font-['Inter'] text-sm leading-relaxed">
                We use industry-standard security measures to protect your information. Your giving is processed through secure payment gateways with 256-bit SSL encryption.
              </p>
            </Card>

            {/* Tax Info */}
            <Card className="p-6 bg-[#BFD7EA]/20 border-2 border-[#BFD7EA]">
              <h4 className="font-['Inter'] text-[#0E1E3A] mb-2" style={{ fontWeight: 600 }}>
                Tax Deductible
              </h4>
              <p className="text-[#2E2E2E] font-['Inter'] text-sm leading-relaxed">
                Christ the Cornerstone Tabernacle is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}