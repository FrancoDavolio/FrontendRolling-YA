import React from "react";

import Carousel from "react-bootstrap/Carousel";
import { Container, Row,  } from "react-bootstrap";
import Figure from 'react-bootstrap/Figure';
import { Link } from "react-router-dom";
import {CardImg, Card, Button} from "react-bootstrap";


const Inicio = () => {
  return (
    <>
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
   <br />
    <Container>
      <Row xs={1} md={4} lg={4} >
   

<div >
  
    <Figure>
      <Figure.Image  className="imgRestaurant"
        width={171}
        height={180}
        alt="171x180"
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </Figure>
    <div className="ms-3"> <Link className="btn btn-danger" >RESTAURANT</Link></div>
        
    
    </div>
    <div>

    <Figure>
      <Figure.Image  className="imgRestaurant"
        width={171}
        height={180}
        alt="171x180"
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </Figure>
    <div className="ms-3"> <Link className="btn btn-danger" >RESTAURANT</Link></div>
        
    </div>
    <div>
    <Figure>
      <Figure.Image  className="imgRestaurant"
        width={171}
        height={180}
        alt="171x180"
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
         
    </Figure>
    <div className="ms-3"> <Link className="btn btn-danger" >RESTAURANT</Link></div>
    
    </div>
  




    </Row>

    <hr />

    <h2 className="colorTitulosCard">BEBIDAS</h2>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1672304/pexels-photo-1672304.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    <h2 className="colorTitulosCard">Cafeteria</h2>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/10342005/pexels-photo-10342005.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    <h2 className="colorTitulosCard">Restaurant</h2>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
    </Container>
    </>
    
   



    

  );
  
};

export default Inicio;
