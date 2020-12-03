// index.js

// const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error,ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log(`It worked! Returned IP: ${ip}`);
// });

// fetchCoordsByIP("76.71.4.77", (error, data) => {
//   if (error) {
//     console.log(`It didn't work! ${error}`);
//     return;
//   }
//   console.log(data);
// });

fetchISSFlyOverTimes({ latitude: 43.7012, longitude: -79.3877 }, (error, data) => {
  if (error) {
    console.log(`It didn't work! ${error}`);
    return;
  }
  console.log(data);
});