import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Navbar,Nav,FormControl, Container} from 'react-bootstrap/' 


class LocationSearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    getLocation = (event) =>{
        this.props.getLocation(event);

    }

    getWeather = (event) =>{
        this.props.getWeather(event);

    }
    
    getMovies = (event) =>{
        this.props.getMovies(event);

    }

    getRestaurants=(event)=>{
        this.props.getRestaurants(event);
    }
    
    getMap=(event)=>{
      this.props.getMap(event);
    }

    render() {
        return (

            // <Form onSubmit={this.getLocation}>
            //     <Form.Group className="mb-3" controlId="formBasicText">
            //         <Form.Label style={{textAlign:'left',width:"100%",marginLeft:"10px"}} >City Name</Form.Label>
            //         <Form.Control type="text" placeholder="Enter City Name" name="cityName" />
            //     </Form.Group>
            //     <Button variant="primary" type="submit">
            //         Explore!
            //     </Button>
            // </Form>



<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
<Navbar.Brand >City Explorer</Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
  <Nav
    className="me-auto"
    style={{ maxHeight: '100px' }}
    navbarScroll
  >
      <Nav.Link onClick={this.getWeather}>City Weather</Nav.Link>
    <Nav.Link onClick={this.getMap}>City Map</Nav.Link>
    <Nav.Link onClick={this.getMovies}>City's Movies</Nav.Link>

    <Nav.Link onClick={this.getRestaurants} >
    City's Restaurants
    </Nav.Link>
  </Nav>
  <Form className="d-flex" onSubmit={this.getLocation}>
    <FormControl
      placeholder="Enter City Name"
      name="cityName"
      type="search"
      className="mr-2"
      aria-label="Search"
    />
    <Button style={{marginLeft:"10px"}} variant="outline-success" variant="secondary" type="submit">Explore!</Button>
  </Form>
</Navbar.Collapse>
</Container>
</Navbar>




        )
    }


}

export default LocationSearchForm;