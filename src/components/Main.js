import React from "react";
import LocationFigure from "./LocationFigure";
import LocationSearchForm from "./LocationSearchForm";
import Weather from "./Weather";
import Movies from "./Movies";
import ToastMessage from "./ToastMessage";
import Restaurants from "./Restaurants";

class Main extends React.Component{
    constructor (props){
        super(props)
    }

    getLocation = (e)=>{
        this.props.getLocation(e);
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

    render(){
        return(
            <>
            <LocationSearchForm getLocation={this.getLocation} getMovies={this.getMovies} getRestaurants={this.getRestaurants} getMap={this.getMap} getWeather={this.getWeather}  />

            {this.props.state.status !== 200 && this.props.state.status ?<ToastMessage status={this.props.state.status} statusText = {this.props.state.statusText}/> : (this.props.state.navStatus.map?<LocationFigure location={this.props.state.location} locationMap={this.props.state.locationMap} />:(this.props.state.navStatus.weather?<Weather weatherData={this.props.state.weatherData} />:(this.props.state.navStatus.movies?<Movies movies={this.props.state.movies}/>:(this.props.state.navStatus.restaurants?<Restaurants restaurants={this.props.state.restaurants}/>:null))))}

            {/* {this.props.state.status === 200 ? <LocationFigure location={this.props.state.location} locationMap={this.props.state.locationMap} /> : (this.props.state.status && <ToastMessage status={this.props.state.status} statusText = {this.props.state.statusText}/>)}
            {this.props.state.navStatus.map?<Weather weatherData={this.props.state.weatherData} />:this.props.state.navStatus.movies?<Movies movies={this.props.state.movies}/>:<Restaurants restaurants={this.props.state.restaurants}/>} */}
            
            
            
            </>
        )
    }
}

export default Main