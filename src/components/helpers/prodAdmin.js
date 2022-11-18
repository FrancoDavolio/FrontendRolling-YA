const URL = process.env.REACT_APP_API_CAFE_PROD;


export const consultaAPI = async () => {
    try {
      const respuesta = await fetch("http://localhost:3004/productos");
      const listaProductos = await respuesta.json();
      return listaProductos;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

export const obtenerProducto = async (id) => { 
    try {
      const respuesta = await fetch(`http://localhost:3004/productos/${id}`);
      const productoEncontrado = {
        dato: await respuesta.json(),
        status:  respuesta.status
      };
      return productoEncontrado;
    } catch (error) {
      console.log(error);
      return false;
    }
 }

 export const editarProductoAPI = async (id, producto) => {
  try {
    const respuesta = await fetch(`http://localhost:3004/productos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const borrarProductoAPI = async (id) => {
  // console.log(URL)
  try {
    const respuesta = await fetch(`http://localhost:3004/productos/${id}`, {
      method: "DELETE"
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};