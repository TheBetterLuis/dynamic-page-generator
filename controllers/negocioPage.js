const negocioPageModel = require("../models/negocioPage");
const path = require("path");

const getNegociosPages = async (req, res) => {
  const negociosPages = await negocioPageModel.find();
  res.status(200).json(negociosPages);
};

const getNegocioPageByNegocioID = async (req, res) => {
  try {
    const { id } = req.body;
    const negocioPage = await negocioPageModel.find({ negocioID: id });
    res.status(200).json(negocioPage);
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
};

const getNegocioPageByNegocioIDParam = async (req, res) => {
  try {
    const { id } = req.params;
    const negocioPage = await negocioPageModel.find({ negocioID: id });
    res.status(200).json(negocioPage);
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
};

const updateNegocioPage = async (req, res) => {
  try {
    const { negocioID } = req.body;

    //    const negocioPage = await negocioPageModel.findById(id);
    const negocioPage = await negocioPageModel.findOne({ negocioID });

    if (!negocioPage) {
      return res
        .status(404)
        .json({ message: "Pagina de negocio no encontrada" });
    }

    if (req.body.title) negocioPage.title = req.body.title;

    if (req.body.product1) negocioPage.product1 = req.body.product1;
    if (req.body.product2) negocioPage.product2 = req.body.product2;
    if (req.body.product3) negocioPage.product3 = req.body.product3;
    if (req.body.product4) negocioPage.product4 = req.body.product4;
    if (req.body.product5) negocioPage.product5 = req.body.product5;
    if (req.body.product6) negocioPage.product6 = req.body.product6;

    if (req.body.description1) negocioPage.description1 = req.body.description1;
    if (req.body.description2) negocioPage.description2 = req.body.description2;
    if (req.body.description3) negocioPage.description3 = req.body.description3;
    if (req.body.description4) negocioPage.description4 = req.body.description4;
    if (req.body.description5) negocioPage.description5 = req.body.description5;
    if (req.body.description6) negocioPage.description6 = req.body.description6;

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
      product1: product,
      description1: description,
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
    const deletedNegocioPage = await negocioPageModel.findByIdAndDelete(id);
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

const uploadNegocioPageImage1 = async (req, res) => {
  try {
    const negocioPageID = req.params.id;
    let image = req.file ? req.file.path : null;

    if (image) {
      image = path.join(
        "images",
        negocioPageID,
        "1",
        `${negocioPageID}${path.extname(req.file.originalname)}`
      );
    }

    const negocioPage = await negocioPageModel.findByIdAndUpdate(
      negocioID,
      {
        image1,
      },
      { new: true }
    );

    if (!negocioPage) {
      return res
        .status(404)
        .json({ message: "Pagina de negocio no encontrada" });
    }

    res.status(201).json(negocioPage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const uploadNegocioPageImage = async (req, res) => {
  try {
    const negocioPageID = req.params.id;
    const imageNumber = req.params.number;
    let image = req.file ? req.file.path : null;

    // Check if image is defined and assign a valid path
    if (image) {
      image = path.join(
        "images",
        negocioPageID,
        imageNumber,
        `${negocioPageID}${path.extname(req.file.originalname)}`
      );
    } else {
      return res.status(400).json({ message: "Image file is required." });
    }

    // Log the image path for debugging
    console.log(`Image Path: ${image}`);

    // Construct the update object with the imageNumber as the key
    const updateData = {};
    updateData[`image${imageNumber}`] = image;

    const negocioPage = await negocioPageModel.findByIdAndUpdate(
      negocioPageID,
      updateData,
      { new: true }
    );

    if (!negocioPage) {
      return res
        .status(404)
        .json({ message: "Pagina de negocio no encontrada" });
    }

    res.status(201).json(negocioPage);
  } catch (error) {
    console.error(`Error in uploadNegocioPageImage: ${error.message}`);
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
const testFunctionImage = async (req, res) => {
  try {
    const negocioID = req.params.id;
    const number = req.params.number;
    let image = req.file ? req.file.path : null;

    if (image) {
      image = path.join(
        "images",
        negocioID,
        `${number}`,
        `${negocioID}${path.extname(req.file.originalname)}`
      );
    }
    // Construct the update object dynamically
    const updateData = {};
    updateData[`image${number}`] = image;

    const negocioPage = await negocioPageModel.findOneAndUpdate(
      { negocioID },
      updateData,
      { new: true }
    );

    if (!negocioPage) {
      return res.status(404).json({ message: "Negocio page no encontrado" });
    }

    res.status(201).json(negocioPage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getNegociosPages,
  getNegocioPageByNegocioID,
  createNegocioPage,
  deleteNegocioPage,
  updateNegocioPage,
  uploadNegocioPageImage,
  uploadNegocioPageImage1,
  testFunctionImage,
  getNegocioPageByNegocioIDParam,
};
