import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="negro text-center text-light py-3 ">
      <Link to="/">
        <img src="Logo_fondo_blanco.png" alt="logo de rolling ya" width="60px"/>
      </Link>
      <p>
        <small>&copy; Todos los derechos reservados</small>
      </p>
    </footer>
  );
};

export default Footer;
