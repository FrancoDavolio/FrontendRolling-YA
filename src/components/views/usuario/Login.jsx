import { Container, Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "../../helpers/queriesLogin";

const Login = ({ setUsuarioLogueado }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    login(datos).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Bienvenido",
          `Gracias por contar con nosotros, ${respuesta.nombre}`,
          "success"
        );
        localStorage.setItem(
          "tokenRollingYa",
          JSON.stringify(respuesta)
        );
        setUsuarioLogueado(respuesta);
        navigate("/");
      } else {
        Swal.fire(
          `Hubo un error inesperado`,
          "Intentelo nuevamente en breve.",
          "error"
        );
      }
    });
  };

  return (
    <Container className="mainSection">
      <h1 className="text-center my-3 display-2 poppins text-light">
        Bienvenido a RollingYa!
      </h1>
      <section className="d-flex justify-content-center text-light">
        <Card style={{ width: "30rem", height: "auto" }} className="borde rojo">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label className="mb-4 mt-4 ms-4 fs-3 poppins">
                Correo electrónico
              </Form.Label>
              <div className="d-flex justify-content-center">
                <Form.Control
                  className="input"
                  type="email"
                  placeholder="ejemplo@gmail.com"
                  {...register("email", {
                    required: "El email es obligatorio",
                  })}
                ></Form.Control>
              </div>
              <Form className="text-danger">{errors.email?.message}</Form>
            </Form.Group>
            <Form.Group>
              <Form.Label className="mb-4 mt-1 ms-4 fs-3 poppins">
                Contraseña
              </Form.Label>
              <div className="d-flex justify-content-center">
                <Form.Control
                  className="input"
                  type="password"
                  placeholder="@Holamundo123"
                  {...register("contrasena", {
                    required: "La contraseña es obligatorio",
                  })}
                />
              </div>
              <Form className="text-danger">{errors.contrasena?.message}</Form>
            </Form.Group>
            <div className="text-center">
              <Button
                className="text-light negro mt-4"
                type="submit"
                variant="dark"
              >
                Iniciar Sesión
              </Button>
            </div>
          </Form>
        </Card>
      </section>
      <div className="text-center my-5">
        <Button
          className="ms-3 text-light negro"
          onClick={() => navigate("/register")}
          variant="dark"
        >
          ¿No estas registrado? Registrate aqui.
        </Button>
      </div>
    </Container>
  );
};

export default Login;
