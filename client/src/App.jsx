import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import SocialIcons from './components/SocialIcons';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Router>

        <SocialIcons />
        <Navbar />

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <ParticlesBackground />

      </Router>
    </div>
  );
}

export default App;
