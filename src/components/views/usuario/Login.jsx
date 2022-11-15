import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { consultarUserAPi } from "../../helpers/queriesLogin";

const Login = ({ setUsuarioLogueado }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    consultarUserAPi(datos).then((respuesta) => {
      const encontrarUsuario = respuesta.find(
        (user) => user.email === datos.email
      );
      if (encontrarUsuario) {
        if (encontrarUsuario.contrasena === datos.contrasena) {
          Swal.fire(
            "Bienvenido",
            `Gracias por contar con nosotros, ${encontrarUsuario.nombre}`,
            "success"
          );
          localStorage.setItem("tokenRollingYa", JSON.stringify(datos));
          setUsuarioLogueado(datos);
          navigate("/");
        } else {
          Swal.fire(
            "Error",
            `Contraseña incorrecta, vuelva a intentarlo`,
            "error"
          );
        }
      } else {
        Swal.fire(
          "Email incorrecto",
          `No encontramos un email con ese nombre, vuelve a intentarlo`,
          "error"
        );
      }
    });
  };

  return (
    <Container className="mainSection">
      <h1 className="text-center my-3">Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ej: franco@gmail.com"
            {...register("email", {
              required: "El email es obligatorio",
            })}
          ></Form.Control>
          <Form className="text-danger">{errors.email?.message}</Form>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña*</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ej: @Holamundo123"
            {...register("contrasena", {
              required: "La contraseña es obligatorio",
            })}
          />
          <Form className="text-danger">{errors.contrasena?.message}</Form>
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar Seccion
        </Button>
        <Button className="ms-3" onClick={() => navigate("/register")}>
          ¿No estas registrado?
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
