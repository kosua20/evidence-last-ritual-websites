<?php 

if(!isset($_POST['login']) || !isset($_POST['pwd']) || strcasecmp($_POST["login"], "jessica") != 0 || strcasecmp($_POST["pwd"], "remember") != 0){
	echo "<script language=\"javascript\">window.top.location.href=\"../index.html\"</script>";
	// Early 'exit'
	return;
}
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
</head>
<body bgcolor="000000">
<p style="text-align: center; font-size: 40px; color: white; margin-top: 20%;">?</p>
</body>
</html>
