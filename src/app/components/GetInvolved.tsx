import { motion } from 'motion/react';
import { Users, HandHeart, MessageCircle, BookHeart } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useState } from 'react';

export function GetInvolved() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const opportunities = [
    {
      icon: Users,
      title: 'Join a Home Group',
      description: 'Connect with others in a community of believers for fellowship, prayer, and Bible study.',
      fullDescription: 'We take the Word to our homes where selected topics are discussed from time to time in a family atmosphere in order to provide deep assimilation of the Word of God. Our Home Groups also provide a great platform for Worship, Fellowship, Welfare and Witnessing. We encourage you to be a part of the Home Group; as there should be one near to your residence. Kindly click on the link and fill the form and a Home Group Leader near you should be contacting you shortly to welcome you.',
      action: 'Find a Group',
      link: 'https://docs.google.com/forms/d/1USeJvQXMIhGRCXJyKI20AcCqrZvaJCN7ktAI0JxlOMw/edit',
      color: '#6EC1E4',
      image: 'https://images.unsplash.com/photo-1722962674485-d34e69a9a406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZ3JvdXAlMjBiaWJsZSUyMHN0dWR5fGVufDF8fHx8MTc2ODU2NDc1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: HandHeart,
      title: 'Volunteer',
      description: 'Use your gifts and talents to serve in various ministries and make a difference.',
      action: 'Get Started',
      link: '#contact',
      color: '#9DB8A0',
      image: 'https://images.unsplash.com/photo-1717201611955-f7e723802d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjaHVyY2glMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY4NTY0NzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: BookHeart,
      title: 'Community Outreach',
      description: 'Be the hands and feet of Jesus by serving those in need in our community.',
      action: 'Learn More',
      link: '#contact',
      color: '#F5B301',
      image: 'https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBvdXRyZWFjaCUyMGhlbHBpbmd8ZW58MXx8fHwxNzY4NTY0NzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: MessageCircle,
      title: 'Prayer Request',
      description: 'Share your prayer needs and let our community lift you up in prayer.',
      action: 'Submit Request',
      link: 'https://docs.google.com/forms/d/1USeJvQXMIhGRCXJyKI20AcCqrZvaJCN7ktAI0JxlOMw/edit',
      color: '#B565A7',
      image: 'https://images.unsplash.com/photo-1555041469-7941a645bbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBoYW5kcyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2ODQ0OTU0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-[#BFD7EA]/30 to-[#9DB8A0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F5B301] font-['Inter'] uppercase tracking-wider" style={{ fontWeight: 600 }}>
            Be Part of Something Greater
          </span>
          <h2
            className="text-[#0E1E3A] font-['Playfair_Display'] mt-3 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
          >
            Get Involved
          </h2>
          <div className="h-1 w-20 bg-[#F5B301] mx-auto mb-4"></div>
          <p className="text-[#2E2E2E] font-['Inter'] max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Discover ways to connect, serve, and grow in your faith journey
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="overflow-hidden group cursor-pointer h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F5B301]">
                {/* Image */}
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  animate={{ 
                    opacity: hoveredIndex === index && opportunity.fullDescription ? 0 : 1,
                    height: hoveredIndex === index && opportunity.fullDescription ? 0 : '12rem'
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E3A]/90 to-transparent"></div>
                  <div
                    className="absolute bottom-4 left-4 p-3 rounded-lg"
                    style={{ backgroundColor: opportunity.color }}
                  >
                    <opportunity.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {hoveredIndex === index && opportunity.fullDescription && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: opportunity.color }}
                      >
                        <opportunity.icon className="w-5 h-5 text-white" />
                      </motion.div>
                    )}
                    <h3
                      className="text-[#0E1E3A] font-['Playfair_Display']"
                      style={{ fontSize: '1.25rem', fontWeight: 600 }}
                    >
                      {opportunity.title}
                    </h3>
                  </div>
                  
                  {/* Default Description */}
                  {(!opportunity.fullDescription || hoveredIndex !== index) && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: hoveredIndex === index && opportunity.fullDescription ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-[#2E2E2E] font-['Inter'] text-sm mb-4">
                        {opportunity.description}
                      </p>
                      {opportunity.link ? (
                        <a 
                          href={opportunity.link} 
                          target={opportunity.link.startsWith('http') ? '_blank' : undefined}
                          rel={opportunity.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <Button
                            variant="ghost"
                            className="text-[#F5B301] hover:text-[#C9A24D] hover:bg-[#F5B301]/10 font-['Inter'] p-0"
                            style={{ fontWeight: 600, fontSize: '0.875rem' }}
                          >
                            {opportunity.action} →
                          </Button>
                        </a>
                      ) : (
                        <Button
                          variant="ghost"
                          className="text-[#F5B301] hover:text-[#C9A24D] hover:bg-[#F5B301]/10 font-['Inter'] p-0"
                          style={{ fontWeight: 600, fontSize: '0.875rem' }}
                        >
                          {opportunity.action} →
                        </Button>
                      )}
                    </motion.div>
                  )}

                  {/* Full Description on Hover */}
                  {opportunity.fullDescription && hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="space-y-3"
                    >
                      <p className="text-[#2E2E2E] font-['Inter'] leading-relaxed" style={{ fontSize: '0.8125rem' }}>
                        {opportunity.fullDescription}
                      </p>
                      {opportunity.link && (
                        <a 
                          href={opportunity.link} 
                          target={opportunity.link.startsWith('http') ? '_blank' : undefined}
                          rel={opportunity.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <Button
                            variant="ghost"
                            className="text-[#F5B301] hover:text-[#C9A24D] hover:bg-[#F5B301]/10 font-['Inter'] p-0 mt-2"
                            style={{ fontWeight: 600, fontSize: '0.875rem' }}
                          >
                            {opportunity.action} →
                          </Button>
                        </a>
                      )}
                    </motion.div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0E1E3A] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5B301]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C9A24D]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3
              className="text-[#FAF9F6] font-['Playfair_Display'] mb-4"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700 }}
            >
              Ready to Become a Member?
            </h3>
            <p className="text-[#BFD7EA] font-['Inter'] mb-8 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Join our church family and discover your purpose in Christ. We'd love to walk with you on your faith journey.
            </p>
            <div className="flex justify-center">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-[#F5B301] hover:bg-[#C9A24D] text-[#0E1E3A] font-['Inter'] px-8 uppercase tracking-wider shadow-lg"
                  style={{ fontWeight: 600 }}
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}