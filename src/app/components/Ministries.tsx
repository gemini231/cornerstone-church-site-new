import { motion } from 'motion/react';
import { Flame, Baby, Users2, HeartHandshake, Music, BookOpen, Sparkles, Shield } from 'lucide-react';
import { Card } from './ui/card';
import { useState } from 'react';

export function Ministries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const ministries = [
    {
      icon: Flame,
      title: 'Youth Church (Troops & Pillars)',
      description: 'Empowering the next generation with purpose and passion for Christ',
      fullDescription: 'Psalm 110:3 - "Your troops will be willing on your day of battle. Arrayed in holy majesty, from the womb of the dawn you will receive the dew of your youth." Psalm 144:12 - "Then our sons in their youth will be like well-nurtured plants, and our daughters will be like pillars carved to adorn a palace." 1 Timothy 4:12 - "Don\'t let anyone look down on you because you are young, but set an example for the believers in speech, in life, in love, in faith and in purity." Revelation 3:11-13 - "I am coming soon. Hold on to what you have, so that no one will take your crown. Him who overcomes I will make a pillar in the temple of my God. Never again will he leave it. I will write on him the name of my God and the name of the city of my God, the new Jerusalem, which is coming down out of heaven from my God; and I will also write on him my new name. He who has an ear, let him hear what the Spirit says to the churches."',
      color: '#F5B301',
      image: 'https://images.unsplash.com/photo-1594913434694-2164156256c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHdvcnNoaXB8ZW58MXx8fHwxNzY3ODc3MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Baby,
      title: "The Heritage (Children's Group)",
      description: 'Building a strong foundation of faith in our youngest members',
      fullDescription: 'Psalm 127:3 - "Behold, children are a heritage from the Lord, The fruit of the womb is a reward." Isaiah 65:23 - "They will not toil in vain or bear children doomed to misfortune; for they will be a people blessed by the Lord, they and their descendants with them."',
      color: '#6EC1E4',
      image: 'https://images.unsplash.com/photo-1593360023538-3b002771ac97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXR0bGUlMjBjaGlsZHJlbiUyMGhhcHB5fGVufDF8fHx8MTc2ODU2MzkxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Users2,
      title: 'Royal Diadems (Teenagers)',
      description: 'Crowning our teens with purpose and identity in Christ',
      fullDescription: 'Isaiah 62:3 - "You will be a crown of splendor in the Lord\'s hand, a royal diadem in the hand of your God."',
      color: '#9DB8A0',
      image: 'https://images.unsplash.com/photo-1735761013351-9eecd120e305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuYWdlcnMlMjB3b3JzaGlwJTIwY2h1cmNofGVufDF8fHx8MTc2ODU2MzA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: HeartHandshake,
      title: 'Prevailing Prayer Group (PPG)',
      description: 'Experiencing freedom and breakthrough through intercessory prayer',
      fullDescription: 'This is the Prayer team comprising of all members of the Church. We believe in the efficacy of Spirit-led prayers as the foundation of our activities. As watchmen and part of God\'s end-time army, we pray for the vision of the Church, our community, nations, the Body of Christ, and for members of Christ the Cornerstone Tabernacle and their personal growth, using the Sword of the Spirit and the Believers\' authority as weapons of instruction and warfare to achieve victory in all our endeavours. We invite you to join us to experience a fulfilling prayer and fruitful life.',
      schedule: 'We meet every Saturday at 1:00pm – 3:00pm.',
      color: '#C9A24D',
      image: 'https://images.unsplash.com/photo-1520187044487-b2efb58f0cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBoYW5kc3xlbnwxfHx8fDE3Njc3Nzg0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Music,
      title: 'Worship Team',
      description: 'Leading the congregation into the presence of God through music',
      fullDescription: 'The Worship Team (Choir) is a dedicated team of worshippers who regularly lead CCT in worship times. They are made up of various vocal ranges and continually strive for excellence through music ministry.',
      schedule: 'Rehearsals take place at 3:00pm – 5:00pm every Saturday.',
      color: '#C1121F',
      image: 'https://images.unsplash.com/photo-1579975096649-e773152b04cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwfGVufDF8fHx8MTc2Nzc5NjkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: BookOpen,
      title: 'Evangelism Team',
      description: 'Making disciples of all nations through the Great Commission',
      fullDescription: 'Effective soul-winning is the prime responsibility of every Believer. The Evangelism Team is responsible for organizing effective outreaches at local, national and global levels as directed by the Holy Spirit. We deploy the tools of regular Prayer Meetings, publishing of Kingdom literature and materials through Tracts, Flyers, Bill-Boards, Mainstream and Social-Media as well as personal evangelism. Matthew 28:18-20 - "All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age." Mark 16:20 - "Then the disciples went out and preached everywhere, and the Lord worked with them and confirmed his word by the signs that accompanied it." Acts 1:8 - "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."',
      color: '#0E1E3A',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5fGVufDF8fHx8MTc2Nzg3NzEyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Sparkles,
      title: 'Virtuous Women (Prov 31:10-31)',
      description: 'Raising Godly women equipped for victorious life',
      fullDescription: 'The Women\'s group equips women to play their role effectively in the church of God and in the world at large. We are committed to excellence in all endeavours and encourage our women to pursue fulfilment in their careers whilst developing a confident and caring attitude. We continually study the characters of Godly women in the Bible and encourage emulation of their good qualities. Key areas of interaction include: • Providing an environment where women-related issues can be discussed with practical and scriptural counsel. • Ministering to the needs of women as and when required. • Promoting social interaction by reaching out to the under-privileged in our communities (with love and provision) and organising a variety of group outings. • Providing teachings/seminars on a wide range of subjects which aim to equip women in various spheres of life (i.e. home economics and management, personal hygiene, cookery, sewing etc.) Overall, we aim to raise Godly women equipped for a victorious life!',
      color: '#B565A7',
      image: 'https://images.unsplash.com/photo-1678891915635-332377b0bbdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNodXJjaCUyMG1pbmlzdHJ5fGVufDF8fHx8MTc2ODU2MzU1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Shield,
      title: 'The Ambassadors of Christ (Men\'s Group)',
      description: 'Equipping men to play their roles effectively in church, home, and the world',
      fullDescription: '2 Corinthians 5:16-20 - \"Now then we are ambassadors for Christ, as though God did beseech you by us: we pray you in Christ\'s stead, be ye reconciled to God.\" Proverbs 20:6-7 - \"Most men will proclaim every one his own goodness: but a faithful man who can find? The just man walketh in his integrity: his children are blessed after him.\" The Ambassadors of Christ is the Men\'s group of Christ the Cornerstone Tabernacle which equips men to play their roles effectively in the church of God, at home and in the secular world. We are committed to envisioning men so that they can come to fulfilment in life. We continually study the characters of Godly men in the Bible and encourage emulation of their good qualities. We also organise Business and Career Seminars and Workshops in pursuance of our vision.',
      color: '#2C5F2D',
      image: 'https://images.unsplash.com/photo-1624500055301-c62a900632f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzZXJ2aW5nJTIwY29tbXVuaXR5JTIwY2h1cmNofGVufDF8fHx8MTc2ODU2MzkxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="ministries" className="py-24 bg-gradient-to-b from-[#FAF9F6] to-[#BFD7EA]/20">
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
            Get Connected
          </span>
          <h2
            className="text-[#0E1E3A] font-['Playfair_Display'] mt-3 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
          >
            Our Ministries
          </h2>
          <div className="h-1 w-20 bg-[#F5B301] mx-auto mb-4"></div>
          <p className="text-[#2E2E2E] font-['Inter'] max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Find your place to serve, grow, and connect with our vibrant community
          </p>
        </motion.div>

        {/* Ministries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
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
                    opacity: hoveredIndex === index && ministry.fullDescription ? 0 : 1,
                    height: hoveredIndex === index && ministry.fullDescription ? 0 : '12rem'
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E3A]/90 to-transparent"></div>
                  <div
                    className="absolute bottom-4 left-4 p-3 rounded-lg"
                    style={{ backgroundColor: ministry.color }}
                  >
                    <ministry.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {hoveredIndex === index && ministry.fullDescription && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: ministry.color }}
                      >
                        <ministry.icon className="w-5 h-5 text-white" />
                      </motion.div>
                    )}
                    <h3
                      className="text-[#0E1E3A] font-['Playfair_Display']"
                      style={{ fontSize: '1.5rem', fontWeight: 600 }}
                    >
                      {ministry.title}
                    </h3>
                  </div>
                  
                  {/* Default Description */}
                  {(!ministry.fullDescription || hoveredIndex !== index) && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: hoveredIndex === index && ministry.fullDescription ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-[#2E2E2E] font-['Inter']">
                        {ministry.description}
                      </p>
                    </motion.div>
                  )}

                  {/* Full Description (Worship Team Only) */}
                  {ministry.fullDescription && hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="space-y-3"
                    >
                      <p className="text-[#2E2E2E] font-['Inter'] leading-relaxed text-sm">
                        {ministry.fullDescription}
                      </p>
                      {ministry.schedule && (
                        <div className="bg-gradient-to-r from-[#0E1E3A] to-[#0E1E3A]/90 rounded-lg p-4 shadow-md">
                          <p className="text-[#F5B301] font-['Inter'] text-xs leading-relaxed" style={{ fontWeight: 600 }}>
                            <span className="text-base mr-2">⏰</span>
                            {ministry.schedule}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '3rem' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="h-1 mt-4"
                    style={{ backgroundColor: ministry.color }}
                  ></motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}