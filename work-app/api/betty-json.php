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
	$obj = json_decode($json);
	$json = json_encode($obj, JSON_PRETTY_PRINT);
	echo $json;
?>