const { Router } = require("express");
const { crearUsuario, traerUsuarios, eliminarUsuario } = require("../controllers/usuarios");
const { traerProductos, crearProducto, modificarProducto , eliminarProducto } = require('../controllers/productos')
const { login } = require('../controllers/login')
const { crearPedido, traerPedidos, eliminarPedido } = require('../controllers/pedidos')
const router = Router();

router.post("/crearusuario", crearUsuario);
router.post("/login", login);
router.get("/traerusuarios", traerUsuarios);
router.delete("/eliminarusuario/:_id", eliminarUsuario);

router.get("/traerproductos", traerProductos);
router.post("/crearproducto", crearProducto);
router.delete("/eliminarproducto/:_id", eliminarProducto);
router.put("/modificarproducto", modificarProducto);

router.post("/crearpedido", crearPedido);
router.get("/traerpedidos", traerPedidos);
router.delete("/eliminarpedido/:_id", eliminarPedido)


module.exports = router;