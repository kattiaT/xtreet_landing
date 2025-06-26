import React, { useState } from 'react';
import SocialIcons from './SocialIcons';

export default function Contacto() {
    const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validarEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        const { nombre, email, mensaje } = formData;

        if (!nombre || !email || !mensaje) {
            setError('Todos los campos son obligatorios');
            setLoading(false);
            return;
        }

        if (!validarEmail(email)) {
            setError('Correo no válido');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('https://xtreet-landing.onrender.com/contacto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess('Envío exitoso');
                setFormData({ nombre: '', email: '', mensaje: '' });
            } else {
                setError('Hubo un error al enviar el mensaje');
            }
        } catch (err) {
            setError('Error de conexión con el servidor');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full min-h-screen bg-xtreet-gradient text-white px-4 pt-28 pb-20 flex justify-center items-start sm:items-center overflow-x-hidden overflow-y-auto relative">
            {/* difuminado */}
            <div className="xtreet-blur fixed inset-0 z-0 pointer-events-none" />

            <div className="relative z-10 w-full max-w-lg sm:max-w-xl">
                <form
                    onSubmit={handleSubmit}
                    className="font-avant w-full bg-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md animate-fadeInUp"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Contáctanos</h2>

                    <div className="mb-4">
                        <label className="block mb-1 text-lg sm:text-xl font-medium">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                            placeholder="Tu nombre"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-lg sm:text-xl font-medium">Correo</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                            placeholder="tucorreo@ejemplo.com"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-lg sm:text-xl font-medium">Mensaje</label>
                        <textarea
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                            placeholder="¿En qué podemos ayudarte?"
                            rows={4}
                        />
                    </div>

                    {error && (
                        <div className="mb-4 text-center text-red-400 bg-red-500/10 border border-red-500 rounded-md py-2 px-4 text-sm sm:text-base font-medium">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mb-4 text-center text-green-400 bg-green-500/10 border border-green-500 rounded-md py-2 px-4 text-sm sm:text-base font-medium">
                            {success}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-[#9531F0] hover:bg-[#7a28c7] text-white font-bold py-2 px-4 rounded transition duration-300 text-base flex items-center justify-center gap-2"
                        disabled={loading}
                    >
                        {loading && (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                            </svg>
                        )}
                        {loading ? 'Enviando...' : 'Enviar mensaje'}
                    </button>

                    <div className="mt-6">
                        <SocialIcons embedded={true} />
                    </div>
                </form>
            </div>
        </section>
    );
}
