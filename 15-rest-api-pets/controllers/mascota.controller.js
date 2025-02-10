import mascotasModel from "../models/mascotas.model.js"

class MascotasController {

  constructor() {

  }

  async getAll(req, res) {
    try {
      const mascotas = await mascotasModel.getAll();
       res.status(200).json(mascotas);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async create(req, res) {
    try {
      const data = await mascotasModel.create(req.body);
      res.status(201).json(data);
   } catch (err) {
     res.status(500).send(err);
   }
  }

  async getOne(req, res) {
    try {
      const mascota = await mascotasModel.getOne(req.params.id);

      if (!mascota) {
        return res.status(404).json({ message: "Mascota no encontrada"})
      }
       res.status(200).json(mascota);
    } catch (err) {
      console.log(err)
      res.status(500).send(err);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const mascota = await mascotasModel.update(id, req.body);
      res.status(200).json(mascota);
    } catch (err) {
      console.log(err)
      res.status(500).send(err);
    }
  }

  async delete(req, res) {
    console.log(req.user)
    try {
      const data = await mascotasModel.delete(req.params.id);
      res.status(206).json(data);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}


export default new MascotasController();