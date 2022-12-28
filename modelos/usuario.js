const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuario = new Schema ({
    nombre: {
      type: String,
      trim: true,
      required: true,
      uppercase: true
    },
    apellido: {
      type: String,
      trim: true,
      required: true,
      uppercase: true,
    },
    direccion: {
      type: String,
      trim: true,
      required: true,
    },
    telefono: {
      type: Number,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    contraseña: {
      type: String,
      trim: true,
      required: true,
    },

    role: {
      type: String,
      required: true,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  }
)

module.exports = mongoose.model('Usuario', usuario)