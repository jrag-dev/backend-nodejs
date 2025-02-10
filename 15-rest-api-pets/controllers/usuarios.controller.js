import bcrypt from "bcrypt";
import usuariosModel from "../models/usuarios.model.js";
import { generarToken } from "../helpers/jsonwebtoken.js";


class UsuariosController {

  constructor() {

  }

  async register(req, res) {
    try {
      const { email, nombre, telefono, clave } = req.body;

      const usuarioExiste = await usuariosModel.getByEmail(email);
      if (usuarioExiste) {
        return res.status(400).json({ error: "El usuario ya existe" });
      }

      const salt = await bcrypt.genSalt(12);
      const claveEncriptada = await bcrypt.hash(clave, salt);

      const data = await usuariosModel.create({
        email,
        nombre,
        telefono,
        clave: claveEncriptada
      })
      
      res.status(201).json(data);

    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }

  async login(req, res) {
    const { email, clave } = req.body;
    try {
      const usuarioExiste = await usuariosModel.getByEmail(email);
      if (!usuarioExiste) {
        return res.status(404).json({ error: "El usuario no esta registrado"});
      }

      const claveCorrecta = await bcrypt.compare(clave, usuarioExiste.clave);
      if (!claveCorrecta) {
        return res.status(401).json({ error: "Clave incorrecta"}); // Este mensaje no se debe pasar para evitar ataques: Usuario/Clave incorrectos
      }

      const token = generarToken(email);
      
      res.status(200).json({ status: "success", token });
    } catch(err) {
      console.log(err)
      res.status(500).json(err)
    }
  }

  async profile(req, res) {
    const usuario = await usuariosModel.getByEmail(req.user.email);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado"});
    }

    const data = {
      id: usuario._id,
      email: usuario.email,
      nombre: usuario.nombre,
      telefono: usuario.telefono
    }

    res.status(200).json(data);
  }

}


export default new UsuariosController();