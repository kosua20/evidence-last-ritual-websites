<?php 
	//Credentials
	$servername = "localhost";
	$username = "root";
	$password = "root";

	// Helpers
	
function lastritual_encode($str)
{
   return addslashes(mb_convert_encoding($str, 'UTF-8', 'Quoted-Printable'));
}

function log_post_to_file($prefix)
{
	$json_string = $prefix . ": " . json_encode($_POST) . "(" . file_get_contents('php://input') . ")\n";
	$file_handle = fopen('log.txt', 'a');
	fwrite($file_handle, $json_string);
	fclose($file_handle);
}

?>