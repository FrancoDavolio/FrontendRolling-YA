// const URL = process.env.REACT_APP_API_CAFE_USER;


export const consultaAPI = async () =>{
    try {
        let respuesta = await fetch("http://localhost:3004/pedidos");
        let listaPedidos = await respuesta.json();
        return listaPedidos;
    } catch (error) {
        console.log(error);
        return false;
    }
}