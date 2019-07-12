import * as React from 'react'
import './WeatherRow.scss'
import { WeatherList } from '../../../../../interfaces'

interface Props {
  weather: WeatherList,
}

export class WeatherRow extends React.PureComponent<Props> {
  // todo move to helpers
  formatTemperature = (temperature) => Math.round(parseFloat(temperature) - 273.15)

  leftZero = (str: number) => str < 10 ? '0' + str : str

  formatDate = (date) => {
    const d = new Date(date)

    return `${this.leftZero(d.getHours())}:${this.leftZero(d.getMinutes())} ${this.leftZero(d.getDate())}-${this.leftZero(d.getMonth() + 1)}`
  }

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
        <td>{this.formatDate(dt_txt)}</td>
        <td>{this.formatTemperature(temp)} °C</td>
        <td>{pressure} hPa</td>
        <td>{weather[0] ? weather[0].description : ''}</td>
      </tr>
    )
  }
}
