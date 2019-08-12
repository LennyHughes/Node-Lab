const quote = require('./quotes');
const http = require('http');

http.createServer((req,res) => {
    res.setHeader("Content-Type","application/json");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.write(quote);
    res.end();
}).listen(3000, (err) =>{
    console.log("Running Server")
});

