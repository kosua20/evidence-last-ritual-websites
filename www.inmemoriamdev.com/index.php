<html>
<head>
	<meta charset="UTF-8">
	<title>Last Ritual Webmail</title>
	<link rel="stylesheet" href="webmail.css" title="WebmailCSS" type="text/css" media="screen" charset="utf-8">
	<script src="search.js" charset="utf-8"></script>
</head>
<body onload="init();">
<div id="loginwin">
<h1>Evidence : The Last Ritual / In Memoriam 2</h1>
<h2>Webmail</h2>
<p>Please login using your username.</p>
<form action="webmail.php" method="post">
	Username: <input type="text" name="userid">
	<input type="submit" value="OK">
</form>
<br>
<h2>Search engine</h2>
Can't find anything online? Try here:
<input type="text" name="query" id="query" value="" oninput="updateQuery();">

<ul id="results">
</ul>
</div>
</body>
</html>
