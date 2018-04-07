// Initialize storage object
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Initialize UI objject
const ui = new UI();


// Add event listener to get weather when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

// Add event listener to change location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  // Store inputted city and state in vars
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Update location to be fetched
  weather.changeLocation(city, state);

  // Set location in local storage
  storage.setLocationData(city, state);

  // Call get weather and display
  getWeather();

  // Close modal - jQuery dependant
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(error => console.log(error));
}
