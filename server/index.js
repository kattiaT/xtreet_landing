require('dotenv').config(); // cargar variables de entorno desde .env
const express = require('express'); // para crear el servidor
const mongoose = require('mongoose'); // para usar Mongoose
const Contacto = require('./models/Contacto'); // modelo de contacto
const cors = require('cors');

const app = express(); // crear la app de Express
const port = 3000;

app.use(cors());
app.use(express.json()); // para permitir recibir json en las peticiones

// conectar a MongoDB usando Mongoose
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado con exito a MongoDB Atlas"))
  .catch(err => console.error("Error de conexión:", err));

// ruta GET de prueba
app.get('/', (req, res) => {
  res.send('Conexión exitosa a MongoDB desde Express');
});

// ruta POST para recibir mensajes
app.post('/contacto', async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;
    const nuevoContacto = new Contacto({ nombre, email, mensaje });
    await nuevoContacto.save();
    res.status(201).json({ mensaje: 'Mensaje guardado con éxito' });
  } catch (error) {

     // revisa si es error de validación
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
    //error generico
    res.status(500).json({ error: 'Error al guardar el mensaje' });
  }
});

//ruta GET para obtener todos los contactos
app.get('/contacto', async (req, res) => {
  try {
    const mensajes = await Contacto.find(); // trae todos los documentos de la colección
    res.json(mensajes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
});

// iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
