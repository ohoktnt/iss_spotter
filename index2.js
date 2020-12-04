// index2.js

const { nextISSTimesForMyLocation } = require('./iss_promised');


const printTimes = function(passTimes) {
  passTimes.forEach((pass) => {
    let date = new Date(pass.risetime * 1000);
    console.log(`Next pass at ${date} for ${pass.duration} seconds!`);
  });
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printTimes(passTimes);
  })
  .catch((error) => {
    console.log(`It didn't work: ${error.message}`);
  });