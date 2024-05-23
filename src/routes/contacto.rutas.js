const express = require("express");
const { crearContacto } = require("../controllers/contacto.controller.js");

const router = express.Router();

router.post("/contacto", crearContacto);

module.exports = router;
