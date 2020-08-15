var wsUri = "wss://www.5etop.com/coinflip/wserver?sid=wv3QUlDeje6fzCWmE11j9D%2FNUnB9Og7PmRuBPkr0t4o%3D&steamId=76561198131156800&lan=en";

var W3CWebSocket = require('websocket').w3cwebsocket;
 
var client;
connect(wsUri);

client.onerror = function() {
    console.log('Connection Error');
};

var connected = false;
client.onopen = function() {
    console.log('5etop Coin-flip Client Connected');
    connected = true;
    // function sendNumber() {
    //     if (client.readyState === client.OPEN) {
    //         var number = Math.round(Math.random() * 0xFFFFFF);
    //         client.send(number.toString());
    //         setTimeout(sendNumber, 1000);
    //     }
    // }
    // sendNumber();
};
 
client.onclose = function() {
    console.log('5etop Coin-flip Client Closed');
    connected = false;
    while(!connected){
    	setTimeout(function(){
    		console.log('Reconnecting...');
		    connect(wsUri);
		}, 1000);
    }
};
function connect(wsUri){
	client = new W3CWebSocket(wsUri);
}
var games = [];
client.onmessage = function(e) {
    if (typeof e.data === 'string') {
    	var message = JSON.parse(e.data);
    	switch (message.type){
    		case 1:
    			console.log('NEW GAME');
    			games.push({
    				id: message.list[0].id,
    				percent: '',
    				winface: '?',
    				winticket: '',
    				face1: message.list[0].face1,
    				face2: ''
    			});
    			break;
    		case 2:
    			console.log('START GAME');
    			break;
    		case 3:
    			console.log('FINISH GAME');
    			updateFinishGame(message.list[0]);
    			processMiningDATA();
    			break;
    		case 4:
    			console.log('UPDATE INFO');
    			break;
    		default:
    			console.log('Invalid Type');
    			console.log(message);
    	}

        // console.log("Received: '" + e.data + "'");
    }
};

function updateFinishGame(data){
	for(var i = 0; i < games.length; i++){
		if (games[i].id === data.id){
			games[i].percent = data.percent;
			games[i].winface = data.winface;
			games[i].face2 = data.face2;
			break;
		}
	}
}
var processMining = [
	{num: 5, minCT: 0, maxCT: 0},
	{num: 10, minCT: 0, maxCT: 0},
	{num: 15, minCT: 0, maxCT: 0},
	{num: 20, minCT: 0, maxCT: 0},
	{num: 25, minCT: 0, maxCT: 0},
	{num: 30, minCT: 0, maxCT: 0},
	{num: 35, minCT: 0, maxCT: 0},
	{num: 40, minCT: 0, maxCT: 0},
	{num: 45, minCT: 0, maxCT: 0},
	{num: 50, minCT: 0, maxCT: 0}
];

function processMiningDATA(){
	for(var y = 0; y < processMining.length; y++){
		for(var i = 0; i < games.length - processMining[y].num; i++){
			var countCT = 0;
			for(var z = 0; z < processMining[y].num; z++){
				if (games[i + z].winface == '?'){
					countCT = 0;
					break;
				}else{
					countCT += games[i + z].winface;
					if(z === (processMining[y].num - 1)){
						if(processMining[y].minCT > countCT){
							processMining[y].minCT = countCT;
						}
						if(processMining[y].maxCT < countCT){
							processMining[y].maxCT = countCT;
						}
					}

				}
			}
		}
		console.log(processMining[y].num, processMining[y].minCT, processMining[y].maxCT);
	}
}