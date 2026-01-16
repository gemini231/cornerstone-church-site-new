import { motion } from 'motion/react';
import { Play, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579975096649-e773152b04cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3b3JzaGlwfGVufDF8fHx8MTc2Nzc5NjkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Church Worship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1E3A]/90 via-[#0E1E3A]/70 to-[#0E1E3A]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block mb-6">
            <div className="h-1 w-20 bg-[#F5B301] mx-auto mb-4"></div>
          </div>
          
          <h1
            className="text-[#FAF9F6] font-['Playfair_Display'] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.2 }}
          >
            CHRIST THE CORNERSTONE
            <span className="block text-[#F5B301]">TABERNACLE</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p
              className="text-[#BFD7EA] font-['Inter'] mb-4 max-w-2xl mx-auto"
              style={{ fontSize: '1.25rem', lineHeight: 1.6 }}
            >
              Welcome to the Fellowship of Saints -Ephesians 2:19-22
            </p>
            <p className="text-[#9DB8A0] font-['Inter'] mb-10 max-w-2xl mx-auto">
              A place of faith, hope, and community where families and youth come together in worship
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#F5B301] hover:bg-[#C9A24D] text-[#0E1E3A] font-['Inter'] px-8 py-6 text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
              style={{ fontWeight: 600 }}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Join Us This Sunday
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#FAF9F6] text-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#0E1E3A] font-['Inter'] px-8 py-6 text-lg uppercase tracking-wider transition-all !opacity-100 bg-transparent"
              style={{ fontWeight: 600, opacity: 1 }}
              asChild
            >
              <a
                href="https://us02web.zoom.us/j/85159445381?pwd=ZjZaY1Q4OWhyYkJVYlF3cnRaQTY4dz09"
                target="_blank"
                rel="noopener noreferrer"
                className="!opacity-100"
                style={{ opacity: 1 }}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Live
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#C9A24D] rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-[#C9A24D] rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}