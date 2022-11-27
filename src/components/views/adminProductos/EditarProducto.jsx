import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { editarProductoAPI, obtenerProducto } from '../../helpers/prodAdmin';

export const EditarProducto = () => {
    const {
        register,
        handleSubmit,
        formState:{errors},
        setValue
    } = useForm();

    const{id} =useParams();
    const navegacion = useNavigate();

    useEffect(() => {
      obtenerProducto(id).then((respuesta)=>{
        if (respuesta.status === 200) {
            setValue("nombreProducto", respuesta.dato.nombreProducto);
            setValue("precio", respuesta.dato.precio);
            setValue("imagen", respuesta.dato.imagen);
            setValue("categoria", respuesta.dato.categoria);
            setValue("estado", respuesta.dato.estado);
            setValue("detalle", respuesta.dato.detalle);
          }
      })
    }, []);

    const onSubmit=(datos)=>{
        editarProductoAPI(id, datos).then((respuesta) => {
            if (respuesta.status === 200) {
              Swal.fire(
                "Producto editado",
                "El producto fue correctamente actualizado",
                "success"
              );
              navegacion("/administrar/productos");
            } else {
                Swal.fire(
                    'Ocurrio un error',
                    'Intentelo nuevamente en unos minutos',
                    'error'
                )
            }
          });
    }
    
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      {/* <Form onSubmit={handleSubmit}> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            minLength={2}
            maxLength={50}
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad de caracteres es 2 como minimo",
              },
              maxLength: {
                value: 50,
                message: "La cantidad maxima de caracteres es de 50",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio del producto es un dato obligatorio",
              min: {
                value: 1,
                message: "El precio minimo debe ser de $1",
              },
              max: {
                value: 10000,
                message: "El precio maximo debe ser de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDetalle">
          <Form.Label>Detalle*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: esto es un producto"
            minLength={4}
            maxLength={70}
            {...register("detalle", {
              required: "El detalle del producto es obligatorio",
              minLength: {
                value: 4,
                message: "La cantidad de caracteres es 4 como minimo",
              },
              maxLength: {
                value: 70,
                message: "La cantidad maxima de caracteres es de 70",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL valida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstado">
          <Form.Label>Estado*</Form.Label>
          <Form.Select
            {...register("estado", {
              required: "Debe seleccionar un estado",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="bebida-caliente">Bebida caliente</option>
            <option value="bebida-fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  )
}
