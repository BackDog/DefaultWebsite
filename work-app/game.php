<!DOCTYPE html>
<html>
<head>
	<title>Market 5ETOP</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="js/client.js"></script>
	<style type="text/css">
		body {
			font-family: "Century Gothic",メイリオ,Meiryo,ヒラギノ角ゴ\20Pro\20W3,"Hiragino Kaku Gothic Pro",ＭＳ\20Ｐゴシック,Arial,Verdana,sans-serif !important;
			background-color: #222d32;
			color: #001;
		}
	</style>
</head>
<body>
	<div id="main-content" class="main-content" tabindex="0">
		<div id="wall" class="wall"></div>
	</div>
		<div id="your_div" style="height: 0px; width: 300px; overflow-y: scroll;">
		<div id="output"></div>
	</div>
	<input id="input" type="text" name="message">
	<button id="myBtn" onclick="sendMessage()">SEND</button>

	<script type="text/javascript">
		 $('#main-content').on('keydown', function(event) {
		    // console.log(event.keyCode);
		    switch(event.keyCode){
		    	case 37:
		    		left();
		    		break;
		    	case 39:
		    		right();
		    		break;
		    	case 40:
		    		down();
		    		break;
		    	case 38:
		    		jump();
		    		break;
		    	case 32:
		    		attack();
		    		break;
		    	default: idle();
		       //....your actions for the keys .....
		    }
		 });

		var arrayStatus = [
			'idle', 'left', 'right', 'down', 'jump', 'attack'
		];

		var status = 0;
		var player = {
			name: 'Rabbit',
			status: 0,
			positionX: 100,
			positionY: 100,
			gravity: 0.5,
			draft: 2,
			speedX: 0,
			speedY: 0,
			face: 1
		}

		var skills = [];
		var skill = {
			name: 'Rabbit',
			status: 0,
			positionX: 100,
			positionY: 100,
			speedX: 0,
			speedY: 0
		}
		$('#wall').css('left', player.positionX);

		var myVar = setInterval(myTimer, 10);

		var draft = 1;
		var speedX = 0;
		var gravity = 1;
		var speedY = 0;

		var face = 1;
		function myTimer() {
			if(player.speedY < 0.5){
				player.speedX -= player.draft;
			}
			player.speedY += player.gravity;

			if (player.speedX < 1){
				player.speedX = 0;
			}

			player.positionX = (player.face == 1) ? player.positionX - player.speedX:
			player.positionX + player.speedX;
			player.positionY += player.speedY;

			if(player.positionY >= 400){
				player.positionY = 399;
				player.speedY = 0;
			}else{
				player.positionY += player.speedY;
			}

			if(status != 0 && player.speedX == 0 && player.speedY == 0){
				idle();
			}

			$('#wall').css('left', player.positionX);
			$('#wall').css('top', player.positionY);

			for (var i = 0; i < skills.length; i++){
				skills[i].speedX -= skills[i].draft;
				skills[i].speedY += skills[i].gravity;

				if (skills[i].speedX < 1){
					skills[i].speedX = 0;
				}

				skills[i].positionX = (skills[i].face == 1) ? skills[i].positionX - skills[i].speedX:
				skills[i].positionX + skills[i].speedX;
				skills[i].positionY += skills[i].speedY;

				$('#skill-'+skills[i].id).css('left', skills[i].positionX);
				$('#skill-'+skills[i].id).css('top', skills[i].positionY);

				if(skills[i].positionY >= 500){
					destroy(skills[i].id);
				}else if(skills[i].positionX >= 800){
					destroy(skills[i].id);
				}else if(skills[i].positionX < 50){
					destroy(skills[i].id);
				}else{
					skills[i].positionY += skills[i].speedY;
				}
			}
		}

		function idle(){
			status = 0;
			console.log('Idle');
		}
		function left(){
			status = 1;
			player.speedX = 20;
			player.face = 1;
			websocket.send('left');
			console.log('Move Left');
		}
		function right(){
			status = 2;
			player.speedX = 20;
			player.face = 2;
			websocket.send('right');
			console.log('Move Right');
		}
		function down(){
			status = 3;
			websocket.send('down');
			console.log('Down');
		}
		function jump(){
			status = 4;
			player.speedY = -10;
			websocket.send('jump');
			console.log('Jump');
		}
		function attack(){
			status = 5;
			websocket.send('attack');
			addSkill();
			console.log('Attack');
		}
		function addSkill(){
			var s = {
				id: (new Date()).getTime(),
				positionX: player.positionX,
				positionY: player.positionY,
				gravity: 0.1,
				draft: 1,
				speedX: 50,
				speedY: 0,
				face: player.face
			};
			skills.push(s);
			$('#main-content').append('<div id="skill-'+s.id+'" class="skill"></div>');
		}
		function destroy(id){
			var index = -1;
			for (var i = 0; i < skills.length; i++){
				if (skills[i] == id) index = i;
				break;
			}
			skills.splice(index, 1);
		}
	</script>
	<style type="text/css">
		.main-content{
			background-color: black; 
			width: 800px; 
			height: 600px;
			position: relative;
		}
		.wall{
			position: absolute;
			background-color: green;
			width: 50px;
			height: 50px;
		}
		.skill{
			position: absolute;
			background-color: yellow;
			width: 10px;
			height: 10px;
		}
	</style>
</body>
</html>