import * as React from 'react'
import './WeatherTable.scss'
import { Weather } from '../../../interfaces'
import { WeatherRow } from './components/weatherRow'

interface Props {
  weather: Weather,
}

export class WeatherTable extends React.PureComponent<Props> {
  render () {
    const { weather } = this.props
    return (
      <div className='table__wrapper'>
        <table className='table'>
          <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          {weather.list.map((weatherRow) => <WeatherRow weather={weatherRow} key={weatherRow.dt}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}
