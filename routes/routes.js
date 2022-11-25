const { Router } = require("express");
const { crearUsuario, eliminarUsuario } = require("../controllers/usuarios");
const { traerProductos, crearProducto, modificarProducto , eliminarProducto } = require('../controllers/productos')
const { login } = require('../controllers/login')
const router = Router();

router.post("/crearusuario", crearUsuario);
// router.delete("/eliminarusuario/:_id", eliminarUsuario);
router.get("/traerproductos", traerProductos)
router.post("/crearproducto", crearProducto);
// router.put("/modificarproducto", modificarProducto);
router.delete("/eliminarproducto/:_id", eliminarProducto);
router.post("/login", login);


module.exports = router;