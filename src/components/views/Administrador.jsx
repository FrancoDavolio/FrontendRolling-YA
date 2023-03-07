import "../../css/admin.css";
import {
  FaBars,
  FaHome,
  FaPizzaSlice,
  FaProductHunt,
  FaShoppingCart,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { cargaMenu, open_close_menu } from "../helpers/menuAdmin";
import { useEffect } from "react";
import { AdminUsuarios } from "./adminPages/AdminUsuarios";
import { AdminPedidos } from "./adminPages/AdminPedidos";
import { AdminProductos } from "./adminPages/AdminProductos";

const Administrador = ({option}) => {
  useEffect(() => {
    cargaMenu();
  }, [])

const  mainOption = () => { 
      if (option==="usuarios") {
        return <AdminUsuarios></AdminUsuarios>
      } else if(option==="productos"){
        return <AdminProductos></AdminProductos>
      }else if(option==="pedidos"){
        return <AdminPedidos></AdminPedidos>
      }else{
        return <h1>BIENVENIDO ADMIN 😎</h1>
      }
   }
  return (
    <div className="bodyAdmin" id="bodyAdmin">
      <header>
        <div className="icon__menu">
          <FaBars
            className="icon__bars"
            id="btn_open"
            onClick={open_close_menu}
          ></FaBars>
        </div>
        {/* <div className="logo">
          <img src="https://trello.com/1/cards/636c0af2f51b67035ab6095e/attachments/6376cb68f3a30e01daa9019f/previews/6376cb68f3a30e01daa9021e/download/Logo_fondo_blanco.png" alt="logo" className="w-100"/>
        </div> */}
      </header>

      <div className="menu__side" id="menu_side">
        <div className="div__name">
          <NavLink end to={"/"} className="name__page">
            {/* <img src="https://trello.com/1/cards/636c0af2f51b67035ab6095e/attachments/6376cb68f3a30e01daa9019f/previews/6376cb68f3a30e01daa9021e/download/Logo_fondo_blanco.png" alt="logo" className="icon__name"/> */}
            <FaPizzaSlice className="icon__name"></FaPizzaSlice>
            <h4>RollingYA</h4>
          </NavLink>
        </div>

        <div className="options__menu">
          <NavLink end to={"/administrar"} className={option==="admin"?"options__link selected":"options__link"}>
            <div className="option">
              <FaHome className="icon-option" title="Inicio"></FaHome>
              <h4>Inicio</h4>
            </div>
          </NavLink>
          <NavLink end to={"/administrar/usuarios"} className={option==="usuarios"?"options__link selected":"options__link"}>
            <div className="option">
              <FaUserAlt className="icon-option" title="Usuarios"></FaUserAlt>
              <h4>Usuarios</h4>
            </div>
          </NavLink>
          <NavLink end to={"/administrar/productos"} className={option==="productos"?"options__link selected":"options__link"}>
            <div className="option">
              <FaProductHunt
                className="icon-option"
                title="Productos"
              ></FaProductHunt>
              <h4>Productos</h4>
            </div>
          </NavLink>
          <NavLink end to={"/administrar/pedidos"} className={option==="pedidos"?"options__link selected":"options__link"}>
            <div className="option">
              <FaShoppingCart
                className="icon-option"
                title="Pedidos"
              ></FaShoppingCart>
              <h4>Pedidos</h4>
            </div>
          </NavLink>
        </div>
      </div>
      <main>
        { mainOption() }
       
        
      </main>
    </div>
  );
};

export default Administrador;
