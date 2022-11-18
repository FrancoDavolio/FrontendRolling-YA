import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { consultaAPI } from '../../helpers/usersAdmin';
import { ItemUsuario } from '../adminProductos/ItemProducto';

export const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    consultaAPI().then(
      (respuesta) => {
        //la respuesta es exitosa
        setUsuarios(respuesta);
      },
      (reason) => {
        console.log(reason);
        //mostrar un mensaje al usuario
        Swal.fire(
          'Ocurrio un error',
          'Intentelo nuevamente en unos minutos',
          'error'
        )
      }
    );
  }, []);
  

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Usuarios</h1>
        <Link className="btn btn-primary" to='/administrar/crear'>
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive bordered>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Perfil</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map((usuario)=> <ItemUsuario key={usuario.id} usuario={usuario}></ItemUsuario> )
          }
        </tbody>
      </Table>
    </section>
  )
}
