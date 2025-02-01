import express from "express";

const app = express();
const PORT = 3000;

//app.use(express.static("./public"));
app.use(express.json())

app.get("/", (req, res) => {
  let url = req.url;
  url = url.substring(url.indexOf("?") + 1);

  let params = url.split("&");
  let text = "";
  params.forEach(param => {
    let data = param.split("=");
    text += data[0] + " : " + data[1] + "<br/>";
  });
  res.send(`<h1>Tus datos son: <br/> ${text} </h1>`);
})

app.get("/profile", (req, res) => {
  let data = "<h1>Tus datos son: </h1>";
  Object.entries(req.query).forEach(([key, value]) => {
    let clave = key.charAt(0).toLocaleUpperCase() + key.substring(1).toLocaleLowerCase();
    let valor = value.charAt(0).toLocaleUpperCase() + value.substring(1).toLocaleLowerCase();
    data += `
    <div>
      <p>${clave}:  ${valor}</p>
    </div>
    `;
  })
  res.send(data);
})

app.get("/home", (req, res) => {
  res.send("Estas en la pagina de Home");
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});