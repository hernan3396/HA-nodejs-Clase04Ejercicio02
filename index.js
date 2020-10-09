const mongoose = require("mongoose");

const express = require("express");
const app = express();
app.use(express.json());
const routes = require("./routes.js");

mongoose.connect("mongodb://localhost/clase05_ejercicio02", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

mongoose.connection.once("open", () => {
  console.log("Conexion establecida");
});

routes(app);

app.listen(3000);
