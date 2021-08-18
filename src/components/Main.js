import React from "react";
import LocationFigure from "./LocationFigure";
import LocationSearchForm from "./LocationSearchForm";
import Weather from "./Weather";
import Movies from "./Movies";
import ToastMessage from "./ToastMessage";

class Main extends React.Component{
    constructor (props){
        super(props)
    }

    getLocation = (e)=>{
        this.props.getLocation(e);
    }

    render(){
        return(
            <>
            <LocationSearchForm getLocation={this.getLocation} />
            {this.props.state.status === 200 ? <LocationFigure location={this.props.state.location} locationMap={this.props.state.locationMap} /> : (this.props.state.status && <ToastMessage status={this.props.state.status} statusText = {this.props.state.statusText}/>)}
            <Weather weatherData={this.props.state.weatherData} />
            <Movies movies={this.props.state.movies}/>
            </>
        )
    }
}

export default Main