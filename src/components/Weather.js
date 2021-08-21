import React from "react";
import WeatherDay from "./WeatherDay";
import { Accordion } from "react-bootstrap";

class Weather extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h2 style={{ margin: "20px auto" }}>Weather </h2>
                {this.props.weatherData.map((day, index) => <WeatherDay key={index} weatherDay={day} />)}

            </>
        )
    }
}

export default Weather;