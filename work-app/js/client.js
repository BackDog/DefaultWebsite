
var wsUri = "ws://127.0.0.1:1337";
var output;
var person = '22';

function init()
{
	output = document.getElementById("output");
	person = prompt("Please enter your name:", "Harry Potter");
	testWebSocket();

	var inputChat = document.getElementById("input");
	console.log(inputChat);
	inputChat.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			document.getElementById("myBtn").click();
		}
	});
}

function testWebSocket()
{
	websocket = new WebSocket(wsUri);
	websocket.onopen = function(evt) { 
		onOpen(evt) 
	};
	websocket.onclose = function(evt) { 
		onClose(evt) 
	};
	websocket.onmessage = function(evt) { 
		onMessage(evt) 
	};
	websocket.onerror = function(evt) { 
		onError(evt) 
	};
}

function onOpen(evt)
{
	writeToScreen("CONNECTED");
	doSend(person);
}

function onClose(evt)
{
	writeToScreen("DISCONNECTED");
}

function onMessage(evt)
{
	writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
    // websocket.close();
}

function onError(evt)
{
	writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message)
{
	writeToScreen("SENT: " + message);
	websocket.send(message);
}

function writeToScreen(message)
{
	console.log((new Date()).getTime());
	var pre = document.createElement("p");
	pre.style.wordWrap = "break-word";
	pre.innerHTML = message;
	output.appendChild(pre);

	var objDiv = document.getElementById("your_div");
	objDiv.scrollTop = objDiv.scrollHeight;
}
function sendMessage(){
	var x = document.getElementById("input");
	var message = x.value;
	x.value = '';
	console.log(message);
	console.log((new Date()).getTime());
	websocket.send(message);
}

window.addEventListener("load", init, false);