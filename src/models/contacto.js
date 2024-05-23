const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    max: 60,
    min: 3,
  },
  apellido: {
    type: String,
    required: true,
    max: 60,
    min: 3,
  },
  telefono: {
    type: String,
    required: true,
    max: 60,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    max: 60,
    min: 3,
  },
  mensaje: {
    type: String,
    required: true,
    max: 500,
    min: 10,
  },
});

const Contacto = mongoose.model("contacto", contactoSchema);
module.exports = Contacto;
