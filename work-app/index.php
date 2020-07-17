<!DOCTYPE html>
<html>
<head>
	<title>Websocket Test</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<script src="js/client.js"></script>
	<style type="text/css">
		body {
			font-family: "Century Gothic",メイリオ,Meiryo,ヒラギノ角ゴ\20Pro\20W3,"Hiragino Kaku Gothic Pro",ＭＳ\20Ｐゴシック,Arial,Verdana,sans-serif !important;
		}
	</style>
</head>
<body>

	<h2>WebSocket Test</h2>

	<div id="your_div" style="height: 400px; width: 300px; overflow-y: scroll;">
		<div id="output"></div>
	</div>
	<input id="input" type="text" name="message">
	<button id="myBtn" onclick="sendMessage()">SEND</button>

	<div style="border-radius: 50%; height: 60px; width: 60px; background-color: green; position: fixed; bottom: 0; right: 0;"></div>

</body>
</html>