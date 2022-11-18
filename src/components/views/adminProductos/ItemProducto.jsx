import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ItemUsuario = ({usuario}) => {
const {id, nombre, email, perfil, estado} = {...usuario} 
  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{email}</td>
      <td>{perfil}</td>
      <td>{estado}</td>
      <td>
        <Link className="btn btn-warning" to={`/administrar/editar/${id}`}>
          Editar
        </Link>
        <Button variant="danger" onClick={()=>{}}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};
