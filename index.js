'use strict'

const axios = require('axios')

module.exports.getUsuarios = async () => {
  try {
    const { data } = await axios.get('https://serverest.dev/usuarios')
  
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return error
  }
}
