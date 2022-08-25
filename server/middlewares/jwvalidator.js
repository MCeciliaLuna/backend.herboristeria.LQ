const jwt = require('jsonwebtoken')

const jwtValidator = async(req,res, next) => {
  const { accessToken } = req.body

  console.log(accessToken)

  try {
    const verify = jwt.verify(accessToken, secretKey)

    console.log(verify)

    if (verify) {
      return next()
    }

    return res.json({
      message: 'Token inválido'
    })
  } catch (error) {
    res.json({
      message: 'No autorizado '
    })
  }

  console.log(accessToken)

}

module.exports = { jwtValidator };