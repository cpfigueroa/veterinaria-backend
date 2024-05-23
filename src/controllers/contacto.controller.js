const modeloContacto = require("../models/contacto.js");
const validacionContacto = require("../utils/contactovalidaciones.js");

const crearContacto = async (req, res) => {
  try {
    const cuerpoContacto = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      telefono: req.body.telefono,
      email: req.body.email,
      mensaje: req.body.mensaje,
    };

    const nuevoContacto = new modeloContacto(cuerpoContacto);
    await nuevoContacto.save();
    res.status(201).json(nuevoContacto);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { crearContacto };
