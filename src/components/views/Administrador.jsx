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

const Administrador = () => {
  useEffect(() => {
    cargaMenu();
  }, [])
  

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
          <NavLink className="options__link selected">
            <div className="option">
              <FaHome className="icon-option" title="Inicio"></FaHome>
              <h4>Inicio</h4>
            </div>
          </NavLink>
          <NavLink className="options__link">
            <div className="option">
              <FaUserAlt className="icon-option" title="Usuarios"></FaUserAlt>
              <h4>Usuarios</h4>
            </div>
          </NavLink>
          <NavLink className="options__link">
            <div className="option">
              <FaProductHunt
                className="icon-option"
                title="Productos"
              ></FaProductHunt>
              <h4>Productos</h4>
            </div>
          </NavLink>
          <NavLink className="options__link">
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
        <h1>Title example</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          esse! Beatae excepturi expedita, rem accusamus nulla dolor deserunt
          nostrum quis veritatis blanditiis eaque asperiores quae, optio
          voluptatibus et velit. Atque sit eligendi laudantium iste fuga tempora
          officia ducimus hic adipisci neque esse, odit perferendis, accusantium
          omnis consectetur placeat, facilis officiis reprehenderit. Laboriosam
          quasi quis iusto libero non impedit recusandae voluptates ut nobis
          laudantium. Quod id distinctio at doloremque, similique velit laborum
          ad amet cum, quaerat enim voluptas debitis libero? Cumque ab non nisi,
          at sit dolores illum beatae alias quae maiores? Iure, natus quo
          distinctio ratione ad ipsa aliquam sed adipisci est facere, inventore
          perferendis dolore, quas dolores rerum. Voluptatum minus quidem alias
          fugit. Natus cupiditate, quos distinctio rem sunt expedita autem
          consequuntur? Veniam voluptatem minima officia quis repudiandae
          voluptate esse dolorem accusamus doloribus quae, harum aliquam qui
          quas ratione fugiat explicabo aliquid tempore repellendus excepturi
          asperiores blanditiis ducimus iusto eos. Voluptatibus, sequi, labore
          placeat magni maiores dignissimos laudantium doloribus, totam incidunt
          modi corrupti? Aliquam aut accusantium dignissimos. Impedit sint
          nulla, corporis deleniti voluptates exercitationem totam accusantium
          harum architecto quidem ea accusamus omnis ex iste dicta nemo
          praesentium consequatur aspernatur recusandae laborum amet expedita
          neque veniam? Ea eligendi nesciunt ipsam.
        </p>
      </main>
    </div>
  );
};

export default Administrador;
