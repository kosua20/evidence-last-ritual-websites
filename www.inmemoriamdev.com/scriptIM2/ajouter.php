<?php 

include("credentials.php");
log_post_to_file("ADDUSER");

$myfile = fopen("password.txt", "w") or die("Unable to open file!");
$password_lr = $_POST["password"];
fwrite($myfile, $password_lr);
fwrite($myfile, "\n");
fclose($myfile);

// Create connection
$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database if needed
$sql = "CREATE DATABASE IF NOT EXISTS last_ritual_db DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci";
if ($conn->query($sql) === FALSE) {
    echo "DEBUG:Error creating database: " . $conn->error;
}
mysqli_select_db($conn,"last_ritual_db");

// Create users table if needed.
$sql = "CREATE TABLE IF NOT EXISTS `users` ( `username` VARCHAR(128) NOT NULL , `useradress` VARCHAR(128) NOT NULL , PRIMARY KEY (`username`)) ENGINE = InnoDB";
if ($conn->query($sql) === FALSE) {
	echo "DEBUG:Error creating table: " . $conn->error;
}

// User creation info and email
$user_lr = lastritual_encode($_POST["login_temp"]);
$adrto = lastritual_encode($_POST["email_temp"]);
$fromname = lastritual_encode($_POST["fromname"]);
$fromadr = lastritual_encode($_POST["fromadr"]);
$subject = lastritual_encode($_POST["subject"]);
// Insert password in email body
$body = str_ireplace("%PASSWORD%",$password_lr, $_POST["body"]);
$body = lastritual_encode($body);

// Remove user if already exists
$sql = "DELETE FROM `users` WHERE `username`='" . $user_lr . "'";
if ($conn->query($sql) === FALSE) {
	echo "DEBUG:Error removing existing user: " . $conn->error;
}
// Create user again
$sql = "INSERT INTO `users` (`username`, `useradress`) VALUES ('" . $user_lr . "', '" . $adrto . "')";
if ($conn->query($sql) === FALSE) {
	echo "DEBUG:Error creating table: " . $conn->error;
}

// Create messages table for the given user
// If it already exists, we drop it (new game)
$tablename = 'messages_' . $user_lr;
$sql = "DROP TABLE IF EXISTS " . $tablename;
if ($conn->query($sql) === FALSE) {
	echo "DEBUG:Error deleting table: " . $conn->error;
}
// Creating the aforementioned table
$sql = "CREATE TABLE " . $tablename . " ( `ref` VARCHAR(48) NOT NULL , `fromname` VARCHAR(128) NOT NULL , `fromadr` VARCHAR(128) NOT NULL , `copie` VARCHAR(128) NULL , `copie2` VARCHAR(128) NULL , `subject` VARCHAR(256) NOT NULL , `body` TEXT NOT NULL , `delai` FLOAT NOT NULL , `time` TIMESTAMP NOT NULL , `adrto` VARCHAR(128) NOT NULL , PRIMARY KEY (`ref`)) ENGINE = InnoDB CHARACTER SET utf8 COLLATE utf8_general_ci";

if ($conn->query($sql) === FALSE) {
	echo "DEBUG:Error creating table: " . $conn->error;
}

// Create the first mail, with the password
$sql = "INSERT INTO " . $tablename . " ( `ref`, `fromname`, `fromadr`, `copie`, `copie2`, `subject`, `body`, `delai`, `time`, `adrto`) VALUES ('login00', '" . $fromname . "', '" . $fromadr . "', NULL, NULL, '" . $subject . "', '" . $body . "', '0.0', CURRENT_TIMESTAMP, '" . $adrto . "')";

if ($conn->query($sql) === FALSE) {
	echo "DEBUG:Error sending mail: " . $conn->error;
}

// Closing
$conn->close();

// Expected test response
echo 'OK';
?>