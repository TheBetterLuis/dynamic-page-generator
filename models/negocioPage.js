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

    product1: {
      type: String,
      required: [true, "Nombre de producto es requerido"],
      minLength: 3,
    },
    description1: {
      type: String,
      required: [true, "Descripcion es requerida"],
      minLength: 3,
    },
    image1: {
      type: String,
    },
    //-----------------
    product2: {
      type: String,
      minLength: 3,
    },
    description2: {
      type: String,
      minLength: 3,
    },
    image2: {
      type: String,
    },

    //-----------------
    product3: {
      type: String,
      minLength: 3,
    },
    description3: {
      type: String,
      minLength: 3,
    },
    image3: {
      type: String,
    },

    //-----------------
    product4: {
      type: String,
      minLength: 3,
    },
    description4: {
      type: String,
      minLength: 3,
    },
    image4: {
      type: String,
    },

    //-----------------
    product5: {
      type: String,
      minLength: 3,
    },
    description5: {
      type: String,
      minLength: 3,
    },
    image5: {
      type: String,
    },

    //-----------------
    product6: {
      type: String,
      minLength: 3,
    },
    description6: {
      type: String,
      minLength: 3,
    },
    image6: {
      type: String,
    },

    //-----------------
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("negocioPage", NegocioPageSchema);
