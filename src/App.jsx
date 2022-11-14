import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Login from "./components/views/usuario/Login";
import Inicio from "./components/views/Inicio";
import Detalle from "./components/views/Detalle";
import Error404 from "./components/views/Error404";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import Register from "./components/views/usuario/Register";

function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenRollingYa")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/detalle/:id" element={<Detalle></Detalle>}></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        ></Route>
        <Route exact path="/register" element={<Register></Register>}></Route>
        <Route
          path="/adiministrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin setUsuarioLogueado={setUsuarioLogueado}></RutasAdmin>
            </RutasProtegidas>
          }
        ></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
