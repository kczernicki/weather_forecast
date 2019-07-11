import * as React from 'react';
import './WeatherRow.scss'
import { WeatherList } from '../../../interfaces';

interface Props {
  weather: WeatherList,
}

export class WeatherRow extends React.PureComponent<Props> {
  render() {
    const { weather: {
      dt_txt,
      main: {
        temp,
        pressure
      },
      weather,

    } } = this.props;
    return (
      <tr role="row">
        <td role="cell">{dt_txt}</td>
        <td role="cell">{temp}</td>
        <td role="cell">{pressure}</td>
        <td role="cell">{weather[0] ? weather[0].description : ''}</td>
      </tr>
    );
  }
}
