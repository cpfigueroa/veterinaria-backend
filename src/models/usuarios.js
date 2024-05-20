const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuariosSchema = new Schema({
    nombreUsuario: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 60,
        unique: true

    },
    contraseña: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 60,
        unique: true

    }
})

const Usuario = mongoose.model("user", usuariosSchema)
module.exports = Usuario
