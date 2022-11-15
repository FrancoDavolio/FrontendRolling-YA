import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
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
  const [usuarios, setUsuarios] = useState([]);

  const onSubmit = (datos) => {
      crearUsuarioAPI(datos).then((respuesta) => {
        if (respuesta.status === 201) {
          setUsuarios([
            ...usuarios,
            {
              nombre: datos.nombre,
              email: datos.email,
              contrasena: datos.contrasena,
              perfil: datos.perfil,
              estado: datos.estado,
              id: datos.id,
            },
          ]);
          Swal.fire(
            `Te registraste correctamente, ${datos.nombre}`,
            "Bienvenido.",
            "success"
          );
          localStorage.setItem("tokenRollingYa", JSON.stringify(datos));
          setUsuarioLogueado(datos);
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
      <h1 className="text-center">Register</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
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
              pattern: {
                value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
                message: "Debe ingresar un nombre de usaurio valido",
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
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
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
              minLength: {
                value: 8,
                message: "Su contraseña debe tener al menos 8 caracteres",
              },
              maxLength: {
                value: 30,
                message:
                  "Su contraseña debe tener como 30 caracteres como maximo",
              },
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
        <Form.Group>
          <Form.Control
            type="hidden"
            value={"cliente"}
            {...register("perfil")}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="hidden"
            value={"confirmado"}
            {...register("estado")}
          ></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear Cuenta
        </Button>
        <Button className="ms-3" onClick={() => navigate("/login")}>
          ¿Ya estas registrado?
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
