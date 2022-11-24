import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import LogoPrincipal from "../../Assets/Logo_fondo_blanco.png"

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const logo = (
    <img
      src="https://trello.com/1/cards/636c0af2f51b67035ab6095e/attachments/6376cb68f3a30e01daa9019f/previews/6376cb68f3a30e01daa9021e/download/Logo_fondo_blanco.png"
      alt="logo"
    />
  );
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("tokenRollingYa");
    setUsuarioLogueado({});
    navigate("/login");
  };

  return (
    <Navbar className="blanco" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="py-1 justify-content-between w-100">
          {usuarioLogueado.email ? (
            usuarioLogueado.perfil === "admin" ? (
              <>
                <Button onClick={logout} variant="" >
                  Cerrar sesión
                </Button>
                <NavLink
                  to="/administrador"
                  className="nav-item nav-link ms-3 "
                >
                  Administrar
                </NavLink>
              </>
            ) : (
              <>
                <Button onClick={logout} variant="" >
                  Cerrar sesión
                </Button>
              </>
            )
          ) : (
            <>
              <NavLink to="/login" className="nav-item nav-link ms-3 ">
                Login
              </NavLink>
          <NavLink to="/" className="nav-item nav-link ms-3 ">
            Inicio
          </NavLink>
            </>
          )}
          <Link to="/" className="ms-3">
            <img src={LogoPrincipal} alt="logo de rolling ya" width={75} />
          </Link>
          <NavLink to="/nosotros" className="nav-item nav-link ms-3">
            Nosotros
          </NavLink>
          <NavLink to="/pedidos" className="nav-item nav-link ms-3 ">
            <GiShoppingCart className="fs-4"></GiShoppingCart>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
