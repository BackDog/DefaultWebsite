
var wsUri = "ws://127.0.0.1:1337";
var output;
var person = '22';

function init(){
	testWebSocket();
}

function testWebSocket(){
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

function onOpen(evt){
	console.log("CONNECTED");
	sendMessageWS(player.name);
}

function onClose(evt){
	console.log("DISCONNECTED");
}

function onMessage(evt){
	receiveMessageWS(evt.data);
}

function onError(evt){
	receiveMessageWS(evt.data);
}

function receiveMessageWS(message){
	console.log('server: ' + message);
}

function sendMessageWS(message){
	console.log('client: ' + message);
	websocket.send(message);
}



// websocket.close();
function writeToScreen(message)
{
	console.log((new Date()).getTime());
	console.log('Server: ' + message);
	// var pre = document.createElement("p");
	// pre.style.wordWrap = "break-word";
	// pre.innerHTML = message;
	// output.appendChild(pre);

	// var objDiv = document.getElementById("your_div");
	// objDiv.scrollTop = objDiv.scrollHeight;
}
function sendMessage(){
	websocket.send(message);
	// var x = document.getElementById("input");
	// var message = x.value;
	// x.value = '';
	// console.log(message);
	// console.log((new Date()).getTime());
	// websocket.send(message);
}

window.addEventListener("load", init, false);