import Turno from '../models/turnos';
import { validateTextoEsp } from '../helpers/Validaciones';

const turnoCtrl = {};

turnoCtrl.getTurnos = async (req, res) => {
	try {
		const listTurnos = await Turno.find();
		res.status(200).json(listTurnos);
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'Error al intentar listar los turnos',
		});
	}
};

turnoCtrl.postTurno = async (req, res) => {
	try {
		if (
			validateTextoEsp(req.body.detalleCita) &&
			validateTextoEsp(req.body.veterinario) &&
			validateTextoEsp(req.body.mascota) &&
			validateTextoEsp(req.body.startDate)
		) {
			const newTurno = new Turno({
				detalleCita: req.body.detalleCita,
				veterinario: req.body.veterinario,
				mascota: req.body.mascota,
				startDate: req.body.startDate,
			});
			await newTurno.save();
			res.status(201).json({
				mensaje: 'El turno se creo correctamente',
			});
		}
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'Error al intentar agregar un turno',
		});
	}
};

turnoCtrl.getTurno = async (req, res) => {
	try {
		const turnoBuscado = await Turno.findById(req.params.id);
		res.status(200).json(turnoBuscado);
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'No se pudo obtener el turno',
		});
	}
};

turnoCtrl.putTurno = async (req, res) => {
	try {
		if (
			validateTextoEsp(req.body.detalleCita) &&
			validateTextoEsp(req.body.veterinario) &&
			validateTextoEsp(req.body.mascota) &&
			validateTextoEsp(req.body.startDate)
		) {
			await Turno.findByIdAndUpdate(req.params.id, req.body);
			res.status(200).json({
				mensaje: 'Se actualizo los datos del turno',
			});
		}
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'No se pudo actualizar los datos',
		});
	}
};

turnoCtrl.deleteTurno = async (req, res) => {
	try {
		await Turno.findByIdAndDelete(req.params.id);
		res.status(200).json({
			mensaje: 'Se borro el turno deseado',
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'No se pudo eliminar el turno',
		});
	}
};

export default turnoCtrl;
