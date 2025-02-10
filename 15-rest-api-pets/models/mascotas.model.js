import Mascota from "../schemas/mascotas.schema.js";
import mongoose from "mongoose";

class MascotasModel {

  async create(mascota) {
    return await Mascota.create(mascota);
  }

  async getAll() {
    console.log("get all")
    return await Mascota.find({});
  }

  async getOne(id) {
    return await Mascota.findOne({ _id: id });
  }

  async update(id, mascota) {
    return await Mascota.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id) }, mascota, { new: true });
  }

  async delete(id) {
    return await Mascota.findOneAndDelete({_id: new mongoose.Types.ObjectId(id) });
  }
}

export default new MascotasModel();