import React from 'react'
import { consultaAPI } from '../../helpers/prodAdmin';
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom';
import ItemProducto from '../adminProductos/ItemProducto';

export const AdminProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultaAPI().then(
      (respuesta) => {
        setProductos(respuesta);
      },
      (reason) => {
        console.log(reason);
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
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary" to='/administrar/crear'>
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>

          {
            productos.map((producto)=> <ItemProducto key={producto.id} producto={producto} setProductos={setProductos}></ItemProducto> )
          }
        </tbody>
      </Table>
    </section>
  );
}
