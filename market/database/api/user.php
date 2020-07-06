<?php
	if ($action === "login"){
		$sql = "SELECT * FROM `".$table."`";
		$sql = $sql . " WHERE username='" . $obj->{"username"} ."'";
		$result = $conn->query($sql);
		if (($result) && ($result->num_rows > 0)) {
			// output data of each row
			while($row = $result->fetch_assoc()) {
				$json = json_encode($row);
			}
			$payload = json_decode($json);
			if ($obj->{"password"} === $payload->{"password"} ){
				$json = "{\"successfully\": ".$json."}";
			}else{
				$json = "{\"error\": \"password wrong\"}";
			}
		} else {
			$json = "{\"error\": \"username wrong\"}";
		}
		$conn->close();
	}elseif ($action === "registion"){
		$valueContent = "";
		$key = explode(",", $OBJ_SCHEMA->{$table}->{"insert"});
		foreach ($key as $value) {
			$valueContent = $valueContent. "'".$obj->{$value}."',";
		}
		$valueContent = substr($valueContent, 0, -1);
		$sql = "INSERT INTO ".$table." (".$OBJ_SCHEMA->{$table}->{"insert"}.") VALUES (".$valueContent.")";

		if ($conn->query($sql) === TRUE) {
			$json = "{\"successfully\": \"New ".$table." created successfully\"}";
		} else {
			$json = "{\"error\": \"Error: " . $conn->error . "\"}";
		}
		$conn->close();
	}elseif ($action === "logout"){

	}
?>