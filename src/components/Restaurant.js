import React from 'react';
import { Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Restaurant extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col>
                <Card bg="secondary" text="white" style={{ margin: "30px 5px" }}>
                    <Card.Img src={this.props.restaurant.image_url} style={{
                        width: '100%',
                        height: '50vh',
                        objectFit: 'cover',
                        maxHeight: '100vh'
                    }} />
                    <Card.Body>
                        <Card.Title>{this.props.restaurant.name}</Card.Title>
                        {/* <Card.Text>
                  {`${this.props.movie.overview.substring(0,100)}... `}<a style={{color:"white"}} href="#">read more</a>
                </Card.Text> */}
                        <Card.Text variant="primary">
                            Price {this.props.restaurant.price}
                        </Card.Text>
                        <Card.Text>
                            Rating  {this.props.restaurant.rating}
                        </Card.Text>
                        <Card.Text>
                            <a className='anchor' href={this.props.restaurant.url}>Explore {this.props.restaurant.name}</a>
                        
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
            <small >Released On  {this.props.movie.released_on}</small>
            </Card.Footer> */}
                </Card>
            </Col>
        )
    }
}

export default Restaurant;