import React from "react";

import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardProductosInicio from "./pagInicio/cardProductosInicio";
import { consultaAPI } from "../helpers/prodAdmin";
const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
  consultaAPI().then((respuesta)=>{
   
   setProductos(respuesta);
   })

  },[])

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
          <h1 className="text-light  fw-bold ">PRODUCTOS ROLLING-YA</h1>
        </div>


        <Row xs={1} md={2} lg={4} >
          {productos.map((producto) => (
            <CardProductosInicio
              key={producto._id}
              producto={producto}
              setProductos={setProductos}
              
            ></CardProductosInicio>
          ))}
        </Row>

        <hr />
        

        <div className="giroImg row">
          <div className="divFrase col-sm-12 col-md-12 col-lg-6">
            <img
              src="https://restaurantden.com/wp-content/uploads/2015/07/food-trends-1.jpg"
              className="imgFrase"
            />
          </div>
          <div className="p-5 text-center divFrase col-sm-12 col-md-12 col-lg-6">
            <p className="fraseInicio textInicio ">
              "UNA EMPRESA QUE FOMENTA <br /> LAS RELACIONES <br /> Y
              ALIMENTA CORAZONES."
            </p>
          </div>
          </div>
          
      </Container>
    </>
  );
};

export default Inicio;
