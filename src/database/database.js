const mongoose = require('mongoose');
const URI = process.env.URI;
const DB = process.env.DB;

const conexionDB = async () => {
	try {
		await mongoose.connect(URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`Conectado a la base de datos: ${DB}`);
	} catch (error) {
		console.error('Error al conectar a la base de datos:', error);
		process.exit(1);
	}
};

module.exports = conexionDB;
