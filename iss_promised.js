// iss_promised.js

const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function(body) {
  return request(`https://freegeoip.app/json/${JSON.parse(body).ip}`);
};

const fetchISSFlyOverTimes = function(body) {
  const coords = {};
  coords.latitude = JSON.parse(body).latitude;
  coords.longitude = JSON.parse(body).longitude;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(data => fetchCoordsByIP(data))
    .then(data => fetchISSFlyOverTimes(data))
    .then(data => {
      const passTimes = JSON.parse(data).response;
      return passTimes;
    });
};

module.exports = { nextISSTimesForMyLocation };