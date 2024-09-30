
const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; 

// Using reduce to sum up the battery amounts
const totalBatteries = batteryBatches.reduce((accumulator, current) => {
  return accumulator + current;
}, 0); // Starting with an initial value of 0

console.log(totalBatteries); // This will log the total number of batteries
