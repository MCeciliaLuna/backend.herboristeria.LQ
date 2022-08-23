const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuario = new Schema ({
  nombre: {
    type: String,
    required: [true, "El nombre de usuario es necesario"]
  },
  contraseña: {
    type: String,
    required: [true, "La contraseña es necesaria"]
  }
})

module.exports = mongoose.model('Usuario', usuario)