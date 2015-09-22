var ws = require('ws').Server,
   express = require('express'),
   wss = new ws({port: 8010}),
   app = express(),
   wsarr = [];
wss.on("connection", function(ws){
 wsarr.push(ws);
 ws.send("from ws server");
 ws.on("message", function(msg) {
   for(var i = 0; i < wsarr.length; i++) {
   wsarr[i].send("message recieved "+msg);
 }
 })
});
// app.get('/', function(req, res) {
// })


