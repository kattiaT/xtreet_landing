# XTREET Landing Page 🧢🔥

Landing page oficial de **XTREET**, una marca de moda urbana inspirada en el streetwear y racing. Este sitio web funciona como carta de presentación digital y base para futuras integraciones e-commerce.

---

## 🚀 Tecnologías utilizadas

### Frontend:
- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) – SPA rápida y moderna.
- [Tailwind CSS](https://tailwindcss.com/) – Utilizado para un diseño responsivo, visualmente atractivo y totalmente personalizado según el brand book.
- [react-tsparticles](https://github.com/matteobruni/tsparticles) – Para partículas animadas en el fondo.
- Animaciones: Transiciones personalizadas con clases utilitarias y efectos visuales.

### Backend:
- [Node.js](https://nodejs.org/) con [Express](https://expressjs.com/)
- Almacenamiento de contacto: (puede ser mock JSON o MongoDB Atlas si se configuró)
- Validación básica en backend y respuesta con mensaje de éxito/error.

---

## 🧩 Estructura del proyecto
xtreet_landing/
├── client/ # Frontend React + Tailwind
├── server/ # Backend Express
└── README.md


---

## 📝 Justificación de decisiones técnicas

- Se eligió **React + Vite** por su velocidad de desarrollo y carga.
- Tailwind CSS permite aplicar estilos del brand book de forma flexible y responsiva.
- Express es una solución simple y escalable para crear el backend.
- El formulario simula envío o guarda en backend dependiendo de la configuración.

---

## 📫 Secciones implementadas

1. **Hero / Presentación:** Logo y animaciones de impacto visual con fondo dinámico.
2. **About Us / Acerca de XTREET:** Breve historia y visión de la marca.
3. **Products / Galería:** Tarjetas estilizadas con espacio para productos (mockeados o estáticos).
4. **Contacto:** Formulario funcional con validación de nombre, correo y mensaje (con backend).

---

## 🧪 Cómo correr el proyecto localmente

### Requisitos:
- Node.js instalado

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/xtreet_landing.git
cd xtreet_landing


Instalar dependencias
Frontend:
cd client
npm install
npm run dev

Backend:
cd ../server
npm install
npm start


🌐 Deploy
Este proyecto también puede desplegarse en servicios como:

Frontend: Vercel, Netlify

Backend: Render o Railway

👉 (Agregá aquí el link al deploy si lo tenés)



📦 Control de versiones
Este proyecto fue versionado con Git y se encuentra disponible en el siguiente repositorio:

🔗 https://github.com/tu-usuario/xtreet_landing