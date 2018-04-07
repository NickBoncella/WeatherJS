// Use class to create weather object
class Weather {
  // PROPERTIES - using constructor
  constructor(city, state) {
    this.apiKey = '862fa4eb179322ca';
    this.city = city;
    this.state = state;
  }

  // METHODS
  // Fetch weather from API - will return a promise
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather lcoation
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
