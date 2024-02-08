
const os = require('os');
var tmem = Math.floor(os.totalmem()/(1024**2));
var fmem = Math.floor(os.freemem()/(1024**2));

const serverless = require('serverless-http');
const http = require('http');
var requests = 0;
const srv = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("Working, epic!");
        res.end();
    }
    if(req.url === "/spec") {
        requests++;
        res.write("System specs: \n\n");
        res.write(`Total Memory: ${tmem}MB \n`);
        res.write(`Free Memory: ${fmem}MB\n`);
        res.write("Platform: "+ os.platform()+"/"+os.type() + "; " + os.version() + "\n");
        res.write("CPUs: "+ os.cpus().length + "x " + os.cpus()[0].model +"\n");
        res.write("Uptime: " + Math.floor(os.uptime()/60) + "min \n \n");
        res.write(`Requests: ${requests}`);
        res.end()
    }
});
srv.listen(3000);
srv.on("connection", (socket) => {
    console.log("Connected");
});

module.exports.handler = serverless(srv);
/*
console.log(`Total Memory: ${tmem}MB`);
console.log(`Free Memory: ${fmem}MB`);
console.log("Platform: "+ os.platform()+"; "+os.type());
console.log("CPUs: "+ os.cpus().length);
console.log("Uptime: " + Math.floor(os.uptime()/60) + "min");
*/