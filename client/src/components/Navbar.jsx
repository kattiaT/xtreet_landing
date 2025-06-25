import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="font-avant fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm text-white">
            <div className="flex justify-between items-center px-6 py-4">
                <img src="assets/Group.svg" alt="XTREET" className="h-10 md:h-12" />

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-1 rounded hover:bg-white/20 transition-colors"
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>


                <nav className="hidden md:flex gap-10 text-lg">
                    <Link to="/" className="hover:text-purple-400 transition">Inicio</Link>
                    <a href="#coleccion" className="hover:text-purple-400 transition">Colección</a>
                    <a href="#galeria" className="hover:text-purple-400 transition">Galería</a>
                    <Link to="/Contacto" className="hover:text-purple-400 transition">Contacto</Link>
                </nav>
            </div>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#31004f]/95 backdrop-blur-md py-6 px-8 space-y-4 text-white z-40">
                    <Link to="/" className="block text-lg" onClick={() => setMenuOpen(false)}>Inicio</Link>
                    <a href="#coleccion" className="block text-lg" onClick={() => setMenuOpen(false)}>Colección</a>
                    <a href="#galeria" className="block text-lg" onClick={() => setMenuOpen(false)}>Galería</a>
                    <Link to="/Contacto" className="block text-lg" onClick={() => setMenuOpen(false)}>Contacto</Link>
                </div>
            )}
        </header>
    );
}
