const URL = process.env.REACT_APP_ROLLING_YA_USER

export const consultarUserAPi = async () => {
  try {
    const respuesta = await fetch(`${URL}/listar`)
    const listaUsuarios = await respuesta.json()
    return listaUsuarios;
  } catch (error) {
    console.log(error)
  }
}

export const crearUsuarioAPI = async (usuario) => {
  try {
    const respuesta = await fetch(`${URL}/nuevo`,{
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: { 'Content-Type': 'application/json' },
    })
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      nombre: datos.nombre,
      perfil: datos.perfil,
      estado: datos.estado,
      token: datos.token,
      uid: datos.uid,
    };
  } catch (error) {
    console.log(error)
  }
}


export const login = async (usuario) => {
  try {
    console.log(usuario);
    const respuesta = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      nombre: datos.nombre,
      perfil: datos.perfil,
      estado: datos.estado,
      token: datos.token,
      uid: datos.uid,
    };
  } catch (error) {
    console.log("errores en el login");
    return;
  }
};
