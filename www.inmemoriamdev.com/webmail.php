<html>
<head>
    <meta charset="UTF-8">
	<title>Last Ritual Webmail</title>
	<link rel="stylesheet" href="webmail.css" title="WebmailCSS" type="text/css" media="screen" charset="utf-8">
</head>
<body>
<h2 id="header">Webmail - Evidence : The Last Ritual / In Memoriam 2</h2>
<?php 
include("scriptIM2/credentials.php");

// Create connection
$conn = new mysqli($servername, $username, $password, "last_ritual_db");
if ($conn->connect_error) {

    echo "<h3>ERROR</h3><p>We couldn't load the database associated with your username. Please check that your username is correct, and that the server/database is up and running.";

} else {

    // Getting the message table based on username
    $user_lr = lastritual_encode($_POST["userid"]);
    $tablename = "messages_" . $user_lr;

    echo "<form action=\"webmail.php\" method=\"post\" id=\"userreload\">User: " . $_POST["userid"] . " <input type=\"hidden\" name=\"userid\" value=\"" . $_POST["userid"] . "\"><input type=\"submit\" value=\"Refresh\"></form>";

    // Retrieve all past messages.
    $sql = "SELECT fromname, fromadr, subject, body, time, delai, FROM_UNIXTIME(UNIX_TIMESTAMP(time) + delai) FROM " . $tablename . " WHERE UNIX_TIMESTAMP(time) + delai <= UNIX_TIMESTAMP() ORDER BY UNIX_TIMESTAMP(time) + delai DESC";

    if ($result = $conn->query($sql)) {

        echo "<table>\n";
        /* fetch object array */
        while ($row = $result->fetch_row()) {
            echo "<tr>";
            echo "<td class=\"infos\"><em>From:</em><br> " . utf8_encode($row[0]) . "<br><br><em>Adress:</em> <br>" .utf8_encode($row[1]) ."<br><br><em>Date:</em> <br>" .utf8_encode($row[6]) ."<br><br><em>Subject:</em> <br>" .utf8_encode($row[2]) ."</td>";
            echo "<td>" . nl2br(utf8_encode($row[3])) . "</td>";
            echo "</tr>\n";
        }

        /* free result set */
        $result->close();
        echo "</table>\n";
    } else {

        echo "<h3>ERROR</h3><p>We couldn't load the messages associated with your username. Please check that your username is correct, and that the server/database is up and running.";

    }
}


// Finished
$conn->close();
?>
</body>
</html>
