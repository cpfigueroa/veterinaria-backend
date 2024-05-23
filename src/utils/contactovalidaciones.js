const modeloContacto = require("../models/contacto.js");

const validacionTexto = (texto) => {
  return (
    typeof text === "string" &&
    text.trim().length >= 3 &&
    text.trim().length <= 500
  );
};

module.exports = validacionTexto;
