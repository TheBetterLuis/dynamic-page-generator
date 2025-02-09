const multer = require("multer");
const path = require("path");
const fs = require("fs");

const negocioPageImage1Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const negocioPageID = req.params.id;

    const dir = path.join(__dirname, `../public/images/${negocioPageID}/1`);
    //const dir = path.join(__dirname, `../../images/`);
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const negocioPageID = req.params.id;
    const imageExtension = path.extname(file.originalname);
    cb(null, `${negocioPageID}${imageExtension}`);
  },
});

const negocioPageImage1Upload = multer({
  storage: negocioPageImage1Storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("only file types allowed are png,jpg and jpeg"));
    }
  },
});

module.exports = { negocioPageImage1Upload };
