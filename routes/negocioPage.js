const express = require("express");
const router = express.Router();

const {
  getNegociosPages,
  getNegocioPageByNegocioID,
  createNegocioPage,
  deleteNegocioPage,
  updateNegocioPage,
} = require("../controllers/negocioPage");

//const { negocioImageUpload } = require("../middleware/negocioImageUpload");

router.get("/all", getNegociosPages);

router.post("/single", getNegocioPageByNegocioID);
router.post("/", createNegocioPage);
router.delete("/", deleteNegocioPage);
/*
router.post(
  "/:id/image",
  negocioImageUpload.single("image"),
  uploadNegocioImage
);
*/
router.patch("/", updateNegocioPage);

module.exports = router;
