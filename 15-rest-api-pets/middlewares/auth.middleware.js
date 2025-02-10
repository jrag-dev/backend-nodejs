import { validarToken } from "../helpers/jsonwebtoken.js";

function autorizarUsuario(req, res, next) {

  const authorization = req.headers.authorization ? req.headers["authorization"] : null;
  const token = authorization ? authorization.slice(7,) : null;

  if (!token) {
    return res.status(400).json({ error: "Token no enviado" });
  }

  try {
    const decoded = validarToken(token);
    req.user = {
      email: decoded.email
    }
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token no válido" });
  }
}

export { autorizarUsuario }