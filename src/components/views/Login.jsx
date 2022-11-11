import { Container, Form, Button, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    console.log("desde mi funsion submit");
    console.log(datos);
  };

  return (
    <Container className="mainSection">
      <h1 className="text-center my-3">Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: franco@gmail.com"
            {...register("usuario", {
              required: "El usuario es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad de caracteres minimos es 2",
              },
              maxLength: {
                value: 20,
                message: "La cantidad maxima de caracteres es 100",
              },
            })}
          ></Form.Control>
          <Form className="text-danger">{errors.usuario?.message}</Form>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña*</Form.Label>
          <Form.Control
            type="pasword"
            placeholder="Ej: holamundo123"
            {...register("contrasena", {
              required: "La contraseña es obligatorio",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                message: "Contraseña incorrecta",
              },
            })}
          />
          <Form className="text-danger">{errors.contrasena?.message}</Form>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
