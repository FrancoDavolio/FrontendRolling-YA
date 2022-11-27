import { Route, Routes } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/adminProductos/CrearProducto";
import EditarProducto from "../views/adminProductos/EditarProducto";


const RutasAdmin = ({ setUsuarioLogueado }) => {
  return (
    <div>
      <>
        <Routes>
          <Route
            exact
            path="/administrador"
            element={<Administrador></Administrador>}
          ></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="administrador/crearproducto"
            element={<CrearProducto></CrearProducto>}
          ></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="administrador/editar/:id"
            element={<EditarProducto></EditarProducto>}
          ></Route>
        </Routes>
      </>
    </div>
  );
};

export default RutasAdmin;
