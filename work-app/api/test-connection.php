<?php
	$servername = "35.232.209.135:3306";
	$username = "root";
	$password = "123456";
	$connectionName = "essential-tower-276316:us-central1:rabbit-mysql";
	$databaseName = "rabbit";
	$socket = '/cloudsql/'.$connectionName;
	// Create connection
	$conn = new mysqli($servername, $username, $password,$databaseName,null,$socket);

	// Check connection
	if ($conn->connect_error) {
	  	$json = "{\"error\": \"Connection failed: " . $conn->connect_error."\"}";
	}else{
		$json = "{\"successfully\": \"Connected successfully\"}";
	}

	// $sql = "CREATE DATABASE ".$databaseName;
	// if ($conn->query($sql) === TRUE) {
	// 	$json = "{\"successfully\": \"Database created successfully\"}";
	// } else {
	// 	$json = "{\"error\": \"Error creating database: " . $conn->error."\"}";
	// }
?>