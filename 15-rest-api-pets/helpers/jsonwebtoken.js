import jwt from "jsonwebtoken";


function generarToken(email) {
  return jwt.sign(
    {
      email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    }
  )
}


function validarToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}



export {
  generarToken,
  validarToken
}