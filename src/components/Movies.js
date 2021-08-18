import React from "react";
import { Row } from 'react-bootstrap';
import Movie from "./Movie";
import 'bootstrap/dist/css/bootstrap.min.css';



class Movies extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return (
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {this.props.movies.map((movie, idx) => (
              <Movie movie={movie} key={idx} />
            ))}
          </Row>
        )
    }
}

export default Movies;