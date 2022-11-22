import React from 'react'
import { consultaAPI } from '../../helpers/prodAdmin';
import { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom';
import CardProducto from '../adminProductos/CardProducto';

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
        <Link className="btn btn-primary" to='/administrar/productos/crear'>
          Agregar
        </Link>
      </div>
      <hr />
      <Row xs={1} md={4}>
        {
            productos.map((producto)=> <CardProducto key={producto.id} producto={producto} setProductos={setProductos}></CardProducto>)            
        }
      </Row>
    </section>
  );
}
