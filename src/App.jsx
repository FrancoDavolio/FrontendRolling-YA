import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Login from "./components/views/usuario/Login";
import Inicio from "./components/views/Inicio";
import UploadProductPage from "./components/views/UploadProductPage/UploadProductPage";
import DetailProductPage from "./components/views/ProductDetailPage";
import Error404 from "./components/views/Error404";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import Register from "./components/views/usuario/Register";
import Pedidos from "./components/views/Pedidos";
import { useState } from "react";
import Administrador from "./components/views/Administrador";
import { EditarProducto } from "./components/views/adminProductos/EditarProducto";
import { CrearProducto } from "./components/views/adminProductos/CrearProducto";
import SeparadorSuperior from "./components/common/SeparadorSuperior";
import SeparadorInferior from "./components/common/SeparadorInferior";
import AcercaDe from "./components/views/AcercaDe";

function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenCafeBenito")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    // administramos las rutas
    <BrowserRouter>
      {/* <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
  ></Menu>*/}
      <SeparadorSuperior></SeparadorSuperior>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/pedidos" element={<Pedidos></Pedidos>}></Route>
        <Route exact path="/nosotros" element={<AcercaDe></AcercaDe>}></Route>
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
          path="/product/upload"
          component={Auth(UploadProductPage, true)}
        />
        <Route
          exact
          path="/product/:productid"
          component={Auth(DetailProductPage, null)}
        />
        <Route
          exact
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
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
      <SeparadorInferior></SeparadorInferior>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
