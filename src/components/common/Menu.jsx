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
    <Navbar bg="danger" expand="lg">
      <Navbar.Brand as={Link} to="/" className="ms-3 text-light">
        <h3>Cafeteria</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="py-1">
          <NavLink to="/" className="nav-item nav-link text-light">
            Inicio
          </NavLink>
          {usuarioLogueado.nombre ? (
            usuarioLogueado.perfil == "cliente" ? (
              <>
                <NavLink to="/pedidos" className="nav-item nav-link text-light">
                  Pedidos
                </NavLink>
                <Button onClick={logout()}>
                  Cerrar Sección
                </Button>
              </>
            ) : (
              <>
                <NavLink
                  to="/administrador"
                  className="nav-item nav-link text-light"
                >
                  Administrar
                </NavLink>
                <Button  onClick={logout}>
                  Cerrar Sección
                </Button>
              </>
            )
          ) : (
            <>
              <NavLink to="/login" className="nav-item nav-link text-light">
                Login
              </NavLink>
              <NavLink to="/register" className="nav-item nav-link text-light">
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
