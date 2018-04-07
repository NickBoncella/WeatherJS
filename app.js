// Initialize weather object
const weather = new Weather('Pittsburgh', 'PA');

// Add event listener to get weather when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(error => console.log(error));
}
