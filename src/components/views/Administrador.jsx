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
import { cargaLink, cargaMenu, open_close_menu } from "../helpers/menuAdmin";
import { useEffect } from "react";
import { AdminUsuarios } from "./adminPages/AdminUsuarios";
import { AdminPedidos } from "./adminPages/AdminPedidos";
import { AdminProductos } from "./adminPages/AdminProductos";

const Administrador = ({option}) => {
  useEffect(() => {
    cargaMenu();
    console.log(option=="pedidos")
  }, [])

const  mainOption = () => { 
      if (option==="usuarios") {
        return <AdminUsuarios></AdminUsuarios>
      } else if(option==="productos"){
        return <AdminProductos></AdminProductos>
      }else if(option==="pedidos"){
        return <AdminPedidos></AdminPedidos>
      }else{
        return <h1>BIENVENIDO A ADMIN 😎</h1>
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
      </header>

      <div className="menu__side" id="menu_side">
        <div className="div__name">
          <div className="name__page">
            <FaPizzaSlice className="icon__name"></FaPizzaSlice>
            <h4>RollingYA</h4>
          </div>
        </div>

        <div className="options__menu">
          <NavLink end to={"/administrar"} className={option=="admin"?"options__link selected":"options__link"}>
            <div className="option">
              <FaHome className="icon-option" title="Inicio"></FaHome>
              <h4>Inicio</h4>
            </div>
          </NavLink>
          <NavLink end to={"/administrar/usuarios"} className={option=="usuarios"?"options__link selected":"options__link"}>
            <div className="option">
              <FaUserAlt className="icon-option" title="Usuarios"></FaUserAlt>
              <h4>Usuarios</h4>
            </div>
          </NavLink>
          <NavLink className={option=="productos"?"options__link selected":"options__link"}>
            <div className="option">
              <FaProductHunt
                className="icon-option"
                title="Productos"
              ></FaProductHunt>
              <h4>Productos</h4>
            </div>
          </NavLink>
          <NavLink className={option=="pedidos"?"options__link selected":"options__link"}>
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
