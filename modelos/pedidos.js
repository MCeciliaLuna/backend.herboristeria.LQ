const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedido = new Schema({
  apellido:{
    type: String,
    trim: true,
    uppercase: true,
    required: true
  },
  nombre:{
    type: String,
    trim: true,
    required: true
  },
  datetime:{
    type: String,
    trim: true,
    required: true
  },
    pedido:{
    type: String,
    trim: true,
    required: true
},precio:{
  type: Number,
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
  enum: ["RETIRO DEL LOCAL", "ENVIO"],
    default: "RETIRO DEL LOCAL"
},
  direccion:{
    type: String,
    trim: true,
  },
  aclaracion:{
    type: String,
    trim: true,
  },
  pago:{
    type: String,
    trim: true,
    enum: ["NO PAGADO", "PAGADO"],
    default: "NO PAGADO"
  }
}
);


module.exports = mongoose.model('Pedido', pedido)