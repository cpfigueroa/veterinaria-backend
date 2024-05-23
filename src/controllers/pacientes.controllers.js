import Paciente from '../models/pacientes';
import {
	validateEmail,
	validateTexto,
	validateTelefono,
} from '../helpers/Validaciones';

const pacienteCtrl = {};

pacienteCtrl.getPacientes = async (req, res) => {
	//res.send('aqui enviaria la lista de pacientes');
	try {
		const listaPacientes = await Paciente.find();
		res.status(200).json(listaPacientes);
	} catch (error) {
		console.log(error);
		res.status(404).json({ mensaje: 'Error al intentar listar los pacientes' });
	}
};

pacienteCtrl.postPaciente = async (req, res) => {
	// res.send('doy de alta un producto');
	// console.log(req.body);
	try {
		//validar el (req.body) copiadas del front
		if (
			validateTexto(req.body.nombreDueño) &&
			validateTexto(req.body.apellidoDueño) &&
			validateEmail(req.body.email) &&
			validateTelefono(req.body.telefono) &&
			validateTexto(req.body.nombreMascota) &&
			validateTexto(req.body.especieMascota) &&
			validateTexto(req.body.razaMascota)
		) {
			//crear un obj para guardar en la BBDD
			const newPaciente = new Paciente({
				nombreDueño: req.body.nombreDueño,
				apellidoDueño: req.body.apellidoDueño,
				email: req.body.email,
				telefono: req.body.telefono,
				nombreMascota: req.body.nombreMascota,
				especieMascota: req.body.especieMascota,
				razaMascota: req.body.razaMascota,
			});
			//una vez creado se guarda en la BBDD
			await newPaciente.save();
			//enviar resp al front end
			res.status(201).json({
				mensaje: 'El producto se creo correctamente',
			});
		}
	} catch (error) {
		console.log(error);
		//envio de respuesta al front
		res.status(404).json({
			mensaje: 'Error al intentar agregar un producto',
		});
	}
};

pacienteCtrl.getPaciente = async (req, res) => {
	try {
		const pacienteBuscado = await Paciente.findById(req.params.id);
		res.status(200).json(pacienteBuscado);
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'No se pudo obtener el paciente buscado',
		});
	}
};

pacienteCtrl.putPaciente = async (req, res) => {
	try {
		if (
			validateTexto(req.body.nombreDueño) &&
			validateTexto(req.body.apellidoDueño) &&
			validateEmail(req.body.email) &&
			validateTelefono(req.body.telefono) &&
			validateTexto(req.body.nombreMascota) &&
			validateTexto(req.body.especieMascota) &&
			validateTexto(req.body.razaMascota)
		) {
			await Paciente.findByIdAndUpdate(req.params.id, req.body);
			res.status(200).json({
				mensaje: 'El paciente se actualizo correctamente',
			});
		}
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'Error al actualizar el paciente',
		});
	}
};

pacienteCtrl.deletePaciente = async (req, res) => {
	try {
		await Paciente.findByIdAndDelete(req.params.id);
		res.status(200).json({
			mensaje: 'Se elimino el paciente deseado',
		});
	} catch (error) {
		console.log(error);
		res.status(200).json({
			mensaje: 'Se elimino el paciente deseado',
		});
	}
};

export default pacienteCtrl;
