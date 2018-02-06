// Keep track of our socket connection
var socket;

//document.getElementById("messageBoard").innerHTML = "hi";

function setup() {
	socket.on("connection", console.log("hi");
	message = document.getElementById("message").value
	socket = io.connect('http://localhost:3000');

	//When a message is received run newMessage
	socket.on('message', newMessage);

	socket.on(
		document.getElementById("Send Message").addEventListener("click", sendButtonClick)
		);

	function newMessage(data){
		document.getElementById("messageBoard").innerHTML = data[msg];


		socket.on('disconnect', function() {
	      console.log("Client has disconnected");
	    });
	}
}

function sendButtonClick(message){
	console.log('Sending: ' + message)

	var data = {
		msg: message, 
		userName: name
	}

	socket.emit("message" , data);
}



