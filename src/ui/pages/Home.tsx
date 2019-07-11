import * as React from 'react';
import {
  geocodeByAddress,
} from 'react-places-autocomplete';
import {WeatherRepository} from '../../repository';

import { PlaceChooser } from '../components/placeChooser'

class Home extends React.PureComponent<{}, {address: string, weatherData: {list: any}}> {
  state = {
    address: '',
    weatherData: null
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(async results => {
        const location = results[0].geometry.location;
        let data = await WeatherRepository.getWeatherByLatLng(location.lat(), location.lng());

        this.setState({weatherData: data})
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <div className="page page--home">
        <h1>Weather app</h1>

        <PlaceChooser handleSelect={this.handleSelect}/>

        {
          this.state.weatherData
            ? this.state.weatherData.list.map(elem => <p> {elem.main.temp}</p>)
            : null
        }
      </div>
    );
  }
}

export default Home;
