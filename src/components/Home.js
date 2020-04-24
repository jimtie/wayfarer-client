import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Home extends Component {
	render(){
	    return (
	        <div>
	            <h1>Wayfarer</h1>
	            <Carousel>
				  <Carousel.Item>
				    <img
				      className="d-block w-100"
				      src="https://picsum.photos/id/237/400/150"
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
				      src="https://picsum.photos/id/238/400/150"
				      alt="Third slide"
				    />

				    <Carousel.Caption>
				      <h3>Second slide label</h3>
				      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				      className="d-block w-100"
				      src="https://picsum.photos/id/239/400/150"
				      alt="Third slide"
				    />

				    <Carousel.Caption>
				      <h3>Third slide label</h3>
				      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				</Carousel>
	        </div>
	    );
	}
}

export default Home;