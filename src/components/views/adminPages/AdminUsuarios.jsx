import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { consultaAPI } from "../../helpers/usersAdmin";
import { ItemUsuario } from "../adminUsuarios/ItemUsuario";

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
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );
  }, []);

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Usuarios</h1>
        {/* <Link className="btn btn-primary" to="/administrar/crear">
          Agregar
        </Link> */}
      </div>
      <hr />
      <Row>
        <Col lg={6}>
          <h2>Clientes</h2>
          <Table className="containerTable" responsive>
            <thead>
              <tr>
                <th><h1>Id</h1> </th>
                <th><h1>Nombre</h1> </th>
                <th><h1>Email</h1> </th>
                <th><h1>Perfil</h1> </th>
                <th><h1>Estado</h1> </th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => {
                if (usuario.perfil === "cliente") {
                  return (
                    <ItemUsuario
                      key={usuario.id}
                      usuario={usuario}
                    ></ItemUsuario>
                  );
                }
              })}
            </tbody>
          </Table>
        </Col>
        <Col lg={6}>
          <h2>Administradores</h2>
          <Table className="containerTable"  responsive>
            <thead>
              <tr>
                <th><h1>Id</h1> </th>
                <th><h1>Nombre</h1> </th>
                <th><h1>Email</h1> </th>
                <th><h1>Perfil</h1> </th>
                <th><h1>Estado</h1> </th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => {
                if (usuario.perfil === "admin") {
                  return (
                    <ItemUsuario
                      key={usuario.id}
                      usuario={usuario}
                    ></ItemUsuario>
                  );
                }
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </section>
  );
};
