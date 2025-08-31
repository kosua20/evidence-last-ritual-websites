<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<title>
	Contact	</title>
	<meta name="description" content="over-blog.com" />
	<meta name="keywords" content="blog, blogue, weblog, webblog, créer un blog, créer blog, site perso, blog gratuit" />
	<meta name="robots" content="index,follow" />
	<meta http-equiv="language" content="fr" />
	<meta content="index,follow,noarchive" name="robots" />
	<link rel="stylesheet" href="/fdata/css/www/struct-1-3.css" />
	<link rel="stylesheet" href="/fdata/css/over-blog.com.css" />

<script language="javascript" type="text/javascript">

		function js_crypto_gen(p_s)
		{
			if (  typeof ( p_s ) != "undefined" ) intS=p_s; else intS=4;
	
			if (intS<1)  intS = 1; if (intS>6)  intS = 6;
	
			intRes=intS;
			intR= Math.round( Math.random() * 32767 );
			intNow= new Date();
			intT = Math.round(intNow.getTime()/1000) ^ (intR * 32768 
	+ intR);

			var hD="0123456789abcdef";
			var charR = hD.substr(intR&15,1);
			var charT = hD.substr(intT&15,1);
				while(intR>15) {intR>>=4;charR=hD.substr(intR&15,1)+charR;}
				while(charR.length<4) charR="0"+charR;
				while(intT>15) {intT>>=4;charT=hD.substr(intT&15,1)+charT;}
				while(charT.length<8) charT="0"+charT;
		
				return intRes+charR+charT;
			}
		
			function reload(Img,Key){
				res=js_crypto_gen(3);
				elt=document.getElementById(Img);
				strTmpSrc=elt.src.slice(0,elt.src.indexOf("?")+1);
				elt.src=strTmpSrc+res;
				document.getElementById(Key).value=res;
			}
		
		</script>
			<script src="/fdata//script/form-inc.js" type="text/javascript"></script>
</head>


<body>
	<div id="general">
	<!-- debut ligne -->

<div class="ligne" id="ligne0">
<div class="clear"></div>

	<div class="box" id="box-0-0">
<div id="globalContact"><h2 class="leftMarged">Formulaire de contact</h2><form action="http://adminv1.over-blog.com/contact.php" method="POST" name="Form" id="Form" class="leftMarged">
<input type="hidden" id="spmk" name ="spmk" value="36e7d7079e4c7" />
				<input type="hidden" value="3" name="a" />
				<input type="hidden" value="40820" name="IdUser" />
				<input type="hidden" value="www.theo-makarios.info" name="URL_RET" />
				<input type="hidden" value="1" name="droit_bottom_link" />
				<table border="0" cellspacing="3" cellpadding="0">
				  <tr>
					<td><strong><label for="Dest">Vous voulez</label></strong></td>
					<td>
						<select id="Dest" name="DestAdr">
								<option  value="0" >Contacter l'auteur du blog</option>
								<option  value="2" >Contacter l'hébergeur</option>
						</select>
				    </td>
				  </tr>	
				  <tr>
					<td><strong><label for="SenderName#NOTNULL">Votre nom: </label></strong></td>
					<td><input name="SenderName" id="SenderName#NOTNULL" type="text" size="30" class="input" /></td>
				  </tr>
				  <tr>
					<td><strong><label for="SenderName#NOTNULL">Votre adresse: </label></strong></td>
					<td><input name="SenderMail" id="SenderMail#NOTNULL#EMAIL" type="text" size="30" class="input"  /></td>
				  </tr>
				  <tr>
					<td><strong><label for="MessageSubject#NOTNULL">Sujet du mail: </label></strong></td>
					<td><input name="MessageSubject" id="MessageSubject#NOTNULL" type="text" size="30" class="input"  /></td>
				  </tr>
				  <tr>
					<td><strong><label for="Message#NOTNULL">Message: </label></strong></td>
					<td><textarea name="Message" id="Message#NOTNULL" cols="30" rows="10" class="input" ></textarea></td>
				  </tr>
				  <tr>
				  	<td></td>
					<td ><img border="0" name="alnum" src="http://admin.over-blog.com/crypto?36e7d7079e4c7" id="alnum"  alt="" />  <a href="#" onclick="reload('alnum','spmk');"><img src="/fdata/pics/share/refresh24.gif" alt="Je n'arrive pas à lire le texte" /></a></td>
				  </tr>
				  <tr>
					<td><strong><label for="texteImage#NOTNULL">Texte de l'image ci-dessus: </label></strong></td>
					<td><input name="texteImage" id="texteImage#NOTNULL" type="text" size="8" maxlength="8" class="input"  /><font class="lowimportance">Attention aux majuscules</font></td>
				  </tr>
				  <tr>
					<td></td><td><input type="submit" name="Submit" id="submit" value="Envoyer" class="submit"  onclick="return controle(this,'#D8D7D7','red','Les champs encadrés en rouge sont incorrects');" /></td>
				  </tr>
				</table>
		</form>
</div><!-- fin global contact-->	</div>
</div>

<!-- fin ligne -->

<div class="clear"></div>

	</div>
<script type="text/javascript"><!--
	CM_RUBRIQUE = "other";
	CM_CLIENT = "overblog";
	CM_SECTION1 = "hit-contact";
	// --></script>
	<script type="text/javascript" src="http://js.cybermonitor.com/overblog.js">
	</script>
	<noscript>
	<img src="http://stat3.cybermonitor.com/overblog_v?R=other&S=total;hit-contact" alt=""/>
	</noscript></body>
</html>




