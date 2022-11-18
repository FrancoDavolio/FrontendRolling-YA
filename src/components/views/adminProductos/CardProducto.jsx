import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardProducto = ({ producto }) => {
  const { id, nombreProducto, precio, imagen, estado, detalle, categoria } = {
    ...producto,
  };
  return (
    <>
      <Col className="my-3">
        <Card className="anchoCardProducto">
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
            <Card.Title>{nombreProducto}</Card.Title>
            <Card.Text>Estado: {estado}</Card.Text>
            <Card.Text>Detalle: {detalle}</Card.Text>
            <Card.Text>Categoria: {categoria}</Card.Text>
            <Card.Text>Precio: ${precio}</Card.Text>
            <hr />
            <div className="d-flex justify-content-between">
                <Link className="btn btn-danger" to={`/detalle-producto/${id}`}>
                Ver mas
                </Link>
                <Link className="btn btn-danger" to={`/administrar/editar/${id}`}>
                Editar
                </Link>
                <Button variant="danger" onClick={() => {}}>
                Borrar
                </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardProducto;
