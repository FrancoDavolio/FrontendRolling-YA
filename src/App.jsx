import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Login from "./components/views/usuario/Login";
import Inicio from "./components/views/Inicio";
import Upload ProductPage from "./components/views/UploadProductPage/UploadProductPage";
import DetailProductPage from "./components/views/ProductDetailPage";
import Error404 from "./components/views/Error404";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import Register from "./components/views/usuario/Register";
import Pedidos from "./components/views/Pedidos"
import { useState } from "react";
import SeparadorSuperior from "./components/common/SeparadorSuperior";
import SeparadorInferior from "./components/common/SeparadorInferior";
import AcercaDe from "./components/views/AcercaDe"

function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenRollingYa")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <SeparadorSuperior></SeparadorSuperior>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/pedidos" element={<Pedidos></Pedidos>}></Route>
        <Route exact path="/nosotros" element={<AcercaDe></AcercaDe>}></Route>
        <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
        <Route exact path="/register"element={<Register setUsuarioLogueado={setUsuarioLogueado}></Register>}></Route>
        <Route exact path="/product/upload" component={Auth(UploadProductPage, true)}/>
        <Route exact path="/product/:productid" component={Auth(DetailProductPage,null)}/>
        <Route exact path="/adiministrador/*"element={<RutasProtegidas><RutasAdmin setUsuarioLogueado={setUsuarioLogueado}></RutasAdmin></RutasProtegidas>
        
          
          }
></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <SeparadorInferior></SeparadorInferior>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
