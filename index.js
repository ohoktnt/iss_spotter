// index.js

const { nextISSTimesForMyLocation } = require('./iss')

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