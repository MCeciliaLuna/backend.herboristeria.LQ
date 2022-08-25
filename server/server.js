const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
// const { jwtValidator } = require('./server/middlewares/jwvalidator');
require('dotenv').config()

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

app.get('/get', (req,res) => {
  res.json({
    message: "GET funcionando"
  })
})

// app.login('/login', async(req,res) => {
//   const { nombre, contraseña } = req.body;
//   try {
//     const usuario = await Usuario.findOne({ nombre, contraseña })

//     if (result) {
//       const token = jwt.sign({ usuario }, secretKey)
//       res.json({
//         message: "Usuario logueado exitosamente",
//         result,
//         token
//       }) 
//     } else {
//       res.json({
//         message: "usuario o contraseña incorrecta"
//       })
//     }
//   } catch (error) {
//     console.error(error)
//   }
// })

const Usuario = require('./modelos/usuario')
app.post('/crearusuario', (req,res) => {
  const { nombre, contraseña} = req.body

  try {
    const crearUsuario = new Usuario({
         nombre,
         contraseña
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



const Producto = require('./modelos/productos')
app.post('/crearproducto', (req,res) => {
  const { nombre, descripcion, precio} = req.body
  try {
    const crearProducto = new Producto({
      nombre,
      descripcion,
      precio
    })
    crearProducto.save()
    res.json({
      nombre,
      descripcion,
      precio
    })
  } catch (error) {
    console.error(error)
  }
})

app.put('/modificarproducto', async (req,res) => {
  const { id, nombre, caracteristicas, precio } = req.body
  try {
    const modificarProducto = await Producto.findByIdAndUpdate(id, {
      nombre,
      caracteristicas,
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