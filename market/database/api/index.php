<?php
	header("Content-Type: application/json; charset=UTF-8");

	$json = file_get_contents('php://input');
	if (strlen($json) == 0){
		$json = "{\"error\": \"payload is empty\"}";
	}else{
		if (!json_decode($json)) {
			$json = "{\"error\": \"syntax error\"}";
		}else {
			$json = str_replace("\n", "", $json);
			$json = str_replace("\t", "", $json);
		}
	}
	//$json = str_replace("\"", "'", $json);


	// $json = '{"a":1,"b":2,"c":3,"d":4,"e": 3,
	// 	"data": [
	// 		{"name": "a"},
	// 		{"name": "b"}
	// 	]
	// }';

	$obj = json_decode($json);
	// // echo $obj->{'data'}[0]->{'name'};

	// $json = json_encode($obj, JSON_PRETTY_PRINT);
	// echo $json;

	$json = json_encode($obj, JSON_PRETTY_PRINT);
	echo $json;
?>