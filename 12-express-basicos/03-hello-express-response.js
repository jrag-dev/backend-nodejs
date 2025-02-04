import express from "express";
import nunjucks from 'nunjucks';
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;


nunjucks.configure(join(__dirname, 'views'), {
    autoescape: true,
    express: app
});

app.set("view engine", "njk");


app.get("/", (req, res) => {
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.send("<h1>Hola mundo desde Express.js</h1>")
})

app.get("/json", (req, res) => {
  res.json({
    name: "Jose Alvarado",
    age: 36,
    github: "jrag-dev"
  })
})

app.get("/file", (req, res) => {
  res.sendFile(resolve("index.html"))
})

app.get("/plantilla", (req, res) => {
  res.render("index", { title: "Mi página", message: "Hola, Mundo!"})
})


app.get("/github", (req, res) => {
  //res.send("<h1>Bienvenidos a github.com</h1>")
  res.redirect(307, "https:github.com/jrag-dev")
})


app.listen(PORT, () => {
  console.log(`Servidor escuchando por el puerto: ${PORT}`);
})