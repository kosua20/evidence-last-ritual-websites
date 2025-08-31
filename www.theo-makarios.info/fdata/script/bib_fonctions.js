function popup( nom, largeur, hauteur, adresseUrl )
{
	window.open(adresseUrl, nom, "top=" + ((screen.height - hauteur) / 2) + ",left=" + ((screen.width - largeur) / 2) + ",height=" + hauteur + ",width=" + largeur + ",toolbar=no,scrollbars=yes,resizable=yes");
}

function openxxWindow(theURL,winName,features) { //v2.0
  window.open(theURL, winName, features);
}

function openxxWindowFullscreen(theURL,winName,features) { //v2.0
  var hauteur = 5;
  var largeur = 10;
  window.open(theURL, winName, "height=" + ((screen.height - hauteur)) + ",width=913 0" + ",left=0" +  ",toolbar=no,scrollbars=yes,resizable=yes");
}

//Gradual-Highlight image script- By Dynamic Drive
//For full source code and more DHTML scripts, visit http://www.dynamicdrive.com
//This credit MUST stay intact for use

function high(which2){
theobject=which2
highlighting=setInterval("highlightit(theobject)",50)
}
function low(which2){
clearInterval(highlighting)
if (which2.style.MozOpacity)
which2.style.MozOpacity=0.3
else if (which2.filters)
which2.filters.alpha.opacity=30
}

function highlightit(cur2){
if (cur2.style.MozOpacity<1)
cur2.style.MozOpacity=parseFloat(cur2.style.MozOpacity)+0.1
else if (cur2.filters&&cur2.filters.alpha.opacity<100)
cur2.filters.alpha.opacity+=10
else if (window.highlighting)
clearInterval(highlighting)
}
