import * as React from 'react';
import {
  geocodeByAddress,
} from 'react-places-autocomplete';
import {WeatherRepository} from '../../repository';

import { PlaceChooser } from '../components/placeChooser'
import { WeatherTable } from '../components/weatherTable'
import { Weather } from '../../interfaces';
import './Home.scss'

interface State {
  address: string,
  weatherData: Weather
}
class Home extends React.PureComponent<{}, State> {
  state: State = {
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
    const { weatherData } = this.state;

    return (
      <div className="page page--home">
        <h1>Weather app</h1>

        <PlaceChooser handleSelect={this.handleSelect}/>

        {
          weatherData
            ? <WeatherTable weather={weatherData}/>
            : null
        }
      </div>
    );
  }
}

export default Home;
