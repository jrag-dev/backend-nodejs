const http = require("http");
const fs = require("fs");
const path = require("path");


const server = http.createServer((req, res) => {

  console.log(`${req.method} solicita ${req.url}`);

  if (req.url == "/") {
    fs.readFile("./public/index.html", "UTF-8", (err, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    })
  } else if (req.url.match(/.css$/)) {
    const reqPath = path.join(__dirname, "public", req.url);
    const fileStream = fs.createReadStream(reqPath, "UTF-8");

    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
  } else if (req.url.match(/.jpg$/)) {
    const reqPath = path.join(__dirname, "public", req.url);
    const fileStream = fs.createReadStream(reqPath);

    res.writeHead(200, { "Content-Type": "image/jpg" });
    fileStream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 ERROR");
  }
})

const PORT = 3005

server.listen(PORT, () => {
  console.log(`Servidor escuchando por el puerto ${PORT}`);
});
