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
            <Administrador></Administrador>
          }
        ></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
