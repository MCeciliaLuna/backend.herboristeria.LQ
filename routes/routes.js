const { Router } = require("express");
const { crearUsuario } = require("../controllers/usuarios");
const { traerProductos, crearProducto, modificarProducto , eliminarProducto } = require('../controllers/productos')
const { login } = require('../controllers/login')
const { crearPedido, traerPedidos, eliminarPedido } = require('../controllers/pedidos')
const router = Router();

router.post("/crearusuario", crearUsuario);
router.post("/login", login);

router.get("/traerproductos", traerProductos);
router.post("/crearproducto", crearProducto);
router.delete("/eliminarproducto/:_id", eliminarProducto);
router.put("/modificarproducto", modificarProducto);

router.post("/crearpedido", crearPedido);
router.get("/traerpedidos", traerPedidos);
router.delete("/eliminarpedido/:_id", eliminarPedido)


module.exports = router;