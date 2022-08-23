const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


const port = 8000

app.get('/get', (req,res) => {
  res.json({
    message: "GET funcionando"
  })
})
app.post('/crearusuario', (req,res) => {
  res.json({
    message: "USUARIO CREADO correctamente"
  })
})
app.post('/crearproducto', (req,res) => {
  res.json({
    message: "PRODUCTO CREADO correctamente"
  })
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