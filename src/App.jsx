import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Login from "./components/views/Login"
import Register from "./components/views/Register"
import Inicio from "./components/views/Inicio"
import Administrador from "./components/views/Administrador"
import AcercaDe from "./components/views/AcercaDe"
import Detalle from "./components/views/Detalle"
import Pedidos from "./components/views/Pedidos"
import Error404 from "./components/views/Error404"
import CardProducto from "./components/views/adminProductos/CardProducto"
import CrearProducto from "./components/views/adminProductos/CrearProducto"
import EditarProducto from "./components/views/adminProductos/EditarProducto"
import ItemProducto from "./components/views/adminProductos/ItemProducto"

function App() {
  return (
    
    <BrowserRouter>
      
      <Routes>
        <Route exact path="/menu" element={<Menu></Menu>}></Route>
        <Route exact path="/footer" element={<Footer></Footer>}></Route>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/register" element={<Register></Register>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/acercade" element={<AcercaDe></AcercaDe>}></Route>
        <Route exact path="/detalle/:id" element={<Detalle></Detalle>}></Route>
        <Route exact path="/pedidos" element={<Pedidos></Pedidos>}></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
        <Route exact path="/cardproducto" element={<CardProducto></CardProducto>}></Route>
        <Route exact path="/crearproducto" element={<CrearProducto></CrearProducto>}></Route>
        <Route exact path="/editar/:id" element={<EditarProducto></EditarProducto>}></Route>
        <Route exact path="/itemproducto" element={<ItemProducto></ItemProducto>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
