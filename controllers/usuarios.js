const Usuario = require('../modelos/usuario')
const bcrypt = require('bcrypt')

const crearUsuario = async (req,res) => {
  const { nombre, apellido, direccion, telefono, email, contraseña, role} = req.body;

  const contraseñaEncriptada = bcrypt.hashSync(contraseña, 10);

  try {
    const crearUsuario = new Usuario({
      nombre,
      apellido,
      direccion,
      telefono,
      email,
      contraseña :contraseñaEncriptada,
      role
       })
       crearUsuario.save()
  
      res.json({
        message: `Usuario ${nombre}, contraseña ${contraseñaEncriptada} CREADO correctamente`
      })
    } catch (error) {
    console.error(error)
  }
}

const traerUsuarios = async(req,res) => {
  const totalUsuarios = await Usuario.find()
  res.json(totalUsuarios)
}

const eliminarUsuario = async (req,res) => {
  const { _id } = req.params
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(_id)
    res.json({
      message: `USUARIO ${usuarioEliminado} ELIMINADO correctamente`
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = { crearUsuario, traerUsuarios, eliminarUsuario }