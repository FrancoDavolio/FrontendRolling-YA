import React from "react";
import { Button } from "react-bootstrap";
import { FaCheck, FaTimesCircle } from "react-icons/fa";
import { consultaAPI, estadoPedidoAPI } from "../../helpers/pedidosAdmin";

export const ItemPedido = ({ pedido, setPedidos }) => {
  const { id, nombre, estado } = { ...pedido };

  const estadoPedido = () => {
    estadoPedidoAPI(id, pedido).then((respuesta) => {
      if (respuesta.status === 200) {
        consultaAPI().then((respuesta) => {
          setPedidos(respuesta);
        });
      } else {
      }
    });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{estado ? "Realizado" : "Pendiente"}</td>
      {estado ? (
        <></>
      ) : (
        <td>
          <Button className="btn btn-warning" onClick={estadoPedido}>
            <FaCheck></FaCheck>
          </Button>
        </td>
      )}
    </tr>
  );
};
