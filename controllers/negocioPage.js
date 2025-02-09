const negocioPageModel = require("../models/negocioPage");
//const path = require("path");

const getNegociosPages = async (req, res) => {
  const negociosPages = await negocioPageModel.find();
  res.status(200).json(negociosPages);
};

const getNegocioPageByNegocioID = async (req, res) => {
  try {
    const { id } = req.body;
    const negocioPage = await negocioPageModel.find({ _id: id });
    res.status(200).json(negocioPage);
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
};

const updateNegocioPage = async (req, res) => {
  try {
    const { id } = req.body;

    const negocioPage = await negocioPageModel.findById(id);

    if (!negocioPage) {
      return res
        .status(404)
        .json({ message: "Pagina de negocio no encontrada" });
    }

    if (req.body.negocioID) negocioPage.negocioID = req.body.negocioID;
    if (req.body.title) negocioPage.title = req.body.title;
    if (req.body.product) negocioPage.product = req.body.product;
    if (req.body.description) negocioPage.description = req.body.description;
    if (req.body.email) negocioPage.email = req.body.email;
    if (req.body.instagram) negocioPage.instagram = req.body.instagram;
    if (req.body.whatsapp) negocioPage.whatsapp = req.body.whatsapp;
    if (req.body.addressBook) negocioPage.addressBook = req.body.addressBook;
    if (req.body.location) negocioPage.location = req.body.location;
    if (req.body.image1) negocioPage.image1 = req.body.image1;
    if (req.body.image2) negocioPage.image2 = req.body.image2;
    if (req.body.image3) negocioPage.image3 = req.body.image3;
    if (req.body.image4) negocioPage.image4 = req.body.image4;
    if (req.body.image5) negocioPage.image5 = req.body.image5;
    if (req.body.image6) negocioPage.image6 = req.body.image6;

    const updatedNegocioPage = await negocioPage.save();

    res.status(200).json(updatedNegocioPage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNegocioPage = async (req, res) => {
  try {
    const { negocioID, title, product, description } = req.body;

    const negocioPageData = {
      negocioID,
      title,
      product,
      description,
    };

    if (req.body.email) negocioPageData.email = req.body.email;
    if (req.body.instagram) negocioPageData.instagram = req.body.instagram;
    if (req.body.whatsapp) negocioPageData.whatsapp = req.body.whatsapp;
    if (req.body.addressBook)
      negocioPageData.addressBook = req.body.addressBook;
    if (req.body.location) negocioPageData.location = req.body.location;

    const negocioPage = await negocioPageModel.create(negocioPageData);

    res.status(201).json(negocioPage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNegocioPage = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedNegocioPage = await negocioModel.findByIdAndDelete(id);
    if (!deletedNegocioPage) {
      res.status(404).json({ message: "Pagina de negocio no encontrada" });
    }
    res
      .status(200)
      .json({ message: "Pagina de negocio eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*

const getTechUsers = async (req, res) => {
  try {
    const users = await userModel.find({ role: "tech" });
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
};

const getRegularUsers = async (req, res) => {
  try {
    const users = await userModel.find({
      $or: [{ role: "free" }, { role: "premium" }],
    });
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
};
const uploadNegocioImage = async (req, res) => {
  try {
    const negocioID = req.params.id;
    let image = req.file ? req.file.path : null;

    if (image) {
      image = path.join(
        "images",
        negocioID,
        `${negocioID}${path.extname(req.file.originalname)}`
      );
    }

    const negocio = await negocioModel.findByIdAndUpdate(
      negocioID,
      {
        image,
      },
      { new: true }
    );

    if (!negocio) {
      return res.status(404).json({ message: "Ticket no encontrado" });
    }

    res.status(201).json(negocio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNegociosByCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const negocios = await negocioModel.find({
      category,
    });
    res.status(200).json(negocios);
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
};
*/

module.exports = {
  getNegociosPages,
  getNegocioPageByNegocioID,
  createNegocioPage,
  deleteNegocioPage,
  updateNegocioPage,
};
