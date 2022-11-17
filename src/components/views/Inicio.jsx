import React from "react";

import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";
import { CardImg, Card, Button } from "react-bootstrap";
import Inicio2 from "./Inicio/Inicio2";

const Inicio = () => {



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

<Row xs={12} md={6} lg={3}>



        
        <Link>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1672304/pexels-photo-1672304.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </Card>
        </Link>
        
        <Link>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/10342005/pexels-photo-10342005.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </Card>
        </Link>

        
        <Link>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </Card>
        </Link>
        </Row>

       
      </Container>
    </>
  );
};

export default Inicio;
