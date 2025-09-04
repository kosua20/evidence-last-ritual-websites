<html>
<head>
<title>Guestbook</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="keywords" content="guestbook, php, script, mySQL, free, advance">
<style type="text/css">
<!--
.font1 {  font-family: Verdana; font-size: 10px; color: #0099CC }
.font2 {  font-family: Verdana; font-size: 9px; color: #0099CC }
.font3 { font-family: Arial, Helvetica, sans-serif; font-size: 7.5pt; color: #0099CC; font-weight: bold}
.select {  font-family: Verdana; font-size: 9pt}
.input {  font-family: Verdana; font-size: 9pt}
-->
</style>
</head>
<body bgcolor="#000000" link="#990066" vlink="#990066">

<table border="0" cellspacing="0" cellpadding="2" align="center" width="95%">
  <tr>
    <td height="45" width="55%"><b><font size="4" face="Verdana" color="#0099CC">Guestbook - Administration</font></b></td>
    <td height="45" width="45%">&nbsp;</td>
  </tr>
  <tr>
    <td width="50%" valign="bottom" class="font2">Guestbook - Administration Centre<br>Before you can proceed you have to enter a valid name and password!</td>
    <td width="50%" align="right" valign="bottom" class="font2"> <b><img src="img/return.gif" width="10" height="10"> <a href="index.php">Back to Guestbook</a>
     | <img src="img/sign.gif" width="9" height="12"> <a href="addentry.php">Sign the Guestbook</a></b></td>
  </tr>
</table>
<form method="post" action="admin.php">
  <table bgcolor="#000000" border="0" cellspacing="1" cellpadding="5" align="center" width="95%">
    <tr bgcolor="#000000">
      <td colspan="2" class="font1"><b><font color="#0099CC">Please enter a valid username and password:</font></b></td>
    </tr>
    <tr bgcolor="#000000">
      <td width="30%" class="font1">Username:</td>
      <td width="70%"><input type="text" name="username" size="30"></td>
    </tr>
    <tr bgcolor="#000000">
      <td width="30%" class="font1">Password:</td>
      <td width="70%"><input type="password" name="password" size="30">
        <input type="hidden" name="enter" value="1">
      </td>
    </tr>
    <tr bgcolor="#000000">
      <td width="30%">&nbsp;</td>
      <td width="70%"><input type="submit" value="Submit" class="input"></td>
    </tr>
  </table>
</form>
<center><font face="Arial, Helvetica, sans-serif" color="#CCCCCC" size="1"><b>Advanced Guestbook 2.2<br>
  Powered by PHP &amp; MySQL - <a href="http://www.proxy2.de" target="_blank"><font color="#CCCCCC">http://http://www.proxy2.de</font></a></b></font></center>
</body>
</html>
