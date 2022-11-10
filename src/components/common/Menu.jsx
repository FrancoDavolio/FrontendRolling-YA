import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <header>
      <Nav className="bg-danger py-3">
        <Nav.Item as={Link} to="/" className="ms-3 nav-link text-light">
          <h2>Cafeteria</h2>
        </Nav.Item>
        <Nav.Item className="ms-2">
          <NavLink to="/" className="nav-item nav-link ms-2 text-light">
            Inicio
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/administrar"
            className="nav-item nav-link ms-2 text-light"
          >
            Administrar
          </NavLink>
        </Nav.Item>
        <Nav.Item className="ms-2">
          <NavLink to="/login" className="nav-item nav-link ms-2 text-light">
            Login
          </NavLink>
        </Nav.Item>
        <Nav.Item className="ms-2">
          <NavLink to="/register" className="nav-item nav-link ms-2 text-light">
            Register
          </NavLink>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Menu;