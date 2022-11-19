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
            className=" caruselInicio "
            src="https://moinhoglobo.com.br/wp-content/uploads/2019/02/01-massa-pizza-1024x683.png"
            alt="Pizza slide"
            height={750}
          />
          <Carousel.Caption>
            <h2 className="tituloCarusel  ">¡PEDÍ LO QUE QUIERAS!</h2>
            <p className="fw-bold">ROLLING-YA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="caruselInicio"
            src="https://www.elindependiente.com.ar/elindependiente/1.0/img/552848634.jpg"
            alt="Papas slide"
            height={750}
          />

          <Carousel.Caption>
            <h2 className="tituloCarusel">¡PEDÍ LO QUE QUIERAS!</h2>
            <p className="fw-bold">ROLLING-YA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="caruselInicio"
            src="https://assets.unileversolutions.com/recipes-v2/232055.jpg"
            alt="hambruesa slider"
            height={750}
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
        <hr />
        <section className="d-flex">
          <div className="w-50">
            <img
              src="https://restaurantden.com/wp-content/uploads/2015/07/food-trends-1.jpg"
              className="imgFrase"
            />
          </div>
          <div className="p-5 text-center">
            <p className="fraseInicio">
              "UN RESTAURANTE QUE FOMENTA <br /> LAS RELACIONES <br /> Y
              ALIMENTA CORAZONES."
            </p>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Inicio;
