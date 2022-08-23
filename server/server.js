const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8000

app.get('/', (req,res) => {
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



app.listen(port, () => {
  console.log('Back funcionando en puerto ' + port)
})