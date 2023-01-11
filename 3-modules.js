// const secret = "SUPER SECRET";
// const john = "john";
// const peter = "peter";

// const sayHi = (name) => {
//   console.log(`hello there ${name}`);
// };

const names = require('./4-names');
const sayHi = require('./5-utils');
import data from './6-alternative-flavor';
// const data = require('./6-alternative-flavor');
console.log(data)
// import names from './4-names';

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
