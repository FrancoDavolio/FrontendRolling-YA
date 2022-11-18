const URL = process.env.REACT_APP_API_CAFE_USER;


export const consultaAPI = async () =>{
    try {
        let respuesta = await fetch(URL);
        let listaUsuarios = await respuesta.json();
        return listaUsuarios;
    } catch (error) {
        console.log(error);
        return false;
    }
}