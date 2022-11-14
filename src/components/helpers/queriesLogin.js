const URL = process.env.REACT_APP_ROLLING_YA_USER

export const consultarUserAPi = async () => {
  try {
    const respuesta = await fetch(URL)
    const listaUsuarios = await respuesta.json()
    return listaUsuarios
  } catch (error) {
    console.log(error)
  }
}

export const crearUsuarioAPI = async (usuario) => {
  try {
    const respuesta = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario),
    })
    return respuesta
  } catch (error) {
    console.log(error)
  }
}
