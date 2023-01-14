const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedido = new Schema({
  nombre:{
    type: String,
    trim: true,
    uppercase: true,
    required: true
  },
    pedido:{
    type: String,
    trim: true,
    required: true
},
  direccion:{
    type: String,
    trim: true,
    required: true
  },
  telefono:{
    type: Number,
    trim: true,
    required: true
  },
  entrega: {
    type: String,
    trim: true,
    required: true
  },
  precio:{
    type: Number,
    trim: true,
    required: true
  },

  pago:{
    type: String,
    trim: true,
    enum: ["NO PAGADO", "PAGADO"],
    default: "NO PAGADO"
  },
},
  {
    timestamps: true
  },
);


module.exports = mongoose.model('Pedido', pedido)