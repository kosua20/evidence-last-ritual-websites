// JAVASCRIPT DE ADMIN-PARTENARIAT.PHP
// Gilles Moncaubeig JFG Networks


// VARIABLES GLOBALES_______________________________________

var p_active = new Array ("0","0","0","0","0");
var p_type   = new Array ("0","0","0","0","0");
var p_colors = new Array ();


var selected = 0;
var expert = 1;
var kelkookeyword = "";
var kelkoocatid = 0;
var kelkooselect = "	<br/><select name=\"kelkoocat\" id=\"kelkoocat\" onChange=\"skip();updatekelkoo();\" style=\"width:200px;\">\
            <option value=\"100164013\">Tout Kelkoo                      </option>\
            <option value=\"100007413\">Cadeaux</option>\
            <option value=\"144601\">Electrom&eacute;nager</option>\
            <option value=\"120501\">Hifi, Photo &amp; Vid&eacute;o</option>\
			\
            <option value=\"110001\">Informatique</option>\
            <option value=\"117901\">Jeu Vid&eacute;o &amp; Jouet</option>\
            <option value=\"169601\">Jouet</option>\
            <option value=\"150401\">Livres, Musique, Film</option>\
            <option value=\"134301\">Maison &amp; Jardin</option>\
			\
            <option value=\"107301\">Mode &amp; Accessoires</option>\
            <option value=\"132801\">Sant&eacute; - Beaut&eacute;</option>\
            <option value=\"163601\">Sport &amp; Loisirs</option>\
            <option value=\"125301\">T&eacute;l&eacute;phonie &amp; ADSL</option>\
			\
            <option value=\"129801\">Vin &amp; Alimentation</option>\
            <option value=\"169901\">Voyages</option>\
          </select>\
          <br>\
          <div id=\"drop\" style=\"display:none;\">\
            <select name=\"kelkoosubcat\" id=\"kelkoosubcat\" onChange=\"subskip();updatekelkoo();\" style=\"width:200px;\">\
		  </select>";


//__________________________________________________________
function showhide(id){
		var txt = document.getElementById('txt_'+id);
		var img = document.getElementById('img_'+id);
		var visible = txt.style.display!='none';
		if (visible){
			txt.style.display='none';
		} else {
			txt.style.display='';
		}
}

//__________________________________________________________
function show(sw,obj) {
	// show/hide the divisions
	if (sw) document.getElementById(obj).style.display="";
	else document.getElementById(obj).style.display="none";
}

//__________________________________________________________
function getcoef(t,g,s){
	//coef couverture des pubs
	//T 	0.5
	//G 	0.4
	//S		0.3
	
	// le coef varie en fonction du nombre de pubs et de leurs types.
	
	var coef = Math.min(1, (t>0)*0.5 + g*0.6 + s*0.2 );
	
	
	return (coef*100);
}

//__________________________________________________________
function refresh(){

//alert (p_active "+p_active+" \n p_type "+p_type);
	// maj des couleurs des blocs où pub active
	for (i=0;i<4;i++){ // 5 lorsque footer activé
		var mydiv = document.getElementById("bloc"+i);
		if (p_active[i]=="1") { mydiv.style.background="#abbbd4"; mydiv.innerHTML="<b>&euro;</b>";}
		else { mydiv.style.background="#d6dde8"; mydiv.innerHTML=""; } ;
		mydiv.style.border="1px solid black";

	}

	//maj bouton activate
	var mydiv = document.getElementById("activate");
	if (p_active[selected]=="1") {
		mydiv.style.background="#d6dde8";
		mydiv.value="Desactiver la pub";
	} else {
		mydiv.style.background="#abbbd4";
		mydiv.value="Activer la publicité sur ce bloc";
	}

	// selection en rouge
	document.getElementById("bloc"+selected).style.border="1px solid red";

	// maj select type
	document.getElementById("type").selectedIndex = p_type[selected];

	//maj checkbox active
	document.getElementById('activate').checked = (p_active[selected]=="1")?"checked":"";

	//maj mode expert
	document.getElementById('expert').value = (expert)?"mode normal":"mode expert";

	// affichage ou non des div
	show(((((p_active[selected]=="1")&&(p_type[selected]=="0"))||((p_active[selected]=="1")&&(p_type[selected]=="0")))&&(expert)),'google-setup');		
	//show(0,'google-setup');		
	show(((p_active[selected]=="1")&&(p_type[selected]=="0"))||((p_active[selected]=="1")&&(p_type[selected]=="0")),'google');
	//show(0,'google');
	show(p_active[selected]=="1",'type');

	//refresh du coef utilisation des pubs
	var t =0;
	var g =0;
	var s =0;
	// on compte les nb de chaque type de pub
	for (i=0;i<5;i++){
		if (p_active[i]=="1") {
			if (p_type[i]=="0") {
				t++;
			}else if (p_type[i]=="1") {
				g++;
			}else if (p_type[i]=="2") {
				s++;
			}
		}
	}



	var mydiv = document.getElementById("coef");
	mydiv.innerHTML="<b>Votre coefficient de reversement est de : "+(getcoef(t,g,s))+" %</b>";

	document.getElementById("partenariat").value = getcoef(t,g,s);


	//refresh des colors


	//refresh du commentaire
	var mydiv = document.getElementById("commentaire");
	if (p_active[selected]==1) {
		if (p_type[selected]==0) {
			mydiv.innerHTML="Note : les publicités texte sont contextuelles. Les annonceurs sont sélectionnés automatiquement à partir du contenu de votre blog.";
		} else if (p_type[selected]==1) {
			mydiv.innerHTML="Note : Le format de la bannière graphique dépend de l'emplacement sélectionné<br/> ";
		} else if (p_type[selected]==2) {
			mydiv.innerHTML="Choisissez un article à promouvoir : <br/><input type=\"text\" id=\"keyword\" style=\"width:200px;\" maxlength=\"32\" value=\""+kelkookeyword+"\" onchange=\"updatekelkoo()\" ><br/><br/>Dans : "+kelkooselect ;
			
			
			// refresh des select a partir de kelkoocatid et tab de corr.
			document.getElementById('kelkoocat').options[corr[kelkoocatid][0]].selected = true;
			skip();
			if (corr[kelkoocatid][1]!=-1) document.getElementById('kelkoosubcat').options[corr[kelkoocatid][1]].selected = true;
			subskip();
		}
	}else{
		mydiv.innerHTML="";
	}


	//refresh de la description du bloc
	var mydiv = document.getElementById("blocdesc");
	switch (selected){
		case (0):mydiv.innerHTML="Gestion de l'en tête";	break;
		case (1):mydiv.innerHTML="Gestion de la colonne de gauche";	break;
		case (2):mydiv.innerHTML="Gestion du corps du blog";	break;
		case (3):mydiv.innerHTML="Gestion de la colonne de gauche";	break;
	}


//alert(p_active[selected]+" "+p_type[selected]);

}

//__________________________________________________________
function updatekelkoo(){
	
	var mydiv = document.getElementById("keyword");
	kelkookeyword = 	mydiv.value;
	var mydiv = document.getElementById("kelkoocatid");
	kelkoocatid = 	mydiv.value;

}

//__________________________________________________________
function ispromovalid(){
	// deux bannieres graphiques en skycraper sont interdites
	if ((p_type[1]==1) && (p_type[3]==1) && (p_active[1]==1) && (p_active[3]==1)){
			alert ("Vous ne pouvez pas afficher une bannière graphique à la fois sur la colonne de gauche et celle de droite");
		 	return false;
	}
	if (((p_type[0]==2)&&(p_active[0]==1))
		+((p_type[1]==2)&&(p_active[1]==1))
		+((p_type[2]==2)&&(p_active[2]==1))
		+((p_type[3]==2)&&(p_active[3]==1))
		+((p_type[4]==2)&&(p_active[4]==1))
		> 1 ){
			alert ("Vous ne pouvez pas afficher plus d'une promotion shopping");
		 	return false;
	}
	

	return true;
}

//__________________________________________________________
function select(numero){
	selected = numero;
	refresh();
}

//__________________________________________________________
function activate(){
	p_active[selected] = (1-(p_active[selected]));
	p_type[selected] = 0; // type par défaut : texte
	if (!ispromovalid()) p_active[selected] = 0; 
	refresh();
}

//__________________________________________________________
function changetype(elem){
	oldval = p_type[selected];
	p_type[selected] = elem.options[elem.selectedIndex].value;
	if (!ispromovalid()) p_type[selected] = oldval;
	refresh();
}

//__________________________________________________________
function changemode(){
	expert = !(expert);
	var template = document.getElementById("menu");
	refresh();
	template.selectedIndex = p_colors[0];
}

//__________________________________________________________
function serialize(){
	var serial = document.getElementById("serial");
	var template = document.getElementById("menu");
	if (expert) template = -1;
	else template = template.selectedIndex;

	serial.value = p_active[0]+","+p_active[1]+","+p_active[2]+","+p_active[3]+","+p_active[4]+"@";
	serial.value += p_type[0]+","+p_type[1]+","+p_type[2]+","+p_type[3]+","+p_type[4]+"@";
	serial.value += template+","+p_colors["border"]+","+p_colors["bg"]+","+
		p_colors["link"]+","+p_colors["text"]+","+p_colors["url"]+"@";
	serial.value += kelkookeyword+","+kelkoocatid+"@"; 
	serial.value += "2214455901"; 

	//alert(serial.value);
	document.formdata.submit();
}

//__________________________________________________________
function unserialize(serial){


	var temp = serial.split("@");
	p_active = temp[0].split(",");
	p_type   = temp[1].split(",");
	var tab = temp[2].split(",");
	p_colors[0]=tab[0];
	p_colors["border"]=tab[1];
	p_colors["bg"]=tab[2];
	p_colors["link"]=tab[3];
	p_colors["text"]=tab[4];
	p_colors["url"]=tab[5];

	if (p_colors[0] == "-1") expert=1;
	
	if (temp.length>3) 
		{ 	var tab = temp[3].split(",");
			kelkookeyword = tab[0];
			kelkoocatid	= tab[1];
	}
	


	var template = document.getElementById("menu");
	template.selectedIndex = p_colors[0];

	var textbox = document.getElementById("borderbox");
	textbox.value=p_colors["border"];
	sf_oc("border",textbox.value);

	textbox = document.getElementById("linkbox");
	textbox.value=p_colors["link"];
	sf_oc("link",textbox.value);

	textbox = document.getElementById("textbox");
	textbox.value=p_colors["text"];
	sf_oc("text",textbox.value);

	textbox = document.getElementById("urlbox");
	textbox.value=p_colors["url"];
	sf_oc("url",textbox.value);

	textbox = document.getElementById("bgbox");
	textbox.value=p_colors["bg"];
	sf_oc("bg",textbox.value);


}


// kelkoo ----------------------------

//electromenager
data2 = new Array();
data2.push({label:"Choisissez la sous catégorie", value:""});
data2.push({label:"Cuisson", value:"100323223"});
data2.push({label:"Froid et Conservation", value:"100323023"});
data2.push({label:"Lavage et Nettoyage", value:"100322923"});
data2.push({label:"Petit électroménager", value:"146801"});

//Hifi, Photo & Vidéo
data3 = new Array();
data3.push({label:"Choisissez la sous catégorie", value:""});
data3.push({label:"Hifi & Son", value:"120701"});
data3.push({label:" - Casque Audio", value:"120901"});
data3.push({label:" - Chaîne Hifi", value:"123201"});
data3.push({label:" - Lecteur MP3 / Multimédia", value:"122701"});
data3.push({label:"Photo & Vidéo", value:"123301"});
data3.push({label:" - Appareil photo numérique", value:"124901"});
data3.push({label:" - Caméscope", value:"123501"});
data3.push({label:"Tv & Cinema", value:"127501"});
data3.push({label:" - Home Cinéma", value:"126701"});
data3.push({label:" - Lecteur DVD", value:"127701"});
data3.push({label:" - Téléviseur 16/9", value:"127401"});
data3.push({label:" - Téléviseur Ecran Plasma", value:"127101"});
data3.push({label:" - Téléviseur LCD", value:"100311823"});
//Informatique
data4 = new Array();
data4.push({label:"Choisissez la sous catégorie", value:""});
data4.push({label:"Composant", value:"110701"});
data4.push({label:"Logiciels et Jeux vidéo", value:"100326623"});
data4.push({label:"Ordinateur PC & Mac", value:"111801"});
data4.push({label:"Ordinateur Portable", value:"113501"});
data4.push({label:"PDA, Organiseur", value:"114501"});
data4.push({label:"Périphérique", value:"112801"});
data4.push({label:" - Ecran, moniteur", value:"114401"});
data4.push({label:" - Imprimante", value:"114901"});
data4.push({label:" - Webcam", value:"116901"});
data4.push({label:"Réseau", value:"100224023"});
data4.push({label:"Stockage", value:"100326323"});
data4.push({label:" - CD/DVD vierge, Disquette, Zip…", value:"115901"});
data4.push({label:" - Clés USB", value:"100260023"});
data4.push({label:" - Disque dur", value:"116501"});
data4.push({label:" - Graveur CD", value:"116201"});
data4.push({label:" - Graveur DVD", value:"100003613"});
data4.push({label:" - Lecteur de DVD", value:"116301"});

//Jeu Vidéo & Jouet
data5 = new Array();
data5.push({label:"Choisissez la sous catégorie", value:""});
data5.push({label:"Console de jeux", value:"112101"});
data5.push({label:"Jeux Vidéo", value:"6513"});
data5.push({label:"Logiciel / CD Rom", value:"117001"});
//Livres, Musique, Film
data7 = new Array();
data7.push({label:"Choisissez la sous catégorie", value:""});
data7.push({label:"Cassette Vidéo/VHS", value:"150101"});
data7.push({label:"CD audio", value:"150701"});
data7.push({label:"DVD", value:"149201"});
data7.push({label:"Livres", value:"100801"});
data7.push({label:"Location de DVD", value:"149801"});
//mode et accessoires
data9 = new Array();
data9.push({label:"Choisissez la sous catégorie", value:""});
data9.push({label:"Pour la Femme ", value:"100331523"});
data9.push({label:"Pour l'Homme", value:"100344523"});
data9.push({label:"Pour l'Enfant", value:"100303423"});
data9.push({label:"Toutes les chaussures", value:"109101"});

//Santé  - Beauté
data10 = new Array();
data10.push({label:"Choisissez la sous catégorie", value:""});
data10.push({label:"Beauté", value:"100327623"});
data10.push({label:" - Maquillage", value:"100046613"});
data10.push({label:" - Produit pour l'hygiène", value:"133901"});
data10.push({label:" - Produit Solaire", value:"100046513"});
data10.push({label:" - Soin Capillaire", value:"133401"});
data10.push({label:" - Soin du Corps", value:"133301"});
data10.push({label:" - Soin du Visage", value:"133001"});
data10.push({label:"Santé", value:"100291623"});
//Sport & Loisirs
data11 = new Array();
data11.push({label:"Choisissez la sous catégorie", value:""});
data11.push({label:"Sport", value:"100327223"});
data11.push({label:"Loisirs", value:"100014813"});
//Téléphonie & ADSL
data12 = new Array();
data12.push({label:"Choisissez la sous catégorie", value:""});
data12.push({label:"Abonnement ADSL", value:"100015713"});
data12.push({label:"Téléphone fixe", value:"100016013"});
data12.push({label:"Téléphone mobile avec abonnement", value:"100010713"});
data12.push({label:"Téléphone Mobile sans abonnement", value:"100020213"});
//Vin & Alimentation
data13 = new Array();
data13.push({label:"Choisissez la sous catégorie", value:""});
data13.push({label:"Alimentation, Gastronomie", value:"130401"});
data13.push({label:"Vin et Alcool", value:"128801"});
data13.push({label:" - Accessoires Vin", value:"100016813"});
data13.push({label:" - Apéritifs", value:"129501"});
data13.push({label:" - Bière", value:"128901"});
data13.push({label:" - Tous les vins étrangers", value:"100020713"});
data13.push({label:" - Tous les vins français", value:"100012113"});
data13.push({label:" - Vin de Bordeaux", value:"100011413"});
data13.push({label:" - Vin de Bourgogne", value:"100011513"});
data13.push({label:" - Whisky et Spiritueux", value:"129201"});
//Voyages
data14 = new Array();
data14.push({label:"Choisissez la sous catégorie", value:""});
data14.push({label:"Billet d'Avion", value:"172201"});
data14.push({label:"Hôtel", value:"170701"});
data14.push({label:"Location de voitures", value:"172301"});
data14.push({label:"Séjour", value:"100020613"});
data14.push({label:"Sports d'hiver", value:"100020413"});


//ma fonction de corespondance 
corr = new Array();
corr[100164013] = 	Array(0,-1); // Array("Tout Kelkoo                      ","") ;	
corr[100007413] = 	Array(1,-1); // Array("Cadeaux","") ;	
corr[144601] = 		Array(2,-1); // Array("Electrom&eacute;nager","") ;
corr[100323223] = 	Array(2,1); // Array("Electrom&eacute;nager","Cuisson") ;
corr[100323023] = 	Array(2,2); // Array("Electrom&eacute;nager","Froid et Conservation") ;
corr[100322923] = 	Array(2,3); // Array("Electrom&eacute;nager","Lavage et Nettoyage") ;
corr[146801] = 		Array(2,4); // Array("Electrom&eacute;nager","Petit électroménager") ;
	
corr[120501] = Array(3,-1); // Array("Hifi, Photo &amp; Vid&eacute;o","") ;	
corr[120701] = Array(3,1); // Array("Hifi, Photo &amp; Vid&eacute;o","Hifi & Son") ;
corr[120901] = Array(3,2); // Array("Hifi, Photo &amp; Vid&eacute;o"," - Casque Audio") ;
corr[123201] = Array(3,3); // Array("Hifi, Photo &amp; Vid&eacute;o"," - Chaîne Hifi") ;
corr[122701] = Array(3,4); // Array("Hifi, Photo &amp; Vid&eacute;o"," - Lecteur MP3 / Multimédia") ;
corr[123301] = Array(3,5); // Array("Hifi, Photo &amp; Vid&eacute;o","Photo & Vidéo") ;
corr[124901] = Array(3,6); // Array("Hifi, Photo &amp; Vid&eacute;o"," - Appareil photo numérique") ;
corr[123501] = Array(3,7); // Array("Hifi, Photo &amp; Vid&eacute;o"," - Caméscope") ;
corr[127501] = Array(3,8); // Array("Hifi, Photo &amp; Vid&eacute;o","Tv & Cinema") ;
corr[126701] = Array(3,9); // Array("Hifi, Photo &amp; Vid&eacute;o"," - Home Cinéma") ;
corr[127701] = Array(3,10); // Array("Hifi, Photo &amp; Vid&eacute;o"," - Lecteur DVD") ;
corr[127401] = Array(3,11); // Array("Hifi, Photo &amp; Vid&eacute;o"," - Téléviseur 16/9") ;
corr[127101] = Array(3,12); // Array("Hifi, Photo &amp; Vid&eacute;o"," - Téléviseur Ecran Plasma") ;
corr[100311823] = Array(3,13); // Array("Hifi, Photo &amp; Vid&eacute;o"," - Téléviseur LCD") ;

corr[110001] = Array(4,-1); // Array("Informatique","") ;	
corr[110701] = Array(4,1); // Array("Informatique","Composant") ;
corr[100326623] = Array(4,2); // Array("Informatique","Logiciels et Jeux vidéo") ;
corr[111801] = Array(4,3); // Array("Informatique","Ordinateur PC & Mac") ;
corr[113501] = Array(4,4); // Array("Informatique","Ordinateur Portable") ;
corr[114501] = Array(4,5); // Array("Informatique","PDA, Organiseur") ;
corr[112801] = Array(4,6); // Array("Informatique","Périphérique") ;
corr[114401] = Array(4,7); // Array("Informatique"," - Ecran, moniteur") ;
corr[114901] = Array(4,8); // Array("Informatique"," - Imprimante") ;
corr[116901] = Array(4,9); // Array("Informatique"," - Webcam") ;
corr[100224023] = Array(4,10); // Array("Informatique","Réseau") ;
corr[100326323] = Array(4,11); // Array("Informatique","Stockage") ;
corr[115901] = Array(4,12); // Array("Informatique"," - CD/DVD vierge, Disquette, Zip…") ;
corr[100260023] = Array(4,13); // Array("Informatique"," - Clés USB") ;
corr[116501] = Array(4,14); // Array("Informatique"," - Disque dur") ;
corr[116201] = Array(4,15); // Array("Informatique"," - Graveur CD") ;
corr[100003613] = Array(4,16); // Array("Informatique"," - Graveur DVD") ;
corr[116301] = Array(4,17); // Array("Informatique"," - Lecteur de DVD") ;

corr[117901] = Array(5,-1); // Array("Jeu Vid&eacute;o &amp; Jouet","") ;	
corr[112101] = Array(5,1); // Array("Jeu Vid&eacute;o &amp; Jouet","Console de jeux") ;
corr[6513] = Array(5,2); // Array("Jeu Vid&eacute;o &amp; Jouet","Jeux Vidéo") ;
corr[117001] = Array(5,3); // Array("Jeu Vid&eacute;o &amp; Jouet","Logiciel / CD Rom") ;

corr[169601] = Array(6,-1); // Array("Jouet","") ;
	
corr[150401] = Array(7,-1); // Array("Livres, Musique, Film","") ;	
corr[150101] = Array(7,1); // Array("Livres, Musique, Film","Cassette Vidéo/VHS") ;
corr[150701] = Array(7,2); // Array("Livres, Musique, Film","CD audio") ;
corr[149201] = Array(7,3); // Array("Livres, Musique, Film","DVD") ;
corr[100801] = Array(7,4); // Array("Livres, Musique, Film","Livres") ;
corr[149801] = Array(7,5); // Array("Livres, Musique, Film","Location de DVD") ;

corr[134301] = Array(8,-1); // Array("Maison &amp; Jardin","") ;
	
corr[107301] = Array(9,-1); // Array("Mode &amp; Accessoires","") ;	
corr[100331523] = Array(9,1); // Array("Mode &amp; Accessoires","Pour la Femme ") ;
corr[100344523] = Array(9,2); // Array("Mode &amp; Accessoires","Pour l'Homme") ;
corr[100303423] = Array(9,3); // Array("Mode &amp; Accessoires","Pour l'Enfant") ;
corr[109101] = Array(9,4);// Array("Mode &amp; Accessoires","Toutes les chaussures") ;

corr[132801] = Array(10,-1); // Array("Sant&eacute; - Beaut&eacute;","") ;	
corr[100327623] = Array(10,1); // Array("Sant&eacute; - Beaut&eacute;","Beauté") ;
corr[100046613] = Array(10,2); // Array("Sant&eacute; - Beaut&eacute;"," - Maquillage") ;
corr[133901] = Array(10,3); // Array("Sant&eacute; - Beaut&eacute;"," - Produit pour l'hygiène") ;
corr[100046513] = Array(10,4); // Array("Sant&eacute; - Beaut&eacute;"," - Produit Solaire") ;
corr[133401] = Array(10,5); // Array("Sant&eacute; - Beaut&eacute;"," - Soin Capillaire") ;
corr[133301] = Array(10,6); // Array("Sant&eacute; - Beaut&eacute;"," - Soin du Corps") ;
corr[133001] = Array(10,7); // Array("Sant&eacute; - Beaut&eacute;"," - Soin du Visage") ;
corr[100291623] = Array(10,8); // Array("Sant&eacute; - Beaut&eacute;","Santé") ;

corr[163601] = Array(11,-1); // Array("Sport &amp; Loisirs","") ;	
corr[100327223] = Array(11,1); // Array("Sport &amp; Loisirs","Sport") ;
corr[100014813] = Array(11,2); // Array("Sport &amp; Loisirs","Loisirs") ;

corr[125301] = Array(12,-1); //Array("T&eacute;l&eacute;phonie &amp; ADSL","") ;
corr[100015713] = Array(12,1); //Array("T&eacute;l&eacute;phonie &amp; ADSL","Abonnement ADSL") ;
corr[100016013] = Array(12,2); //Array("T&eacute;l&eacute;phonie &amp; ADSL","Téléphone fixe") ;
corr[100010713] = Array(12,3); //Array("T&eacute;l&eacute;phonie &amp; ADSL","Téléphone mobile avec abonnement") ;
corr[100020213] = Array(12,4); //Array("T&eacute;l&eacute;phonie &amp; ADSL","Téléphone Mobile sans abonnement") ;
	
corr[129801] = Array(13,-1); //Array("Vin &amp; Alimentation","") ;	
corr[130401] = Array(13,1); //Array("Vin &amp; Alimentation","Alimentation, Gastronomie") ;
corr[128801] = Array(13,2); //Array("VinVin &amp; Alimentation &amp; Alimentation","Vin et Alcool") ;
corr[100016813] = Array(13,3); //Array(""," - Accessoires Vin") ;
corr[129501] = Array(13,4); //Array("Vin &amp; Alimentation"," - Apéritifs") ;
corr[128901] = Array(13,5); //Array("Vin &amp; Alimentation"," - Bière") ;
corr[100020713] = Array(13,6); //Array("Vin &amp; Alimentation"," - Tous les vins étrangers") ;
corr[100012113] = Array(13,7); //Array("Vin &amp; Alimentation"," - Tous les vins français") ;
corr[100011413] = Array(13,8); //Array("Vin &amp; Alimentation"," - Vin de Bordeaux") ;
corr[100011513] = Array(13,9); //Array("Vin &amp; Alimentation"," - Vin de Bourgogne") ;
corr[129201] = Array(13,10);//Array("Vin &amp; Alimentation"," - Whisky et Spiritueux") ;

corr[169901] = Array(14,-1); //Array("Voyages","") ;
corr[172201] = Array(14,1); //Array("Voyages","Billet d'Avion") ;	
corr[170701] = Array(14,2); //Array("Voyages","Hôtel") ;	
corr[172301] = Array(14,3); //Array("Voyages","Location de voitures") ;	
corr[100020613] = Array(14,4); //Array("Voyages","Séjour") ;	
corr[100020413] = Array(14,5); //Array("Voyages","Sports d'hiver") ;	

function rempli(kindex){
	longu=eval("data"+kindex).length;
	for (i=0;i<longu;i++){
		document.getElementById('kelkoosubcat').options[i]=new Option(eval("data"+kindex+"[i].label"),eval("data"+kindex+"[i].value"));
	}
	document.getElementById('drop').style.display = '';
}
function subskip(){
	if(document.getElementById('kelkoosubcat').value!=""){
		skindex=document.getElementById('kelkoosubcat').selectedIndex;
		skindex=skindex.toString();
		document.getElementById('kelkoocatid').value=document.getElementById('kelkoosubcat').value;
		document.getElementById('hsubcat').value=skindex;
	}else{
		skindex=document.getElementById('kelkoosubcat').selectedIndex;
		skindex=skindex.toString();
		//fixe le champ kelkoocatid
		document.getElementById('kelkoocatid').value=document.getElementById('kelkoocat').value;
		document.getElementById('hsubcat').value=0;
	}
}

function skip(){
	kindex=document.getElementById('kelkoocat').selectedIndex;
	kindex=kindex.toString();
	//fixe le champ kelkoocatid
	document.getElementById('kelkoocatid').value=document.getElementById('kelkoocat').value;
	document.getElementById('hcat').value=kindex;
	//vide la sub liste
	e=0;
	while (document.getElementById('kelkoosubcat').options.length>1) {
		document.getElementById('kelkoosubcat').options[e]=null;
	}
	//rempli la sub liste
	switch (kindex) {
		case "2" : rempli("2"); break;
		case "3" : rempli("3"); break;
		case "4" : rempli("4"); break;
		case "5" : rempli("5"); break;
		case "7" : rempli("7"); break;
		case "9" : rempli("9"); break;
		case "10" : rempli("10"); break;
		case "11" : rempli("11"); break;
		case "12" : rempli("12"); break;
		case "13" : rempli("13"); break;
		case "14" : rempli("14"); break;
		default : document.getElementById('drop').style.display = 'none';
	}
}
