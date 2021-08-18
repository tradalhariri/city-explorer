import './App.css';
import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      location: {},
      locationMap: '',
      status: false,
      statusText: '',
      weatherData: [],
      movies: []
    }
  }

  getLocation = (event) => {
    event.preventDefault();

    const locationName = event.target.cityName.value;
    const key = process.env.REACT_APP_LOCATION_KEY;
    const rootPath = process.env.REACT_APP_ROOT_PATH;

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

    }).catch((error) => {
      if (error.response) {
        this.setState({
          status: error.response.status,
          statusText: error.response.data.error,
        })
      }
    });


    axios.get(`${rootPath}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}&searchQuery=${locationName}`).then(weatherData => {
      weatherData.data.length > 0 ? this.setState({
        weatherData: weatherData.data
      }) : this.setState({
        weatherData: []
      })
    });

    axios.get(`${rootPath}/movies?searchQuery=${locationName}`).then(movies => {
      movies.data.length > 0 ? this.setState({
        movies: movies.data
      }) : this.setState({
        movies: []
      })

    })

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main getLocation={this.getLocation} state={this.state} />
      </div>
    )
  }

}

export default App;
