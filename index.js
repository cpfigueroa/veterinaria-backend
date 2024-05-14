const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
app.get('/', function (req, res) {
    res.send('hola gente');
    console.log("hola estoy en backend")
  })
  
  app.listen(4000)
// app.set("port", 4000);
// const initApp = app.listen(app.get("port"),()=>console.log ("conectado al backend"))
// initApp();
// midlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
