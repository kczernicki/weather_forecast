import {Weather} from '../interfaces';

const WEATHER_API_APP_ID = '13983ca48b13e61e9417332c705eac77';

export class WeatherRepository {

  static async getWeatherByLatLng(lat, lng): Promise<Weather>{
    try {
      const reqeust = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&APPID=${WEATHER_API_APP_ID}`);
      return await reqeust.json()
    } catch (error) {
      throw error.response.data
    }
  }
}
