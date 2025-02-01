const { createServer } = require("http");


const ordenes = [
  { "nombre": "Sopa", "cantidad": 2, "estado": "servido", "mesa": 5 },
  { "nombre": "Corte de carne", "cantidad": 2, "estado": "proceso", "mesa": 4 },
  { "nombre": "Sopa", "cantidad": 1, "estado": "pagado", "mesa": 3 },
  { "nombre": "Ensalada", "cantidad": 1, "estado": "pagado", "mesa": 5 },
  { "nombre": "Pasta", "cantidad": 4, "estado": "proceso", "mesa": 1 },
]

// Create server
const server = createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/json"});
    res.end(JSON.stringify(ordenes));
  } else if (req.url == "/ordenes-proceso") {
    pedidosEnProceso(res)
  } else if (req.url == "/ordenes-sopa") {
    pedidosPorNombre(res);
  } else {
    res.writeHead(404, { "content-type": "text/plain"});
    res.end("No se encontró la solicitud requerida");
  }
})

const PORT = 5001;

server.listen(PORT, () => {
  console.log(`Servidor escuchando por el puerto: ${PORT}`);
})

const pedidosEnProceso = (res) => {
  const resp = ordenes.filter( item => {
    return item.estado === "proceso";
  })
  res.writeHead(200, { "content-type": "text/json"});
  res.end(JSON.stringify(resp));
}

const pedidosPorNombre = (res) => {
  const resp = ordenes.filter( item => {
    return item.nombre.toLocaleLowerCase() === "sopa";
  })
  res.writeHead(200, { "content-type": "text/json"});
  res.end(JSON.stringify(resp));
}