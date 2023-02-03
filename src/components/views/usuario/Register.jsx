import { Form, Button, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearUsuarioAPI } from "../../helpers/queriesLogin";

const Register = ({ setUsuarioLogueado }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    datos.perfil = "cliente";
    datos.estado = "confirmado";
      crearUsuarioAPI(datos).then((respuesta) => {
        if (respuesta.status === 201) {
          Swal.fire(
            `Te registraste correctamente, ${respuesta.nombre}`,
            "Bienvenido.",
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
        Registrate en RollingYa
      </h1>
      <section className="d-flex justify-content-center">
        <Card style={{ width: "30rem", height: "auto" }} className="borde rojo">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label className="mb-4 mt-4 ms-4 fs-3 poppins  text-light">
                Nombre
              </Form.Label>
              <div className="d-flex justify-content-center">
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="Ej: Franco"
                  {...register("nombre", {
                    required: "El nombre es obligatorio",
                    minLength: {
                      value: 2,
                      message: "La cantidad de caracteres minimos es 2",
                    },
                    maxLength: {
                      value: 30,
                      message: "La cantidad maxima de caracteres es 30",
                    },
                    pattern: {
                      value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
                      message: "Debe ingresar un nombre de usaurio valido",
                    },
                  })}
                ></Form.Control>
              </div>

              <Form className="text-danger">{errors.nombre?.message}</Form>
            </Form.Group>

            <Form.Group>
              <Form.Label className="mb-4 mt-4 ms-4 fs-3 poppins text-light">
                Correo Electrónico
              </Form.Label>
              <div className="d-flex justify-content-center">
                <Form.Control
                  className="input"
                  type="email"
                  placeholder="Ej: Franco@gmail.com"
                  {...register("email", {
                    required: "El email es obligatorio",
                    minLength: {
                      value: 8,
                      message: "La cantidad de caracteres minimos es 8",
                    },
                    maxLength: {
                      value: 100,
                      message: "La cantidad maxima de caracteres es 100",
                    },
                    pattern: {
                      value:
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                      message: "Por favor ponga un email valido",
                    },
                  })}
                ></Form.Control>
              </div>

              <Form className="text-danger">{errors.email?.message}</Form>
            </Form.Group>

            <Form.Group>
              <Form.Label className="mb-4 mt-4 ms-4 fs-3 poppins text-light">
                Contraseña
              </Form.Label>
              <div className="d-flex justify-content-center">
                <Form.Control
                  className="input text-ligh"
                  type="password"
                  placeholder="Ej: @Holamundo123"
                  {...register("contrasena", {
                    required: "La contrasena es obligatorio",
                    minLength: {
                      value: 8,
                      message: "Su contraseña debe tener al menos 8 caracteres",
                    },
                    maxLength: {
                      value: 15,
                      message:
                        "Su contraseña debe tener 15 caracteres como maximo",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                      message:
                        "Siga estas intrucciones: Minimo 8 caracteres, Maximo 15, Al menos una letra mayúscula, Al menos una letra minucula, Al menos un dígito, No espacios en blanco, Al menos 1 caracter especial",
                    },
                  })}
                ></Form.Control>
              </div>
              <Form className="text-danger">{errors.contrasena?.message}</Form>
            </Form.Group>
            <div className="text-center mt-5">
              <Button className="text-light negro" variant="dark" type="submit">
                Crear Cuenta
              </Button>
            </div>
          </Form>
        </Card>
      </section>
      <div className="text-center my-5">
        <Button
          className="ms-3 text-light negro"
          variant="dark"
          onClick={() => navigate("/login")}
        >
          ¿Ya estas registrado? Inicia sesión aqui.
        </Button>
      </div>
    </Container>
  );
};

export default Register;
