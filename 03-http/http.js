import http from "node:http";


const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
        <link href="css/style.css" rel="stylesheet">
      </head>
      <body>
        <h1>Hola Mundo</h1>
        <p>Bienvenido a mi servidor</p>
      </body>
    </html>
  `)
})


server.listen(3001, () => {
  console.log("Servidor iniciado...");
});
