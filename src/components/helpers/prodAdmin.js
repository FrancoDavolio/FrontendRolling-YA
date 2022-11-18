const URL = process.env.REACT_APP_API_CAFE_PROD;


export const consultaAPI = async () => {
     console.log(URL)
    try {
      const respuesta = await fetch("http://localhost:3004/productos");
      console.log(respuesta)
      const listaProductos = await respuesta.json();
      return listaProductos;
    } catch (error) {
      console.log(error);
      return false;
    }
  };