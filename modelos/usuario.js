const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuario = new Schema ({
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
    default: "ADMIN",
  },
  }
)

module.exports = mongoose.model('Usuario', usuario)