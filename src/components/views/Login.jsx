import { Container, Form, Button } from "react-bootstrap";
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
            type="pasword"
            placeholder="Ej: @Holamundo123"
            {...register("contrasena", {
              required: "La contraseña es obligatorio",
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
