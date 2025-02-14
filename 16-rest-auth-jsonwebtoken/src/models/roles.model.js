const { Schema, model } = require("mongoose");


const rolesSchema = new Schema(
  {
    name: String
  },
  {
    versionKey: false
  }
)

export default model('Role', rolesSchema);