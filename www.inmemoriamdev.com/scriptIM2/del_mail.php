<?php 
include("credentials.php");


log_post_to_file("DELMAIL");

// Create connection
$conn = new mysqli($servername, $username, $password, "last_ritual_db");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$ref = lastritual_encode($_POST["ref"]);
$adrto = lastritual_encode($_POST["adr_del"]);

// Getting the username based on the email address
$sql = "SELECT `username` FROM `users` WHERE `useradress` LIKE '". $adrto . "'";
$result = $conn->query($sql);
if ($result === FALSE ) {
	echo "DEBUG:Error loading username: " . $conn->error;
}
$row = $result->fetch_row();
// Messages table for the user
$tablename = "messages_" . $row[0];

// Deleting the mail
$sql = "DELETE FROM `" . $tablename . "` WHERE `ref` = '" . $ref . "'";
if ($conn->query($sql) === FALSE) {
	echo "DEBUG:Error deleting mail: " . $conn->error;
}

// Finished
$conn->close();

echo 'OK';
?>