import React from "react";
import { Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ItemPedido = ({ pedido }) => {
  const { id, nombre } = { ...pedido };
  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>
        <div className="d-flex justify-content-center">
          <Link className="btn btn-warning" to={`/administrar/editar/${id}`}>
            <FaEdit></FaEdit>
          </Link>
          <Button variant="danger" onClick={() => {}}>
            <FaTrash></FaTrash>
          </Button>
        </div>
      </td>
    </tr>
  );
};
