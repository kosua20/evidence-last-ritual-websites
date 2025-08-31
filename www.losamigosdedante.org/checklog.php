<?php 

if(!isset($_POST['ident']) || !isset($_POST['pwd']) || strcasecmp($_POST["ident"], "weiffenbach") != 0 || strcasecmp($_POST["pwd"], "novalis") != 0){
	echo "<script>alert(\"Introduzca su login correcto. Gracias.\")</script><script language=\"javascript\">window.top.location.href=\"index.html\"</script>";
	// Early 'exit'
	return;
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>El C&iacute;rculo de los Amigos de Dante Alighieri</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="Description" content="El Círculo de los Amigos de Dante es una asociación cultural con base en Granada, en España, que reúne a aquellas y aquellos que se interesan por la Italia de ayer y de hoy bajo sus aspectos históricos, artísticos y literarios." />
<meta name="Keywords" content="Dante, Carlos Echevarria Dominguez, Antonio Maura Ribeira" />
<meta name="robots" content="ALL" />
<meta name="copyright" content="Carlos Echevarria Dominguez, Antonio Maura Ribeira" />
<meta name="author" content="Carlos Echevarria Dominguez, Antonio Maura Ribeira" />
<link rel="stylesheet" href="dante.css">
<script language="JavaScript" type="text/javascript">
<!--
function ouvreLien(url,mode) { 
if (mode == "_blank") { 
window.open(url); 
} else if (mode == "_top") { 
window.top.location.href = url; 
} else { 
window.top.parent.frames[mode].location.href = url; 
} 
} 
// -->
</script>


<script language="JavaScript" type="text/javascript">
<!--
function namosw_cell_rollover(cell, classname) {
  if (document.all || document.getElementById) {
    cell.classBackup = cell.className;
    cell.className   = classname;
  }
}

function namosw_cell_rollout(cell)
{
  if (document.all || document.getElementById) {
    cell.className   = cell.classBackup;
  }
}
// -->
</script>
<script type="text/javascript" language="Javascript" >
<!--
function verification()
{
 if(document.formulaire.nom.value == "")  {
   alert("Introduzca su apellido, por favor");
   document.formulaire.nom.focus();
   return false;
  }
   else
 if(document.formulaire.prenom.value == "") {
   alert("Introduzca su nombre, por favor");
   document.formulaire.prenom.focus();
   return false;
  }
   else
 if(document.formulaire.email.value == "") {
   alert("Introduzca su dirección de correo electrónico, por favor");
   document.formulaire.email.focus();
   return false;
  }
  else
 if(document.formulaire.email.value.indexOf('@') == -1) {
   alert("Esto no es una dirección de correo electrónico, verifíquela, por favor");
   document.formulaire.email.focus();
   return false;
  }
  else
    sujetoption = -1
    for (i=0; i<formulaire.sujet.length; i++)
    {
    if(document.formulaire.sujet[i].checked){
    sujetoption = i
    }
   }
    if (sujetoption == -1) {
   alert("Elija en asunto de su mensaje, por favor");
   return false;
  }
  else
 if(document.formulaire.texte.value == "") {
   alert("Introduzca el texto de su mensaje, por favor");
   document.formulaire.texte.focus();
   return false;
  }
return true
}
//-->
</script>
</head>
<body>
<table cellpadding="0" cellspacing="1">
  <tr> 
    <td rowspan="4" class="left" style="background-image: url('pics/bea.gif'); background-repeat: no-repeat; background-position: 50% 67%"><img src="pics/seal.gif" width="128" height="128" alt=""><br><br><br>
      <img src="pics/name.gif" alt="" width="144" height="39" vspace="6"> 
      <table width="130" border="0" cellspacing="1" cellpadding="0" align="center">
        <tr>
          <td class="menu-right">SU VIDA</td>
        </tr>
        <tr>
          <td class="ssmenu">
	    	<table width="100%" border="0" cellspacing="0" cellpadding="3" style="background-color: #e5e5cb; font-size: 10px; font-family: Verdana, Arial, Helvetica, sans-serif;">
              <tr>
                <td onMouseOut="namosw_cell_rollout(this)" onMouseOver="namosw_cell_rollover(this, 'nmsw_sousmenu1')" onClick="ouvreLien('bio.html','_top')">•&nbsp;Su  
                juventud</td>
              </tr>
              <tr>
                <td onMouseOut="namosw_cell_rollout(this)" onMouseOver="namosw_cell_rollover(this, 'nmsw_sousmenu1')" onClick="ouvreLien('bio.html#bio1','_top')">•&nbsp;Su  
                vida política</td> 
              </tr>
              <tr>
                <td onMouseOut="namosw_cell_rollout(this)" onMouseOver="namosw_cell_rollover(this, 'nmsw_sousmenu1')" onClick="ouvreLien('bio.html#bio2','_top')">•&nbsp;Su  
                exilio</td>
              </tr>
            </table>	  	  </td>
        </tr>
        <tr>
          <td class="menu-right">SU OBRA</td>
        </tr>
        <tr>
          <td class="ssmenu">
	    	<table width="100%" border="0" cellspacing="0" cellpadding="3" style="background-color: #e5e5cb; font-size: 10px; font-family: Verdana, Arial, Helvetica, sans-serif;">
              <tr>
                <td onMouseOut="namosw_cell_rollout(this)" onMouseOver="namosw_cell_rollover(this, 'nmsw_sousmenu1')" onClick="ouvreLien('vita.html','_top')">•&nbsp;<em>Vida Nueva</em></td> 
              </tr>
              <tr>
                <td onMouseOut="namosw_cell_rollout(this)" onMouseOver="namosw_cell_rollover(this, 'nmsw_sousmenu1')" onClick="ouvreLien('comedia.html','_top')">•&nbsp;<em>La  
                Divina Comedia</em></td> 
              </tr>
            </table>
		  </td>
        </tr>
      </table>
	</td>
    <td class="menu-right" onMouseOut="namosw_cell_rollout(this)" onMouseOver="namosw_cell_rollover(this, 'nmsw_sousmenu2')" onClick="ouvreLien('index.html','_top')">
    INICIO</td>
    <td class="menu-right" onMouseOut="namosw_cell_rollout(this)" onMouseOver="namosw_cell_rollover(this, 'nmsw_sousmenu2')" onClick="ouvreLien('actualidad.html','_top')">
    ACTUALIDAD</td>
    <td class="menu-right" onMouseOut="namosw_cell_rollout(this)" onMouseOver="namosw_cell_rollover(this, 'nmsw_sousmenu2')" onClick="ouvreLien('actividad.html','_top')">ACTIVIDADES</td>
    <td class="menu-right" onMouseOut="namosw_cell_rollout(this)" onMouseOver="namosw_cell_rollover(this, 'nmsw_sousmenu2')" onClick="ouvreLien('links.html','_top')">
    ENLACES</td>
    <td class="menu-right" onMouseOut="namosw_cell_rollout(this)" onMouseOver="namosw_cell_rollover(this, 'nmsw_sousmenu2')" onClick="ouvreLien('contacto.html','_top')">CONTACTO</td>
  </tr>
  <tr> 
    <td colspan="6" class="title-right"><img src="pics/title.gif" width="500" height="62" alt=""></td>
  </tr>
  <tr> 
    <td colspan="6" class="login"><span style="margin-bottom:0px;"><i>Benvenuto</i>, Hans Weiffenbach&nbsp;&nbsp;&nbsp;</span></td>
  </tr>
  <tr> 
    <td colspan="6" class="right">
	<p>&nbsp;</p>
	<h3>Actualidad</h3>
      <table width="688" border="0" cellpadding="0" cellspacing="0" align="center">
        <tr> 
        	<td>&nbsp;&bull;&nbsp;
        	</td>
          <td class="legende" width="688">
            <p>Nos entristece profundamente compartir el reciente fallecimiento de tres de nuestros respetados socios: Miguel Perez Castillo, Manuel Santamaria Burgos y Joaquim Llorca Serrano. Que descansen en paz.</p></td>
        </tr>
      </table>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p>
	<p>&nbsp;</p></td>
  </tr>
  <tr> 
    <td class="left" style="vertical-align: middle;"><a href="index.html"><img src="pics/es.gif" alt="" width="16" height="12" border="0"></a>&nbsp;<a href="it/index.html"><img src="pics/it.gif" alt="" width="16" height="12" border="0"></a>&nbsp;<a href="uk/index.html"><img src="pics/uk.gif" alt="" width="16" height="12" border="0"></a>&nbsp;<a href="fr/index.html"><img src="pics/fr.gif" alt="" width="16" height="12" border="0"></a></td>
    <td colspan="5" class="border-right"><a href="index.html">INICIO</a> | 
    <a href="actualidad.html">ACTUALIDAD</a> | <a href="actividad.html"> 
    ACTIVIDADES</a> | <a href="links.html">ENLACES</a> | <a href="contacto.html"> 
    CONTACTO</a></td>
  </tr>
</table>
<p>&nbsp;</p>
</body>
</html>
