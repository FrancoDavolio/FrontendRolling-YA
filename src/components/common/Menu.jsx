import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("tokenRollingYa");
    setUsuarioLogueado({});
    navigate("/login");
  };

  return (
    <Navbar className="blanco" expand="lg">
      <Navbar.Brand as={Link} to="/" className="ms-3">
        <h3>Cafeteria</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="py-1">
          <NavLink to="/" className="nav-item nav-link ms-3">
            Inicio
          </NavLink>
          {usuarioLogueado.email ? (
            usuarioLogueado.contrasena === "@Holamundo123" ? (
              <>
                <NavLink to="/administrador" className="nav-item nav-link ms-3">
                  Administrar
                </NavLink>
                <Button onClick={logout}>Cerrar Sección</Button>
              </>
            ) : (
              <>
                <NavLink to="/pedidos" className="nav-item nav-link ms-3">
                  Pedidos
                </NavLink>
                <Button onClick={logout}>Cerrar Sección</Button>
              </>
            )
          ) : (
            <>
              <NavLink to="/login" className="nav-item nav-link ms-3">
                Login
              </NavLink>
              <NavLink to="/register" className="nav-item nav-link ms-3">
                Registrarse
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
