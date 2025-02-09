const negocioModel = require("../models/negocios");
const path = require("path");

const getNegocios = async (req, res) => {
  const negocios = await negocioModel.find();
  res.status(200).json(negocios);
};

const getNegocioByNegocioID = async (req, res) => {
  try {
    const { id } = req.body;
    const negocio = await negocioModel.find({ _id: id });
    res.status(200).json(negocio);
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
};

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

const createNegocio = async (req, res) => {
  try {
    const { name, description, category } = req.body;

    const negocio = await negocioModel.create({
      name,
      description,
      category,
    });
    res.status(201).json(negocio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNegocio = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedNegocio = await negocioModel.findByIdAndDelete(id);
    if (!deletedNegocio) {
      res.status(404).json({ message: "Negocio no encontrado" });
    }
    res.status(200).json({ message: "Negocio eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateNegocio = async (req, res) => {
  try {
    const { id } = req.body;

    const negocio = await negocioModel.findById(id);

    if (!negocio) {
      return res.status(404).json({ message: "Negocio no encontrado" });
    }

    if (req.body.name) negocio.name = req.body.name;
    if (req.body.description) negocio.lastName = req.body.description;

    const updatedNegocio = await negocio.save();

    res.status(200).json(updatedNegocio);
  } catch (error) {
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

module.exports = {
  getNegocios,
  getNegocioByNegocioID,
  createNegocio,
  deleteNegocio,
  updateNegocio,
  uploadNegocioImage,
};
