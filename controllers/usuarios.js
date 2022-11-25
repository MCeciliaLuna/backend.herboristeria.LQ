const Usuario = require('../modelos/usuario')
const bcrypt = require('bcrypt')

const crearUsuario = async (req,res) => {
  const { nombre, contraseña} = req.body;

  const contraseñaEncriptada = bcrypt.hashSync(contraseña, 10);

  try {
    const crearUsuario = new Usuario({
         nombre,
         contraseña :contraseñaEncriptada
       })
       crearUsuario.save()
  
      res.json({
        message: `Usuario ${nombre}, contraseña ${contraseñaEncriptada} CREADO correctamente`
      })
    } catch (error) {
    console.error(error)
  }
}

// const eliminarUsuario = async (req,res) => {
//   const { id } = req.body
//   try {
//     const usuarioEliminado = await Usuario.findByIdAndDelete(id)
//     res.json({
//       message: `USUARIO ${usuarioEliminado.nombre} ELIMINADO correctamente`
//     })
//   } catch (error) {
//     console.error(error)
//   }
// }

module.exports = { crearUsuario }