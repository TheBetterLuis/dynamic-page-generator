const express = require("express");
const router = express.Router();

const {
  getNegocios,
  getNegocioByNegocioID,
  createNegocio,
  deleteNegocio,
  updateNegocio,
  uploadNegocioImage,
} = require("../controllers/negocios");

const { negocioImageUpload } = require("../middleware/negocioImageUpload");

router.get("/all", getNegocios);
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
