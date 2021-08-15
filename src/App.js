import './App.css';
import LocationSearchForm from './components/LocationSearchForm';
import React from 'react';
import axios from 'axios';
import LocationFigure from './components/LocationFigure';
import { Toast } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      location: {},
      locationMap: '',
      status: false,
      statusText: ''
    }
  }

  getLocation = async (event) => {
    event.preventDefault();

    const locationName = event.target.cityName.value;
    const key = process.env.REACT_APP_LOCATION_KEY;
    let locationData;
    try{
      locationData =  await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${key}&q=${locationName}&format=json`);

      this.setState({
        location: locationData.data[0],
        status: locationData.status,
        statusText: locationData.statusText,
      })


      const locationMap = `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${this.state.location.lat},${this.state.location.lon}&format=jpg&markers=icon:large-red-cutout|${this.state.location.lat},${this.state.location.lon}`;
      this.setState({
      
        locationMap: locationMap
      })

    }
  catch(error) {
      if (error.response) {
        this.setState({
          status: error.response.status,
          statusText: error.response.data.error,
        })
        console.log(this.state.status);
      }
    };



    
  }

  render() {
    console.log('dfdffrf', this.state.status);
    return (
      <div className="App">
        <h1>City Explorer</h1>
        <LocationSearchForm getLocation={this.getLocation} />
        {this.state.status === 200 ? <LocationFigure location={this.state.location} locationMap={this.state.locationMap} /> : (this.state.status && <Toast>
          <Toast.Body>
          <p>{this.state.status}</p>
            <p> {this.state.statusText}</p>
        
            </Toast.Body>
        </Toast>)}
      </div>
    )
  }

}

export default App;
