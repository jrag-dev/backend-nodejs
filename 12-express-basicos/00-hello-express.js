import express from "express";


const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  console.log("app: ", req.app)
  console.log("baseUrl: ", req.baseUrl)
  console.log("body: ", req.body)
  console.log("cookies: ", req.cookies)
  console.log("fresh: ", req.fresh)
  console.log("hostname: ", req.hostname)
  console.log("ip: ", req.ip)
  console.log("ips: ", req.ips)
  console.log("method: ", req.method)
  console.log("originalUrl: ", req.originalUrl)
  console.log("params: ", req.params)
  console.log("path: ", req.path)
  console.log("protocol: ", req.protocol)
  console.log("query: ", req.query)
  console.log("res: ", req.res)
  console.log("route: ", req.route)
  console.log("secure: ", req.secure)
  console.log("signedCookies: ", req.signedCookies)
  console.log("subdomains: ",req.subdomains)
  console.log("xhr: ", req.xhr)
  res.send(`
    <h1>Hello World</h1>
    <p>Aprendiendo Expres.js</p>  
  `)
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando por el puerto: ${PORT}`)
})