<?php 
include("credentials.php");
log_post_to_file("MAIL2");

// Create connection
$conn = new mysqli($servername, $username, $password, "last_ritual_db");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Getting the sanitized POST content
$ref = lastritual_encode($_POST["ref"]);
$fromname = lastritual_encode($_POST["fromname"]);
$fromadr = lastritual_encode($_POST["fromadr"]);
$copie = lastritual_encode($_POST["copie"]);
$copie2 = lastritual_encode($_POST["copie2"]);
$subject = lastritual_encode($_POST["subject"]);
$body = lastritual_encode($_POST["body"]);
$adrto = lastritual_encode($_POST["adrto"]);
$delay = $_POST["delai"]; // Don't sanitize, will be converted to number anyway.

// CCs are optional
if(empty($copie)){
	$copie = "NULL";
} else {
	$copie = "'" . $copie . "'";
}
if(empty($copie2)){
	$copie2 = "NULL";
} else {
	$copie2 = "'" . $copie2 . "'";
}
// Convert from minutes to seconds.
$delay = intval($delay)*60.0;

// Getting the username
$sql = "SELECT `username` FROM `users` WHERE `useradress` LIKE '". $adrto . "'";
$result = $conn->query($sql);
if ($result === FALSE ) {
	echo "DEBUG:Error loading username: " . $conn->error;
}
$row = $result->fetch_row();

// Messages table name for the user
$tablename = "messages_" . $row[0];

// Inserting the mail in the table
$sql = "INSERT INTO " . $tablename . " (`ref`, `fromname`, `fromadr`, `copie`, `copie2`, `subject`, `body`, `delai`, `time`, `adrto`) VALUES ('" . $ref . "', '" . $fromname . "', '" . $fromadr . "', " . $copie . ", " . $copie2 . ", '" . $subject . "', '" . $body . "', '" . $delay . ".0', CURRENT_TIMESTAMP, '" . $adrto . "')";
if ($conn->query($sql) === FALSE) {
	echo "DEBUG:Error sending mail: " . $conn->error;
}

// Finished
$conn->close();
// Expected text response
echo 'OK';
?>