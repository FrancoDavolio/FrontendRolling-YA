import { Container, Form, Button, Card } from "react-bootstrap";
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
      <h1 className="text-center my-3 display-2 poppins text-light">
        Bienvenido a RollingYa!
      </h1>
      <section className="d-flex justify-content-center">
        <Card
          style={{ width: "30rem", height: "24rem" }}
          className="borde rojo"
        >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-4">
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
            <Form.Group className="mb-4">
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
                className="text-light negro"
                type="submit"
                variant="dark"
              >
                Iniciar Seccion
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
