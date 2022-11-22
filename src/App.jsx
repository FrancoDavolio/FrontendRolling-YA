import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Login from "./components/views/usuario/Login";
import Inicio from "./components/views/Inicio";
import Register from "./components/views/usuario/Register";
import { useState } from "react";
import Administrador from "./components/views/Administrador";
import { EditarProducto } from "./components/views/adminProductos/EditarProducto";
import { CrearProducto } from "./components/views/adminProductos/CrearProducto";

function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenCafeBenito")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    // administramos las rutas
    <BrowserRouter>
      {/* <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu> */}
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        ></Route>
        {/*Rutas protegidas*/}
        <Route
          exact
          path="/administrar"
          element={
            <Administrador option={"admin"}></Administrador>
          }
        ></Route>
        <Route
        exact
        path="/administrar/usuarios"
        element={
          <Administrador option={"usuarios"}></Administrador>
        }
        ></Route>
        <Route
        exact
        path="/administrar/productos"
        element={
          <Administrador option={"productos"}></Administrador>
        }
        ></Route>
        <Route
        exact
        path="/administrar/pedidos"
        element={
          <Administrador option={"pedidos"}></Administrador>
        }
        ></Route>
        <Route
        exact
        path="/administrar/productos/editar/:id"
        element={
          <EditarProducto></EditarProducto>
        }
        ></Route>
        <Route
        exact
        path="/administrar/productos/crear"
        element={
          <CrearProducto></CrearProducto>
        }
        ></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
