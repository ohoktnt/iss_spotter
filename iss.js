// iss.js

const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) {
      callback(error,null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    callback(null, JSON.parse(body).ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates by IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const coords = {};
    coords.latitude = JSON.parse(body).latitude;
    coords.longitude = JSON.parse(body).longitude;
    callback(null, coords);
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};