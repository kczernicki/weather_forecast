import * as React from "react";
import { shallow, configure } from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import { WeatherRow } from "./WeatherRow";

configure({ adapter: new Adapter() });
const Props = {weather: {
  "dt":1562868000,
    "main":{
    "temp":290.5,
      "temp_min":289.887,
      "temp_max":290.5,
      "pressure":1010.11,
      "sea_level":1010.11,
      "grnd_level":999.06,
      "humidity":73,
      "temp_kf":0.61
  },
  "weather":[
    {
      "id":802,
      "main":"Clouds",
      "description":"scattered clouds",
      "icon":"03d"
    }
  ],
    "clouds":{
    "all":29
  },
  "wind":{
    "speed":3.25,
      "deg":307.558
  },
  "rain":{

  },
  "sys":{
    "pod":"d"
  },
  "dt_txt":"2019-07-11 18:00:00"
}}


it('shallow renders without crashing', () => {
  shallow(<WeatherRow { ...Props }/>);
});


