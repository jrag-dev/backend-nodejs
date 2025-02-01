import path from "node:path";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.join(__dirname, "www", "img", "home", "uploads"));
