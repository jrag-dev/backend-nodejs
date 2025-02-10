import Usuario from "../schemas/usuarios.schema.js";
import mongoose from "mongoose";

class UsuariosModel {

  async create(usuario) {
    return await Usuario.create(usuario);
  }

  async getAll() {
    return await Usuario.find({});
  }

  async getOne(id) {
    return await Usuario.findOne({ _id: id });
  }

  async getByEmail(email) {
    return await Usuario.findOne({ email: email });
  }

  async update(id, usuario) {
    return await Usuario.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id) }, usuario, { new: true });
  }

  async delete(id) {
    return await Usuario.findOneAndDelete({_id: new mongoose.Types.ObjectId(id) });
  }
}

export default new UsuariosModel();