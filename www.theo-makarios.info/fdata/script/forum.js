var cookiename = "obforumcookie";
//SetCookie (cookiename,"");
function getCookieVal (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
    endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
      return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break; 
  }
  return null;
}
function SetCookie (name, value) {
  var argv = SetCookie.arguments;
  var argc = SetCookie.arguments.length;
  if (argc > 2){
  	var expires = argv[2];
  }else{
	var expires = new Date(); 
	var today = new Date();
	expires.setTime(today.getTime() + 3600000*24*15);//15j
  }
  var path = (argc > 3) ? argv[3] : null;
  var domain = (argc > 4) ? argv[4] : null;
  var secure = (argc > 5) ? argv[5] : false;
  document.cookie = name + "=" + escape (value) +
    ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
    ((path == null) ? "" : ("; path=" + path)) +
    ((domain == null) ? "" : ("; domain=" + domain)) +
    ((secure == true) ? "; secure" : "");
}
function cookieupdate(str){
	mycookie =  GetCookie (cookiename);
	if (mycookie == null) mycookie=" ";
	//document.write("<br>AVANT: "+mycookie);
	strid = str.split("/");
	if (mycookie.indexOf(strid[0]))  {	rExp = new RegExp (strid[0]+"/[0-9]*;"); mycookie=mycookie.replace(rExp,""); };
	mycookie+=str+";"; //append
	//document.write("<br>APRES: "+mycookie);
	SetCookie (cookiename,mycookie);
}
function incookie(str){
	mycookie =  GetCookie (cookiename);	if (mycookie== null) return false;
	ret = mycookie.indexOf(str);
	//document.write("compare "+str+" with "+mycookie+" "+ret+"<br>");
	if (ret==-1) return false;
}
