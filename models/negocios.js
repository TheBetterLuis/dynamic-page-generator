const mongoose = require("mongoose");

const NegocioSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nombre es requerido"],
      minLength: 3,
    },
    description: {
      type: String,
      required: [true, "Descripcion es requerida"],
      minLength: 3,
    },
    image: {
      type: String,
      default: "../public/images/default/default.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("negocios", NegocioSchema);
