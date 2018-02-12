// Keep track of our socket connection
var socket;
var math;

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

// users

// add new users
function newClient(newUserName){
	//Declare the unordered lsit and the list elements
  var ul = document.getElementById("user-list");
  var li = document.createElement("current-user");

  li.appendChild(document.createTextNode("UserName: " + newUserName));
	// create the new element for the list with  id of user + rand 0-99
	li.setAttribute("id", Math.floor(Math.random() * 20));
	//append the new list element
	ul.appendChild(li);

	// //Output the new user and their id
	// console.log("New user id = " + li.id);
}

//display known current user
function knownClient(userName){
	//Declare the unordered lsit and the list elements
	var ul = document.getElementById("user-list");
	var li = document.createElement("current-user");

	li.appendChild(document.createTextNode("UserName: " + userName));
	// create the new element for the list with  id of user + rand 0-99
	li.setAttribute("id", Math.floor(Math.random() * 20));
	//append the new list element
	ul.appendChild(li);

	// //Output the new user and their id
	// console.log("New user id = " + li.id);

}

// display all other users


// Message sending
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
	var nameFeild = document.getElementById("nameFeild").innerHTML;
	var messageFeild = document.getElementById("messageFeild").innerHTML

	nameFeild.appendChild(userName)
}
