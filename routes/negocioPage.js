const express = require("express");
const router = express.Router();

const {
  getNegociosPages,
  getNegocioPageByNegocioID,
  createNegocioPage,
  deleteNegocioPage,
  updateNegocioPage,
  uploadNegocioPageImage,
  uploadNegocioPageImage1,
  testFunctionImage,
  getNegocioPageByNegocioIDParam,
} = require("../controllers/negocioPage");
//const {  negocioPageImageUpload,  negocioPageImage1Upload,} = require("../middleware/negocioPageImageUpload");

const { testImageUpload } = require("../middleware/testMiddleware");

//const { negocioImageUpload } = require("../middleware/negocioImageUpload");

router.get("/all", getNegociosPages);

router.post("/single", getNegocioPageByNegocioID);
router.get("/single/:id", getNegocioPageByNegocioIDParam);
router.post("/", createNegocioPage);
router.delete("/", deleteNegocioPage);

router.post(
  "/:id/image/:number",
  testImageUpload.single("image"),
  testFunctionImage
);
/*
router.post(
  "/:negocioID/image/1",
  (req, res, next) => {
    negocioPageImage1Upload.single("image")(req, res, next);
  },
  uploadNegocioPageImage1
);

*/
/*
router.post(
  "/:negocioID/image/1",
  negocioPageImage1Upload.single("image"),
  uploadNegocioPageImage1
);
*/
router.patch("/", updateNegocioPage);

module.exports = router;
