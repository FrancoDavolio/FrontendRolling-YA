import React from "react";
import { Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { consultaAPI, estadoPedidoAPI } from "../../helpers/pedidosAdmin";

export const ItemPedido = ({ pedido, setPedidos }) => {
  const { id, nombre, estado } = { ...pedido };

  const estadoPedido = () => { 
    estadoPedidoAPI(id,pedido).then((respuesta) => { 
      if(respuesta.status === 200){
        consultaAPI().then((respuesta)=>{
          setPedidos(respuesta);
        })
      }else{
      }
     })
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{estado}</td>
      <td>
        <div className="d-flex justify-content-center">
          <Button className="btn btn-warning" onClick={estadoPedido}>
            <FaCheck></FaCheck>
          </Button>
        </div>
      </td>
    </tr>
  );
};
