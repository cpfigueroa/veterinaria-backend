const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const conexionDB = require("./src/database/database.js");

const rutaContacto = require("./src/routes/contacto.rutas.js");

const app = express();

app.get("/", function (req, res) {
  res.send("hola gente");
  console.log("hola estoy en backend");
});

app.listen(4000);

conexionDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Rutas
app.use("/api", rutaContacto);
