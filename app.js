// Initialize weather object
const weather = new Weather('Pittsburgh', 'PA');
// Initialize UI objject
const ui = new UI();

// Add event listener to get weather when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(error => console.log(error));
}
