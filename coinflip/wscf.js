
var wsUri = "wss://www.5etop.com/coinflip/wserver?sid=K%2BpD6qOMam3VgY3M7HghAqjmzQkBVHQ98wUGBnDl9W4%3D&steamId=76561199005608723&lan=en";
var output;
var person = '22';
var face1 = 0;
var face2 = 0;

var mybet = 0;
var play = 0;

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
	sendMessageWS({});
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

var myItems = [];

async function receiveMessageWS(message){
	message = JSON.parse(message);
	if (message.type === 1){
		console.log("New Coin Flip");
		var data = await getItemsInBag();
		myItems = data.datas.list;
		// console.log(myItems);
		// console.log(message.list[0].hash);
		await getPlay(message);
		console.log(message.list[0].id, message.list[0].maxjoinneed, message.list[0].minjoinneed, message.list[0].face1);
	}else if (message.type === 2){
		console.log("Start Coin Flip");
	}else if (message.type === 3){
		console.log("Finish Coin Flip");
		// console.log(message.list[0].id, message.list[0].winface, message.list[0].face1, message.list[0].winticket);
		if (message.list[0].winface == 0){
			face1++;
			sResult += 't';
		}else{
			face2++;
			sResult += 'c';
		}
		// await createGame();
		//getPlay(message);		
	}else if (message.type === 4){
		console.log("Update Info");
	}
	console.log(" T=", face1/(face1 +  face2));
	console.log("CT=", face2/(face1 +  face2));
	// console.log(message);
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

var sResult = '';
var profit = 0;
var played = 0;
var minProfit = 0;

function addResult(rs){
	sResult += rs;
}
async function createGame(){
	if (sResult.length > 10){
		sResult = sResult.substr(sResult.length - 10);
	}
	var t = 0;
	var c = 0;
	for (var i = 0; i < sResult.length; i++){
		if (sResult.charAt(i) === 'c'){
			c++;
		}else{
			t++;
		}
	}
	if ((Math.abs(c - t) >  3) && (sResult.length >= 10)){ 
		if (c > t){
			var listItem = getListItemPlay(5, 6);
			var result = await create(0, listItem);
			console.log(result);
			played++;
		}else{
			var listItem = getListItemPlay(5, 6);
			var result = await create(1, listItem);
			console.log(result);
			played++;
		}
	}
}
async function getPlay(message){
	if (sResult.length > 20){
		sResult = sResult.substr(sResult.length - 20);
	}
	var t = 0;
	var c = 0;
	for (var i = 0; i < sResult.length; i++){
		if (sResult.charAt(i) === 'c'){
			c++;
		}else{
			t++;
		}
	}
	if ((Math.abs(c - t) >  5) && (sResult.length >= 20)){ 
		if (message.list[0].minjoinneed < 20){
			if (c > t){
				if (message.list[0].face1 === 1 ){
					var listItem = getListItemPlay(message.list[0].minjoinneed, message.list[0].maxjoinneed);
					var result = await join(message.list[0].id, listItem);
					console.log(result);
					played++;
					// if (message.list[0].winface === 0){
					// 	profit -= message.list[0].minjoinneed;
					// }else{
					// 	profit += message.list[0].minjoinneed;
					// }
				}
			}else {
				if (message.list[0].face1 === 0 ){
					var listItem = getListItemPlay(message.list[0].minjoinneed, message.list[0].maxjoinneed);
					var result = await join(message.list[0].id, listItem);
					console.log(result);
					played++;
					// if (message.list[0].winface === 1){
					// 	profit -= message.list[0].minjoinneed;
					// }else{
					// 	profit += message.list[0].minjoinneed;
					// }
				}
			}
		}
	}
	if (profit < minProfit) {
		minProfit = profit;
	}
	console.log('Min Profit: ', minProfit);
	console.log('Profit: ', profit );
	console.log('Played: ', played );
}

async function getItemsInBag(){
	var url = 'api/user/bag/570/list.do?rel=user_bag&itemWidth=99&rows=200&data=loading';
	return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'GET',
            timeout: 30000,
            success: (response) => {
                resolve(response);
            },
            error: (response) => {
                reject(response);
            }
        })
    })
}

async function create(face, list){
	var url = 'coinflip/create.do';
	var ids = list.join('');
	var dataRaw = 'face=' + face + '&password=&' + ids + '&appid=570';
	url += '?' + dataRaw;
	return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'POST',
            timeout: 30000,
            success: (response) => {
                resolve(response);
            },
            error: (response) => {
                reject(response);
            }
        })
    })
}

async function join(id, list){
	var url = 'coinflip/join.do';
	var ids = list.join('');
	var dataRaw = ids + 'cid=' + id + '&appid=570';
	url += '?' + dataRaw;
	return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'POST',
            timeout: 30000,
            success: (response) => {
                resolve(response);
            },
            error: (response) => {
                reject(response);
            }
        })
    })
}

function getListItemPlay(min, max) {
	var items = [];
	for(var i = 0; i < myItems.length; i++){
		if (myItems[i].value < max){
			min -= myItems[i].value;
			max -= myItems[i].value;
			items.push('ids=' + myItems[i].id + '&');
		}	
	}
	return items;
}


// $( '<script src="http://localhost/DefaultWebsite.git/trunk/coinflip/wscf.js"><'+'/script>' ).appendTo( "body" );