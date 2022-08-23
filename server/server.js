const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


const port = 8000

app.use(bodyParser.json())

app.get('/get', (req,res) => {
  res.json({
    message: "GET funcionando"
  })
})

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
app.put('/modificarproducto', (req,res) => {
  res.json({
    message: "PRODUCTO MODIFICADO correctamente"
  })
})
app.delete('/eliminarproducto', (req,res) => {
  res.json({
    message: "PRODUCTO ELIMINADO correctamente"
  })
})




const connectDb = async() => {
  try {
    mongoose.connect('mongodb+srv://LaQuiaquenaHerboristeria:LaQuiaquenaHerboristeria@cluster0.5xlotiz.mongodb.net/?retryWrites=true&w=majority')
    console.log('Db conectada')
  } catch (error) {
    console.error(error)
  }
}

connectDb()

app.listen(port, () => {
  console.log('Back funcionando en puerto ' + port)
})