import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2";
import { consultaAPI } from "../../helpers/pedidosAdmin";
import { ItemPedido } from "../adminPedidos/ItemPedido";

export const AdminPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    consultaAPI().then(
      (respuesta) => {
        setPedidos(respuesta);
      },
      (reason) => {
        console.log(reason);
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
        <h1 className="display-4 ">Pedidos</h1>
      </div>
      <hr />
      <Table responsive bordered>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => {
            if (pedido.estado === false) {
              return (<ItemPedido
                key={pedido.id}
                pedido={pedido}
                setPedidos={setPedidos}
              ></ItemPedido>)
              
            }
          })}
        </tbody>
      </Table>
      <Table responsive bordered>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {pedidos.map((pedido) => {
                if (pedido.estado === true) {
                  return (
                    <ItemPedido
                    key={pedido.id}
                    pedido={pedido}
                    setPedidos={setPedidos}
                    ></ItemPedido>
                  );
                }
        })}
        </tbody>
      </Table>
    </section>
  );
};
