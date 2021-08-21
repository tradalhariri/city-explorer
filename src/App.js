import './App.css';
import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';
import constants from './Constants/constants';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      location: {},
      locationName:'',
      locationMap: '',
      status: false,
      statusText: '',
      weatherData: [],
      movies: [],
      restaurants:[],
      navStatus:{
        map:false,
        movies:false,
        restaurants:false,
        weather:false
      }
    }
  }

getWeather = (event) =>{

  this.setState({
    navStatus:{
      map:false,
      movies:false,
      restaurants:false,
      weather:true
    }
  })
}

  getMovies=(event)=>{
        this.setState({
          navStatus:{
            map:false,
            movies:true,
            restaurants:false,
            weather:false
          }
        })
  }

  getRestaurants=(event)=>{
    this.setState({
      navStatus:{
        map:false,
        movies:false,
        restaurants:true,
        weather:false
      }
    })
}

getMap=(event)=>{
  this.setState({
    navStatus:{
      map:true,
      movies:false,
      restaurants:false,
      weather:false
    }
  })
}

   getLocation = async (event) => {
    event.preventDefault();

    const locationName = event.target.cityName.value;
    await this.setState({
      locationName:locationName,
    })
    const key = constants.locationKey;

    axios.get(`https://eu1.locationiq.com/v1/search.php?key=${key}&q=${locationName}&format=json`).then(locationData => {

      this.setState({
        location: locationData.data[0],
        status: locationData.status,
        statusText: locationData.statusText,
      })
      const locationMap = `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${this.state.location.lat},${this.state.location.lon}&format=jpg&markers=icon:large-red-cutout|${this.state.location.lat},${this.state.location.lon}`;

      this.setState({

        locationMap: locationMap
      })

      this.setState({
        navStatus:{
          map:true,
          movies:false,
          restaurants:false,
          weather:true
        }
      })

    }).catch((error) => {
      if (error.response) {
        this.setState({
          status: error.response.status,
          statusText: error.response.data.error,
        })
      }
    });

    this.getWeatherData();
    this.getMoviesData();
    this.getRestaurantsData();

  }

  getWeatherData=()=>{
    const rootPath = constants.rootPath;
    axios.get(`${rootPath}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}&searchQuery=${this.state.locationName}`).then(weatherData => {
      weatherData.data.length > 0 ? this.setState({
        weatherData: weatherData.data
      }) : this.setState({
        weatherData: []
      })
    });
  }
  
  getMoviesData=()=>{
    const rootPath = constants.rootPath;    
    axios.get(`${rootPath}/movies?searchQuery=${this.state.locationName}`).then(movies => {
      movies.data.length > 0 ? this.setState({
        movies: movies.data
      }) : this.setState({
        movies: []
      })
  
    })
  }
  
  getRestaurantsData = ()=>{
    const rootPath = constants.rootPath;
    axios.get(`${rootPath}/yelp?searchQuery=${this.state.locationName}`).then(restaurants => {
      restaurants.data.length > 0 ? this.setState({
        restaurants: restaurants.data
      }) : this.setState({
        restaurants: []
      })
  
    })
  
  }
  

  render() {
    return (
      <div className="App">
        <Header />
        <Main getMovies={this.getMovies} getRestaurants={this.getRestaurants} getMap={this.getMap} getWeather={this.getWeather} getLocation={this.getLocation} state={this.state} />
      </div>
    )
  }

}

export default App;
