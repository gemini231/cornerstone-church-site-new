import { motion } from 'motion/react';
import { Play, Calendar, User } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Sermons() {
  const sermons = [
    {
      title: '',
      speaker: 'Pastor Ademola Fasubaa',
      date: 'Jan 7, 2026',
      duration: '45 min',
      thumbnail: 'https://images.unsplash.com/photo-1579975096649-e773152b04cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwfGVufDF8fHx8MTc2Nzc5NjkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Latest',
    },
    {
      title: '',
      speaker: 'Pastor Ademola Fasubaa',
      date: 'Dec 31, 2025',
      duration: '52 min',
      thumbnail: 'https://images.unsplash.com/photo-1520187044487-b2efb58f0cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBoYW5kc3xlbnwxfHx8fDE3Njc3Nzg0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Latest',
    },
    {
      title: '',
      speaker: 'Pastor Ademola Fasubaa',
      date: 'Dec 24, 2025',
      duration: '38 min',
      thumbnail: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5fGVufDF8fHx8MTc2Nzg3NzEyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Popular',
    },
    {
      title: '',
      speaker: 'Pastor Ademola Fasubaa',
      date: 'Dec 17, 2025',
      duration: '48 min',
      thumbnail: 'https://images.unsplash.com/photo-1594913434694-2164156256c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHdvcnNoaXB8ZW58MXx8fHwxNzY3ODc3MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Series',
    },
    {
      title: '',
      speaker: 'Pastor Ademola Fasubaa',
      date: 'Dec 10, 2025',
      duration: '41 min',
      thumbnail: 'https://images.unsplash.com/photo-1625246433906-6cfa33544b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzY3NzYwODI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Popular',
    },
    {
      title: '',
      speaker: 'Pastor Ademola Fasubaa',
      date: 'Dec 3, 2025',
      duration: '55 min',
      thumbnail: 'https://images.unsplash.com/photo-1695938746747-ec185ea81325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBmYW1pbHl8ZW58MXx8fHwxNzY3ODc3MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Series',
    },
  ];

  const SermonCard = ({ sermon }: { sermon: typeof sermons[0] }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden bg-[#0E1E3A]">
          <img
            src={sermon.thumbnail}
            alt={sermon.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E3A] to-transparent"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#F5B301] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <Play className="w-6 h-6 text-[#0E1E3A] ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute top-4 right-4 bg-[#0E1E3A]/90 text-[#FAF9F6] px-3 py-1 rounded-full text-sm font-['Inter']">
            {sermon.duration}
          </div>
        </div>

        <div className="p-5">
          <h3
            className="text-[#0E1E3A] font-['Playfair_Display'] mb-3 group-hover:text-[#F5B301] transition-colors"
            style={{ fontSize: '1.25rem', fontWeight: 600 }}
          >
            {sermon.title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-[#2E2E2E] font-['Inter']">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{sermon.speaker}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{sermon.date}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <section id="sermons" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#F5B301] font-['Inter'] uppercase tracking-wider" style={{ fontWeight: 600 }}>
            Messages
          </span>
          <h2
            className="text-[#0E1E3A] font-['Playfair_Display'] mt-3 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
          >
            Sermons & Media
          </h2>
          <div className="h-1 w-20 bg-[#F5B301] mx-auto mb-4"></div>
          <p className="text-[#2E2E2E] font-['Inter'] max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Watch or listen to life-changing messages from our services
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="latest" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-[#BFD7EA]/30">
            <TabsTrigger value="latest" className="font-['Inter']">Latest</TabsTrigger>
            <TabsTrigger value="popular" className="font-['Inter']">Popular</TabsTrigger>
            <TabsTrigger value="series" className="font-['Inter']">Series</TabsTrigger>
          </TabsList>

          <TabsContent value="latest">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sermons.filter(s => s.category === 'Latest').map((sermon, index) => (
                <SermonCard key={index} sermon={sermon} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sermons.filter(s => s.category === 'Popular').map((sermon, index) => (
                <SermonCard key={index} sermon={sermon} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="series">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sermons.filter(s => s.category === 'Series').map((sermon, index) => (
                <SermonCard key={index} sermon={sermon} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-[#0E1E3A] hover:bg-[#1E2A38] text-[#FAF9F6] font-['Inter'] px-8 uppercase tracking-wider"
            style={{ fontWeight: 600 }}
          >
            View All Sermons
          </Button>
        </motion.div>
      </div>
    </section>
  );
}