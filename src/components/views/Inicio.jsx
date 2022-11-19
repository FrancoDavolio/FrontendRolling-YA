import React from "react";

import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardProducto from "./adminProductos/CardProducto";


const Inicio = () => {
  const [productos, setProductos] = useState([]);

  //useEffect(()=>{
  //consultarAPI().then((respuesta)=>{
  // console.log(respuesta)
  // setProductos(respuesta);
  // })

  //},[])

  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className=" caruselInicio"
            src="https://media.istockphoto.com/id/938742222/es/foto/pizza-de-pepperoni-cheesy.jpg?s=612x612&w=0&k=20&c=GUwbHCrMdnpHGmTzHVPk2U9flWi3WgMVdfdOeBMU00E="
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="tituloCarusel  ">¡PEDÍ LO QUE QUIERAS!</h2>
            <p className="fw-bold">ROLLING-YA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="caruselInicio"
            src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2 className="tituloCarusel">¡PEDÍ LO QUE QUIERAS!</h2>
            <p className="fw-bold">ROLLING-YA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="caruselInicio"
            src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2 className="tituloCarusel">¡PEDÍ LO QUE QUIERAS!</h2>
            <p className="fw-bold">ROLLING-YA</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      

      <br />
      <hr />

      <Container>
        <div className="text-center">
          <h1 className="text-light  fw-bold">Productos Rolling-YA</h1>
        </div>

        <Row xs={12} md={6} lg={3}>
          {productos.map((producto) => (
            <CardProducto
              key={producto._id}
              producto={producto}
              setProductos={setProductos}
            ></CardProducto>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Inicio;
