import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className=" w-100 caruselInicio"
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
          className="w-100 caruselInicio"
          src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2 className="tituloCarusel">¡PEDÍ LO QUE QUIERAS!</h2>
          <p className="fw-bold">ROLLING-YA</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 caruselInicio"
          src="https://images.pexels.com/photos/14107/pexels-photo-14107.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 className="tituloCarusel">¡PEDÍ LO QUE QUIERAS!</h2>
          <p className="fw-bold">ROLLING-YA</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Inicio;
