import mongoose, { Schema } from 'mongoose';

const turnoSchema = new Schema({
	detalleCita: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 500,
	},

	veterinario: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 15,
	},

	mascota: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 100,
	},

	startDate: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 100,
	},
});

const Turno = mongoose.model('turno', turnoSchema);

module.exports = Turno;
