const request = require("postman-request");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const url =
  "http://api.weatherstack.com/current?access_key=13639e46da59802eda80b2519914d3e3&query=37.8267,-122.4233";
const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
