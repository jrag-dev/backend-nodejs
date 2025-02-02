const express = require("express");
const pug = require("pug");

const app = express();
const PORT = 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Templage Engine Pug", message: "Aprendiendo Node.js"})
})

app.get("/productos", (req, res) => {
  const productos = [
    {
      "nombre": "Laptop HP 504",
      "precio": 1280,
      "disponible": true
    },
    {
      "nombre": "Teclado ASUS Gamer",
      "precio": 68,
      "disponible": true
    },
    {
      "nombre": "Procesador AMD Ryden 9",
      "precio": 350,
      "disponible": true
    },
  ]

  res.render("productos", {title: "Listado de Productos", productos: productos})
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando por el puerto: ${PORT}`);
})