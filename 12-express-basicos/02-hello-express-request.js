import express from "express";


const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.end("<h1>Hola mundo desde Express.js</h1>")
})

app.get("/user/:id-:name-:age", (req, res) => {
  // http://localhost:3000/user/101-jose-36
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.end(`
    <h1>
      ${req.params.name}, bienvenido a Express.js. Tu id es ${req.params.id} y tienes ${req.params.age} años.
    </h1>
  `)
})

app.get("/search", (req, res) => {
  // http://localhost:3000/search?id=101&name=jose&age=36
  res.set({ "content-type": "text/html; charset=utf-8" });
  res.end(`
    <h1>
      ${req.query.name}, bienvenido a Express.js. Tu id es ${req.query.id} y tienes ${req.query.age} años.
    </h1>
  `)
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando por el puerto: ${PORT}`);
})