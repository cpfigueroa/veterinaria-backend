import Comentario from '../models/comentarios';
import { validateTexto, validateTextoEsp } from '../helpers/Validaciones';

const comentarioCtrl = {};

comentarioCtrl.getComentarios = async (req, res) => {
	//res.send("aqui obtengo el listado de comentarios");
	try {
		const listComentarios = await Comentario.find();
		res.status(200).json(listComentarios);
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'Error al listar los comentarios',
		});
	}
};

comentarioCtrl.postComentario = async (req, res) => {
	//res.send('aqui creo el comentario');
	try {
		if (
			validateTexto(req.body.user) &&
			validateTextoEsp(req.body.message) &&
			validateTextoEsp(req.body.date)
		) {
			const newComentario = new Comentario({
				user: req.body.user,
				message: req.body.message,
				date: req.body.date,
			});
			await newComentario.save();
			res.status(201).json({
				mensaje: 'El comentario se creo correctamente',
			});
		}
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'Error al crear un comentario',
		});
	}
};

comentarioCtrl.deleteComentario = async (req, res) => {
	//res.send("Se borro el comentario");
	try {
		await Comentario.findByIdAndDelete(req.params.id);
		res.status(200).json({
			mensaje: 'Se borro con exito el comentario',
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'No se pudo borrar el comentario',
		});
	}
};

export default comentarioCtrl;
