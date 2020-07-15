<?php
	header("Content-Type: application/json; charset=UTF-8");
	$jsonData = file_get_contents('php://input');
	if (strlen($jsonData) == 0){
		$jsonData = "{\"error\": \"payload is empty\"}";
	}else{
		if (!json_decode($jsonData)) {
			$jsonData = "{\"error\": \"syntax error\"}";
		}else {
			$jsonData = str_replace("\n", "", $jsonData);
			$jsonData = str_replace("\t", "", $jsonData);
		}
	}

	$obj = json_decode($jsonData);
	if (isset($obj->{'error'}) && ($_SERVER['REQUEST_METHOD'] !== 'GET')){
		$json = json_encode($obj, JSON_PRETTY_PRINT);
		echo $json;
		exit();
	}else{
		if ($_SERVER['REQUEST_METHOD'] === 'GET') {
			$json = "{\"successfully\": \"GET\"}";
		}elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
			$json = "{\"successfully\": \"POST\"}";
		}elseif ($_SERVER['REQUEST_METHOD'] === 'UPDATE') {
			$json = "{\"successfully\": \"UPDATE\"}";
		}elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
			$json = "{\"successfully\": \"DELETE\"}";
		}
	}

	$obj = json_decode($json);
	$json = json_encode($obj, JSON_PRETTY_PRINT);

	// SAVE DATA
	$myfile = fopen("data.json", "w") or die("Unable to open file!");
    fwrite($myfile, $json);
    fclose($myfile);
    // SAVE DATA
    echo $json;
?>