//server.js
//a node.js based server for running a js application

//required libraries
var express = require('express');
var socket = require('socket.io');

//create new app with express 
var app = express();
//listen for app on port 3000
var server = app.listen(3000);

//use all files in the folder public fot client
app.use(express.static('public'));

//create new server and connections
var io = socket(server);
io.sockets.on('connection', newConnection);

//on new connection run:
function newConnection(socket){
	//Print new conection ID
	console.log('New Connection: ' + socket.id);

	//On receving incoming message run sendMsg
	socket.on('message', sendMsg);

	//send out incoming message and log in console
	function sendMsg(data){
		socket.broadcast.emit('message', data);
		//io.sockets.emit('message', data);
		console.log(data)

	}
}

//Alert the user of the sucessful launch
console.log("Web Socket Started");