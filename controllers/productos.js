const producto = require('../modelos/productos')
const cloudinary = require('cloudinary');
const {uploadImage, deleteImage} = require('../server/middlewares/cloudinary');
const Producto = require('../modelos/productos');
const fs = require('fs-extra');

const traerProductos = async(req,res) => {
  const totalProductos = await producto.find()
  res.json(totalProductos)
}

const crearProducto = async(req,res) => {
  try {
    const { nombre, categoria, descripcion, precio} = req.body
    
    const crearProducto = new Producto({
      nombre,
      categoria,
      descripcion,
      precio
    }
    )

    if (req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath)
      crearProducto.image = {
        public_id : result.public_id,
        secure_url: result.secure_url
      }
      await fs.unlink(req.files.image.tempFilePath)
    }

  await crearProducto.save() 
  
    // res.end(data) 
    res.status(200).json(crearProducto)
  } catch (error) {
    res.status(error.code || 500).json({message:error.message})
  }
}


const modificarProducto = async (req,res) => {
  const { id, nombre, descripcion, precio } = req.body
  try {
    const modificarProducto = await Producto.findByIdAndUpdate(id, {
      nombre,
      descripcion, 
      precio 
    })
    res.json({
      message: `PRODUCTO ${modificarProducto.nombre} modificado correctamente`
    })
  } catch (error) {
    console.error(error)
  }
}

const eliminarProducto = async (req,res) => {
  const {_id } = req.params
  
  const producto = await Producto.findById(_id)
  const imgID = producto.image.public_id

  try {
    await Producto.findByIdAndDelete(producto)
    await cloudinary.v2.uploader.destroy(imgID)
    res.json({
      message: `PRODUCTO ${producto.nombre} ELIMINADO correctamente`
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = { traerProductos, crearProducto, modificarProducto , eliminarProducto }