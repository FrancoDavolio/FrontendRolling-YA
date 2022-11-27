import React from 'react';

const Pedidos = () => {
    return (
        <Container>
        <div className="text-center">
          <h1 className="text-light  fw-bold">Carrito Rolling-YA!</h1>
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
        <Row>
            <Div>
                <h1>TOTAL</h1>
                <button>Cancelar</button>
                <button>Pedir</button>

            </Div>
        </Row>
      </Container>
    );
};

export default Pedidos;