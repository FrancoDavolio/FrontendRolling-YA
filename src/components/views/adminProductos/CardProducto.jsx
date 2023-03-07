import { Col, Card, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarProductoAPI, consultaAPI } from "../../helpers/prodAdmin";
const CardProducto = ({ producto, setProductos }) => {
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
      {/* <Col className="my-3">
        <Card className="anchoCardProducto">
          <Card.Img variant="top" src={imagen} />
          <Card.Body>
            <Card.Title>{nombreProducto}</Card.Title>
            <Card.Text>Estado: {estado}</Card.Text>
            <Card.Text>Detalle: {detalle}</Card.Text>
            <Card.Text>Categoria: {categoria}</Card.Text>
            <Card.Text>Precio: ${precio}</Card.Text>
            <hr />
            <div className="row">
              <div className="col-6">
                <Link className="btn btn-danger" to={`/detalle-producto/${id}`}>
                  Ver mas
                </Link>
              </div>
              <div className="col">
                <Link
                  className="btn btn-danger"
                  to={`/administrar/productos/editar/${id}`}
                >
                  <FaEdit></FaEdit>
                </Link>
              </div>
              <div className="col">
                <Button variant="danger" onClick={borrarProducto}>
                  <FaTrash></FaTrash>
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col> */}
      <Col className="">
        <div className="cardProducto col">
          <div className="face face1">
            <div className="content">
              <div className="text-center"><img src={imagen} className="text-center"/></div>
              <h3>{nombreProducto}</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{estado}</li>
                <li class="list-group-item">{detalle}</li>
                <li class="list-group-item">{categoria}</li>
                <li class="list-group-item">${precio}</li>
              </ul>

              <div className="row">
              <div className="col-6">
                <Link className="etiqueta" to={`/detalle-producto/${id}`}>
                  Ver mas
                </Link>
              </div>
              <div className="col-3">
                <Link
                  className="etiqueta"
                  to={`/administrar/productos/editar/${id}`}
                >
                  <FaEdit></FaEdit>
                </Link>
              </div>
              <div className="col-3">
                
                <Button className="etiqueta" onClick={borrarProducto}>
                  <FaTrash></FaTrash>
                </Button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default CardProducto;
