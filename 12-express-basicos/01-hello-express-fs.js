import express from "express";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, "index.html");

app.get("/", (req, res) => {
  res.sendFile(file)
})

app.listen(5001, () => {
  console.log("Sevidor activo...")
})
