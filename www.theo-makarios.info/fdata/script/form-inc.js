///////////////////////////////////////////////////////
// bib de gestion des controles des formulaires ///////
//////		ecrit pas julien Romanetto			///////
//////		contact poilade@hotmail.com			///////
///////////////////////////////////////////////////////

function checkMail(champ)
{
if (champ.value.length>0){
	myRegExp = "[-._a-z0-9(]+@[-.a-z0-9]+\.[a-z]";
	var re = new RegExp(myRegExp);
	if(re.test(champ.value)) return true;
	else return false;
}
else return true;
}

function checkURL(champ)
{
if (champ.value.length>0){
	myRegExp = "^[-.a-z0-9]+$";
	var re = new RegExp(myRegExp);
	if(re.test(champ.value)) return true;
	else return false;
}
else return true;
}

function checkChar(champ)
{
if (champ.value.length>0){
	myRegExp = "^[-a-z0-9]+$";
	var re = new RegExp(myRegExp);
	if(re.test(champ.value)) return true;
	else return false;
}
else return true;
}

function checkBOX(champ)
{
return champ.checked;
}

function checkDateFR(champ)
{
if (champ.value.length>0){
	myRegExp = "[0-9]{2}/[0-9]{2}/[0-9]{4}";
	var re = new RegExp(myRegExp);
	if(re.test(champ.value)) return true;
	else return false;
	}
else return true;
}

function ControlePassword(champ)
{
tmp=champ.name.substr(0,champ.name.length-1);
tmp2=eval("document.Form."+tmp+".value");
if(tmp2==champ.value) return true;
else return false;
}

function IsNumeric(ObjVal)
{
	if(ObjVal!=""){
	 var NumericRegExp = "^\\d+$";
	 var regex = new RegExp(NumericRegExp);
	 if (!regex.test(ObjVal))
	 {
	  return false;
	 }
	 else
	 {
	  return true;
	 }
    }
	else return true;
}

function Passcheck(ObjVal)
{
	if(ObjVal!=""){
	 var UnauthRegExp = "[/\\\^\$%_\* ]";
	 var regex = new RegExp(UnauthRegExp);
	 if (regex.test(ObjVal))
	 {
	  return false;
	 }
	 else
	 {
	  return true;
	 }
    }
	else return true;
}
function dump ( obj ) {
	var out = '' ;
	if ( typeof obj == "object" ) {
		for ( key in obj ) {
// 			if ( typeof obj[key] != "function" )
				out += key + ': ' + obj[key] + '<br/>\n' ;
		}
	}
	return out;
}
// controle les champs avec les id commencant par # , aprés le # arrive le type de controle à effectuerascr
// color en colorFalse les champs non valides
function controle(Form,colorInit,colorFalse,msg)
{
  if (msg==undefined) msg = "Les champs encadrés en rouge sont incorrects";
  var i,j = 0;
  var tab,t,tabErreur =new Array();
  //init des couleurs d'origines

	for (i=0;i<document.Form.elements.length;i++)
	{
      champ = document.Form.elements[i];
	  //init des couleurs d'origines
	  if(!(champ.id.indexOf("submit")!=-1)) champ.style.border = "1px solid "+colorInit;
	  if (champ.id.indexOf("#")!=-1){
		 t=champ.id.split("#");
	     for(var k=1;k<t.length;k++)
		 {
		 switch(t[k])
		  {
		  case "EMAIL": if (!checkMail(champ)) {tabErreur[j]=champ;j++;}break;
		  case "CHAR": if(checkChar(champ) < 1) {tabErreur[j]=champ;j++;}break;
		  case "DATEFR": if (!checkDateFR(champ)) {tabErreur[j]=champ;j++;}break;
		  case "NUM": if(!IsNumeric(champ.value)) {tabErreur[j]=champ;j++;}break;
		  case "PASSWORD": if(!Passcheck(champ.value)) {tabErreur[j]=champ;j++;}break;
  		  case "CTRLPASS": if(ControlePassword(champ) < 1) {tabErreur[j]=champ;j++;}break;
		  case "URL": if(checkURL(champ) < 1) {tabErreur[j]=champ;j++;}break;
		  case "CHECKBOX": if(checkBOX(champ) < 1) {/*tabErreur[j]=champ;*/tabErreur[j]= document.getElementsByName(champ.id)[0];j++;}break;
		  case "NOTNULL": if(champ.value.length < 1) {tabErreur[j]=champ;j++;}break;
		  default: break;
		  }
		 }
	 	}
	}
 if(tabErreur.length>0){
	for(i=0;i<tabErreur.length;i++)
		{
		 tabErreur[i].style.border = "1px solid "+colorFalse;
		}
		alert(msg);
		return false;
 }
 else return true;
}
