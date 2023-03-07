import Carousel from 'react-bootstrap/Carousel';
import { ReactDOM } from 'react';




function App() {

  return (
    
    <Carousel>
         <div className="App">
        <h1>Hola mundo</h1>
      </div>
      <Carousel.Item>
     
        <img
          className="d-block w-100"
          src={require ("../src/img/Edificio-4 (1).png")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require ("../src/img/Edificio-4 (1).png")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require ("../src/img/Edificio-4 (1).png")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default App;


