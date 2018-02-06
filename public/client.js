// Keep track of our socket connection
var socket;

function newClient(userName){
	document.getElementById("banner").innerHTML = "Message Board - User: " + userName;
}

function setup() {
	socket = io.connect('http://localhost:3000');

	// When a message is received run newMessage
	socket.on('message', newMessage);

	function newMessage(data){
		document.getElementById("messageBoard").innerHTML = data[msg];

		socket.on('disconnect', function() {
	      console.log("Client has disconnected");
	    });
	}
}

function sendButtonClick(message, bannerTxt ){
	console.log('Sending: ' + message);
	
	var bannertxtList  = bannerTxt.split(" ");
	console.log(bannertxtList);

	var data = {
		msg: message, 
		userName: userName
	}

	socket.emit("message" , data);
}



