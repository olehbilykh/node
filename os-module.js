const os = require('os');

//info about current user

const user = os.userInfo();


// uptime of sys

console.log(`the sys uptime is ${os.uptime()} secs`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOS);