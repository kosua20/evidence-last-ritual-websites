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

<script language="JavaScript">
<!--
var flag=0;
function openCentered(theURL,winName,winWidth,winHeight,features) {
 var w = (screen.width - winWidth)/2;
 var h = (screen.height - winHeight)/2 - 30;
 features = features+',width='+winWidth+',height='+winHeight+',top='+h+',left='+w;
 window.open(theURL,winName,features);
}
function checkForm() {
 document.book.name.value=trim(document.book.name.value);
 document.book.comment.value=trim(document.book.comment.value);
 if(document.book.name.value == "") {
   alert("You forgot to fill in the Name field. Please correct it and re-submit.");
   document.book.name.focus();
   return false;
 }
 if(document.book.comment.value == "") {
   alert("You forgot to fill in the Message field. Please correct it and re-submit.");
   document.book.comment.focus();
   return false;
 }
 if(document.book.comment.value.length<6 || document.book.comment.value.length>1500) {
   alert("Your message is either too short or too long. Please correct it and re-submit.");
   document.book.comment.focus();
   return false;
 }
 flag=1;
 return true;
}
function trim(value) {
 startpos=0;
 while((value.charAt(startpos)==" ")&&(startpos<value.length)) {
   startpos++;
 }
 if(startpos==value.length) {
   value="";
 } else {
   value=value.substring(startpos,value.length);
   endpos=(value.length)-1;
   while(value.charAt(endpos)==" ") {
     endpos--;
   }
   value=value.substring(0,endpos+1);
 }
 return(value);
}
//-->
</script>
<table border="0" cellspacing="0" cellpadding="2" align="center" width="95%">
  <tr>
   <td height="45"><b><font size="4" face="Verdana" color="#0099CC">Sign the Guestbook</font></b></td>
   <td height="45">&nbsp;</td>
 </tr>
 <tr>
   <td width="56%" valign="bottom" class="font2">Fill out the blanks below to sign the guestbook. After you submit your entry, you will be returned to the guestbook. The blanks with (*) represent required fields.</td>
   <td width="44%" align="right" valign="bottom" class="font2"><b><img src="img/return.gif" width="10" height="10">
     <a href="index.php">Back to Guestbook</a> | <img src="img/lock.gif" width="9" height="11"> <a href="admin.php">Administration</a></b></td>
 </tr>
</table>
<form method="post" action="addentry.php" name="book" enctype="multipart/form-data" onsubmit="return checkForm()">
<table border="0" cellspacing="1" cellpadding="4" width="95%" align="center" bgcolor="#000000">
  <tr>
    <td colspan="2" bgcolor="#000000"><b><font size="2" face="Verdana" color="#0099CC">Sign the Guestbook:</font></b></td>
  </tr>
  <tr bgcolor="#000000">
    <td width="25%" class="font1"><img src="img/user.gif" width="16" height="15"> Name*:</td>
    <td><input type="text" name="name" size="42" maxlength="30"></td>
  </tr>
  <tr bgcolor="#000000">
    <td width="25%" class="font1"><img src="img/email.gif" width="15" height="15"> E-mail:</td>
    <td><input type="text" name="email" size="42" maxlength="30"></td>
  </tr>
  <tr bgcolor="#000000">
    <td width="25%" class="font1"><img src="img/location.gif" width="16" height="16"> Location:</td>
    <td><input type="text" name="location" size="42" maxlength="30"></td>
  </tr>
  <tr bgcolor="#000000">
    <td width="25%" class="font1"><img src="img/home.gif" width="16" height="16"> Homepage:</td>
    <td><input type="text" name="url" size="42" value="http://" maxlength="45"></td>
  </tr> 



  <tr bgcolor="#000000">
    <td width="25%" valign="top" class="font1">Your Message*:
    <br><br><div align="left" class="font2">HTML code is enabled<br>Smilies are OFF<br>AGCode is ON<br><br>
     <a href="javascript:openCentered('lang/codes-english.php','codes','640','450','scrollbars=yes')">Show legend</a></div></td>
    <td bgcolor="#000000"><textarea name="comment" cols="41" rows="10" wrap="VIRTUAL"></textarea><br>
     <input type="checkbox" name="private" value="1"> <font size="1" face="Verdana">Private message</font>
    </td>
  </tr>
  <tr bgcolor="#000000">
    <td width="25%">&nbsp;</td>
    <td>
      <input type="submit" name="gb_action" value="Submit" class="input" onclick="if(flag==1) return false;">
      <input type="submit" name="gb_action" value="Preview" class="input" onclick="if(flag==1) return false;">
      <input type="reset" value="Reset" class="input">
    </td>
  </tr>
</table>
</form>
<center><font face="Arial, Helvetica, sans-serif" color="#CCCCCC" size="1"><b>Advanced Guestbook 2.2<br>
  Powered by PHP &amp; MySQL - <a href="http://www.proxy2.de" target="_blank"><font color="#CCCCCC">http://http://www.proxy2.de</font></a></b></font></center>
</body>
</html>
