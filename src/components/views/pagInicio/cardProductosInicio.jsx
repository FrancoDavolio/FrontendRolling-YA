import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const CardProductosInicio = ({ producto }) => {
  const { _id, nombreProducto, precio, imagen } = { ...producto };
  return (
    <>
      <Col className="d-flex justify-content-center">
        <div className="tarjetas">

          <Link>
            <img src={imagen} className="imgTarjetas"/>
            <Card.Title>{nombreProducto}</Card.Title>
          </Link>
        </div>
        
      </Col>
    </>
  );
};

export default CardProductosInicio;
