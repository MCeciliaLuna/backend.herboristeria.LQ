const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const Usuario = require('../modelos/usuario')

const login = async(req,res) => {
  const { nombre, contraseña } = req.body;

  try {
    const usuario = await Usuario.findOne({nombre});

    const match = bcrypt.compareSync(contraseña, usuario.contraseña);
    const token = jwt.sign({ nombre }, 'LaQuiaqueña');

      if(match){
      res.json({
        message: "Usuario logueado exitosamente",
        token: token
      }) 
    } else {
      res.json({
        message:"usuario o contraseña incorrecta"
      })
    }
  } catch (error) {
    console.error(error)
  }
}

module.exports = { login }