import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarProductoAPI, consultaAPI } from "../../helpers/prodAdmin";
const CardProducto = ({ producto ,setProductos}) => {
  const { id, nombreProducto, precio, imagen, estado, detalle, categoria } = {
    ...producto,
  };

  const borrarProducto = () => {
    borrarProductoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Producto eliminado",
          "El producto fue eliminado exitosamente",
          "success"
        );
        consultaAPI().then((respuesta) => {
          setProductos(respuesta);
        });
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Vuelva a intentar esta operación en unos minutos",
          "error"
        );
      }
    });
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
              <Link
                className="btn btn-danger"
                to={`/administrar/productos/editar/${id}`}
              >
                Editar
              </Link>
              <Button variant="danger" onClick={borrarProducto}>
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
