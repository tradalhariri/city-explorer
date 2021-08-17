import React from "react";
import { Col ,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class Movie extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return (
            <Col>
            <Card bg="secondary" text="white" style={{margin:"30px 5px"}}>
              <Card.Img variant="top" src={this.props.movie.image_url} />
              <Card.Body>
                <Card.Title>{this.props.movie.title}</Card.Title>
                <Card.Text>
                  {`${this.props.movie.overview.substring(0,100)}... `}<a style={{color:"white"}} href="#">read more</a>
                </Card.Text>
                <Card.Text variant="primary">
                  Average Votes {this.props.movie.average_votes}
                </Card.Text>
                <Card.Text>
                  Total Votes  {this.props.movie.total_votes}
                </Card.Text>
                <Card.Text>
                Popularity  {this.props.movie.popularity}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
            <small >Released On  {this.props.movie.released_on}</small>
            </Card.Footer>
            </Card>
            </Col>
        )
    }
}

export default Movie;