import axios from 'axios';

console.log(`Requesting...`);

let gainers = await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json").data;
let losers = await axios.get("https://www1.nseindia.com/live_market/dynaContent/live_analysis/losers/niftyLosers1.json").data;


console.log(gainers.data.data[0]);
console.log(losers.data.data[0]);
