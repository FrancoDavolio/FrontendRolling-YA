import React from "react";
import { Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ItemUsuario = ({ usuario }) => {
  const { id, nombre, email, perfil, estado } = { ...usuario };
  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{email}</td>
      <td>{perfil}</td>
      <td>{estado}</td>
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
