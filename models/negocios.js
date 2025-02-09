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
      default: "images/default/default.png",
    },
    category: {
      type: String,
      enum: [
        "turismo",
        "hoteleria",
        "comida",
        "abastos",
        "licorerias",
        "farmacias",
        "moda",
        "jugueteria",
        "miscelanea",
        "industria automotriz",
        "paqueteria",
        "salud",
      ],
      required: [
        true,
        "Categoria es requerida (turismo,hoteleria, comida, abastos, licorerias, farmacias, moda, jugueteria,  miscelanea,industria automotriz,  paqueteria, salud)",
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("negocios", NegocioSchema);
