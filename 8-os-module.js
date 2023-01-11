const os = require('os');

// info about current user
const user = os.userInfo();
// console.log(user);

// method returns the system uptime in seconds
console.log(`the system Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    realease: os.release(),
    totalMen: os.totalmem(),
    freeMen: os.freemem(),
};
console.log(currentOs);
