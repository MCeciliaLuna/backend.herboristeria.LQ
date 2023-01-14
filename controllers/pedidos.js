const Pedido = require('../modelos/pedidos')

const crearPedido = async(req,res) => {
  try {
    const { nombre, pedido, direccion, telefono, entrega, precio, pago} = req.body
    
    const crearPedido = new Pedido({
      nombre,
      pedido,
      direccion,
      telefono,
      entrega,
      precio,
      pago
    }
    )

  await crearPedido.save() 
  
    res.status(200).json(crearPedido)
  } catch (error) {
    res.status(error.code || 500).json({message:error.message})
  }
}

const traerPedidos = async(req,res) => {
  const totalPedido = await Pedido.find()
  res.json(totalPedido)
}

const eliminarPedido = async (req,res) => {
  const { _id } = req.params
  try {
    const pedidoEliminado = await Pedido.findByIdAndDelete(_id)
    res.json({
      message: `Pedido ${pedidoEliminado} ELIMINADO correctamente`
    })
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
}

module.exports = { crearPedido, traerPedidos, eliminarPedido }