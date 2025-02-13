import { Schema, model } from "mongoose";


const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      trim: true
    },
    price: {
      type: Number,
      min: 0
    },
    imgURL: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default model('Product', productSchema);