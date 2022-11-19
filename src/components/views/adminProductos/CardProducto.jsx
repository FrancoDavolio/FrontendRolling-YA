import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';


const CardProducto = ({producto}) => {
    const {_id,nombreProducto, precio, imagen} = {...producto}
    return (
        <>
        <Col>
        <Link>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={imagen}
            />
          </Card>
        </Link>
        </Col>
      
        </>
    );
};

export default CardProducto;