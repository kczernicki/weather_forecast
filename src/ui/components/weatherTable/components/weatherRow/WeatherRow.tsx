import * as React from 'react'
import './WeatherRow.scss'
import { WeatherList } from '../../../../../interfaces'
import { formatDate, formatTemperature } from './utils'
interface Props {
  weather: WeatherList,
}

export class WeatherRow extends React.PureComponent<Props> {
  render () {
    const { weather: {
      dt_txt,
      main: {
        temp,
        pressure
      },
      weather
    } } = this.props

    return (
      <tr>
        <td>{formatDate(dt_txt)}</td>
        <td>{formatTemperature(temp)} °C</td>
        <td>{pressure} hPa</td>
        <td>{weather[0] ? weather[0].description : ''}</td>
      </tr>
    )
  }
}
