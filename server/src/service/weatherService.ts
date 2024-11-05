import dotenv from 'dotenv';
dotenv.config();


// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: Number;
  lon: Number;
}

// TODO: Define a class for the Weather object
// class Weather {
//   temperature: number;
//   humdity: number;

//   constructor() {
//     this.temperature = 0;
//     this.humdity = 0;
//   }
// }

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  API_KEY: string;
  cityName: string;
  baseURL: string;

  constructor() {
    this.API_KEY = "843fa40ad68a96668befb0da86d9b44b";
    this.cityName = "";
    this.baseURL = "http://api.openweathermap.org"
  }


  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
    return fetch(query)
    .then(res => res.json())
    .then(data => {
      return data;
    })
  }

  // TODO: Create destructureLocationData method
  private destructureLocationData(fetchData: any): Coordinates {
    const cityData = fetchData[0];

    const coordinates: Coordinates = {
      lat: cityData.lat,
      lon: cityData.lon
    };

    return coordinates;
  }

  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {

    const query = `${this.baseURL}/geo/1.0/direct?q=${this.cityName}&limit=1&appid=${this.API_KEY}`;

    return query;

  }


  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {

    const query = await this.buildGeocodeQuery();

    const coordinates = await this.fetchLocationData(query)
    .then(data => {
      return this.destructureLocationData(data)
    })

    return coordinates;

  }


  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {}
  
  const query = await this.buildWeatherQuery();
 
  const coordinates = await this.fetchLocationData(query)
  .then(data => {
    return this.destructureLocationData(data)
  })

  return coordinates;

}
  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {}

   const coordinates: Coordinates = {
      lat: cityData.lat,
      lon: cityData.lon
    };
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}

  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}

  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {

    console.log(city)
    this.cityName = city;

    const coordinates = await this.fetchAndDestructureLocationData();

    console.log(coordinates)



    // http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=843fa40ad68a96668befb0da86d9b44b

    return {
      message: "Hello"
    }
  }
}

export default new WeatherService();
