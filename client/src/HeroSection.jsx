import { useEffect, useState } from 'react';
import SocialIcons from './components/SocialIcons';

export default function HeroSection() {
  useEffect(() => {
    document.title = 'XTREET - Urban Vibes';
  }, []);

  const frasesXTREET = [
    "Estilo urbano, espíritu indomable",
    "Tu estilo no espera luz verde",
    "Moda que derrapa, como tu actitud"
  ];
  const [indexFrase, setIndexFrase] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexFrase((prev) => (prev + 1) % frasesXTREET.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-xtreet-gradient overflow-hidden flex items-center justify-center px-4 sm:px-8">
      {/* Luz difusa */}
      <div className="xtreet-blur"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center text-center animate-fadeInUp max-w-screen-md">
        <img
          src="assets/isologotipo blanco(1).svg"
          alt="XTREET Logo"
          className="w-64 sm:w-80 md:w-[20rem] lg:w-[32rem] mb-6"
        />

        <h2 className="font-avant text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-wide">
          Impulsa tu estilo
        </h2>

        <p className="font-avant text-base sm:text-base md:text-lg lg:text-xl text-white opacity-90 mb-12 px-4 max-w-lg font-medium">
          {frasesXTREET[indexFrase]}
        </p>

        <a
          href="#collections"
          className="font-avant animate-bounce bg-white text-black px-6 py-3 rounded-full font-bold tracking-wider text-xs md:text-sm lg:text-base sm:text-sm shadow-xtreetGlow transition-all duration-300 transform hover:scale-105"
        >
          COMPRAR AHORA
        </a>
      </div>
      <SocialIcons />
    </section>
  );
}
