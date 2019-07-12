import * as React from 'react';
import './WeatherRow.scss'
import { WeatherList } from '../../../../../interfaces';

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
      <tr>
        <td>{dt_txt}</td>
        <td>{temp}</td>
        <td>{pressure}</td>
        <td>{weather[0] ? weather[0].description : ''}</td>
      </tr>
    );
  }
}
