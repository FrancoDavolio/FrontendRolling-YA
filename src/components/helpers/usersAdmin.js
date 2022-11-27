const URL = process.env.REACT_APP_API_CAFE_USER;


export const consultaAPI = async () =>{
    console.log(URL)
    try {
        let respuesta = await fetch('http://localhost:3004/usuarios');
        let listaUsuarios = await respuesta.json();
        return listaUsuarios;
    } catch (error) {
        console.log(error);
        return false;
    }
}