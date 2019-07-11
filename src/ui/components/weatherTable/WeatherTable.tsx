import * as React from 'react';
import './WeatherTable.scss'
import {Weather} from '../../../interfaces';
import { WeatherRow } from '../weatherRow'
interface Props {
  weather: Weather,
}

export class WeatherTable extends React.PureComponent<Props> {
  render() {
    const { weather} = this.props;
    return (
      <div className="table__wrapper">
        <table className="table">
          <thead role="rowgroup">
          <tr role="row">
            <th role="columnheader">Date</th>
            <th role="columnheader">Temperature</th>
            <th role="columnheader">Pressure</th>
            <th role="columnheader">Description</th>
          </tr>
          </thead>
          <tbody role="rowgroup">
          {weather.list.map((weatherRow) => <WeatherRow weather={weatherRow} key={weatherRow.dt}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}
