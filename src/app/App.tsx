import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ServiceTimes } from './components/ServiceTimes';
import { About } from './components/About';
import { Ministries } from './components/Ministries';
import { Sermons } from './components/Sermons';
import { GetInvolved } from './components/GetInvolved';
import { Giving } from './components/Giving';
import { GivingDetails } from './components/GivingDetails';
import { Footer } from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <ServiceTimes />
      <About />
      <Ministries />
      <Sermons />
      <GetInvolved />
      <Giving />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FAF9F6] font-['Inter']">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/giving-details" element={<GivingDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}