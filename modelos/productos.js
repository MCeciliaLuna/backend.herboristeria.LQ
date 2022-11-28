const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const producto = new Schema ({
  nombre: {
    type: String,
    uppercase: true,
    required: [true, "El nombre de usuario es necesario"]
  },
  categoria: {
    type: String,
    required: [true, "La descripción es necesaria"]
  },
  descripcion: {
    type: String,
    required: [true, "La descripción es necesaria"]
  },
  precio: {
    type: Number,
    required: [true, "La descripción es necesaria"]
  },
  image: {
    public_id: String,
    secure_url: String
  }
})

module.exports = mongoose.model('Producto', producto)