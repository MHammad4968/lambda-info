
const os = require('os');
var tmem = Math.floor(os.totalmem()/(1024**2));
var fmem = Math.floor(os.freemem()/(1024**2));

const http = require('http');
const srv = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("Working, epic!");
        res.end();
    }
    if(req.url === "/spec") {
        res.write("System specs: \n");
        res.write(`Total Memory: ${tmem}MB \n`);
        res.write(`Free Memory: ${fmem}MB\n`);
        res.write("Platform: "+ os.platform()+"; "+os.type() +"\n");
        res.write("CPUs: "+ os.cpus().length +"\n");
        res.write("Uptime: " + Math.floor(os.uptime()/60) + "min");
        res.end()
    }
});
srv.listen(3000);
srv.on("connection", (socket) => {
    console.log("Connected");
});
/*
console.log(`Total Memory: ${tmem}MB`);
console.log(`Free Memory: ${fmem}MB`);
console.log("Platform: "+ os.platform()+"; "+os.type());
console.log("CPUs: "+ os.cpus().length);
console.log("Uptime: " + Math.floor(os.uptime()/60) + "min");
*/