import mongoose, { Schema } from 'mongoose';

const comentarioSchema = new Schema({
	user: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 100,
	},

	message: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 500,
	},

	date: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 100,
	},
});

const Comentario = mongoose.model('comentario', comentarioSchema);

module.exports = Comentario;
