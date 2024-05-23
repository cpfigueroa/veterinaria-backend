import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import conexionDB from './src/database/database.js';
import router from './routes/pacientes.routes';
import routeTurno from './routes/turnos.routes';
import routeUser from './routes/users.routes';
import routeComentario from './routes/comentarios.routes';
import './database';

// Cargar variables de entorno
dotenv.config();

// Crear instancia de la aplicación Express
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.use('/api', router);
app.use('/api', routeTurno);
app.use('/api', routeUser);
app.use('/api', routeComentario);

// Ruta de prueba
app.get('/', function (req, res) {
	res.send('¡Hola, mundo!');
});

// Conexión a la base de datos
conexionDB();

// Configurar puerto del servidor
const PORT = process.env.PORT || 4000;

// Iniciar el servidor
app.listen(PORT, () => {
	console.log(`Servidor escuchando en el puerto ${PORT}`);
});
