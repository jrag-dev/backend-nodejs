import mongoose from 'mongoose';
const { Schema } = mongoose;


const usuarioScheme = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    telefono: {
      type: String,
      required: false
    },
    clave: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
)


export default mongoose.model("usuarios", usuarioScheme);