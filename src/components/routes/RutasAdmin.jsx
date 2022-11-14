import { Route, Routes } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/adminProductos/CrearProducto";
import EditarProducto from "../views/adminProductos/EditarProducto";
import Register from "../views/usuario/Register";

const RutasAdmin = ({ setUsuarioLogueado }) => {
  return (
    <div>
      <>
        <Routes>
          <Route
            exact
            path="/"
            element={<Administrador></Administrador>}
          ></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/crearproducto"
            element={<CrearProducto></CrearProducto>}
          ></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/editar/:id"
            element={<EditarProducto></EditarProducto>}
          ></Route>
        </Routes>
        <Routes>
          <Route
            exact
            path="/register"
            element={
              <Register setUsuarioLogueado={setUsuarioLogueado}></Register>
            }
          ></Route>
        </Routes>
      </>
    </div>
  );
};

export default RutasAdmin;
