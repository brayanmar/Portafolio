const expre = require("express");
const router = expre.Router();
const getUsuario = require("./rute/getInfo");

router.use("/", getUsuario );

module.exports = router;