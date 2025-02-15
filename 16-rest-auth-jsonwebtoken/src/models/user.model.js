import { Schema, model } from "mongoose";


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      }
    ],
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default model('User', userSchema);