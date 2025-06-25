import React, { useState } from 'react';

export default function Contacto() {
    const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    //se obtiene el dato
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //validacion
    const validarEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const { nombre, email, mensaje } = formData;

        //verificaciones
        if (!nombre || !email || !mensaje) {
            setError('Todos los campos son obligatorios');
            return;
        }
        if (!validarEmail(email)) {
            setError('Correo no válido');
            return;
        }

        //enviamos
        try {
            const response = await fetch('http://localhost:3000/contacto', {
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
        }
    };

    return (
        <section className="h-screen w-full bg-xtreet-gradient text-white pt-28 pb-16 px-4 overflow-y-auto scrollbar-hide">
            <div className="xtreet-blur fixed inset-0 z-0"></div>

            <div className="relative z-10 flex justify-center items-center min-h-full">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-xl bg-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-md animate-fadeInUp"
                >
                    <h2 className="text-5xl font-bold text-center mb-8">Contáctanos</h2>

                    <div className="mb-4">
                        <label className="block mb-1 text-2xl">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
                            placeholder="Tu nombre"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-2xl">Correo</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
                            placeholder="tucorreo@ejemplo.com"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-2xl">Mensaje</label>
                        <textarea
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
                            placeholder="¿En qué podemos ayudarte?"
                            rows={5}
                        />
                    </div>

                    {error && <p className="text-red-400 mb-2 text-xl text-center">{error}</p>}
                    {success && <p className="text-green-400 mb-2 text-xl text-center ">{success}</p>}

                    <button
                        type="submit"
                        className="w-full bg-[#9531F0] hover:bg-[#7a28c7] text-white font-semibold py-2 px-4 rounded transition duration-300 text-lg"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </section>

    );
}
