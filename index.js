const os = require('os');
var tmem = Math.floor(os.totalmem()/(1024**2));
var fmem = Math.floor(os.freemem()/(1024**2));


console.log(`Total: ${tmem}MB`);
console.log(`FreeMem: ${fmem}MB`);
console.log("Platform: "+ os.platform()+"; "+os.type());
console.log("CPUs: "+ os.cpus().length);
console.log("Uptime: " + os.uptime());