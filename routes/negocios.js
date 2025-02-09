const express = require("express");
const router = express.Router();

const {
  getNegocios,
  getNegocioByNegocioID,
  createNegocio,
  deleteNegocio,
  updateNegocio,
  uploadNegocioImage,
  getNegociosByCategory,
} = require("../controllers/negocios");

const { negocioImageUpload } = require("../middleware/negocioImageUpload");

router.get("/all", getNegocios);
router.post("/category", getNegociosByCategory);

router.post("/single", getNegocioByNegocioID);
router.post("/", createNegocio);
router.delete("/", deleteNegocio);
router.post(
  "/:id/image",
  negocioImageUpload.single("image"),
  uploadNegocioImage
);

router.patch("/", updateNegocio);

module.exports = router;
