export interface Weather {
  city: City,
  cnt: number,
  cod: string,
  list: WeatherList[],
  message: number
}

export interface City {
  coord: Cord,
  country: string,
  id: number,
  name: string,
  population: number,
  timezone: number
}

export interface Cord {
  lat: number,
  lon: number
}

export interface Clouds {
  all?: number
}

export interface Rain {
  all?: number
}

export interface WeatherListMain {
  grnd_level: number,
  humidity: number,
  pressure: number,
  sea_level: number,
  temp: number,
  temp_kf: number,
  temp_max: number,
  temp_min: number,
}

export interface WeatherList {
  clouds: Clouds,
  dt: number,
  dt_txt: string,
  main: WeatherListMain,
  rain: Rain,
  weather: WeatherDescription[],
  wind: Wind
}

export interface WeatherDescription {
  description: string,
  icon: string,
  id: number,
  main: string
}

export interface Wind {
  deg: number,
  speed: number,
}

