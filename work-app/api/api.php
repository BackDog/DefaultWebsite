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
	}

	include("test-connection.php");
	$obj = json_decode($json);

	$TABLE_SCHEMA = '{
		"User": {
			"create": "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,firstname VARCHAR(30),lastname VARCHAR(30),username VARCHAR(30) NOT NULL,password VARCHAR(30) NOT NULL,email VARCHAR(50),steamID VARCHAR(50),partnerID VARCHAR(50),reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
			"insert": "firstname,lastname,username,password,email,steamID,partnerID"
		},
		"Contact": {
			"create": "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,username VARCHAR(30) NOT NULL,title VARCHAR(50), content VARCHAR(50),reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
			"insert": "username,title,content"
		}
	}';
	$OBJ_SCHEMA = json_decode($TABLE_SCHEMA);

	if ($obj->{'successfully'}){
		$obj = json_decode($jsonData);
		if (isset($_GET["type"])){
			$table = $_GET["type"];
		}else{
			$json = "{\"error\": \"Type not exists\"}";
			$obj = json_decode($json);
			$json = json_encode($obj, JSON_PRETTY_PRINT);
			echo $json;
			exit();
		}
		if ($conn->query("DESCRIBE ".$table) === TRUE) {
		    // my_table exists
		}else{
			if (isset($OBJ_SCHEMA->{$table})){
				$conn->query("CREATE TABLE ".$table." (".$OBJ_SCHEMA->{$table}->{"create"}.")");
			}else{
				$json = "{\"error\": \"Type not exists\"}";
				$obj = json_decode($json);
				$json = json_encode($obj, JSON_PRETTY_PRINT);
				echo $json;
				exit();
			}
		}
		if ($_SERVER['REQUEST_METHOD'] === 'GET') {
			$sql = "SELECT * FROM `".$table."`";
			if(isset($_GET["id"])){
				$sql = $sql . " WHERE id='" . $_GET["id"] ."'";
				$result = $conn->query($sql);
				if (($result) && ($result->num_rows > 0)) {
				  // output data of each row
				  while($row = $result->fetch_assoc()) {
				  	$json = json_encode($row);
				  }
				  	$json = "{\"successfully\": ".$json."}";
				} else {
					$json = "{\"error\": \"0 results\"}";
				}
				$conn->close();
			}else{
				$array = array();
				$result = $conn->query($sql);
				if (($result) && ($result->num_rows > 0)) {
				  	while($row = $result->fetch_assoc()) {
				 		array_push($array, $row);
					}
					$json = json_encode($array);
				} else {
					$json = json_encode($array);
				}
				$json = "{\"successfully\": ".$json."}";
				$conn->close();
			}
		}elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
			if (isset($_GET["action"])){
				$action = $_GET["action"];
				if ($table === "User"){
					include("user.php");
				}else{
					$json = "{\"error\": \"Type not exists\"}";
					$obj = json_decode($json);
					$json = json_encode($obj, JSON_PRETTY_PRINT);
					echo $json;
					exit();					
				}
			}else{
				$json = "{\"error\": \"Action not exists\"}";
				$obj = json_decode($json);
				$json = json_encode($obj, JSON_PRETTY_PRINT);
				echo $json;
				exit();
			}
		}elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
			if($_GET["id"]){
				$valueContent = "";
				$key = explode(",", $OBJ_SCHEMA->{$table}->{"insert"});
				foreach ($key as $value) {
			    	if (isset($obj->{$value})){
			    		$valueContent = $valueContent.$value."='".$obj->{$value}."',";	
			    	}
				}
				$valueContent = substr($valueContent, 0, -1);
				$sql = "UPDATE ".$table." SET ".$valueContent." WHERE id='" . $_GET["id"] ."'";
				if ($conn->query($sql) === TRUE) {
				  $json = "{\"successfully\": \"Record updated successfully.\"}";
				} else {
				  $json = "{\"error\": \"Error updating record: " . $conn->error.".\"}";
				}

				$conn->close();
			}else{
				$json = "{\"error\": \"Missing id.\"}";
			}
		}elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
			if($_GET["id"]){
				$sql = "DELETE FROM ".$table." WHERE id='" . $_GET["id"] ."'";
				if ($conn->query($sql) === TRUE) {
				  $json = "{\"successfully\": \"Record deleted successfully.\"}";
				} else {
				  $json = "{\"error\": \"Error deleting record: " . $conn->error.".\"}";
				}

				$conn->close();
			}else{
				$json = "{\"error\": \"Missing id.\"}";
			}
		}
	}

	$obj = json_decode($json);
	$json = json_encode($obj, JSON_PRETTY_PRINT);
	echo $json;
?>