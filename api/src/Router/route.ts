const expre = require("express");
const router = expre.Router();
const getUsuario = require("./rute/getInfo");

router.use("/mensaje", getUsuario );

module.exports = router;