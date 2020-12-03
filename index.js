// index.js

// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss')

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

// fetchISSFlyOverTimes({ latitude: 43.7012, longitude: -79.3877 }, (error, data) => {
//   if (error) {
//     console.log(`It didn't work! ${error}`);
//     return;
//   }
//   console.log(data);
// });


const printTimes = function(passTimes) {
  passTimes.forEach((pass) => {
    let date = new Date(pass.risetime * 1000);
    console.log(`Next pass at ${date} for ${pass.duration} seconds!`)
  })
}

nextISSTimesForMyLocation((error, passTimes) => {
  if(error) {
    return console.log("It didn't work!", error);
  }
  // console.log(passTimes);
  printTimes(passTimes);
})