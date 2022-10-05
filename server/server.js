const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const cors = require('cors');
require('dotenv').config();
const producto = require('./modelos/productos');
const fileUpload = require('express-fileupload');
const {uploadImage} = require('./middlewares/cloudinary');
const fs = require('fs-extra')

const connectDb = async () => {
  const database = process.env.DB
  try {
   mongoose.connect(database)
   console.log('Db conectada')
 } catch (error) {
   console.error(error)
 }
}
connectDb()

const port = 8000

app.use(bodyParser.json())
app.use(cors());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : './uploads'
}));

app.get('/', (req,res) => {
  res.json({
    message: "GET funcionando"
  })
})

app.post('/login', async(req,res) => {
  const { nombre, contraseña } = req.body;

  try {
    const usuario = await Usuario.findOne({ nombre, contraseña });

    // const match = bcrypt.compareSync(contraseña, usuario.contraseña);
    const token = jwt.sign({ nombre }, 'LaQuiaqueña');

      if(usuario){
      res.json({
        message: "Usuario logueado exitosamente",
        token: token
      }) 
    } else {
      res.json({
        message: "usuario o contraseña incorrecta"
      })
    }
  } catch (error) {
    console.error(error)
  }
})

const Usuario = require('./modelos/usuario')
app.post('/crearusuario', (req,res) => {
  const { nombre, contraseña} = req.body;

  // const contraseñaEncriptada = bcrypt.hashSync(contraseña, 10);

  try {
    const crearUsuario = new Usuario({
         nombre,
         contraseña
        //  :contraseñaEncriptada
       })
       crearUsuario.save()
  
      res.json({
        message: `Usuario ${nombre}, contraseña ${contraseña} CREADO correctamente`
      })
      console.log({nombre, contraseña})
    } catch (error) {
    console.error(error)
  }
})

app.delete('/eliminarusuario', async (req,res) => {
  const { id } = req.body
  try {
    const usuarioEliminado = await Usuario.findOneAndDelete(id)
    res.json({
      message: `USUARIO ${usuarioEliminado.nombre} ELIMINADO correctamente`
    })
  } catch (error) {
    console.error(error)
  }
})


app.get('/traerproductos', async(req,res) => {
  const totalProductos = await producto.find()
  res.send(totalProductos)
}) 

const Producto = require('./modelos/productos')
app.post('/crearproducto', async(req,res) => {

  try {
    const { nombre, descripcion, precio} = req.body
    
    const crearProducto = new Producto({
      nombre,
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
  
    res.end(data)
    res.status(200).json(crearProducto)
  } catch (error) {
    res.status(error.code || 500).json({message:error.message})
  }
})


app.put('/modificarproducto', async (req,res) => {
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
})

app.delete('/eliminarproducto', async (req,res) => {
  const { id } = req.body
  try {
    const productoEliminado = await Producto.findOneAndDelete(id)
    res.json({
      message: `PRODUCTO ${productoEliminado.nombre} ELIMINADO correctamente`
    })
  } catch (error) {
    console.error(error)
  }
})

app.listen(port, () => {
  console.log('Back funcionando en puerto ' + port)
})