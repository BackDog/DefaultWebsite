// DEEP LEARNING
const brain = require("brain.js");
const network = new brain.NeuralNetwork();
var networkTrain = new brain.NeuralNetwork();
var md5 = require('md5');

// TRAIN
// network.train([
//   {input: {r:0.62,g:0.72,b:0.88}, output:{light: 1}},
//   {input: {r:0.1,g:0.84,b:0.72}, output:{light: 1}},
//   {input: {r:0.33,g:0.24,b:0.29}, output:{dark: 1}},
//   {input: {r:0.74,g:0.78,b:0.86}, output:{light: 1}},
//   ]);

// CSGO

// var input = {
// 	input: {
// 		franceT1:
// 		brazilT1:
// 		usaT1:
// 		ueT1:
// 		russiaT1:
// 		chinaT1:

// 		franceT2:
// 		brazilT2:
// 		usaT2:
// 		ueT2:
// 		russiaT2:
// 		chinaT2:

// 		tier:
// 		prize:

// 		groupState:
// 		playoff:
// 		final:

// 		lowerBracket:
// 		upperBracket:

// 		bo1:
// 		bo2:
// 		bo3:
// 		bo5:

// 		map1:0,
// 		map2:1,
// 		map3:0,
// 		map4:0,
// 		map5:0,

// 		rsMap1:
		p1map1:
		p2map2
// 		rsMap2:
// 		rsMap3:
// 		rsMap4:
// 		rsMap5:

// 	},
// 	output: {
// 		team1:
// 		team2:
// 		under:
// 		orver:
// 	}
// };


//HASH MD5

var characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var numbers = "012345679";

function generatePercent(){
   var result = "";
   var object = {};
   var charactersLength = numbers.length;
   for ( var i = 0; i < 2; i++ ) {
      result += numbers.charAt(Math.floor(Math.random() * charactersLength));
   }

   var over = 0;
   var under = 0;
   if (parseInt(result.charAt(0) + result.charAt(1)) > 50){
   		over = 1;
   }else{
   		under = 1;
   }

   result += '.';
   for ( var i = 0; i < "4977903472895".length ; i++ ) {
      result += numbers.charAt(Math.floor(Math.random() * charactersLength));
   }


   if (result.charAt(0) === "0") {
   		result = result.substr(1);
   }

   object.percent = result;
   object.over = over;
   object.under = under;
   return object;
}

function generateSecrect(length) {
   var result = '';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


var hashChar = "012345679abcdef";

function getInput(hash){
	var object = {}
	for(var i = 0; i < hash.length; i++){
		for(var y = 0; y < hashChar.length; y++){
			object[hashChar.charAt(y) + i] = hashChar.charAt(y) === hash.charAt(i) ? 1 : 0;
		}
	}
	return object;
}

var train = [];

function trainGET() {
	networkTrain = new brain.NeuralNetwork();
	train = [];
	var ii = 0;
	while(ii < 100){

		var objGen = generatePercent();
		var key = objGen.percent + '%:' + generateSecrect(10);
		var hash = md5(key);
			
		var index = 22;
		hash = hash.substring(0, index) + '**' + hash.substring(index + 2);

		console.log(hash);

		var object = getInput(hash);

		var output = {
			over: objGen.over,
			under: objGen.under
		};
		train.push({
			input: object,
			output: output
		});
		ii++;
	}
	networkTrain.train(train);
	console.log('END GET DATA');
}


// TRAIN


console.log('END TRAIN');
// RESULT

function testTrain(){
	var win = 0;
	var play = 0;

	for (var i = 0; i < 100; i++) {

		var objGen = generatePercent();
		var key = objGen.percent + '%:' + generateSecrect(10);

		console.log(key);
		var hash = md5(key);
		console.log(hash);

		var index = 22;
		hash = hash.substring(0, index) + '**' + hash.substring(index + 2);

		console.log(hash.length);

		var result = networkTrain.run(getInput(hash));
		console.log(result);
		
		
		if (result.over > 0.8){
			if (objGen.over == 1) {
				win++;
			}
			play++;
		}

		if (result.under > 0.8){
			if (objGen.under == 1) {
				win++;
			}
			play++;
		}
	}
	return win/play;
}

function testTrain2(){
	var win = 0;
	var play = 0;

	for (var i = 0; i < 100; i++) {

		var objGen = generatePercent();
		var key = objGen.percent + '%:' + generateSecrect(10);

		console.log(key);
		var hash = md5(key);
		console.log(hash);

		var index = 22;
		hash = hash.substring(0, index) + '**' + hash.substring(index + 2);

		console.log(hash.length);

		var result = network.run(getInput(hash));
		console.log(result);
		
		
		if (result.over > 0.8){
			if (objGen.over == 1) {
				win++;
			}
			play++;
		}

		if (result.under > 0.8){
			if (objGen.under == 1) {
				win++;
			}
			play++;
		}
	}
	return win/play;
}

for (var i = 0; i < 10; i++){
	trainGET();
	if (testTrain() > 0.6){
		network.train(train);
	}
}

console.log(testTrain2());
console.log(network);


// result = brain.likely({r:0.0,g:1,b:0.65}, network);
// console.log(result);
