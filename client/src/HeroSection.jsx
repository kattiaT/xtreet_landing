import { useEffect, useState } from 'react';

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
      <div className="relative z-10 flex flex-col items-center text-center animate-fadeInUp scale-[1] sm:scale-[1.05] md:scale-[1.1] lg:scale-[1.15] max-w-[90vw] sm:max-w-[85vw]">
        <img
          src="assets/isologotipo blanco(1).svg"
          alt="XTREET Logo"
          className="w-[14rem] sm:w-[18rem] md:w-[24rem] lg:w-[32rem] mb-6"
        />

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 tracking-wide">
          Impulsa tu estilo
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-white italic opacity-90 mb-10 max-w-lg">
          {frasesXTREET[indexFrase]}
        </p>

        <a
          href="#collections"
          className="animate-bounce bg-white text-black px-6 py-3 rounded-full font-semibold tracking-wider text-base md:text-lg shadow-xtreetGlow transition-all duration-300 transform hover:scale-105"
        >
          COMPRAR AHORA
        </a>
      </div>
    </section>
  );
}
