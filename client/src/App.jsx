import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import SocialIcons from './components/SocialIcons';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Router>

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
