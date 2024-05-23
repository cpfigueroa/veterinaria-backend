import User from '../models/user';
import { validateTextoEsp } from '../helpers/Validaciones';

const userCtrl = {};

userCtrl.getUser = async (req, res) => {
	//res.send('aqui traigo el user');
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'Error al listar los usuarios',
		});
	}
};

userCtrl.postUser = async (req, res) => {
	//res.send('aqui cargo el usuario');
	try {
		if (validateTextoEsp(req.body.userName) && validateTextoEsp(req.body.pass)) {
			const newUser = new User({
				userName: req.body.userName,
				pass: req.body.pass,
			});
			await newUser.save();
			res.status(201).json({
				mensaje: 'El usuario se creo correctamente',
			});
		}
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'Error al cargar el usuario',
		});
	}
};

export default userCtrl;
