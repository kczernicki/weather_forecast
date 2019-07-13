import * as React from 'react'
import { geocodeByAddress } from 'react-places-autocomplete'
import { WeatherRepository } from '../../repository'
import { PlaceChooser } from '../components/placeChooser'
import { WeatherTable } from '../components/weatherTable'
import { Weather } from '../../interfaces'
import './HomePage.scss'
import { Loader } from '../components/loader'

interface State {
  address: string,
  addressFromUserLocation: string,
  weatherData: Weather,
  loading: boolean
}

class HomePage extends React.PureComponent<{}, State> {
  state: State = {
    address: '',
    weatherData: null,
    loading: false,
    addressFromUserLocation: null
  }

  componentDidMount (): void {
    this.getUserLocation()
  }

  getUserLocation () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          this.setState({ loading: true })
          const data = await WeatherRepository.getWeatherByLatLng(position.coords.latitude, position.coords.longitude)

          this.setState({
            weatherData: data,
            addressFromUserLocation: `${data.city.name}, ${data.city.country}`,
            loading: false
          })

        },
        (error) => {
          console.error('An error has occured while retrieving location', error)
        }
      )
    }
  }

  handleSelect = address => {
    this.setState({ loading: true })
    geocodeByAddress(address)
      .then(async results => {
        const location = results[0].geometry.location
        const data = await WeatherRepository.getWeatherByLatLng(location.lat(), location.lng())

        this.setState({
          weatherData: data,
          loading: false
        })
      })
      .catch(error => {
        console.error('Error', error)
        this.setState({ loading: false })
      })
  }

  render () {
    const {
      weatherData,
      loading,
      addressFromUserLocation
    } = this.state

    return (
      <div className='page page--home'>
        <h1>Weather app</h1>

        <PlaceChooser handleSelect={this.handleSelect} addressFromUserLocation={addressFromUserLocation}/>
        {
          loading
          ? <Loader />
          : weatherData && <WeatherTable weather={weatherData} />
        }
      </div>
    )
  }
}

export default HomePage
