import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";


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
        <Nav className="py-1 d-flex justify-content-between">
          {usuarioLogueado.email ? (
            usuarioLogueado.contrasena === "@Holamundo123" ? (
              <>
                <Button onClick={logout} variant="" className="col-4">
                  Cerrar sesión
                </Button>
                <NavLink
                  to="/administrador"
                  className="nav-item nav-link ms-3 col-4"
                >
                  Administrar
                </NavLink>
              </>
            ) : (
              <>
                <Button onClick={logout} variant="" className="col-4">
                  Cerrar sesión
                </Button>
              </>
            )
          ) : (
            <>
              <NavLink to="/login" className="nav-item nav-link ms-3 col-4">
                Login
              </NavLink>
            </>
          )}
          <NavLink to="/" className="nav-item nav-link ms-3 col-4">
            Inicio
          </NavLink>
          <Link to="/" className="col-4">
            <img src="./Logo_fondo_blanco" alt="logo de rolling ya" />
          </Link>
          <NavLink to="/nosotros" className="nav-item nav-link ms-3 col-4">
            Nosotros
          </NavLink>
          <NavLink to="/pedidos" className="nav-item nav-link ms-3 col-4">
            <GiShoppingCart className="fs-4"></GiShoppingCart>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
