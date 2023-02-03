import { Link } from "react-router-dom";
import LogoFooter from "../../Assets/Logo_fondo_negro.png"

const Footer = () => {
  return (
    <footer className="negro text-center text-light py-3 ">
      <Link to="/">
        <img src={LogoFooter} alt="logo de rolling ya" width="60px"/>
      </Link>
      <p>
        <small>&copy; Todos los derechos reservados</small>
      </p>
    </footer>
  );
};

export default Footer;
