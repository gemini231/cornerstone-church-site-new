import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Video, Bell } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function ServiceTimes() {
  const services = [
    {
      day: 'Worship Service',
      dayName: 'Sundays',
      time: '11:30 AM - 1:30 PM',
      type: '',
      icon: Calendar,
      virtual: true,
      link: '#home',
    },
    {
      day: 'Bible Study',
      dayName: 'Wednesdays',
      time: '6:30 PM - 7:30 PM',
      type: '',
      icon: Clock,
      virtual: true,
      link: '#home',
    },
    {
      day: 'Prayer Meeting',
      dayName: 'Fridays',
      time: '6:00 PM - 7:30 PM',
      type: '',
      icon: Video,
      virtual: true,
      link: '#home',
    },
  ];

  const handleServiceClick = (link?: string) => {
    if (link) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Focus on Watch Live button after scroll
        setTimeout(() => {
          const watchLiveBtn = document.querySelector('[data-watch-live]');
          if (watchLiveBtn) {
            (watchLiveBtn as HTMLElement).focus();
          }
        }, 800);
      }
    }
  };

  return (
    <section className="relative -mt-20 z-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-[#FAF9F6] shadow-2xl border-t-4 border-[#F5B301] overflow-hidden">
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-start gap-4 p-4 rounded-lg transition-colors ${
                      service.virtual 
                        ? 'hover:bg-[#BFD7EA]/20 cursor-pointer' 
                        : 'hover:bg-[#BFD7EA]/20'
                    }`}
                    onClick={() => handleServiceClick(service.link)}
                  >
                    <div className="bg-[#0E1E3A] p-3 rounded-lg flex-shrink-0">
                      <service.icon className="w-6 h-6 text-[#F5B301]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['Inter'] text-[#0E1E3A] mb-1" style={{ fontWeight: 600 }}>
                        {service.day}
                      </h3>
                      <p className="text-[#F5B301] font-['Playfair_Display']" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                        {service.time}
                      </p>
                      <p className="text-[#2E2E2E] font-['Inter'] text-sm mt-1">
                        {service.dayName}
                      </p>
                      {service.virtual && (
                        <p className="text-[#0E1E3A] font-['Inter'] text-xs mt-2 opacity-70">
                          Click to watch live
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Special Service Note - Scrolling News Flash */}
              <div className="mt-6 p-4 bg-[#0E1E3A] rounded-lg border-l-4 border-[#F5B301] overflow-hidden">
                <div className="overflow-hidden">
                  <motion.p
                    initial={{ x: '100%' }}
                    animate={{ x: '-100%' }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="text-[#FAF9F6] font-['Inter'] text-sm italic whitespace-nowrap inline-block"
                  >
                    <span style={{ fontWeight: 600 }}>Thanksgiving Service:</span> Last Sunday of every month — Join us for a special time of gratitude and worship &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </motion.p>
                </div>
              </div>

              {/* Zoom Link Info */}
              <div className="mt-6 p-4 bg-[#0E1E3A] rounded-lg">
                <p className="text-[#F5B301] font-['Inter'] mb-2" style={{ fontWeight: 600 }}>
                  Join Sunday Service Online
                </p>
                <p className="text-[#BFD7EA] font-['Inter'] text-sm mb-2">
                  Meeting ID: 851 5944 5381
                </p>
                <a 
                  href="https://us02web.zoom.us/j/85159445381?pwd=ZjZaY1Q4OWhyYkJVYlF3cnRaQTY4dz09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#BFD7EA] hover:text-[#F5B301] font-['Inter'] text-sm underline transition-colors"
                >
                  Click here to join via Zoom
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-[#0E1E3A]/10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  className="bg-[#0E1E3A] hover:bg-[#1E2A38] text-[#FAF9F6] font-['Inter'] uppercase tracking-wide"
                  style={{ fontWeight: 600 }}
                >
                  <a
                    href="https://maps.app.goo.gl/LXSo9JiodAFMRvDG7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[#0E1E3A] text-[#0E1E3A] hover:bg-[#0E1E3A] hover:text-[#FAF9F6] font-['Inter'] uppercase tracking-wide"
                  style={{ fontWeight: 600 }}
                >
                  <a
                    href="https://docs.google.com/forms/d/1USeJvQXMIhGRCXJyKI20AcCqrZvaJCN7ktAI0JxlOMw/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Bell className="w-4 h-4 mr-2" />
                    Plan Your Visit
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}