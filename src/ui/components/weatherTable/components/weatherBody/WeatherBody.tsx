import * as React from 'react'
import './WeatherBody.scss'
import { Weather } from '@interfaces/index'
import { WeatherRow } from '../weatherRow'

interface Props {
  weather: Weather
}

export class WeatherBody extends React.PureComponent<Props> {
  render () {
    const { weather } = this.props

    return (
      <tbody>
      {weather.list.map((weatherRow) => <WeatherRow weather={weatherRow} key={weatherRow.dt}/>)}
      </tbody>
    )
  }
}
