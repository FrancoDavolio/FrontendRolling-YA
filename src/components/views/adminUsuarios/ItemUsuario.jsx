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
      <td>
        {estado ? (
          <>
            <span class="badge rounded-pill text-bg-confirmado">Confirmado</span>
          </>
        ) : (
          <span class="badge rounded-pill text-bg-pendiente">Pendiente</span>
        )}
      </td>
    </tr>
  );
};
