const mongoose = require("mongoose");

const NegocioPageSchema = new mongoose.Schema(
  {
    negocioID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "negocios",
      required: true,
    },

    title: {
      type: String,
      required: [true, "Titulo es requerido"],
      minLength: 3,
    },
    product: {
      type: String,
      required: [true, "Nombre de producto es requerido"],
      minLength: 3,
    },
    description: {
      type: String,
      required: [true, "Descripcion es requerida"],
      minLength: 3,
    },
    email: {
      type: String,
    },
    instagram: {
      type: String,
    },
    whatsapp: {
      type: String,
    },
    addressBook: {
      type: String,
    },
    location: {
      type: String,
    },
    image1: {
      type: String,
    },
    image2: {
      type: String,
    },
    image3: {
      type: String,
    },
    image4: {
      type: String,
    },
    image5: {
      type: String,
    },
    image6: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("negocioPage", NegocioPageSchema);
