import * as React from 'react'
import './WeatherTableBody.scss'
import { Weather } from '@interfaces/index'
import { WeatherTableRow } from '../weatherTableRow'

interface Props {
  weather: Weather
}

export class WeatherTableBody extends React.PureComponent<Props> {
  render () {
    const { weather } = this.props

    return (
      <tbody>
      {
        weather
          .list
          .map((weatherRow) =>
            <WeatherTableRow
              weather={weatherRow}
              key={weatherRow.dt}
            />
          )
      }
      </tbody>
    )
  }
}
