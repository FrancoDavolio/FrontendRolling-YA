
import { Button } from "react-bootstrap";
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// opcion 2
// const ItemProducto = ({id, nombreProducto, categoria, imagen, precio}) => {
// opcion 3
const ItemProducto = ({producto}) => {
const {id, nombreProducto, categoria, imagen, precio} = {...producto} 

  return (
    <tr>
      <td>{id}</td>
      {/* <td>{props.producto.nombreProducto}</td> */}
      {/* <td>{producto.nombreProducto}</td> */}
      <td>{nombreProducto}</td>
      <td>${precio}</td>
      <td>{imagen}</td>
      <td>{categoria}</td>
      <td>
        <Link className="btn btn-warning" to={`/administrar/editar/${id}`}>
          Editar
        </Link>
        <Button variant="danger" onClick={()=>{}}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
