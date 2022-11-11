import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  //   const onSubmit = (datos) => {
  //     console.log(datos);
  //     crearUsuario(datos).then((entrega) => {
  //       console.log(entrega);
  //       if (entrega.status === 201) {
  //         Swal.fire(
  //           "Usuario creado",
  //           "El usuario fue creado exitosamente",
  //           "success"
  //         );
  //         reset();
  //       } else {
  //         Swal.fire("Ocurrio un error");
  //       }
  //     });
  //   };

  return (
    <Container className="mainSection">

      <h1 className="text-center">Register</h1>

      <Form onSubmit={handleSubmit()}>

        <Form.Group className="mb-3">

          <Form.Label>Nombre*</Form.Label>

          <Form.Control
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
            })}
          ></Form.Control>

          <Form className="text-danger">{errors.nombre?.message}</Form>

        </Form.Group>

        <Form.Group className="mb-3">

          <Form.Label>Email*</Form.Label>

          <Form.Control
            type="email"
            placeholder="Ej: Franco@gmail.com"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ,
                message: "Por favor ponga un email valido",
              },
            })}
          ></Form.Control>

          <Form className="text-danger">{errors.email?.message}</Form>

        </Form.Group>

        <Form.Group className="mb-3">

          <Form.Label>Contraseña*</Form.Label>

          <Form.Control
            type="password"
            placeholder="Ej: holamundo123"
            {...register("contrasena", {
              required: "La contrasena es obligatorio",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                message:
                  "Siga estas intrucciones: Minimo 8 caracteres, Maximo 15, Al menos una letra mayúscula, Al menos una letra minucula, Al menos un dígito, No espacios en blanco, Al menos 1 caracter especial",
              },
            })}
          ></Form.Control>

          <Form className="text-danger">{errors.contrasena?.message}</Form>

        </Form.Group>

        <Button variant="primary" type="submit">
          Crear Cuenta
        </Button>

      </Form>
    </Container>
  );
};

export default Register;
