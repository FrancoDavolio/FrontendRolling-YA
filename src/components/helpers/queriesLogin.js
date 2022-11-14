const URL = process.env.REACT_APP_ROLLING_YA_USER

export const consultarUserAPi = async ()=>{
    try {
        const respuesta=await fecht(URL)
        const listaUsuarios = await respuesta.json()
        return listaUsuarios
    } catch (error) {
        console.log(error)
    }
}