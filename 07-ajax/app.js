const express = require("express");
const path = require("node:path");
const fs = require("node:fs");


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.get("/", (req, res) => {

  res.setHeader("Content-type", "text/html");
  res.sendFile("./public/index.html");
})

app.get("/obtener-peliculas", (req, res) => {
  const file = fs.readFileSync("./peliculas.json", "UTF-8");
  
  res.setHeader("Content-type", "text/json");
  res.send(file);
})

app.post("/new", (req, res) => {
  res.setHeader("Content-type", "text/plain");
  const nombre = req.body.nombre;
  const rating = req.body.rating;

  // Abrir archivo
  let file = fs.readFileSync("./peliculas.json", "UTF-8");

  // convertirlo a un arreglo
  const json = JSON.parse(file);

  // insertar un nuevo elemento
  json.peliculas.push({"nombre": nombre, "rating": parseInt(rating)});

  // guardar json en el archivo
  file = fs.writeFileSync("./peliculas.json", JSON.stringify(json));

  res.send("Datos guardados con exito")
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando por el puerto: ${PORT}`);
})

