const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const conexionDB = require("./src/database/database.js");
const mongoose = require("mongoose")


const app = express();

app.get('/', function (req, res) {
    res.send('hola gente');
    console.log("hola estoy en backend")
  })
  
  app.listen(4000)

 conexionDB();
// app.set("port", 4000);
// const initApp = app.listen(app.get("port"),()=>console.log ("conectado al backend"))
// initApp();
// midlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
