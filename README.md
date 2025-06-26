******************* XTREET – Landing Page ************************


1. Instrucciones para correr el proyecto

- Tener instalado Node.js en el equipo.

Clonar el proyecto:
    https://github.com/kattiaT/xtreet_landing.git

Instalar dependencias del cliente (frontend)
    cd client
    npm install

Instalar dependencias del servidor (backend)
    cd ../server
    npm install

Crear archivo .env (opcional)
    Ubicado dentro de la carpeta /server con el siguiente contenido si se desea usar MongoDB:
        MONGO_URI=mongodb+srv://usuario:clave@cluster.mongodb.net/xtreet
        PORT=3000

Correr el backend
    cd server
    node index.js

Correr el frontend
    cd ../client
    npm run dev



2. Tecnologías utilizadas

React + Vite: 
    Para construir el sitio web de forma modular, rápida y eficiente. Vite permite un desarrollo más ágil y tiempos de carga inmediatos.

Tailwind CSS: 
    Para estilizar la interfaz con clases utilitarias. Se aprovechó su sistema de breakpoints y personalización de temas.

Node.js y Express:
    Para crear una API básica capaz de recibir los datos del formulario.

MongoDB Atlas:
    Para conectarse a una base remota.

react-tsparticles:
    Para partículas animadas en el fondo.

FontAwesome:
    Se usaron sus íconos para las redes sociales, con animaciones adaptadas a cada vista.



3. Justificación de decisiones técnicas

Separación de responsabilidades: 
    se dividió el código en dos carpetas (client y server) para organizar mejor el frontend y el backend, permitiendo mantener un desarrollo más claro, mantenible y fácil de escalar.

Diseño responsive: 
    se priorizó que el sitio funcione y se vea bien tanto en dispositivos móviles como para pantallas más grandes, esto para una mejor experiencia de usuario.

Componentes reutilizables: 
    se implementaron secciones como el navbar, los íconos sociales o el formulario en componentes separados para reutilizarlos fácilmente, mantener el código más limpio y evitar repeticiones innecesarias.

Validaciones tanto en frontend como backend: 
    para mejorar la experiencia del usuario y reducir errores.

Uso de animaciones sutiles: 
    se aplicaron efectos suaves que resaltan la marca sin distraer al usuario.



4. Despliegue funcional

El proyecto fue desplegado en las siguientes plataformas:

    Frontend (React):https://xtreet-landing.vercel.app/

    Backend (API Express):https://xtreet-landing.onrender.com
        Para consultar los datos de la bd: https://xtreet-landing.onrender.com/contacto


5. Código PlantUML
    @startuml
    title Arquitectura del Sitio Web - XTREET

    actor Usuario

    package "Frontend (React + Vite)" {
    component "Navbar\n(Navegación superior)" as Navbar
    component "HeroSection\n(Inicio)" as Hero
    component "Contacto\n(Formulario)" as Contacto
    component "Rutas\n(React Router)" as Router
    component "Estilos\n(TailwindCSS)" as Tailwind
    }

    package "Backend (Node.js + Express)" {
    component "API REST\nPOST /contacto" as API
    database "MongoDB Atlas\n(Base de datos remota)" as DB
    }

    Usuario --> Navbar : Visita el sitio
    Navbar --> Router
    Router --> Hero
    Router --> Contacto

    Contacto --> API
    API --> DB

    @enduml
