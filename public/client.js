// Keep track of our socket connection
var socket;

function newClient(userName){
	document.getElementById("userName").value = "UserName: " + userName;
}

function setup() {
	socket = io.connect('http://localhost:3000');

	// When a message is received run newMessage
	socket.on('message', newMessage);

	function newMessage(data){
		printMessage(data[msg], data[name])

		socket.on('disconnect', function() {
	      console.log("Client has disconnected");
	    });
	}
}

function sendButtonClick(message, bannerTxt){
	console.log('Sending: ' + message);
	
	function getUsername(bannerTxt){
		bannerTxt = bannerTxt.toString();
		var userName  = bannerTxt.split(" ");
	}
	console.log(userName);
	
	var data = {
		msg: message, 
		name: userName
	}
	//Emit message to all other sockets
	socket.emit("message" , data);
	printMessage(message, userName);
}

function printMessage(message, userName){
	document.getElementById("nameFeild").innerHTML = userName;
	document.getElementById("messageFeild").innerHTML = message;
}


